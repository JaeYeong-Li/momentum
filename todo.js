const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = []; //function-deleteToDo에서 갱신한 todos배열로 바꿔치기하려면(23줄) const가 아니라 let이어야 한다.


function deleteToDo(event) {
    //event.target은 이벤트버블링의 가장 마지막에 위치한 최하위의 요소를 반환
    //console.dir(event.target);
    const btn = event.target;
    const li = btn.parentNode;
    //셀프 공부법: 구글에 delete child element mdn이라 쳐보자.
    toDoList.removeChild(li);
    /*☆filter: array의 function 중 하나로 함수를 하나 실행시키는데
    * filter은 forEach에서 function을 실행하는 것 같이 모든 아이템을 함수에 실행하고
    * 그 함수의 값이 true인 아이템들만 가지고 새로운 array를 만든다.
    */
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    /*localStorage에는 자바스크립트의 데이터를 저장할 수 없다.
    * string만 저장할 수 있다. 이 때 JSON.stringify()는 자바스크립트 object를
    * string으로 바꿔준다. 
    */
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintTodo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerHTML = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintTodo(currentValue);
    toDoInput.value = "";
}

function loadTodos(){
    const loadedTodos = localStorage.getItem(TODOS_LS);
    if(loadedTodos !== null){
        //parse를 하면 [{"text":"abc","id":1}]이란 string이 객체로 출력됨
        const parsedToDos = JSON.parse(loadedTodos);
        //☆forEach: array의 function 중 하나로, array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜준다
        parsedToDos.forEach(function(toDo){
            paintTodo(toDo.text);
        })
    }
}
function init() {
    loadTodos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();