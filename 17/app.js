const guestsList = ["Ali", "Ahmad", "Salman"];

guestsList.forEach((name) => {
  document.write(`Hi ${name} you are invited to me for dinner. <br />`);
});
document.write("<br />");
document.write("<br />");

guestsList[0] = "Tayyab";
guestsList[1] = "Ammar";
guestsList[2] = "Tayyab";

guestsList.forEach((name) => {
  document.write(`Hi ${name} you are also  invited to me for dinner. <br />`);
});

document.write("<br />");
document.write("<br />");
document.write(
  "I found a bigger Table. You all are invited for the dinner <br />"
);
document.write("<br />");
document.write("<br />");

guestsList.unshift("Murtaza");
guestsList.splice(2, 0, "Abdullah");
guestsList.push("Aqeeb");

guestsList.forEach((name) => {
  document.write(`Hi ${name} you are invited for dinner. <br />`);
});

document.write("<br />");
document.write("<br />");

document.write("Oh Sorry new table will not be available. <br />");

document.write("<br />");
document.write("<br />");
let unInvitedGuests = [];

for (let i = 0; i < guestsList.length + 1; i++) {
  unInvitedGuests.push(guestsList.pop());
}

unInvitedGuests.forEach((name) => {
  document.write(`Sorry ${name} You are not invited this time. <br />`);
});

document.write("<br />");
document.write("<br />");

guestsList.forEach((name) => {
  document.write(`${name} You are invited. <br />`);
});

document.write("<br />");
document.write("<br />");

guestsList.pop();
guestsList.pop();

document.write(`Empty List: ${guestsList}`);
