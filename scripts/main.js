let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/R.jfif") {
    myImage.setAttribute("src", "images/R-C.jfif");
  } else {
    myImage.setAttribute("src", "images/R.jfif");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "欢迎来到我的主页, " + myName;
    }
  }
  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "欢迎来到我的主页，" + storedName;
  }

  myButton.onclick = function () {
    setUserName();
  };
  