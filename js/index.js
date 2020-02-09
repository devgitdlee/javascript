// alert('I am working. I am js I am Beautiful. I am worth it');
console.log('I am working. I am js I am Beautiful. I am worth it');
let a =221;
let b = a - 5;
a = 4;
console.log(b, a);

const what = "Castle";
var wat = true;
var num = 777;

console.log(what, wat, num);


const days=["Mon", "Tue","Wed", "Thu", "Fri", "Sat", "Sun"];

for(var i=0; i<days.length; i++){
    console.log(days[i]);
}

console.log(days);

const castleinfo ={
    name:"castle",
    age:30,
    gender:"male",
    hobby:"computer",
    favMovie:["witch","parasite","Roaring Currents"],
    favfood:[{name: "hamburger",
              fatty: true
             },
             {name: "Cheese burger",
              fatty: true
             }
            ]
}

console.log(castleinfo.gender);

castleinfo.gender="Female";

console.log(castleinfo.gender);

console.log(castleinfo.favMovie[1]);
console.log(castleinfo.favfood[0].name);
console.log(castleinfo.favfood[0].fatty);


function sayHello(name, age){
    // console.log('Hello!', name, " you have", age);
    console.log(`Hello! ${name} you have ${age}`);
}

sayHello("castle", 30);
// 객체안에 함수
const calculator ={
    plus : function (a, b) {
        return a + b;
    }

}

var plus = calculator.plus(5,5);
console.log(plus);



const title = document.getElementById("title");
title.innerHTML = "Hi castle";
//title.style.color = "red";
console.dir(title);
console.dir(document);
document.title = "i am castle";


//querySelector 노드의 첫번째 자식을 반환
const title2 = document.querySelector("#title");
title2.innerHTML ="Hello castle";
//title2.style.color = "black";

// function handleResize(event){
//     console.log(event);
//     // console.log("I HAVE been resized");
// }

// window.addEventListener("resize", handleResize);


// function handleclick(){
//     if (document.getElementById("title").style.color == "blue"){
//         title.style.color = "black";
//         return;
//     }
//     title.style.color = "blue";
//
// }
//
//
// title.addEventListener("click", handleclick);


// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";
//
// function handleclick(){
//     const currentColor = title.style.color;
//     if (currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     } else{
//         title.style.color = BASE_COLOR;
//     }
// }
//
// function init(){
//     title.style.color = "BASE_COLOR";
//     title.addEventListener("click", handleclick);
// }
//
// init();

//classlist.contanins = 해당클래스이름비교
// const CLICKED_CLASS = "clicked";
//
// function handleclick(){
//     const hasClass = title.classList.contains(CLICKED_CLASS);
//     console.log(hasClass);
//     if (!hasClass){
//         // title.className = CLICKED_CLASS;
//         title.classList.add(CLICKED_CLASS);
//
//     } else{
//         title.classList.remove(CLICKED_CLASS);
//     }
// }
//
// function init(){
//     title.addEventListener("click", handleclick);
// }
// init();


const CLICKED_CLASS = "clicked";

function handleclick(){
    const hasClass = title.classList.toggle(CLICKED_CLASS);
    console.log(hasClass);
}

function init(){
    title.addEventListener("click", handleclick);
}
init();

