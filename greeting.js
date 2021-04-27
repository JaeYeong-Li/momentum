//querySelector은 첫 번째로 찾은 것을 가져옴. querySelectorAl은 모든 것을 가져옴(Array반환)
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}
function handleSubmit(event){
    /*form을 submit하면 이 이벤트는 상위 단계로 올라가고 최종적으로 document의 root에 도착한다. 그럼 새로고침된다.
    이렇게 새로고침되는 것을 막기 위해 preventDefault()를 넣었다.*/
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}
function init() {
    loadName();
}
init();