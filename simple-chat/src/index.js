import './index.css';
import './index.html'
const ex = [
    {
        "datetime" : "",
        "name": "me",
        "data": " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto dolorem facilis inventore laboriosam laborum laudantium, mollitia nemo nostrum officia quae qui repellat voluptatum? Ad architecto est, incidunt maxime qui sed. Accusamus consectetur cumque cupiditate debitis dignissimos facere id in minus necessitatibus, nobis odit quos repellendus sint tempora, temporibus. Deserunt!"
    },
    {
        "datetime" : "",
        "name": "user",
        "data": "sadlsadl zc zxklz klxczx c"
    },
    {
        "datetime" : "",
        "name": "user",
        "data": "lorem123 aseqwe "
    }
]

// Каждому пользаку сделать айди и брать историю сообщений по итему <id>_chat_history
localStorage.setItem("chatHistory", JSON.stringify(ex));
const history = JSON.parse(localStorage.getItem("chatHistory"))
history.forEach(message => console.log(message));
const dialogHeader = document.getElementsByClassName("dialog-header")[0]
const newDiv = document.createElement("p")
newDiv.setAttribute("class", "user")
const newContent = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus error eveniet illo praesentium quas sapiente vel! Consequuntur et repellat repellendus.");
newDiv.appendChild(newContent)
dialogHeader.parentNode.insertBefore(newDiv, dialogHeader.nextSibling)


function showMessages(){
    history.forEach(h => {
        const newDiv = document.createElement("p");
        newDiv.setAttribute("class", h.name);
        newDiv.appendChild(document.createTextNode(h.data));
        dialogHeader.parentNode.insertBefore(newDiv, dialogHeader.nextSibling);
    })
}

showMessages()
