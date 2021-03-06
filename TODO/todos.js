var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos'));

function renderTodos(){

    listElement.innerHTML = '';
    
    for(todo of todos){
        var todoElements = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

        var linlText = document.createTextNode('Excluir');
        linkElement.appendChild(linlText);

        todoElements.appendChild(todoText);
        todoElements.appendChild(linkElement);
        listElement.appendChild(todoElements);
    }

}

renderTodos();

function addTodo(){
   var todoText = inputElement.value;

   todos.push(todoText);
   inputElement.value = '';

   renderTodos();
   saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}