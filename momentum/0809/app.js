const numForm = document.querySelector("#numInput");
const comNumInput = document.querySelector("#comNum");
const userNumInput = document.querySelector("#userNum");
const greeting = document.querySelector("#greeting");
const won = document.querySelector("#won");

const HIDDEN_CLASSNAME = "hidden";
const USERNUM = "userNum";
const MACHINENUM = "machineNum";

function onNumberSubmit(event) {
  event.preventDefault();
  const usernum = parseInt(userNumInput.value);
  const comnum = parseInt(comNumInput.value);
  const machineNum = Math.floor(Math.random() * comnum);
  localStorage.setItem(USERNUM, usernum);
  localStorage.setItem(MACHINENUM, machineNum);
  greeting.innerText = `You choose : ${usernum} the, machine choose: ${machineNum}.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  const saveUserNum = localStorage.getItem(USERNUM);
  const saveMachineNum = localStorage.getItem(MACHINENUM);
  if (saveUserNum === saveMachineNum) {
    won.innerText = "You won!!";
  } else {
    won.innerText = "You lost";
  }
}
numForm.addEventListener("submit", onNumberSubmit);
