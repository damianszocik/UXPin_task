export const init = () => {
    let dropdowns = document.querySelectorAll(".dropdown");
    for (let i = 0; i < 2; i++) {
        let dropdown = dropdowns[i].querySelector("li");
        let dropdownContent = dropdowns[i].querySelector(".dropdown-content");
        let dropdownHeader = dropdowns[i].querySelector(".dropdown-header");

        dropdown.addEventListener("click", function () {
            dropdownContent.classList.toggle("dropdown-content-show");
        });

        dropdownContent.addEventListener("click", function (event) {
            if (event.target.parentElement == dropdownContent) {
                let clicked = event.target.innerHTML;
                let original = dropdownHeader.innerHTML
                dropdownHeader.innerHTML = clicked;
                event.target.innerHTML = original;
                dropdownContent.classList.toggle("dropdown-content-show");

            }
        });
    }
}
