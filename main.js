const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

function dragstart() {
    for (let dropzone of dropzones) dropzone.classList.add("highlight");
    this.classList.add("is-dragging");
}

function dragend() {
    for (let dropzone of dropzones) dropzone.classList.remove("highlight");
    this.classList.remove("is-dragging");
}

for (let card of cards) {
    card.addEventListener("dragstart", dragstart);
    card.addEventListener("dragend", dragend);
}

function toggleColor(card, color){
    card.children[0].classList.remove("green");
    card.children[0].classList.remove("blue");
    card.children[0].classList.remove("red");
    card.children[0].classList.add(color);
}

function dragover() {
    this.classList.add("over");
    const cardBeingDragged = document.querySelector(".is-dragging");

    switch (this.id) {
        case "do":
            toggleColor(cardBeingDragged, "green");
            break;
            case "doing":
            toggleColor(cardBeingDragged, "blue");
            break;
        case "done":
            toggleColor(cardBeingDragged, "red");
            break;
        }

    this.appendChild(cardBeingDragged);
}

function dragleave() {
    this.classList.remove("over");
}

for (let dropzone of dropzones) {
    dropzone.addEventListener("dragover", dragover);
    dropzone.addEventListener("dragleave", dragleave);
}