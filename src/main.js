import Library from './lib';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const audioThing = document.querySelector('#fun-auds');
const audioTing = document.querySelector('#funny-joke');
const PlayBtn = document.querySelector('button1');
const OptionsBtn = document.querySelector('button2');
const output = document.getElementById('Songo');

let timer = 0;
let switchScene = false;
let switchScene2 = false;
let name = "SecretName";

let lib = new Library(ctx, 1517, 853);

let welcomePos = canvas.width/2;

let textOpacity = 1;
let shapeOpacity = 0.1;
let i = 0;

let Option = false;
let Starts = false;
let Gos = false;
let Nexts = 1;

let currentScene = 0;


//functions for switching scenes
function Starto() {
    Starts = true;
}

function OptionsButton() {
    Option = true;
}

function OptionsButtonNot() {
    Option = false;
}

function ChooseName() {
    name = document.getElementById('entername').value;
    console.log(name);
}

function Go() {
    Gos = true;
}

function Next() {
    Nexts += 1;
}

function Choice1() {
    Nexts = 9;
}
function Choice2() {
    Nexts = 13;
}
function Choice3() {
    Nexts = 17;
}

//stuff
function intro() {
    console.log("Running Intro");
    let img = document.createElement('img');
    img.src = "Black.jpg";
    img.addEventListener("load", () => {
        ctx.drawImage(img, 1, 1, 1517, 853);
        ctx.font = "50px Comic Sans MS";
        ctx.fillStyle = `rgba(255, 255, 255, ${textOpacity})`;
        ctx.textAlign = "center";
        ctx.fillText("Welcome", welcomePos, canvas.height / 1.25);
        textOpacity -= .009;
    });
    if (switchScene) {
        currentScene = 1;
    }
}

function Title() {
    let img2 = document.createElement('img');
    img2.src = "titelopage.png";
    img2.addEventListener("load", () => {
        ctx.drawImage(img2, 1, 1, 1517, 853);
        document.getElementById('button1').style.display = 'block';
        document.getElementById('button2').style.display = 'block';
        document.getElementById('button3').style.display = 'none';
        audioTing.play();
    });
    document.getElementById('button2').addEventListener('click', OptionsButton);
    document.getElementById('button1').addEventListener('click', Starto);
    if (Starts) {
        currentScene = 2;
    }
    if (Option) {
        currentScene = 5;
    }
}

function Options() {
    let img4 = document.createElement('img');
    img4.src = "optionspage.png";
    img4.addEventListener("load", () => {
        ctx.drawImage(img4, 1, 1, 1517, 853);
        document.getElementById('button1').style.display = 'none';
        document.getElementById('button2').style.display = 'none';
        document.getElementById('button3').style.display = 'block';
    });
    document.getElementById('button3').addEventListener('click', OptionsButtonNot);
    if (!Option) {
        currentScene = 1;
    }
}

function Start() {
    let img5 = document.createElement('img');
    img5.src = "Black.jpg";
    img5.addEventListener("load", () => {
        ctx.drawImage(img5, 1, 1, 1517, 853);
        document.getElementById('button1').style.display = 'none';
        document.getElementById('button2').style.display = 'none';
        document.getElementById('button3').style.display = 'none';
        document.getElementById('entername').style.display = 'block';
        document.getElementById('button4').style.display = 'block';
    });
    document.getElementById('button4').addEventListener('click', ChooseName);
    document.getElementById('button4').addEventListener('click', Go);
    if (Gos) {
       currentScene = 3;
    }
}


function Scene1() {
    let img6 = document.createElement('img');
    img6.src = "Classroom.jpg";
    let img7 = document.createElement('img');
    img7.src = "Text.jpg";
    img6.addEventListener("load", () => {
        document.getElementById('button5').addEventListener('click', Next);
        ctx.drawImage(img6, 1, 1, 1517, 853);
        ctx.drawImage(img7, 1, 639, 1517, 213);
        document.getElementById('entername').style.display = 'none';
        document.getElementById('button4').style.display = 'none';
        document.getElementById('button5').style.display = 'block';
        ctx.font = "25px Comic Sans MS";
        ctx.fillStyle = `rgba(255, 255, 255, 1)`;
        ctx.textAlign = "left";
        ctx.fillText("?: My name is " + name + ", and I am a high school garlic bread enthusiast.", 400, 730);
    });

    if (Nexts === 2) {
        currentScene = 4;
    }
}

