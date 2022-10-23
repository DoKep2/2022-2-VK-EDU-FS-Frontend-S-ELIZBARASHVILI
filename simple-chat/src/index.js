import './index.css';
import './index.html'

const CLASS_ATTRIBUTE_NAME = "class";
const P_TAG_NAME = "p";
const CHAT_HISTORY_KEY = "chatHistory";
const LAST_MESSAGE_SELECTOR = ".dialog-data p:nth-last-child(2)"
const ex = [
    {
        "datetime": "",
        "name": "me",
        "data": " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto dolorem facilis inventore laboriosam laborum laudantium, mollitia nemo nostrum officia quae qui repellat voluptatum? Ad architecto est, incidunt maxime qui sed. Accusamus consectetur cumque cupiditate debitis dignissimos facere id in minus necessitatibus, nobis odit quos repellendus sint tempora, temporibus. Deserunt!"
    },
    {
        "datetime": "",
        "name": "user",
        "data": "sadlsadl zc zxklz klxczx c"
    },
    {
        "datetime": "",
        "name": "user",
        "data": "lorem123 aseqwe "
    }
]


const form = document.querySelector('form');
const input = document.querySelector('.form-input');

form.addEventListener('submit', handleSubmit.bind(this));
form.addEventListener('keypress', handleKeyPress.bind(this));

function handleSubmit(event) {
    event.preventDefault();
    if(input.value === "") return;
    sendMessage(input.value, "chatHistory");
    reloadMessages("chatHistory");
    input.value = ""
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        form.dispatchEvent(new Event('submit'));
    }
}


//todo Каждому пользаку сделать айди и брать историю сообщений по userID
function setExampleMessages() {
    if(!localStorage.getItem(CHAT_HISTORY_KEY))
        localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(ex));
}

function reloadMessages(localStorageKey){
    while(document.getElementsByClassName("me").length > 0){
        document.getElementsByClassName("me")[0].remove();
    }
    while(document.getElementsByClassName("user").length > 0){
        document.getElementsByClassName("user")[0].remove();
    }
    showMessages(localStorageKey);
}

function showMessages(localStorageKey) {
    const history = JSON.parse(localStorage.getItem(localStorageKey));
    let lastMessage = document.querySelector(LAST_MESSAGE_SELECTOR);
    if (lastMessage == null) {
        lastMessage = document.querySelector(".dialog-header")
    }
    history.forEach(h => {
        const newDiv = document.createElement(P_TAG_NAME);
        newDiv.setAttribute(CLASS_ATTRIBUTE_NAME, h.name);
        newDiv.appendChild(document.createTextNode(h.data));
        lastMessage.parentNode.insertBefore(newDiv, lastMessage.nextSibling);
    })
}

function sendMessage(text, localStorageKey) {
    const currentHistory = JSON.parse(localStorage.getItem(localStorageKey));
    // todo:
    const message = JSON.parse(`{"datetime":"${Date.now()}", "name":"me", "data":"${text}"}`);
    currentHistory.push(message);
    localStorage.setItem(localStorageKey, JSON.stringify(currentHistory));
}
showMessages("chatHistory")

