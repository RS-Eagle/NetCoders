"use-strict";

var width = document.querySelectorAll(".image-outline-short h2");
var typewriting_class = document.querySelector(".typewriter");
const lines = [
  "Develop A Website...",
  "Learn Style...",
  "Develop algorithms...",
  "Develop Logic...",
  "Implement Logic...",
  "Enhance Yourself...",
  "At NetCoder...",
  "Enroll NoW...",
];

let i = -1;
let index = 1;
let line;
let again = true;
let writing_speed = 50;
let last_word_pause = 4000;
let word_wait = 1000;
let initial_start = 2000;

width.forEach((element) => {
  let a = element.offsetWidth;
  // let b = element.offsetHeight;
  a = a + 35;
  // let d = b + 15;
  element.style.width = `${a}px`;
  element.style.height = "40px";
});

function line_decider() {
  i++;

  // console.log("hii");

  line = lines[i];
  writing(line);
}

const dec = (line) => {
  let updatedline = line.slice(0, index);
  typewriting_class.innerHTML = updatedline;
  setTimeout(() => {
    if (i + 1 == lines.length && index == line.length && again) {
      setTimeout(() => {
        // console.log("hii");
        // index = 1;
        again = false;

        dec(line);
      }, last_word_pause);
    } else if (i + 1 == lines.length && index == 1 && !again) {
      i = -1;
      index = 1;
      // console.log("Helloo HIII");
      line_decider();
    } else if (index == 1) {
      index = 1;

      line_decider();
    } else {
      // console.log("hii");
      index--;
      dec(line);
    }
  }, writing_speed);
};

function writing(line) {
  // console.log(index);
  let updatedline = line.slice(0, index);
  typewriting_class.innerHTML = updatedline;
  setTimeout(() => {
    if (index > line.length) {
      setTimeout(() => {
        // index = 1;
        dec(line);
      }, word_wait);
    } else {
      index++;
      writing(line);
    }
  }, writing_speed);
}

let start_text = typewriting_class.innerHTML;
console.log(start_text);
let initial_start_index = 15;

const dec_start = (line) => {
  let updatedline1 = line.slice(0, initial_start_index);
  typewriting_class.innerHTML = updatedline1;
  if (initial_start_index == 1) {
    line_decider();
  } else {
    setTimeout(() => {
      initial_start_index--;
      dec_start(start_text);
    }, writing_speed);
  }
};

setTimeout(() => {
  dec_start(start_text);
}, initial_start);
