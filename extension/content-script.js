const ws = new WebSocket("ws://localhost:8080/websocket");
let totalResponses = 0;

let currentIndex = 0;
let inputText = "";

const fakeTyping = false;

// The speed at which to type, measured in characters per second
const typingSpeed = 20;

// The amount of time to pause between sentences, measured in milliseconds
const pauseDuration = 2000;

ws.onopen = () => {
  console.log("Websocket connection established");
};

ws.onmessage = (e) => {
  const msgData = JSON.parse(e.data);
  console.log("msgData:", msgData);
  if (msgData.type === "input") sendInput(msgData.msg);
  console.log("Received websocket message:", e.data);
};

ws.onerror = (error) => {
  console.log("Websocket error:", error);
};

function sendInput(message) {
  console.log("Sending input:", message);
  if (fakeTyping) {
    inputText = message;
    simulateTyping();
  } else {
    document.querySelector("form textarea").value = message;
    document.querySelector("form button").click();
  }
}

function checkResponses() {
  const responses = document.querySelectorAll(
    ".markdown.prose:not(.result-streaming)"
  );

  if (responses.length !== totalResponses) {
    totalResponses = responses.length;
    ws.send({
      type: "message",
      msg: responses[responses.length - 1].innerHTML,
    });
    console.log("Sent response:", responses[responses.length - 1]);
  }
}

function simulateTyping() {
  if (currentIndex < text.length) {
    textarea.value += text[currentIndex];
    document.querySelector("form textarea").value = text[currentIndex];
    currentIndex++;
    setTimeout(simulateTyping, 1000 / typingSpeed);
  } else if (currentIndex === text.length) {
    document.querySelector("form button").click();
  } else {
    setTimeout(() => {}, pauseDuration);
  }
}

setInterval(checkResponses, 1000);
console.log("Started interval check");
