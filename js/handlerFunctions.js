export const listeningHandlerFuncB2 = function(e){
    let clicked = e.target.closest('.answerContainer');
    if(!clicked) return;
    let answersArray = document.querySelectorAll('.answerContainer');
    document.querySelector('#answersB2Container').removeEventListener("click", listeningHandlerFuncB2); //  → Quitamos el 'eventListener' para que no se pueda pulsar más.
    model.state.counters.counterListenings[model.state.counters.listeningsLevel]++; // → Aumentamos en 1 el contador de LISTENINGS hechas de un nivel dado.
    
    // GESTIONAMOS EN ESTE IF SI SE HA ACERTADO O SI SE HA FALLADO EL LISTENING
    if(model.listenings[model.state.counters.listeningsLevel][model.state.counters.listeningInLevelNumber][clicked.dataset.option]){
    
        // → COSAS QUE PASAN SI SE ACIERTA
        clicked.classList.remove("answerContainer"); // eliminamos los estilos previos de la opción elegida.
        clicked.classList.add("correctAnswer"); // añadimos los nuevos estilos de acertado
        model.state.counters.rightListenings[model.state.counters.questionsLevel]++; // aumentamos en uno el contador de lOs LISTENINGS acertadas de este nivel
        document.querySelector(`#star-${model.state.counters.listeningInLevelNumber}`).src = 'imgs/estrella.png'; // cambiamos la imagen de la estrella a estrella acertada
    }else{
        // → COSAS QUE PASAN SI SE FALLA
        clicked.classList.remove("answerContainer");
        clicked.classList.add("incorrectAnswer");
        document.querySelector(`#star-${model.state.counters.questionInLevelNumber}`).src = 'imgs/estrella-wrong.png';
    }

    // → en este 'setTimeout' ponemos las cosas que pasan ANYWAY
    setTimeout(function(){

      // → forEach para colorear todas las respuestas posibles
      answersArray.forEach(function(element){
        if(model.listenings[model.state.counters.listeningsLevel][model.state.counters.listeningInLevelNumber][foto.dataset.option]){
          element.classList.toggle("answerContainer");
          element.classList.add("correctAnswer");
        }else{
          element.classList.remove("answerContainer");
          element.classList.add("incorrectAnswer");
        }
      })

      // → ACTUALIZAMOS COUNTERS GENERALES
        model.state.counters.mainCounter++;
        model.state.counters.listeningsHechos++;
        model.state.counters.listeningInLevelNumber++;
    }, 1000);

    // LLAMAMOS DE NUEVO LA FUNCIÓN BRAIN
    setTimeout(function(){
        brainFunction();
    }, 2000)
}