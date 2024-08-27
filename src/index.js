const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;
// number.innerText = count는 최초 렌더링 시 한 번만 수행하기 때문에 업데이트 되지 않음.
number.innerText = count;

// state를 사용하지 않는 Vanilla JavaScript 이므로
// Text를 업데이트하는 함수를 따로 만들어야 한다.
const updateText = () => {
  number.innerText = count;
};

// 생성한 updateText 함수를 add, minus 함수에 각각 넣어준다.
const handleAdd = () => {
  count = count + 1;
  updateText();
};

const handleMinus = () => {
  count = count - 1;
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
