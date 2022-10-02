const guestsList = ["Ali", "Ahmad", "Salman"];

guestsList.forEach((name) => {
  document.write(`Hi ${name} you are invited to me for dinner. <br />`);
});


guestsList[0]="Tayyab";
guestsList[1]="Ammar";
guestsList[2]="Tayyab";

guestsList.forEach((name) => {
    document.write(`Hi ${name} you are also  invited to me for dinner. <br />`);
  });
  