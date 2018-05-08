import Library from './lib';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const audioThing = document.querySelector('#fun-auds');
const audioTng = document.querySelector('#funauds');
const audioTing = document.querySelector('#funny-joke');
const PlayBtn = document.querySelector('button1');
const OptionsBtn = document.querySelector('button2');
const output = document.getElementById('Songo');
const Quiet = document.querySelector('#Quiet');
const Normal = document.querySelector('#Normal');
const Loud = document.querySelector('#Loud');
const LOTTA = document.querySelector('#LOTTA');

let timer = 0;
let switchScene = false;
let switchScene2 = false;
let name = "SecretName";
let atac = "Thrust";
let item = "Trap Card";

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
function QuietM() {
    Quiet.play();
    Normal.pause();
    Loud.pause();
    LOTTA.pause();
}
function NormalM() {
    Quiet.pause();
    Normal.play();
    Loud.pause();
    LOTTA.pause();
}
function LoudM() {
    Quiet.pause();
    Normal.pause();
    Loud.play();
    LOTTA.pause();
}
function LOTTAM() {
    Quiet.pause();
    Normal.pause();
    Loud.pause();
    LOTTA.play();
}

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
function ChooseItem() {
    item = document.getElementById('Protecc').value;
    console.log(item);
}
function ChooseAction() {
    atac = document.getElementById('Attacc').value;
    console.log(atac);
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
function Yeets() {
    Nexts = 21;
}
function Not() {
    Nexts = 19;
}
function Run() {
    Nexts = 28;
}
function Protec() {
    Nexts = 30;
}
function Restart() {
    Nexts = 100;
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
        Quiet.play();
        document.getElementById('button17').style.display = 'none';
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
        document.getElementById('button9').style.display = 'none';
        document.getElementById('button10').style.display = 'none';
        document.getElementById('button11').style.display = 'none';
        document.getElementById('button12').style.display = 'none';
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
        document.getElementById('button9').style.display = 'block';
        document.getElementById('button10').style.display = 'block';
        document.getElementById('button11').style.display = 'block';
        document.getElementById('button12').style.display = 'block';
    });
    document.getElementById('button9').addEventListener('click', QuietM);
    document.getElementById('button10').addEventListener('click', NormalM);
    document.getElementById('button11').addEventListener('click', LoudM);
    document.getElementById('button12').addEventListener('click', LOTTAM);
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
        ctx.fillText("?: My name is " + name + ", and I am a high school garlic bread enthusiast.", 40, 730);
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
        ctx.fillText(name + ": Garlic Bread is my passion!", 40, 730);
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
        ctx.fillText(name + ": Bout time I made some garlic bread!", 40, 730);
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
        ctx.fillText(name + ": Where should I go?", 40, 730);
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
        ctx.fillText(name + ": Where should I go?", 40, 730);
        document.getElementById('button6').addEventListener('click', Choice1);
    });
    if (Nexts === 9) {
        currentScene = 9;
    }
}
function Gate(Text, Nexto, Scenee) {
    document.getElementById('button6').style.display = 'none';
    document.getElementById('button7').style.display = 'none';
    document.getElementById('button8').style.display = 'none';
    document.getElementById('button5').style.display = 'block';
    let img12 = document.createElement('img');
    img12.src = "gate.jpg";
    let img7 = document.createElement('img');
    img7.src = "Text.jpg";
    img12.addEventListener("load", () => {
        ctx.drawImage(img12, 1, 1, 1517, 853);
        ctx.drawImage(img7, 1, 639, 1517, 213);
        ctx.font = "25px Comic Sans MS";
        ctx.fillStyle = `rgba(255, 255, 255, 1)`;
        ctx.textAlign = "left";
        ctx.fillText(name + Text, 40, 730);
        document.getElementById('button5').addEventListener('click', Next);

    });
    if (Nexts === Nexto) {
        currentScene = Scenee;
    }
}
function WhiteHouseScenes(Speaker, Text, Nexto, Scenee, Show, show, yeet) {
    document.getElementById('button6').style.display = 'none';
    document.getElementById('button7').style.display = 'none';
    document.getElementById('button8').style.display = 'none';
    document.getElementById('button5').style.display = show;
    document.getElementById('button13').style.display = Show;
    document.getElementById('button14').style.display = Show;
    let img9 = document.createElement('img');
    img9.src = "WhiteHouse.jpg";
    let img7 = document.createElement('img');
    img7.src = "Text.jpg";
    let img19 = document.createElement('img');
    img19.src = "Trumpy- - Copy.png";
    img9.addEventListener("load", () => {
        ctx.drawImage(img9, 1, 1, 1517, 853);
        ctx.drawImage(img19, yeet, 220, 590, 421);
        ctx.drawImage(img7, 1, 639, 1517, 213);
        ctx.font = "25px Comic Sans MS";
        ctx.fillStyle = `rgba(255, 255, 255, 1)`;
        ctx.textAlign = "left";
        ctx.fillText(Speaker + Text, 40, 730);
        document.getElementById('button5').addEventListener('click', Next);
        document.getElementById('button13').addEventListener('click', Yeets);
        document.getElementById('button14').addEventListener('click', Not);
    });
    if (Nexts === Nexto) {
        currentScene = Scenee;
    } else if (Nexts === 19) {
        currentScene = 19;
    } else if (Nexts === 21) {
        currentScene = 21;
    }
}
function Golf(name, Text, Nexto, Scenee, yeet) {
    document.getElementById('button6').style.display = 'none';
    document.getElementById('button7').style.display = 'none';
    document.getElementById('button8').style.display = 'none';
    document.getElementById('button5').style.display = 'block';
    let img16 = document.createElement('img');
    img16.src = "golf.jpg";
    let img19 = document.createElement('img');
    img19.src = "Trumpy- - Copy.png";
    let img7 = document.createElement('img');
    img7.src = "Text.jpg";
    img16.addEventListener("load", () => {
        ctx.drawImage(img16, 1, 1, 1517, 853);
        ctx.drawImage(img19, yeet, 220, 590, 421);
        ctx.drawImage(img7, 1, 639, 1517, 213);
        ctx.font = "25px Comic Sans MS";
        ctx.fillStyle = `rgba(255, 255, 255, 1)`;
        ctx.textAlign = "left";
        ctx.fillText(name + Text, 40, 730);
        document.getElementById('button5').addEventListener('click', Next);
        document.getElementById('button15').addEventListener('click', Protec);
        document.getElementById('button16').addEventListener('click', Run);
    });
    if (Nexts === Nexto) {
        currentScene = Scenee;
    } else if (Nexts === 28) {
        currentScene = 28;
    } else if (Nexts === 30) {
        currentScene = 30;
    }
}
function EndTrump(Nexto, Scenee) {
    document.getElementById('button13').style.display = 'none';
    document.getElementById('button14').style.display = 'none';
    document.getElementById('button5').style.display = 'block';
    let img18 = document.createElement('img');
    img18.src = "maxresdefault.jpg";
    let img7 = document.createElement('img');
    img7.src = "Text.jpg";
    img18.addEventListener("load", () => {
        ctx.drawImage(img18, 1, 1, 1517, 853);
        ctx.drawImage(img7, 1, 639, 1517, 213);
        ctx.font = "25px Comic Sans MS";
        ctx.fillStyle = `rgba(255, 255, 255, 1)`;
        ctx.textAlign = "left";
        ctx.fillText("Donny: “Oh ok, I guess I will eat it all by myself, you should probably go before I build my wall and keep you out”", 40, 730);
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
        ctx.fillText(name + Text, 40, 730);
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
        ctx.fillText(name + Text, 40, 730);
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
        ctx.fillText(name + Text, 40, 730);
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
        ctx.fillText(name + Text, 40, 730);
        document.getElementById('button5').addEventListener('click', Next);

    });
    if (Nexts === Nexto) {
        currentScene = Scenee;
    }
}
function GoodEndScenes() {
    document.getElementById('button5').style.display = 'none';
    document.getElementById('button17').style.display = 'block';
    let img14 = document.createElement('img');
    img14.src = "White.jpg";
    img14.addEventListener("load", () => {
        ctx.drawImage(img14, 1, 1, 1517, 853);
        ctx.font = "50px Comic Sans MS";
        ctx.fillStyle = `rgba(1, 1, 1, 1)`;
        ctx.textAlign = "center";
        ctx.fillText("You Win All of The Garlic Bread", 400, 450);
        document.getElementById('button17').addEventListener('click', Restart);
    });
    if (Nexts === 100) {
        currentScene = 0;
    }
}
function EndScenes() {
    document.getElementById('button5').style.display = 'none';
    document.getElementById('button17').style.display = 'block';
    let img15 = document.createElement('img');
    img15.src = "Black.jpg";
    img15.addEventListener("load", () => {
        ctx.drawImage(img15, 1, 1, 1517, 853);
        ctx.font = "50px Comic Sans MS";
        ctx.fillStyle = `rgba(255, 255, 255, 1)`;
        ctx.textAlign = "left";
        ctx.fillText("You Lose", 400, 450);
        document.getElementById('button17').addEventListener('click', Restart);
    });
    if (Nexts === 100) {
        currentScene = 0;
    }
}
function ItemsAttack() {
    let img5 = document.createElement('img');
    img5.src = "Black.jpg";
    img5.addEventListener("load", () => {
        ctx.drawImage(img5, 1, 1, 1517, 853);
        ctx.font = "50px Comic Sans MS";
        ctx.fillStyle = `rgba(255, 255, 255, 1)`;
        ctx.textAlign = "center";
        ctx.fillText("How should I protecc and attack?", 770, 200);
        document.getElementById('button5').style.display = 'none';
        document.getElementById('button18').style.display = 'block';
        document.getElementById('Protecc').style.display = 'block';
        document.getElementById('Attacc').style.display = 'block';
    });
    document.getElementById('button18').addEventListener('click', ChooseItem);
    document.getElementById('button18').addEventListener('click', ChooseAction);
    document.getElementById('button18').addEventListener('click', Next);
    if (Nexts === 32) {
        currentScene = 32;
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
            Gate(": I head down the road to the White House, which just so happens to be just a ways from my school, and ring the gate.", 10, 10);
            break;
        case 10:
            Gate(": The gate opens and I head towards the back porch, where I can see smoke rising.", 11, 11);
            break;
        case 11:
            WhiteHouseScenes(name, ": Waiting there for me is my favorite garlic bread president, Donald Trump, who I call Donny.", 12, 12, 'none', 'block', 100);
            break;
        case 12:
           WhiteHouseScenes(name, ": Donny starts out our conversation with a pleasant hello, while looking as garlicky as ever.", 13, 13, 'none', 'block', 100);
            break;
        case 13:
            WhiteHouseScenes(name, ": “How’s it hangin,” I respond as I move myself as to see where the smoke is coming from.", 14, 14, 'none', 'block', 100);
            break;
        case 14:
            WhiteHouseScenes("Donny", ": “Just cookin up some of my famous Donny Dogs for our delicious dinner tonight.”", 15, 15, 'none', 'block', 200);
            break;
        case 15:
            WhiteHouseScenes(name, ": “I can’t wait” I respond and look to the table where everything has already been set up.", 16, 16, 'none', 'block', 100);
            break;
        case 16:
            WhiteHouseScenes(name, ": Donny brings over the Grilled Donny Dogs to the table and sits down", 17, 17, 'none', 'block', 300);
            break;
        case 17:
            WhiteHouseScenes("Donny", ": Lets Eat!", 18, 18, 'none', 'block', 300);
            break;
        case 18:
            WhiteHouseScenes("Donny", ": Lets Eat!", 18, 18, 'block', 'none', 300);
            break;
        case 19:
            EndTrump(20, 20);
            break;
        case 20:
            EndScenes();
            Starts = false;
            Nexts = 1;
            break;
        case 21:
            WhiteHouseScenes(name, ": We both enjoy a delicious meal and are quite stuffed", 22, 22, 'none', 'block', 100);
            break;
        case 22:
            WhiteHouseScenes(name, ": “Well now that we are done eating let's head out on a nice walk through the streets of my golf courses.”", 23, 23, 'none', 'block', 300);
            break;
        case 23:
            Golf(name, ": We’re out for around an hour and we enjoy a beautiful sun setting over the hills of Florida’s largest golf course.", 24, 24, 300);
            break;
        case 24:
            Golf(name, ": “I wish things could stay like this forever,” I say in a quiet tone.", 25, 25, 300);
            break;
        case 25:
            Golf(name, ": At that moment, two angry bad boiz jump out from the golf lake and run towards Donny.", 26, 26, -25);
            let img20 = document.createElement('img');
            img20.src = "cenoa.png";
            let img21 = document.createElement('img');
            img21.src = "baod.png";
            ctx.drawImage(img20, 400, 220, 590, 421);
            ctx.drawImage(img21, 1000, 220, 590, 421);
            break;
        case 26:
            Golf(name, ": “REEEEE!”", 27, 27);
            let img22 = document.createElement('img');
            img22.src = "cenoa.png";
            let img23 = document.createElement('img');
            img23.src = "baod.png";
            ctx.drawImage(img22, 400, 220, 590, 421);
            ctx.drawImage(img23, 1000, 220, 590, 421);
            break;
        case 27:
            Golf(name, ": “REEEEE!”", 27, 27);
            let img24 = document.createElement('img');
            img24.src = "cenoa.png";
            let img25 = document.createElement('img');
            img25.src = "baod.png";
            ctx.drawImage(img24, 400, 220, 590, 421);
            ctx.drawImage(img25, 1000, 220, 590, 421);
            document.getElementById('button5').style.display = 'none';
            document.getElementById('button15').style.display = 'block';
            document.getElementById('button16').style.display = 'block';

            break;
        case 28:
            EndTrump(29, 29);
            document.getElementById('button15').style.display = 'none';
            document.getElementById('button16').style.display = 'none';
            break;
        case 29:
            EndScenes();
            Starts = false;
            Nexts = 1;
            break;
        case 30:
            Golf(name, ": I jump in front of both assailants and prepare to protecc Donny!", 31, 31);
            let img26 = document.createElement('img');
            img26.src = "cenoa.png";
            let img27 = document.createElement('img');
            img27.src = "baod.png";
            ctx.drawImage(img26, 400, 220, 590, 421);
            ctx.drawImage(img27, 1000, 220, 590, 421);
            document.getElementById('button15').style.display = 'none';
            document.getElementById('button16').style.display = 'none';
            break;
        case 31:
            ItemsAttack();
            break;
        case 32:
            Golf(name, ": I pull out my " + item + " and block both bad boiz!", 33, 33);
            let img28 = document.createElement('img');
            img28.src = "cenoa.png";
            let img29 = document.createElement('img');
            img29.src = "baod.png";
            ctx.drawImage(img28, 400, 220, 590, 421);
            ctx.drawImage(img29, 1000, 220, 590, 421);
            document.getElementById('Protecc').style.display = 'none';
            document.getElementById('Attacc').style.display = 'none';
            document.getElementById('button18').style.display = 'none';
            document.getElementById('button5').style.display = 'block';
            break;
        case 33:
            Golf(name, ": I then " + atac + " with my " + item + " and knock both bad boiz out!", 34, 34);
            let img30 = document.createElement('img');
            img30.src = "cenoa.png";
            let img31 = document.createElement('img');
            img31.src = "baod.png";
            ctx.drawImage(img30, 400, 220, 590, 421);
            ctx.drawImage(img31, 1000, 220, 590, 421);
            document.getElementById('Protecc').style.display = 'none';
            document.getElementById('Attacc').style.display = 'none';
            document.getElementById('button18').style.display = 'none';
            break;
        case 34:
            Golf(name, ": “Ya Hoo” I say as I walk towards Donny, making a 🤙 with my hand.", 35, 35, 300);
            break;
        case 35:
            Golf("Donny", ": “Wow you saved me, have some of my garlic bread.”", 36, 36, 500);
            break;
        case 36:
            GoodEndScenes();
            Starts = false;
            Nexts = 1;
            break;

        default:
            break;
    }
    console.log(currentScene);
    requestAnimationFrame(update);
}
update();