const ctaBtnArr = document.querySelectorAll('.cta-btn');
let checkBox;
function handleCtaBtnClick(e) {
  window.scrollTo(0, 1500);
  if (e.target.classList.contains('wine-service-btn')) {
    checkBox = document.querySelector('.specialDay');
    checkBox.checked = true;
  } else if (e.target.classList.contains('wine-sampler-btn')) {
    checkBox = document.querySelector('.wineSampler');
    checkBox.checked = true;
  } else if (e.target.classList.contains('wine-test-btn')) {
    checkBox = document.querySelector('.wineTest');
    checkBox.checked = true;
  }
  const emailInput = document.querySelector('.email-input');
  emailInput.focus();
}
ctaBtnArr.forEach(function (btn) {
  btn.addEventListener('click', handleCtaBtnClick);
});
