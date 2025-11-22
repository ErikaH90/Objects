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

  const personer = [
    new Person("Erika", 35, "SFI-lärare"),
    new Person("Anna", 28, "Designer"),
    new Person("Johan", 42, "Ingenjör"),
    new Person("Sara", 31, "Frontend Developer"),
    new Person("Karl", 50, "Lärare")
  ];

  const button2 = document.getElementById("show2");
  const text2 = document.getElementById("text2");

  button2.addEventListener("click", () => {
    text2.innerHTML = "";
  for (let i = 0; i < personer.length; i++) {
    text2.innerHTML += personer[i].beskriv() + "<br>";
  }
});
