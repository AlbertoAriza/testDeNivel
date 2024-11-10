import * as model from './model.js';
import * as eventFunction from './eventFunction.js';
import initialScreenView from './views/initialScreenView.js';
import gramQuestionView from './views/gramQuestionView.js';
import listeningView from './views/listeningView.js';
import statsScreenView from './views/statsScreenView.js';
import footerStarsView from './views/footerStarsView.js';
import levelsView from './views/levelsView.js';
import finalScreenView from './views/finalScreenView.js';


/**
 * Esta función carga la pantalla final cuando no se ha superado un nivel.
 */
const loadEndScreen = function(){
  finalScreenView.render(model.state);
  finalScreenView.addHandler(eventFunction.endScreenHandlerFunction);
}



/**
 * Esta función se encarga de renderizar una pantalla que mostrará los stats conseguidos al finalizar las preguntas y listenings de un nivel.
 * Los STATS se renderizan si:
 * → Se han respondido las 10 preguntas de un nive
 * → Se han respondido correctamente 8 o más preguntas
 *  → No se ha superado el límite de 78 preguntas
 */
const showStatsFunc = function(){
  statsScreenView.render(model.state);
  if(model.state.counters.questionInLevelNumber === 10 && model.state.counters.rightQuestions[model.state.counters.questionsLevel] >= 8 && model.state.counters.mainCounter < 77){ // lo que se hace si se aprueba un nivel
    statsScreenView.addHandler(eventFunction.statsHandlerFunction);
    model.state.counters.levelsPass[model.state.counters.questionsLevel] = true;
  }else{
    console.log(model.state.counters);
    statsScreenView.addHandler(loadEndScreen);
  }
  model.state.counters.showStats = false;
}

/**
 * Esta función se encarga de hacer LOAD de la view de un LISTENING nuevo y de pasarle la función evento
 */
const loadListeningView = function(){
  listeningView.render(model.state, model.listenings);
  if(model.state.counters.listeningInLevelNumber === 0){ // Si es la primera pregunta de listening RENDERIZAR estrellas y niveles.
    footerStarsView.render(model.state);
    levelsView.render(model.state);
  };

  if(model.state.counters.listeningsLevel < 3){
    listeningView.addHandler(eventFunction.listeningHandlerFunc);
  }else if(model.state.counters.listeningsLevel === 3){
    listeningView.addHandler(eventFunction.listeningHandlerFuncB2);
  }else if(model.state.counters.listeningsLevel === 4){
    // → PONER AQUÍ EL EVENTHANDLER DE LOS LISTENINGS DE C1
    listeningView.addHandler(eventFunction.listeningHandlerFuncC1, eventFunction.listeningHandlerFuncC1_2, eventFunction.listeningHandlerFuncC1_3);
  }
}

/**
 * Esta función se encarga de cargar la View de una pregunta de gramática nueva y de pasarle la función de evento.
 */
const loadGramQuestionView = function(){
  console.log("loading another question");
  console.log(model.state.counters.mainCounter);
  
  gramQuestionView.render(model.state, model.questions[model.state.counters.questionsLevel][model.state.counters.questionInLevelNumber]);
  if(model.state.counters.questionInLevelNumber === 0) {
    footerStarsView.render(model.state);
    levelsView.render(model.state);
  }
    // añadiendo la función de evento pertinente.
    gramQuestionView.addHandler(eventFunction.questionHandlerFunc);
}

/**
 *  _             _         __              _   _          
 * | |__ _ _ __ _(_)_ _    / _|_  _ _ _  __| |_(_)___ _ _  
 * | '_ \ '_/ _` | | ' \  |  _| || | ' \/ _|  _| / _ \ ' \ 
 * |_.__/_| \__,_|_|_||_| |_|  \_,_|_||_\__|\__|_\___/_||_|                                                      
 * Esta función es la principal y organiza cuando se renderizan las distintas pantallas de preguntas, listenings y stats.
 */
