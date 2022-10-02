let magicains = ["Magican 1", "Magican 2", "Magican 3"];

function make_great(magicians) {
  magicians.forEach((mag, i) => {
    magicains[i] = `Great ${mag}`;
  });

  return magicains;
}

console.log(make_great(magicains));
