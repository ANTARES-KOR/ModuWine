const ctaBtnArr = document.querySelectorAll(".cta-btn");
function handleCtaBtnClick(e) {
    window.scrollTo(0, 1500);
    const emailInput = document.querySelector(".email-input");
    emailInput.focus();
}
ctaBtnArr.forEach(function (btn) {
    btn.addEventListener("click", handleCtaBtnClick);
});
