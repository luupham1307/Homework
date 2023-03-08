var hour = 6;

var checkHour = (hour >= 6 && hour < 12) ? "Good morning"
    : (hour >= 12 && hour < 18) ? "Good afternoon"
        : (hour >= 18 && hour <= 24) ? "Good evening"
            : "Good night";

console.log(checkHour); 
