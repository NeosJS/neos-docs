const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const padZero = (num, targetLength = 2) => {
  let str = num + "";
  while (str.length < targetLength) {
    str = "0" + str;
  }
  return str;
};
export const parseTimeData = time => {
  const days = Math.floor(time / DAY);
  const hours = Math.floor((time % DAY) / HOUR);
  const minutes = Math.floor((time % HOUR) / MINUTE);
  const seconds = Math.floor((time % MINUTE) / SECOND);
  const milliseconds = Math.floor(time % SECOND);

  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds
  };
};

export const parseFormat = (format, timeData) => {
  const { days } = timeData;
  let { hours, minutes, seconds, milliseconds } = timeData;

  if (format.indexOf("DD") === -1) {
    hours += days * 24;
  } else {
    format = format.replace("DD", padZero(days));
  }

  if (format.indexOf("HH") === -1) {
    minutes += hours * 60;
  } else {
    format = format.replace("HH", padZero(hours));
  }

  if (format.indexOf("mm") === -1) {
    seconds += minutes * 60;
  } else {
    format = format.replace("mm", padZero(minutes));
  }

  if (format.indexOf("ss") === -1) {
    milliseconds += seconds * 1000;
  } else {
    format = format.replace("ss", padZero(seconds));
  }

  return format.replace("SSS", padZero(milliseconds, 3));
};

export const isSameSecond = (time1, time2) => {
  return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
};
let prev = Date.now();
const fallback = fn => {
  const curr = Date.now();
  const ms = Math.max(0, 16 - (curr - prev));
  const id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
};

const root = window;

const iRaf = root.requestAnimationFrame || fallback;

const iCancel = root.cancelAnimationFrame || root.clearTimeout;

export const raf = fn => {
  return iRaf.call(root, fn);
};

// double raf for animation
export const doubleRaf = fn => {
  raf(() => {
    raf(fn);
  });
};

export const cancelRaf = id => {
  iCancel.call(root, id);
};
