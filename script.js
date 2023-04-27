let squre = document.getElementsByClassName("squre");
let newcolor = [];
let c1 = document.getElementById("c1");
let result = document.getElementById("r1");
let p1 = document.getElementById("playagain");
let p2 = document.getElementById("newcolor");

colorgenrator();
function colorgenrator(){
    let i;
    for(i=0;i<squre.length;i++)
    {
        newcolor.push(
            `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
        );       
    }
}

setcolor();
function setcolor(){
    let i;
    for(i=0;i<squre.length;i++)
    {
        squre[i].style.backgroundColor = newcolor[i];
        squre[i].setAttribute("data-color",newcolor[i]);
    }
}

var pickcolor = setcolormain();
function setcolormain(){
    let randomcolor = newcolor[Math.floor(Math.random()*squre.length)];
    c1.innerText = randomcolor;
    return randomcolor;
}

checkresult();
function checkresult(){
    let i,j;
    
    for(i=0;i<squre.length;i++)
    {
        squre[i].onclick = function(){
            

            
            var getcolor = this.getAttribute("data-color");       

            if(getcolor == pickcolor)
            {
                for(j=0;j<squre.length;j++)
                {
                    squre[j].style.opacity = "1";
                    // squre[i].style.backgroundcolor = pickcolor;  /* line not run so avoid */
                }
                p1.innerHTML = "Play Again";
                
                result.innerText = "Correct";

                
            }
            else{

                result.innerText = "Wrong";
                this.classList.add("fade");                    /*squre[i].style.opacity = "0";*/
            }
        }
    }
}

p1.onclick = function(){
    reset();
}

p2.onclick = function(){
    reset();
}

function reset(){
    window.location = location.href;
}