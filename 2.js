// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) => {
//     console.log(e);
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// let div = document.querySelector(div);

// div.onmouseover = () => {
//     console.log("You are inside the div");
// }

//JS Event has more priority than Inline Events

//Event Object

//It is a special object that has detailed about the Event.


//Event Listeners


/* Add Event listerner
//node.addEventListerner(event,callback)
//node

btn1.addEventListener("click",(evt) => {
    console.log("button one  was clicked");
    console.log(evt)
})
btn1.addEventListener("click",() => {
    console.log("button one  was clicked - Handler 2");
})
    */

//remove Event Listener
//node.removeEventListener(event,callback)

// btn1.addEventListener("click",(evt) => {
//     console.log("button one  was clicked - Handler1");
    
// })

// btn1.addEventListener("click",() => {
//     console.log("button one  was clicked - Handler 2");
// });

// const handler3 = () => {
//     console.log("button one  was clicked - Handler 3");
// };

// btn1.addEventListener("click",handler3);

// btn1.addEventListener("click",() => {
//     console.log("button one  was clicked - Handler 4");
// });
// btn1.removeEventListener("click",handler3);

let modeBtn = document.querySelector("#mode");
let currMode = "light";//Dark
document.querySelector("button").style.backgroundColor = "black";
document.querySelector("button").style.color = "white";
modeBtn.addEventListener("click", () =>{
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(currMode);
});