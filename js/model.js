export const state = {
    counters: {

        // CONTADORES GENERALES.
        mainCounter: 56, // counter general de preguntas tanto de gramática como de listenings
        preguntasHechas: 0, // counter general de preguntas de gramática hechas
        listeningsHechos: 0, // counter general de listenings hechos
        
        questionsLevel: 4, // controla el nivel en el que nos encontramos actualmente
        questionInLevelNumber: 0, // controla el número de pregunta de gramática en el que estamos dentro de cada nivel.
        listeningsLevel: 4, // controla el nivel de listening en el que nos encontrábamos.
        listeningInLevelNumber: 0, // controla el número de listening en el que estamos dentro de cada nivel
        
        showStats: true,
        stepCounter: 0, // counter para ver el bloque de preguntas en el que nos encontramos (cada grammar y cada listening sumarán uno independientemente del tipo que sean.)
        playerAlive: true,

        // CONTROL NÚMERO DE PREGUNTAS CORRECTAS POR NIVELES
        rightQuestions: [/*A1→*/0 , /*A2→*/0, /*B1→*/0, /*B2→*/0, /*C1→*/0, /*C2→*/0],
        counterQuestions: [/*A1→*/0 , /*A2→*/0, /*B1→*/0, /*B2→*/0, /*C1→*/0, /*C2→*/0],

        rightListenings: [/*A1→*/0 , /*A2→*/0, /*B1→*/0, /*B2→*/0, /*C1→*/0, /*C2→*/0],
        counterListenings: [/*A1→*/0 , /*A2→*/0, /*B1→*/0, /*B2→*/0, /*C1→*/0, /*C2→*/0],

        levelsPass: [true, false, false, false, false, false]

    }
}

let getEstrella; // variable para controlar la estrella que hay que transformar en cada pregunta de cada ronda.

/*
  _    ___ ___ _____ _   ___   ___  ___   ___ ___ ___ ___ _   _ _  _ _____ _   ___ 
 | |  |_ _/ __|_   _/_\ / __| |   \| __| | _ \ _ \ __/ __| | | | \| |_   _/_\ / __|
 | |__ | |\__ \ | |/ _ \\__ \ | |) | _|  |  _/   / _| (_ | |_| | .` | | |/ _ \\__ \
 |____|___|___/ |_/_/ \_\___/ |___/|___| |_| |_|_\___\___|\___/|_|\_| |_/_/ \_\___/
                                                                                   
*/


