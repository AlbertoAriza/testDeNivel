
class FooterStarsView{

  _parentElement = document.querySelector('footer');
  _state;
  _starsAmount = 0;

  render(state){
    this._state = state;
    this._parentElement.innerHTML = '';
    if(state.counters.mainCounter === 20 || state.counters.mainCounter === 35 || state.counters.mainCounter === 50){
      this._starsAmount = 5;
    }else if(state.counters.mainCounter === 66){
      this._starsAmount = 4;
    }else{
      this._starsAmount = 10;
    }

    for(let i = 0; i< this._starsAmount; i++){
      let html = `<div class="imgEstrella"><img class="imgEstrellaIn" id="star-${i}" src="imgs/estrella-bn.png" alt=""></div>`
      this._parentElement.insertAdjacentHTML('beforeend', html);
    }
  }

  addHandler(handlerFunction){
      document.querySelector('#btn_inicio').addEventListener('click', handlerFunction);
  }
}

export default new FooterStarsView();