function Color(){
    const letter= "0123456789ABCDEF";
    let col="#";
    for(let i=0; i<6 ; i++){
        let temp = Math.floor(Math.random()*16);
        col = col+letter[temp]; 
    }
    return col;
}

document.getElementById("swiTch").addEventListener('click',function(event){
    event.preventDefault();
    const col = Color();
    document.getElementById("Container").classList.remove(...document.getElementById("Container").classList);
            
    document.getElementById("Container").style.backgroundColor = col;
    document.getElementById("Container").classList.add("poppins-regular");
})