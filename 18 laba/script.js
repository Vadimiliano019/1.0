$(document).ready(function() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var selectedNumbers = [];
    var timerInterval;
    var attempts = 0;
    var incorrectAttempts = 0;
    var result = 1; // Початковий результат
    var bestResult = 0;
  
    $("#start-button").click(function() {
      startGame();
    });
  
    $("#restart-button").click(function() {
      restartGame();
    });
  
    $("#play-again-button").click(function() {
      $("#congrats-modal").hide();
      restartGame();
    });
  
    function startGame() {
      $("#start-page").hide();
      $("#game-page").show();
      generateGameBoard();
      startTimer();
    }
  
    function restartGame() {
      selectedNumbers = [];
      attempts = 0;
      incorrectAttempts = 0;
      clearInterval(timerInterval);
      $(".number").removeClass("selected correct incorrect");
      $("#timer").text(60);
      $("#attempts").text(attempts);
      $("#incorrect-attempts").text(incorrectAttempts);
      result = 1; // Скидання результату на 1
      $("#result").text(result);
      startGame();
    }
  
    function generateGameBoard() {
      var gameBoard = $("#game-board");
      gameBoard.empty();
      shuffleArray(numbers);
  
      for (var i = 0; i < numbers.length; i++) {
        var number = numbers[i];
        var numberElement = $("<div></div>").text(number);
        numberElement.addClass("number");
        numberElement.css("font-size", getRandomFontSize());
        numberElement.css("color", getRandomColor());
        numberElement.click(function() {
          var selectedNumber = $(this).text();
  
          if (selectedNumber == selectedNumbers.length + 1) {
            $(this).addClass("selected");
            selectedNumbers.push(selectedNumber);
  
            if (selectedNumbers.length === numbers.length) {
              clearInterval(timerInterval);
              showCongratsModal();
            }
          } else {
            $(this).addClass("incorrect");
            setTimeout(function() {
              $(".number").removeClass("incorrect");
            }, 500);
            alert("Не вірна цифра");
            attempts++;
            incorrectAttempts++;
            $("#attempts").text(attempts);
            $("#incorrect-attempts").text(incorrectAttempts);
          }
        });
  
        gameBoard.append(numberElement);
      }
    }
  
    function startTimer() {
      var timeLeft = parseInt($("#timer").text());
  
      timerInterval = setInterval(function() {
        timeLeft--;
        $("#timer").text(timeLeft);
  
        if (timeLeft === 0) {
          clearInterval(timerInterval);
          showCongratsModal();
        }
      }, 1000);
    }
  
    function showCongratsModal() {
      $("#game-page").hide();
      $("#congrats-modal").show();
      updateStats();
    }
  
    function updateStats() {
      if (selectedNumbers.length === numbers.length) {
        if (attempts < bestResult || bestResult === 0) {
          bestResult = attempts;
        }
        result++;
      }
  
      $("#result").text(result); // Оновлено
      $("#stats-table").append("<tr><td>" + incorrectAttempts + "</td><td>" + attempts + "</td><td>" + result + "</td></tr>");
    }
  
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  
    function getRandomFontSize() {
      var minSize = 14;
      var maxSize = 36;
      return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize + "px";
    }
  
    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });