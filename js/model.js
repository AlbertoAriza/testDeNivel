export const state = {
    // CONTROL NÚMERO DE PREGUNTAS CORRECTAS POR NIVELES
    rightQuestionsA1: 0,
    rightQuestionsA2: 0,
    rightQuestionsB1: 0,
    rightQuestionsB2: 0,
    rightQuestionsC1: 0,
    rightQuestionsC2: 0,

    counterListeningsA2: 0,
    counterListeningsB1: 0,
    counterListeningsB2: 0,
    counterListeningsC1: 0,
    counterListeningsC2: 0,

    rightListeningsA2: 0,
    rightListeningsB1: 0,
    rightListeningsB2: 0,
    rightListeningsC1: 0,
    rightListeningsC2: 0,

    clickCounter: 0,

    // CONTROL PARA EL NÚMERO DE PREGUNTAS HECHAS
    preguntasHechas: 0,
    listeningsHechos: 0,
    preguntaA1: 0,
    preguntaA2: 0,
    preguntaB1: 0,
    preguntaB2: 0,
    preguntaC1: 0,
    preguntaC2: 0,
    questionsA2: 0,
    questionsB1: 0,
    questionsB2: 0,
    questionsC1: 0,
    questionsC2: 0,
}

let getEstrella; // variable para controlar la estrella que hay que transformar en cada pregunta de cada ronda.

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