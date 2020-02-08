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
title.style.color = "red";
console.dir(title);
console.dir(document);
document.title = "i am castle";


//querySelector 노드의 첫번째 자식을 반환
const title2 = document.querySelector("#title");
title2.innerHTML ="Hello castle";
title2.style.color = "white";
