import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log(count, action);

  if (action.type === "ADD") {
    return count + 1;
  } else if ((action.type = "MINUS")) {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

// message 를 send 하는 방법 = dispatch 사용
// message 는 action에 넣으면 되고, action을 체크하면 된다.
// countStore.dispatch({ type: "ADD" });
// countStore.dispatch({ type: "MINUS" });

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
