// ORDINATEU LE NOM DE MA CCLASS
class ordinateu {
  //CONSTRUCTEUR PERMET DE  CREER DES OBJET AVEC THIS
  constructor(marque, ram, giga) {
    this.marque = marque;
    this.giga = giga;
    this.ram = ram;
  }

  //  PROPRIETE STATIC  ON L APPEL AVEC LE NOM DE LA CLASS
  static appareil_pris_en_charge = "ordinateur";
  //PRIETE INSTANCE
  type = "laptop";
  version = 2026;
  // METHODE STATIC OU DE CLASS
  static définition() {
    console.log("les ordinateurs sont des matériels de haute gamme ");
  }

  // METHODE D INSTANCE
  mon_ordi_luxe() {
    console.log(
      " les ordinateur avec  le logo pomme sont considérés comme des ordinateur de luxe"
    );
  }

  //METHODE D INSTANCE
  ficheProduit() {
    console.log(
      ` la marque est: ${this.marque} nombre de giga:${this.giga}  produit de luxe.`
    );
  }
}
// INITIALISTATION
let mon_ordi1 = new ordinateu("mctouch", 500, 16);
let mon_ordi2 = new ordinateu("lenovo", 250, 8);

console.log(ordinateu.appareil_pris_en_charge);

ordinateu.définition();

console.log(
  ` la marque est : ${mon_ordi1.marque}, la ram est de ${mon_ordi1.ram} et le nombre de giga est ${mon_ordi1.giga}`
);
mon_ordi1.mon_ordi_luxe();
mon_ordi1.ficheProduit();
console.log(mon_ordi1.type);
console.log(mon_ordi2.type);
