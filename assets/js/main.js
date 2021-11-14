//silly project generator
var ideas = [
    "a reminder that forgets to remind",
    "an alarm app that sings lullabies",
    "calculator but with emojis instead of operators",
    "an antivirus which tries to intercept viruses",
    "a GPS but in gordon ramsay's voice",
    "car simulator in which you score by crashing",
    "a music player that plays gibberish",
    "youtube mod that plays ads instead of videos",
    "a vpn service that only serves locally",
    "translator app that always messes up the grammar",
    "a text to speech converter but it mumbles",
    "a motivational app but instead it shows depressing quotes",
    "twitter bot which tweets everytime you go to poop",
    "a dictionary but in standard galactic alphabets",
    "a voice assistant except that it doesn't listen to you",
    "a coin flip simulator but it doesn't land back"
],
    emojis = [
        "✨",
        "🕺",
        "📺",
        "🌱",
        "🌸",
        "🧚🏼‍♀️",
        "🥰",
        "🌈",
        "⭐️",
        "👑",
        "💫",
        "⭐️",
        "🌟",
        "💕",
        "💓",
        "🛒",
        "🦋",
    ];

var num = -1;
var btn = document.getElementById("regenerate-button");
var weird = document.getElementById("idea"),
    flex = document.getElementById("emoji");

document.onkeydown = function (e) {
    if (e.key === "Enter" | e.key === " ") {
        btn.click();
    }
};

btn.addEventListener("click", function () {
    if (num == ideas.length - 1) {
        num = 0;
    }

    else {
        num += 1;
    }
    generateVariation();
});

function generateVariation() {
    replaceWithSynonym(idea, ideas);
    replaceWithEmoji(emoji, emojis);
}

function replaceWithSynonym(word, synonymList) {
    word.innerText = synonymList[num];
}

replaceWithEmoji();
function replaceWithEmoji(emote, emojiList) {
    emote.innerText =
        emojiList[Math.floor(Math.random() * emojiList.length)];
}