function Time(seconds) {
    let days = Math.floor(seconds / 86400);
    seconds = seconds % 86400;
    let hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    let timeshower = '';
    timeshower += days + ' Day, ';
    timeshower += hours + ' Hours, ';
    timeshower += minutes + ' Minutes, ';
    timeshower += seconds + ' Seconds ';

    return timeshower;
}

let customersec = Number(prompt('Enter number which you want'));
alert('Time: ' + Time(customersec));

