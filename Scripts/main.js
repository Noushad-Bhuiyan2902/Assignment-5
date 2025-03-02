

function GotIt(){
    const Completed = parseInt(document.getElementById("Comp").innerText);
    const Pending = parseInt(document.getElementById("Pend").innerText);
    alert("Board is updated.");
    document.getElementById("Comp").innerText=Completed+1;
    document.getElementById("Pend").innerText=Pending-1;
    if(Pending-1===0){
        alert("Congratulations!!! You have completed all the tasks.");
    }
    return;
}

function WriteOut(id){

    const Task = document.getElementById(id).innerText;
    const p = document.createElement("p");
    const T = new Date();

    let currentHour = T.getHours();
    let amPm = (currentHour>=12) ? "PM" : "AM"
    if(currentHour>12)
    {
        currentHour=currentHour%12;
    }

    p.innerHTML = `
    You have completed <span class="font-bold">${Task}</span> at ${currentHour}:${T.getMinutes()}:${T.getUTCSeconds()} ${amPm}.
    `
    const container = document.getElementById("logContainer");
    container.appendChild(p);
}


document.getElementById("Inc-1").addEventListener('click',function(event){
    event.preventDefault();
    GotIt();
    document.getElementById("Inc-1").disabled=true;
    WriteOut("taskA");
})
document.getElementById("Inc-2").addEventListener('click',function(event){
    event.preventDefault();
    GotIt();
    document.getElementById("Inc-2").disabled=true;
    WriteOut("taskB");
})
document.getElementById("Inc-3").addEventListener('click',function(event){
    event.preventDefault();
    GotIt();
    document.getElementById("Inc-3").disabled=true;
    WriteOut("taskC");
})
document.getElementById("Inc-4").addEventListener('click',function(event){
    event.preventDefault();
    GotIt();
    document.getElementById("Inc-4").disabled=true;
    WriteOut("taskD");
})
document.getElementById("Inc-5").addEventListener('click',function(event){
    event.preventDefault();
    GotIt();
    document.getElementById("Inc-5").disabled=true;
    WriteOut("taskE");
})
document.getElementById("Inc-6").addEventListener('click',function(event){
    event.preventDefault();
    GotIt();
    document.getElementById("Inc-6").disabled=true;
    WriteOut("taskF");
})