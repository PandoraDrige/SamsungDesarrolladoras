
function sendForm(name,surname, email) {
    reset();
    const values = createDic(name, surname, email);
    
    validateAndSubmit(values);

}


function validateAndSubmit(values) {
    if (validate(values)) {
        document.getElementById("registerForm").addEventListener("submit", function (event) {
            event.preventDefault(); // Evitar el envío del formulario

            var form = event.target;
            var formData = new FormData(form);

            fetch(form.action, {
                method: form.method,
                body: formData
            })
            .then(function (response) {
                if (response.ok) {
                    alert("La cuenta se ha creado correctamente");
                } else {
                    console.error("Something went wrong...");
                }
            })
            .catch(function (error) {
                console.error("Connection error:", error);
            });
        });
    } else {
        emptyFields();
        reset();
    }
}

function createDic(name, surname, email) {
    let dict = {};
    dict['name'] = name;
    dict['email'] = email;
    dict['surname'] = surname;
    return dict
}

function validate(values) {
    let anyError = false;
    for (var value in values) {
        const inputValue = values[value];
        fieldError = false;
        //Check if the field is empty
        if (!isEmpty(inputValue, value)) {
            //Check for each file its condition to pass validations
            switch (value) {
                case 'name','surname':
                    if (!validName(inputValue)) {
                        showErrorLabel(value, "El nombre solo puede contener letras");
                        anyError = fieldError = true;
                    }
                    break;
                case 'email':
                    if (!validEmail(inputValue)) {
                        showErrorLabel(value, "Email inválido");
                        anyError = fieldError = true;
                    }
                    break
            }
        } else {
            anyError = fieldError = true;
        }
        //If all validations went ok set ok class
        if (!fieldError) {
            setStyle(value, 'ok');
        } else {
            setStyle(value, 'error');
        }
    }

    return anyError;

}


function isEmpty(str, labelName) {
    if (!str || str.length === 0) {
        showEmptyLabel(labelName);
        return true;
    }
    return false;
}

function validName(name) {
    const re = /^[a-zA-Z]*$/;
    return name.match(re);
}

function validEmail(email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return email.match(re);
}

function showEmptyLabel(labelName) {
    let element = document.getElementById(labelName + "_errorLabel");
    element.innerText = 'Rellene este campo';
    element.hidden = false;
}
function showErrorLabel(labelName, errorText) {
    let element = document.getElementById(labelName + "_errorLabel");
    element.innerText = errorText;
    element.hidden = false;
}

function setStyle(elementName, style) {
    document.getElementById(elementName).classList.add(style);
    document.getElementById(elementName + '_' + style + 'Icon').hidden = false;
}

function reset() {
    // Hide all error labels
    let elements = document.getElementsByClassName("errorLabel");
    Array.from(elements).forEach(function (element) {
        element.hidden = true;
        element.innerText = '';
    });
    //Remove error class and correct class
    elements = document.getElementsByTagName("input");
    Array.from(elements).forEach(function (element) {
        element.classList.remove("error");
        element.classList.remove("ok");
    });

    //Hide all icons
    elements = document.getElementsByClassName("icon");
    Array.from(elements).forEach(function (element) {
        element.hidden = true;
    });
}

function emptyFields() {
    //Remove error class and correct class
    elements = document.getElementsByTagName("input");
    Array.from(elements).forEach(function (element) {
        element.value = '';
    });

}