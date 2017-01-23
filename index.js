console.log("yo")

function generateColors(){
  var hue, saturation, lightness, alpha;
  var aMax, aMin;
  hue = generateHue();
  console.log(hue);
  saturation = generateSat();
  console.log(saturation);
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
  return Math.floor(Math.random() * (satMax - satMin +1)) + satMin;
}