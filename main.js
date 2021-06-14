class Backpack {
    constructor(
        color,
        pocket,
        sizeWidth,
        sizeHeight,
        lidOpen
    ) {
        this.color = color;
        this.pocket = pocket;
        this.size = {
            width: sizeWidth,
            height: sizeHeight
        };
        this.lidOpen = lidOpen
    }
}

const everydayPack = new Backpack(
    "red",
    5,
    10,
    20,
    false
);

console.log(everydayPack);


const content = `
    <main>
        <article id="everydayPack">
            <h1>Everyday Pack</h1>
            <ul>
                <li class="everypack pack-color">Color : ${everydayPack.color}</li>
                <li class="everypack pack-status">Lid Status : ${everydayPack.lidOpen}</li>
                <li class="everypack pack-pocket">Pocket : ${everydayPack.pocket}</li>
                <li class="everypack pack-width">Width : ${everydayPack.size.width}</li>
                <li class="everypack pack-height">Height : ${everydayPack.size.height}</li>
            </u1>
       </article>
    </main>
`;

document.body.innerHTML = content;

const main = document.querySelector("main");
const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = "content";

main.append(newArticle);

let stringDemo = "A string of text.";
let numberDemo = 10;
let floatDemo = 5.6
let booleanDemo = false;
let nullDemo = null;
let undefinedDemo;
let undefinedAssignDemo = undefined;
const objectDemo = { color: "blue", number: 5 };
const arrayDemo = ["Mon", "Tue", "Wed"];


console.log(stringDemo, typeof stringDemo);
console.log(numberDemo, typeof numberDemo);
console.log(floatDemo, typeof floatDemo);
console.log(booleanDemo, typeof booleanDemo);
console.log(nullDemo, typeof nullDemo);
console.log(undefinedDemo, typeof undefinedDemo);
console.log(undefinedAssignDemo, typeof undefinedAssignDemo);
console.log(objectDemo, typeof objectDemo);
console.log(arrayDemo, typeof arrayDemo);

window.volume = 20;
const pack = {
    volume: 8,
    newVolume: function(volume) {
        console.log(this.volume);
        this.volume = volume;
        console.log(this.volume);
        (function() {
            console.log(this.volume);
        })();
        (() => {
            console.log(this.volume);
        })();
    }
};

pack.newVolume(5);

function myDisplay(some) {
    console.log(some);
}

function calculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

calculator(5, 3, myDisplay);

const myArray = [1, 2, 3, 4]
myArray.forEach((item, index) => {
    myArray[index] = ++item;
});
console.log(myArray);

function myfunc(x, y) {
    return (x + y);
}
console.log(myfunc(2, myfunc(5, -2)));