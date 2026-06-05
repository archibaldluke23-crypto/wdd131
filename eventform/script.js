const selecter =  document.querySelector("#type");
const studentI =  document.querySelector("#studentI");
const studentIInput =  document.querySelector("#studentIInput");
const accessCode =  document.querySelector("#accessCode");
const accessCodeInput =  document.querySelector("#accessCodeInput");
const form =  document.querySelector("#form");
const output =  document.querySelector("#output");


function DisplayHiddenInputs()
{
    if (selecter.value === 'student')
    {
        studentI.hidden = false;
        studentI.required = true;
        accessCode.hidden = true;
        accessCode.required = false;
    }
    else if (selecter.value === 'guest')
    {
        studentI.hidden = true;
        studentI.required = false;
        accessCode.hidden = false;
        accessCode.required = true;
    }
    else
    {
        studentI.hidden = true;
        studentI.required = false;
        accessCode.hidden = true;
        accessCode.required = false;
    }
}
selecter.addEventListener("change", DisplayHiddenInputs);
DisplayHiddenInputs();

function isPastDate(value) {
    const today = new Date();
    const chosen = new Date(value);
    return chosen < today;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";
    if (studentI.required)
    {
        if (studentIInput.value.length < 8)
        {
            output.textContent = "Please enter a 9 digit student I number";
            return;
        }

    }
    else {
        if (accessCodeInput.value != 'EVENT131')
        {
            output.textContent = "Incorrect access code";
            return;
        }
    }
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const type = form.type.value;
    const date = form.date.value;

    if (isPastDate(date)) {
        output.textContent = "Please choose a later date.";
        return;
    }
    
     output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${type}</p>
    <p>${date}</p>
    `;

    form.reset();
    DisplayHiddenInputs();
})