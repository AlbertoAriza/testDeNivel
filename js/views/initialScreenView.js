
export function loadInfoScreen(getMain){

    let datos = 
    `
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
            </div>
            <div>
            <img src="imgs/bot42_Transparent.png" alt="">
            </div>
            <div id="statsContent"></div>
            <div class="btn" id="inicio">Empezar</div>
        </div>
    `;
    
    getMain.innerHTML = datos;
}