const addTodoBtn = document.querySelector('#add-new-todo');
const newTodoInput = document.querySelector('#new-todo-input');
const ulTodoList = document.querySelector('#todo-list');

addTodoBtn.addEventListener('click', 
function (){
    console.log(newTodoInput.value);
    const inputValue = newTodoInput.value

    const listItem = document.createElement('li')
    listItem.setAttribute('class', 'single-todo');
    listItem.classList = 'single-todo'
    listItem.classList.add('single-todo');
    

    //Checkbox  type
    const checkBox = document.createElement('input');
    checkBox.setAttribute('class', 'single-todo-check')
    checkBox.addEventListener('click', function (){
        console.log('clicking the checkbox')
        const classExist = checkBox.nextElementSibling.className.includes('cross-line')
        if(classExist){
            checkBox.nextElementSibling.classList.remove('cross-line')
        } else{
            checkBox.nextElementSibling.classList.add('cross-line')
        }  
    })
    //checkBox.type = 'checkbox'
    checkBox.setAttribute('type', 'checkbox');

    //Paragraph
    const todoText = document.createElement('p')
    todoText.innerText = inputValue
    todoText.setAttribute('class', 'single-todo-text');

    //delete btn
    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'delete');
    deleteBtn.innerText = 'delete'
    deleteBtn.addEventListener('click',
    function(){
        console.log('clicked the delete btn')
        //parentElement = deleteBtn.parentNode;
        //const ul = parentElement.parentNode
        //ul.removeChild(this.parentElement)

        ulTodoList.removeChild(listItem) //shorter version of deleting li from ul
    })

    listItem.appendChild(checkBox);
    listItem.appendChild(todoText);
    listItem.appendChild(deleteBtn);
    
    ulTodoList.appendChild(listItem)  
    newTodoInput.value = '';//or
    //newTodoInput.value = null;
})