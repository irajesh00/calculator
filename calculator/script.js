let currentVal ="";
let element = document.querySelector(".result-space-paragraph");
element.innerText=currentVal;
document.querySelector(".btn-1").onclick=()=>{
  currentVal=currentVal+1;
  document.querySelector(".result-space-paragraph").innerText=currentVal;
}
document.querySelector(".btn-2").onclick = () => {
  currentVal = currentVal + 2;
  document.querySelector(".result-space-paragraph").innerText = currentVal;
};
document.querySelector(".btn-3").onclick = () => {
  currentVal = currentVal + 3;
  document.querySelector(".result-space-paragraph").innerText = currentVal;
};
document.querySelector(".btn-4").onclick = () => {
  currentVal = currentVal + 4;
  document.querySelector(".result-space-paragraph").innerText = currentVal;
};
document.querySelector(".btn-5").onclick = () => {
  currentVal = currentVal + 5;
  document.querySelector(".result-space-paragraph").innerText = currentVal;
};
document.querySelector(".btn-6").onclick = () => {
  currentVal = currentVal + 6;
  document.querySelector(".result-space-paragraph").innerText = currentVal;
};
document.querySelector(".btn-7").onclick = () => {
  currentVal = currentVal + 7;
  document.querySelector(".result-space-paragraph").innerText = currentVal;
};
document.querySelector(".btn-8").onclick = () => {
  currentVal = currentVal + 8;
  document.querySelector(".result-space-paragraph").innerText = currentVal;
};
document.querySelector(".btn-9").onclick = () => {
  currentVal = currentVal + 9;
  document.querySelector(".result-space-paragraph").innerText = currentVal;
};
document.querySelector(".btn-0").onclick = () => {
  currentVal = currentVal + 0;
  document.querySelector(".result-space-paragraph").innerText = currentVal;
};
document.querySelector(".btn-c").onclick = () => {
  currentVal = '';
  document.querySelector(".result-space-paragraph").innerText = currentVal;
};
document.querySelector(".btn-add").onclick = () => {
  currentVal = currentVal + '+';
  document.querySelector(".result-space-paragraph").innerText = currentVal;
};


document.querySelector(".btn-subtract").onclick = () => {
  currentVal = currentVal + "-";
  document.querySelector(".result-space-paragraph").innerText = currentVal;
};
document.querySelector(".btn-multiply").onclick = () => {
  currentVal = currentVal + "*";
  document.querySelector(".result-space-paragraph").innerText = currentVal;
};
document.querySelector(".btn-divide").onclick = () => {
  currentVal = currentVal + "/";
  document.querySelector(".result-space-paragraph").innerText = currentVal;
};
document.querySelector(".btn-equals").onclick = () => {
  currentVal = eval(currentVal);
  document.querySelector(".result-space-paragraph").innerText = currentVal;
};
document.querySelector(".btn-decimal").onclick = () => {
  currentVal = currentVal + ".";
  document.querySelector(".result-space-paragraph").innerText = currentVal;
};


















