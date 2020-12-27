// Variaveis
var nome = "Alan Lázaro"; // Declaração de Variaveis
var idade = "20"; 
var mensagem = "Bem Vindo" + nome + 2


//PopUp
alert(mensagem.toUpperCase()) ; // Concatenação


//Listas
var lista = ["maça", "pera", "laranja"];
console.log(lista[0]); // Ver Elementos

lista.push("uva");//Adicionar Elementos
console.log(lista); 

lista.pop();//Excluir Elementos
console.log(lista);

console.log(lista.length); // tamanho da lista

console.log(lista.reverse());// Inverte os itens

console.log(lista.toString()); // Convertendo para String

console.log(lista.join(" ")); // Escolhe como os elementos serão separados 


// Dicionarios
var dict = {nome: "maça", cor:"Vermelha"};
console.log(dict.nome);
console.log(dict.cor);


// Condicionais
var idade = prompt("Qual sua idade?")

if (idade >= 18){
    alert(nome + " você é maior de idade");
}
else{
    alert(nome + " você é menor de idade");
}

//while
var cont = 0;
while (cont <=5 ){
    console.log(cont);
    cont ++;
};


//for 
for(cont = 0; cont<=5; cont++){
    console.log(cont);
};


//date
var data = new Date();
alert("hoje é: " + data.getMonth());

//funções
function soma(n1, n2){
    return n1 + n2;
}