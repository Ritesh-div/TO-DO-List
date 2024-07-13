const inputbox= document.getElementById("input-box");
const tastcontainer= document.getElementById("task-container");

function addTask(){
    if(inputbox.value===''){
        alert("You most right something!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML= inputbox.value;
        tastcontainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    savedata()
}

tastcontainer.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        savedata() 
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
},false);

function savedata(){
    localStorage.setItem("data",tastcontainer.innerHTML)
}
function showtast(){
   tastcontainer.innerHTML=localStorage.getItem("data");
}
showtast();