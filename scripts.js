

//declare default vars
const popUp = document.getElementById('pop-up');
const popUpLayer = document.getElementById('pop-up-layer');
const closeModal = document.getElementById('close-pop-up');

//nav-bar button
const subBtn = document.getElementById('sub-btn');

//navbar button click makes the popup appear
subBtn.addEventListener("click", () => {
  popUpLayer.style.display = 'flex';
})

//close model click makes the popup disappear
closeModal.addEventListener("click", function() {
  popUpLayer.style.display = 'none';
})

let popUpSeconds = 40;

//trigger popup after seconds variable
let popUpFun = window.setInterval(function() {
  popUpLayer.style.display = 'flex';

  window.clearInterval(popUpFun);

}, popUpSeconds * 1000);





//dots
const nextNext = document.getElementById('next-next')
const next = document.getElementById('next');
const prev = document.getElementById('prev');

//individual testis
const testi1 = document.querySelector('.testi1');
const testi2 = document.querySelector('.testi2');
const testi3 = document.querySelector('.testi3')

//testi parent container
const tests = document.querySelector('.tests');

let nextNextInt = window.setInterval(function() {

  if (tests.classList.contains('second')) {
      tests.classList.remove('second');
      tests.classList.add('third');
  }

}, 4000)

let nextint = window.setInterval(function() {
  if (tests.classList.contains('first')) {
      tests.classList.remove('first');
      tests.classList.add('second');
  }

}, 8000)

let prevint = window.setInterval(function() {

  if (tests.classList.contains('third')) {
      tests.classList.remove('third');
      tests.classList.add('first');
  }
}, 16000)

//reusable func for clicking dots
function dotClick(oldClassOne, oldClassTwo, newClass) {
  if (tests.classList.contains(oldClassOne)) {
      tests.classList.remove(oldClassOne);
  }

  if (tests.classList.contains(oldClassTwo)) {
      tests.classList.remove(oldClassTwo)
  }

  window.clearInterval(nextNextInt);
  window.clearInterval(nextint);
  window.clearInterval(prevint);
  tests.classList.add(newClass);
}

nextNext.addEventListener("click", function() {
    dotClick('second', 'first', 'third');

})

next.addEventListener("click", function() {
    dotClick('first', 'third', 'second');

})

prev.addEventListener("click", function() {
    dotClick('second', 'third', 'first');

})


const acc = document.getElementsByClassName("accordion");
//loop thru
for (let i = 0; i < acc.length; i++) {
  //trigger event after click
  acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
    //if sibling is open, close it, if closed, open it
    if (panel.style.maxHeight){
      //panel is open
      panel.style.maxHeight = null;

    } else {
      //panel is closed
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
