
// ------------- Type of Person - Dog or Cat? -------------

function typePerson(personType) {
    document.getElementById('theAnimal').innerHTML = personType;
}

// ------------- Active Radio from Button -------------
/*>>>>>>>> FIX <<<<<<<*/

function checkRadio(inputPersonType) {
    document.getElementById(inputPersonType).click();
}

// ------------- Radio Yes or No [to open or close the next form] -------------

function openForm() {
    if (document.getElementById('wantAnimalYes').checked) {
        document.getElementById('ifYes').style.display = 'block';
    }
}

function closeForm() {
    if (document.getElementById('wantAnimalNo').checked) {
        document.getElementById('ifYes').style.display = 'none';
    }
}

// ------------- Hide and Show Fields according to How Many animals -------------

function totalPetsChange(totalPets) {
    var petInputs = document.getElementsByClassName("petInput");

    for (var i = 0; i < 5; i++) {
        var showNameField = i < totalPets;

        if (showNameField == true) {

            if (petInputs[i].classList.contains("hideField")) {
                petInputs[i].classList.remove("hideField");
            }
        } else {
            if (!petInputs[i].classList.contains("hideField")) {
                petInputs[i].classList.add("hideField");
            }
        }
    }
}

// ------------- Alert for Send button -------------

function formSent() {
    var personFirstName = document.getElementById("firstName");
    alert("Thank you "+ personFirstName.value + "! We received your information!");
}

// ------------- formSent with pet names included -------------

// function formSent() {
//     var personFirstName = document.getElementById("firstName");
//
//     var petName = document.getElementsByClassName("petName");
//
//     for (var i = 0; i < 5; i++) {
//
//             alert(petName[i].value);
//         }
// }
//





