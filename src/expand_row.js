export const init = () => {
    let expandRowToggle = document.querySelectorAll(".expand-row-toggle");
    expandRowToggle.forEach.call(expandRowToggle, function (e) {
        e.addEventListener('click', function (event) {
            let container;
            if (event.target.parentElement.classList.contains("form-row")) {
                container = event.target.parentElement.querySelector(".form-row__expandable");
            } else if (event.target.parentElement.classList.contains("button")) {
                container = (event.target.parentElement).parentElement.querySelector(".form-row__expandable");
            }
            if (container.classList.contains("form-row__expandable--hidden")) {
                let bottomLabels = container.parentElement.querySelectorAll(".form-row__label-bottom");
                container.className = "form-row form-row__expandable form-row__expandable--shown";
                bottomLabels[0].style.opacity = "1";
                let expandRowToggle = container.parentElement.querySelector(".expand-row-toggle");
                expandRowToggle.innerHTML = "<img src=\"img/Rectangle 157.png\">";
            } else if (container.classList.contains("form-row__expandable--shown")) {
                let bottomLabels = container.parentElement.querySelectorAll(".form-row__label-bottom");
                container.className = "form-row form-row__expandable form-row__expandable--hidden";
                bottomLabels[0].style.opacity = "0";
                let expandRowToggle = container.parentElement.querySelector(".expand-row-toggle");
                if (expandRowToggle.id = "padding-expand") {
                    expandRowToggle.innerHTML = "<img src=\"img/Group 140.png\">";
                } else {
                    expandRowToggle.innerHTML = "<img src=\"img/Group 139.png\">";
                }
            }
        });
    });
    let bottomLabels = document.querySelectorAll(".first-label");
    bottomLabels.forEach(element => {
        element.style.opacity = "0";
    });
}