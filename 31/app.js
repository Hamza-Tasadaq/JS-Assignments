let users = [];

if (users.length === 0) {
  document.write("We need to find some users!");
}

users.forEach((name) => {
  if (name === "admin") {
    document.write(
      `Hello ${name}, would you like to see a status report? <br />`
    );
  } else {
    document.write(`Hello ${name}, thank you for logging in again. <br />`);
  }
});
