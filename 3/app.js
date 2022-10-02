let name = "Hamza Tasadaq";

document.write(`UPPCASE = ${name.toUpperCase()} `);
document.write("<br />");

document.write(`lowercase = ${name.toLocaleLowerCase()} `);
document.write("<br />");

document.write(
  `Title Case = ${name
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ")} `
);
