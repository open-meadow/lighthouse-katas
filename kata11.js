// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // Code here!
  let sphereVol = (4/3) * PI * (radius ** 3);
  return sphereVol;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // And here!
  let coneVal = (1/3) * PI * (radius ** 2) * height;
  return coneVal;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too!
  let prismVal = height * width * depth;
  return prismVal;
}

console.log(prismVolume(3, 4, 5) === 60);


const totalVolume = function (solids) {
  // Code here? Yup!
  let totalSphereVolume = 0;
  let totalConeVolume = 0;
  let totalPrismVolume = 0;
  for (let obj of solids) {
    if (obj["type"] === "sphere") totalSphereVolume += sphereVolume(obj["radius"]);
    else if(obj["type"] === "cone") totalConeVolume += coneVolume(obj["radius"], obj["height"]);
    else if (obj["type" === "prism"]) totalPrismVolume += prismVolume(obj["height"], obj["width"], obj["depth"]);
  }
  let totalVol = totalConeVolume + totalPrismVolume + totalSphereVolume;
  return totalVol;
}


const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
