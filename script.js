const typingForm = document.querySelector(" .typing-form");
const chatList = document.querySelector(" .chat-list");

let userMessage = null;

const createMessageelement = (content, className) => {
    const div = document.createElement("div");
    div.classList.add("message", className);
    div.innerHTML = content;
    return div;
}

const handleOutgoingChat = () => {
    userMessage = typingForm.querySelector(" .typing-input").value.trim();
    if(!userMessage) return; //Exit if there is no message

    const html = ` <div class="message-content">
                <img src="images/user.jpg" alt="User Image" class="avatar">
                <p class="text"></p>
            </div>`;

    const outgoingMessageDiv = createMessageelement(html, "outgoing");
    outgoingMessageDiv.querySelector(".text").innerText = userMessage
    chatList.appendChild(outgoingMessageDiv);
}

//prevent default form submission and handle outgoing chat
typingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    handleOutgoingChat();
});