const introImages = ["img/intro1.jpg", "img/intro2.jpg", "img/intro3.jpg", "img/intro4.jpg", "img/intro5.jpg", "img/intro6.jpg", "img/intro7.jpg", "img/intro8.jpg"];
const characterData = [
    { name: "Cahara", description: "Mercenary, thief, assassin... Whatever brings the silver to the table. Cahara is known for his dirty tactics in battle and crafty ways of gaining the advantage.", image: "img/cahara.png" },
    { name: "D'arce", description: "Knight with pure and righteous ways of the warrior. Having been trained for combat since a child, D'arce excels in close combat and with different weaponry.", image: "img/darce.png" },
    { name: "Enki", description: "Bearing no burden on such things as morality and ethics, gives Enki an edge in blood magic. However, devoting oneself to magic has left his physical body weak.", image: "img/enki.png" },
    { name: "Ragnvaldr", description: "Hardened in the freezing winds of the north, Ragnvaldr is an epitome of survival. He knows all the tricks to stay alive even in the most impossible of situations.", image: "img/ragnvaldr.png" }
];

let currentIntroImageIndex = 0;
let currentCharacterIndex = 0;
const galleryImg = document.getElementById("galleryImg");
const characterImg = document.getElementById("characterImg");
const characterName = document.getElementById("characterName");
const characterDescription = document.getElementById("characterDescription");

function showIntroImage(index) {
    galleryImg.style.opacity = 0;
    setTimeout(function() {
        galleryImg.src = introImages[index];
        galleryImg.style.opacity = 1;
    }, 500);
}

function showCharacter(index) {
    const character = characterData[index];
    characterImg.style.opacity = 0;
    setTimeout(function() {
        characterImg.src = character.image;
        characterImg.style.opacity = 1;
        characterName.textContent = character.name;
        characterDescription.textContent = character.description;
    }, 500);
}

document.getElementById("nextBtn").addEventListener("click", function() {
    currentIntroImageIndex = (currentIntroImageIndex + 1) % introImages.length;
    showIntroImage(currentIntroImageIndex);
});

document.getElementById("prevBtn").addEventListener("click", function() {
    currentIntroImageIndex = (currentIntroImageIndex - 1 + introImages.length) % introImages.length;
    showIntroImage(currentIntroImageIndex);
});

document.getElementById("nextCharBtn").addEventListener("click", function() {
    currentCharacterIndex = (currentCharacterIndex + 1) % characterData.length;
    showCharacter(currentCharacterIndex);
});

document.getElementById("prevCharBtn").addEventListener("click", function() {
    currentCharacterIndex = (currentCharacterIndex - 1 + characterData.length) % characterData.length;
    showCharacter(currentCharacterIndex);
});

showIntroImage(currentIntroImageIndex);
showCharacter(currentCharacterIndex);
