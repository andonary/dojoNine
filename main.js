/**
 * Permet de convertir le point en virgule
 * @param {String} un nombre en euro
 * @return {String} un nombre en français
 */
function virguleFonct(argum) {
  let virgule = argum.replace(/\./, ",");
  return virgule;
}

/**
 * remplace les espaces par des '
 * argument : prix en euro
 */
function espaceFonct(argum) {
  let space = argum.replace(/\s/g, "'");
  return space;
}

/**
 * Transforme un argument quelquonque en nombre en français avec la devise euro
 * @param {*} argumentQuelquonque
 */
function currency(argumentQuelquonque) {
  let regexNotDigit = /^[^\d]+$/;

  // test() => true or false si la regex est bonne..ou pas
  if (regexNotDigit.test(argumentQuelquonque) === true) {
    throw new Error("C'est une pure chaine de caractère");
  }

  // argumentQuelquonque typeof
  let type = typeof argumentQuelquonque;
  let estTab = Array.isArray(argumentQuelquonque);
  let newArray = [];

  //console.log(type, tableau);

  if (typeof argumentQuelquonque === "string") {
    let virgule = argumentQuelquonque.replace(/\./, ",");
    //console.log(virgule);
    let euro = virgule + "€";

    return euro;
    //console.log(euro);
    //let space = euro.replace(/\s/g, "'");

    // console.log(espaceFonct(euro));
  } else if (estTab === true) {
    argumentQuelquonque.forEach(element => {
      element = virguleFonct(element + "€");
      newArray.push(element);
      //   console.log(element);
    });

    return newArray;
  } else {
    let jambonHt = virguleFonct(argumentQuelquonque.ht + "€");
    // console.log(jambonHt);
    let jambonTtc = virguleFonct(argumentQuelquonque.ttc + "€");
    let newObject = { ht: jambonHt, ttc: jambonTtc };
    // console.log(newObject);

    return newObject;
  }
}

// try {
//     eval('alert("Hello world)');
//   }
//   catch(error) {
//     console.error(error);
//     // expected output: SyntaxError: unterminated string literal
//     // Note - error messages will vary depending on browser
//   }

try {
  currency(12);
  currency([12, 17, 15.8]);
  currency({ ht: 250.5, ttc: 255.5, title: "produit 1" });
  currency("123.2");
  currency("123 2 456.2");
  currency("Je suis une chaine");
} catch (e) {
  console.log(e.message);
}
