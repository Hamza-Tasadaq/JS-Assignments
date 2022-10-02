let magicains = ["Magician 1", "Magician 2", "Magician 3"];

function show_magicians(magicians) {
  magicians.forEach((magician) => {
    document.write(`${magician} \t`);
  });
  document.write(`<br />`);
}

show_magicians(magicains);

function make_great(magicians) {
  let mag = [];
  magicians.map((magician) => {
    mag.push(`Great ${magician}`);
  });
  return mag;
}

const TransformedMagiciansNames = make_great(magicains);
document.write(`${TransformedMagiciansNames.join(" ")} <br />`);
document.write(`${magicains.join(" ")} <br />`);
