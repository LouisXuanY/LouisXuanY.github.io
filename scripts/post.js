const button = document.querySelector("button");
const main = document.querySelector("main");
button.addEventListener("click", PostContent);



function PostContent(){
    let yourWords = prompt("写下你想说的话");
    if(yourWords !== null){
        const content = document.createElement("p");
        main.appendChild(content);
        content.textContent = yourWords;
        StoreContent(yourWords);
    }
}

function StoreContent(unstoredWords){
    if(!localStorage.content)
    {
    localStorage.setItem("content", unstoredWords);

    }
    else{
        localStorage.setItem("content", localStorage.content + " " + unstoredWords);
    }
}

function ShowContent(){
    let contentArr = localStorage.content.split(" ");
    for(let i = 0; i < contentArr.length; i++){
        let content = document.createElement("p");
        main.appendChild(content);
        content.textContent = contentArr[i]; 
    }
}

ShowContent();