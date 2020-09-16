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
    var endpoint = "https://flynn.boolean.careers/exercises/api/random/int"
    var clickedSquare = $(this);
    $.ajax(
      {

        url: endpoint,
        method: "GET",

        success: function (data, stato) {
          console.log("Tutto è avvenuto con successo" + data.response);

          //Azione di pulizia dello square in cui viene rimosso il colore precedente se presente
          $(clickedSquare).removeClass(greenYellow(parseInt(clickedSquare.find(".number").text())));

          //Aggiungo la classe opportuna
          $(clickedSquare).addClass(greenYellow(data.response));

          //Inserisco il numero al centro del quadrato
          $(clickedSquare).find(".number").text(data.response);
        },

        error: function (richiesta, stato, errori) {
          alert("E' avvenuto un errore. " + errore);
        }

      }
    );
  });

  //Questa funzione ritorna direttamente il nome della classe da aggiungere
  function greenYellow(number){
    if(number <= 5){
      return "yellow";
    } else {
      return "green";
    }
  }

});
