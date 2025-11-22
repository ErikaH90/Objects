class Person {
  constructor(namn, alder, yrke) {
    this.namn = namn;
    this.alder = alder;
    this.yrke = yrke;
    this.beskriv = function() {
      return `${this.namn} är ${this.alder} år gammal.`;
    };
  }
}
  const erika = new Person("Erika", 35, "sfi-lärare");
  const button = document.getElementById("show");
  const text = document.getElementById("text");

  button.addEventListener("click", () => {
    text.innerHTML = erika.beskriv();
  });
