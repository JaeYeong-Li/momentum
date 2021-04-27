const clockContainer = document.querySelector(".js-clock"), 
clockTitle = clockContainer.querySelector("h1");

/*setInterval(arg1, arg2)
arg1에 실행할 함수를, arg2에 그 함수를 실행할 시간 간격을 전달
*/
function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds<10?`0${seconds}`:seconds}`;
}
function init() {
    setInterval(getTime, 1000);
}

init();