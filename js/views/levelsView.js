
class levelsView{

    _parentElement = document.querySelector('header');
    _state;

    render(state){
        this._state
        this._parentElement.innerHTML = '';

        for(let i = 0; i < state.counters.levelsPass.length; i++){
            let setType;
            if(state.counters.questionsLevel === i){
                setType = 2;
            }else if(state.counters.levelsPass[i]){
                setType = 3;
            }else{
                setType = 1;
            }
            let html = `<div class="imgLevel"><img class="levelImg" src="imgs/level_${i}_${setType}.png" alt=""></div>`;
            this._parentElement.insertAdjacentHTML('beforeend', html);

        }
    }

    addHandler(handlerFunction){
        document.querySelector('#btn_inicio').addEventListener('click', handlerFunction);
    }
}

export default new levelsView();