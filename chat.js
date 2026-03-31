function sendMessage() {
    let input = document.getElementById("userInput").value;
    let chatArea = document.getElementById("chatArea");

    chatArea.innerHTML += "<p><b>You:</b> " + input + "</p>";

    let reply = getBotReply(input);

    setTimeout(() => {
        chatArea.innerHTML += "<p><b>Himawari:</b> " + reply + "</p>";
        chatArea.scrollTop = chatArea.scrollHeight;
    }, 500);

    document.getElementById("userInput").value = "";
}

function getBotReply(input) {
    input = input.toLowerCase();

    if(input.includes("hi")) return "Hello 😄";
    if(input.includes("name")) return "I am Himawari 🌼";
    if(input.includes("how are you")) return "I am fine!";

    return "Hmm... interesting 🤔";
}