const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const feedbackF = document.getElementById("feedbackF");
const feedbackE = document.getElementById("feedbackE");
const feedbackP = document.getElementById("feedbackP");

// check the length of the string
username.addEventListener("keyup", function () {
    const charObtained = username.value;
    if (charObtained.length < 2) {
        username.classList.add("is-invalid");
        feedbackF.classList.add("invalid-feedback");
        feedbackF.innerText = "Please give the username.";
    } else {
        username.classList.replace("is-invalid", "is-valid");
        feedbackF.classList.replace("invalid-feedback", "valid-feedback");
        feedbackF.innerText = "";
    }
});

// check the email form
email.addEventListener("keyup", function () {
    const charObtained = email.value;
    if (charObtained.match(/@/g) == null) {
        email.classList.add("is-invalid");
        feedbackE.classList.add("invalid-feedback");
        feedbackE.innerText = "Please verify the email .";
    } else {
        email.classList.replace("is-invalid", "is-valid");
        feedbackE.classList.replace("invalid-feedback", "valid-feedback");
        feedbackE.innerText = "";
    }
});

// check the length of the password
password.addEventListener("keyup", function () {
    const charObtained = password.value;
    if (charObtained.length < 8) {
        password.classList.add("is-invalid");
        feedbackP.classList.add("invalid-feedback");
        feedbackP.innerText = "Password must has 8 characters in minimum.";
    } else {
        password.classList.replace("is-invalid", "is-valid");
        feedbackP.classList.replace("invalid-feedback", "valid-feedback");
        feedbackP.innerText = "";
    }
});

// const userForm = document.getElementById("userForm");

// send infos to the server
// userForm.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const formdata = new FormData(e.target);

//     for (const key of formdata.keys()) {
//         console.log(key, formdata.get(key));
//     }

//     const jsonForm = convToJSON(formdata);

//     let request = new Request("http://localhost:3000/", {
//         headers: { "Content-type": "application/json" },
//         body: jsonForm,
//         method: "POST",
//     });

//     fetch(request)
//     .then((response) => { response.json() })
//     .catch((error) => { console.log(error) });
// });

// function convToJSON(formdata) {
//     const obj = {};
//     for (const key of formdata.keys()) {
//         obj[key] = formdata.get(key);
//     }
//     return JSON.stringify(obj);
// }
