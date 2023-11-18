const words = ["apple", "pear", "apricot", "peach", "plum"];

function generateImages(words) {
    for (let i = 0; i < 3; i++) {
        let rand = Math.floor(Math.random() * words.length);
        document.write(`<img width="100px" id="${words[rand]}" src="./images/${words[rand]}.png">`);
        words.splice(rand, 1);
    }
}

generateImages(words);

const images = document.querySelectorAll("img");

images.forEach((image) => {
    image.addEventListener("click", check);
});

function check(event) {
    const word = prompt("Input a word");
    if (event.target.id === word.toLowerCase()) {
        alert("Correct!")
    } else {
        alert("Incorrect")
    }
}