

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
})