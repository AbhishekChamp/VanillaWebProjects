const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const toKnowList = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "React",
    "Python",
    "FastAPI",
    "SQL Server",
    "Celery",
    "Docker",
];

// Store list items
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
    [...toKnowList]
        .map((a) => ({ value: a, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
        .forEach((topic, index) => {
            const listItem = document.createElement("li");

            listItem.setAttribute("data-index", index);

            listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable="true">
                <p class="topic-name">${topic}</p>
                <i class="fas fa-grip-lines"></i>
            </div>
        `;

            listItems.push(listItem);

            draggable_list.appendChild(listItem);
        });
}

function dragStart() {
    dragStartIndex = +this.closest("li").getAttribute("data-index");
}

function dragEnter() {
    this.classList.add("over");
}

function dragLeave() {
    this.classList.remove("over");
}

function dragOver(e) {
    e.preventDefault();
}

function dragDrop() {
    const dragEndIndex = +this.getAttribute("data-index");
    swapItems(dragStartIndex, dragEndIndex);
    this.classList.remove("over");
}

function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector(".draggable");
    const itemTwo = listItems[toIndex].querySelector(".draggable");

    listItems[fromIndex].appendChild(itemOne);
    listItems[toIndex].appendChild(itemTwo);
}

function addEventListeners() {
    const draggables = document.querySelectorAll(".draggable");
    const dragListItems = document.querySelectorAll(".draggable-list li");

    draggables.forEach((draggable) => {
        draggable.addEventListener("dragstart", dragStart);
    });

    dragListItems.forEach((item) => {
        item.addEventListener("dragover", dragOver);
        item.addEventListener("drop", dragDrop);
        item.addEventListener("dragenter", dragEnter);
        item.addEventListener("dragleave", dragLeave);
    });
}
