$(document).ready(function() {
    // Початкові налаштування
    var currentCategory = "";
    var currentImage = "";
  
    // При кліку на кнопку "Почати гру"
    $("#start-button").click(function() {
      $("#main-page").hide();
      $("#game-page").show();
    });
  
    // При кліку на кнопку розділу
    $(".category-button").click(function() {
      currentCategory = $(this).data("category");
      generateGameArea(currentCategory);
    });
  
    // При кліку на кнопку "Почати з початку"
    $("#restart-button").click(function() {
      generateGameArea(currentCategory);
    });
  
    // При кліку на кнопку "Грати ще раз"
    $("#play-again-button").click(function() {
      $("#congrats-modal").hide();
      $("#game-page").show();
    });
  
    // Генерація поля гри
    function generateGameArea(category) {
      $("#categories").hide();
      $("#restart-button").hide();
      $("#current-image").empty();
      $("#image-grid").empty();
  
      var images = getRandomImages(category, 25);
  
      // Заповнення поля гри випадковими картинками
      for (var i = 0; i < 25; i++) {
        var img = $("<img>");
        img.attr("src", images[i]);
        $("#image-grid").append(img);
      }
  
      // Встановлення поточної картинки
      currentImage = images[Math.floor(Math.random() * 25)];
      var currentImg = $("<img>");
      currentImg.attr("src", currentImage);
      $("#current-image").append(currentImg);
  
      // Налаштування перетягування картинок
      $("#current-image img").draggable({
        revert: "invalid"
      });
      $("#image-grid img").droppable({
        drop: function(event, ui) {
          var droppedImageSrc = $(this).attr("src");
          if (droppedImageSrc === currentImage) {
            $("#current-image").empty();
            currentImage = images[Math.floor(Math.random() * 25)];
            var newCurrentImg = $("<img>");
            newCurrentImg.attr("src", currentImage);
            $("#current-image").append(newCurrentImg);
            $(this).attr("src", ui.draggable.attr("src"));
          }
        }
      });
    }
  
    // Отримання випадкових картинок з заданого розділу
    function getRandomImages(category, count) {
      var images = [];
      for (var i = 1; i <= count; i++) {
        var imagePath = "images/" + category + "/" + i + ".jpg";
        images.push(imagePath);
      }
      shuffleArray(images);
      return images;
    }
  
    // Перемішування масиву
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  
    // При успішному завершенні гри
    function showCongratsModal() {
      $("#game-page").hide();
      $("#congrats-modal").show();
    }
  });
  