export const questions = [

    //PREGUNTAS NIVEL A1
    [
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
    ],
    
    //PREGUNTAS NIVEL A2
    [
        [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">1/10.-  Every morning, I ___ up at 7 o'clock.</span>`, `wake`, `wakes`, `am waking`, `waking`, true, false, false, false],
        [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">2/10.-  They ___ playing football when it started to rain.</span>`, `be`, `to be`, `are`, `were`, false, false, false, true],
        [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">3/10.-  Can you help me? I can't ___ my glasses.</span>`, `find`, `to find`, `finds`, `finding`, true, false, false, false],
        [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">4/10.-  There is ___ water in the glass.</span>`, `a`, `any`, `many`, `some`, false, false, false, true],
        [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">5/10.-  We ___ go to the beach tomorrow if the weather is nice.</span>`, `had`, `to have`, `will`, `would`, false, false, true, false],
        [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">6/10.-  ___ you speak Spanish?</span>`, `Are`, `Is`, `Does`, `Do`, false, false, false, true],
        [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">7/10.-  I ___ to the radio while I was driving.</span>`, `be listen`, `am listening`, `was listening`, `listen`, false, false, true, false],
        [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">8/10.-  There are ___ apples in the basket than oranges.</span>`, `fewer`, `less`, `little`, `least`, true, false, false, false],
        [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">9/10.-  I really enjoy ___ at the beach during summer.</span>`, `swimming`, `to swim`, `swim`, `be swim`, true, false, false, false],
        [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">10/10.-  ___ you work yesterday?</span>`, `Be`, `Are`, `Did`, `Do`, false, false, true, false]
    ],
    
    //PREGUNTAS NIVEL B1
    [
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
    ],
    
    //PREGUNTAS NIVEL B2
    [
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
    ],
    
    //PREGUNTAS NIVEL C1
    [
        [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">1/10.-  The old house was ___________ furnished and we had to buy almost everything new</span>`, `thinly`, `sparsely`, `mildly`, `rarely`, false, true, false, false],
        [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">2/10.-  You shouldn't have bought so many ___________ presents on this holiday. You won't have any money left when you go back home.</span>`, `rich`, `worthy`, `invaluable`, `lavish`, false, false, false, true],
        [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">3/10.-  The politician's speech was so compelling that it ___ the audience to action.</span>`, `aroused`, `raised`, `rose`, `roused`, false, false, false, true],
        [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">4/10.-  Sometimes we don't appreciate the ___________ pleasures of life such as a beautiful sky, a cup of coffee with a friend, or seeing a good film at the cinema.</span>`, `sheer`, `normal`, `simple`, `plain `, false, false, true, false],
        [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">5/10.-  During the riots, hundreds of people broke into the city's main department store and ___________ it. There was almost nothing left after the night had finished.</span>`, `looted`, `stole`, `mugged`, `conned `, true, false, false, false],
        [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">6/10.-  That old house hasn't been lived in for nearly thirty years hence the fact that it looks so ___________.</span>`, `decrepit`, `derelict`, `trashed`, `rotten`, false, true, false, false],
        [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">7/10.-  They were oblivious _______ the danger that laid ahead.</span>`, `of`, `to`, `in`, `about`, false, true, false, false],
        [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">8/10.-  Were he _______ the truth, he would surely react differently.</span>`, `to know`, `knowing`, `knew`, `knows`, true, false, false, false],
        [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">9/10.-  ___________ me another beer, Des. Then I really must be going. It is quite late!</span>`, `Spill`, `Pour`, `Trickle`, `Fill`, false, true, false, false],
        [`<span class = "bold">Elige la mejor opción para completar esta oración.</span> <br /><br /> <span class="cursiva">10/10.-  After years of conflict, the two countries are finally ready to _______ their differences.</span>`, `patch up`, `put down`, `pick out`, `play off`, true, false, false, false]
    ],
    
    //PREGUNTAS NIVEL C2
    [
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
    ],
]

/* **********************************************
  _    ___ ___ _____ ___ _  _ ___ _  _  ___ ___ 
 | |  |_ _/ __|_   _| __| \| |_ _| \| |/ __/ __|
 | |__ | |\__ \ | | | _|| .` || || .` | (_ \__ \
 |____|___|___/ |_| |___|_|\_|___|_|\_|\___|___/
                                                
**************************************************/

export const listenings = [ // → (EQUIVALEN A: listenings[model.counters.listeningsLevel][model.counters.listeningInLevelNumber])

    // LISTENINGS A1 (0)
    [],

    // LISTENINGS A2 (1)
    [
        [`What was the weather like when the holiday began?`, `sfx/a2_l1.mp3`, `imgs/testDeNivel/a2_l1_answ1.png`, `imgs/testDeNivel/a2_l1_answ2.png`, `imgs/testDeNivel/a2_l1_answ3.png`, true, false, false],
        [`What did Peter buy today?`,                         `sfx/a2_l2.mp3`, `imgs/testDeNivel/a2_l2_answ1.png`, `imgs/testDeNivel/a2_l2_answ2.png`, `imgs/testDeNivel/a2_l2_answ3.png`, false, false, true],
        [`Where is the girl going this afternoon?`,           `sfx/a2_l3.mp3`, `imgs/testDeNivel/a2_l3_answ1.png`, `imgs/testDeNivel/a2_l3_answ2.png`, `imgs/testDeNivel/a2_l3_answ3.png`, false, true, false],
        [`How will they get to their tennis class?`,          `sfx/a2_l4.mp3`, `imgs/testDeNivel/a2_l4_answ1.png`, `imgs/testDeNivel/a2_l4_answ2.png`, `imgs/testDeNivel/a2_l4_answ3.png`, false, false, true],
        [`Which woman is Laura's new teacher?`,               `sfx/a2_l5.mp3`, `imgs/testDeNivel/a2_l5_answ1.png`, `imgs/testDeNivel/a2_l5_answ2.png`, `imgs/testDeNivel/a2_l5_answ3.png`, false, false, true],
    ],

    // LISTENINGS B1 (2)
    [

        [`Where will the women meet tomorrow?`,                 `sfx/b1_l1.mp3`, `imgs/testDeNivel/b1_l1_answ1.png`, `imgs/testDeNivel/b1_l1_answ2.png`, `imgs/testDeNivel/b1_l1_answ3.png`, false, true, false],
        [`When will the man go to see the dentist?`,            `sfx/b1_l2.mp3`, `imgs/testDeNivel/b1_l2_answ1.png`, `imgs/testDeNivel/b1_l2_answ2.png`, `imgs/testDeNivel/b1_l2_answ3.png`, false, true, false],
        [`Where are they at the moment?`,                       `sfx/b1_l3.mp3`, `imgs/testDeNivel/b1_l3_answ1.png`, `imgs/testDeNivel/b1_l3_answ2.png`, `imgs/testDeNivel/b1_l3_answ3.png`, false, false, true],
        [`Where did the man stay on holiday?`,                  `sfx/b1_l4.mp3`, `imgs/testDeNivel/b1_l4_answ1.png`, `imgs/testDeNivel/b1_l4_answ2.png`, `imgs/testDeNivel/b1_l4_answ3.png`, false, true, false],
        [`Which goods are reduced in price in the store now?`,  `sfx/b1_l5.mp3`, `imgs/testDeNivel/b1_l5_answ1.png`, `imgs/testDeNivel/b1_l5_answ2.png`, `imgs/testDeNivel/b1_l5_answ3.png`, true, false, false],
    ],

    // LISTENINGS B2 (3)
    [   
        [`You hear a woman talking on the radio about an actor.<br>What does the woman say about him?`,                 `sfx/b2_l1.mp3`, `His acting has improved over the years.`,             `The media often criticise him unfairly.`,          `He gets fewer film roles than he deserves`,            true, false, false],
        [`You hear a hairstylist talking about her career.<br>She prefers working in the TV industry because she...`,   `sfx/b2_l2.mp3`, `feels that her contribution is valued.`,              `is able to express her opinions freely.`,          `thrives on the creative challenge the work presents.`, true, false, false],
        [`You hear a woman talking about playing the piano.<br>What does she say about learning to play the piano?`,    `sfx/b2_l3.mp3`, `It's important to find the right teacher.`,           `Everyone can play well if they try.`,              `It requires more discipline than other instruments.`,  true, false, false],
        [`You hear part of an interview with a crime writer.<brWhat does he say about his home town?`,                  `sfx/b2_l4.mp3`, `He generally feels uncomfortable returning there.`,   `People there tend to treat him differently now.`,  `It was a good background for the writing he does.`,    false, false, true],
        [`You hear a chef talking about making a TV series.<br>What does he say about it?`,                             `sfx/b2_l5.mp3`, `He didn't get on with his co-presenter.`,             `He didn't expect to enjoy the experience.`,        `He didn't like the working hours.`,                    false, true, false],
    ],
    
    // LISTENINGS C1 (4)
    [

        // PREGUNTA DE C1 NÚMERO 1 (4-0)
        [   
            // (4-0-0)
            [
                `Listen to this extract and answer the two questions.<br>You hear two friends discussing an exhibition they have just visited, featuring a female sculptor called Sue Lin.`,
                `sfx/c1_l1.mp3`, 
                `1.- What does the woman think about the way the exhibition was set out?`, 
                `It enabled people to appreciate how innovative Sue's work was.`, 
                `It reflected Sue's original intentions for her sculptures.`, 
                `It placed too much emphasis on Sue's contemporaries.`, 
                false, false, true, 
            ],
            //(4-0-1)
            [
                `2.- The man says the decisions made about what to include in the exhibition have...`, 
                `helped to increase visitor numbers.`, 
                `diminished his opinion of Sue's sculptures.`, 
                `disappointed admirers of Sue\'s talent.`, 
                false, true, false
            ]    
        ],
            
        // PREGUNTA DE C1 NÚMERO 2
        [
            [
                `Listen to this extract and answer the two questions.<br>You hear two students talking about fast food.`,
                `sfx/c1_l2.mp3`, 
                `1.- The man says his housemates choose to eat fast food because...`, 
                `they've been influenced by marketing campaings.`, 
                `the generous size of servings represents good value.`, 
                `their lack of cooking skills makes it an attractive option.`, 
                false, false, true, 
            ],
            [  
                `2.- What is the woman's attitude to fast food?`, 
                `She criticises its unappetising flavours.`, 
                `She welcomes the new options available.`, 
                `She doubts whether improved labelling will affect its popularity.`, 
                false, true, false
            ],
        ],
    ],
]