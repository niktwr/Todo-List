let inputData = document.getElementById("inputField");
let clkBtn = document.getElementById("clk");
let toDoCont = document.querySelector(".toDoCont");





let json = localStorage.getItem("storeData");
let array = JSON.parse(json);

let storeData = [] || array;


let showList = (text) => {
  let listDiv = document.createElement("div");
  listDiv.classList.add("listDiv");

  let ele = document.createElement("li");
  ele.innerText = `${text}`;
  listDiv.append(ele);

  let dltBtn = document.createElement("button");
  dltBtn.innerText = "Delete";
  listDiv.append(dltBtn);

  dltBtn.classList.add("deleteBtn");

  toDoCont.append(listDiv);
};

if (storeData != []) {
  // important
  for (let item of array) {
    storeData.push(item); // important

    showList(item);
  }
}



clkBtn.addEventListener("click", () => {
  let originalVal = inputData.value.trim();
  localStorage.setItem("storeData", JSON.stringify(storeData));
  if (originalVal != "" && !storeData.includes(originalVal)) {
    storeData.push(originalVal);
    localStorage.setItem("storeData", JSON.stringify(storeData)); // important

    showList(originalVal);

  }
  inputData.value = "";                  // important
});

// deleting to do content

toDoCont.addEventListener("click", (event) => {
  let val = event.target;
  let dltEle = val.innerText;

  if (dltEle == "Delete") {
    let eventValue = val.previousSibling.innerText;

    storeData = storeData.filter((curElem) => {
      return curElem != eventValue;
    });

    localStorage.setItem("storeData", JSON.stringify(storeData));

    val.parentElement.remove();
  }
});