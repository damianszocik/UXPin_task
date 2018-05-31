export const init = () => {
    let expandToggle = document.querySelectorAll(".expand-toggle");
    expandToggle.forEach.call(expandToggle, function (e) {
        e.addEventListener('click', function (event) {
            let container = (event.target.parentElement).parentElement.querySelector(".section-content");
            if (container.classList.contains("section-content--hidden")) {
                container.className = "section-content section-content--shown";
            } else if (container.classList.contains("section-content--shown")) {
                container.className = "section-content section-content--hidden";
            }
        });
    });
}