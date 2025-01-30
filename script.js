document.addEventListener("DOMContentLoaded", function () {
    const divs = document.querySelectorAll(".image");
    let draggedElement = null;

    divs.forEach(div => {
        div.addEventListener("dragstart", function (event) {
            draggedElement = this;
            event.dataTransfer.setData("text/plain", this.id);
            setTimeout(() => this.style.opacity = "0.5", 0);
        });

        div.addEventListener("dragend", function () {
            this.style.opacity = "1";
        });

        div.addEventListener("dragover", function (event) {
            event.preventDefault();
        });

        div.addEventListener("drop", function (event) {
            event.preventDefault();
            let droppedElementId = event.dataTransfer.getData("text/plain");
            let droppedElement = document.getElementById(droppedElementId);
            
            if (draggedElement && draggedElement !== this) {
                let temp = this.innerHTML;
                this.innerHTML = droppedElement.innerHTML;
                droppedElement.innerHTML = temp;
            }
        });
    });
});
