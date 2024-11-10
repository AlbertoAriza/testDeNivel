import * as model from './model.js';
import brainFunction from './controller.js';

const listeningState = {
    selectedAnswer1: null,
    selectedAnswer2: null
};

/**
 * Esta función de EVENTO se pasará para cada una de las QUESTIONS del quiz para darle funcionalidad a los botones de respuesta.
 */
/**/export const questionHandlerFunc = function(e){
/**/    let clicked = e.target.closest('.answerContainer');
/**/    if(!clicked) return;
/**/    let answersArray = document.querySelectorAll('.answerContainer');
/**/    document.querySelector('#possibleAnswers').removeEventListener("click", questionHandlerFunc); //  → Quitamos el 'eventListener' para que no se pueda pulsar más.
/**/    model.state.counters.counterQuestions[model.state.counters.questionsLevel]++; // → Aumentamos en 1 el contador de preguntas hechas de un nivel dado.
/**/
/**/    // GESTIONAMOS EN ESTE IF SI SE HA ACERTADO O SI SE HA FALLADO
/**/    if(model.questions[model.state.counters.questionsLevel][model.state.counters.questionInLevelNumber][clicked.dataset.option]){
/**/      // → COSAS QUE PASAN SI SE ACIERTA
/**/      clicked.classList.remove("answerContainer");
/**/      clicked.classList.add("correctAnswer");
/**/      model.state.counters.rightQuestions[model.state.counters.questionsLevel]++; // aumentamos en uno el contador de las preguntas acertadas de este nivel
/**/      document.querySelector(`#star-${model.state.counters.questionInLevelNumber}`).src = 'imgs/estrella.png';
/**/    }else{
/**/      // → COSAS QUE PASAN SI SE FALLA
/**/      clicked.classList.remove("answerContainer");
/**/      clicked.classList.add("incorrectAnswer");
/**/      document.querySelector(`#star-${model.state.counters.questionInLevelNumber}`).src = 'imgs/estrella-wrong.png';
/**/    }
/**/
/**/    // → en este 'setTimeout' ponemos las cosas que pasan ANYWAY
/**/    setTimeout(function(){
/**/
/**/      // → forEach para colorear todas las respuestas posibles
/**/      answersArray.forEach(function(element){
/**/        if(model.questions[model.state.counters.questionsLevel][model.state.counters.questionInLevelNumber][element.dataset.option]){
/**/          element.classList.toggle("answerContainer");
/**/          element.classList.add("correctAnswer");
/**/        }else{
/**/          element.classList.remove("answerContainer");
/**/          element.classList.add("incorrectAnswer");
/**/        }
/**/      })
/**/
/**/      // → ACTUALIZAMOS COUNTERS GENERALES
/**/      model.state.counters.mainCounter++;
/**/      model.state.counters.preguntasHechas++;
/**/      model.state.counters.questionInLevelNumber++;
/**/    }, 1000);
/**/
/**/    // LLAMAMOS DE NUEVO LA FUNCIÓN BRAIN
/**/    setTimeout(function(){
/**/      brainFunction();
/**/    }, 2000)
/**/}
/***********************************  →→  fin de questionHandlerFunc  ←←  ***************************************************/



/**
 * Esta función de EVENTO se pasará a los <<RENDERS de LISTENINGS de A2 y B1>> para darle funcionalidad a la hora de escoger imagen de respuesta.
 */