function Scene2() {
    let img6 = document.createElement('img');
    img6.src = "Classroom.jpg";
    let img7 = document.createElement('img');
    img7.src = "Text.jpg";
    img6.addEventListener("load", () => {
        ctx.drawImage(img6, 1, 1, 1517, 853);
        ctx.drawImage(img7, 1, 639, 1517, 213);
        ctx.font = "25px Comic Sans MS";
        ctx.fillStyle = `rgba(255, 255, 255, 1)`;
        ctx.textAlign = "left";
        ctx.fillText(name + ": Garlic Bread is my passion!", 400, 730);
        document.getElementById('button5').addEventListener('click', Next);

    });
    if (Nexts === 3) {
      currentScene = 6;
    }
}

function Scene3() {
    let img8 = document.createElement('img');
    img8.src = "Hall.png";
    let img7 = document.createElement('img');
    img7.src = "Text.jpg";
    img8.addEventListener("load", () => {
        ctx.drawImage(img8, 1, 1, 1517, 853);
        ctx.drawImage(img7, 1, 639, 1517, 213);
        ctx.font = "25px Comic Sans MS";
        ctx.fillStyle = `rgba(255, 255, 255, 1)`;
        ctx.textAlign = "left";
        ctx.fillText(name + ": Bout time I made some garlic bread!", 400, 730);
        document.getElementById('button5').addEventListener('click', Next);

    });
    if (Nexts === 4) {
        currentScene = 7;
    }
}

function Scene4() {
    let img8 = document.createElement('img');
    img8.src = "Hall.png";
    let img7 = document.createElement('img');
    img7.src = "Text.jpg";
    img8.addEventListener("load", () => {
        ctx.drawImage(img8, 1, 1, 1517, 853);
        ctx.drawImage(img7, 1, 639, 1517, 213);
        ctx.font = "25px Comic Sans MS";
        ctx.fillStyle = `rgba(255, 255, 255, 1)`;
        ctx.textAlign = "left";
        ctx.fillText(name + ": Where should I go?", 400, 730);
        document.getElementById('button5').addEventListener('click', Next);

    });
    if (Nexts === 5) {
        currentScene = 8;
    }
}

function Scene5() {
    let img8 = document.createElement('img');
    img8.src = "Hall.png";
    let img7 = document.createElement('img');
    img7.src = "Text.jpg";
    img8.addEventListener("load", () => {
        document.getElementById('button6').style.display = 'block';
        document.getElementById('button7').style.display = 'block';
        document.getElementById('button8').style.display = 'block';
        document.getElementById('button5').style.display = 'none';
        ctx.drawImage(img8, 1, 1, 1517, 853);
        ctx.drawImage(img7, 1, 639, 1517, 213);
        ctx.font = "25px Comic Sans MS";
        ctx.fillStyle = `rgba(255, 255, 255, 1)`;
        ctx.textAlign = "left";
        ctx.fillText(name + ": Where should I go?", 400, 730);
        document.getElementById('button6').addEventListener('click', Choice1);
        document.getElementById('button7').addEventListener('click', Choice2);
        document.getElementById('button8').addEventListener('click', Choice3);
    });
    if (Nexts === 9) {
        currentScene = 9;
    } else if (Nexts === 13) {
        currentScene = 13;
    } else if (Nexts === 17) {
        currentScene = 17;
    }
}

