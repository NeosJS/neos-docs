


let stepRing = 60
const countDownTime = 60
const animationStep = 60
const width = 580
const height = 580
const lineWidth =  40
const pointerWidth = 30
const pointerMoveTo = 140
const background = ['rgba(255, 170, 10, .3)','rgba(255, 170, 10, .3)']
const borderColor = ['rgba(255, 170, 10, 1)','rgba(255, 170, 10, 1)']
const shorterColor = '#ffaa1a'
const longerColor = '#ffaa1a'

const  clockCountdown = ()=>{
  const canvas = document.getElementById('canvas')
  canvas.setAttribute('width',width)
  canvas.setAttribute('height',height)
  const ctx = canvas.getContext('2d');
  stepRing ++
  const rotate = stepRing * ( Math.PI / (countDownTime * animationStep / 2))

  //绘制表盘底色
  ctx.save();
  ctx.clearRect(0, 0, width, height);
  ctx.translate(width/2, height/2);
  ctx.rotate(-Math.PI/2); //将坐标轴逆时针旋转90度，x轴正方向对准12点方向
  const backgroundLingrad = ctx.createLinearGradient(width/2, 0, -width/2, 0);
  backgroundLingrad.addColorStop(0, background[0]);
  backgroundLingrad.addColorStop(1, background[1]);
  ctx.fillStyle = backgroundLingrad;
  ctx.beginPath();
  ctx.arc(0, 0, width/2, 0, Math.PI * 2, true);
  ctx.fill();


  ctx.save();
  for (var i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 170, 10, 1)';
    ctx.lineWidth = 5;
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(width/2 - lineWidth + 2, 0);
    ctx.lineTo(width/2 - lineWidth - 8, 0);
    ctx.lineCap = 'round'
    ctx.stroke();
  }
  ctx.restore();


  ctx.save();
  ctx.beginPath();
  for (i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 170, 10, 0.6)';
      ctx.lineWidth = 2;
      ctx.moveTo(width/2 - lineWidth + 3, 0);
      ctx.lineTo(width/2 - lineWidth - 16, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  //时间文字
  ctx.save();
  ctx.rotate(Math.PI/2);
  ctx.beginPath();
  ctx.fillStyle = '#FFF3DC';
  ctx.font = '40px Microsoft yahei';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('😀', width/2-70, 0);
  ctx.fillText('😁', 0, width/2-60);
  ctx.fillText('😜', - (width/2-70), 0);
  ctx.fillText('😝', 0, -(width/2-70));
  ctx.restore();


  // ctx.save();
  // ctx.rotate(Math.PI/2);
  // ctx.beginPath();
  // ctx.fillStyle = '#ffaa0a';
  // ctx.font = '20px Microsoft yahei';
  // ctx.textAlign = 'center';
  // ctx.textBaseline = 'middle';
  // ctx.fillText('剩余 ' + (countDownTime - Math.floor(stepRing/60))+' 秒' , 0, 180);
  // ctx.restore();

  // 短针
  ctx.save();
  ctx.rotate(0);
  ctx.lineWidth = pointerWidth;
  ctx.strokeStyle = shorterColor;
  ctx.beginPath();
  ctx.lineCap = 'round'
  ctx.moveTo(0, 0);
  ctx.lineTo(pointerMoveTo, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = pointerWidth;
  ctx.fillStyle = 'rgba(255, 170, 10, 1)';
  ctx.moveTo(0, 0);
  ctx.lineTo(-10, 0);
  ctx.stroke();
  ctx.restore();

  // 长针
  ctx.save();
  ctx.rotate(rotate);
  ctx.beginPath();
  ctx.lineWidth = pointerWidth;
  ctx.strokeStyle = stepRing !== countDownTime * animationStep ? longerColor : '#FFC02A';
  ctx.lineCap = 'round'
  ctx.moveTo(0, 0);
  ctx.lineTo(pointerMoveTo + 30, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.lineWidth = pointerWidth;
  ctx.fillStyle = 'rgba(255, 170, 10, .3)';
  ctx.moveTo(0, 0);
  ctx.lineTo(-18, 0);
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = 'rgba(255, 170, 10, .3)';
  ctx.arc(0, 0, 13, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = 'rgba(255, 255, 255, .2)';
  ctx.lineWidth = 4;
  ctx.arc(0, 0, 8, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.restore();

  //边框
  ctx.beginPath();
  ctx.lineWidth = lineWidth - 4;
  const borderLingrad= ctx.createLinearGradient(width/2, 0, -width/2, 0);
  borderLingrad.addColorStop(0, borderColor[0]);
  borderLingrad.addColorStop(1, borderColor[1]);
  ctx.strokeStyle = borderLingrad;
  ctx.arc(0,0,width/2 - lineWidth/2.2,0,Math.PI*2,true);
  ctx.stroke();
  ctx.restore();


  const d = window.requestAnimationFrame(clockCountdown);
  if(stepRing === countDownTime * animationStep) {
    window.cancelAnimationFrame(d)
  }
}


clockCountdown()
