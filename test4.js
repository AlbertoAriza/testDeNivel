'use strict';

// VARIABLES DE CONTEO
let getEstrella; // variable para controlar la estrella que hay que transformar en cada pregunta de cada ronda.

// CONTROL NÚMERO DE PREGUNTAS CORRECTAS POR NIVELES
let rightQuestionsA1 = 0;
let rightQuestionsA2 = 0;
let rightQuestionsB1 = 0;
let rightQuestionsB2 = 0;
let rightQuestionsC1 = 0;
let rightQuestionsC2 = 0;

let counterListeningsA2 = 0;
let counterListeningsB1 = 0;
let counterListeningsB2 = 0;
let counterListeningsC1 = 0;
let counterListeningsC2 = 0;

let rightListeningsA2 = 0;
let rightListeningsB1 = 0;
let rightListeningsB2 = 0;
let rightListeningsC1 = 0;
let rightListeningsC2 = 0;

let clickCounter = 0;

// CONTROL PARA EL NÚMERO DE PREGUNTAS HECHAS
let preguntasHechas = 0;
let listeningsHechos = 0;
let preguntaA1 = 0;
let preguntaA2 = 0;
let preguntaB1 = 0;
let preguntaB2 = 0;
let preguntaC1 = 0;
let preguntaC2 = 0;
let questionsA2 = 0;
let questionsB1 = 0;
let questionsB2 = 0;
let questionsC1 = 0;
let questionsC2 = 0;

//HACEMOS GET DE LOS CAMPOS PREGUNTA
let getContainerPregunta = document.getElementById('questionContainer');
let getTextoPregunta = document.getElementById('question');

//HACEMOS GET DE LOS CAMPOS DE RESPUESTA
let getContainerRespuesta01 = document.getElementById(`answerContainer01`);
let getTextoRespuesta01 = document.getElementById(`answer01`);
let getContainerRespuesta02 = document.getElementById(`answerContainer02`);
let getTextoRespuesta02 = document.getElementById(`answer02`);
let getContainerRespuesta03 = document.getElementById(`answerContainer03`);
let getTextoRespuesta03 = document.getElementById(`answer03`);
let getContainerRespuesta04 = document.getElementById(`answerContainer04`);
let getTextoRespuesta04 = document.getElementById(`answer04`);

/********************************
*  GETTERS DE LA PANTALLA INFO  *
********************************/
// HACEMOS GET DE LAS PANTALLAS INFO Y GAME PARA PASAR DE UNA A OTRA
let getInfoScreen = document.getElementById(`info`);
let getGameScreen = document.getElementById(`gameplay`);

// GETTER DEL TÍTULO
let getStatsTitle = document.getElementById('statstitle');

// GETTER DEL SUBTÍTULO
let getStatsSubtitle = document.getElementById('statsSubtitle');

// HACEMOS GET DEL CONTENEDOR DEL PÁRRAFO QUE CONTIENE LA INFORMACIÓN EN LA PANTALLA INFO
let getCampoTextoBox = document.getElementById(`campoTextoBox`);

// GETTER DE LA PANTALLA DE ESTADÍSTICAS
let getStatsContent = document.getElementById('statsContent');

// HACEMOS GET DEL BOTÓN INICIO EN LA PANTALLA INFO
let getStartButton = document.getElementById(`inicio`);




//HACEMOS GET DE LAS IMÁGENES DE LOS 6 NIVELES
let getLevelA1 = document.getElementById(`imgLevel_A1`);
let getLevelA2 = document.getElementById(`imgLevel_A2`);
let getLevelB1 = document.getElementById(`imgLevel_B1`);
let getLevelB2 = document.getElementById(`imgLevel_B2`);
let getLevelC1 = document.getElementById(`imgLevel_C1`);
let getLevelC2 = document.getElementById(`imgLevel_C2`);


// *****************************************
//          GETTERS PARA LISTENINGS
// *****************************************
// GETTER DEL FOOTER
let getFooter = document.getElementById(`footer`);
let getArticle = document.getElementById(`article`);

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



/*
  _    ___ ___ _____ _   ___   ___  ___   ___ ___ ___ ___ _   _ _  _ _____ _   ___ 
 | |  |_ _/ __|_   _/_\ / __| |   \| __| | _ \ _ \ __/ __| | | | \| |_   _/_\ / __|
 | |__ | |\__ \ | |/ _ \\__ \ | |) | _|  |  _/   / _| (_ | |_| | .` | | |/ _ \\__ \
 |____|___|___/ |_/_/ \_\___/ |___/|___| |_| |_|_\___\___|\___/|_|\_| |_/_/ \_\___/
                                                                                   
*/

//PREGUNTAS NIVEL A1
let questionArrA1 = [
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">1/10.-  Hello, my name _____ Megan.</span>`, `be`, `am`,`is`, `are`, false, false, true, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">2/10.-  She ___ from Italy.</span>`, `come`, `comes`, `coming`, `to come`, false, true, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">3/10.-  I have two ___: a cat and a dog.</span>`, `pet`, `pets`, `pet's`, `pets'`, false, true, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">4/10.-  We ___ to the cinema on Saturdays.</span>`, `go`, `goes`, `going`, `to go`, true, false, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">5/10.-  He ___ a book right now.</span>`, `read`, `reads`, `is reading`, 'are reading', false, false, true, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">6/10.-  They ___ a big house.</span>`, `has`, `have`, `haves`, `having`, false, true, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">7/10.-  This is ___ apple.</span>`, `a`, `an`, `the`, `any`, false, true, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">8/10.-  There ___ six eggs in the fridge.</span>`,`am`, `is`, `are`, `be`, false, false, true, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">9/10.-  She ___ like spicy food.</span>`, `doesn't`, `don't`, `isn't`, `aren't`, true, false, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">10/10.-  What ___ you do?</span>`, `is`, `are`, `does`, `do`, false, false, false, true]
];

//PREGUNTAS NIVEL A2
let questionArrA2 = [
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">1/10.-  Every morning, I ___ up at 7 o'clock.</span>`, `wake`, `wakes`, `am waking`, `waking`, true, false, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">2/10.-  They ___ playing football when it started to rain.</span>`, `be`, `to be`, `are`, `were`, false, false, false, true],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">3/10.-  Can you help me? I can't ___ my glasses.</span>`, `find`, `to find`, `finds`, `finding`, true, false, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">4/10.-  There is ___ water in the glass.</span>`, `a`, `any`, `many`, `some`, false, false, false, true],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">5/10.-  We ___ go to the beach tomorrow if the weather is nice.</span>`, `had`, `to have`, `will`, `would`, false, false, true, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">6/10.-  ___ you speak Spanish?</span>`, `Are`, `Is`, `Does`, `Do`, false, false, false, true],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">7/10.-  I ___ to the radio while I was driving.</span>`, `be listen`, `am listening`, `was listening`, `listen`, false, false, true, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">8/10.-  There are ___ apples in the basket than oranges.</span>`, `fewer`, `less`, `little`, `least`, true, false, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">9/10.-  I really enjoy ___ at the beach during summer.</span>`, `swimming`, `to swim`, `swim`, `be swim`, true, false, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">10/10.-  ___ you work yesterday?</span>`, `Be`, `Are`, `Did`, `do`, false, false, true, false]
];

//PREGUNTAS NIVEL B1
let questionArrB1 = [
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">1/10.-  If I ___ more time, I would travel around the world.</span>`, `have`, `has`, `had`, `having`, false, false, true, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">2/10.-  We used ___ together when we were younger.</span>`, `play`, `played`, `playing`, `to play`, false, false, false, true],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">3/10.-  I can't find my keys. I must have ___ them at the office.</span>`, `left`, `leave`, `leaves`, `leaving`, true, false, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">4/10.-  The book ___ on the desk is mine.</span>`, `laying`, `lying`, `lie`, `lay`, false, true, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">5/10.-  As soon as I ___ home, I'll call you.</span>`, `get`, `got`, `gets`, `am getting`, true, false, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">6/10.-  Despite ___ hard, he didn't pass the exam.</span>`, `study`, `to study`, `studied`, `studying`, false, false, false, true],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">7/10.-  We were surprised that the movie was ___ interesting than the book.</span>`, `more`, `most`, `much`, `very`, true, false, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">8/10.-  She speaks English ___ fluently that everyone is impressed.</span>`, `such`, `very`, `so`, `too`, false, false, true, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">9/10.-  They had to cancel the trip ___ the storm.</span>`, `because`, `due`, `as`, `because of`, false, false, false, true],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">10/10.-  I'm looking forward to ___ you again.</span>`, `see`, `seeing`, `seen`, `have seen`, false, true, false, false]
];

//PREGUNTAS NIVEL B2
let questionArrB2 = [
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">1/10.-  She had been ___ for the news all day before it finally came.</span>`, `waiting`, `waited`, `wait`, `waitting`, true, false, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">2/10.-  The test was ___ for most students to pass.</span>`, `so easy`, `such easy`, `enough easy`, `easy enough`, false, false, false, true],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">3/10.-  If only I ___ about the meeting earlier, I would have attended.</span>`, `have known`, `had known`, `would have known`, `knew`, false, true, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">4/10.-  The player was disqualified for ___ unfairly during the match.</span>`, `behave`, `behaved`, `to behave`, `behaving`, false, false, false, true],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">5/10.-  Not only ___, but he also offered to make amends.</span>`, `he did apologize`, `he apologized`, `did he apologize`, `apologized he`, false, false, true, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">6/10.-  We had to call ___ the trip because my brother was sick.</span>`, `up`, `down`, `in`, `off`, false, false, false, true],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">7/10.-  When he was a child, he got used to ___ chess.</span>`, `play`, `played`, `plays`, `playing`, false, false, false, true],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">8/10.-  I can’t believe it! She copied in the exam and the teacher didn’t notice. She ___ it.</span>`, `put off`, `carried out`, `got away with`, `ran out of`, false, false, true, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">9/10.-  He was in a hurry, so he couldn’t stop ___ with me.</span>`, `talk`, `to talk`, `talking`, `talked`, false, true, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">10/10.-  I will arrive ___ London tomorrow morning.</span>`, `in`, `at`, `by`, `to`, true, false, false, false]
];

//PREGUNTAS NIVEL C1
let questionArrC1 = [
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">1/10.-  The old house was ___________ furnished and we had to buy almost everything new</span>`, `thinly`, `sparsely`, `mildly`, `rarely`, false, true, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">2/10.-  You shouldn't have bought so many ___________ presents on this holiday. You won't have any money left when you go back home.</span>`, `rich`, `worthy`, `invaluable`, `lavish`, false, false, false, true],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">3/10.-  The politician's speech was so compelling that it ___ the audience to action.</span>`, `aroused`, `raised`, `rose`, `roused`, false, false, false, true],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">4/10.-  Sometimes we don't appreciate the ___________ pleasures of life such as a beautiful sky, a cup of coffee with a friend, or seeing a good film at the cinema.</span>`, `sheer`, `normal`, `simple`, `plain `, false, false, true, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">5/10.-  During the riots, hundreds of people broke into the city's main department store and ___________ it. There was almost nothing left after the night had finished.</span>`, `looted`, `stole`, `mugged`, `conned `, true, false, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">6/10.-  That old house hasn't been lived in for nearly thirty years hence the fact that it looks so ___________.</span>`, `decrepit`, `derelict`, `trashed`, `rotten`, false, true, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">7/10.-  They were oblivious _______ the danger that laid ahead.</span>`, `of`, `to`, `in`, `about`, false, true, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">8/10.-  Were he _______ the truth, he would surely react differently.</span>`, `to know`, `knowing`, `knew`, `knows`, true, false, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">9/10.-  ___________ me another beer, Des. Then I really must be going. It is quite late!</span>`, `spill`, `pour`, `trickle`, `fill`, false, true, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">10/10.-  After years of conflict, the two countries are finally ready to _______ their differences.</span>`, `patch up`, `put down`, `pick out`, `play off`, true, false, false, false]
];

