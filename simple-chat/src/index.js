import './index.css';
import './index.html';

const randomSentence = require('random-sentence');

const CLASS_ATTRIBUTE_NAME = "class";
const P_TAG_NAME = "p";
const DIV_TAG_NAME = "div";
const SPAN_TAG_NAME = "span";
const I_TAG_NAME = "i";
const IMG_TAG_NAME = "img";

const LAST_MESSAGE_SELECTOR = ".dialog-data div:nth-last-child(1)";
const INPUT_MESSAGE_CONTAINER_SELECTOR = ".input-message-container";
const INPUT_MESSAGE_INPUT_SELECTOR = ".input-message-input";
const DIALOG_DATA_SELECTOR = ".dialog-data";
const DIALOG_HEADER_SELECTOR = ".dialog-header";
const CHAT_SELECTOR = ".chat";
const MESSAGE_TIME_CLASS = "message-time";
const DONE_ALL_CLASS = "done-all";

function getDateTimeNow() {
    return new Date().toLocaleTimeString().substr(0, 5);
}

const form = document.querySelector(INPUT_MESSAGE_CONTAINER_SELECTOR);
const input = document.querySelector(INPUT_MESSAGE_INPUT_SELECTOR);
const chat = document.querySelectorAll(CHAT_SELECTOR)



form.addEventListener('submit', handleSubmit.bind(this));
form.addEventListener('keypress', handleKeyPress.bind(this));
chat.forEach(el => el.addEventListener("click", showDialog));

function generateMessages() {
    const messagesAmount = Math.floor(Math.random() * 10) % 10;
    const messages = [];
    for (let i = 0; i < messagesAmount; i++) {
        const wordsAmount = Math.floor(Math.random() * 20) % 20;
        const sentence = randomSentence({words: wordsAmount});
        const sender = ['me', 'user'][Math.floor(Math.random() * 2)];
        messages.push(JSON.parse(`{"datetime":"${getDateTimeNow()}", "name":"${sender}", "data":"${sentence}"}`));
    }
    return messages;
}

function activeDialogName() {
    if(!localStorage.getItem("activeDialog")) {
        const firstChatName = getFirstChatName();
        prepareLocalStorage(firstChatName + "LocalStorage");
        localStorage.setItem("activeDialog", firstChatName);
    }
    console.log(localStorage.getItem("activeDialog"));
    return localStorage.getItem("activeDialog");
}

function getFirstChatName(){
    return document.getElementsByClassName("chat")[0].getAttribute("id");
}

function handleSubmit(event) {
    event.preventDefault();
    if (input.value === "") return;
    const key = activeDialogName() + "LocalStorage";
    const dialog = new Dialog(activeDialogName());
    dialog.sendMessage(input.value, key);
    input.value = ""
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        if (input.value === "") return;
        const dialog = new Dialog(activeDialogName());
        const key = activeDialogName() + "LocalStorage";
        dialog.sendMessage(input.value, key);
        input.value = ""
    }
}


//todo Каждому пользаку сделать айди и брать историю сообщений по userID
function prepareLocalStorage(key) {
    if (!localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify(generateMessages()));
    }
}

function showDialog(event) {
    let actionDialog;
    if(event == null) actionDialog = activeDialogName();
    else actionDialog = event.currentTarget.querySelector(".dialog-title").textContent.trim();
    localStorage.setItem("activeDialog", actionDialog);
    const dialog = new Dialog(activeDialogName())
    prepareLocalStorage(dialog.localStorageKey);
    dialog.showHeader();
    dialog.showMessages();
}

class Dialog {
    constructor(name) {
        this.name = name;
        this.dialogHeader = document.querySelector(DIALOG_HEADER_SELECTOR);
        this.localStorageKey = this.name + "LocalStorage";
    }

    showHeader() {
        this.dialogHeader.replaceChildren([]);
        const dialogHeaderAttr = this.getDialogAttr()
        const dialogHeaderAvatar = document.createElement(IMG_TAG_NAME);
        dialogHeaderAvatar.setAttribute("src", dialogHeaderAttr.avatar);
        dialogHeaderAvatar.setAttribute(CLASS_ATTRIBUTE_NAME, "dialog-header-avatar");
        this.dialogHeader.insertBefore(dialogHeaderAvatar, null);
        const dialogHeaderName = document.createElement("div");
        dialogHeaderName.setAttribute(CLASS_ATTRIBUTE_NAME, "dialog-header-title");
        dialogHeaderName.appendChild(document.createTextNode(dialogHeaderAttr.name));
        this.dialogHeader.insertBefore(dialogHeaderName, null);
    }

    showMessages() {
        while (document.getElementsByClassName("me").length > 0) {
            document.getElementsByClassName("me")[0].remove();
        }
        while (document.getElementsByClassName("user").length > 0) {
            document.getElementsByClassName("user")[0].remove();
        }
        const history = JSON.parse(localStorage.getItem(this.localStorageKey));
        if (!history) return
        let lastMessage = document.querySelector(LAST_MESSAGE_SELECTOR);
        if (lastMessage == null) {
            lastMessage = document.querySelector(".input-message-container")
        }
        history.forEach(h => {
            //todo divide to separate func
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
        const dialogData = document.querySelector(DIALOG_DATA_SELECTOR);
        dialogData.scrollTop = dialogData.scrollHeight;
    }
    sendMessage(text) {
        let currentHistory = JSON.parse(localStorage.getItem(this.localStorageKey));
        if (!currentHistory) {
            currentHistory = []
        }
        const message = JSON.parse(`{"datetime":"${getDateTimeNow()}", "name":"me", "data":"${text}"}`);
        currentHistory.push(message);
        localStorage.setItem(this.localStorageKey, JSON.stringify(currentHistory));
        this.showMessages();
    }

    getDialogAttr() {
        const div = document.getElementById(this.name);
        console.log(this.name);
        console.log("!!!")
        console.log(div);
        return {
            "avatar": this.getDialogAvatar(div),
            "name": this.getDialogName(div)
        };
    }

    getDialogAvatar(dialogDiv) {
        return dialogDiv.querySelector("img").getAttribute("src");
    }

    getDialogName(dialogDiv) {
        return dialogDiv.querySelector(".dialog-title").textContent.trim();
    }
}

showDialog();

