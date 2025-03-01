

function GotIt(){
    const Completed = parseInt(document.getElementById("Comp").innerText);
    const Pending = parseInt(document.getElementById("Pend").innerText);
    alert("Board is updated.");
    document.getElementById("Comp").innerText=Completed+1;
    document.getElementById("Pend").innerText=Pending-1;
    if(Pending-1==0){
        alert("Congratulations!!! You have completed all the tasks.");
    }
}


document.getElementById("Inc-1").addEventListener('click',function(event){
    event.preventDefault();
    GotIt();
    document.getElementById("Inc-1").disabled=true;
})
document.getElementById("Inc-2").addEventListener('click',function(event){
    event.preventDefault();
    GotIt();
    document.getElementById("Inc-2").disabled=true;
})
document.getElementById("Inc-3").addEventListener('click',function(event){
    event.preventDefault();
    GotIt();
    document.getElementById("Inc-3").disabled=true;
})
document.getElementById("Inc-4").addEventListener('click',function(event){
    event.preventDefault();
    GotIt();
    document.getElementById("Inc-4").disabled=true;
})
document.getElementById("Inc-5").addEventListener('click',function(event){
    event.preventDefault();
    GotIt();
    document.getElementById("Inc-5").disabled=true;
})
document.getElementById("Inc-6").addEventListener('click',function(event){
    event.preventDefault();
    GotIt();
    document.getElementById("Inc-6").disabled=true;
})