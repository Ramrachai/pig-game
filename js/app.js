//======== Game section start===========
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'add', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;
score = [0, 0];
roundScore = 0;
activePlayer = 0;
var hideAfterWin = document.querySelectorAll(".dice, .btn-roll, .btn-add");

// start Reset  on load
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.querySelector(".dice").style.cssText = "display:none;";
// finish reset on load

// Start Roll Dice button
// on click -> generate random number , update dice Image, update current score
// if dice = 1 switch to next player
document.querySelector(".btn-roll").addEventListener("click", function() {
  // 1. random number
  var dice = Math.ceil(Math.random() * 6);

  // 2. display the dice image with number
  document.querySelector(".dice").style.cssText = "display:block";
  var diceDOM = document.querySelector(".dice");
  diceDOM.src = "img/dice-" + dice + ".png";
  document.getElementById("current-" + activePlayer).textContent = dice;

  // 3. update current score and if dice =1 switch player
  if (dice !== 1) {
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    nextPlayer();
  }
});
// finish Roll dice button

document.querySelector(".btn-add").addEventListener("click", function() {
  //Add current score to global score
  score[activePlayer] += roundScore;

  //update ui
  document.querySelector("#score-" + activePlayer).textContent =
    score[activePlayer];

  //check if player won the game
  if (score[activePlayer] >= 100) {
    document.querySelector("#name-" + activePlayer).textContent = "Winner!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");

    // hide dice , roll and add button after win
    // document.querySelector(".dice").style.display = "none";
    // document.querySelector(".btn-roll").style.display = "none";
    // document.querySelector(".btn-add").style.display = "none";

    for (i = 0; i < hideAfterWin.length; i++) {
      hideAfterWin[i].style.display = "none";
    }
  } else {
    //next player
    nextPlayer();
  }
});

//Start new game button
// Click on new game will reset everything
document.querySelector(".btn-new").addEventListener("click", function() {
  score = [0, 0];
  roundScore = 0;
  for (i = 0; i < hideAfterWin.length; i++) {
    hideAfterWin[i].style.display = "block";
  }
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.add("active");
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.remove("winner");
  document.querySelector(".dice").style.cssText = "display: none; ";
});
// finish new game button
function nextPlayer() {
  //next player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // document.querySelector(".dice").style.cssText = "display: none; ";
}

// ========Game section finish =======

// particle js start
/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  }
);
// particles js finish
