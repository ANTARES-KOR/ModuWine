const ctaBtnArr = document.querySelectorAll('.cta-btn');
function handleCtaBtnClick(e) {
  window.scrollTo(0, 1500);
  if (e.target.classList.contains('wine-service-btn')) {
    const checkBoxA = document.querySelector('.specialDay');
    checkBoxA.checked = true;
  } else if (e.target.classList.contains('wine-sampler-btn')) {
    const checkBoxB = document.querySelector('.wineSampler');
    checkBoxB.checked = true;
  } else {
    const checkBoxC = document.querySelector('.wineTest');
    checkBoxC.checked = true;
  }
  const emailInput = document.querySelector('.email-input');
  emailInput.focus();
}
ctaBtnArr.forEach(function (btn) {
  btn.addEventListener('click', handleCtaBtnClick);
});
