let current_users = ["admin", "superadmin", "client", "user", "user2"];
let new_users = ["user", "superadmin", "user0", "user56"];

new_users.forEach((name) => {
  current_users.includes(name.toLowerCase())
    ? document.write("Person will need to enter a new username <br />")
    : document.write(`Username ${name} is available <br />`);
});
