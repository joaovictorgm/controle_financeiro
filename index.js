let avaliableMoney = parseFloat(prompt("Quanto de dinheiro tem disponivel?"))

let value = ""

let option = ""

do{
    option = parseFloat(prompt("Você têm "+ avaliableMoney +"R$ dísponivel, o que deseja fazer?\n1-Adicionar\n2-Retirar\n3-Encerrar programa"))
    
    //estrutura para adicionar ou retirar o dinheiro
    switch(option){
        case "1":
            value = parseFloat(prompt("Qual o valor a ser adicionado?"))
            avaliableMoney += value
            break
        case "2":
            value = parseFloat(prompt("Qual o valor a ser retirado?"))
            avaliableMoney -= value
            break
        case "3":
            alert("Programa encerrado")
            break
        default:
            alert("Opção invalida.")
    }

    
} while(option !== "3")
