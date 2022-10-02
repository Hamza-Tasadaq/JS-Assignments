let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.forEach((num) => {
  let offset = "";
  if (num === 1) {
    offset = "st";
  } else if (num == 2) {
    offset = "nd";
  } else if (num == 3) {
    offset = "rd";
  } else {
    offset = "th";
  }
  document.write(`${num}${offset} <br />`);
});
