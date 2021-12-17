$(document).ready(function() {
  audio1 = new Audio("sounds/green.mp3");
  audio2 = new Audio("sounds/red.mp3");
  audio3 = new Audio("sounds/yellow.mp3");
  audio4 = new Audio("sounds/blue.mp3");
  audioWrong = new Audio("sounds/wrong.mp3");

  var StartmaxLevel = 0;
  play();

  function play() {
    var response = true;
    var level = 1
    var steps = [];
    var gameOver = false;

    var n = flasher();
    var compteur = 0
    steps.push(n);


    $(".square").on("click", function() {

      response = $(this).hasClass("" + steps[compteur]);
      if ((!gameOver)) {
        if (response) {
          playSounds(steps[compteur]);
          compteur++;
          if (compteur === steps.length) {

            level += 1;
            compteur = 0;
            $("h1").text("Level " + level);
            n = flasher();
            steps.push(n);
          }

        } else {
          audioWrong.play();
           $("body").addClass("wrong");
          setTimeout(function() {$("body").removeClass("wrong");}, 200);

          gameOver = true;
          updateMaxLevel(steps.length);
          $("h1").text("Game Over !!");
          $("h1").after('<button type="Restart" class="btn" name="button">ReStart</button>');






          $(".btn").on("click", function() {
            $(".btn").remove();
            $("h1").text("Level 1  ");
            play();
          });



        }

      }

    });









  }

  function updateMaxLevel(maxLevel) {
    if (maxLevel > StartmaxLevel) {
      StartmaxLevel = maxLevel;
      $(".maxLevel").text("Max Level est : Level " + StartmaxLevel);
    }

  }



  function playSounds(n) {
    switch (n) {
      case 1:
        audio1.play();
        break;
      case 2:
        audio2.play();
        break;
      case 3:
        audio3.play();
        break;
      case 4:
        audio4.play();
        break;
      default:

    }
  }

  function flasher() {

    var n = Math.floor(Math.random() * 4) + 1;
        playSounds(n);
    setTimeout(function() {
      $("." + n).addClass("flash");


    }, 300);
    //$("." + n).addClass("flash");

    setTimeout(function() {
      $("." + n).removeClass("flash");
    }, 600);


    return n;
  }







});
