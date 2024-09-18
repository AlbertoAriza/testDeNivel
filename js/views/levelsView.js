let datos = `<div class="imgLevel"><img id="imgLevel_A1" src="imgs/cefr-A1.png" alt=""></div>
            <div class="imgLevel"><img id="imgLevel_A2" src="imgs/cefr-A2-bn.png" alt=""></div>
            <div class="imgLevel"><img id="imgLevel_B1" src="imgs/cefr-B1-bn.png" alt=""></div>
            <div class="imgLevel"><img id="imgLevel_B2" src="imgs/cefr-B2-bn.png" alt=""></div>
            <div class="imgLevel"><img id="imgLevel_C1" src="imgs/cefr-C1-bn.png" alt=""></div>
            <div class="imgLevel"><img id="imgLevel_C2" src="imgs/cefr-C2-bn.png" alt=""></div>`;

getHeader.innerHTML = datos;


//HACEMOS GET DE LAS IMÁGENES DE LOS 6 NIVELES
let getLevelA1 = document.getElementById(`imgLevel_A1`);
let getLevelA2 = document.getElementById(`imgLevel_A2`);
let getLevelB1 = document.getElementById(`imgLevel_B1`);
let getLevelB2 = document.getElementById(`imgLevel_B2`);
let getLevelC1 = document.getElementById(`imgLevel_C1`);
let getLevelC2 = document.getElementById(`imgLevel_C2`);