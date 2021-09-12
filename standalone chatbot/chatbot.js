let botContent = `
        <div class='title-bar'>
            <a id='title'><strong>Scott</strong></a>
            <div id="minimize"></div>
        </div>
        <main id='main'>
            <div id="lastAvatar" class="avatar"><img src="scotiabank_logo.png" width="25" height="25" class="center"></div>
            <div class="message left" id="bot"><span id="bot-response">Hi, I am Scott the Accessibility Assistant. How will I help you today?</span></div>
        </main>
        <div id ='user-bar'>
                <div>
                    <input id='input' type='text' placeholder='Ask us anything'</input>
                </div>
                <div id='speak'> <i class='material-icons'>mic</i> </div>
                <button type='button' id ='send' >Send</button>
        </div>
`;

let botLogo = `<div id="bot-logo"></div>`

let scriptDys = [
    "Hi, I am Scott the Accessibility Assistant, how will I help you today?",
    "You have one VISA card. Would you wish to pay with this card?",
    "You have a Student Debit account and a Momentum Savings account. Would you wish to pay with the Student Debit account?",
    "$456.01",
    "Transaction complete. You paid $56.02 from your Student Debit account to your VISA card. Your student Debit Card has $399.99 and your VISA card has a credit of $0."
]

let scriptVis = [
    "Hi, I am Scott the Accessibility Assistant, how will I help you today?",
    "On it. Would you wish to make the website text larger?",
    "Sure. Would you wish to increase or decrease the contrast of the screen?",
    "On it. Are you colorblind?",
    "Glad to be of help!"
]

let ctr = 0;
let first = true;

document.addEventListener("DOMContentLoaded", () => {
    // Toggle chatbot
    addChatbotOpen(document.getElementById("chatbot"));
});

function pushInput(input){
    // Replace with next item in bot script
    ctr++;
    let output = scriptDys[ctr];
    const mainDiv = document.getElementById("main");
    if (input != null) {
        let userDiv = document.createElement("div");
        userDiv.classList.add("message");
        userDiv.classList.add("right");
        userDiv.id = "user";
        userDiv.innerHTML = `<span id="user-response">${input}</span>`;
        mainDiv.appendChild(userDiv);
        document.getElementById("input").value = "";
    }
    if (output != null) {
        let icon = document.createElement("div"); // Avatar profile icon div
        let botDiv = document.createElement("div");
        let prevAvatar = document.getElementById("lastAvatar");
        prevAvatar.id = "";
        icon.id="lastAvatar";
        icon.classList.add("avatar");
        botDiv.classList.add("message");
        botDiv.classList.add("left");
        botDiv.id = "bot";
        icon.innerHTML = "<img src='scotiabank_logo.png' width='25' height='25' class='center'>"; // Set the icon
        botDiv.innerHTML = `<span id="bot-response">${output}</span>`;
        mainDiv.appendChild(icon);
        mainDiv.appendChild(botDiv);
        speak(output); // Read out the bot response in text-to-speech
    }

    mainDiv.scroll({ top: mainDiv.scrollHeight, behavior: 'smooth' }); //scroll to bottom
}

function speak(text){
    const u = new SpeechSynthesisUtterance();
    allVoices = speechSynthesis.getVoices();
    u.voice = allVoices.filter(voice => voice.name === "Alex")[0];
    u.text = text;
    u.lang = "en-US";
    u.volume = 1; //0-1 interval
    u.rate = 1;
    u.pitch = 1; //0-2 interval
    speechSynthesis.speak(u);
}

function addChatbotOpen(chatbot){
    chatbot.addEventListener("click", function open() {
        if(chatbot.className === "collapsed"){
            chatbot.innerHTML = "";
            openChatbot();
        }
    });
}

function addChatbotClose(){
    document.getElementById("minimize").addEventListener("click", function close() {
        botContent = document.getElementById("chatbot").innerHTML;
        closeChatbot();
    });

    // Record via Microphone button
    document.getElementById("speak").addEventListener("click", function() {
        recognition.start();
    });

    // Send chat input; response to follow
    document.getElementById("input").addEventListener("keydown", function(e) {
        let input = document.getElementById("input").value; // Retrieve user input
        if (e.code === "Enter") {
            if(input.length > 0)
                pushInput(input);
        }
    });
    document.getElementById("send").addEventListener("click", function() {
        let input = document.getElementById("input").value; // Retrieve user input
        if(input.length > 0)
            pushInput(input);
    });

    const mainDiv = document.getElementById("main");
    mainDiv.scroll({ top: mainDiv.scrollHeight, behavior: 'smooth' }); //scroll to bottom
}

function openChatbot() {
    if(first){
        first=false;
        speak(scriptDys[ctr]);
    }
    let chatbot = document.getElementById("chatbot");
    var id = setInterval(frame, 3);
    var pos = 5;
    function frame() {
        if (pos == 35){
            chatbot.style.height = "75vh";
            chatbot.style.width = "32.5vw";
            chatbot.className = "opened";
            chatbot.innerHTML = botContent;
            addChatbotClose();
            clearInterval(id);
        }
        else {
            pos++;
            chatbot.style.height = pos + "em";
            chatbot.style.width = pos + "em";
        }
    }
}
   
function closeChatbot() {
    let chatbot = document.getElementById("chatbot");
    var id = setInterval(frame, 2);
    var pos = 75;
    function frame() {
        if (pos == 10){
            chatbot.style.height = "5em";
            chatbot.style.width = "5em";
            chatbot.className = "collapsed";
            chatbot.innerHTML = botLogo;
            addChatbotOpen(chatbot);
            clearInterval(id);
        }
        else {
            pos--;
            chatbot.innerHTML="";
            chatbot.style.height = pos + "vh";
            chatbot.style.width = pos/2 + "vw";
        }
    }
}

//===================
//  RECOGNITION CODE
//===================
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = function(event) {
    var speechResult = event.results[0][0].transcript.toLowerCase();
    //document.getElementById("input").value = speechResult;
    if(speechResult.length > 0)
        pushInput(speechResult);
}

recognition.onspeechend = function() {
    recognition.stop();
}

recognition.onerror = function(event) {
    document.getElementById("Error in server. Please try again");    
}
  
recognition.onaudiostart = function(event) {
    //Fired when the user agent has started to capture audio.
    console.log('SpeechRecognition.onaudiostart');
}
  
recognition.onaudioend = function(event) {
    //Fired when the user agent has finished capturing audio.
    console.log('SpeechRecognition.onaudioend');
}
  
recognition.onend = function(event) {
    //Fired when the speech recognition service has disconnected.
    console.log('SpeechRecognition.onend');
}
  
recognition.onnomatch = function(event) {
    //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
    console.log('SpeechRecognition.onnomatch');
}
  
recognition.onsoundstart = function(event) {
    //Fired when any sound — recognisable speech or not — has been detected.
    console.log('SpeechRecognition.onsoundstart');
}
  
recognition.onsoundend = function(event) {
    //Fired when any sound — recognisable speech or not — has stopped being detected.
    console.log('SpeechRecognition.onsoundend');
}
  
recognition.onspeechstart = function (event) {
    //Fired when sound that is recognised by the speech recognition service as speech has been detected.
    console.log('SpeechRecognition.onspeechstart');
}
recognition.onstart = function(event) {
    //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
    console.log('SpeechRecognition.onstart');
}