/* Variáveis globais e para manipulação do DOM (Document Objet Model)*/
var container = document.querySelector(".container");
var todasAtividades = [];

function inserirAtividade() {
  var inputText = document.querySelector("#inputText");


if(inputText.value == ""){
    alert("Campo vazio! Preencha alguma atividade.");

}else{
    /* Cadastro da Atividade */
    container.innerHTML = "";


var atividade = document.createElement("div");
atividade.classList.add("atividade");

var input = document.createElement("input");
input.type = "checkbox";
input.addEventListener("change", atualizarStatus);

var p = document.createElement("p");
p.innerHTML = inputText.value;


var btn = document.createElement("button")
btn.innerHTML = "Remover";
btn.addEventListener("click", removerAtividade);


atividade.appendChild(input);
atividade.appendChild(p);
atividade.appendChild(btn);

inputText.value = "";


/*atividade.innerHTML = inputText.value;*/


todasAtividades.push(atividade);
for(i = 0; i < todasAtividades.length; i++){
  container.appendChild(todasAtividades[i]);
  }
 }
}

function removerAtividade(event){
  console.log(event.target.parentElement);

  var index = todasAtividades.indexOf(event.target.parentElement);

  console.log("Index", index);

  
  todasAtividades.splice(index, 1);

  container.innerHTML = "";
  for (i = 0; i < todasAtividades.length; i++) {
    container.appendChild(todasAtividades[i]);
  }
}

function atualizarStatus(event) {
var elemPai = event.target.parentElement;


  if (event.target.checked == true) {
    console.log("Input marcado");
    elemPai.style.opacity = "50%";
    elemPai.children[1].style.textDecoration = "line-through";
  } else {
    console.log("Input DESmarcado");
    elemPai.style.opacity = "100%";
    elemPai.children[1].style.textDecoration = "";
  }
}






