function gameToListeningB2(){
    let datos = `<div id="questionContainer">
    <p id="question">Texto pregunta la</p>
  </div>
  <div id="audioBox">
    <audio id="audio" controls>
        <source id="audioSrc" src="" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
  </div>
  <div class="answerContainer" id="answerContainer01">
    <p class="answer" id="answer01">Respuesta 1</p>
  </div>
  <div class="answerContainer" id="answerContainer02">
    <p class="answer" id="answer02">Respuesta 2</p>
  </div>
  <div class="answerContainer" id="answerContainer03">
    <p class="answer" id="answer03">Respuesta 3</p>
  </div>`;
  
  getArticle.innerHTML = datos;
  }