//PREGUNTAS NIVEL C2
let questionArrC2 = [
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">1/10.-  The documentary provided an ___ look into the complexities of the political system.</span>`, `incisive`, `inclusive`, `inconclusive`, `indicative`, true, false, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">2/10.-  Can you chase Phill ___ about the report?</span>`, `in`, `on`, `out`, `up`, false, false, false, true],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">3/10.-  The novel's protagonist is a ___ of contradictions, making him fascinating and unpredictable.</span>`, `myriad`, `conundrum`, `paradox`, `dichotomy`, false, false, true, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">4/10.-  If you think I can help you with your maths homework, you are ___ up  the wrong tree.</span>`, `climbing`, `tweeting`, `calling`, `barking`, false, false, false, true],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">5/10.-  The government's stance on the issue has been ___ criticized by international bodies.</span>`, `vociferously`, `vocally`, `vividly`, `voraciously`, true, false, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">6/10.-  His penchant for hyperbole makes it difficult to discern the ___ of his statements.</span>`, `veracity`, `verbosity`, `vicissitude`, `voracity`, true, false, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">7/10.-  The ___ of urban life is reflected in the artist's latest series of paintings.</span>`, `mirage`, `milieu`, `mire`, `miscellany`, false, true, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">8/10.-  The policy's unintended consequences have become a ___ for the administration.</span>`, `boon`, `bane`, `bind`, `blitz`, false, true, false, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">9/10.-  Her argument was so ___ that it left no room for doubt or counterargument.</span>`, `coerced`, `coalesced`, `cogent`, `cogitated`, false, false, true, false],
    [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">10/10.-  The poet's use of obscure references and allusions adds a layer of ___ to his work.</span>`, `opacity`, `obstinacy`, `obliquity`, `omnipotence`, true, false, false, false]
];



/*
   ___ ___  _  _ _____ ___  ___  _      ___  ___   ___ ___ ___ ___ _   _ ___ ___ _____ _   ___ 
  / __/ _ \| \| |_   _| _ \/ _ \| |    |   \| __| | _ \ __/ __| _ \ | | | __/ __|_   _/_\ / __|
 | (_| (_) | .` | | | |   / (_) | |__  | |) | _|  |   / _|\__ \  _/ |_| | _|\__ \ | |/ _ \\__ \
  \___\___/|_|\_| |_| |_|_\\___/|____| |___/|___| |_|_\___|___/_|  \___/|___|___/ |_/_/ \_\___/
                                                                                               
*/

//FUNCIONES DE CONTROL DE RESPUESTAS CORRECTAS E INCORRECTAS EN PANTALLA.
function answer1ChosenCorrect(){
    //soundEffects.sfxBingo.play();
    getContainerRespuesta01.className = "correctAnswerChosen";
    sumarPunto();

    //Reseteamos escenario de juego
    setTimeout(()=>{
        conteoSiguientePreguntaPorNivel();
        newQuestion();
    }, 2000);
}
function answer1ChosenIncorrect(){
    //soundEffects.sfxWrongAnswer.play();
    getContainerRespuesta01.className = "incorrectAnswerChosen";

    //Reseteamos escenario de juego
    setTimeout(()=>{
        conteoSiguientePreguntaPorNivel();
        newQuestion();
    }, 2000);
}
function answer2ChosenCorrect(){
    //soundEffects.sfxBingo.play();
    getContainerRespuesta02.className = "correctAnswerChosen";
    sumarPunto();

    //Reseteamos escenario de juego
    setTimeout(()=>{
        conteoSiguientePreguntaPorNivel();
        newQuestion();
    }, 2000);
}
function answer2ChosenIncorrect(){
    //soundEffects.sfxWrongAnswer.play();
    getContainerRespuesta02.className = "incorrectAnswerChosen";

    //Reseteamos escenario de juego
    setTimeout(()=>{
        conteoSiguientePreguntaPorNivel();
        newQuestion();
    }, 2000);
}
function answer3ChosenCorrect(){
  //soundEffects.sfxBingo.play();
  getContainerRespuesta03.className = "correctAnswerChosen";
  sumarPunto();

  //Reseteamos escenario de juego
  setTimeout(()=>{
    conteoSiguientePreguntaPorNivel();
    newQuestion();
  }, 2000);
}
function answer3ChosenIncorrect(){
  //soundEffects.sfxWrongAnswer.play();
  getContainerRespuesta03.className = "incorrectAnswerChosen";

  //Reseteamos escenario de juego
  setTimeout(()=>{
    conteoSiguientePreguntaPorNivel();
    newQuestion();
  }, 2000);
}
function answer4ChosenCorrect(){
    //soundEffects.sfxBingo.play();
    getContainerRespuesta04.className = "correctAnswerChosen";
    sumarPunto();
  
    //Reseteamos escenario de juego
    setTimeout(()=>{
        conteoSiguientePreguntaPorNivel();
        newQuestion();
    }, 2000);
}
function answer4ChosenIncorrect(){
    //soundEffects.sfxWrongAnswer.play();
    getContainerRespuesta04.className = "incorrectAnswerChosen";
    //getGameImgLeft.src = "highSchoolStories/girl1surprised.png";
  
    //Reseteamos escenario de juego
    setTimeout(()=>{
        conteoSiguientePreguntaPorNivel();
        newQuestion();
    }, 2000);
}

  // FUNCIÓN PARA CONTROLAR EL NÚMERO DE PREGUNTAS HECHAS DE CADA NIVEL
  function conteoSiguientePreguntaPorNivel(){
    if(preguntasHechas <= 10){
        preguntaA1++;
        console.log(`aumentamos preguntaA1 a ${preguntaA1}`);
    }else if(preguntasHechas <= 20){
        preguntaA2++;
    }else if(preguntasHechas <= 30){
        preguntaB1++;
    }else if(preguntasHechas <= 40){
        preguntaB2++;
    }else if(preguntasHechas <= 50){
        preguntaC1++;
    }else if(preguntasHechas <= 60){
        preguntaC2++;
    }
  }


/*
   ___ ___  _  _ _____ ___  ___  _      ___  ___   ___ ___ _____ ___ ___ _    _      _   ___ 
  / __/ _ \| \| |_   _| _ \/ _ \| |    |   \| __| | __/ __|_   _| _ \ __| |  | |    /_\ / __|
 | (_| (_) | .` | | | |   / (_) | |__  | |) | _|  | _|\__ \ | | |   / _|| |__| |__ / _ \\__ \
  \___\___/|_|\_| |_| |_|_\\___/|____| |___/|___| |___|___/ |_| |_|_\___|____|____/_/ \_\___/
                                                                                             
*/

//getGameImgLeft.src = "highSchoolStories/girl1surprised.png";

function estrellaOk(){
    if(preguntasHechas <= 10){
        //cambiar estrellas en función de preguntaA1
        console.log(`nuevo sistema de cambiar estrella para A1`);
        getEstrella = document.getElementById(`star-${preguntaA1}`)

    }else if(preguntasHechas <= 20){
        //cambiar estrellas en función de preguntaA2
        console.log(`nuevo sistema de cambiar estrella para A2`);
        getEstrella = document.getElementById(`star-${preguntaA2}`)

    }else if(preguntasHechas <= 30){
        //cambiar estrellas en función de preguntaB1
        console.log(`nuevo sistema de cambiar estrella para B1`);
        getEstrella = document.getElementById(`star-${preguntaB1}`)

    }else if(preguntasHechas <= 40){
        //cambiar estrellas en función de preguntaB2
        console.log(`nuevo sistema de cambiar estrella para B2`);
        getEstrella = document.getElementById(`star-${preguntaB2}`)

    }else if(preguntasHechas <= 50){
        //cambiar estrellas en función de preguntaC1
        console.log(`nuevo sistema de cambiar estrella para C1`);
        getEstrella = document.getElementById(`star-${preguntaC1}`)

    }else if(preguntasHechas <= 60){
        //cambiar estrellas en función de preguntaC2
        console.log(`nuevo sistema de cambiar estrella para C2`);
        getEstrella = document.getElementById(`star-${preguntaC2}`)
      }
    getEstrella.src = "imgs/estrella.png";

}

function estrellaWrong(){
  let getEstrella;
    if(preguntasHechas <= 10){
        //cambiar estrellas en función de preguntaA1
        console.log(`nuevo sistema de cambiar estrella wrong para A1`);
        getEstrella = document.getElementById(`star-${preguntaA1}`)
        
    }else if(preguntasHechas <= 20){
      //cambiar estrellas en función de preguntaA1
      console.log(`nuevo sistema de cambiar estrella wrong para A2`);
      getEstrella = document.getElementById(`star-${preguntaA2}`)
        
    }else if(preguntasHechas <= 30){
      //cambiar estrellas en función de preguntaB1
      console.log(`nuevo sistema de cambiar estrella wrong para B1`);
      getEstrella = document.getElementById(`star-${preguntaB1}`)
        
    }else if(preguntasHechas <= 40){
      //cambiar estrellas en función de preguntaB2
      console.log(`nuevo sistema de cambiar estrella wrong para B2`);
      getEstrella = document.getElementById(`star-${preguntaB2}`)
        
    }else if(preguntasHechas <= 50){
      //cambiar estrellas en función de preguntaC1
      console.log(`nuevo sistema de cambiar estrella wrong para C1`);
      getEstrella = document.getElementById(`star-${preguntaC1}`)
        
    }else if(preguntasHechas <= 60){
      //cambiar estrellas en función de preguntaC2
      console.log(`nuevo sistema de cambiar estrella wrong para C2`);
      getEstrella = document.getElementById(`star-${preguntaC2}`)
    }
    getEstrella.src = "imgs/estrella-wrong.png";

}

function resetStars(){
    console.log(`reseteando estrellas`);
    const estrellitas = document.querySelectorAll('.imgEstrellaIn');
      estrellitas.forEach(function(currentValue, index, originalArr){
          currentValue.src = `imgs/estrella-bn.png`
      });
}


/*  
   ___ ___  _  _ _____ ___  ___  _      ___  ___   ___  _   _  _ _____ _   _    _      _   ___ 
  / __/ _ \| \| |_   _| _ \/ _ \| |    |   \| __| | _ \/_\ | \| |_   _/_\ | |  | |    /_\ / __|
 | (_| (_) | .` | | | |   / (_) | |__  | |) | _|  |  _/ _ \| .` | | |/ _ \| |__| |__ / _ \\__ \
  \___\___/|_|\_| |_| |_|_\\___/|____| |___/|___| |_|/_/ \_\_|\_| |_/_/ \_\____|____/_/ \_\___/
  
*/

// FUNCIÓN PARA PASAR DE PANTALLA INFO A PANTALLA GAME
function infoToGame(){
    console.log(`pasando a pantalla de juego`);
    
    getInfoScreen.style.width = `0`;
    getInfoScreen.style.height = `0`;
    getGameScreen.style.width = `100vw`;
    getGameScreen.style.height = `100lvh`;
}

function gameToInfo(){
    console.log(`pasando a pantalla de info`);
    
    getInfoScreen.style.width = `100vw`;
    getInfoScreen.style.height = `100lvh`;
    getGameScreen.style.width = `0`;
    getGameScreen.style.height = `0`;
}

function footerToListening(){
  let datos = `<div class="imgEstrella"><img class="imgEstrellaIn" id="star-0" src="imgs/estrella-bn.png" alt=""></div>
  <div class="imgEstrella"><img class="imgEstrellaIn" id="star-1" src="imgs/estrella-bn.png" alt=""></div>
  <div class="imgEstrella"><img class="imgEstrellaIn" id="star-2" src="imgs/estrella-bn.png" alt=""></div>
  <div class="imgEstrella"><img class="imgEstrellaIn" id="star-3" src="imgs/estrella-bn.png" alt=""></div>
  <div class="imgEstrella"><img class="imgEstrellaIn" id="star-4" src="imgs/estrella-bn.png" alt=""></div>`;

  getFooter.innerHTML = datos;

}

function footerToListeningC1(){
  let datos = `<div class="imgEstrella"><img class="imgEstrellaIn" id="star-0" src="imgs/estrella-bn.png" alt=""></div>
  <div class="imgEstrella"><img class="imgEstrellaIn" id="star-1" src="imgs/estrella-bn.png" alt=""></div>`;

  getFooter.innerHTML = datos;

}

function footerToQuestions(){
  let datos = `<div class="imgEstrella"><img class="imgEstrellaIn" id="star-0" src="imgs/estrella-bn.png" alt=""></div>
  <div class="imgEstrella"><img class="imgEstrellaIn" id="star-1" src="imgs/estrella-bn.png" alt=""></div>
  <div class="imgEstrella"><img class="imgEstrellaIn" id="star-2" src="imgs/estrella-bn.png" alt=""></div>
  <div class="imgEstrella"><img class="imgEstrellaIn" id="star-3" src="imgs/estrella-bn.png" alt=""></div>
  <div class="imgEstrella"><img class="imgEstrellaIn" id="star-4" src="imgs/estrella-bn.png" alt=""></div>
  <div class="imgEstrella"><img class="imgEstrellaIn" id="star-5" src="imgs/estrella-bn.png" alt=""></div>
  <div class="imgEstrella"><img class="imgEstrellaIn" id="star-6" src="imgs/estrella-bn.png" alt=""></div>
  <div class="imgEstrella"><img class="imgEstrellaIn" id="star-7" src="imgs/estrella-bn.png" alt=""></div>
  <div class="imgEstrella"><img class="imgEstrellaIn" id="star-8" src="imgs/estrella-bn.png" alt=""></div>
  <div class="imgEstrella"><img class="imgEstrellaIn" id="star-9" src="imgs/estrella-bn.png" alt=""></div>`;

  getFooter.innerHTML = datos;
}

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

function gameToQuestions(){
  let datos = `<div id="questionContainer">
  <p id="question">Texto pregunta la</p>
</div>
<div class="answerContainer" id="answerContainer01">
  <p class="answer" id="answer01">Respuesta 1</p>
</div>
<div class="answerContainer" id="answerContainer02">
  <p class="answer" id="answer02">Respuesta 2</p>
</div>
<div class="answerContainer" id="answerContainer03">
  <p class="answer" id="answer03">Respuesta 3</p>
</div>
<div class="answerContainer" id="answerContainer04">
  <p class="answer" id="answer04">Respuesta 4</p>
</div>`;
  getArticle.innerHTML = datos;

  // REACTIVAMOS LAS VARIABLES QUE ATRAPAN LOS DISTINTOS ELEMENTOS DE LAS PREGUNTAS Y OPCIONES DE RESPUESTA
  getContainerPregunta = document.getElementById('questionContainer');
  getTextoPregunta = document.getElementById('question');
  getContainerRespuesta01 = document.getElementById(`answerContainer01`);
  getTextoRespuesta01 = document.getElementById(`answer01`);
  getContainerRespuesta02 = document.getElementById(`answerContainer02`);
  getTextoRespuesta02 = document.getElementById(`answer02`);
  getContainerRespuesta03 = document.getElementById(`answerContainer03`);
  getTextoRespuesta03 = document.getElementById(`answer03`);
  getContainerRespuesta04 = document.getElementById(`answerContainer04`);
  getTextoRespuesta04 = document.getElementById(`answer04`);
}

function resetQuestionStyles(){
  getContainerRespuesta01.className ="answerContainer";
  getContainerRespuesta02.className ="answerContainer";
  getContainerRespuesta03.className ="answerContainer";
  getContainerRespuesta04.className ="answerContainer";
}

/*   
   ___ ___  _  _ _____ ___  ___  _      ___  ___   ___ _   _ _  _ _____ _   _  _   ___ ___   __ _  _ 
  / __/ _ \| \| |_   _| _ \/ _ \| |    |   \| __| | _ \ | | | \| |_   _| | | |/_\ / __|_ _|_/_/| \| |
 | (_| (_) | .` | | | |   / (_) | |__  | |) | _|  |  _/ |_| | .` | | | | |_| / _ \ (__ | |/ __ \ .` |
  \___\___/|_|\_| |_| |_|_\\___/|____| |___/|___| |_|  \___/|_|\_| |_|  \___/_/ \_\___|___\____/_|\_|
                                                                                                     
  */

function sumarPunto(){
    if(preguntasHechas <= 10){
        rightQuestionsA1++;
        console.log(`right questions A1 - ${rightQuestionsA1}`);
    }else if(preguntasHechas <= 20){
        rightQuestionsA2++;
        console.log(`right questions A2 - ${rightQuestionsA2}`);
    }else if(preguntasHechas <= 30){
        rightQuestionsB1++;
    }else if(preguntasHechas <= 40){
        rightQuestionsB2++;
    }else if(preguntasHechas <= 50){
        rightQuestionsC1++;
    }else if(preguntasHechas <= 60){
      console.log(`right questions C2 - ${rightQuestionsC2}`);
        rightQuestionsC2++;
    }
}

function sumarPuntoListening(){
  if(preguntasHechas == 20 && listeningsHechos <= 5){
    rightListeningsA2++;
  }else if(preguntasHechas == 30 && listeningsHechos <= 10){
    rightListeningsB1++;
  }else if(preguntasHechas == 40 && listeningsHechos <= 15){
    rightListeningsB2++;
  }
}

/**********************************************************************
*  FUNCIONES PARA CARGAR LOS STATS DE CADA NIVEL EN LA PANTALLA INFO  *
***********************************************************************/

const loadStatsA1 = function(){
  let progress1 = 100 * rightQuestionsA1 / preguntaA1;
  const getProgressbar1 = document.querySelector(`.progressbar1`);
  getProgressbar1.setAttribute("role", "progressbar1");
  getProgressbar1.setAttribute("aria-valuenow", 0);
  getProgressbar1.setAttribute("aria-live", "polite")
    
  getProgressbar1.setAttribute("aria-valuenow", progress1);
  getProgressbar1.style.setProperty(`--progress1`, progress1 + "%");
}

const loadStatsA2 = function(){
  let progress1 = 100 * rightQuestionsA2 / preguntaA2;
  let progress2 = 100 * rightListeningsA2 / counterListeningsA2;
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

const loadStatsB1 = function(){
  let progress1 = 100 * rightQuestionsB1 / preguntaB1;
  let progress2 = 100 * rightListeningsB1 / counterListeningsB1;
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

const loadStatsB2 = function(){
  let progress1 = 100 * rightQuestionsB2 / preguntaB2;
  let progress2 = 100 * rightListeningsB2 / counterListeningsB2;
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

const loadStatsC1 = function(){
  let progress1 = 100 * rightQuestionsC1 / preguntaC1;
  const getProgressbar1 = document.querySelector(`.progressbar1`);
  getProgressbar1.setAttribute("role", "progressbar1");
  getProgressbar1.setAttribute("aria-valuenow", 0);
  getProgressbar1.setAttribute("aria-live", "polite")
    
  getProgressbar1.setAttribute("aria-valuenow", progress1);
  getProgressbar1.style.setProperty(`--progress1`, progress1 + "%");
}

const loadStatsC2 = function(){
  let progress1 = 100 * rightQuestionsC2 / preguntaC2;
  const getProgressbar1 = document.querySelector(`.progressbar1`);
  getProgressbar1.setAttribute("role", "progressbar1");
  getProgressbar1.setAttribute("aria-valuenow", 0);
  getProgressbar1.setAttribute("aria-live", "polite")
    
  getProgressbar1.setAttribute("aria-valuenow", progress1);
  getProgressbar1.style.setProperty(`--progress1`, progress1 + "%");
}

/*___ _____ _   ___ _____   ___ _   _ _  _  ___ _____ ___ ___  _  _ ___ 
 / __|_   _/_\ | _ \_   _| | __| | | | \| |/ __|_   _|_ _/ _ \| \| / __|
 \__ \ | |/ _ \|   / | |   | _|| |_| | .` | (__  | |  | | (_) | .` \__ \
 |___/ |_/_/ \_\_|_\ |_|   |_|  \___/|_|\_|\___| |_| |___\___/|_|\_|___/
*/

// FUNCIÓN DE INICIO AL APRETAR BOTÓN 
//getContainerRespuesta01.onclick = answer1Chosen;
function start(){
    console.log(`Lanzando función start`);
    
    getStartButton.addEventListener("click", function(e){
        infoToGame();
    });
}
newQuestion();
start();
    



/*
   ___ ___  _  _ _____ ___  ___  _      ___  ___    ___   _   __  __ ___ ___ ___    ___  ___   ___ ___ ___ ___ _   _ _  _ _____ _   ___ 
  / __/ _ \| \| |_   _| _ \/ _ \| |    |   \| __|  / __| /_\ |  \/  | _ )_ _/ _ \  |   \| __| | _ \ _ \ __/ __| | | | \| |_   _/_\ / __|
 | (_| (_) | .` | | | |   / (_) | |__  | |) | _|  | (__ / _ \| |\/| | _ \| | (_) | | |) | _|  |  _/   / _| (_ | |_| | .` | | |/ _ \\__ \
  \___\___/|_|\_| |_| |_|_\\___/|____| |___/|___|  \___/_/ \_\_|  |_|___/___\___/  |___/|___| |_| |_|_\___\___|\___/|_|\_| |_/_/ \_\___/
                                                                                                                                        
*/

//FUNCIÓN PARA RESETEAR PANTALLAS Y PONER NUEVAS PREGUNTAS Y RESPUESTAS EN CADA PREGUNTA.
function newQuestion(){
    console.log(`*************`);
    console.log(`Lanzando newQuestion function con los siguientes valores`);
    console.log(`preguntasHechas: ${preguntasHechas} `);
    console.log(`listeningsHechos: ${listeningsHechos}`);
    console.log(`preguntaA1: ${preguntaA1}`);
    console.log(`preguntaA2: ${preguntaA2}`);
    console.log(`preguntaB1: ${preguntaB1}`);
    console.log(`preguntaB2: ${preguntaB2}`);
    console.log(`preguntaC1: ${preguntaC1}`);
    console.log(`preguntaC2: ${preguntaC2}`);

    console.log(`rightQuestionsA1: ${rightQuestionsA1}`);
    console.log(`rightQuestionsA2: ${rightQuestionsA2}`);
    console.log(`rightQuestionsB1: ${rightQuestionsB1}`);
    console.log(`rightQuestionsB2: ${rightQuestionsB2}`);
    console.log(`rightQuestionsC1: ${rightQuestionsC1}`);
    console.log(`rightQuestionsC2: ${rightQuestionsC2}`);
    
    console.log(`counterListeningsA2: ${counterListeningsA2}`);
    console.log(`counterListeningsB1: ${counterListeningsB1}`);
    console.log(`counterListeningsB2: ${counterListeningsB2}`);

    console.log(`rightListeningsA2: ${rightListeningsA2}`);
    console.log(`rightListeningsB1: ${rightListeningsB1}`);
    console.log(`rightListeningsB2: ${rightListeningsB2}`);
    console.log(`*************`);
    
    /***************************
     *         NIVEL A1        *
     ***************************/
    if(preguntasHechas < 10){
      resetQuestionStyles();

        getTextoPregunta.innerHTML = questionArrA1[preguntaA1][0];
        getTextoRespuesta01.innerHTML = questionArrA1[preguntaA1][1];
        getTextoRespuesta02.innerHTML = questionArrA1[preguntaA1][2];
        getTextoRespuesta03.innerHTML = questionArrA1[preguntaA1][3];
        getTextoRespuesta04.innerHTML = questionArrA1[preguntaA1][4];

        roundA1();
        
    /***************************
     *         NIVEL A2        *
     ***************************/
    }else if(preguntasHechas <20){
        
      // 1.- RESETEAMOS ESTILOS DE LOS BOTONES DE RESPUESTA
      resetQuestionStyles();

      //2.- CARGAMOS PREGUNTAS Y OPCIONES DE RESPUESTA
      getTextoPregunta.innerHTML = questionArrA2[preguntaA2][0];
      getTextoRespuesta01.innerHTML = questionArrA2[preguntaA2][1];
      getTextoRespuesta02.innerHTML = questionArrA2[preguntaA2][2];
      getTextoRespuesta03.innerHTML = questionArrA2[preguntaA2][3];
      getTextoRespuesta04.innerHTML = questionArrA2[preguntaA2][4];

        roundA2();        

    // MOMENTO DE METER LOS LISTENINGS DE A2
    }else if(preguntasHechas == 20 && listeningsHechos < 5){
      listening();

    /***************************
     *         NIVEL B1        *
     ***************************/
    }else if(preguntasHechas <30){

      //1.- DEVOLVEMOS PANTALLA DE JUEGO AL FORMATO PARA SEGUIR CON LAS 10 PREGUNTAS DE B1
      if(preguntasHechas == 20 && listeningsHechos == 5){
        gameToQuestions();
        footerToQuestions();
      }

      //2.-  RESETEAMOS ESTILOS DE LOS BOTONES DE RESPUESTA
      resetQuestionStyles();

      //3.- CARGAMOS PREGUNTAS Y OPCIONES DE RESPUESTA
      getTextoPregunta.innerHTML = questionArrB1[preguntaB1][0];
      getTextoRespuesta01.innerHTML = questionArrB1[preguntaB1][1];
      getTextoRespuesta02.innerHTML = questionArrB1[preguntaB1][2];
      getTextoRespuesta03.innerHTML = questionArrB1[preguntaB1][3];
      getTextoRespuesta04.innerHTML = questionArrB1[preguntaB1][4];

        roundB1();

    //4.- MOMENTO DE METER LOS LISTENINGS DE B1
    }else if(preguntasHechas == 30 && listeningsHechos < 10){
      listening();

    /***************************
     *         NIVEL B2        *
     ***************************/
    }else if(preguntasHechas <40){

      //1.- DEVOLVEMOS PANTALLA DE JUEGO AL FORMATO PARA SEGUIR CON LAS 10 PREGUNTAS DE B2
      if(preguntasHechas == 30 && listeningsHechos == 10){
        gameToQuestions();
        footerToQuestions();
      }

      //2.- RESETEAMOS ESTILOS DE LOS BOTONES DE RESPUESTA
      resetQuestionStyles();

      //3.- CARGAMOS PREGUNTAS Y OPCIONES DE RESPUESTA
        getTextoPregunta.innerHTML = questionArrB2[preguntaB2][0];
        getTextoRespuesta01.innerHTML = questionArrB2[preguntaB2][1];
        getTextoRespuesta02.innerHTML = questionArrB2[preguntaB2][2];
        getTextoRespuesta03.innerHTML = questionArrB2[preguntaB2][3];
        getTextoRespuesta04.innerHTML = questionArrB2[preguntaB2][4];

        roundB2();

    //4.- MOMENTO DE METER LOS LISTENINGS DE B2
    }else if(preguntasHechas == 40 && listeningsHechos < 15){
      listening();

    /***************************
     *         NIVEL C1        *
     ***************************/
    }else if(preguntasHechas <50){

      //1.- DEVOLVEMOS PANTALLA DE JUEGO AL FORMATO PARA SEGUIR CON LAS 10 PREGUNTAS DE C1
      if(preguntasHechas == 40 && listeningsHechos == 15){
        gameToQuestions();
        footerToQuestions();
      }

      //2.- RESETEAMOS ESTILOS DE LOS BOTONES DE RESPUESTA
      resetQuestionStyles();

      //3.- CARGAMOS PREGUNTAS Y OPCIONES DE RESPUESTA
      getTextoPregunta.innerHTML = questionArrC1[preguntaC1][0];
      getTextoRespuesta01.innerHTML = questionArrC1[preguntaC1][1];
      getTextoRespuesta02.innerHTML = questionArrC1[preguntaC1][2];
      getTextoRespuesta03.innerHTML = questionArrC1[preguntaC1][3];
      getTextoRespuesta04.innerHTML = questionArrC1[preguntaC1][4];

      roundC1();
    
    /***************************
     *         NIVEL C2        *
     ***************************/
    }else if(preguntasHechas <60){
      console.log('hemos entrado a C2 en newQuestion function');

      //2.- RESETEAMOS ESTILOS DE LOS BOTONES DE RESPUESTA
      console.log('Reseteamos estilos de preguntas');
      resetQuestionStyles();

      //3.- CARGAMOS PREGUNTAS Y OPCIONES DE RESPUESTA
      console.log('Carga de preguntas y opciones de respuesta');
      getTextoPregunta.innerHTML = questionArrC2[preguntaC2][0];
      getTextoRespuesta01.innerHTML = questionArrC2[preguntaC2][1];
      getTextoRespuesta02.innerHTML = questionArrC2[preguntaC2][2];
      getTextoRespuesta03.innerHTML = questionArrC2[preguntaC2][3];
      getTextoRespuesta04.innerHTML = questionArrC2[preguntaC2][4];

      console.log('lanzando roundC2 function');
      
      roundC2();
    
    //INFO PANTALLA FINAL DEL TEST
    }else if(preguntasHechas == 60){
      if(rightQuestionsC2 >= 8){
        pass();
      }else{
        fail();
      }
    }
    if((preguntasHechas == 20 && listeningsHechos < 5) || (preguntasHechas == 30 && listeningsHechos <10) || (preguntasHechas == 40 && listeningsHechos < 15)){
        console.log(`Aquí se supone que ya se ha cargado la nueva pregunta de listening y ahora procedemos a aumentar el valor de listeningHechos`);
        console.log(`El valor de listenings hechos antes de aumentar es: ${listeningsHechos}`);
        listeningsHechos++;
        console.log(`El valor de listeningsHechos después de aumentar es: ${listeningsHechos}`);

        console.log(`aumentando contador de listeningsHechos a ${listeningsHechos}`);
        console.log(`Reseteando clickCounter a cero`);
        clickCounter = 0;
        console.log(`---------------------------------------------------------`);
        
      }else{
        preguntasHechas++;
        console.log(`Aumentando contador de preguntasHechas a ${preguntasHechas}`);
        console.log(`----------------------------------------------------------`);
        clickCounter = 0;
    }
    
}// fin de la función de renovar preguntas en cada turno.


/*
   ___ ___  _  _ _____ ___  ___  _      ___  ___     _   ___ ___  ___  ___   _   ___   ___  ___  __   __  ___ _   _ ___ ___ ___ _  _ ___  ___  ___ 
  / __/ _ \| \| |_   _| _ \/ _ \| |    |   \| __|   /_\ | _ \ _ \/ _ \| _ ) /_\ |   \ / _ \/ __| \ \ / / / __| | | / __| _ \ __| \| / __|/ _ \/ __|
 | (_| (_) | .` | | | |   / (_) | |__  | |) | _|   / _ \|  _/   / (_) | _ \/ _ \| |) | (_) \__ \  \ V /  \__ \ |_| \__ \  _/ _|| .` \__ \ (_) \__ \
  \___\___/|_|\_| |_| |_|_\\___/|____| |___/|___| /_/ \_\_| |_|_\\___/|___/_/ \_\___/ \___/|___/   |_|   |___/\___/|___/_| |___|_|\_|___/\___/|___/
                                                                                                                                                   
*/
// FUNCIÓN PARA CUANDO SE APRUEBA UN NIVEL
function pass(){
    if(preguntasHechas == 10){
      /*****************
      *  APROBANDO A1  *
      ******************/
        //cambiar las imágenes del nivel
        console.log(`cambiando imágenes de los niveles aprobados y el nivel nuevo`);
        getLevelA1.src = `imgs/cefr-A1-ok.png`;
        getLevelA2.src = `imgs/cefr-A2.png`;
        resetStars();
        //cambio de TÍTULO
        
        
        //cambio de SUBTÍTULO
        getStatsSubtitle.innerHTML = 'Nivel A1 terminado.'

        //cambiar texto del getCampoTextoBox
        console.log(`cambiando texto de la pantalla info`);
        let contentPassA1 = `<p id="campoTexto">Has completado exitosamente el nivel A1. Más abajo puedes revisar el porcentaje de aciertos.<br />Pasemos al siguiente nivel. <br />Cuando estés listo, presiona el botón de abajo para pasar a las preguntas del nivel A2.</p>`;
        getCampoTextoBox.innerHTML = contentPassA1;
        
        //cambiar campo statsContent (que en este caso es de tipo twins)
        let statsContentA1 = `<!--main title-->
        <h3 id="statsResultsH3">Resultados</h3>

        <!--twin titles-->
        <div class="statsTwinTitleContainer">
            <div id="statsQuestions"><h4>Preguntas</h4></div>
        </div>

        <!--twin stats-->
        <div id="progressbarContainer">
            <div class="progressbar1">
                <p>Only works with JS enabled</p>
            </div>
        </div>`
        getStatsContent.innerHTML = statsContentA1;

        //lanzamos la función loadStatsA2
        loadStatsA1();

        //preparar el botón getInicio
        console.log(`configurando botón inicio`);
        getStartButton.textContent = `Continuar A2`;
        start();

    }else if(preguntasHechas == 20){
      /*****************
      *  APROBANDO A2  *
      ******************/
        //cambiar las imágenes del nivel
        getLevelA2.src = `imgs/cefr-A2-ok.png`;
        getLevelB1.src = `imgs/cefr-B1.png`;
        resetStars();
        
        //cambio de TÍTULO
        
        
        //cambio de SUBTÍTULO
        getStatsSubtitle = document.getElementById('statsSubtitle');
        getStatsSubtitle.innerHTML = 'Nivel A2 terminado.'
        
        //cambiar texto del getCampoTextBox
        let contentPassA2 = `<p id="campoTexto">Has completado exitosamente el nivel A2.<br />Pasemos al siguiente nivel. <br />Aquí están las 10 preguntas del nivel B1.</p>`;
        getCampoTextoBox.innerHTML = contentPassA2;

        //cambiar campo statsContent (que en este caso es de tipo twins)
        let statsContentA2 = `<!--main title-->
        <h3 id="statsResultsH3">Resultados</h3>

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
        </div>`
        getStatsContent.innerHTML = statsContentA2;

        //lanzamos la función loadStatsA2
        loadStatsA2();
        
        //preparar el botón getInicio
        console.log(`configurando botón inicio`);
        getStartButton.textContent = `Continuar B1`;
        start();

    }else if(preguntasHechas == 30){
      /*****************
      *  APROBANDO B1  *
      ******************/
        //cambiar las imágenes del nivel
        getLevelB1.src = `imgs/cefr-B1-ok.png`;
        getLevelB2.src = `imgs/cefr-B2.png`;
        resetStars();
        
        //cambio de TÍTULO
        
        
        //cambio de SUBTÍTULO
        getStatsSubtitle = document.getElementById('statsSubtitle');
        getStatsSubtitle.innerHTML = 'Nivel B1 terminado.'
        
        //cambiar texto del getCampoTextBox
        let contentPassB1 = `<p id="campoTexto">Has completado exitosamente el nivel B1.<br />Aquí abajo tienes unas gráficas con el porcentaje de aciertos conseguidos. <br />Presiona el botón de abajo para empezar con las preguntas del nivel B2.</p>`;
        getCampoTextoBox.innerHTML = contentPassB1;

        //cambiar campo statsContent (que en este caso es de tipo twins)
        let statsContentB1 = `<!--main title-->
        <h3 id="statsResultsH3">Resultados</h3>

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
        </div>`
        getStatsContent.innerHTML = statsContentB1;

        //lanzamos la función loadStatsA2
        loadStatsB1();

        //preparar el botón getInicio
        console.log(`configurando botón inicio`);
        getStartButton.textContent = `Continuar B2`;
        start();

    }else if(preguntasHechas == 40){
      /*****************
      *  APROBANDO B2  *
      ******************/
        //cambiar las imágenes del nivel
        getLevelB2.src = `imgs/cefr-B2-ok.png`;
        getLevelC1.src = `imgs/cefr-C1.png`;
        resetStars();
        
        //cambio de TÍTULO
        
        
        //cambio de SUBTÍTULO
        getStatsSubtitle = document.getElementById('statsSubtitle');
        getStatsSubtitle.innerHTML = 'Nivel B2 terminado.'
        
        //cambiar texto del getCampoTextBox
        let contentPassB2 = `<p id="campoTexto">Has completado exitosamente el nivel B2.<br />Aquí abajo tienes unas gráficas con el porcentaje de aciertos conseguidos. <br />Presiona el botón de abajo para empezar con las preguntas del nivel C1.</p>`;
        getCampoTextoBox.innerHTML = contentPassB2;

        //cambiar campo statsContent (que en este caso es de tipo twins)
        let statsContentB2 = `<!--main title-->
        <h3 id="statsResultsH3">Resultados</h3>

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
        </div>`
        getStatsContent.innerHTML = statsContentB2;

        //lanzamos la función loadStatsB2
        loadStatsB2();

        //preparar el botón getInicio
        console.log(`configurando botón inicio`);
        getStartButton.textContent = `Continuar C1`;
        start();
      
    }else if(preguntasHechas == 50){
      /*****************
      *  APROBANDO C1  *
      ******************/
        //cambiar las imágenes del nivel
        getLevelC1.src = `imgs/cefr-C1-ok.png`;
        getLevelC2.src = `imgs/cefr-C2.png`;
        resetStars();
        
        //cambio de TÍTULO
        
        
        //cambio de SUBTÍTULO
        getStatsSubtitle.innerHTML = 'Nivel C1 terminado.'

        //cambiar texto del getCampoTextoBox
        console.log(`cambiando texto de la pantalla info`);
        let contentPassC1 = `<p id="campoTexto">Has completado exitosamente el nivel C1. Más abajo puedes revisar el porcentaje de aciertos.<br />Pasemos al siguiente nivel. <br />Cuando estés listo, presiona el botón de abajo para pasar a las preguntas del nivel C2.</p>`;
        getCampoTextoBox.innerHTML = contentPassC1;
        
        //cambiar campo statsContent (que en este caso es de tipo twins)
        let statsContentC1 = `<!--main title-->
        <h3 id="statsResultsH3">Resultados</h3>

        <!--single titles-->
        <div class="statsTwinTitleContainer">
            <div id="statsQuestions"><h4>Preguntas</h4></div>
        </div>

        <!--single stats-->
        <div id="progressbarContainer">
            <div class="progressbar1">
                <p>Only works with JS enabled</p>
            </div>
        </div>`
        getStatsContent.innerHTML = statsContentC1;

        //lanzamos la función loadStatsA2
        loadStatsC1();

        //preparar el botón getInicio
        console.log(`configurando botón inicio`);
        getStartButton.textContent = `Continuar C2`;
        start();
      
    }else if(preguntasHechas == 60){
      /*****************
      *  APROBANDO C2  *
      ******************/
        //cambiar las imágenes del nivel
        getLevelC2.src = `imgs/cefr-C2-ok.png`;
        
        //cambio de TÍTULO
        
        
        //cambio de SUBTÍTULO
        getStatsSubtitle.innerHTML = 'Nivel C1 terminado.'

        //cambiar texto del getCampoTextoBox
        console.log(`cambiando texto de la pantalla info`);
        let contentPassC1 = `<p id="campoTexto">Has completado exitosamente el nivel C2.<br />Posees el nivel más alto de este idioma. <br />Eres el Gandalf del inglés. Enhorabuena!</p>`;
        getCampoTextoBox.innerHTML = contentPassC1;
        
        //cambiar campo statsContent (que en este caso es de tipo twins)
        let statsContentC1 = `<!--main title-->
        <h3 id="statsResultsH3">Resultados</h3>

        <!--single titles-->
        <div class="statsTwinTitleContainer">
            <div id="statsQuestions"><h4>Preguntas</h4></div>
        </div>

        <!--single stats-->
        <div id="progressbarContainer">
            <div class="progressbar1">
                <p>Only works with JS enabled</p>
            </div>
        </div>`
        getStatsContent.innerHTML = statsContentC1;

        //lanzamos la función loadStatsA2
        loadStatsC2();

        //preparar el botón getInicio
        console.log(`configurando botón inicio`);
        getStartButton.textContent = `Finalizar`;
        finalScreen();
      
    }
}

// FUNCIÓN PARA CUANDO SE SUSPENDE UN NIVEL
function fail(){
  if(preguntasHechas == 10){
    /************
    *  FAIL A1  *
    *************/
    //cambio de TÍTULO
        
      //cambio de SUBTÍTULO
      getStatsSubtitle.innerHTML = 'Nivel A1 terminado.'

      //cambiar texto del getCampoTextoBox
      console.log(`cambiando texto de la pantalla info`);
      let contentPassA1 = `<p id="campoTexto">No has superado con éxito este nivel.<br />Tu nivel es de estudiante inicial de inglés pre-A1. <br />Debes seguir practicando para dominar el nivel A1.</p>`;
      getCampoTextoBox.innerHTML = contentPassA1;
        
      //cambiar campo statsContent (que en este caso es de tipo twins)
      let statsContentA1 = `<!--main title-->
      <h3 id="statsResultsH3">Resultados</h3>

      <!--twin titles-->
      <div class="statsTwinTitleContainer">
          <div id="statsQuestions"><h4>Preguntas</h4></div>
      </div>

      <!--twin stats-->
      <div id="progressbarContainer">
          <div class="progressbar1">
              <p>Only works with JS enabled</p>
          </div>
      </div>`
      getStatsContent.innerHTML = statsContentA1;

      //lanzamos la función loadStatsA2
      loadStatsA1();
    //preparar el botón getInicio
    getStartButton.textContent = `Terminar`;
    //*****************************************/

  }else if(preguntasHechas == 20){
    /************
    *  FAIL A2  *
    *************/
    //cambio de TÍTULO
        
    //cambio de SUBTÍTULO
    getStatsSubtitle = document.getElementById('statsSubtitle');
    getStatsSubtitle.innerHTML = 'Nivel A2 terminado.'
        
    //cambiar texto del getCampoTextBox
    let contentFailA2 = `<p id="campoTexto">No has superado con éxito este nivel.<br />Tu nivel es de estudiante inicial de inglés A1. <br />Debes seguir practicando para dominar el nivel A2.</p>`;
    getCampoTextoBox.innerHTML = contentFailA2;

        //cambiar campo statsContent (que en este caso es de tipo twins)
        let statsContentA2 = `<!--main title-->
        <h3 id="statsResultsH3">Resultados</h3>

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
        </div>`
    getStatsContent.innerHTML = statsContentA2;

    //lanzamos la función loadStatsA2
    loadStatsA2();
    
    //preparar el botón getInicio
    getStartButton.textContent = `Terminar`;

  //*****************************************/
  }else if(preguntasHechas == 30){
    /************
    *  FAIL B1  *
    *************/
    //cambio de TÍTULO
        
    //cambio de SUBTÍTULO
    getStatsSubtitle = document.getElementById('statsSubtitle');
    getStatsSubtitle.innerHTML = 'Nivel B1 terminado.'
        
    //cambiar texto del getCampoTextBox
    let contentFailB1 = `<p id="campoTexto">No has superado con éxito este nivel.<br />Tu nivel es de estudiante básico de inglés A2. <br />Debes seguir practicando para dominar el nivel B1.</p>`;
    getCampoTextoBox.innerHTML = contentFailB1;

        //cambiar campo statsContent (que en este caso es de tipo twins)
        let statsContentB1 = `<!--main title-->
        <h3 id="statsResultsH3">Resultados</h3>

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
        </div>`
    getStatsContent.innerHTML = statsContentB1;

    //lanzamos la función loadStatsA2
    loadStatsB1();
    
    //preparar el botón getInicio
    getStartButton.textContent = `Terminar`;
    //*****************************************/

  }else if(preguntasHechas == 40){
    /************
    *  FAIL B2  *
    *************/
    //cambio de TÍTULO
        
    //cambio de SUBTÍTULO
    getStatsSubtitle = document.getElementById('statsSubtitle');
    getStatsSubtitle.innerHTML = 'Nivel B2 terminado.'
        
    //cambiar texto del getCampoTextBox
    let contentFailB2 = `<p id="campoTexto">No has superado con éxito este nivel.<br />Tu nivel es de estudiante intermedio de inglés B1. <br />Debes seguir practicando para dominar el nivel B2.</p>`;
        getCampoTextoBox.innerHTML = contentFailB2;

        //cambiar campo statsContent (que en este caso es de tipo twins)
        let statsContentB2 = `<!--main title-->
        <h3 id="statsResultsH3">Resultados</h3>

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
        </div>`
        getStatsContent.innerHTML = statsContentB2;

        //lanzamos la función loadStatsB2
        loadStatsB2();
    
    //preparar el botón getInicio
    getStartButton.textContent = `Terminar`;
    //*****************************************/
    
  }else if(preguntasHechas == 50){
    /************
    *  FAIL C1  *
    *************/
    //cambio de TÍTULO
        
    //cambio de SUBTÍTULO
    getStatsSubtitle.innerHTML = 'Nivel C1 terminado.'

    //cambiar texto del getCampoTextoBox
    console.log(`cambiando texto de la pantalla info`);
    let contentFailC1 = `<p id="campoTexto">No has superado con éxito este nivel.<br />Tu nivel es de estudiante medio avanzado de inglés B2. <br />Debes seguir practicando para dominar el nivel C1.</p>`;
    getCampoTextoBox.innerHTML = contentFailC1;
        
    //cambiar campo statsContent (que en este caso es de tipo twins)
        let statsContentC1 = `<!--main title-->
        <h3 id="statsResultsH3">Resultados</h3>

        <!--single titles-->
        <div class="statsTwinTitleContainer">
            <div id="statsQuestions"><h4>Preguntas</h4></div>
        </div>

        <!--single stats-->
        <div id="progressbarContainer">
            <div class="progressbar1">
                <p>Only works with JS enabled</p>
            </div>
        </div>`
        getStatsContent.innerHTML = statsContentC1;

    //lanzamos la función loadStatsA2
    loadStatsC1();
    
    //preparar el botón getInicio
    getStartButton.textContent = `Terminar`;
    //*****************************************/
    
  }else if(preguntasHechas == 60){
    /************
    *  FAIL C2  *
    *************/
    //cambio de TÍTULO
        
    //cambio de SUBTÍTULO
    getStatsSubtitle.innerHTML = 'Nivel C1 terminado.'

    //cambiar texto del getCampoTextoBox
    console.log(`cambiando texto de la pantalla info`);
    let contentFailC1 = `<p id="campoTexto">No has superado con éxito este nivel.<br />Tu nivel es de estudiante avanzado C1. <br />Debes seguir practicando para dominar el nivel C2.</p>`;
    getCampoTextoBox.innerHTML = contentFailC1;
        
    //cambiar campo statsContent (que en este caso es de tipo twins)
        let statsContentC1 = `<!--main title-->
        <h3 id="statsResultsH3">Resultados</h3>

        <!--single titles-->
        <div class="statsTwinTitleContainer">
            <div id="statsQuestions"><h4>Preguntas</h4></div>
        </div>

        <!--single stats-->
        <div id="progressbarContainer">
            <div class="progressbar1">
                <p>Only works with JS enabled</p>
            </div>
        </div>`
    getStatsContent.innerHTML = statsContentC1;

    //lanzamos la función loadStatsA2
    loadStatsC2();
    
    //preparar el botón getInicio
    getStartButton.textContent = `Terminar`;

    //*****************************************/
  }
  finalScreen();
}

/*
  ___  ___  _   _ _  _ ___      _   _ 
 | _ \/ _ \| | | | \| |   \    /_\ / |
 |   / (_) | |_| | .` | |) |  / _ \| |
 |_|_\\___/ \___/|_|\_|___/  /_/ \_\_|

*/

function roundA1(){
    console.log(`lanzando función roundA1 con valores de preguntasHechas a ${preguntasHechas} y preguntaA1 a ${preguntaA1}`);
    
    //let clicksCounter = 0; //futura variable para contar que el usuario solo haga click una vez por pregunta.
    getContainerRespuesta01.onclick = answer1ChosenA1;
    getContainerRespuesta02.onclick = answer2ChosenA1;
    getContainerRespuesta03.onclick = answer3ChosenA1;
    getContainerRespuesta04.onclick = answer4ChosenA1;
}

// PRIMERA OPCIÓN
function answer1ChosenA1(){
  if(clickCounter == 0){

    //CHEQUEAMOS LA RESPUESTA ELEGIDA (1)
    if(questionArrA1[preguntaA1][5]){
      answer1ChosenCorrect();
      estrellaOk();
      
    }else if(!questionArrA1[preguntaA1][5]){
      answer1ChosenIncorrect();
      estrellaWrong();
      console.log(`lanzamos estrellaWrong function`);
      
    }
    
    //He cambiado el meter verdaderos y falsos a manos por un automatismo con dos ifs para ver si cada respuesta no marcada es correcta o incorrecta.
    setTimeout(()=>{
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (2)
      if(questionArrA1[preguntaA1][6]){
        getContainerRespuesta02.className = "correctAnswer";
      }else if(!questionArrA1[preguntaA1][6]){
        getContainerRespuesta02.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (3)
      if(questionArrA1[preguntaA1][7]){
        getContainerRespuesta03.className = "correctAnswer";
      }else if(!questionArrA1[preguntaA1][7]){
        getContainerRespuesta03.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (4)
      if(questionArrA1[preguntaA1][8]){
        getContainerRespuesta04.className = "correctAnswer";
      }else if(!questionArrA1[preguntaA1][8]){
        getContainerRespuesta04.className = "incorrectAnswer";
      }
    }, 1000);
  }

  }
  
  //SEGUNDA OPCIÓN
  function answer2ChosenA1(){
    if(clickCounter == 0){

      //CHEQUEAMOS LA RESPUESTA ELEGIDA (2)
      if(questionArrA1[preguntaA1][6]){
        answer2ChosenCorrect();
        estrellaOk();
      }else if(!questionArrA1[preguntaA1][6]){
        answer2ChosenIncorrect();
        estrellaWrong();
      }
      
      setTimeout(()=>{
        //CHEQUEAMOS RESPUESTA NO ELEGIDA (1)
        if(questionArrA1[preguntaA1][5]){
          getContainerRespuesta01.className = "correctAnswer";
        }else if(!questionArrA1[preguntaA1][5]){
          getContainerRespuesta01.className = "incorrectAnswer";
        }
        
        //CHEQUEAMOS RESPUESTA NO ELEGIDA (3)
        if(questionArrA1[preguntaA1][7]){
          getContainerRespuesta03.className = "correctAnswer";
        }else if(!questionArrA1[preguntaA1][7]){
          getContainerRespuesta03.className = "incorrectAnswer";
        }
        
        //CHEQUEAMOS RESPUESTA NO ELEGIDA (4)
        if(questionArrA1[preguntaA1][8]){
          getContainerRespuesta04.className = "correctAnswer";
        }else if(!questionArrA1[preguntaA1][8]){
          getContainerRespuesta04.className = "incorrectAnswer";
        }
      }, 1000);
    }

  }

  //TERCERA OPCIÓN
  function answer3ChosenA1(){
    if(clickCounter == 0){

      if(questionArrA1[preguntaA1][7]){
        answer3ChosenCorrect();
        estrellaOk();
      }else if(!questionArrA1[preguntaA1][7]){
        answer3ChosenIncorrect();
        estrellaWrong();
      }
      
      setTimeout(()=>{
        //CHEQUEAMOS RESPUESTA NO ELEGIDA (1)
        if(questionArrA1[preguntaA1][5]){
          getContainerRespuesta01.className = "correctAnswer";
        }else if(!questionArrA1[preguntaA1][5]){
          getContainerRespuesta01.className = "incorrectAnswer";
        }
        
        //CHEQUEAMOS RESPUESTA NO ELEGIDA (2)
        if(questionArrA1[preguntaA1][6]){
          getContainerRespuesta02.className = "correctAnswer";
        }else if(!questionArrA1[preguntaA1][6]){
          getContainerRespuesta02.className = "incorrectAnswer";
        }
        
        //CHEQUEAMOS RESPUESTA NO ELEGIDA (4)
        if(questionArrA1[preguntaA1][8]){
          getContainerRespuesta04.className = "correctAnswer";
        }else if(!questionArrA1[preguntaA1][8]){
          getContainerRespuesta04.className = "incorrectAnswer";
        }
      }, 1000);
    }
      
  }

  //CUARTA OPCIÓN
  function answer4ChosenA1(){
    if(clickCounter == 0){

      if(questionArrA1[preguntaA1][8]){
        answer4ChosenCorrect();
        estrellaOk();
      }else if(!questionArrA1[preguntaA1][8]){
        answer4ChosenIncorrect();
        estrellaWrong();
      }
      
      setTimeout(()=>{
        //CHEQUEAMOS RESPUESTA NO ELEGIDA (1)
      if(questionArrA1[preguntaA1][5]){
        getContainerRespuesta01.className = "correctAnswer";
      }else if(!questionArrA1[preguntaA1][5]){
        getContainerRespuesta01.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (2)
      if(questionArrA1[preguntaA1][6]){
        getContainerRespuesta02.className = "correctAnswer";
      }else if(!questionArrA1[preguntaA1][6]){
        getContainerRespuesta02.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (3)
      if(questionArrA1[preguntaA1][7]){
        getContainerRespuesta03.className = "correctAnswer";
      }else if(!questionArrA1[preguntaA1][7]){
        getContainerRespuesta03.className = "incorrectAnswer";
      }
    }, 1000);
  }
    
  }


  /*
  ___  ___  _   _ _  _ ___      _    ___ 
 | _ \/ _ \| | | | \| |   \    /_\  |_  )
 |   / (_) | |_| | .` | |) |  / _ \  / / 
 |_|_\\___/ \___/|_|\_|___/  /_/ \_\/___|
                                         
*/


function preRoundA2(){
    // PASAR A LA PANTALLA INFO PARA PRESENTAR RESULTADOS DE NIVEL A1
    gameToInfo();
    

    // CHEQUEAR EL NÚMERO DE RESPUESTAS ACERTADAS DEL NIVEL A1 PARA PERMITIR ACCESO A NIVEL A2 O TERMINAR AQUÍ EL TEST
    console.log(rightQuestionsA1);
    if(rightQuestionsA1 >= 8){
        console.log(`lanzo el pass`);
        pass();
    }else{
        console.log(`lanzo el fail`);
        fail();
    }
    
}

function roundA2(){
    console.log(`llegamos al round de A2`);
    if(preguntaA2 == 0 && preguntasHechas == 10)preRoundA2();
    console.log(`hemos salido del bucle inicial y continuamos con las preguntas de nivel A2`);

    getContainerRespuesta01.onclick = answer1ChosenA2;
    getContainerRespuesta02.onclick = answer2ChosenA2;
    getContainerRespuesta03.onclick = answer3ChosenA2;
    getContainerRespuesta04.onclick = answer4ChosenA2;
    
}

// PRIMERA OPCIÓN
function answer1ChosenA2(){
  if(clickCounter == 0){

    //CHEQUEAMOS LA RESPUESTA ELEGIDA (1)
    if(questionArrA2[preguntaA2][5]){
      answer1ChosenCorrect();
      estrellaOk();
      
    }else if(!questionArrA2[preguntaA2][5]){
      answer1ChosenIncorrect();
      estrellaWrong();
      console.log(`lanzamos estrellaWrong function`);
      
    }
    
    //He cambiado el meter verdaderos y falsos a manos por un automatismo con dos ifs para ver si cada respuesta no marcada es correcta o incorrecta.
    setTimeout(()=>{
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (2)
      if(questionArrA2[preguntaA2][6]){
        getContainerRespuesta02.className = "correctAnswer";
      }else if(!questionArrA2[preguntaA2][6]){
        getContainerRespuesta02.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (3)
      if(questionArrA2[preguntaA2][7]){
        getContainerRespuesta03.className = "correctAnswer";
      }else if(!questionArrA2[preguntaA2][7]){
        getContainerRespuesta03.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (4)
      if(questionArrA2[preguntaA2][8]){
        getContainerRespuesta04.className = "correctAnswer";
      }else if(!questionArrA2[preguntaA2][8]){
        getContainerRespuesta04.className = "incorrectAnswer";
      }
    }, 1000);
  }
    
  }
  
  //SEGUNDA OPCIÓN
  function answer2ChosenA2(){
    if(clickCounter == 0){

      //CHEQUEAMOS LA RESPUESTA ELEGIDA (2)
      if(questionArrA2[preguntaA2][6]){
        answer2ChosenCorrect();
        estrellaOk();
      }else if(!questionArrA2[preguntaA2][6]){
        answer2ChosenIncorrect();
        estrellaWrong();
      }
      
      setTimeout(()=>{
        //CHEQUEAMOS RESPUESTA NO ELEGIDA (1)
      if(questionArrA2[preguntaA2][5]){
        getContainerRespuesta01.className = "correctAnswer";
      }else if(!questionArrA2[preguntaA2][5]){
        getContainerRespuesta01.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (3)
      if(questionArrA2[preguntaA2][7]){
        getContainerRespuesta03.className = "correctAnswer";
      }else if(!questionArrA2[preguntaA2][7]){
        getContainerRespuesta03.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (4)
      if(questionArrA2[preguntaA2][8]){
        getContainerRespuesta04.className = "correctAnswer";
      }else if(!questionArrA2[preguntaA2][8]){
        getContainerRespuesta04.className = "incorrectAnswer";
      }
    }, 1000);
  }

  }

  //TERCERA OPCIÓN
  function answer3ChosenA2(){
    if(clickCounter == 0){

      if(questionArrA2[preguntaA2][7]){
        answer3ChosenCorrect();
        estrellaOk();
      }else if(!questionArrA2[preguntaA2][7]){
        answer3ChosenIncorrect();
        estrellaWrong();
      }
      
      setTimeout(()=>{
        //CHEQUEAMOS RESPUESTA NO ELEGIDA (1)
        if(questionArrA2[preguntaA2][5]){
          getContainerRespuesta01.className = "correctAnswer";
        }else if(!questionArrA2[preguntaA2][5]){
          getContainerRespuesta01.className = "incorrectAnswer";
        }
        
        //CHEQUEAMOS RESPUESTA NO ELEGIDA (2)
        if(questionArrA2[preguntaA2][6]){
          getContainerRespuesta02.className = "correctAnswer";
        }else if(!questionArrA2[preguntaA2][6]){
          getContainerRespuesta02.className = "incorrectAnswer";
        }
        
        //CHEQUEAMOS RESPUESTA NO ELEGIDA (4)
        if(questionArrA2[preguntaA2][8]){
          getContainerRespuesta04.className = "correctAnswer";
        }else if(!questionArrA2[preguntaA2][8]){
          getContainerRespuesta04.className = "incorrectAnswer";
        }
      }, 1000);
    }

  }

  //CUARTA OPCIÓN
  function answer4ChosenA2(){
    if(clickCounter == 0){

      if(questionArrA2[preguntaA2][8]){
        answer4ChosenCorrect();
        estrellaOk();
      }else if(!questionArrA2[preguntaA2][8]){
        answer4ChosenIncorrect();
        estrellaWrong();
      }
      
      setTimeout(()=>{
        //CHEQUEAMOS RESPUESTA NO ELEGIDA (1)
      if(questionArrA2[preguntaA2][5]){
        getContainerRespuesta01.className = "correctAnswer";
      }else if(!questionArrA2[preguntaA2][5]){
        getContainerRespuesta01.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (2)
      if(questionArrA2[preguntaA2][6]){
        getContainerRespuesta02.className = "correctAnswer";
      }else if(!questionArrA2[preguntaA2][6]){
        getContainerRespuesta02.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (3)
      if(questionArrA2[preguntaA2][7]){
        getContainerRespuesta03.className = "correctAnswer";
      }else if(!questionArrA2[preguntaA2][7]){
        getContainerRespuesta03.className = "incorrectAnswer";
      }
    }, 1000);
  }

  }



/*
 ___  ___  _   _ _  _ ___    ___ _ 
| _ \/ _ \| | | | \| |   \  | _ ) |
|   / (_) | |_| | .` | |) | | _ \ |
|_|_\\___/ \___/|_|\_|___/  |___/_|
                                   
*/

function preRoundB1(){
  // PASAR A LA PANTALLA INFO PARA PRESENTAR RESULTADOS DE NIVEL A2
  gameToInfo();
  

  // CHEQUEAR EL NÚMERO DE RESPUESTAS ACERTADAS
  console.log(rightQuestionsA2);
  if(rightQuestionsA2 >= 8){
      console.log(`lanzo el pass`);
      pass();
  }else{
      console.log(`lanzo el fail`);
      fail();
  }
  
}

function roundB1(){
  console.log(`llegamos al round B1`);
  if(preguntaB1 == 0 && preguntasHechas == 20)preRoundB1();
  console.log(`hemos salido del bucle inicial y continuamos con las preguntas de nivel B1`);

  getContainerRespuesta01.onclick = answer1ChosenB1;
  getContainerRespuesta02.onclick = answer2ChosenB1;
  getContainerRespuesta03.onclick = answer3ChosenB1;
  getContainerRespuesta04.onclick = answer4ChosenB1;
  
}


// PRIMERA OPCIÓN
function answer1ChosenB1(){
  if(clickCounter == 0){

    //CHEQUEAMOS LA RESPUESTA ELEGIDA (1)
    if(questionArrB1[preguntaB1][5]){
      answer1ChosenCorrect();
      estrellaOk();
      
    }else if(!questionArrB1[preguntaB1][5]){
      answer1ChosenIncorrect();
      estrellaWrong();
      console.log(`lanzamos estrellaWrong function`);
      
    }
    
    //He cambiado el meter verdaderos y falsos a manos por un automatismo con dos ifs para ver si cada respuesta no marcada es correcta o incorrecta.
    setTimeout(()=>{
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (2)
      if(questionArrB1[preguntaB1][6]){
        getContainerRespuesta02.className = "correctAnswer";
      }else if(!questionArrB1[preguntaB1][6]){
        getContainerRespuesta02.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (3)
      if(questionArrB1[preguntaB1][7]){
        getContainerRespuesta03.className = "correctAnswer";
      }else if(!questionArrB1[preguntaB1][7]){
        getContainerRespuesta03.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (4)
      if(questionArrB1[preguntaB1][8]){
        getContainerRespuesta04.className = "correctAnswer";
      }else if(!questionArrB1[preguntaB1][8]){
        getContainerRespuesta04.className = "incorrectAnswer";
      }
    }, 1000);
  }

}

//SEGUNDA OPCIÓN
function answer2ChosenB1(){
  if(clickCounter == 0){

    //CHEQUEAMOS LA RESPUESTA ELEGIDA (2)
    if(questionArrB1[preguntaB1][6]){
      answer2ChosenCorrect();
      estrellaOk();
    }else if(!questionArrB1[preguntaB1][6]){
      answer2ChosenIncorrect();
      estrellaWrong();
    }
    
    setTimeout(()=>{
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (1)
      if(questionArrB1[preguntaB1][5]){
        getContainerRespuesta01.className = "correctAnswer";
      }else if(!questionArrB1[preguntaB1][5]){
        getContainerRespuesta01.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (3)
      if(questionArrB1[preguntaB1][7]){
        getContainerRespuesta03.className = "correctAnswer";
      }else if(!questionArrB1[preguntaB1][7]){
        getContainerRespuesta03.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (4)
      if(questionArrB1[preguntaB1][8]){
        getContainerRespuesta04.className = "correctAnswer";
      }else if(!questionArrB1[preguntaB1][8]){
        getContainerRespuesta04.className = "incorrectAnswer";
      }
    }, 1000);
  }
    
}

//TERCERA OPCIÓN
function answer3ChosenB1(){
  if(clickCounter == 0){

    if(questionArrB1[preguntaB1][7]){
      answer3ChosenCorrect();
      estrellaOk();
    }else if(!questionArrB1[preguntaB1][7]){
      answer3ChosenIncorrect();
      estrellaWrong();
    }
    
    setTimeout(()=>{
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (1)
      if(questionArrB1[preguntaB1][5]){
        getContainerRespuesta01.className = "correctAnswer";
      }else if(!questionArrB1[preguntaB1][5]){
        getContainerRespuesta01.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (2)
      if(questionArrB1[preguntaB1][6]){
        getContainerRespuesta02.className = "correctAnswer";
      }else if(!questionArrB1[preguntaB1][6]){
        getContainerRespuesta02.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (4)
      if(questionArrB1[preguntaB1][8]){
        getContainerRespuesta04.className = "correctAnswer";
      }else if(!questionArrB1[preguntaB1][8]){
        getContainerRespuesta04.className = "incorrectAnswer";
      }
    }, 1000);
  }
    
}

//CUARTA OPCIÓN
function answer4ChosenB1(){
  if(clickCounter == 0){

    if(questionArrB1[preguntaB1][8]){
      answer4ChosenCorrect();
      estrellaOk();
    }else if(!questionArrB1[preguntaB1][8]){
      answer4ChosenIncorrect();
      estrellaWrong();
    }
    
    setTimeout(()=>{
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (1)
    if(questionArrB1[preguntaB1][5]){
      getContainerRespuesta01.className = "correctAnswer";
    }else if(!questionArrB1[preguntaB1][5]){
      getContainerRespuesta01.className = "incorrectAnswer";
    }
    
    //CHEQUEAMOS RESPUESTA NO ELEGIDA (2)
    if(questionArrB1[preguntaB1][6]){
      getContainerRespuesta02.className = "correctAnswer";
    }else if(!questionArrB1[preguntaB1][6]){
      getContainerRespuesta02.className = "incorrectAnswer";
    }
    
    //CHEQUEAMOS RESPUESTA NO ELEGIDA (3)
    if(questionArrB1[preguntaB1][7]){
      getContainerRespuesta03.className = "correctAnswer";
    }else if(!questionArrB1[preguntaB1][7]){
      getContainerRespuesta03.className = "incorrectAnswer";
    }
  }, 1000);
}

}

/*

  ___  ___  _   _ _  _ ___    ___ ___ 
 | _ \/ _ \| | | | \| |   \  | _ )_  )
 |   / (_) | |_| | .` | |) | | _ \/ / 
 |_|_\\___/ \___/|_|\_|___/  |___/___|
                                      
*/
function preRoundB2(){
  // PASAR A LA PANTALLA INFO PARA PRESENTAR RESULTADOS DE NIVEL B1
  gameToInfo();
  

  // CHEQUEAR EL NÚMERO DE RESPUESTAS ACERTADAS
  console.log(rightQuestionsB1);
  if(rightQuestionsB1 >= 8){
      console.log(`lanzo el pass`);
      pass();
  }else{
      console.log(`lanzo el fail`);
      fail();
  }
  
}

function roundB2(){
  console.log(`llegamos al round B2`);
  if(preguntaB2 == 0 && preguntasHechas == 30)preRoundB2();
  console.log(`hemos salido del bucle inicial y continuamos con las preguntas de nivel B1`);

  getContainerRespuesta01.onclick = answer1ChosenB2;
  getContainerRespuesta02.onclick = answer2ChosenB2;
  getContainerRespuesta03.onclick = answer3ChosenB2;
  getContainerRespuesta04.onclick = answer4ChosenB2;
  
}

// PRIMERA OPCIÓN

function answer1ChosenB2(){
    if(clickCounter == 0){
    //CHEQUEAMOS LA RESPUESTA ELEGIDA (1)
    if(questionArrB2[preguntaB2][5]){
      answer1ChosenCorrect();
      estrellaOk();
      
    }else if(!questionArrB2[preguntaB2][5]){
      answer1ChosenIncorrect();
      estrellaWrong();
      console.log(`lanzamos estrellaWrong function`);
      
    }
    
    //He cambiado el meter verdaderos y falsos a manos por un automatismo con dos ifs para ver si cada respuesta no marcada es correcta o incorrecta.
    setTimeout(()=>{
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (2)
      if(questionArrB2[preguntaB2][6]){
        getContainerRespuesta02.className = "correctAnswer";
      }else if(!questionArrB2[preguntaB2][6]){
        getContainerRespuesta02.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (3)
      if(questionArrB2[preguntaB2][7]){
        getContainerRespuesta03.className = "correctAnswer";
      }else if(!questionArrB2[preguntaB2][7]){
        getContainerRespuesta03.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (4)
      if(questionArrB2[preguntaB2][8]){
        getContainerRespuesta04.className = "correctAnswer";
      }else if(!questionArrB2[preguntaB2][8]){
        getContainerRespuesta04.className = "incorrectAnswer";
      }
    }, 1000);
  }

}

//SEGUNDA OPCIÓN
function answer2ChosenB2(){
  if(clickCounter == 0){

    //CHEQUEAMOS LA RESPUESTA ELEGIDA (2)
    if(questionArrB2[preguntaB2][6]){
      answer2ChosenCorrect();
      estrellaOk();
    }else if(!questionArrB2[preguntaB2][6]){
      answer2ChosenIncorrect();
      estrellaWrong();
    }
    
    setTimeout(()=>{
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (1)
      if(questionArrB2[preguntaB2][5]){
        getContainerRespuesta01.className = "correctAnswer";
      }else if(!questionArrB2[preguntaB2][5]){
        getContainerRespuesta01.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (3)
      if(questionArrB2[preguntaB2][7]){
        getContainerRespuesta03.className = "correctAnswer";
      }else if(!questionArrB2[preguntaB2][7]){
        getContainerRespuesta03.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (4)
      if(questionArrB2[preguntaB2][8]){
        getContainerRespuesta04.className = "correctAnswer";
      }else if(!questionArrB2[preguntaB2][8]){
        getContainerRespuesta04.className = "incorrectAnswer";
      }
    }, 1000);
  }

}

//TERCERA OPCIÓN
function answer3ChosenB2(){
  if(clickCounter == 0){

    if(questionArrB2[preguntaB2][7]){
      answer3ChosenCorrect();
      estrellaOk();
    }else if(!questionArrB2[preguntaB2][7]){
      answer3ChosenIncorrect();
      estrellaWrong();
    }
    
    setTimeout(()=>{
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (1)
      if(questionArrB2[preguntaB2][5]){
        getContainerRespuesta01.className = "correctAnswer";
      }else if(!questionArrB2[preguntaB2][5]){
        getContainerRespuesta01.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (2)
      if(questionArrB2[preguntaB2][6]){
        getContainerRespuesta02.className = "correctAnswer";
      }else if(!questionArrB2[preguntaB2][6]){
        getContainerRespuesta02.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (4)
      if(questionArrB2[preguntaB2][8]){
        getContainerRespuesta04.className = "correctAnswer";
      }else if(!questionArrB2[preguntaB2][8]){
        getContainerRespuesta04.className = "incorrectAnswer";
      }
    }, 1000);
  }
    
}

//CUARTA OPCIÓN
function answer4ChosenB2(){
  if(clickCounter == 0){

    if(questionArrB2[preguntaB2][8]){
      answer4ChosenCorrect();
      estrellaOk();
    }else if(!questionArrB2[preguntaB2][8]){
      answer4ChosenIncorrect();
      estrellaWrong();
    }
    
    setTimeout(()=>{
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (1)
      if(questionArrB2[preguntaB2][5]){
        getContainerRespuesta01.className = "correctAnswer";
      }else if(!questionArrB2[preguntaB2][5]){
        getContainerRespuesta01.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (2)
      if(questionArrB2[preguntaB2][6]){
        getContainerRespuesta02.className = "correctAnswer";
      }else if(!questionArrB2[preguntaB2][6]){
        getContainerRespuesta02.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (3)
      if(questionArrB2[preguntaB2][7]){
        getContainerRespuesta03.className = "correctAnswer";
      }else if(!questionArrB2[preguntaB2][7]){
        getContainerRespuesta03.className = "incorrectAnswer";
      }
    }, 1000);
  }

}


/*
  ___  ___  _   _ _  _ ___     ___ _ 
 | _ \/ _ \| | | | \| |   \   / __/ |
 |   / (_) | |_| | .` | |) | | (__| |
 |_|_\\___/ \___/|_|\_|___/   \___|_|
                                     
*/
function preRoundC1(){
  // PASAR A LA PANTALLA INFO PARA PRESENTAR RESULTADOS DE NIVEL B2
  gameToInfo();
  

  // CHEQUEAR EL NÚMERO DE RESPUESTAS ACERTADAS
  console.log(rightQuestionsB2);
  if(rightQuestionsB2 >= 8){
      console.log(`lanzo el pass`);
      pass();
  }else{
      console.log(`lanzo el fail`);
      fail();
  }
  
}

function roundC1(){
  console.log(`llegamos al round C1`);
  if(preguntaC1 == 0 && preguntasHechas == 40)preRoundC1();
  console.log(`hemos salido del bucle inicial y continuamos con las preguntas de nivel C1`);

  getContainerRespuesta01.onclick = answer1ChosenC1;
  getContainerRespuesta02.onclick = answer2ChosenC1;
  getContainerRespuesta03.onclick = answer3ChosenC1;
  getContainerRespuesta04.onclick = answer4ChosenC1;
  
}

// PRIMERA OPCIÓN
function answer1ChosenC1(){
  if(clickCounter == 0){

    //CHEQUEAMOS LA RESPUESTA ELEGIDA (1)
    if(questionArrC1[preguntaC1][5]){
      answer1ChosenCorrect();
      estrellaOk();
      
    }else if(!questionArrC1[preguntaC1][5]){
      answer1ChosenIncorrect();
      estrellaWrong();
      console.log(`lanzamos estrellaWrong function`);
      
    }
    
    //He cambiado el meter verdaderos y falsos a manos por un automatismo con dos ifs para ver si cada respuesta no marcada es correcta o incorrecta.
    setTimeout(()=>{
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (2)
      if(questionArrC1[preguntaC1][6]){
        getContainerRespuesta02.className = "correctAnswer";
      }else if(!questionArrC1[preguntaC1][6]){
      getContainerRespuesta02.className = "incorrectAnswer";
    }
    
    //CHEQUEAMOS RESPUESTA NO ELEGIDA (3)
    if(questionArrC1[preguntaC1][7]){
      getContainerRespuesta03.className = "correctAnswer";
    }else if(!questionArrC1[preguntaC1][7]){
      getContainerRespuesta03.className = "incorrectAnswer";
    }
    
    //CHEQUEAMOS RESPUESTA NO ELEGIDA (4)
    if(questionArrC1[preguntaC1][8]){
      getContainerRespuesta04.className = "correctAnswer";
    }else if(!questionArrC1[preguntaC1][8]){
      getContainerRespuesta04.className = "incorrectAnswer";
    }
  }, 1000);
}

}

//SEGUNDA OPCIÓN
function answer2ChosenC1(){
  if(clickCounter == 0){

    //CHEQUEAMOS LA RESPUESTA ELEGIDA (2)
    if(questionArrC1[preguntaC1][6]){
      answer2ChosenCorrect();
      estrellaOk();
    }else if(!questionArrC1[preguntaC1][6]){
      answer2ChosenIncorrect();
      estrellaWrong();
    }
    
    setTimeout(()=>{
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (1)
      if(questionArrC1[preguntaC1][5]){
        getContainerRespuesta01.className = "correctAnswer";
      }else if(!questionArrC1[preguntaC1][5]){
        getContainerRespuesta01.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (3)
      if(questionArrC1[preguntaC1][7]){
        getContainerRespuesta03.className = "correctAnswer";
      }else if(!questionArrC1[preguntaC1][7]){
        getContainerRespuesta03.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (4)
      if(questionArrC1[preguntaC1][8]){
        getContainerRespuesta04.className = "correctAnswer";
      }else if(!questionArrC1[preguntaC1][8]){
        getContainerRespuesta04.className = "incorrectAnswer";
      }
    }, 1000);
  }
    
}

//TERCERA OPCIÓN
function answer3ChosenC1(){
  if(clickCounter == 0){

    if(questionArrC1[preguntaC1][7]){
      answer3ChosenCorrect();
      estrellaOk();
    }else if(!questionArrC1[preguntaC1][7]){
      answer3ChosenIncorrect();
      estrellaWrong();
    }
    
    setTimeout(()=>{
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (1)
      if(questionArrC1[preguntaC1][5]){
        getContainerRespuesta01.className = "correctAnswer";
      }else if(!questionArrC1[preguntaC1][5]){
        getContainerRespuesta01.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (2)
      if(questionArrC1[preguntaC1][6]){
        getContainerRespuesta02.className = "correctAnswer";
      }else if(!questionArrC1[preguntaC1][6]){
        getContainerRespuesta02.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (4)
      if(questionArrC1[preguntaC1][8]){
        getContainerRespuesta04.className = "correctAnswer";
      }else if(!questionArrC1[preguntaC1][8]){
        getContainerRespuesta04.className = "incorrectAnswer";
      }
    }, 1000);
  }

}

//CUARTA OPCIÓN
function answer4ChosenC1(){
  if(clickCounter == 0){

    if(questionArrC1[preguntaC1][8]){
      answer4ChosenCorrect();
      estrellaOk();
    }else if(!questionArrC1[preguntaC1][8]){
      answer4ChosenIncorrect();
      estrellaWrong();
    }
    
    setTimeout(()=>{
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (1)
      if(questionArrC1[preguntaC1][5]){
        getContainerRespuesta01.className = "correctAnswer";
      }else if(!questionArrC1[preguntaC1][5]){
        getContainerRespuesta01.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (2)
      if(questionArrC1[preguntaC1][6]){
        getContainerRespuesta02.className = "correctAnswer";
      }else if(!questionArrC1[preguntaC1][6]){
        getContainerRespuesta02.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (3)
      if(questionArrC1[preguntaC1][7]){
        getContainerRespuesta03.className = "correctAnswer";
      }else if(!questionArrC1[preguntaC1][7]){
        getContainerRespuesta03.className = "incorrectAnswer";
      }
    }, 1000);
  }

}


/*
  ___  ___  _   _ _  _ ___     ___ ___ 
 | _ \/ _ \| | | | \| |   \   / __|_  )
 |   / (_) | |_| | .` | |) | | (__ / / 
 |_|_\\___/ \___/|_|\_|___/   \___/___|
                                       
*/
function preRoundC2(){
  console.log('Nos metemos en el preRoundC2 function');
  
  // PASAR A LA PANTALLA INFO PARA PRESENTAR RESULTADOS DE NIVEL C1
  console.log('carga de pantalla de información C2');
  gameToInfo();
  
  // CHEQUEAR EL NÚMERO DE RESPUESTAS ACERTADAS
  console.log(rightQuestionsC1);
  if(rightQuestionsC1 >= 8){
      console.log(`lanzo el pass de nivel C1`);
      pass();
  }else{
      console.log(`lanzo el fail de nivel C1`);
      fail();
  }
  
}

function roundC2(){
  console.log(`llegamos al round C2`);
  if(preguntaC2 == 0 && preguntasHechas == 50)preRoundC2();
  console.log(`hemos salido del bucle inicial y continuamos con las preguntas de nivel C2`);

  getContainerRespuesta01.onclick = answer1ChosenC2;
  getContainerRespuesta02.onclick = answer2ChosenC2;
  getContainerRespuesta03.onclick = answer3ChosenC2;
  getContainerRespuesta04.onclick = answer4ChosenC2;
  
}

// PRIMERA OPCIÓN
function answer1ChosenC2(){
  if(clickCounter == 0){

    //CHEQUEAMOS LA RESPUESTA ELEGIDA (1)
    if(questionArrC2[preguntaC2][5]){
      console.log(questionArrC2[preguntaC2][5]);
      answer1ChosenCorrect();
      estrellaOk();
      
    }else if(!questionArrC2[preguntaC2][5]){
      answer1ChosenIncorrect();
      estrellaWrong();
      console.log(`lanzamos estrellaWrong function`);
      
    }
    
    //He cambiado el meter verdaderos y falsos a manos por un automatismo con dos ifs para ver si cada respuesta no marcada es correcta o incorrecta.
    setTimeout(()=>{
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (2)
      if(questionArrC2[preguntaC2][6]){
        getContainerRespuesta02.className = "correctAnswer";
      }else if(!questionArrC2[preguntaC2][6]){
        getContainerRespuesta02.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (3)
      if(questionArrC2[preguntaC2][7]){
        getContainerRespuesta03.className = "correctAnswer";
      }else if(!questionArrC2[preguntaC2][7]){
        getContainerRespuesta03.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (4)
      if(questionArrC2[preguntaC2][8]){
        getContainerRespuesta04.className = "correctAnswer";
      }else if(!questionArrC2[preguntaC2][8]){
        getContainerRespuesta04.className = "incorrectAnswer";
      }
    }, 1000);
  }

}

//SEGUNDA OPCIÓN
function answer2ChosenC2(){
  if(clickCounter == 0){

    //CHEQUEAMOS LA RESPUESTA ELEGIDA (2)
    if(questionArrC2[preguntaC2][6]){
      answer2ChosenCorrect();
      estrellaOk();
    }else if(!questionArrC2[preguntaC2][6]){
      answer2ChosenIncorrect();
      estrellaWrong();
    }
    
    setTimeout(()=>{
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (1)
      if(questionArrC2[preguntaC2][5]){
        getContainerRespuesta01.className = "correctAnswer";
      }else if(!questionArrC2[preguntaC2][5]){
        getContainerRespuesta01.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (3)
      if(questionArrC2[preguntaC2][7]){
        getContainerRespuesta03.className = "correctAnswer";
      }else if(!questionArrC2[preguntaC2][7]){
        getContainerRespuesta03.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (4)
      if(questionArrC2[preguntaC2][8]){
        getContainerRespuesta04.className = "correctAnswer";
      }else if(!questionArrC2[preguntaC2][8]){
        getContainerRespuesta04.className = "incorrectAnswer";
      }
    }, 1000);
  }

}

//TERCERA OPCIÓN
function answer3ChosenC2(){
  if(clickCounter == 0){

    if(questionArrC2[preguntaC2][7]){
      answer3ChosenCorrect();
      estrellaOk();
    }else if(!questionArrC2[preguntaC2][7]){
      answer3ChosenIncorrect();
      estrellaWrong();
    }
    
    setTimeout(()=>{
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (1)
      if(questionArrC2[preguntaC2][5]){
        getContainerRespuesta01.className = "correctAnswer";
      }else if(!questionArrC2[preguntaC2][5]){
        getContainerRespuesta01.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (2)
      if(questionArrC2[preguntaC2][6]){
        getContainerRespuesta02.className = "correctAnswer";
      }else if(!questionArrC2[preguntaC2][6]){
        getContainerRespuesta02.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (4)
      if(questionArrC2[preguntaC2][8]){
        getContainerRespuesta04.className = "correctAnswer";
      }else if(!questionArrC2[preguntaC2][8]){
        getContainerRespuesta04.className = "incorrectAnswer";
      }
    }, 1000);
  }
    
}

//CUARTA OPCIÓN
function answer4ChosenC2(){
  if(clickCounter == 0){

    if(questionArrC2[preguntaC2][8]){
      answer4ChosenCorrect();
      estrellaOk();
    }else if(!questionArrC2[preguntaC2][8]){
      answer4ChosenIncorrect();
      estrellaWrong();
    }
    
    setTimeout(()=>{
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (1)
      if(questionArrC2[preguntaC2][5]){
        getContainerRespuesta01.className = "correctAnswer";
      }else if(!questionArrC2[preguntaC2][5]){
        getContainerRespuesta01.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (2)
      if(questionArrC2[preguntaC2][6]){
        getContainerRespuesta02.className = "correctAnswer";
      }else if(!questionArrC2[preguntaC2][6]){
        getContainerRespuesta02.className = "incorrectAnswer";
      }
      
      //CHEQUEAMOS RESPUESTA NO ELEGIDA (3)
      if(questionArrC2[preguntaC2][7]){
        getContainerRespuesta03.className = "correctAnswer";
      }else if(!questionArrC2[preguntaC2][7]){
        getContainerRespuesta03.className = "incorrectAnswer";
      }
    }, 1000);
  }

}

function finalScreen(){
  getStartButton.addEventListener('click', function(){
    window.close();
  });
  gameToInfo();
}


/* **********************************************
  _    ___ ___ _____ ___ _  _ ___ _  _  ___ ___ 
 | |  |_ _/ __|_   _| __| \| |_ _| \| |/ __/ __|
 | |__ | |\__ \ | | | _|| .` || || .` | (_ \__ \
 |____|___|___/ |_| |___|_|\_|___|_|\_|\___|___/
                                                
**************************************************/

let preguntasListening = [
  [`What was the weather like when the holiday began?`, `sfx/a2_l1.mp3`, `imgs/testDeNivel/a2_l1_answ1.png`, `imgs/testDeNivel/a2_l1_answ2.png`, `imgs/testDeNivel/a2_l1_answ3.png`, true, false, false],
  [`What did Peter buy today?`,                         `sfx/a2_l2.mp3`, `imgs/testDeNivel/a2_l2_answ1.png`, `imgs/testDeNivel/a2_l2_answ2.png`, `imgs/testDeNivel/a2_l2_answ3.png`, false, false, true],
  [`Where is the girl going this afternoon?`,           `sfx/a2_l3.mp3`, `imgs/testDeNivel/a2_l3_answ1.png`, `imgs/testDeNivel/a2_l3_answ2.png`, `imgs/testDeNivel/a2_l3_answ3.png`, false, true, false],
  [`How will they get to their tennis class?`,          `sfx/a2_l4.mp3`, `imgs/testDeNivel/a2_l4_answ1.png`, `imgs/testDeNivel/a2_l4_answ2.png`, `imgs/testDeNivel/a2_l4_answ3.png`, false, false, true],
  [`Which woman is Laura's new teacher?`,               `sfx/a2_l5.mp3`, `imgs/testDeNivel/a2_l5_answ1.png`, `imgs/testDeNivel/a2_l5_answ2.png`, `imgs/testDeNivel/a2_l5_answ3.png`, false, false, true],

  [`Where will the women meet tomorrow?`,                 `sfx/b1_l1.mp3`, `imgs/testDeNivel/b1_l1_answ1.png`, `imgs/testDeNivel/b1_l1_answ2.png`, `imgs/testDeNivel/b1_l1_answ3.png`, false, true, false],
  [`When will the man go to see the dentist?`,            `sfx/b1_l2.mp3`, `imgs/testDeNivel/b1_l2_answ1.png`, `imgs/testDeNivel/b1_l2_answ2.png`, `imgs/testDeNivel/b1_l2_answ3.png`, false, true, false],
  [`Where are they at the moment?`,                       `sfx/b1_l3.mp3`, `imgs/testDeNivel/b1_l3_answ1.png`, `imgs/testDeNivel/b1_l3_answ2.png`, `imgs/testDeNivel/b1_l3_answ3.png`, false, false, true],
  [`Where did the man stay on holiday?`,                  `sfx/b1_l4.mp3`, `imgs/testDeNivel/b1_l4_answ1.png`, `imgs/testDeNivel/b1_l4_answ2.png`, `imgs/testDeNivel/b1_l4_answ3.png`, false, true, false],
  [`Which goods are reduced in price in the store now?`,  `sfx/b1_l5.mp3`, `imgs/testDeNivel/b1_l5_answ1.png`, `imgs/testDeNivel/b1_l5_answ2.png`, `imgs/testDeNivel/b1_l5_answ3.png`, true, false, false],

  [`You hear a woman talking on the radio about an actor.<br>What does the woman say about him?`,               `sfx/b2_l1.mp3`, `His acting has improved over the years.`, `The media often criticise him unfairly.`, `He gets fewer film roles than he deserves`, true, false, false],
  [`You hear a hairstylist talking about her career.<br>She prefers working in the TV industry because she...`, `sfx/b2_l2.mp3`, `feels that her contribution is valued.`, `is able to express her opinions freely.`, `thrives on the creative challenge the work presents.`, true, false, false],
  [`You hear a woman talking about playing the piano.<br>What does she say about learning to play the piano?`, `sfx/b2_l3.mp3`, `It's important to find the right teacher.`, `Everyone can play well if they try.`, `It requires more discipline than other instruments.`, true, false, false],
  [`You hear part of an interview with a crime writer.<brWhat does he say about his home town?`, `sfx/b2_l4.mp3`, `He generally feels uncomfortable returning there.`, `People there tend to treat him differently now.`, `It was a good background for the writing he does.`, false, false, true],
  [`You hear a chef talking about making a TV series.<br>What does he say about it?`, `sfx/b2_l5.mp3`, `He didn't get on with his co-presenter.`, `He didn't expect to enjoy the experience.`, `He didn't like the working hours.`, false, true, false],

  // PREGUNTA DE C1 NÚMERO 1
  [`Listen to this extract and answer the two questions.<br>You hear two friends discussing an exhibition they have just visited, featuring a female sculptor called Sue Lin.`,
`sfx/c1_l1.mp3`, 
`1.- What does the woman think about the way the exhibition was set out?`, 
`It enabled people to appreciate how innovative Sue's work was.`, 
`It reflected Sue's original intentions for her sculptures.`, 
`It placed too much emphasis on Sue's contemporaries.`, 
false, false, true, 

`2.- The man says the decisions made about what to include in the exhibition have...`, 
`helped to increase visitor numbers.`, 
`diminished his opinion of Sue's sculptures.`, 
`disappointed admirers of Sue\'s talent.`, 
false, true, false],

// PREGUNTA DE C1 NÚMERO 2
[`Listen to this extract and answer the two questions.<br>You hear two students talking about fast food.`,
`sfx/c1_l2.mp3`, 
`1.- The man says his housemates choose to eat fast food because...`, 
`they've been influenced by marketing campaings.`, 
`the generous size of servings represents good value.`, 
`their lack of cooking skills makes it an attractive option.`, 
false, false, true, 

`2.- What is the woman's attitude to fast food?`, 
`She criticises its unappetising flavours.`, 
`She welcomes the new options available.`, 
`She doubts whether improved labelling will affect its popularity.`, 
false, true, false],
];

function listening(){
  // RESETEAMOS PANTALLA A LISTENING PARA LA PRIMERA PREGUNTA DE CADA NIVEL DE LISTENING
  if((preguntasHechas == 20 && listeningsHechos == 0) || (preguntasHechas == 30 && listeningsHechos == 5) || (preguntasHechas == 40 && listeningsHechos == 10)){
    
    
    if(preguntasHechas <= 30 && listeningsHechos < 10){
      // CAMBIAMOS EL FOOTER A LAS 5 ESTRELLAS GRISES HASTA B1
      footerToListening();
      // CAMBIAMOS PANTALLA DE JUEGO A FORMATO DE RESPUESTAS PARA LISTENINGS CON AUDIO HASTA B1
      gameToListening();

    }else if(preguntasHechas == 40 && listeningsHechos < 15){
      // CAMBIAMOS EL FOOTER A LAS 5 ESTRELLAS GRISES DE B2
      footerToListening();
      // CAMBIAMOS PANTALLA DE JUEGO A FORMATO DE RESPUESTAS PARA LISTENINGS CON AUDIO DE B2
      gameToListeningB2();

    }
  }

  /*********************************************************
  *  CARGAR ELEMENTOS GRÁFICOS DE LA PREGUNTA EN PANTALLA  *
  **********************************************************/
  // ATRAPAMOS ELEMENTOS CREADOS
    getListPregunta = document.getElementById(`question`);
    getListAudio = document.getElementById(`audio`);
    getListAudioSrc = document.getElementById(`audioSrc`);
    getListFoto1 = document.getElementById(`foto1`);
    getListFoto2 = document.getElementById(`foto2`);
    getListFoto3 = document.getElementById(`foto3`);
    getTextoRespuesta01 = document.getElementById(`answer01`);
    getTextoRespuesta02 = document.getElementById(`answer02`);
    getTextoRespuesta03 = document.getElementById(`answer03`);
  
  
  // CARGAR PREGUNTA
  
    getListPregunta.innerHTML = preguntasListening[listeningsHechos][0];
  
  // CARGAR AUDIO
    console.log(`cargando audio del listening ${listeningsHechos}`);
    getListAudioSrc.src = preguntasListening[listeningsHechos][1];
    getListAudio.load();
 
  
  // ESTA PRIMERA PARTE DEL IF GESTIONA LISTENINGS DE A2 Y B1 CON LAS IMÁGENES
  if(listeningsHechos < 10){

    // AÑADO CONTADOR PARA LOS LISTENINGS QUE LLEVAMOS HECHOS DE A2 Y DE B1. ES NECESARIO PARA LOS PORCENTAJES FINALES.
    if(listeningsHechos < 5){
      counterListeningsA2++;
    }else{
      counterListeningsB1++;
    }
    // CARGAR IMG 1
    console.log(`Cargando imagen respuesta 1 del listening`);
    getListFoto1.src = preguntasListening[listeningsHechos][2];
    
    // AÑADIMOS LISTENER A IMG 1
    getListFoto1.addEventListener(`click`, function(){
      if(clickCounter == 0){
        clickCounter++;
        console.log(`Opción 1 elegida en el listening`);
        // chequeamos si se ha acertado la pregunta
        if(preguntasListening[listeningsHechos - 1][5]){
          //sumar pregunta acertada
          sumarPuntoListening();
          //cambiar estrella
          cambiarEstrellaListeningOk();
          
        }else{
          // cambiar estrella a gris de fallo
          cambiarEstrellaListeningWrong();
        }
      }
    });
    // *******************************************************
    
    // CARGAR IMG 2
    console.log(`Cargando imagen respuesta 2 del listening`);
    getListFoto2.src = preguntasListening[listeningsHechos][3];
    // AÑADIMOS LISTENER AL BOTÓN
    getListFoto2.addEventListener(`click`, function(){
      if(clickCounter == 0){
        clickCounter++;
        console.log(`Opción 2 elegida en el listening`);
        // chequeamos si se ha acertado la pregunta
        if(preguntasListening[listeningsHechos - 1][6]){
          //sumar pregunta acertada
          sumarPuntoListening();
          //cambiar estrella
          cambiarEstrellaListeningOk();
          
        }else{
          // cambiar estrella a gris de fallo
          cambiarEstrellaListeningWrong();
        }
      }
    });
    //*********************************************************
    
    // CARGAR IMG 3
    console.log(`Cargando imagen respuesta 3 del listening`);
    getListFoto3.src = preguntasListening[listeningsHechos][4];
    // AÑADIMOS LISTENER AL BOTÓN
    getListFoto3.addEventListener(`click`, function(){
      if(clickCounter == 0){
        clickCounter++;
        console.log(`Opción 3 elegida en el listening`);
        // chequeamos si se ha acertado la pregunta
        if(preguntasListening[listeningsHechos - 1][7]){
          //sumar pregunta acertada
          sumarPuntoListening();
          //cambiar estrella
          cambiarEstrellaListeningOk();
          
        }else{
          // cambiar estrella a gris de fallo
          cambiarEstrellaListeningWrong();
        }
      }
    });
    //********************************************************
  
  // ESTA ELSE IF GESTIONA LISTENINGS DE B2 CON LAS 3 POSIBLES RESPUESTAS EN TEXTO
  }else if(listeningsHechos < 15){
    // AUMENTAMOS EL COUNTER DE PREGUNTAS DE LISTENINGS HECHOS DE B2. ES NECESARIO PARA CALCULAR LAS STATS EN LAS PANTALLAS DE INFO.
    counterListeningsB2++;

    console.log(`Cargando texto respuesta B2 del listening`);

    // CARGAR RESPUESTA 1 Y AÑADIR EVENT-LISTENER
    getTextoRespuesta01.innerText = preguntasListening[listeningsHechos][2];
    getTextoRespuesta01.addEventListener(`click`, function(){
      if(clickCounter == 0){
        clickCounter++;
        console.log(`Respuesta 1 elegida en el listening`);
        // Chequeamos si se ha acertado la respuesta
        if(preguntasListening[listeningsHechos - 1][5]){
          //sumar pregunta acertada
          sumarPuntoListening();
          //cambiar estrella
          cambiarEstrellaListeningOk();
        }else{
          // cambiar estrella a gris de fallo
          cambiarEstrellaListeningWrong();
        }
        
      }
    });

    // CARGAR RESPUESTA 2 Y AÑADIR EVENT-LISTENER
    getTextoRespuesta02.innerText = preguntasListening[listeningsHechos][3];
    getTextoRespuesta02.addEventListener(`click`, function(){
    if(clickCounter == 0){
      clickCounter++;
      console.log(`Respuesta 1 elegida en el listening`);
      // Chequeamos si se ha acertado la respuesta
      if(preguntasListening[listeningsHechos - 1][6]){
        //sumar pregunta acertada
        sumarPuntoListening();
        //cambiar estrella
        cambiarEstrellaListeningOk();
      }else{
        // cambiar estrella a gris de fallo
        cambiarEstrellaListeningWrong();
      }
    }
    });

    // CARGAR RESPUESTA 3 Y AÑADIR EVENT-LISTENER
    getTextoRespuesta03.innerText = preguntasListening[listeningsHechos][4];
    getTextoRespuesta03.addEventListener(`click`, function(){
      if(clickCounter == 0){
        clickCounter++;
        console.log(`Respuesta 1 elegida en el listening`);
        // Chequeamos si se ha acertado la respuesta
        if(preguntasListening[listeningsHechos - 1][7]){
          //sumar pregunta acertada
          sumarPuntoListening();
          //cambiar estrella
          cambiarEstrellaListeningOk();
        }else{
          // cambiar estrella a gris de fallo
          cambiarEstrellaListeningWrong();
        }
      }
    });

    // ********************************************************************
  }
}

function cambiarEstrellaListeningOk(){
  
  let currentListeningStar;

  if(listeningsHechos > 10){
    currentListeningStar = listeningsHechos - 10;
    console.log('Cambiando estrella en el apartado de B2');
    

  }else if(listeningsHechos > 5){
    currentListeningStar = listeningsHechos - 5;

  }else{
    currentListeningStar = listeningsHechos;
    console.log(`intentando cambiar la primera estrella`);
    console.log(`valor de currentListeningStar = ${currentListeningStar}`);
  }

  console.log(`Vamos a por el switch de cambio de estrella`);
  
  switch(currentListeningStar){
    case 1:
      document.getElementById(`star-0`).src = "imgs/estrella.png";
        console.log('La estrella 1 debería de haberse cambiado');
        
        
        break;
    case 2:
      document.getElementById(`star-1`).src = "imgs/estrella.png";
        console.log('La estrella 2 debería de haberse cambiado');
        break;
    case 3:
        document.getElementById(`star-2`).src = "imgs/estrella.png";
        console.log('La estrella 3 debería de haberse cambiado');
        break;
    case 4:
      document.getElementById(`star-3`).src = "imgs/estrella.png";
        break;
    case 5:
      document.getElementById(`star-4`).src = "imgs/estrella.png";
        break;
    default:
        console.log(`nos hemos ido al default en el switch`);
        break;
  }
  // AUMENTAR LAS PREGUNTAS DE LISTENING CORRECTAS EN 1
  
  setTimeout(()=>{
    newQuestion();
  }, 1000);
}

function cambiarEstrellaListeningWrong(){
  
  let currentListeningStar;

  if(listeningsHechos > 10){
    currentListeningStar = listeningsHechos - 10;

  }else if(listeningsHechos > 5){
    currentListeningStar = listeningsHechos - 5;

  }else{
    currentListeningStar = listeningsHechos;
  }


  switch(currentListeningStar){
    case 1:
      document.getElementById(`star-0`).src = "imgs/estrella-wrong.png";
        break;
    case 2:
      document.getElementById(`star-1`).src = "imgs/estrella-wrong.png";
        break;
    case 3:
      document.getElementById(`star-2`).src = "imgs/estrella-wrong.png";
        break;
    case 4:
      document.getElementById(`star-3`).src = "imgs/estrella-wrong.png";
        break;
    case 5:
      document.getElementById(`star-4`).src = "imgs/estrella-wrong.png";
        break;
    default:
        break;
  }

  setTimeout(()=>{
    newQuestion();
  }, 1000);
}