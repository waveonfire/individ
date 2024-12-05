const body = document.body;
body.style.margin = '0';
body.style.height = '100vh';
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.alignItems = 'center';
body.style.backgroundColor = '#121212';

const question = document.createElement('input');
question.type = "text";
question.id = "inputtext";
question.placeholder = "Введіть своє питання";
question.style.textAlign = 'center'
question.style.color = 'black'
question.style.borderRadius = '25px'
question.style.height = '50px'
question.style.width = '600px'
question.style.fontSize = '32px'
question.style.marginTop = '50px'
body.appendChild(question);

const spherebutton = document.createElement('spherebutton');
spherebutton.style.marginTop = '66px'
spherebutton.style.borderRadius = '50%'
spherebutton.style.height = '600px'
spherebutton.style.width = '600px'
spherebutton.style.position = 'relative'
spherebutton.style.zIndex = "1";  
spherebutton.style.width = '600px';
spherebutton.style.height = '600px'; 
spherebutton.style.border = "none";
spherebutton.style.borderRadius = "50%";
spherebutton.style.cursor = "pointer";

body.appendChild(spherebutton);

const magicsphere = document.createElement('magicsphere');
magicsphere.style.marginTop = '160px'
magicsphere.style.borderRadius = '50%'
magicsphere.style.height = '600px'
magicsphere.style.width = '600px'
magicsphere.style.position = 'relative'
magicsphere.style.alignItems = "center";
magicsphere.style.justifyContent = "center";
magicsphere.style.position = "absolute";
magicsphere.style.zIndex = "2"; 
magicsphere.style.pointerEvents = "none"; 

body.appendChild(magicsphere);

const spherephoto = document.createElement('img');
spherephoto.src = "space.jpg"
spherephoto.style.width = '100%';  
spherephoto.style.height = '100%'; 
spherephoto.style.objectFit = 'cover'; 
spherephoto.style.borderRadius = '50%';
spherephoto.style.position = 'absolute';
magicsphere.style.zIndex = "3"; 
spherephoto.style.top = '0';
spherephoto.style.left = '0';

magicsphere.appendChild(spherephoto);

const input = document.createElement('input');
input.type = "text";
input.readOnly = true;
input.style.position = 'absolute';
input.style.zIndex = "4"; 
input.style.width = "20%"; 
input.style.border = "none"; 
input.style.borderRadius = "5px"; 
input.style.position = 'absolute';
input.style.textAlign = "center"; 
input.style.margin = "0"; 
input.style.padding = "5px"; 
input.style.boxShadow = "none";
input.style.color = "white";
input.style.fontSize = "42px";
input.style.background = "transparent";
input.style.top = '42%'; 
input.style.left = '50%'; 
input.style.transform = 'translate(-50%, -50%)'; 
input.style.outline = 'none'; 

body.appendChild(input);


spherebutton.addEventListener("click", buttonfunc);

function buttonfunc() {
    const responses = [
        "Можливо",
        "Малоймовірно",
        "Не факт",
        "Швидше за все",
        "Безумовно",
        "Напевно ні",
        "Цілком можливо",
        "Сумнівно",
        "Скоріше за все ні",
        "Не виключено"
    ];

    const randomIndex = Math.floor(Math.random() * responses.length);
    const finalAnswer = responses[randomIndex];

    input.value = finalAnswer;
}