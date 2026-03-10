class voiture {
  constructor(marque, couleur, année) {
    this._marque = marque;
    this._couleur = couleur;
    this._année = année;
  }

  static type_De_Voiture = " vehicule hybride";

  static radar_De_Vitesse() {
    console.log(
      `Tous nos vehicules sont équipés d'une option limitateur de vitesse  `
    );
  }

  info() {
    console.log(
      `,nous vous proposons des voitures hybrides avec une remise de 2000 euro sur la marque  ${this._marque} `
    );
  }
  demarer() {
    console.log(` ${this._marque}, démarage rapide automatique`);
  }

  get marque() {
    return this._marque;
  }
  set marque(value) {
    this._marque = value;
  }
}
let V1 = new voiture("bmw", "gris_nardo", 2026);

console.log(V1._marque);
voiture.radar_De_Vitesse();

V1.marque = "audi";

console.log(V1._année);
console.log(V1._couleur);
console.log(V1._marque);

console.log(voiture.type_De_Voiture);
V1.demarer();
V1.info();

// J'ai crée une class banque avec  nom et solde
class banque {
  // Constructeur
  constructor(nom, solde) {
    this._nom = nom;
    this._solde = solde;
  }
  //Utilisation de getters
  get solde() {
    return this._solde;
  }
  //Utilisation de setters
  set solde(value) {
    this._solde = value;
  }
}
//initialisation  instance avec le constructeur
let client = new banque("billy", 5000);
// Appélation du nom  ET solde à l ' aide de l'instance cleint
console.log(client._nom);
console.log(client._solde);
// j'ai un nouveau solde toujour avec de l'instance client
client._solde = 12000;
console.log(client._solde);
