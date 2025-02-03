let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");

function calculateAge() {
    let birthdate = new Date(userInput.value);

    let dobYear = birthdate.getFullYear();
    let dobMonth = birthdate.getMonth() + 1;
    let dobDate = birthdate.getDate();

    let today = new Date();

    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth() + 1;
    let todayDate = today.getDate();

    let presentDate, presentMonth, presentYear;

    presentYear = todayYear - dobYear;
    if (todayMonth >= dobMonth) {
        presentMonth = todayMonth - dobMonth;
    } else {
        presentYear--;
        presentMonth = 12 + todayMonth - dobMonth;
    }

    if (todayDate >= dobDate) {
        presentDate = todayDate - dobDate;
    } else {
        presentMonth--;
        presentDate = getDayInMonth(todayYear, todayMonth) + todayDate - dobDate;
    }
    if (presentMonth < 0) {
        presentMonth = 11;
        presentYear--;
    }
    result.innerHTML = `You are <span>${presentYear}</span> years, <span>${presentMonth}</span> months and <span>${presentDate}</span> days old.`;
}

function getDayInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

// Add event listener to the button to call calculateAge function
document.querySelector('button').addEventListener('click', calculateAge);