function WhiteHouseScenes(Text, Nexto, Scenee) {
    document.getElementById('button6').style.display = 'none';
    document.getElementById('button7').style.display = 'none';
    document.getElementById('button8').style.display = 'none';
    document.getElementById('button5').style.display = 'block';
    let img9 = document.createElement('img');
    img9.src = "WhiteHouse.jpg";
    let img7 = document.createElement('img');
    img7.src = "Text.jpg";
    img9.addEventListener("load", () => {
        ctx.drawImage(img9, 1, 1, 1517, 853);
        ctx.drawImage(img7, 1, 639, 1517, 213);
        ctx.font = "25px Comic Sans MS";
        ctx.fillStyle = `rgba(255, 255, 255, 1)`;
        ctx.textAlign = "left";
        ctx.fillText(name + Text, 400, 730);
        document.getElementById('button5').addEventListener('click', Next);

    });
    if (Nexts === Nexto) {
        currentScene = Scenee;
    }
}
function SkoolKitcScenes(Text, Nexto, Scenee) {
    document.getElementById('button6').style.display = 'none';
    document.getElementById('button7').style.display = 'none';
    document.getElementById('button8').style.display = 'none';
    document.getElementById('button5').style.display = 'block';
    let img10 = document.createElement('img');
    img10.src = "SkoolKit.jpg";
    let img7 = document.createElement('img');
    img7.src = "Text.jpg";
    img10.addEventListener("load", () => {
        ctx.drawImage(img10, 1, 1, 1517, 853);
        ctx.drawImage(img7, 1, 639, 1517, 213);
        ctx.font = "25px Comic Sans MS";
        ctx.fillStyle = `rgba(255, 255, 255, 1)`;
        ctx.textAlign = "left";
        ctx.fillText(name + Text, 400, 730);
        document.getElementById('button5').addEventListener('click', Next);

    });
    if (Nexts === Nexto) {
        currentScene = Scenee;
    }
}
function HomeKitScenes(Text, Nexto, Scenee) {
    document.getElementById('button6').style.display = 'none';
    document.getElementById('button7').style.display = 'none';
    document.getElementById('button8').style.display = 'none';
    document.getElementById('button5').style.display = 'block';
    let img11 = document.createElement('img');
    img11.src = "Home.jpg";
    let img7 = document.createElement('img');
    img7.src = "Text.jpg";
    img11.addEventListener("load", () => {
        ctx.drawImage(img11, 1, 1, 1517, 853);
        ctx.drawImage(img7, 1, 639, 1517, 213);
        ctx.font = "25px Comic Sans MS";
        ctx.fillStyle = `rgba(255, 255, 255, 1)`;
        ctx.textAlign = "left";
        ctx.fillText(name + Text, 400, 730);
        document.getElementById('button5').addEventListener('click', Next);

    });
    if (Nexts === Nexto) {
        currentScene = Scenee;
    }
}
function RestScenes(Text, Nexto, Scenee) {
    let img12 = document.createElement('img');
    img12.src = "Restaraunt.jpg";
    let img7 = document.createElement('img');
    img7.src = "Text.jpg";
    img12.addEventListener("load", () => {
        ctx.drawImage(img12, 1, 1, 1517, 853);
        ctx.drawImage(img7, 1, 639, 1517, 213);
        ctx.font = "25px Comic Sans MS";
        ctx.fillStyle = `rgba(255, 255, 255, 1)`;
        ctx.textAlign = "left";
        ctx.fillText(name + Text, 400, 730);
        document.getElementById('button5').addEventListener('click', Next);

    });
    if (Nexts === Nexto) {
        currentScene = Scenee;
    }
}
function ThemeScenes(Text, Nexto, Scenee) {
    let img13 = document.createElement('img');
    img13.src = "Park.jpg";
    let img7 = document.createElement('img');
    img7.src = "Text.jpg";
    img13.addEventListener("load", () => {
        ctx.drawImage(img13, 1, 1, 1517, 853);
        ctx.drawImage(img7, 1, 639, 1517, 213);
        ctx.font = "25px Comic Sans MS";
        ctx.fillStyle = `rgba(255, 255, 255, 1)`;
        ctx.textAlign = "left";
        ctx.fillText(name + Text, 400, 730);
        document.getElementById('button5').addEventListener('click', Next);

    });
    if (Nexts === Nexto) {
        currentScene = Scenee;
    }
}
function GoodEndScenes(Text, Nexto, Scenee) {
    let img14 = document.createElement('img');
    img14.src = "White.jpg";
    img14.addEventListener("load", () => {
        ctx.drawImage(img14, 1, 1, 1517, 853);
        ctx.font = "25px Comic Sans MS";
        ctx.fillStyle = `rgba(255, 255, 255, 1)`;
        ctx.textAlign = "left";
        ctx.fillText(name + Text, 400, 730);
        document.getElementById('button5').addEventListener('click', Next);

    });
    if (Nexts === Nexto) {
        currentScene = Scenee;
    }
}
function EndScenes(Text, Nexto, Scenee) {
    let img15 = document.createElement('img');
    img15.src = "Black.jpg";
    img15.addEventListener("load", () => {
        ctx.drawImage(img15, 1, 1, 1517, 853);
        ctx.font = "25px Comic Sans MS";
        ctx.fillStyle = `rgba(255, 255, 255, 1)`;
        ctx.textAlign = "left";
        ctx.fillText(name + Text, 400, 730);
        document.getElementById('button5').addEventListener('click', Next);

    });
    if (Nexts === Nexto) {
        currentScene = Scenee;
    }
}

