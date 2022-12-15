// Initial Const
const root = document.querySelector("#root");
root.innerHTML = "<h2 class=' text-red-900'> To Do List </h2>";
console.log(root);
const toDoList = await fetch("https://jsonplaceholder.typicode.com/todos");
const info = await toDoList.json();
const search = document.querySelector("input");
const completeToDoHTML = info.map(createNewToDo).join(" ");


function createNewToDo(info) {
    return`<section class="bg-red-900 text-white p-6  min-w-min rounded-md">
    <h2 class="text-2xl font-semibold my-2">${info.userId}</h2>
    <ul class="flex flex-col gap-y-4 my-4">
    <li>${info.id} </li>
    <li>${info.title}</li>
    <li>${info.completed}</li>
    </ul>
    </section>

    `
}

root.classList.add("flex", "flex-col", "gap-y-4", "items-center");

root.innerHTML=` <div>
<label for="search" class="sr-only">Search</label>
<input type="search" id="search" placeholder="🔍"/>
</div>
<main class=" items-center grid grid-cols-3 gap-4">
  ${createNewToDo}
  </main>
  `;
root.classList.add( "container", "mx-auto", "grid", "grid-cols-3", "gap-4");

const completeToDoHTML = info.map(createNewToDo).join(" ");

root.innerHTML =completeToDoHTML;





