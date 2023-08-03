//Fundamentos
var minhaVariavel = "Olá, mundo!";

console.log(minhaVariavel);

//Comentários

/*Isso 
tudo
e 
um 
comentário

*/ 

//Variáveis e tipo de dados 
var meuNumero = 10;

console.log(meuNumero);

console.log(meuNumero +5);

console.log("10" + 5 );

console.log(typeof meuNumero);

var booleano=true;//false

console.log(typeof booleano);

var meuObjeto = {};
var meuArray =[];
var meuNull=null;
var meuUndefined =undefined;

console.log(typeof meuObjeto);
console.log(typeof meuArray);
console.log(typeof meuNull);
console.log(typeof meuUndefined);

//let e const
//novas formas de declarar variaveis
let x =10;
const y =5;

console.log(typeof x);
console.log(typeof y);
console.log(x,y);

//Operadores aritiméticos
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

//Operadores de comparação

console.log(x == y);
console.log(x != y);

console.log("5" == 5);
console.log("5" === 5);
console.log("5" !== 5);


//Operadores lógicos
//AND &&
//OR ||

console.log(10 > 5 && 20 > 5);
console.log(10 > 5 && 20 < 5);
console.log(10 < 5 && 20 < 5);

console.log(10 > 5 || 20 > 5);
console.log(10 > 5 || 20 < 5);
console.log(10 < 5 || 20 < 5);

//Conversão de tipos 

const menNumero2 ="123"

const menNumero2Convertido =Number(menNumero2);

console.log(menNumero2Convertido)
console.log(typeof menNumero2Convertido)


//Estrutura de condição - if, else, else if


const idade = 16;

if(idade < 13){
console.log('Criança');
}else if(idade < 20){
console.log('Adolescente')
} else {
console.log("Adulto");
}

if(false){
    console.log('Isso executa')
}else{
    console.log('Isso executa agora')
}

//Switch
const fruta ="Maçã"

switch(fruta){
    case "Banana":
        console.log("Banana é a fruta!")
    break;
     case "Maçã":
        console.log("Maçã é a fruta!")
    break;
    default:
        console.log("Fruta não encontrada!")
}

//Estrutura de repetição
//1, 2, 3, 4, 5, 6,...=>Dependendo de uma condição

//contador ,condição de limite, incremento
//for(let i = 0; i < 5; i++)
for(let i = 0; i < 5; i = i + 1){
    //concatenacão
console.log("O Valor de i é :"+ i)
}

//while
let k = 0;
while(k < 5){
    console.log("O Valor de k é :"+ k)
k++;
}

// do while

let j = 0;
do{
    console.log("O Valor de j é :"+ j)

    j++

}while(j < 5);

//funções
//funcction nome (arg1, arg2){ corpo}

function cumprimentar(nome){
    console.log("Olá! "+ nome)
}

//invocação = nome()
cumprimentar("Matheus");

//escopo de variável
let cor ="azul";

function mostraCor(){
    let cor ="verde";
    console.log(cor);
}

console.log(cor);

mostraCor();

//hoisting =içamento

testeHoisting();

function testeHoisting(){
    console.log("Deu certo!")
}

//arrow function
const testeArrow =()=>console.log("Isso Também e uma função.")

testeArrow();

//trurhy e falsy
const minhaVariavell = ""//falsy
const minhaVariavel2 = "Algun texto"//trurhy

if(minhaVariavell){
    console.log("É verdadeiro!")
}else{
    console.log("É falso!")
}

if(minhaVariavel2){
    console.log("É verdadeiro! 2")
}else{
    console.log("É falso! 2")
}

//array, lista
const numeros =[1,2,3,4,5]

console.log(numeros);

console.log(numeros[0]);

console.log(numeros[2]);

numeros.push(6)

console.log(numeros);

//prototype => OBJETO -> objeto2
//Array => nossos arrays
numeros.pop();

console.log(numeros);

//string

const minhaStringNova ="Olá, Mundo!"

//concatenação com +
const minhaString3 =minhaStringNova + "Como você esta?"

console.log(minhaStringNova);

console.log(minhaString3);

//interpolação

const minhaString4 =`${minhaStringNova} Como você esta?`

console.log(minhaString4);

console.log(minhaString4.length);//Quantidade de caracteres

console.log(minhaString4[5]);//Quantidade de caracteres
console.log(minhaString4.toUpperCase())

//Data e hora 

const agora =Date();
console.log(agora);

const natal= new Date(2023,11,25);
console.log(natal);

//Math
console.log(Math.PI);//valor do pi 

console.log(Math.round(3.6));//Arredonda para cima vai para 4

console.log(Math.sqrt(16));//Esse e a raiz quadrada do numero no caso o 16

console.log(Math.pow(2,3));//pontencia pasando a base e o expoente