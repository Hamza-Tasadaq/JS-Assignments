function make_shirt(text = "I love JavaScript", size = "large") {
  document.write(
    `The size of the shirt is ${size} and printed text is ${text} <br />`
  );
}
make_shirt();
make_shirt("large");
make_shirt("small", "I love development");
