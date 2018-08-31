
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




  // const acc = document.getElementsByClassName("accordion");
  // //loop thru buttons
  // for (let i = 0; i < acc.length; i++) {
  //   //trigger event after click
  //   acc[i].addEventListener("click", function() {
  //       this.classList.toggle("active");
  //       let panel = this.nextElementSibling;
  //
  //     //if sib open, close it, if closed, open it
  //     if (panel.style.maxHeight){
  //         panel.style.maxHeight = null;
  //       //panel open
  //     } else {
  //       //panel closed
  //       panel.style.maxHeight = panel.scrollHeight + "px+";
  //     }
  //   });
  // }
