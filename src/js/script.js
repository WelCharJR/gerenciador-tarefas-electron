function addtask() {

    var input = document.getElementById("input-tarefa")
    //console.log(input)
    //alert("Função de adicionar tarefa")

    var inputValue = input.value

    //Limpar o input
    input.value = ""

    var list = document.getElementById("lista")
    //Criar um elemento li
    var li = document.createElement("li")

    // Adicionar o valor do INPUT para o LI
    //li.innerText = inputValue
    li.innerHTML = `${inputValue}<button onclick= 'this.parentElement.remove()'> </button>`;

    //Adicionar função como concluida
    li.onclick = function() {
        li.className = "tarefa-concluida";
    }

    //Adicionar o LI na lista de tarefas
    list.appendChild(li)

    console.log(inputValue)
}