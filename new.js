const cake = document.querySelector(".cake");
const messageBox = document.querySelector(".message-box");
const stealPopUp = document.querySelector(".steal-box");
const giveBack = document.querySelector(".give-box");
const nope = document.querySelector(".nope");
const yep = document.querySelector(".yep");
const meow = document.querySelector(".meow");
const zainab = document.querySelector(".girl");
const gYep = document.querySelector(".g-yep");
const gNope = document.querySelector(".g-nope");
const happi = document.querySelector(".happi");

let counter = 0;
let herCounter = 0;

cake.addEventListener("click", () => {
  if(counter < 6){
    messageBox.classList.toggle("active");
    counter++;
  } else {
    stealPopUp.classList.add("active");
  }
})
nope.addEventListener("click", () => {
  stealPopUp.classList.remove("active");
  counter = 0;
})
yep.addEventListener("click", () => {
  stealPopUp.classList.remove("active");
  cake.classList.add("stolen");
  meow.play();
  happi.pause();
})
zainab.addEventListener("click", () => {
  if(cake.classList.contains("stolen")){
    if(herCounter < 2){
      herCounter++;
    } else {
      giveBack.classList.add("active");
    }
  }
})
gNope.addEventListener("click", () => {
  meow.play();
  happi.pause();
  giveBack.classList.remove("active");
  herCounter = 0;
})
gYep.addEventListener("click", () => {
  giveBack.classList.remove("active");
  cake.classList.remove("stolen");
  herCounter = 0;
  counter = 0;
  happi.play();
  meow.pause();
})
