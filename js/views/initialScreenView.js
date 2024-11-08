
class InitialScreenView{

    _parentElement = document.querySelector('main');
    _data;

    render(){
        const html = this._generateHTML();
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', html);
    }

    _clear(){
        this._parentElement.innerHTML = '';
    }

    _generateHTML(){
        return `
        <div id="infoMenu">
            <h2>Test de nivel</h2>
            <h3 id="statsSubtitle"></h3>
            <div id="campoTextoBox">
                <p id="campoTexto">
                Bienvenido al test de nivel de la academia LondonEye.<br /> 
                Con este test mediremos tu nivel actual de inglés.<br />
                Para hacer esto deberás responder a una serie de preguntas y 
                hacer algunas actividades de listening.
                </p>
                <br />
                <p>Si no superas el <span class="bold">80%</span> de las preguntas de gramática de cada nivel, es que no dominas dicho nivel de inglés.</p>
            </div>
            <div>
                <img src="imgs/bot42_Transparent.png" alt="">
            </div>
            <div id="statsContent"></div>
            <div class="btn" id="btn_inicio">Empezar</div>
        </div>
        `
    }

    addHandler(handlerFunction){
        document.querySelector('#btn_inicio').addEventListener('click', handlerFunction);
    }
}

export default new InitialScreenView();