const root = document.querySelector("#root");
root.innerHTML = "<h2 class= ' text-red-900'> To Do List </h2>";
console.log(root);

const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
const info = await resp.json();


function createNewTile(info) {
    return`<section class="bg-red-900 text-white p-6 w-3/12 min-w-max rounded-md">
    <h2 class="text-2xl font-semibold my-2">${info.userId}</h2>
    <ul class="flex gap-x-4 my-4">
    <li>${info.id} </li>
    <li>${info.title}</li>
    <li>${info.completed}</li>

    `
}



