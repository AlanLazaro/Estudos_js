function clickBotao(){
    document.getElementById("agradecimento").innerHTML = "<b> Obrigado por Clicar </b> ";
}

function redirecionar(link){
    window.open(link); // Abre em outra guia
    window.location.href = link; // abre na mesma guia
}

function mousePorCima(elemento){
    //document.getElementById("mouse").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"; // com o parametro This Assim podemos usar a mesma função para varios elementos
}

function voltar(elemento){
   // document.getElementById("mouse").innerHTML = "Passe o mouse aqui"
   elemento.innerHTML = "Passe o mouse aqui";
}

function enter(elemeto){
    nome = document.getElementById("Nome");
    document.getElementById("label").innerHTML = "ola " + nome.value;
}