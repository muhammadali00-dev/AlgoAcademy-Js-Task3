function Time(seconds) {
    let days = (seconds / (86400));
    seconds = seconds % 86400;
    let hours = (seconds / 3600);
    seconds = seconds % 3600;
    let minutes = (seconds / 60)
    seconds = seconds % 60




}

let customersec = Number(prompt('Enter number which you want'))
alert("General Time is:" + Time(customersec))

// 1gun = 86400 saniye
// 1saat = 3600 saniye
// 1deqiqe = 60saniye
