/*Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato*/

$(document).ready(function() {

  //Questo primo ciclo mi serve per inserire tutti i quadrati nella griglia 6x6
  for(var i = 0 ; i < 35 ; i ++){
    var square = $(".square:first-child").clone();
    $(".central-container").append(square);
  }

  $(".square").click(function(){
    $.ajax(
      {

        url: "http://www.boolean.careers/api/random/boolean",
        method: "GET",

        success: function (data, stato) {
        $("#risultati").html(data);
        },

        error: function (richiesta, stato, errori) {
        alert("E' avvenuto un errore. " + errore);
        }

      }
    );
  });

});
