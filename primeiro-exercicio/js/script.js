/*menu interativo : Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. 
O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica,
a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela 
indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar 
acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve 
ser exibida na tela e então o programa é finalizado.*/

let option; //defini uma variavel para opção fora do escorpo de bloco

/* a estrutura do do while e simples, eu defini dentro do "do", o que deve ser repetido
no caso, o que iria se repetir seria o prompt para que o usuario digite a opção que ele
quer escolher, e um bloco de if else para verificar as opções que ele digitou, 
em seguida o while que representa uma condição para o do ser executado.  */
do {
    option = parseFloat(prompt("Painel de controle: \n" +
        "1 - Opção 1\n" +
        "2 - Opção 2\n" +
        "3 - Opção 3\n" +
        "4 - Opção 4\n" +
        "5 - Encerrar\n" +
        "Escolha uma dessas opções para continuar (numero de 1 a 5)"
    ))

    if (option >= 1 && option <= 4) /* esse bloco de codigo so e executado se ambas opções
    digitadas forem verdadeiras, no caso precisa ser um numero maior ou igual a 1 e menor
    ou igual a 4, resumindo o bloco so e eecutado se o usuario digitar um numero entre 1 e 4 */ {
        alert("Você escolheu a opção " + option + " o programa ira continuar.") /* em seguida,
        e exibido uma mensagem mostrando a opção que ele escolheu, e tudo ira se repetir se a
        verificação acima for verdadeira */
    } else if (option === 5) /* caso a verificação de false, no caso o usuario não digite um numero
    que esteja entre 1 e 4, e a opção for exatamente igual a 5, o programa ira parar */ {
        alert("Você escolheu encerrar o programa.")
        break;
    }
    // Caso o usuário insira um valor inválido
    else {
        alert("Opção inválida. Por favor, escolha um número entre 1 e 5.");
    }
} while (option !== 5); /* condição: enquanto a opção digitada no prompt da variavel option
diferente da opção 5, ou seja enquanto a opção for 1, 2, 3 e 4 e não 5, o bloco do, sera ex-
ecutado novamente. */