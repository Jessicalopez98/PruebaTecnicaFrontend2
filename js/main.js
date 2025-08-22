const instructiones = document.getElementById("instructions");
const pregunta = document.getElementById("pregunta");
const options = document.getElementById("options");
const counter = document.getElementById("contador");
const btnBefore = document.getElementById("btnBefore");
const btnNext= document.getElementById("btnNext");

function mostrarPregunta(){
    let p = preguntas[inicio];
    pregunta.innerHTML = p.texto;
    counter.innerHTML = (inicio +1) +"de" + pregunta.lenght;

    options.innerHTML = "";
  for (let i = 0; i < p.opciones.length; i++) {
    const div = document.createElement("div");
    div.className = "form-check";

    let input = document.createElement("input");
    input.type = "radio";
    input.name = "pregunta";
    input.value = i;
    input.className = "form-check-input";

    if (respuestas[inicio] == i) {
      input.checked = true;
    }

    input.addEventListener("click", function() {
      respuestas[inicio] = this.value;
    });

    let label = document.createElement("label");
    label.className = "form-check-label";
    label.innerHTML = p.opciones[i];

    div.appendChild(input);
    div.appendChild(label);
    options.appendChild(div);

}//for options
} //function mostrarPregunta




btnBefore.addEventListener("click", function(){
    if (inicio>0){
        inicio--;
        mostrarPregunta();
    }
});

btnNext.addEventListener("click", function(){
    if(inicio<question.lenght -1){
        inicio++;
        mostrarPregunta();
    }
});
mostrarPregunta();

let preguntas =[
   {
    texto: "¿Cuál es la raíz cuadrada de 25?",
    opciones: ["5", "3", "25 no tiene raíz cuadrada", "2"],
    correcta: 0
  },
  {
    texto: "¿Cuánto es 15 / 3?",
    opciones: ["7", "3", "5", "6"],
    correcta: 5
  } 
];

let inicio = 0;
let respuesta = [];

question.innerHTML = preguntas[inicio].texto;
counter.innerHTML = (indice + 1) + " de " + preguntas.length;

