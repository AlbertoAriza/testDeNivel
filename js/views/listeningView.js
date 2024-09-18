function gameToListening(){
    let datos = `<div id="questionContainer">
    <p id="question">Texto pregunta la</p>
  </div>
  <div id="audioBox">
    <audio id="audio" controls>
        <source id="audioSrc" src="" type="audio/mpeg">
      Your browser does not support the audio element.
      </audio>
  </div>
  <div id="answerFotoContainer">
    <div class="fotoBox" id="fotoBox1">
        <img id="foto1" src="" alt="">
    </div>
  
    <div class="fotoBox" id="fotoBox2">
        <img id="foto2" src="" alt="">
    </div>
  
    <div class="fotoBox" id="fotoBox2">
        <img id="foto3" src="" alt="">
    </div>
  </div>`;
  
    getArticle.innerHTML = datos;
  }

let getListPregunta;
let getListAudio;
let getListAudioSrc;
let getListFoto1;
let getListFoto2;
let getListFoto3;

let getQuestionText;

let getAudioSrc;
let getAudio;

let getQuestion01;
let getLabelAnswer1a;
let getLabelAnswer1b;
let getLabelAnswer1c;

let getQuestion02;
let getLabelAnswer2a;
let getLabelAnswer2b;
let getLabelAnswer2c;

let getFormAnswerBtn;
