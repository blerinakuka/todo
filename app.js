const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  list.innerHTML += html ;
};

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todoInput = addForm.querySelector('input[type="text"]');
  const todo = todoInput.value.trim();
  if(todo.length){
    generateTemplate(todo);
    addForm.reset();
  }
 
});

//delete todos
list.addEventListener('click' , e =>{
if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
}
});
//filter-search
const filterTodos = (term) => {
    Array.from(list.children)
      .forEach((todo) => {
        if (!todo.textContent.toLowerCase().includes(term)) {
          todo.classList.add('filtered');
        } else {
          todo.classList.remove('filtered');
        }
      });
  };
  
//keyup event
search.addEventListener('keyup', () =>{
const term = search.value.trim().toLowerCase();
filterTodos(term);
});

