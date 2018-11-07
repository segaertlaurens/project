{
    const $canvas = document.querySelector('#canvas');
    const ctx = $canvas.getContext('2d');

    const init = () => {

        //head outer circle
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(100, 100, 100, 1 * Math.PI, 0.25 * Math.PI);
        ctx.lineTo(100, 100);
        ctx.fill();
        ctx.closePath();
        //head inner circle
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(100, 100, 79, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
        //head inner circle black
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(100, 100, 80, 0.25 * Math.PI, 1.5 * Math.PI);
        ctx.lineTo(100, 100);
        ctx.fill();
        ctx.closePath();
        //inner head
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(100, 100, 60, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
        //neck
        ctx.fillStyle = "black";
        ctx.fillRect(0, 100, 125, 125);
        //inner head white
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(100, 100, 60, 0.5 * Math.PI, 1.5 * Math.PI);
        ctx.fill();
        ctx.closePath();
        //eye 
        ctx.fillStyle  = "black";
        ctx.beginPath();
        ctx.arc(75,80,12,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();

        //tail part 2 
        //Moet boven deel 1 om op de achtergrond te liggen
        ctx.fillStyle ="black";
        ctx.fillRect(0,330,20,30);

        ctx.fillStyle ="white";
        ctx.fillRect(20,330,20,30);

        ctx.fillStyle ="black";
        ctx.fillRect(40,330,20,30);

        ctx.fillStyle  = "black";
        ctx.beginPath();
        ctx.arc(0,360,60,0,0.5*Math.PI);
        ctx.lineTo(0,360);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle  = "white";
        ctx.beginPath();
        ctx.arc(0,360,40,0,0.5*Math.PI);
        ctx.lineTo(0,360);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle  = "black";
        ctx.beginPath();
        ctx.arc(0,360,20,0,0.5*Math.PI);
        ctx.lineTo(0,360);
        ctx.fill();
        ctx.closePath();

        //tail part 1
        ctx.fillStyle  = "black";
        ctx.beginPath();
        ctx.arc(0,225,125,0,0.5*Math.PI);
        ctx.lineTo(0,225);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle  = "white";
        ctx.beginPath();
        ctx.arc(0,225,105,0,0.5*Math.PI);
        ctx.lineTo(0,225);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle  = "black";
        ctx.beginPath();
        ctx.arc(0,225,85,0,0.5*Math.PI);
        ctx.lineTo(0,225);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle  = "white";
        ctx.beginPath();
        ctx.arc(0,225,65,0,0.5*Math.PI);
        ctx.lineTo(0,225);
        ctx.fill();
        ctx.closePath();

        ctx.fillStyle  = "black";
        ctx.beginPath();
        ctx.arc(0,225,45,0,0.5*Math.PI);
        ctx.lineTo(0,225);
        ctx.fill();
        ctx.closePath();

        


        


    }
    init();
}