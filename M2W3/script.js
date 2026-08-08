    const form = document.getElementById("todo-form");
    const input = document.getElementById("description");
    const todoList = document.getElementById("todo-list");  

    let toDoArray = [];

    function render() {
        const todo = toDoArray.map((list) => {
           return `<li data-id="${list.id}">${list.title}
            <input id="check" type="checkbox" ${list.done ? "checked" : ""}>
           <button class="edit">Edit</button>
            <button class="delete">delete</button>
           </li>
             `;
       });

       todoList.innerHTML = todo.join("");
    }

    todoList.addEventListener("click", function(event){
      // console.log(event.target);

      //delete button 
      if (event.target.classList.contains("delete")) {
        const li = event.target.parentElement;
        const id = Number(li.dataset.id);

        // console.log(id);

        toDoArray = toDoArray.filter((todo) => 
        todo.id !== id);

        

        store();
      
        render();
        
        // alert("deleted");

      }
        //checkbox
        if (event.target.tagName === "INPUT") {
           const li = event.target.parentElement;
           const id = Number(li.dataset.id);

           const todo = toDoArray.find((item) => 
             item.id === id);

          todo.done = !todo.done;
          
           store();

           render();

          //  console.log(id);
        }

        //edit title 
        if (event.target.classList.contains("edit")) {
          const li = event.target.parentElement;
          const id = Number(li.dataset.id);
          
          const todo = toDoArray.find((item) => 
             item.id === id);

          const newTitle = prompt("Enter a new title:", todo.title);

          if (newTitle && newTitle.trim() !== "") {
            todo.title = newTitle.trim();
          }

          store();

          render();

        }
    });

    //localStorage
    function store() {
      localStorage.setItem("todos",JSON.stringify(toDoArray));
    }

    function hydrate() {
      const saved = localStorage.getItem("todos");

      if (saved) {
        toDoArray = JSON.parse(saved)
      }
    }
    
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      
      const title = input.value;
      if (title.trim() === "" ) return;

      
      const newTodoObject = {
          id: Date.now(), //to ive ever todo different id
          title,// we can shorten it to title, only
          done: false,
       }; 

      toDoArray.push(newTodoObject);

      store();

      render();

      input.value = "";// to cleare th input box
    });

    function editTitle() {
      const newTitle = prompt("Edit title:", data[id].title);
      if (newTitle) {
        data[id].title = newTitle;
        store();
        render();
      }
    }
    
    hydrate();
    render();
    //  localStorage.clear(); to clar old todo 