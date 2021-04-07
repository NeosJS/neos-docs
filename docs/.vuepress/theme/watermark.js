import Vue from 'vue'
export const isServer = Vue.prototype.$isServer

const watermark = {}

const setWatermark = (args)=>{
  if(isServer) return
	//声明一个怪异一点的变量，确保id的唯一性
  let id = 'noesjs.com';
  let xIndex = 15;//绘制文本的 x 坐标位置
  let yIndex = 65;//绘制文本的 y 坐标位置
  let xInterval = 25//有多个参数时的行间间隔
  if (document.getElementById(id) !== null) {
    document.getElementById('app').removeChild(document.getElementById(id));
    // document.body.removeChild(document.getElementById(id));
  }
  //利用canvas绘制水印信息
  let can = document.createElement('canvas');
  can.width = 250;
  can.height = 150;
  let cans = can.getContext('2d');
  cans.rotate(-20 * Math.PI / 180);
  cans.font = '16px Vedana';
  // ziti yanse
  cans.fillStyle = 'rgba(0, 0, 0, 0.05)';
  cans.textAlign = 'left';
  cans.textBaseline = 'Middle';
  for(let i = 0;i<args.length;i++){
    cans.fillText(args[i], xIndex , yIndex); //绘制水印文案
    yIndex+=xInterval ;//设置每行间隔
  }
  //创建div用于显示
  let div = document.createElement('div');
  div.id = id;
  div.style.pointerEvents = 'none';
  div.style.top = '70px';
  div.style.left = '10px';
  div.style.position = 'fixed';
  div.style.zIndex = '100000';
  div.style.width = document.documentElement.clientWidth - 50 + 'px';
  div.style.height = document.documentElement.clientHeight - 50 + 'px';
  //div承载水印显示
  div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat';
  // document.body.appendChild(div);
  document.getElementById('app').appendChild(div);
  return id;
}

watermark.set = function(){
  if(isServer) return
	let args =Array.prototype.slice.apply(arguments);
  let id = setWatermark(args);
  // 检测如果水印被去掉了，自动给加上
  setInterval(function(){
    if (document.getElementById(id) === null) {
      id = setWatermark(args);
    }
  }, 500)
  //在窗口大小改变之后,自动触发加水印事件
  window.onresize = function(){
    setWatermark(args);
  }
}
export default watermark
