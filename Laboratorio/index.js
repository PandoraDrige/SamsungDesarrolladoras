
function sendForm(name, surname, secondSurname, accountName, email, password) {
    const values = createDic(name, surname, secondSurname, accountName, email, password);
    console.log(password)
    validateAndSubmit(values);

}


function validateAndSubmit(values) {
    if (validate(values)) {
        document.getElementById("registerForm").addEventListener("submit", function (event) {
            event.preventDefault(); // Evitar el envío del formulario
            var errors = document.getElementById('errorLabel');
            errors.hidden = false;
            var form = event.target;
            var formData = new FormData(form);

            fetch(form.action, {
                method: form.method,
                body: formData
            })
                .then(response => response.text())
                .then(data => {
                    if (data.includes('Success')) {
                        window.location.href = "success.html";
                    } else {
                        errors.innerHTML = data;
                    }
                })
                .catch(function (error) {
                    console.error("Connection error:", error);
                });
        });
    }
}

function createDic(name, surname, secondSurname, accountName, email, password) {
    let dict = {};
    dict['name'] = name;
    dict['email'] = email;
    dict['surname'] = surname;
    dict['secondSurname'] = secondSurname;
    dict['accountName'] = accountName;
    dict['password'] = password;
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
                case 'name', 'surname', 'secondsurname':
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
    }
    return anyError;

}


function isEmpty(str, labelName) {
    if (!str || str.length === 0) {

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



function getUsersData() {
    var usersTable = document.getElementById('userTable');
    usersTable.hidden = false;
    usersTable.innerHTML = '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>';

    fetch('users_query.php')
        .then(response => response.text())
        .then(data => {
            usersTable.innerHTML = data;
        })
        .catch(error => {
            usersTable.innerHTML = 'Error al obtener los usuarios';
        });
}


