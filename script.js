var makeSquares = function() 
{    
    let numberOfFigures = Number(document.getElementById('figures').value);
    for(let i = 0; i < numberOfFigures; i++){
        let size = Math.floor(Math.random() * (150) + 10);
        let posX = Math.floor(Math.random() * (window.innerWidth - 190));
        let posY = Math.floor(Math.random() * (window.innerHeight - 220));
        let divfigura = document.createElement("div");
        divfigura.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background-color: red;
            margin-left: ${posX}px;
            margin-top: ${posY}px;
            border: 2px solid;
            position: absolute;
            opacity: 0.9;
        `;
        document.querySelector(".space").append(divfigura);
        divfigura.addEventListener("dblclick", function(){
            divfigura.remove();
        });
        divfigura.addEventListener("click", function(){
            divfigura.style.backgroundColor = "yellow";
        });
    }
}

var makeTriangles = function() 
{
    let numberOfFigures = Number(document.getElementById('figures').value);
    for(let i = 0; i < numberOfFigures; i++){
        let size = Math.floor(Math.random() * (150) + 10);
        let posX = Math.floor(Math.random() * (window.innerWidth - 340));
        let posY = Math.floor(Math.random() * (window.innerHeight - 220));
        let divfigura = document.createElement("div");
        divfigura.style.cssText = `
            width: 0;
            height: 0;
            border-left: ${size}px solid transparent;
            border-right: ${size}px solid transparent;
            border-bottom: ${size}px solid blue;
            margin-left: ${posX}px;
            margin-top: ${posY}px;
            position: absolute;
            opacity: 0.9;
        `;
        document.querySelector(".space").append(divfigura);
        divfigura.addEventListener("dblclick", function(){
            divfigura.remove();
        });
        divfigura.addEventListener("click", function(){
            divfigura.style.borderBottomColor = "yellow";
        });
    }
}

var makeCircles = function() 
{
    let numberOfFigures = Number(document.getElementById('figures').value);
    for(let i = 0; i < numberOfFigures; i++){
        let size = Math.floor(Math.random() * (150) + 10);
        let posX = Math.floor(Math.random() * (window.innerWidth - 180));
        let posY = Math.floor(Math.random() * (window.innerHeight - 220));
        let divfigura = document.createElement("div");
        divfigura.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            background-color: green;
            margin-left: ${posX}px;
            margin-top: ${posY}px;
            border: 2px solid;
            border-radius: 50%;
            position: absolute;
            opacity: 0.9;
        `;
        document.querySelector(".space").append(divfigura);
        divfigura.addEventListener("dblclick", function(){
            divfigura.remove();
        });
        divfigura.addEventListener("click", function(){
            divfigura.style.backgroundColor = "yellow";
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {  
    document.querySelector(".button1").addEventListener("click", function(){
        makeSquares();
    });
    
    document.querySelector(".button2").addEventListener("click", function(){
        makeTriangles();
    });
    
    document.querySelector(".button3").addEventListener("click", function(){
        makeCircles();
    });
});

