

class GameToQuestions{

  _parentElement = document.querySelector('main');
  _state;
  _questionArr;
    
  render(state, questionArr){
    
    this._state = state;
    this._questionArr = questionArr;
    const html = this._generateHTML();
    this._parentElement.innerHTML = '';
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  _generateHTML(){
        return `
          <article>
            <div id="questionContainer">
              <p id="question">${this._questionArr[0]}</p>
            </div>
            <div id="possibleAnswers">
              <button data-option="5" class="answerContainer" id="answerContainer01">
                <p class="answer" id="answer01">${this._questionArr[1]}</p>
              </button>
              <button data-option="6" class="answerContainer" id="answerContainer02">
                <p class="answer" id="answer02">${this._questionArr[2]}</p>
              </button>
              <button data-option="7" class="answerContainer" id="answerContainer03">
                <p class="answer" id="answer03">${this._questionArr[3]}</p>
              </button>
              <button data-option="8" class="answerContainer" id="answerContainer04">
                <p class="answer" id="answer04">${this._questionArr[4]}</p>
              </button>
            </div>
          </article>
        `
  }

  addHandler(handlerFunction){
    // ACTIVAR LOS BOTONES DE RESPUESTA
    document.querySelector('#possibleAnswers').addEventListener('click', handlerFunction)
  }
}

export default new GameToQuestions();