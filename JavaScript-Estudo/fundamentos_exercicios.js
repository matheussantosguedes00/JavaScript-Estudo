//Exercicios de fundamentos
//Execicios 1 : Olá, Mundo!
//Crie um script que imprima "Olá, Mundo!" no console

console.log("Olá, Mundo!");

//Execicios 2 : Conversão de tipos

const num = "1234"
const numero=Number(num)

console.log(typeof numero)
console.log( numero)

//Execicios 3 : Manipulação de strings

const frase ="JavaScript é incrível";

console.log(frase.length)
console.log(frase.split(' ').length)//split conta o numero de palavras

//Execicios 4 : Loops e Arrays

const nomes =['Ana','João','Zoi','Matheus','JavaScript']

for(let i = 0;i<nomes.length;i++){
    console.log(`Nomes: ${i} ${nomes [i]}`)
}

//Execicios 5 : Funções, String e Math

function converterHorario(horario24){
    //14:20 => hora = 14, minuto = 20 => split (":")
    //const hora1 =horario24.split(":")[0]
    //const minuto1 =horario24.split(":")[1]

    const [hora,minuto] =horario24.split(":");
    // 15 / 12 = 3, 23 % 12 =11
    //falsy 12 % 12 = 0 =>
    const hora12 =hora % 12 || 12;

    let periodo ="AM"

    if(hora > 12){
        periodo ="PM"
    }

    console.log(`${hora12}:${minuto} ${periodo}`)
    //console.log(hora, minuto)
}

converterHorario("14:15")

converterHorario("12:15")

converterHorario("08:15")