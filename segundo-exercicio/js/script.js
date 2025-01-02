/* Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível
e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair.
Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada,
somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. 
A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa. */

let money = parseFloat(prompt("Qual seu estado financeiro atual? "));
let option;

do {

    option = parseFloat(prompt(
        "Seu estado financeiro é R$" + money + "\n" +
        "Escolha uma das opções:\n" +
        "1 - Adicionar dinheiro\n" +
        "2 - Remover dinheiro\n" +
        "3 - sair"));

    switch (option) {
        case 1:
        let addMoney = parseFloat(prompt("Quanto dinheiro deseja adicionar? "));
        money += addMoney;

        alert("Seu estado financeiro é R$" + money + "\n" +
            "Escolha uma das opções:\n" +
            "1 - Adicionar dinheiro\n" +
            "2 - Remover dinheiro\n" +
            "3 - sair")
            break;
                
            case 2:
            let removeMoney = parseFloat(prompt("Quanto dinheiro deseja remover? "));
            money -= removeMoney;

            alert("Seu estado financeiro é R$" + money + "\n" +
            "Escolha uma das opções:\n" +
            "1 - Adicionar dinheiro\n" +
            "2 - Remover dinheiro\n" +
            "3 - sair")
            break;

            case 3: // Sair
            alert("Sistema encerrado. Até logo!");
            break;

    default:
        alert("Opção invalida.");
        }

} while (option !== 3);