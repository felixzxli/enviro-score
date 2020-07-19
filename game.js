let today = new Date();
var score = 0;
var arr = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

function Score1() {
    score = 100;
    let formatScore = "Score: " + score;
    document.getElementById('score').innerHTML = formatScore;
}

function ScoreButton(num, scoreChg) {
    while (arr[num] == 0) {
        score -= scoreChg;
        let formatScore = "Score: " + score;
        document.getElementById('score').innerHTML = formatScore;
        if (num == 0) {
            if (scoreChg == 0) { arr[num] = "gasoline/diesel"; }
            if (scoreChg == 1)
                [
                    arr[num] = "electric",
                    arr[2] = "exempt",
                ]
        }
        if (num == 9 || num == 13) {
            if (scoreChg == 0) { arr[num] = "Yes"; }
            if (scoreChg == 1) { arr[num] = "No"; }
        }
        if (num == 8) {
            if (scoreChg == 0) { arr[num] = "Yes"; }
            if (scoreChg == 2) { arr[num] = "No"; }
        }
        if (num == 10) {
            if (scoreChg == 0) { arr[num] = "4"; }
            if (scoreChg == 1) { arr[num] = "3"; }
            if (scoreChg == 2) { arr[num] = "2"; }
            if (scoreChg == 3) { arr[num] = "1"; }
        }
        if (num == 13) {
            if (scoreChg == 0) { arr[num] = "All"; }
            if (scoreChg == 1) { arr[num] = "Some"; }
            if (scoreChg == 2) { arr[num] = "None"; }
        }
        if (num == 16) {
            if (scoreChg == 0) { arr[num] = "Trade-in"; }
            if (scoreChg == 2) { arr[num] = "Proper e-waste recycler"; }
            if (scoreChg == 4) { arr[num] = "Garbage bin"; }
        }
        return false;
    }
    alert("You have already entered sufficient data for this question!");

}

function ScoreTyped(num, scorePrs, max) {
    while (arr[num] == 0) {
        var increase = document.querySelector("#String" + num).value;
        console.log(increase);
        if (isNaN(parseInt(increase, 10))) {
            alert("Enter a number");
            return false;
        }
        var i = parseInt(increase, 10);

        if (num == 7) {
            i = 4 - i;
        }
        arr[num] = i + "";

        i = i / scorePrs;
        if (i >= max) {
            i = max;
        }
        score = score - i;

        let formatScore = "Score: " + score;
        document.getElementById('score').innerHTML = formatScore;
        return false;
    }
    if (arr[num].localeCompare("exempt") == 0) {
        alert("You are exempt from this question because you drive an electric car")
    }
    else {
        alert("You have already entered sufficient data for this question!");
    }

}

function Download() {
    var content = "Your score on " + today.toDateString() + " is " + score + ".\n\n"
        + "Question 1: Which type of car do you drive?\n"
        + "Your answer is: " + arr[0] + "\n\n"
        + "Question 2: How many kilometers do you travel on public transport?\n"
        + "Your answer is: " + arr[1] + "\n\n"
        + "Question 3: How many kilometers do you drive in a private vehicle per year?\n"
        + "Your answer is: " + arr[2] + "\n\n"
        + "Question 4: On average, how many kilometers do you fly each year?\n"
        + "Your answer is: " + arr[3] + "\n\n"
        + "Question 5: How many times do you eat red meat per week?\n"
        + "Your answer is: " + arr[4] + "\n\n"
        + "Question 6: How often do you spend on food from restaurants and takeout per month?\n"
        + "Your answer is: " + arr[5] + "\n\n"
        + "Question 7: Apart from essential goods like groceries, how many times do you go shopping per month?\n"
        + "Your answer is: " + arr[6] + "\n\n"
        + "Question 8: On average, how often do you buy local produced food per week?\n"
        + "Your answer is: " + arr[7] + "\n\n"
        + "Question 9: Do you use reusable shopping bags?\n"
        + "Your answer is: " + arr[8] + "\n\n"
        + "Question 10: Do you use reusable water bottles?\n"
        + "Your answer is: " + arr[9] + "\n\n"
        + "Question 11: On a scale of 1 - 4, how intricate is the recycling system in your municipality?\n"
        + "Your answer is: " + arr[10] + "\n\n"
        + "Question 12: How long are your average showers in minutes?\n"
        + "Your answer is: " + arr[11] + "\n\n"
        + "Question 13: On average, how many times do you take a bath (fill the bathtub) per week?\n"
        + "Your answer is: " + arr[12] + "\n\n"
        + "Question 14: Do you regularly turn off your lights and appliances (instead of leaving them on)? \n"
        + "Your answer is: " + arr[13] + "\n\n"
        + "Question 15: Do you use LED lights at home? \n"
        + "Your answer is: " + arr[14] + "\n\n"
        + "Question 16: How many new electronic devices did you buy In the last 12 months (for example: mobile phones, TV, laptop, PC)? \n"
        + "Your answer is: " + arr[15] + "\n\n"
        + "Question 17: How do you get rid of old electronics (including phones, laptops, batteries, lightbulbs, etc.) \n"
        + "Your answer is: " + arr[16] + "\n\n";
    var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "Enviro-Score " + today.toDateString() + ".txt");
}