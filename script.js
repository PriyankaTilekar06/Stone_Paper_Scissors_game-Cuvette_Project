const btnRules = document.querySelector(".rules-btn");
const btnClose = document.querySelector(".close-btn");
const modalRules = document.querySelector(".modal");

const playAgainBtn = document.querySelector(".play-again");

playAgainBtn.addEventListener("click", () => {
    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");
  
    resultDivs.forEach((resultDiv) => {
      resultDiv.innerHTML = "";
      resultDiv.classList.remove("winner");
    });
  
    resultText.innerText = "";
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
  });

btnRules.addEventListener("click", () => {
    modalRules.classList.toggle("show-modal");
});

btnClose.addEventListener("click", () => {
    modalRules.classList.toggle("show-modal");
});