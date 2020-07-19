function Date1()
{
    let today = new Date();
    let formatDate = "Today's date is " + today.toDateString();
    let selectElement = document.getElementById('date');
    selectElement.innerHTML = formatDate;

    var oneDay = 1000*60*60*24;
    var target = 60*365*1000*60*60*24;
    var days = Math.ceil((target-today.getTime())/oneDay);
    let formatTarget = "There is " + days + " days until the deadline of the Sustainable Development Agenda!"
    document.getElementById('Countdown').innerHTML = formatTarget;
}

function goBack() {
    window.history.back();
}