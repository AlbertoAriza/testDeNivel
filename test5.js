`use strict`;

// VARIABLES
let preguntaA1 = 10;
let preguntaA2 = 0;
let preguntaB1 = 0;
let preguntaB2 = 0;
let preguntaC1 = 0;
let preguntaC2 = 0;

let rightQuestionsA1 = 9;
let rightQuestionsA2 = 0;
let rightQuestionsB1 = 0;
let rightQuestionsB2 = 0;
let rightQuestionsC1 = 0;
let rightQuestionsC2 = 0;

let counterListeningsA2 = 5;
let counterListeningsB1 = 0;
let counterListeningsB2 = 0;

let rightListeningsA2 = 4;
let rightListeningsB1 = 0;
let rightListeningsB2 = 0;

function checkProgressStatsSingleA1(){
    let progress1 = 100 * rightQuestionsA1 / preguntaA1;
    
    const getProgressbar1 = document.querySelector(`.progressbar1`);
    getProgressbar1.setAttribute("role", "progressbar1");
    getProgressbar1.setAttribute("aria-valuenow", 0);
    getProgressbar1.setAttribute("aria-live", "polite")
    
    getProgressbar1.setAttribute("aria-valuenow", progress1);
    getProgressbar1.style.setProperty(`--progress1`, progress1 + "%");
}

function checkProgressStatsTwinA2(){
    let progress1 = 100 * rightQuestionsA1 / preguntaA1;
    
    const getProgressbar1 = document.querySelector(`.progressbar1`);
    getProgressbar1.setAttribute("role", "progressbar1");
    getProgressbar1.setAttribute("aria-valuenow", 0);
    getProgressbar1.setAttribute("aria-live", "polite")
    
    getProgressbar1.setAttribute("aria-valuenow", progress1);
    getProgressbar1.style.setProperty(`--progress1`, progress1 + "%");


    let progress2 = 100 * rightListeningsA2 / counterListeningsA2;
    
    const getProgressbar2 = document.querySelector(`.progressbar2`);
    getProgressbar2.setAttribute("role", "progressbar2");
    getProgressbar2.setAttribute("aria-valuenow2", 0);
    getProgressbar2.setAttribute("aria-live", "polite")
    
    getProgressbar2.setAttribute("aria-valuenow2", progress2);
    getProgressbar2.style.setProperty(`--progress2`, progress2 + "%");
}


checkProgressStatsTwinA2();