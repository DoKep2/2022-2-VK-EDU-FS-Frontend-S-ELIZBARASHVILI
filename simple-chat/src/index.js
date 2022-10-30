import './index.css';
import './index.html'

const CLASS_ATTRIBUTE_NAME = "class";
const P_TAG_NAME = "p";
const DIV_TAG_NAME = "div";
const SPAN_TAG_NAME = "span";
const I_TAG_NAME = "i";
const CHAT_HISTORY_KEY = "chatHistory";
const LAST_MESSAGE_SELECTOR = ".dialog-data div:nth-last-child(1)"
const INPUT_MESSAGE_CONTAINER_SELECTOR = ".input-message-container"
const INPUT_MESSAGE_INPUT_SELECTOR = ".input-message-input"
const MESSAGE_TIME_CLASS = "message-time"
const DONE_ALL_CLASS = "done-all";
const form = document.querySelector(INPUT_MESSAGE_CONTAINER_SELECTOR);
const input = document.querySelector(INPUT_MESSAGE_INPUT_SELECTOR);

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

form.addEventListener('submit', handleSubmit.bind(this));
form.addEventListener('keypress', handleKeyPress.bind(this));

function handleSubmit(event) {
    event.preventDefault();
    if (input.value === "") return;
    sendMessage(input.value, CHAT_HISTORY_KEY);
    reloadMessages(CHAT_HISTORY_KEY);
    input.value = ""
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        if (input.value === "") return;
        sendMessage(input.value, CHAT_HISTORY_KEY);
        reloadMessages(CHAT_HISTORY_KEY);
        input.value = ""
    }
}


//todo Каждому пользаку сделать айди и брать историю сообщений по userID
function prepareLocalStorage() {
    if (!localStorage.getItem(CHAT_HISTORY_KEY))
        localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(""));
}

function reloadMessages(localStorageKey) {
    while (document.getElementsByClassName("me").length > 0) {
        document.getElementsByClassName("me")[0].remove();
    }
    while (document.getElementsByClassName("user").length > 0) {
        document.getElementsByClassName("user")[0].remove();
    }
    showMessages(localStorageKey);
}

function showMessages(localStorageKey) {
    const history = JSON.parse(localStorage.getItem(localStorageKey));
    if (!history) return
    let lastMessage = document.querySelector(LAST_MESSAGE_SELECTOR);
    if (lastMessage == null) {
        lastMessage = document.querySelector(".input-message-container")
    }
    history.forEach(h => {
        const newDivContainer = document.createElement(DIV_TAG_NAME)
        newDivContainer.setAttribute(CLASS_ATTRIBUTE_NAME, h.name + "-message-container")
        const newDiv = document.createElement(P_TAG_NAME);
        newDiv.setAttribute(CLASS_ATTRIBUTE_NAME, h.name);
        newDiv.appendChild(document.createTextNode(h.data));
        const newMessageTime = document.createElement(SPAN_TAG_NAME)
        newMessageTime.setAttribute(CLASS_ATTRIBUTE_NAME, MESSAGE_TIME_CLASS);
        newMessageTime.appendChild(document.createTextNode(h.datetime));
        const newDoneAll = document.createElement(I_TAG_NAME)
        newDoneAll.setAttribute(CLASS_ATTRIBUTE_NAME, "material-symbols-outlined " + DONE_ALL_CLASS);
        newDiv.appendChild(newMessageTime);
        newDoneAll.appendChild(document.createTextNode("Done_All"));
        newDiv.appendChild(newDoneAll);
        newDivContainer.appendChild(newDiv);
        lastMessage.parentNode.insertBefore(newDivContainer, lastMessage.previousSibling);
    })
}

function sendMessage(text, localStorageKey) {
    let currentHistory = JSON.parse(localStorage.getItem(localStorageKey));
    if (!currentHistory) {
        currentHistory = []
    }
    const message = JSON.parse(`{"datetime":"${getDateTimeNow()}", "name":"me", "data":"${text}"}`);
    currentHistory.push(message);
    localStorage.setItem(localStorageKey, JSON.stringify(currentHistory));
}

function getDateTimeNow() {
    return new Date().toLocaleTimeString().substr(0, 5);
}


prepareLocalStorage()
showMessages(CHAT_HISTORY_KEY)

