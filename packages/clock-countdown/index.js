import NeClockCountdown from "./src/main.vue";

NeClockCountdown.install = Vue => {
  Vue.component(NeClockCountdown.name, NeClockCountdown);
};

export default NeClockCountdown;
