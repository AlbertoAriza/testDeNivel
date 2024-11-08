
class ListeningView{

  _parentElement = document.querySelector('main');
  _state;
  _listenings;
  _selectedAnswerC1_1 = null;
  _selectedAnswerC1_2 = null;

  render(state, listenings){
    this._state = state;
    this._listenings = listenings;
    const html = this._generateHTML();
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  _generateHTML(){
    if(this._state.counters.listeningsLevel < 3){ // formato de listening a cargar cuando se está en los niveles A1, A2 y B1.

      return`
      <section id="listeningContainer">
      
      <div id="questionContainer">
      <p id="question">${this._listenings[this._state.counters.listeningsLevel][this._state.counters.listeningInLevelNumber][0]}</p>
      </div>
      
      <div id="audioBox">
      <audio id="audio" controls>
      <source id="audioSrc" src="${this._listenings[this._state.counters.listeningsLevel][this._state.counters.listeningInLevelNumber][1]}" type="audio/mpeg">
      Your browser does not support the audio element.
      </audio>
      </div>
      
      <div id="answerFotoContainer">
        <div class="fotoBox" id="fotoBox1" data-option="5">
          <img class="foto fotoNotChosen" id="foto1" src="${this._listenings[this._state.counters.listeningsLevel][this._state.counters.listeningInLevelNumber][2]}" alt="" data-option="5">
        </div>
        
        <div class="fotoBox" id="fotoBox2" data-option="6">
          <img class="foto fotoNotChosen" id="foto2" src="${this._listenings[this._state.counters.listeningsLevel][this._state.counters.listeningInLevelNumber][3]}" alt="" data-option="6">
        </div>
        
        <div class="fotoBox" id="fotoBox3" data-option="7">
          <img class="foto fotoNotChosen" id="foto3" src="${this._listenings[this._state.counters.listeningsLevel][this._state.counters.listeningInLevelNumber][4]}" alt="" data-option="7">
        </div>
      </div>
      </section>
      `;
      }else if(this._state.counters.listeningsLevel === 3){ // formato de listening a cargar cuando se está en el nivel B2.
        return `
          <section id="listeningContainer">

            <div id="questionContainer">
              <p id="question">${this._listenings[this._state.counters.listeningsLevel][this._state.counters.listeningInLevelNumber][0]}</p>
            </div>

            <div id="audioBox">
              <audio id="audio" controls>
                  <source id="audioSrc" src="${this._listenings[this._state.counters.listeningsLevel][this._state.counters.listeningInLevelNumber][1]}" type="audio/mpeg">
                Your browser does not support the audio element.
                </audio>
            </div>

            <div id="answersB2Container">
              <button data-option="5" class="answerContainer" id="answerContainer01">
                <p class="answer" id="answer01">${this._listenings[this._state.counters.listeningsLevel][this._state.counters.listeningInLevelNumber][2]}</p>
              </button>
              <button data-option="6" class="answerContainer" id="answerContainer02">
                <p class="answer" id="answer02">${this._listenings[this._state.counters.listeningsLevel][this._state.counters.listeningInLevelNumber][3]}</p>
              </button>
              <button data-option="7" class="answerContainer" id="answerContainer03">
                <p class="answer" id="answer03">${this._listenings[this._state.counters.listeningsLevel][this._state.counters.listeningInLevelNumber][4]}</p>
              </button>
            </div>
          </section>
        `;
      }else if(this._state.counters.listeningsLevel === 4){ // formato de listening a cargar cuando se está en el nivel C1.
        return`
          <section id="listeningContainer">
            <h4>${this._listenings[this._state.counters.listeningsLevel][this._state.counters.listeningInLevelNumber][0][0]}</h4>
            <div id="audioBox">
              <audio id="audio" controls>
                <source id="audioSrc" src="${this._listenings[this._state.counters.listeningsLevel][this._state.counters.listeningInLevelNumber][0][1]}" type="audio/mpeg">
                Your browser does not support the audio element.
              </audio>
            </div>
            
            <!-- Question 1 -->
            <div class="questionContainerC1" id="questionContainer1">
              <p id="question1">${this._listenings[this._state.counters.listeningsLevel][this._state.counters.listeningInLevelNumber][0][2]}</p>
            </div>
            
            <div class="answersC1Container" id="answersC1Container1">
              <button data-option="6" class="answerContainer" id="answerContainer01">
                <p class="answer" id="answer01">${this._listenings[this._state.counters.listeningsLevel][this._state.counters.listeningInLevelNumber][0][3]}</p>
              </button>
              <button data-option="7" class="answerContainer" id="answerContainer02">
                <p class="answer" id="answer02">${this._listenings[this._state.counters.listeningsLevel][this._state.counters.listeningInLevelNumber][0][4]}</p>
              </button>
              <button data-option="8" class="answerContainer" id="answerContainer03">
                <p class="answer" id="answer03">${this._listenings[this._state.counters.listeningsLevel][this._state.counters.listeningInLevelNumber][0][5]}</p>
              </button>
            </div>

            <!-- Question 2 -->
            <div class="questionContainerC1" id="questionContainer2">
              <p id="question2">${this._listenings[this._state.counters.listeningsLevel][this._state.counters.listeningInLevelNumber][1][0]}</p>
            </div>
            
            <div class="answersC1Container" id="answersC1Container2">
              <button data-option="4" class="answerContainer" id="answerContainer04">
                <p class="answer" id="answer04">${this._listenings[this._state.counters.listeningsLevel][this._state.counters.listeningInLevelNumber][1][1]}</p>
              </button>
              <button data-option="5" class="answerContainer" id="answerContainer05">
                <p class="answer" id="answer05">${this._listenings[this._state.counters.listeningsLevel][this._state.counters.listeningInLevelNumber][1][2]}</p>
              </button>
              <button data-option="6" class="answerContainer" id="answerContainer06">
                <p class="answer" id="answer06">${this._listenings[this._state.counters.listeningsLevel][this._state.counters.listeningInLevelNumber][1][3]}</p>
              </button>
            </div>

            <!-- Submit Button -->
            <div class="button-container"> 
              <button id="submitAnswers" class="btn submitButton">Submit Answers</button>
              </div>

          </section>
        `;
      }
  } 

  addHandler(handlerFunction, handlerFunction2, handlerFunction3){
    if(this._state.counters.listeningsLevel < 3){
      console.log("adding the handler function al listening y sus botones");
      document.querySelector('#answerFotoContainer').addEventListener('click', handlerFunction);
    }else if(this._state.counters.listeningsLevel === 3){
      console.log("adding the handler function al listening y sus botones nivel B2");
      document.querySelector('#answersB2Container').addEventListener('click', handlerFunction);
    }else if(this._state.counters.listeningsLevel === 4){
      console.log("adding the handler function al listening y sus botones nivel C1");
      document.querySelector('#answersC1Container1').addEventListener('click', handlerFunction);
      document.querySelector('#answersC1Container2').addEventListener('click', handlerFunction2);
      document.querySelector('#submitAnswers').addEventListener('click', handlerFunction3);
    }

  }
}

export default new ListeningView();