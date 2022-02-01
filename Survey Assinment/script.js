// const for each buttons answer
const coughYes = document.querySelector(".coughYes");
const coughNo = document.querySelector(".coughNo");
const soreThroatYes = document.querySelector(".soreThroatYes");
const soreThroatNo = document.querySelector(".soreThroatNo");
const runnyNoseYes = document.querySelector(".runnyNoseYes");
const runnyNoseNo = document.querySelector(".runnyNoseNo");
const feverYes = document.querySelector(".feverYes");
const feverNo = document.querySelector(".feverNo");
const vomitingYes = document.querySelector(".vomitingYes");
const vomitingNo = document.querySelector(".vomitingNo");
const diarreheaYes = document.querySelector(".diarreheaYes");
const diarreheaNo = document.querySelector(".diarreheaNo");

// const for each question
const cough = document.querySelector(".cough");
const soreThroat = document.querySelector(".soreThroat");
const runnyNose = document.querySelector(".runnyNose");
const fever = document.querySelector(".fever");
const vomiting = document.querySelector(".vomiting");
const diarrehea = document.querySelector(".diarrehea");

// const for the survey / end / text question
const questions = document.querySelector(".questions");
const end = document.querySelector(".end");
const text = document.querySelector("#text");

// array to return answers
const userAnswersList = {
  cough: false,
  soreThroat: false,
  runnyNose: false,
  fever: false,
  vomiting: false,
  diarrehea: false,
};

const i = [];
i.push(userAnswersList);
// First Question
coughYes.addEventListener("click", function () {
  userAnswersList.cough = true;
  cough.style.display = "none";
  soreThroat.style.display = "block";
});

coughNo.addEventListener("click", function () {
  cough.style.display = "none";
  soreThroat.style.display = "block";
});

// Second Question
soreThroatYes.addEventListener("click", function () {
  userAnswersList.soreThroat = true;
  soreThroat.style.display = "none";
  runnyNose.style.display = "block";
});

soreThroatNo.addEventListener("click", function () {
  soreThroat.style.display = "none";
  runnyNose.style.display = "block";
});

// Third Question
runnyNoseYes.addEventListener("click", function () {
  userAnswersList.runnyNose = true;
  runnyNose.style.display = "none";
  fever.style.display = "block";
});

runnyNoseNo.addEventListener("click", function () {
  runnyNose.style.display = "none";
  fever.style.display = "block";
});

// Fourth Question
feverYes.addEventListener("click", function () {
  userAnswersList.fever = true;
  fever.style.display = "none";
  vomiting.style.display = "block";
});

feverNo.addEventListener("click", function () {
  fever.style.display = "none";
  vomiting.style.display = "block";
});

// Fifth Question
vomitingYes.addEventListener("click", function () {
  userAnswersList.vomiting = true;
  vomiting.style.display = "none";
  diarrehea.style.display = "block";
});

vomitingNo.addEventListener("click", function () {
  vomiting.style.display = "none";
  diarrehea.style.display = "block";
});

// Sixth Question
diarreheaYes.addEventListener("click", function () {
  userAnswersList.diarrehea = true;
  diarrehea.style.display = "none";
  text.style.display = "none";
  end.style.display = "block";
});

diarreheaNo.addEventListener("click", function () {
  diarrehea.style.display = "none";
  text.style.display = "none";
  end.style.display = "block";
  userAnswersList.style.display = "block";
});

// const for answer button
const answers = document.querySelector(".answers");

// function to return the answers
answers.addEventListener("click", function () {

});
