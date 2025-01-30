document.addEventListener("DOMContentLoaded", function () {
    const divs = document.querySelectorAll(".image");
    let draggedElement = null;

    divs.forEach(div => {
        div.addEventListener("dragstart", function (event) {
            draggedElement = this;
            event.dataTransfer.setData("text/plain", this.id);
            setTimeout(() => this.classList.add("dragging"), 0);
        });

        div.addEventListener("dragend", function () {
            this.classList.remove("dragging");
        });

        div.addEventListener("dragover", function (event) {
            event.preventDefault();
            const dragging = document.querySelector(".dragging");
            const parent = this.parentNode;
            const siblings = [...parent.children].filter(child => child !== dragging);
            let nextSibling = siblings.find(sibling => event.clientX < sibling.getBoundingClientRect().left + sibling.offsetWidth / 2);
            parent.insertBefore(dragging, nextSibling);
        });
    });
});