/**/export const listeningHandlerFunc = function(e){
/**/  let clicked = e.target.closest('.fotoBox');
/**/  let img = clicked.querySelector('img');
/**/  if(!clicked) return;
/**/  let answerArray = document.querySelectorAll('.fotoBox');
/**/  document.querySelector('#answerFotoContainer').removeEventListener("click", listeningHandlerFunc); //  → Quitamos el 'eventListener' para que no se pueda pulsar más.
/**/  model.state.counters.counterListenings[model.state.counters.listeningsLevel]++; // → Aumentamos en 1 el contador de listenings hechos de un nivel dado.
/**/
/**/  // GESTIONAMOS EN ESTE IF SI SE HA ACERTADO O SI SE HA FALLADO EL LISTENING
/**/  if(model.listenings[model.state.counters.listeningsLevel][model.state.counters.listeningInLevelNumber][clicked.dataset.option]){
/**/    // → COSAS QUE PASAN SI SE ACIERTA
/**/    img.classList.remove("fotoNotChosen");
/**/    img.classList.add("fotoWin");
/**/    model.state.counters.rightListenings[model.state.counters.questionsLevel]++; // aumentamos en uno el contador de las preguntas acertadas de este nivel
/**/    document.querySelector(`#star-${model.state.counters.listeningInLevelNumber}`).src = 'imgs/estrella.png'; // cambiamos la imagen de la estrella a estrella acertada
/**/  }else{
/**/    // → COSAS QUE PASAN SI SE FALLA
/**/    img.classList.remove("fotoNotChosen");
/**/    img.classList.add("fotoLose");
/**/    document.querySelector(`#star-${model.state.counters.listeningInLevelNumber}`).src = 'imgs/estrella-wrong.png'; // cambiamos imagen de estrella a estrella fallada
/**/  }
/**/
/**/  // → ACTUALIZAMOS COUNTERS NECESARIOS
/**/  setTimeout(function(){
/**/    // → forEach para colorear todas las respuestas posibles
/**/    answerArray.forEach(function(element){
/**/      const foto = element.querySelector('img');
/**/      if(model.listenings[model.state.counters.listeningsLevel][model.state.counters.listeningInLevelNumber][foto.dataset.option]){
/**/        foto.classList.toggle("fotoNotChosen");
/**/        foto.classList.add("fotoWin");
/**/      }else{
/**/        foto.classList.remove("fotoNotChosen");
/**/        foto.classList.add("fotoLose");
/**/      }
/**/    })
/**/
/**/    // → ACTUALIZAMOS COUNTERS GENERALES
/**/    actualizarCounters();
/**/  }, 1000);
/**/
/**/  // LLAMAMOS DE NUEVO LA FUNCIÓN BRAIN
/**/  callBrain();
/**/}
/**************************************  →→  end of listeningHandlerFunc function  ←←  ********************************************/



/**
 * Esta función de EVENTO se pasará a los <<RENDERS de LISTENINGS de B2>> para darles funcionalidad a la hora de escoger opción de respuesta
 *  1.-  Se selecciona los botones clicables con el <<Codigo Magia>> y se anula el evento cuando ya se ha clicado.
 *  2.-  Se ejecuta código si se acierta la pregunta
 *        a.-  gestion de estilos de los botones al acertar.
 *        b.-  gestion de counter de listenings acertados.
 *        c.-  render de estrella acertada.
 *  3.-  Se ejecuta código si se falla la pregunta
 *        a.-  gestion de estilos de los botones al fallar.
 *        b.-  render de estrella fallada
 */
