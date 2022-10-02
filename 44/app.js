let items = ["Onion", "Butter", "Mushrooms"];
function summarized(...items) {
  document.write(`${items.join(", ")} <br />`);
}

summarized(...items);
summarized(...items, "Yougert");
summarized(...items, "Oil");
