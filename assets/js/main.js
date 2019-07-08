function genderCall(val) {
    gender = val;
}

function clicked() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let age = document.getElementById('age').value;
    let slider = document.getElementById("slider").value;
    let feedback = document.getElementById("feedback").value;

    if (name === "") {
        alert("Name cannot be empty");
    } else if (email === "") {
        alert("Email cannot be empty");
    } else if (phone === "") {
        alert("Phone Number cannot be empty");
    } else if (age === "") {
        alert("Age cannot be empty");
    } else if (feedback === "") {
        alert("Feedback cannot be empty");
    } else {
        alert("FORM SUBMITTED SUCESSFULLY" +
            "\nName: " + name +
            "\nEmail: " + email +
            "\nPhone number: " + phone +
            "\nAge: " + age +
            "\nGender: " + gender +
            "\nRating: " + slider +
            "\nFeedback: " + feedback);
    }
}