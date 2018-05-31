export const init = () => {
    let cells = document.querySelectorAll(".cell");
    cells[0].parentElement.addEventListener("click", function (event) {
        if (event.target.className == "cell") {
            event.target.classList.add("cell--active");
            cells.forEach((el) => {
                if (event.target != el) {
                    el.classList.remove("cell--active");
                }
            });
        }
    });
}