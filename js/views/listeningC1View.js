function gameToListeningC1(){
    let datos = `<!--HEADER-->
    <div id="questionContainer">
        <p id="question">Texto pregunta la</p>
    </div>
  
    <!--AUDIO-->
    <div id="audioBox">
        <audio id="audio" controls>
            <source id="audioSrc" src="" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>
  
    <!--FORMULARIO DE PREGUNTAS Y OPCIONES DE RESPUESTAS-->
    <form action="">
  
        <!--QUESTION 1-->
        <div class="formQBox" id="formQ1Box">
            <h4 class="answerH4" id="c1Question01">Pregunta 1?</h4>
            <input type="radio" name="q1" id="answ1a" value="6">
            <label id="labelAnswer1a" for="answ1a">Answer 1a</label>
            <br />
  
            <input type="radio" name="q1" id="answ1b" value="7">
            <label id="labelAnswer1b" for="answ1b">Answer 1b</label>
            <br />
  
            <input type="radio" name="q1" id="answ1c" value="8">
            <label id="labelAnswer1c" for="answ1c">Answer 1c</label>
        </div>
  
        <!--QUESTION 2-->
        <div class="formQBox" id="formQ2Box">
            <h4 class="answerH4" id="c1Question02">Pregunta 2?</h4>
  
            <input type="radio" name="q2" id="answ2a" value="13">
            <label id="labelAnswer2a" for="answ2a">Answer 2a</label>
            <br />
  
            <input type="radio" name="q2" id="answ2b" value="14">
            <label id="labelAnswer2b" for="answ2b">Answer 2b</label>
            <br />
  
            <input type="radio" name="q2" id="answ2c" value="15">
            <label id="labelAnswer2c" for="answ2c">Answer 2c</label>
        </div>
  
        <!--BOTÓN DEL FORMULARIO-->
        <div id="btnContainer">
            <button class="btn" id="formAnswerBtn">Responder</button>
        </div>
    </form>`;
    getArticle.innerHTML = datos;
  }