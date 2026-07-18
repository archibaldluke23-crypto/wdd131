const form = document.querySelector('form');
const forms = document.querySelectorAll('form');
const hiddenP = document.querySelector('#results p');
const questions = [
    {name: "q1", answer: "answer2"}, 
    {name: "q2", answer: "answer6"},
    {name: "q3", answer: "answer7"},
    {name: "q4", answer: "answer12"},
    {name: "q5", answer: "answer13"},
    {name: "q6", answer: "answer16"},
    {name: "q7", answer: "answer20"},
    {name: "q8", answer: "answer24"},
    {name: "q9", answer: "answer25"},
    {name: "q10", answer:"answer29"}
]
const imgs = document.querySelectorAll("#result-imgs img")
let movies = [
    {element: imgs[0], imgAlt: "the lord of the rings poster", correct: true},
    {element: imgs[1], imgAlt: "Dune 2 poster", correct: true},
    {element: imgs[2], imgAlt: "Harry Potter 3 poster", correct: true},
    {element: imgs[3], imgAlt: "Hobbit 2 poster", correct: true},
    {element: imgs[4], imgAlt: "Indiana Jones 3 poster", correct: true},
    {element: imgs[5], imgAlt: "Star Wars 6 poster", correct: true},
    {element: imgs[6], imgAlt: "Disneys Up Poster", correct: true},
    {element: imgs[7], imgAlt: "Wreck it Wralph Poster", correct: true},
    {element: imgs[8], imgAlt: "Back to the Future Poster", correct: true},
    {element: imgs[9], imgAlt: "The lego movie poster", correct: true}
]
let numAnswered = 0;
for (let i = 0; i < forms.length; i++)
{
    forms[i].addEventListener('submit', (event) => RevealAnswer(event, questions[i].name, questions[i].answer));
}
// form.addEventListener('submit', (event) => RevealAnswer(event, "answer2"));

function RevealAnswer(event, inputName, correctAnswer){
    event.preventDefault();
    const form = event.target;
    if (form.classList.contains('submitted')) 
        return;

    const selectedInput = form.querySelector('input[name="' + inputName + '"]:checked');
    if (selectedInput == null) 
        return;

    const submitButton = event.submitter;
    if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML = 'Submitted';
    }
    form.classList.add('submitted');

    numAnswered++;
    console.log(selectedInput.id);
    selectedInput.parentElement.parentElement.parentElement.lastElementChild.firstElementChild.classList.remove("hide");

    if (selectedInput.id == correctAnswer){
        selectedInput.parentElement.style.border = "5px solid green";
        selectedInput.nextElementSibling.innerHTML += " ---Correct!"
    }
    else {
        selectedInput.parentElement.style.border = "5px solid red";
        selectedInput.nextElementSibling.innerHTML += " ---Incorrect"
        const alt = selectedInput.parentElement.parentElement.parentElement.lastElementChild.firstElementChild.getAttribute("alt")
        moviesCorrectness(alt);

        let sibling1 = null;
        let sibling2 = null;
        if (selectedInput.parentElement.nextElementSibling.className == "box")
        {
            sibling1 = selectedInput.parentElement.nextElementSibling;
            if (selectedInput.parentElement.nextElementSibling.nextElementSibling != null)
            {
                if (selectedInput.parentElement.nextElementSibling.nextElementSibling.className == "box")
                {
                    if (sibling1 == null)
                        sibling1 = selectedInput.parentElement.nextElementSibling.nextElementSibling;
                    else
                        sibling2 = selectedInput.parentElement.nextElementSibling.nextElementSibling;
                }
            }
        }
        if (selectedInput.parentElement.previousElementSibling != null)
        {
            if (sibling1 == null)
                sibling1 = selectedInput.parentElement.previousElementSibling;
            else
                sibling2 = selectedInput.parentElement.previousElementSibling;
        
            if (selectedInput.parentElement.previousElementSibling.previousElementSibling != null)
                    sibling2 = selectedInput.parentElement.previousElementSibling.previousElementSibling;
        }
        if (sibling1.firstElementChild.id == correctAnswer)
            sibling1.style.border = "5px solid green";
        else if (sibling2.firstElementChild.id == correctAnswer)
            sibling2.style.border = "5px solid green";
    }
    if (numAnswered >= 10){
       ShowResults();
    }
}
function moviesCorrectness(alt){
    movies.forEach(movie => {
        if (movie.imgAlt == alt)
                movie.correct = false;
    });
}
function ShowResults(){
     hiddenP.classList.remove("hide");
    const incorrectAnswers = movies.filter(movie =>
        movie.correct == false
    );
    if (incorrectAnswers.length > 0)
    {
        hiddenP.innerHTML = "You missed " + incorrectAnswers.length + " questions. Rewatch these movies soon!";
        incorrectAnswers.forEach(answer => 
            answer.element.classList.remove("hide")
            
        );
    }
    else
        hiddenP.innerHTML = "You got every question correct! Good Job!";
}
