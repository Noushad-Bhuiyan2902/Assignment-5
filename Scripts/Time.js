function DateTiming() {
    const Month = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const Weekday = [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
    ]
    const T = new Date();

    document.getElementById("DateTime").innerHTML = `
    <p class="text-xl font-medium">${Weekday[T.getDay()]},<br>${Month[T.getMonth()]} ${T.getDate()} ${T.getFullYear()}</p>
    `
    
}

DateTiming();  
