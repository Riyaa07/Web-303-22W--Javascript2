// WEB303 Assignment 2


$(document).ready(function () {

    // prospect and animation
    $("#prospect").click(function () {
      let xhr = new XMLHttpRequest();
  
      xhr.open("GET", "prospect.html", true);
  
      xhr.send();
  
      xhr.onload = function () {
        if (xhr.status === 200) {
          let prospect = document.getElementById("content");
          prospect.style.display = "block";
          prospect.innerHTML = xhr.responseText;
  
          $("#content").load("prospect.html").hide().fadeIn(3000).css("border-radius", "10px").css("border", "3.5px inset rgb(241, 202, 208)");
        }

      };

    });

  
    // convert animation
    $("#convert").click(function () {
      let xhr = new XMLHttpRequest();
  
      xhr.open("GET", "convert.html", true);
  
      xhr.send();
  
      xhr.onload = function () {
        if (xhr.status === 200) {
          let convert = document.getElementById("content");
          convert.style.display = "block";
          convert.innerHTML = xhr.responseText;
  
          $("#content").load("convert.html").hide().fadeIn(3000).css("border-radius", "10px").css("border", "3.5px inset rgb(241, 202, 208)");
        }

      };

    });
  

    // retain and animation
    $("#retain").click(function () {
      let xhr = new XMLHttpRequest();
  
      xhr.open("GET", "retain.html", true);
  
      xhr.send();
  
      xhr.onload = function () {
        if (xhr.status === 200) {
          let retain = document.getElementById("content");
          retain.style.display = "block";
          retain.innerHTML = xhr.responseText;
  
          $("#content").load("retain.html").hide().fadeIn(3000).css("border-radius", "10px").css("border", "3.5px inset rgb(241, 202, 208)");
        }

      };

    });

});
  