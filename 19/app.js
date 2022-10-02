const guestsList = ["Ali", "Ahmad", "Salman"];
guestsList[0] = "Tayyab";
guestsList[1] = "Ammar";
guestsList[2] = "Tayyab";
guestsList.unshift("Murtaza");
guestsList.splice(2, 0, "Abdullah");
guestsList.push("Aqeeb");

document.write(`Total Number of invited Guests are : ${guestsList.length}`);
