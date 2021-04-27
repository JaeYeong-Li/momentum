/* JS는 이벤트에 반응하기 위해 만들어졌다. 이벤트==웹사이트에서 발생하는 것(클릭, resize, 등)*/
/*JS 모든 문장(expression) 끝엔 ';'이 온다. instruction을 제외하고
*/
let a = 221;
let b = a - 5;
//instruction
console.log('Im Working. Im JS. Im Beautiful. Im worth it')

/*선언자
    "변수를 선언할 땐 기본으로 const를 쓰자! 진짜 필요할 때만 let"
    1. 변수: 변수를 선언/초기화할 때 붙여야 함
        1-1. var: function-scoped
        1-2. let: block-scoped
    2. 상수: 상수. 변수와 달리 초기화 후 값이 변하지 않음.
        2-1. const: block-scoped
*/


/*변수에 넣을 수 있는 데이터 타입
    1. String
    2. Boolean
    3. Number
    4. Float
*/
const what = "Jaeyeong"; //imoticon도 text라 가능
const wat = true;
const wt = 17;
const wh = 55.1;

/*데이터타입(4)을 정렬하는 방법
    1. Array: 리스트를 만들고 싶을 때 쓰자.
    2. Object: 실제 객체를 만든다. 각 Value에 이름을 줄 수 있다.
    *Object를 Array 안에, Array를 Object 안에,
    *Object를 Object 안에... 기타 등등 여하튼 둘이 서로 잘 결합되어 쓰인다.
    *comma를 주의하자
    *콘솔도 하나의 object라서 console.log(~) 명령이 가능한 것. log는 함수임.
*/
//JS는 변수 이름을 Camel case로 작성하기
//Array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", true];
console.log(daysOfWeek)
console.log(daysOfWeek[2])
//Object
const jaeInfo = {
    name: "Jaeyeong", //name은 변수취급
    age: 24,
    gender: "Male",
    isHandsome: true,
    favMovies: ["LOTR", "Oldboy"],
    favFood: [
        {
            name:"Ramen",
            fatty: true
        },
        {
            name:"Kimchi",
            fatty: false
        }
    ]
}
jaeInfo.gender = "Female";
console.log(jaeInfo)

/*function, argument*/
//js에선 ''(따옴표)도 스트링이고 ""(쌍따옴표)도 스트링이다.
// ``(백틱)은
function sayHello(potato, chicken) {
    // 기존 스트링 짜는 방식
    //console.log('Hello!', potato, "you have", chicken, " chickens");
    // 백틱(``)으로 스트링 짜는 방식. 더 세련됐다.
    return `Hello ${potato} you have ${chicken} chickens`;
}
//greeting은 sayHello의 리턴값이다.
const greeting = sayHello("Jaeyeong", 15)
console.log(greeting)


const calculator = {
    plus: function(a, b) {
        return a+b;
    },
    minus: function(a,b) {
        return a-b;
    },
    mul: function(a,b) {
        return a*b;
    },
    div: function(a,b) {
        return a/b;
    }
}
console.log(calculator.plus(5,5))
console.log(calculator.div(10,5))

/*DOM: Document Object Model
  자바스크립트는 html의 페이지에서 자바스크립트로
  선택한 것은 객체로 바꾼다.
  (JS는 HTML을 DOM 객체로 변경)
*/

/*
JS는 이벤트에 반응하기 위해 만들어졌다.
이벤트==웹사이트에서 발생하는 것(클릭, resize, 등)
우리는 이 이벤트를 중간에서 intercept할 수 있다.
어떤 객체가 어떤 이벤트를 기다리는지 첫 번째 argument에 넣고
그 이벤트에서 다룰 함수를 두 번째 argument에 넣는다.
*/
function handleResize1() {
    console.log("I have been resized")
}
//이벤트를 다루는 함수를 만들 때마다 JS는 자동적으로 객체를 함수에 붙인다.
function handleResize2(event) {
    console.log(event)
}
function handleClick(event) {
    const currentColor = title.style.color;
    //console.log(event)
    if (event.type === "click") {
        if (currentColor === BASE_COLOR) {
            title.style.color = OTHER_COLOR;
        } else {
            title.style.color = BASE_COLOR;
        }
    } else if (event.type === "mouseenter") {
        if (currentColor == BASE_COLOR) {
            title.style.color = "red";
        } else {
            title.style.color = BASE_COLOR;
        }
    }
}

/*handleResize()라고 쓰면 지금 바로 호출하기.
handleResize는 내가 필요한 시점에 함수를 호출하기.*/
window.addEventListener("resize", handleResize2);

//☆ window.addEventListener("resize", handleResize());라고 쓰면 안됨!

//js에서 equal 표시는 ===

//여기서 rgq(52,와 73 사이의 띄어쓰기를 꼭 지켜야 한다
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
    title.addEventListener("mouseenter", handleClick);
}
//init();

// 이벤트의 종류는 많다. 이벤트의 근원을 알고 싶으면 MDN을 찾아보자!


//HTML documnet는 자바스크립트가 된다.
//console.log(document);

const title = document.querySelector("#title");
//querySelector로 id를 찾으려면 #을 붙이고, blabla
console.dir(title);
//모든 자바스크립트 객체 표기법 설명. title.~로 가능한 것들 출력
title.innerHTML = "Hi! From JS";
console.dir(document)
//document.~로 할 수 있는 것들 출력
document.title = 'welcome!'

const CLICKED_CLASS = "clicked";

/*
기존 클래스 btn(css에서 pointer표시하라고 설정)를 유지하면서
색을 바꾸는 클래스를 적용하고 싶다?
className을 바꾸는 것이 아닌 classList에 추가하면 해결!
*/
function handleClick() {
    /*
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    }else{
        title.classList.remove(CLICKED_CLASS);
    }
    */
   title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}
init();

