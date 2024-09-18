function gameToQuestions(){
    let datos = `<div id="questionContainer">
    <p id="question">Texto pregunta la</p>
  </div>
  <div class="answerContainer" id="answerContainer01">
    <p class="answer" id="answer01">Respuesta 1</p>
  </div>
  <div class="answerContainer" id="answerContainer02">
    <p class="answer" id="answer02">Respuesta 2</p>
  </div>
  <div class="answerContainer" id="answerContainer03">
    <p class="answer" id="answer03">Respuesta 3</p>
  </div>
  <div class="answerContainer" id="answerContainer04">
    <p class="answer" id="answer04">Respuesta 4</p>
  </div>`;
    getMain.innerHTML = datos;
  
    // REACTIVAMOS LAS VARIABLES QUE ATRAPAN LOS DISTINTOS ELEMENTOS DE LAS PREGUNTAS Y OPCIONES DE RESPUESTA
    getContainerPregunta = document.getElementById('questionContainer');
    getTextoPregunta = document.getElementById('question');
    getContainerRespuesta01 = document.getElementById(`answerContainer01`);
    getTextoRespuesta01 = document.getElementById(`answer01`);
    getContainerRespuesta02 = document.getElementById(`answerContainer02`);
    getTextoRespuesta02 = document.getElementById(`answer02`);
    getContainerRespuesta03 = document.getElementById(`answerContainer03`);
    getTextoRespuesta03 = document.getElementById(`answer03`);
    getContainerRespuesta04 = document.getElementById(`answerContainer04`);
    getTextoRespuesta04 = document.getElementById(`answer04`);
  }
  
  function resetQuestionStyles(){
    getContainerRespuesta01.className ="answerContainer";
    getContainerRespuesta02.className ="answerContainer";
    getContainerRespuesta03.className ="answerContainer";
    getContainerRespuesta04.className ="answerContainer";
  }

//HACEMOS GET DE LOS CAMPOS PREGUNTA
let getContainerPregunta = document.getElementById('questionContainer');
let getTextoPregunta = document.getElementById('question');

//HACEMOS GET DE LOS CAMPOS DE RESPUESTA
let getContainerRespuesta01 = document.getElementById(`answerContainer01`);
let getTextoRespuesta01 = document.getElementById(`answer01`);
let getContainerRespuesta02 = document.getElementById(`answerContainer02`);
let getTextoRespuesta02 = document.getElementById(`answer02`);
let getContainerRespuesta03 = document.getElementById(`answerContainer03`);
let getTextoRespuesta03 = document.getElementById(`answer03`);
let getContainerRespuesta04 = document.getElementById(`answerContainer04`);
let getTextoRespuesta04 = document.getElementById(`answer04`);