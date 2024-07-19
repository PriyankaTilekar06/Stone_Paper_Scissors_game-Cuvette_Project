
setTimeout(() => {
    document.body.classList.remove("preload");
  }, 500);
  
  const btnRules = document.querySelector(".rules-btn");
  const btnClose = document.querySelector(".close-btn");
  const modalRules = document.querySelector(".modal");
  
  const CHOICES = [
    {
      name: "paper",
      beats: "rock",
    },
    {
      name: "scissors",
      beats: "paper",
    },
    {
      name: "rock",
      beats: "scissors",
    },
  ];
  const choiceButtons = document.querySelectorAll(".choice-btn");
  const gameDiv = document.querySelector(".game");
  const resultsDiv = document.querySelector(".results");
  const resultDivs = document.querySelectorAll(".results__result");
  
  const resultWinner = document.querySelector(".results__winner");
  const resultText = document.querySelector(".results__text");
  
  const playAgainBtn = document.querySelector(".play-again");
  const nextBtn = document.querySelector(".next-btn");
  
  const computerNumber = document.querySelector(".computer__number");
  const yourNumber = document.querySelector(".your__number");

  let score = 0;
  let userScore = 0;
  
 
  choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const choiceName = button.dataset.choice;
      const choice = CHOICES.find((choice) => choice.name === choiceName);
      choose(choice);
    });
  });
  
  function choose(choice) {
    const aichoice = aiChoose();
    displayResults([choice, aichoice]);
    displayWinner([choice, aichoice]);
  }
  
  function aiChoose() {
    const rand = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[rand];
  }
  
  function displayResults(results) {
    resultDivs.forEach((resultDiv, idx) => {
      setTimeout(() => {
        resultDiv.innerHTML = `
          <div class="choice ${results[idx].name}">
            <img src="Group-${results[idx].name}.png" alt="${results[idx].name}" />
          </div>
        `;
      }, idx * 100);
    });
  
    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");
  }
  
  function displayWinner(results) {
    setTimeout(() => {
      const userWins = isWinner(results);
      const aiWins = isWinner(results.reverse());

  
      if (userWins) {
        resultText.innerText = "YOU WIN AGAINST PC";
        resultDivs[0].classList.toggle("winner");
        keepScore(1);
        nextBtn.style.display = "inline-block";
      } else if (aiWins) {
        resultText.innerText = "YOU LOOSE AGAINST PC";
        resultDivs[1].classList.toggle("winner");
        keepScore(-1);
        nextBtn.style.display = "none";
      } else {
        resultText.innerText = "TIE";
        nextBtn.style.display = "none";
      }
      resultWinner.classList.toggle("hidden");
      resultsDiv.classList.toggle("show-winner");
    }, 1000);
  }
  
  function isWinner(results) {
    return results[0].beats === results[1].name;
  }
  
  function keepScore(point) {
    if (point === 1) {
        userScore++;
        yourNumber.innerText = userScore;
    } else if (point === -1) {
        score++;
        computerNumber.innerText = score;
    }
}
  

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