function show_magicians(arr) {
  arr.forEach((magician) => {
    document.write(`${magician} \t`);
  });
}

show_magicians(["Magician 1", "Magician 2", "Magician 3"]);
