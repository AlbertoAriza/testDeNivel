
class StatsScreenView{

    _parentElement = document.querySelector('main');
    _state;
    _progress1;

    render(state){
        this._state = state;
        document.querySelector('#header').innerHTML = '';
        document.querySelector('#footer').innerHTML = '';
        this._parentElement.innerHTML = '';
        const html = this._generateHTML();
        this._parentElement.innerHTML = html;

        if(this._state.counters.questionsLevel === 0 || this._state.counters.questionsLevel === 5){

            this._progress1 = 100 * this._state.counters.rightQuestions[this._state.counters.questionsLevel] / this._state.counters.counterQuestions[this._state.counters.questionsLevel];
            const getProgressbar1 = document.querySelector(`.progressbar1`);
            getProgressbar1.setAttribute("role", "progressbar1");
            getProgressbar1.setAttribute("aria-valuenow", 0);
            getProgressbar1.setAttribute("aria-live", "polite")
            
            getProgressbar1.setAttribute("aria-valuenow", this._progress1);
            getProgressbar1.style.setProperty(`--progress1`, this._progress1 + "%");
        }else{
            let progress1 = 100 * this._state.counters.rightQuestions[this._state.counters.questionsLevel] / this._state.counters.counterQuestions[this._state.counters.questionsLevel];
            let progress2 = 100 * this._state.counters.rightListenings[this._state.counters.questionsLevel] / this._state.counters.counterListenings[this._state.counters.questionsLevel];
            const getProgressbar1 = document.querySelector(`.progressbar1`);
            getProgressbar1.setAttribute("role", "progressbar1");
            getProgressbar1.setAttribute("aria-valuenow", 0);
            getProgressbar1.setAttribute("aria-live", "polite")
            getProgressbar1.setAttribute("aria-valuenow", progress1);
            getProgressbar1.style.setProperty(`--progress1`, progress1 + "%");
                
            const getProgressbar2 = document.querySelector(`.progressbar2`);
            getProgressbar2.setAttribute("role", "progressbar2");
            getProgressbar2.setAttribute("aria-valuenow2", 0);
            getProgressbar2.setAttribute("aria-live", "polite")
            getProgressbar2.setAttribute("aria-valuenow2", progress2);
            getProgressbar2.style.setProperty(`--progress2`, progress2 + "%");
        }
    }

    _generateHTML(){
        if(this._state.counters.questionsLevel === 0 || this._state.counters.questionsLevel === 5){

            return `
                <section id="statsContainer">
                    <!--main title-->
                    <h3 id="statsResultsH3">Resultados</h3>
                    <p id="parrafo_resultado">Has acertado <span>${this._state.counters.rightQuestions[this._state.counters.questionsLevel]}</span> de <span>${this._state.counters.counterQuestions[this._state.counters.questionsLevel]}</span> preguntas de gramática.</p>
                    
                    <!--twin titles-->
                    <div class="statsTwinTitleContainer">
                        <div id="statsQuestions">
                            <h4>Preguntas</h4>                            
                        </div>
                    </div>
                    
                    <!--twin stats-->
                    <div id="progressbarContainer">
                        <div class="progressbar1">
                            <p>Only works with JS enabled</p>
                        </div>
                    </div>
                    <div class="btn_container">
                        <button class="btn" id="btn_continue">${this._state.counters.rightQuestions[this._state.counters.questionsLevel] >= 8 ? 'Continuar' : 'Terminar'}</button>
                    </div>
                </section>
            `
        }else{
            return `
                <section id="statsContainer">
                    <!--main title-->
                    <h3 id="statsResultsH3">Resultados</h3>
                    <p id="parrafo_resultado">Has acertado <span>${this._state.counters.rightQuestions[this._state.counters.questionsLevel]}</span> de <span>${this._state.counters.counterQuestions[this._state.counters.questionsLevel]}</span> preguntas de gramática.</p>
                    <p id="parrafo_resultado">Has acertado <span>${this._state.counters.rightListenings[this._state.counters.questionsLevel]}</span> de <span>${this._state.counters.counterListenings[this._state.counters.questionsLevel]}</span> preguntas de listening.</p>

                    <!--twin titles-->
                    <div class="statsTwinTitleContainer">
                        <div id="statsQuestions"><h4>Preguntas</h4></div>
                        <div id="statsListenings"><h4>Listenings</h4></div>
                    </div>

                    <!--twin stats-->
                    <div id="progressbarContainer">
                        <div class="progressbar1">
                            <p>Only works with JS enabled</p>
                        </div>
                        <div class="progressbar2">
                            <p>Only works with JS enabled</p>
                        </div>
                    </div>
                    <div class="btn_container">
                        <button class="btn" id="btn_continue">${this._state.counters.rightQuestions[this._state.counters.questionsLevel] >= 8 ? 'Continuar' : 'Terminar'}</button>
                    </div>
                </section>
            `
        }
    }

    addHandler(handlerFunction){
        document.querySelector('#btn_continue').addEventListener('click', handlerFunction);
    }
}

export default new StatsScreenView();
