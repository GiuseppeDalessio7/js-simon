/* Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!*/

/*
Da quante ore è composto un giorno? // 24 ore
Da quanti minuti è composta un'ora? // 60 minuti
Da quanti secondi è composto un minuto? // 60 secondi
Da quanti millisecondi è composto un secondo? // 1000 millisecondi
Quanti millisecondi mi separano da domani alle 9:30? // 
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi? */



/*
60000 millisecondi = 1 minuto
3.600.000 millisecondi = 1 ora
86.400.000 millisecondi = 24 ore 
*/


function countdown() {
    let now = new Date();
    let targetDate = new Date(now);
    targetDate.setDate(now.getDate() + 1);
    targetDate.setHours(9, 30, 0, 0);
    let timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
      document.getElementById("countdown").textContent = "Countdown terminato!";

    } else {
      let h = Math.floor(timeRemaining / (1000 * 60 * 60));
      let m = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      let s = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      let countdownText = `${h}:${m}:${s}`;
      document.getElementById("countdown").textContent = countdownText;

      setTimeout(countdown, 1000);
    }
  }

  
  document.addEventListener("DOMContentLoaded", countdown);
