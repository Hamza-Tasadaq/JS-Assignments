function getCar(manufacture, model, keywords, color, feature = "automatic") {
  return {
    manufacture,
    model,
    color,
    feature,
    keywords,
  };
}

console.log(getCar("Toyota", 2015, ["White", "Solid"], "White", "Manual"));
