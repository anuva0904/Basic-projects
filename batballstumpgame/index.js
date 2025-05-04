let scorestr=localStorage.getItem('Score');
let score;
resetscore(scorestr);
function resetscore(scorestr){
  score=scorestr ? JSON.parse(scorestr) : {
  win:0,
  loss:0,
  tie:0,
};

score.displayscore = function(){
  return ` win:${score.win} loss:${score.loss} tie:${score.tie}`;
};

showResult();
}

function generateComputerChoice() {
  //This will generate random number between 0 and 3
  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    return 'Bat';
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return 'Ball';
  } else {
    return 'Stump'
  }
}

function getResult(userMove, computerMove) {
  if (userMove === 'Bat') {
    if (computerMove === 'Ball') {
      score.win++;
      return 'User won.';
    } else if (computerMove === 'Bat') {
      score.tie++;
      return `It's a tie`;
    } else if (computerMove === 'Stump') {
      score.loss++;
      return 'Computer has won';
    }
  } else if (userMove === 'Ball') {
    if (computerMove === 'Ball') {
      score.tie++;
      return `It's a tie`;
    } else if (computerMove === 'Bat') {
      score.loss++;
      return 'Computer has won';
    } else if (computerMove === 'Stump') {
      score.win++;
      return 'User won.';
    }
  } else {
    if (computerMove === 'Ball') {
      score.loss++;
      return 'Computer has won';
    } else if (computerMove === 'Bat') {
      score.win++;
      return 'User won.';
    } else if (computerMove === 'Stump') {
      score.tie++;
      return `It's a tie`;
    }
  }
}

function showResult(userMove, computerMove, result) {
  localStorage.setItem('Score', JSON.stringify(score));
  document.querySelector('#usermove').innerText=
  userMove  ?`You have chosen ${userMove}.` : '';
  document.querySelector('#computermove').innerText=
  computerMove ? `Computer choice is ${computerMove}.`: '';
  document.querySelector('#result').innerText=
  result  ? `${result}!` : '';
  document.querySelector('#score').innerText=`${score.displayscore()}`;
}