setTimeout(() => {
    switchScene = true;
}, 5000);

function update() {
    switch (currentScene) {
        case 0:
            intro();
            break;
        case 1:
            Title();
            break;
        case 2:
            Start();
            break;
        case 3:
            Scene1();
            break;
        case 4:
            Scene2();
            break;
        case 5:
            Options();
            break;
        case 6:
            Scene3();
            break;
        case 7:
            Scene4();
            break;
        case 8:
            Scene5();
            break;

        //WhiteHouseScenes
        case 9:
            WhiteHouseScenes(": Whell Yeet", 10, 10);
            break;
        case 10:
            WhiteHouseScenes(": boka Yeet", 11, 11);
            break;
        case 11:
            WhiteHouseScenes(": ", 12, 12);
            break;
        case 12:
    //        WhiteHouseScenes(": boka Yeet", , );
            break;

        //SchoolKitScenes
        case 13:
            SkoolKitcScenes(": bojyka Yeet", 14, 14);
            break;
        case 14:
            SkoolKitcScenes(": bokeera Yeet", 15, 15);
            break;
        case 15:
            SkoolKitcScenes(": bo4wefeka Yeet", 16, 16);
            break;
        case 16:
    //        SkoolKitcScenes(": boka Yeet", , );
            break;

        //HomeScenes
        case 17:
            HomeKitScenes(": bokhrthrta Yeet", 18, 18);
            break;
        case 18:
            HomeKitScenes(": boete4wgfka Yeet", 19, 19);
            break;
        case 19:
            HomeKitScenes(": bohrhgergeka Yeet", 20, 20);
            break;
        case 20:
         //   HomeKitScenes(": boka Yeet", , );
            break;

        //RestarauntScenes
        case 21:
            RestScenes(": boka Yeet", 7, 10);
            break;
        case 22:
            RestScenes(": boka Yeet", 7, 10);
            break;
        case 23:
            RestScenes(": boka Yeet", 7, 10);
            break;
        case 24:
            RestScenes(": boka Yeet", 7, 10);
            break;
        case 25:
            RestScenes(": boka Yeet", 7, 10);
            break;

       //ParkScenes
        case 26:
            ThemeScenes(": boka Yeet", 7, 10);
            break;
        case 27:
            ThemeScenes(": boka Yeet", 7, 10);
            break;
        case 28:
            ThemeScenes(": boka Yeet", 7, 10);
            break;
        case 29:
            ThemeScenes(": boka Yeet", 7, 10);
            break;
        case 30:
            ThemeScenes(": boka Yeet", 7, 10);
            break;

        //Good End
        case 31:
            GoodEndScenes(": boka Yeet", 7, 10);
            break;
        case 32:
            GoodEndScenes(": boka Yeet", 7, 10);
            break;
        case 33:
            GoodEndScenes(": boka Yeet", 7, 10);
            break;

        //Bad End

        case 34:
            EndScenes(": boka Yeet", 7, 10);
            break;
        case 35:
            EndScenes(": boka Yeet", 7, 10);
            break;
        case 36:
            EndScenes(": boka Yeet", 7, 10);
            break;


        default:
            break;
    }
    console.log(currentScene);
    requestAnimationFrame(update);
}
update();