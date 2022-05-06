const earlyIntroText = document.querySelector(".main")
window.addEventListener("load", function(event) {
    earlyIntroText.classList.add("display");
});

const navButtons = document.querySelectorAll(".nav__link");
navButtons.forEach((e) => {
    e.addEventListener("click", () => {
        //alert("底部 Navbar 還正在準備當中。")
    })
})