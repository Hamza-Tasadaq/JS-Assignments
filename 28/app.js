let age = 5;

if (age < 2) {
  document.write("Person is a Baby");
} else if (age >= 2 && age < 4) {
  document.write("Person is a toddler");
} else if (age >= 4 && age < 13) {
  document.write("Person is a kid");
} else if (age >= 13 && age < 20) {
  document.write("Person is a teenager");
} else if (age >= 20 && age < 65) {
  document.write("Person is a adult");
} else if (age === 65) {
  document.write("Person is a elder");
}
