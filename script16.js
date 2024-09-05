// Exercício 5
// Faça um algoritmo que leia a base e a altura de um triângulo e calcule a área, mostrando o resultado.
alert(" Programa calculo de area geometrica plana:");
var opcao = (prompt( " Digite o numero da figura geometrica:\n 1. Triangulo \n 2. Quadrado \n 3. Retangulo \n 4. Circulo "))

if (opcao == 1) {

        var base = parseFloat(prompt("Digite o valor da base do triângulo:"));
        var altura = parseFloat(prompt("Digite o valor da altura do triângulo:"));
        var area = base * altura / 2;
        alert("A área do triângulo é: " + area.toFixed(2));

} else
if (opcao == 2) {
    var lado = parseFloat(prompt("Digite o valor do lado do quadrado:"));
    var area = lado * lado;
    alert("A área do quadrado é: " + area.toFixed(2));     
    } else
    if (opcao == 3) {
        var base = parseFloat(prompt("Digite o valor da base do retângulo:"));  
        var altura = parseFloat(prompt("Digite o valor da altura do retângulo:"));  
        var area = base * altura;   
        alert(" A area do retangulo correponde a:"+ area)
        } else
        if (opcao == 4) {
            var raio = parseFloat(prompt("Digite o valor do raio do círculo:"));    
            var area = 3.14 * raio * raio;    
            alert("A área do círculo é: " + area.toFixed(2));
        }
        else {
            alert("Opção inválida");
        }



