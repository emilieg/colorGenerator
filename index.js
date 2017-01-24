document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    console.log("ready");
    
    var button = document.getElementById('first');
    var rect1 = document.getElementById('rect1');
    button.onclick = function(){
      var color = generateColors();
      console.log(color);
      rect1.style.fill = color;
    };

  }
}

function generateColors(){
  var hue, saturation, lightness, alpha, code;
  hue = generateHue();
  saturation = generateSat() + '%';
  lightness = generateLight() + '%';
  alpha = generateAlpha();
  code = 'hsla('+ hue + ',' + saturation + ',' + lightness + ',' + alpha + ')';
  return code;
};


function generateHue(){
  var hueMax = 360; 
  var hueMin = 0;
  return Math.floor(Math.random() * (hueMax - hueMin +1)) + hueMin;
}

function generateSat(){
  var satMax = 0;
  var satMin = 100;
  return Math.floor(Math.random() * (satMax - satMin +1)) + satMin;
}

function generateLight(){
  var lMax = 0;
  var lMin = 100;
  return Math.floor(Math.random() * (lMax - lMin +1)) + lMin;
}

function generateAlpha(){
  var aMax = 1; 
  var aMin = 0.0;
  return Math.random() * (aMax - aMin) + aMin; 
}