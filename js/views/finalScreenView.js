class FinalScreenView{
    _parentElement = document.querySelector('main');
    _state;


    render(state){
        this._state = state;
        document.querySelector('#header').innerHTML = '';
        document.querySelector('#footer').innerHTML = '';
        this._parentElement.innerHTML = '';
        const html = this._generateHTML();
        this._parentElement.innerHTML = html;

        // → PARTE LÓGICA DE LOS CONTADORES Y PORCENTAJES
        // finalProgressbar1 → Grammar A1 (0)
        let finalProgressbar1 = this._state.counters.counterQuestions[0] > 0 ? 100 * this._state.counters.rightQuestions[0] / this._state.counters.counterQuestions[0] : 0;
        const getfinalProgressbar1 = document.querySelector(`.finalProgressbar1`);
        getfinalProgressbar1.setAttribute("role", "finalProgressbar1");
        getfinalProgressbar1.setAttribute("aria-valuenow", 0);
        getfinalProgressbar1.setAttribute("aria-live", "polite")
        getfinalProgressbar1.setAttribute("aria-valuenow", finalProgressbar1);
        getfinalProgressbar1.style.setProperty(`--progress1`, finalProgressbar1 + "%");
        
        // finalProgressbar2 → Grammar A2 (1)
        let finalProgressbar2 = this._state.counters.counterQuestions[1] > 0 ? 100 * this._state.counters.rightQuestions[1] / this._state.counters.counterQuestions[1] : 0;
        const getFinalProgressbar2 = document.querySelector(`.finalProgressbar2`);
        getFinalProgressbar2.setAttribute("role", "finalProgressbar2");
        getFinalProgressbar2.setAttribute("aria-valuenow", 0);
        getFinalProgressbar2.setAttribute("aria-live", "polite")
        getFinalProgressbar2.setAttribute("aria-valuenow", finalProgressbar2);
        getFinalProgressbar2.style.setProperty(`--progress2`, finalProgressbar2 + "%");

        // finalProgressbar3 → Listenings A2 (1)
        let finalProgressbar3 = this._state.counters.counterListenings[1] > 0 ? 100 * this._state.counters.rightListenings[1] / this._state.counters.counterListenings[1] : 0;
        const getfinalProgressbar3 = document.querySelector(`.finalProgressbar3`);
        if (getfinalProgressbar3) {
            getfinalProgressbar3.setAttribute("role", "finalProgressbar3");
            getfinalProgressbar3.setAttribute("aria-valuenow", 0);
            getfinalProgressbar3.setAttribute("aria-live", "polite");
            getfinalProgressbar3.setAttribute("aria-valuenow", finalProgressbar3);
            getfinalProgressbar3.style.setProperty(`--progress3`, finalProgressbar3 + "%");
        }

        // finalProgressbar4 → Grammar B1 (2)
        let finalProgressbar4 = this._state.counters.counterQuestions[2] > 0 ? 100 * this._state.counters.rightQuestions[2] / this._state.counters.counterQuestions[2] : 0;
        const getFinalProgressbar4 = document.querySelector(`.finalProgressbar4`);
        if (getFinalProgressbar4) {
            getFinalProgressbar4.setAttribute("role", "finalProgressbar4");
            getFinalProgressbar4.setAttribute("aria-valuenow", 0);
            getFinalProgressbar4.setAttribute("aria-live", "polite");
            getFinalProgressbar4.setAttribute("aria-valuenow", finalProgressbar4);
            getFinalProgressbar4.style.setProperty(`--progress4`, finalProgressbar4 + "%");
        }

        // finalProgressbar5 → Listenings B1 (2)
        let finalProgressbar5 = this._state.counters.counterListenings[2] > 0 ? 100 * this._state.counters.rightListenings[2] / this._state.counters.counterListenings[2] : 0;
        const getfinalProgressbar5 = document.querySelector(`.finalProgressbar5`);
        if (getfinalProgressbar5) {
            getfinalProgressbar5.setAttribute("role", "finalProgressbar5");
            getfinalProgressbar5.setAttribute("aria-valuenow", 0);
            getfinalProgressbar5.setAttribute("aria-live", "polite");
            getfinalProgressbar5.setAttribute("aria-valuenow", finalProgressbar5);
            getfinalProgressbar5.style.setProperty(`--progress5`, finalProgressbar5 + "%");
        }

        // finalProgressbar6 → Grammar B2 (3)
        let finalProgressbar6 = this._state.counters.counterQuestions[3] > 0 ? 100 * this._state.counters.rightQuestions[3] / this._state.counters.counterQuestions[3] : 0;
        const getFinalProgressbar6 = document.querySelector(`.finalProgressbar6`);
        if (getFinalProgressbar6) {
            getFinalProgressbar6.setAttribute("role", "finalProgressbar6");
            getFinalProgressbar6.setAttribute("aria-valuenow", 0);
            getFinalProgressbar6.setAttribute("aria-live", "polite");
            getFinalProgressbar6.setAttribute("aria-valuenow", finalProgressbar6);
            getFinalProgressbar6.style.setProperty(`--progress6`, finalProgressbar6 + "%");
        }

        // finalProgressbar7 → Listenings B2 (3)
        let finalProgressbar7 = this._state.counters.counterListenings[3] > 0 ? 100 * this._state.counters.rightListenings[3] / this._state.counters.counterListenings[3] : 0;
        const getfinalProgressbar7 = document.querySelector(`.finalProgressbar7`);
        if (getfinalProgressbar7) {
            getfinalProgressbar7.setAttribute("role", "finalProgressbar7");
            getfinalProgressbar7.setAttribute("aria-valuenow", 0);
            getfinalProgressbar7.setAttribute("aria-live", "polite");
            getfinalProgressbar7.setAttribute("aria-valuenow", finalProgressbar7);
            getfinalProgressbar7.style.setProperty(`--progress7`, finalProgressbar7 + "%");
        }

        // finalProgressbar8 → Grammar C1 (4)
        let finalProgressbar8 = this._state.counters.counterQuestions[4] > 0 ? 100 * this._state.counters.rightQuestions[4] / this._state.counters.counterQuestions[4] : 0;
        const getFinalProgressbar8 = document.querySelector(`.finalProgressbar8`);
        if (getFinalProgressbar8) {
            getFinalProgressbar8.setAttribute("role", "finalProgressbar8");
            getFinalProgressbar8.setAttribute("aria-valuenow", 0);
            getFinalProgressbar8.setAttribute("aria-live", "polite");
            getFinalProgressbar8.setAttribute("aria-valuenow", finalProgressbar8);
            getFinalProgressbar8.style.setProperty(`--progress8`, finalProgressbar8 + "%");
        }

        // finalProgressbar9 → Listenings C1 (4)
        let finalProgressbar9 = this._state.counters.counterListenings[4] > 0 ? 100 * this._state.counters.rightListenings[4] / this._state.counters.counterListenings[4] 
        : 0;
        const getfinalProgressbar9 = document.querySelector(`.finalProgressbar9`);
        if (getfinalProgressbar9) {
            getfinalProgressbar9.setAttribute("role", "finalProgressbar9");
            getfinalProgressbar9.setAttribute("aria-valuenow", 0);
            getfinalProgressbar9.setAttribute("aria-live", "polite");
            getfinalProgressbar9.setAttribute("aria-valuenow", finalProgressbar9);
            getfinalProgressbar9.style.setProperty(`--progress9`, finalProgressbar9 + "%");
        }

        // finalProgressbar10 → Grammar C2 (5)
        let finalProgressbar10 = this._state.counters.counterQuestions[5] > 0 ? 100 * this._state.counters.rightQuestions[5] / this._state.counters.counterQuestions[5] : 0;
        const getFinalProgressbar10 = document.querySelector(`.finalProgressbar10`);
        if (getFinalProgressbar10) {
            getFinalProgressbar10.setAttribute("role", "finalProgressbar10");
            getFinalProgressbar10.setAttribute("aria-valuenow", 0);
            getFinalProgressbar10.setAttribute("aria-live", "polite");
            getFinalProgressbar10.setAttribute("aria-valuenow", finalProgressbar10);
            getFinalProgressbar10.style.setProperty(`--progress10`, finalProgressbar10 + "%");
        }

        // finalProgress11 → Listenings C2 (5)
        let finalProgressbar11 = this._state.counters.counterListenings[5] > 0 ? 100 * this._state.counters.rightListenings[5] / this._state.counters.counterListenings[5] : 0;
        const getfinalProgressbar11 = document.querySelector(`.finalProgressbar11`);
        if (getfinalProgressbar11) {
            getfinalProgressbar11.setAttribute("role", "finalProgressbar11");
            getfinalProgressbar11.setAttribute("aria-valuenow", 0);
            getfinalProgressbar11.setAttribute("aria-live", "polite");
            getfinalProgressbar11.setAttribute("aria-valuenow", finalProgressbar11);
            getfinalProgressbar11.style.setProperty(`--progress11`, finalProgressbar11 + "%");
        }

    }

    _generateHTML(){
        return `
            <section id="finalViewContainer">
                <!--main title-->
                <h3 id="statsResultsH3">Resultados</h3>

                <!--twin titles-->
                <div class="statsTwinTitleContainer">
                    <div id="levelLabel">Nivel</div>
                    <div id="statsQuestions"><h4>Grammar</h4></div>
                    <div id="statsListenings"><h4>Listening</h4></div>
                </div>

                <!--five stats-->
                <article id="finalStatsContainer">
                    <div class="finalViewLevel">
                        <img src="imgs/level_0_2.png" alt="A1 level image">
                    </div>
                    <div class="finalProgressbar1">
                        <p>Only works with JS enabled</p>
                    </div>
                    <div class="">
                        <p>Not tested</p>
                    </div>
                        
                    <div class="finalViewLevel">
                        <img src="imgs/level_1_2.png" alt="A2 level image">
                    </div>
                    <div class="finalProgressbar2">
                        <p>Only works with JS enabled</p>
                    </div>
                    <div class="finalProgressbar3">
                        <p>Only works with JS enabled</p>
                    </div>

                    <div class="finalViewLevel">
                    <img src="imgs/level_2_2.png" alt="B1 level image">
                    </div>
                    <div class="finalProgressbar4">
                        <p>Only works with JS enabled</p>
                    </div>
                    <div class="finalProgressbar5">
                        <p>Only works with JS enabled</p>
                    </div>

                    <div class="finalViewLevel">
                        <img src="imgs/level_3_2.png" alt="B2 level image">
                    </div>
                    <div class="finalProgressbar6">
                        <p>Only works with JS enabled</p>
                    </div>
                    <div class="finalProgressbar7">
                        <p>Only works with JS enabled</p>
                    </div>

                    <div class="finalViewLevel">
                        <img src="imgs/level_4_2.png" alt="C1 level image">
                    </div>
                    <div class="finalProgressbar8">
                        <p>Only works with JS enabled</p>
                    </div>
                    <div class="finalProgressbar9">
                        <p>Only works with JS enabled</p>
                    </div>

                    <div class="finalViewLevel">
                        <img src="imgs/level_5_2.png" alt="C2 level image">
                    </div>
                    <div class="finalProgressbar10">
                        <p>Only works with JS enabled</p>
                    </div>
                    <div class="">
                        <p>Not tested</p>
                    </div>
                </article>
                <div class="btn_container">
                    <button class="btn" id="btn_continue">Cerrar Test</button>
                </div>
            </section>
        `
    }

    addHandler(handlerFunction){
        document.querySelector('#btn_continue').addEventListener('click', handlerFunction);
    }
}

export default new FinalScreenView();