import './index.css';
import './index.html'
import '../back/config/start'

const CLASS_ATTRIBUTE_NAME = "class";
const P_TAG_NAME = "p";
const CHAT_HISTORY_KEY = "chatHistory";
const LAST_MESSAGE_SELECTOR = ".dialog-data p:nth-last-child(1)"
const INPUT_MESSAGE_CONTAINER_SELECTOR = ".input-message-container"
const INPUT_MESSAGE_INPUT_SELECTOR = ".input-message-input"

const form = document.querySelector(INPUT_MESSAGE_CONTAINER_SELECTOR);
const input = document.querySelector(INPUT_MESSAGE_INPUT_SELECTOR);

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
        const newDiv = document.createElement(P_TAG_NAME);
        newDiv.setAttribute(CLASS_ATTRIBUTE_NAME, h.name);
        newDiv.appendChild(document.createTextNode(h.data));
        lastMessage.parentNode.insertBefore(newDiv, lastMessage.previousSibling);
    })
}

function sendMessage(text, localStorageKey) {
    let currentHistory = JSON.parse(localStorage.getItem(localStorageKey));
    if (!currentHistory) {
        currentHistory = []
    }
    const message = JSON.parse(`{"datetime":"${Date.now()}", "name":"me", "data":"${text}"}`);
    currentHistory.push(message);
    localStorage.setItem(localStorageKey, JSON.stringify(currentHistory));
}

prepareLocalStorage()
showMessages(CHAT_HISTORY_KEY)

