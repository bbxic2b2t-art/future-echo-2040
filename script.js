/* MATRIX BACKGROUND */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01MH2040";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];

for(let x=0;x<columns;x++){
    drops[x]=1;
}

function draw(){
    ctx.fillStyle="rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="#00eaff";
    ctx.font=fontSize+"px monospace";

    for(let i=0;i<drops.length;i++){
        const text=letters[Math.floor(Math.random()*letters.length)];
        ctx.fillText(text,i*fontSize,drops[i]*fontSize);

        if(drops[i]*fontSize>canvas.height && Math.random()>0.975)
            drops[i]=0;

        drops[i]++;
    }
}
setInterval(draw,33);


/* FORM LOGIC */

document.getElementById("futureForm")
.addEventListener("submit",function(e){

    e.preventDefault();

    const name=document.getElementById("name").value;
    const dob=new Date(document.getElementById("dob").value);

    const futureDate=new Date("April 22, 2040");

    let age=futureDate.getFullYear()-dob.getFullYear();

    document.getElementById("result").innerHTML=
    name + ", on 22 April 2040 you will be " + age + " years old.";

    /* play robotic voice only on 22 April 2040 */
    const today=new Date();

    if(today.toDateString()===futureDate.toDateString()){
        document.getElementById("robotVoice").play();
    }
});
