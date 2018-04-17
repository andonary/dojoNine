Ecrire une fonction qui prend un argument, qui puisse formatter le prix en français et qui retourne un ou plusieurs prix en euros.

* "Je Suis une Chaine" => Erreur (avec la classe Error/ try/catch) "Aucune valeur à traduire"
* "Je suis une Chaine qui contient un nombre: 232.75" => "232,75€"
* 756.75" => "756,75€"
* 12.3456 => "12,3456€"
* 12 345 623 => "12'345'623€"
* [12.75, 15.5, 10, 2] => ["12,75€", "15,5€", "10€", "2€"]
* {title: "Produit num. 1", ht: "250", ttc: "255.5", tva: 20} => { ht: "250€", ttc: "255,5€"}
