function transformNombre(nombre) {
  return (
    nombre
      .toString()
      .replace(/\s/g, "'")
      .replace(/\./, ",") + "€"
  );
}

function conversionEuros(phrase) {
  let result;
  if (Array.isArray(phrase)) {
    result = new Array();
    phrase.map(element => {
      result.push(transformNombre(element));
    });
  } else if (/\d+/g.test(phrase)) {
    if (/[a-z]+/g.test(phrase)) {
      let catchNombre = phrase.match(/([\d]+?\s?)+\d+\.\d+/);
      result = transformNombre(catchNombre[0]);
    } else {
      result = transformNombre(phrase);
    }
  } else if (typeof phrase === "object") {
    let { ht, ttc } = phrase;
    ht = transformNombre(ht);
    ttc = transformNombre(ttc);
    result = new Object();
    result = { ht, ttc };
  } else {
    try {
      throw new Error("Aucune valeur à traduire !!");
    } catch (e) {
      console.log(e);
    }
  }
  return result;
}

console.log(conversionEuros([12.75, 15.5, 10, 2]));
console.log(conversionEuros(15));
console.log(conversionEuros("42"));
console.log(conversionEuros("645.45"));
console.log(conversionEuros("123 456 789.0123"));
console.log(
  conversionEuros({ title: "Produit num. 1", ht: "250", ttc: "255.5", tva: 20 })
);
console.log(
  conversionEuros("Je suis une Chaine qui contient un nombre: 123 456 789.75")
);
console.log(conversionEuros("Je Suis une Chaine"));
