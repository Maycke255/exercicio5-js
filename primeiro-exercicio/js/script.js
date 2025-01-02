/*menu interativo : Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. 
O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica,
a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela 
indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar 
acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve 
ser exibida na tela e então o programa é finalizado.*/

let option;

do {
    option = parseFloat(prompt("Painel de controle: \n" +
        "1 - Opção 1\n" +
        "2 - Opção 2\n" +
        "3 - Opção 3\n" +
        "4 - Opção 4\n" +
        "5 - Encerrar\n" +
        "Escolha uma dessas opções para continuar (numero de 1 a 5)"
    ))

    if (option >= 1 && option <= 4) {
        alert("Você escolheu a opção " + option + " o programa ira continuar.")
    } else if (option === 5) {
        alert("Você escolheu encerrar o programa.")
        break;
    }
} while (option !== 5);