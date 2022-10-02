let things = ["mountains", "rivers", "countries", "cities", "languages"];

document.write("<ul>");
things.forEach((element) => {
  document.write(`<li>${element}</li>`);
});

document.write("</ul>");
