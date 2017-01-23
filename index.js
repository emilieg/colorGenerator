document.onreadystatechange = function () {
  if (document.readyState === "interactive") {


  }
}

function generateColors(){
  var hue, saturation, lightness, alpha, code;
  hue = generateHue();
  console.log(hue);
  saturation = generateSat() + '%';
  console.log(saturation);
  lightness = generateLight() + '%';
  console.log(lightness)
  alpha = generateAlpha();
  console.log(alpha);
  code = 'hsla('+ hue + ',' + saturation + ',' + lightness + ',' + alpha + ')';
  console.log(code)
  return code;
};

generateColors();

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