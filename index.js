//Q01
/*function verificarNumero(num: number): string {
    if (num > 0) {
        return "O número é positivo";
    } else if (num < 0) {
        return "O número é negativo";
    } else {
        return "O número é zero";
    }
}
console.log(verificarNumero(10));
console.log(verificarNumero(-5));
console.log(verificarNumero(0));*/
//Q02
/*function verificarIdade(idade: number): string {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}
console.log(verificarIdade(20));
console.log(verificarIdade(15));*/
//Q03
/*function compararNumeros(num1: number, num2: number): string {
    if (num1 > num2) {
        return `O primeiro número (${num1}) é maior`;
    } else if (num1 < num2) {
        return `O segundo número (${num2}) é maior`;
    } else {
        return "Os números são iguais";
    }
}
console.log(compararNumeros(10, 20));
console.log(compararNumeros(30, 10));
console.log(compararNumeros(15, 15));*/
//Q04
/*function verificarParImpar(num: number): string {
    if (num % 2 === 0) {
        return "O número é par";
    } else {
        return "O número é ímpar";
    }
}
console.log(verificarParImpar(4));
console.log(verificarParImpar(7));*/
//Q05
/*function verificarAprovacao(nota1: number, nota2: number, nota3: number): string {
    let media = (nota1 + nota2 + nota3) / 3;
    if (media >= 7) {
        return `Aprovado com média ${media}`;
    } else {
        return `Reprovado com média ${media}`;
    }
}
console.log(verificarAprovacao(7, 8, 9));
console.log(verificarAprovacao(5, 6, 4));*/
//Q06
/*function verificarNomeMaior(nome1: string, nome2: string): string {
    if (nome1.length > nome2.length) {
        return `O nome ${nome1} é maior`;
    } else if (nome1.length < nome2.length) {
        return `O nome ${nome2} é maior`;
    } else {
        return "Os nomes possuem o mesmo tamanho";
    }
}
console.log(verificarNomeMaior("Fausto", "Roberto"));
console.log(verificarNomeMaior("Sunamita", "Luiz"));*/
//Q07
/*function verificarVogalConsoante(caractere: string): string {
    let vogais = "aeiouAEIOU";
    if (vogais.indexOf(caractere) !== -1) {
        return "É uma vogal";
    } else {
        return "É uma consoante";
    }
}
console.log(verificarVogalConsoante("a"));
console.log(verificarVogalConsoante("x"));*/
//Q08
/*function ordenarNumeros(num1: number, num2: number, num3: number): number[] {
    let numeros = [num1, num2, num3];
    return numeros.sort((a, b) => a - b);
}
console.log(ordenarNumeros(3, 1, 2));
console.log(ordenarNumeros(10, 5, 7));*/
//Q09
/*function calcularIMC(peso: number, altura: number): string {
    let imc = peso / (altura * altura);
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 24.9) {
        return "Peso normal";
    } else if (imc < 29.9) {
        return "Sobrepeso";
    } else if (imc < 34.9) {
        return "Obesidade";
    } else {
        return "Obesidade severa";
    }
}
console.log(calcularIMC(70, 1.75));
console.log(calcularIMC(50, 1.60));*/
//Q10
/*function exibirNomeMes(mes: number): string {
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    return meses[mes - 1] || "Mês inválido";
}
console.log(exibirNomeMes(1));
console.log(exibirNomeMes(5));
console.log(exibirNomeMes(13));*/
//Q11
/*function calcularAumento(salario: number): string {
    let aumento = salario > 1500 ? salario * 0.1 : salario * 0.15;
    return `O aumento é de R$${aumento.toFixed(2)}`;
}
console.log(calcularAumento(2000));
console.log(calcularAumento(1200));*/
//Q12
/*function verificarDivisibilidade(num: number): string {
    if (num % 3 === 0 && num % 5 === 0) {
        return "O número é divisível por 3 e 5";
    } else {
        return "O número não é divisível por 3 e 5 ao mesmo tempo";
    }
}
console.log(verificarDivisibilidade(15));
console.log(verificarDivisibilidade(10));*/
//Q13
/*function verificarDiaUtil(dia: string): string {
    let diasUteis = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"];
    let fimDeSemana = ["sábado", "domingo"];
    if (diasUteis.includes(dia.toLowerCase())) {
        return "Dia útil";
    } else if (fimDeSemana.includes(dia.toLowerCase())) {
        return "Fim de semana";
    } else {
        return "Dia inválido";
    }
}
console.log(verificarDiaUtil("segunda-feira"));
console.log(verificarDiaUtil("domingo"));
console.log(verificarDiaUtil("feriado"));*/
//Q14
/*function avaliarNota(nota: number): string {
    switch (nota) {
        case 1:
            return "Muito insuficiente";
        case 2:
            return "Insuficiente";
        case 3:
            return "Regular";
        case 4:
            return "Bom";
        case 5:
            return "Muito bom";
        default:
            return "Nota inválida";
    }
}
console.log(avaliarNota(3));
console.log(avaliarNota(5));
console.log(avaliarNota(7));*/
//Q15
/*function exibirDiaSemana(dia: number): string {
    let diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return diasSemana[dia - 1] || "Número inválido";
}
console.log(exibirDiaSemana(1));
console.log(exibirDiaSemana(4));
console.log(exibirDiaSemana(8));*/
//Q16
/*function arredondarNumero(num: number): string {
    try {
        let arredondado = Math.round(num);
        return `Número arredondado: ${arredondado}`;
    } catch (error) {
        return "Erro ao arredondar número";
    }
}
console.log(arredondarNumero(4.7));
console.log(arredondarNumero(2.3));*/
//Q17
/*function verificarFaixaEtaria(idade: number): string {
    if (idade >= 0 && idade <= 1) {
        return "Bebê";
    } else if (idade > 1 && idade <= 12) {
        return "Criança";
    } else if (idade > 12 && idade <= 18) {
        return "Adolescente";
    } else if (idade > 18) {
        return "Adulto";
    } else {
        return "Idade inválida";
    }
}
console.log(verificarFaixaEtaria(0));
console.log(verificarFaixaEtaria(8));
console.log(verificarFaixaEtaria(15));
console.log(verificarFaixaEtaria(25));*/
//Q18
/*function verificarEstadoCivil(estadoCivil: string): string {
    switch (estadoCivil.toLowerCase()) {
        case "solteiro":
            return "Solteiro";
        case "casado":
            return "Casado";
        case "divorciado":
            return "Divorciado";
        case "viuvo":
            return "Viúvo";
        default:
            return "Estado civil inválido";
    }
}
console.log(verificarEstadoCivil("casado"));
console.log(verificarEstadoCivil("solteiro"));
console.log(verificarEstadoCivil("separado"));*/
//Q19
/*function calcularOperacao(num1: number, num2: number, operacao: number): string {
    switch (operacao) {
        case 1:
            return `Soma: ${num1 + num2}`;
        case 2:
            return `Subtração: ${num1 - num2}`;
        case 3:
            return `Multiplicação: ${num1 * num2}`;
        case 4:
            return `Divisão: ${num1 / num2}`;
        default:
            return "Operação inválida";
    }
}
console.log(calcularOperacao(10, 5, 1));
console.log(calcularOperacao(10, 5, 3));
console.log(calcularOperacao(10, 5, 5));*/
//Q20
/*function lerNomeIdade(nome: string, idade: any): string {
    try {
        idade = parseInt(idade);
        if (isNaN(idade)) throw "Idade inválida";
        return `Nome: ${nome}, Idade: ${idade}`;
    } catch (error) {
        return error;
    }
}
console.log(lerNomeIdade("Alice", "25"));
console.log(lerNomeIdade("Bob", "abc"));*/
//Q21
/*function converterMetros(valor: any): string {
    try {
        valor = parseFloat(valor);
        if (isNaN(valor)) throw "Valor inválido";
        let centimetros = valor * 100;
        let milimetros = valor * 1000;
        let quilometros = valor / 1000;
        return `Centímetros: ${centimetros}, Milímetros: ${milimetros}, Quilômetros: ${quilometros}`;
    } catch (error) {
        return error;
    }
}
console.log(converterMetros("1.75"));
console.log(converterMetros("abc"));*/