/**/export const listeningHandlerFuncB2 = function(e){
/**/  let clicked = e.target.closest('.answerContainer');
/**/  if(!clicked) return;
/**/  let answersArray = document.querySelectorAll('.answerContainer');
/**/  document.querySelector('#answersB2Container').removeEventListener("click", listeningHandlerFuncB2); //  → Quitamos el 'eventListener' para que no se pueda pulsar más.
/**/  model.state.counters.counterListenings[model.state.counters.listeningsLevel]++; // → Aumentamos en 1 el contador de LISTENINGS hechas de un nivel dado.
/**/  
/**/  // GESTIONAMOS EN ESTE IF SI SE HA ACERTADO O SI SE HA FALLADO EL LISTENING
/**/  if(model.listenings[model.state.counters.listeningsLevel][model.state.counters.listeningInLevelNumber][clicked.dataset.option]){
/**/  
/**/      // → COSAS QUE PASAN SI SE ACIERTA
/**/      clicked.classList.remove("answerContainer"); // eliminamos los estilos previos de la opción elegida.
/**/      clicked.classList.add("correctAnswer"); // añadimos los nuevos estilos de acertado
/**/      model.state.counters.rightListenings[model.state.counters.questionsLevel]++; // aumentamos en uno el contador de lOs LISTENINGS acertadas de este nivel
/**/      document.querySelector(`#star-${model.state.counters.listeningInLevelNumber}`).src = 'imgs/estrella.png'; // cambiamos la imagen de la estrella a estrella acertada
/**/  }else{
/**/      // → COSAS QUE PASAN SI SE FALLA
/**/      clicked.classList.remove("answerContainer");
/**/      clicked.classList.add("incorrectAnswer");
/**/      document.querySelector(`#star-${model.state.counters.listeningInLevelNumber}`).src = 'imgs/estrella-wrong.png';
/**/  }
/**/
/**/  // → en este 'setTimeout' ponemos las cosas que pasan ANYWAY
/**/  setTimeout(function(){
/**/
/**/    // → forEach para colorear todas las respuestas posibles
/**/    answersArray.forEach(function(element){
/**/      if(model.listenings[model.state.counters.listeningsLevel][model.state.counters.listeningInLevelNumber][element.dataset.option]){
/**/        element.classList.remove("answerContainer");
/**/        element.classList.add("correctAnswer");
/**/      }else{
/**/        element.classList.remove("answerContainer");
/**/        element.classList.add("incorrectAnswer");
/**/      }
/**/    })
/**/
/**/    // → ACTUALIZAMOS COUNTERS GENERALES
/**/      actualizarCounters();
/**/  }, 1000);
/**/
/**/  // LLAMAMOS DE NUEVO LA FUNCIÓN BRAIN
/**/   callBrain();
/**/}
/*************************************** →→  FIN FUNCIÓN DE EVENTO DE LISTENINGS DE B2  ←←  ***************************************/



/**
 * Esta función se manda como parámetro al <<RENDER de LISTENING de C1 PRIMERA PREGUNTA>> para darle funcionalidad a la hora de escoger opción de respuesta
 * 
 */
/**/export const listeningHandlerFuncC1 = function(e){
/**/    const button = e.target.closest('.answerContainer');
/**/    if (button) {
/**/        document.querySelector('#answersC1Container1').querySelectorAll('.answerContainer').forEach(btn => {
/**/            btn.classList.remove('selected');
/**/        });
/**/        button.classList.add('selected');
/**/        listeningState.selectedAnswer1 = button.dataset.option;
/**/    }
/**/}
/************************************** →→  FIN FUNCIÓN DE EVENTO DE LISTENINGS DE C1 PRIMERA PREGUNTA  ←←  ****************************************/


/**
 * Esta función se manda como parámetro al <<RENDER de LISTENING de C1 - SEGUNDA PREGUNTA>> para darle funcionalidad a la hora de escoger opción de respuesta
 * 
 */
/**/export const listeningHandlerFuncC1_2 = function(e){
/**/    const button = e.target.closest('.answerContainer');
/**/    if (button) {
/**/        document.querySelector('#answersC1Container2').querySelectorAll('.answerContainer').forEach(btn => {
/**/            btn.classList.remove('selected');
/**/        });
/**/        button.classList.add('selected');
/**/        listeningState.selectedAnswer2 = button.dataset.option;
/**/    }
/**/}
/**************************************  →→  FIN FUNCIÓN DE EVENTO DE LISTENINGS DE C1 SEGUNDA PREGUNTA  ←←  ****************************************/


/**
 * Esta función se manda como parámetro al <<RENDER de LISTENING de C1 - BOTÓN ENVIAR PREGUNTAS>> para darle funcionalidad a la hora de escoger opción de respuesta
 * 
 */
