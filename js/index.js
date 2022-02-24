let  numMovies = document.querySelector('.num-movies'),
     nameMovies = document.querySelector('.name-movies'),
     ballMovies = document.querySelector('.ball-movies'),
     submit = document.querySelector('#submit');

let theResult = document.querySelector('.theResult'),
    moviesNumber = document.querySelector('#movies-number-item'),
    moviesName = document.querySelector('#moviles-name-item'),
    moviesBall = document.querySelector('#movies-ball-item'),
    btnOk = document.querySelector('#ok'),
    userStatus = document.querySelector('.user-status');
let error = document.querySelector('.error'),
      errOk = document.querySelector('#errok');

submit.addEventListener('click', (addScreen) => {
      if (numMovies.value != 0 && numMovies.value > 0) {
            theResult.classList.add('theResult-block');
      }else{
            error.classList.add('theResult-block');
      }
      moviesNumber.textContent = numMovies.value;
      moviesBall.textContent = ballMovies.value;
      moviesName.textContent = nameMovies.value;
      
      if ( numMovies.value > 30 ) {
            userStatus.textContent = "Siz kino ishqibozi ekansiz 😍"; 
      }else if (numMovies.value > 15 && numMovies.value <= 30 ) {
            userStatus.textContent = "Siz klassik kino ko'ruvchi ekansiz 😊"; 
      }else if ( numMovies.value > 0 && numMovies.value <= 15 ) {
            userStatus.textContent = "Kam kino ko'rgan ekansiz 😔"; 
      }
      
});
btnOk.addEventListener('click', removeStyle => {
      theResult.classList.remove('theResult-block');
      
});
errOk.addEventListener('click', err =>{
      error.classList.remove('theResult-block');
});
