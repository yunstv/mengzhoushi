/* eslint-disable */
function date(clock){
  var week = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  updateTime();
  function updateTime(cds) {
    var cd = cds || new Date();
    clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
  };
  function zeroPadding(num, digit) {
    var zero = '';
    for (var i = 0; i < digit; i++) {
      zero += '0';
    }
    return (zero + num).slice(-digit);
  }
  var myCanvas = document.getElementById("myCanvas");//获取画布
  var cxt = myCanvas.getContext("2d");//给画布创建2d显示环境
  var numbersl = 112;
  var numberst = 150;
  date_show();
  //第一根线
  var aa = 50;
  var za = 2;
  var ab = 150;
  var zb = 2;
  var ac = 80;
  var zc = 2;
  //第二根线
  var ca = 60;
  var ya = 2;
  var cb = 160;
  var yb = 2;
  var cc = 90;
  var yc = 2;
  //第三根线
  var da = 70;
  var xa = 2;
  var db = 170;
  var xb = 2;
  var dc = 100;
  var xc = 2;
  //第四根线
  var ea = 80;
  var ta = 2;
  var eb = 180;
  var tb = 2;
  var ec = 110;
  var tc = 2;
  //第五根线
  var fa = 90;
  var sa = 2;
  var fb = 190;
  var sb = 5;
  var fc = 110;
  var sc = 2;
  setInterval(date_show, 100);//定时器每秒执行一次目的是让秒针同步
  function date_show() {
    var now = new Date();//获取当地时间
    updateTime(now);
    var hour = now.getHours();//获取当前时间的小时数
    var min = now.getMinutes();//获取当前时间的分钟数
    var sec = now.getSeconds();//获取当地时间的秒数
    hour += parseFloat(min / 60);//
    hour = hour > 12 ? hour - 12 : hour;//将24小时转化为12小时制
    cxt.clearRect(0, 0, 400, 400);//清除画布
    //================  绘制表盘   ===================
    cxt.strokeStyle = "#333" || "red";//设定绘制的颜色
    cxt.fillStyle = "#333" || "#650665";//设定填充的颜色
    cxt.beginPath();
    cxt.lineWidth = 10;//设定绘制的线宽
    cxt.shadowColor = "#b7b7b7" || "#f546cd";//设定阴影的颜色
    cxt.shadowBlur = 3;//设定阴影的模糊度
    cxt.arc(numbersl, numberst, 100, 0, 2 * Math.PI);//设置圆心点，元的半径为200，起始点为0度，结束点为360度
    cxt.stroke();//绘制上面的圆
    cxt.beginPath();
    cxt.strokeStyle = "#FFF" || "yellow";
    cxt.lineWidth = 5;
    cxt.arc(numbersl, numberst, 100, 0, 2 * Math.PI);
    cxt.stroke();
    //=====================  刻度     =========================
    for (var i = 0; i <= 60; i++) {
      if (i % 5 == 0) {
        cxt.save();//储存之前的绘画环境
        cxt.translate(numbersl, numberst)//将中心点移动至画布的中心点
        cxt.rotate(i * 6 * Math.PI / 180);//旋转绘画  角度i*60 度
        cxt.beginPath();//重置绘画环境
        cxt.strokeStyle = "#636363" || "red";//设定绘画颜色
        cxt.lineWidth = 4;//设置绘画线宽
        cxt.moveTo(0, -92)//设定线的起始点
        cxt.lineTo(0, -70)//设定线的结束
        cxt.closePath();//回到起点
        cxt.stroke();//绘制
        cxt.restore();//提取指定点储存的绘画环境
      } else {
        cxt.save();//储存之前的绘画环境
        cxt.translate(numbersl, numberst)//将中心点移动至画布的中心点
        cxt.rotate(i * 6 * Math.PI / 180);//旋转绘画  角度i*60 度
        cxt.beginPath();//重置绘画环境
        cxt.strokeStyle = "#e4e4e4" || "darkorange";//设定绘画颜色
        cxt.lineWidth = 2.5;//设置绘画线宽
        cxt.moveTo(0, -92)//设定线的起始点
        cxt.lineTo(0, -80)//设定线的结束
        cxt.closePath();//
        cxt.stroke();//绘制
        cxt.restore();//提取指定点储存的绘画环境
      }

    }
    for (var i = 1; i < 13; i++) {//循环写入数字
      cxt.save();//储存之前的绘画环境
      cxt.translate(numbersl, numberst);//吧0.0点移到表盘中心
      cxt.beginPath();//创建新的绘画环境
      cxt.font = "14px 微软雅黑";
      switch (i) {//盘点语句
        case 1://当i为1时
          // cxt.fillText(i, 66, -116)
          cxt.fillText(i, 26, -46);//填充一个文本，内容为i当前的值  后面的是位置
          break;
        case 2://当i为1时
          cxt.fillText(i, 49, -25);//填充一个文本，内容为i当前的值  后面的是位置
          break;
        case 3://当i为1时
          cxt.fillText(i, 58, 5);//填充一个文本，内容为i当前的值  后面的是位置
          break;
        case 4://当i为1时
          cxt.fillText(i, 49, 35);//填充一个文本，内容为i当前的值  后面的是位置
          break;
        case 5://当i为1时
          cxt.fillText(i, 26, 55);//填充一个文本，内容为i当前的值  后面的是位置
          break;
        case 6://当i为1时
          cxt.fillText(i, -4, 63);//填充一个文本，内容为i当前的值  后面的是位置
          break;
        case 7://当i为1时
          cxt.fillText(i, -38, 55);//填充一个文本，内容为i当前的值  后面的是位置
          break;
        case 8://当i为1时
          cxt.fillText(i, -55, 35);//填充一个文本，内容为i当前的值  后面的是位置
          break;
        case 9://当i为1时
          cxt.fillText(i, -65, 5);//填充一个文本，内容为i当前的值  后面的是位置
          break;
        case 10://当i为1时
          cxt.fillText(i, -55, -25);//填充一个文本，内容为i当前的值  后面的是位置
          break;
        case 11://当i为1时
          cxt.fillText(i, -35, -45);//填充一个文本，内容为i当前的值  后面的是位置
          break;
        case 12://当i为1时
          cxt.fillText(i, -8, -55);//填充一个文本，内容为i当前的值  后面的是位置
          break;
      }
      cxt.closePath();
      cxt.fill();
      cxt.restore();//旋转
    }
    //=============  圆心的边距   ================
    cxt.strokeStyle = "#005fd1" || "aqua";//
    cxt.beginPath();
    cxt.lineWidth = 3;
    cxt.arc(numbersl, numberst, 4.5, 0, 2 * Math.PI);
    cxt.closePath();
    cxt.stroke();
    //==============  圆心的颜色  ===============
    cxt.fillStyle = "#fff" || "#d10606";
    cxt.beginPath();
    cxt.arc(numbersl, numberst, 4, 0, 2 * Math.PI);
    cxt.closePath();
    cxt.fill();
    //==========  秒针       =======================
    cxt.beginPath();
    cxt.save();
    cxt.strokeStyle = "#e4e4e4" || "aqua";
    cxt.translate(numbersl, numberst);
    cxt.rotate((sec * 6) * Math.PI / 180);
    cxt.fillStyle = "#636363" || "aqua";
    cxt.shadowColor = "#005fd1";
    cxt.beginPath();
    cxt.moveTo(0, 0);
    cxt.lineTo(0, -70);
    cxt.fill();
    cxt.stroke();
/*     cxt.beginPath();
    cxt.moveTo(-8, -50);
    cxt.quadraticCurveTo(20, -45, -8, -30);
    cxt.stroke();
    cxt.beginPath();
    cxt.moveTo(-8, -50);
    cxt.quadraticCurveTo(20, -45, -8, -30);
    cxt.stroke();
    cxt.fill(); */
    cxt.restore();
    //===============  分针     ================
    cxt.beginPath();
    cxt.save();
    cxt.strokeStyle = "#b7b7b7" || "red";
    cxt.translate(numbersl, numberst);
    cxt.rotate((min * 6) * Math.PI / 180);
    cxt.fillStyle = "red";
    cxt.shadowColor = "#005fd1";
    cxt.beginPath();
    cxt.moveTo(0, 0);
    cxt.lineTo(0, -60);
    cxt.fill();
    cxt.stroke();
/*     cxt.beginPath(); 
    cxt.moveTo(-8, -50);
    cxt.quadraticCurveTo(20, -45, -8, -30);
    cxt.stroke();
    cxt.beginPath();
    cxt.moveTo(-8, -50);
    cxt.quadraticCurveTo(20, -45, -8, -30);
    cxt.stroke();
    cxt.fill(); */
    cxt.restore();
    //============  时针   ==================
    cxt.beginPath();
    cxt.save();
    cxt.strokeStyle = "#636363" || "darkred";
    cxt.translate(numbersl, numberst);
    cxt.rotate((hour * 30) * Math.PI / 180);
    cxt.fillStyle = "#636363" || "darkred";
    cxt.shadowColor = "#005fd1";
    cxt.beginPath();
    cxt.moveTo(0, 0);
    cxt.lineTo(0, -50);
    cxt.fill();
    cxt.stroke();
/*  cxt.beginPath();
    cxt.moveTo(-8, -50);
    cxt.quadraticCurveTo(20, -45, -8, -30);
    cxt.stroke();
    cxt.beginPath();
    cxt.moveTo(-8, -50);
    cxt.quadraticCurveTo(20, -45, -8, -30);
    cxt.stroke();
    cxt.fill();*/
    cxt.restore();
    //=============  边框    ===================
    cxt.save();
    cxt.strokeStyle = "#333" || "red";
    cxt.beginPath();
    cxt.strokeStyle = "#005fd1";
    cxt.moveTo(110, 47);
    cxt.bezierCurveTo(120, -50, 110, 100,150, 0);
    cxt.stroke();
    cxt.beginPath();
    cxt.strokeStyle = "#005fd1";
    cxt.moveTo(0, 50);
    cxt.bezierCurveTo(130, -90, -10, -100, 10, -10);
    cxt.stroke();
    cxt.beginPath();
    cxt.strokeStyle = "#333";
    cxt.moveTo(90, 251);
    cxt.lineTo(90, 270);
    cxt.lineTo(130, 270);
    cxt.lineTo(130, 251);
    cxt.stroke();
    cxt.beginPath();
    cxt.strokeStyle = "#505050";
    cxt.moveTo(90, 270);
    cxt.bezierCurveTo(aa, 305, ab, 305, ac, 350);
    cxt.stroke();
    cxt.beginPath();
    cxt.moveTo(100, 270);
    cxt.bezierCurveTo(ca, 305, cb, 305, cc, 350);
    cxt.stroke();
    cxt.beginPath();
    cxt.moveTo(110, 270);
    cxt.bezierCurveTo(da, 305, db, 305, dc, 350);
    cxt.stroke();
    cxt.beginPath();
    cxt.moveTo(120, 270);
    cxt.bezierCurveTo(ea, 305, eb, 305, ec, 350);
    cxt.stroke();
    cxt.beginPath();
    cxt.moveTo(130, 270);
    cxt.bezierCurveTo(fa, 305, fb, 305, fc, 350);
    cxt.stroke();
    //第一根线============
    aa += za;
    if (aa >= 140) {
      za = -2;
    } else if (aa <= 40) {
      za = 2;
    }
    ab += zb;
    if (ab >= 140) {
      zb = -2;
    } else if (ab <= 40) {
      zb = 2;
    }
    ac += zc;
    if (ac >= 140) {
      zc = -2;
    } else if (ac <= 40) {
      zc = 2;
    }
    //第二根线====
    ca += ya;
    if (ca >= 150) {
      ya = -2;
    } else if (ca <= 50) {
      ya = 2;
    }
    cb += yb;
    if (cb >= 150) {
      yb = -2;
    } else if (cb <= 50) {
      yb = 2;
    }
    cc += yc;
    if (cc >= 150) {
      yc = -2;
    } else if (cc <= 50) {
      yc = 2;
    }
    //第三根线======
    da += xa;
    if (da >= 160) {
      xa = -2;
    } else if (da <= 60) {
      xa = 2;
    }
    db += xb;
    if (db >= 160) {
      xb = -2;
    } else if (db <= 60) {
      xb = 2;
    }
    dc += xc;
    if (dc >= 160) {
      xc = -2;
    } else if (dc <= 60) {
      xc = 2;
    }
    //第四根线======
    ea += ta;
    if (ea >= 170) {
      ta = -2;
    } else if (ea <= 70) {
      ta = 2;
    }
    eb += tb;
    if (eb >= 170) {
      tb = -2;
    } else if (eb <= 70) {
      tb = 2;
    }
    ec += tc;
    if (ec >= 170) {
      tc = -2;
    } else if (ec <= 70) {
      tc = 2;
    }
    //第五根线======
    fa += sa;
    if (fa >= 180) {
      sa = -2;
    } else if (fa <= 80) {
      sa = 2;
    }
    fb += sb;
    if (fb >= 180) {
      sb = -2;
    } else if (fb <= 80) {
      sb = 2;
    }
    fc += sc;
    if (fc >= 176) {
      sc = -2;
    } else if (fc <= 76) {
      sc = 2;
    }
  }
}
/* eslint-disable */
export default date