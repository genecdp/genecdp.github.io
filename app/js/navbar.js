const lang = "zh-Hant-TW";
// const lang = "en-US";
const navbar = document.querySelector(".navbar");
fetch("app/js/navbarButtons.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(navbarButtons) {
        let navbarButtonElements = "";
        navbarButtons.forEach(navbarButton => {
            navbarButtonElements += `<a href="${navbarButton["href"]}" class="nav__link" data-nosnippet><span class="material-symbols-rounded">${navbarButton["linkIcon"]}</span><span class="nav__text">${navbarButton["linkName"][lang]}</span></a>`;
        });
        navbar.innerHTML = navbarButtonElements;
        navbar.classList.add("display");
    });