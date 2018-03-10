var xPos = function(v, theta, t){
  return Math.round(v*Math.cos(theta)*t*100)/100 ;
};

var yPos = function(v, theta, t){
  return Math.round((v*Math.sin(theta) - 0.5*9.8*t)*t*100)/100 ;
};