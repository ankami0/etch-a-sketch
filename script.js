let gridSize = 50;

const container = document.querySelector('.container');

function fillContainer() {
    for (let i=0;i<gridSize;i++) {
        column = document.createElement("div");
        column.setAttribute("class", "column");

        for (let j=0;j<gridSize;j++) {
            cell = document.createElement("div");
            cell.setAttribute("class","cell");
            column.appendChild(cell);
        }
        container.appendChild(column);
    }   
}

function clearContainer() {
    container.replaceChildren();
}

fillContainer();
container.addEventListener("mouseover", (event) => {if (event.target.className==="cell") event.target.style.backgroundColor = "blue";})
container.addEventListener("mouseout", (event) => {  
            setTimeout(() => event.target.style.backgroundColor = "",1000);
        })

btn = document.querySelector("button");
btn.addEventListener("click", () => {
    enteredSize = +prompt("Enter size");
    gridSize = enteredSize;
    clearContainer();
    fillContainer();
})