const brainFunction = function(){
  if(model.state.counters.mainCounter < 10){ // → Mostramos las 10 preguntas de A1
    // render preguntas de A1
    loadGramQuestionView();
    

  }else if(model.state.counters.mainCounter === 10 && model.state.counters.showStats){ // → parada tras terminar las 10 preguntas de A1 para mostrar los stats en pantalla.
    showStatsFunc();

  }else if(model.state.counters.mainCounter < 20){ // → Mostramos las 10 preguntas de A2
    loadGramQuestionView();

  }else if(model.state.counters.mainCounter < 25){ // → Mostramos los 5 listenings de A2
    // Render LISTENINGS A2
    if(model.state.counters.mainCounter === 24)model.state.counters.showStats = true;
    loadListeningView()

  }else if(model.state.counters.mainCounter === 25 && model.state.counters.showStats){ // → parada tras terminar los 5 listenings de A2 para mostrar los stats en pantalla.
    showStatsFunc();

  /*
      →→ B1 RENDERS ←←
  */
  }else if(model.state.counters.mainCounter < 35){ // → Mostramos las 10 preguntas de B1
    // render preguntas de B1
    loadGramQuestionView();

  }else if(model.state.counters.mainCounter < 40){ // → Mostramos los 5 listenings de B1
    // render LISTENINGS de B1
    if(model.state.counters.mainCounter === 39)model.state.counters.showStats = true;
    loadListeningView();

  }else if(model.state.counters.mainCounter === 40 && model.state.counters.showStats){ // → parada tras terminar los 5 listenings de B1 para mostrar los stats en pantalla.
    showStatsFunc();

  /*
      →→ B2 RENDERS ←←
  */
  }else if(model.state.counters.mainCounter < 50){ // → Mostramos las 10 preguntas de B2
    // render preguntas de B2
    loadGramQuestionView();

  }else if(model.state.counters.mainCounter < 55){ // → Mostramos los 5 listenings de B2
    // render LISTENINGS de B2
    if(model.state.counters.mainCounter === 54)model.state.counters.showStats = true;
    loadListeningView();

  }else if(model.state.counters.mainCounter === 55 && model.state.counters.showStats){ // → parada tras terminar los 5 listenings de B2 para mostrar los stats en pantalla.
    showStatsFunc();

  /*
      →→ C1 RENDERS ←←
        Funciona mientras el mainCounter esté entre los valores 56 y 69
        - Entre 56 y 64 la gramática/vocabulario
        - Entre 65 y 68 los listenings
        - Valor == 69 los stats
  */
  }else if(model.state.counters.mainCounter < 65){ // → Render preguntas C1
    loadGramQuestionView();

  }else if(model.state.counters.mainCounter < 67){ // → Render 2 listenings C1
    if(model.state.counters.mainCounter === 66)model.state.counters.showStats = true;
    loadListeningView();

  }else if(model.state.counters.mainCounter === 67 && model.state.counters.showStats){ // Render STATS C1
    showStatsFunc();

  /*
      →→ C2 RENDERS ←←
  */
  }else if(model.state.counters.mainCounter < 77){ // → Mostramos las 10 preguntas de C2
    // render preguntas de C2
    if(model.state.counters.mainCounter === 76)model.state.counters.showStats = true;
    loadGramQuestionView();

  }else{
    showStatsFunc();
  }
}
//**********************************************************

/*___ _____ _   ___ _____   ___ _   _ _  _  ___ _____ ___ ___  _  _
 / __|_   _/_\ | _ \_   _| | __| | | | \| |/ __|_   _|_ _/ _ \| \| |
 \__ \ | |/ _ \|   / | |   | _|| |_| | .` | (__  | |  | | (_) | .` |
 |___/ |_/_/ \_\_|_\ |_|   |_|  \___/|_|\_|\___| |_| |___\___/|_|\_|
*/
/**
 * Esta función inicia el juego renderizando la pantalla de inicio con la info del funcionamiento y el botón de 'EMPEZAR'.
 * Realiza dos funciones:
 * → Primero, renderiza la página "initialScreenView".
 * → Segundo, Pasa a initialScreenView.addHandler una función como parámetro para cargar los eventos del botón 'EMPEZAR'.
 */
const init = function(){
  initialScreenView.render();
  initialScreenView.addHandler(brainFunction)
}
init();

export default brainFunction;

