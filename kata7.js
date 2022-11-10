const checkAir = function (samples, threshold) {
  // Code here!
  let dirtySamples = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] == 'dirty') dirtySamples += 1;
  }
  
  if (dirtySamples/samples.length < threshold) return "Clean";
  else return "Polluted";
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