/**/export const listeningHandlerFuncC1_3 = function(){
/**/    // Remove event listeners
/**/    const removeListeners = () => {
/**/        document.querySelector('#answersC1Container1').removeEventListener('click', listeningHandlerFuncC1);
/**/        document.querySelector('#answersC1Container2').removeEventListener('click', listeningHandlerFuncC1_2);
/**/        document.querySelector('#submitAnswers').removeEventListener('click', listeningHandlerFuncC1_3);
/**/    };
/**/
/**/    // Helper function to update UI
/**/    const updateQuestionUI = (isCorrect, questionNumber, selectedButton) => {
/**/        const currentLevel = model.state.counters.listeningInLevelNumber + questionNumber;
/**/        const starImage = isCorrect ? 'estrella.png' : 'estrella-wrong.png';
/**/        const buttonClass = isCorrect ? 'correctAnswer' : 'incorrectAnswer';
/**/
/**/        document.querySelector(`#star-${currentLevel}`).src = `imgs/${starImage}`;
/**/        selectedButton.classList.remove('answerContainer', 'selected');
/**/        selectedButton.classList.add(buttonClass);
/**/    };
/**/
/**/    if (listeningState.selectedAnswer1 && listeningState.selectedAnswer2) {
/**/        removeListeners();
/**/        const level = model.state.counters.listeningsLevel;
/**/        const currentNumber = model.state.counters.listeningInLevelNumber;
/**/
/**/        // Check first question
/**/        const isCorrect1 = model.listenings[level][currentNumber][0][listeningState.selectedAnswer1];
/**/        updateQuestionUI(isCorrect1, model.state.counters.listeningInLevelNumber === 0 ? 0 : 1, document.querySelector('#answersC1Container1 .selected'));
/**/        model.state.counters.rightListenings[model.state.counters.questionsLevel] += isCorrect1 ? 1 : 0;
/**/        model.state.counters.counterListenings[model.state.counters.questionsLevel]++;
/**/
/**/        // Check second question
/**/        const isCorrect2 = model.listenings[level][currentNumber][1][listeningState.selectedAnswer2];
/**/        updateQuestionUI(isCorrect2, model.state.counters.listeningInLevelNumber === 0 ? 1 : 2, document.querySelector('#answersC1Container2 .selected'));
/**/        model.state.counters.rightListenings[model.state.counters.questionsLevel] += isCorrect2 ? 1 : 0;
/**/        model.state.counters.counterListenings[model.state.counters.questionsLevel]++;
/**/
/**/    } else {
/**/        alert('Please select both answers before submitting');
/**/    }
/**/    setTimeout(() => {
/**/        actualizarCounters();
/**/        callBrain();
/**/    }, 1000);
/**/}
/************************************** →→  FIN FUNCIÓN DE EVENTO DE LISTENINGS DE C1 BOTÓN ENVIAR PREGUNTAS  ←←  ************************************/






/**
 * Esta función se manda al renderizar el statsScreenView para el addEventListener.
 * Al ejecutarse en el eventListener ajusta todos los counters para el siguiente nivel y lanza pregunta nueva llamando a brainFunction()
 */
/**/export const statsHandlerFunction = function(){
/**/    ajusteCounters();
/**/    brainFunction();
/**/}
/******************************************* →→  FIN FUNCIÓN DE EVENTO DE STATS  ←←*******************************************/



/*___      __         _           _             
 | _ \___ / _|__ _ __| |_ ___ _ _(_)_____ _ _ _ 
 |   / -_)  _/ _` / _|  _/ _ \ '_| |_ / _` | '_|
 |_|_\___|_| \__,_\__|\__\___/_| |_/__\__,_|_|
*/

/**
 * Esta función hace un ajuste de 'model.state.counters' al cambiar de un nivel al siguiente. Permite cargar las preguntas del siguiente nivel en las siguientes rondas.
 */
const ajusteCounters = function(){
  model.state.counters.questionInLevelNumber = 0;
  model.state.counters.questionsLevel++;
  model.state.counters.listeningInLevelNumber = 0;
  model.state.counters.listeningsLevel ++;
}

function actualizarCounters(){
    model.state.counters.mainCounter++;
    model.state.counters.listeningsHechos++;
    model.state.counters.listeningInLevelNumber++;
}

function callBrain(){
    setTimeout(function(){
        brainFunction();
    }, 2000);
}