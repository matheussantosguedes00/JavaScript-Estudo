//Avançando em javaScript



//Manipulação de arrays

const frutas =["Maça","Laranja"];

frutas.unshift("Acerola");//adicionar acerola
console.log(frutas);

frutas.shift();
console.log(frutas);//remove acerola



//map, filter, reduce -> arrow function
const numeros=[1,2,3,4,5,6]
const numerosPar=numeros.find((num) => console.log(num)); //mostra todo numero do array

//find => retorna o primeiro elemento do critério
const numerosPar2=numeros.find((num) =>num % 2===0);
console.log(numerosPar2)

//filter => retorna mais de um elemento do critério
const numerosPares = numeros.filter((num)=>num % 2===0)
console.log(numerosPares)



//Manipulação de strings
const frase = " Olá, mundo! " ;
const palavras = frase.trim();//tirar o espaço do começo e fim
const palavras2 = frase.trim().split(" ");
console.log(frase);
console.log(palavras);
console.log(palavras2);

const frase2 ="JavaScript é incrivel!"
console.log(frase2.startsWith("Java"))//no caso e se começa a frase com esta palavra e tem que ser igual 
console.log(frase2.endsWith("!"))//no caso e se terminar a frase com esta palavra e tem que ser igual 



//Exceções e tratamentos de erros

const idade = 15;
//if(idade < 18){
//   throw new Error("Você deve ter pelo menos 18 anos") // Não funciona nada que esta abaixo do erro toma cuidado
//}
try{ //Em caso que vc não que quer o erro para o seu progamar usa try/catch vai manda uma messagem para o usuario
const idade = 15;

if(idade < 18){
   throw new Error("Você deve ter pelo menos 18 anos") // Não funciona nada que esta abaixo do erro toma cuidado
}

}catch(error){

console.log(error.message);//mostar o erro mais so a messagem

}
console.log("continuando o programa...");



// Callback => função
function cumprimentar(nome, callback){
    console.log("Olá," + nome);
    callback();
}

function mostrarSaudacao(){
    console.log("Como você esta ?")
}

cumprimentar("Matheus" ,mostrarSaudacao)

cumprimentar("Maria", function(){
    console.log("Tá tudo bem?")
});

//settimeout =>dps de um tempo executa algo, uma veses
function mostrarMensagem(){
    console.log("Essa mesagem será exibida após 3 sengundos.")
}
//1000ms = 1s
setTimeout(mostrarMensagem,3000);

setTimeout(function(){
    console.log("OI")
},2000);




//Promises
const promessa = new Promise((resolve,reject) =>{
    const condicao = false;

    if(condicao){
        resolve("A condição é verdadeira!")
    }else {
        reject("A condição é falsa!")
    }
});

promessa.then((mensagem)=>{

    console.log(mensagem);
}).catch((erro) => {
 console.log(erro)
});



//Bibliotecas feitas que são "promise based"

const promise1 =Promise.resolve(3);
const promise2 =new Promise((resolve,reject)=>{
    setTimeout(resolve,2500,"Testando")
})

Promise.all([promise1,promise2]).then((valores)=>console.log(valores))



//Async Await
async function obterValor() {

    const promessa = new Promise((resolve,reject) =>{
       setTimeout(()=> resolve("Valor obtido"), 2000);
    }); 
    const valor = await promessa;

    console.log(valor)
}
obterValor()

async function obterValorComErro(){
    try {
        const promessa = new Promise((resolve,reject) =>{
            setTimeout(()=> reject("Valor com erro"), 2000);
         }); 
         const valor = await promessa;
     
         console.log(valor)
    } catch (error) {
        console.log(error)
    }
}
obterValorComErro()

//JSON (JavaScript Object Notation)
//{nome:"teste"} => {"nome":"teste"}
//Padroniza a cominicação
//front-end e back-end em uma linguagem só

const objeto={nome:"João", idade:30}

const jsonString = JSON.stringify(objeto);

console.log(jsonString);
console.log(typeof jsonString)

const json='{"nome":"João", "idade":30}';

const objeto2 = JSON.parse(json);

console.log(objeto2);
console.log(typeof objeto2)




