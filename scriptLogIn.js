
const popAlert = (name) => {
    console.log(name, " is empty")
    const newP = document.createElement("p");
    newP.innerHTML = name + " is empty";
    newP.className = name + "Empty text-danger text-center";
    newP.id = name + "Empty";
    newP.style.fontSize = "large"
    document.getElementById("emptyContainer").appendChild(newP);
}

function handleSubmit(event) {
    event.preventDefault();
    console.log("HI")
    let username = document.getElementById("validationCustomUsername");
    let password = document.getElementById("validationCustomPassword");
    //
    let userAlert = document.getElementById("usernameEmpty");
    if (userAlert !== null) document.getElementById("emptyContainer").removeChild(userAlert);
    let passAlert = document.getElementById("passwordEmpty");
    if (passAlert !== null) document.getElementById("emptyContainer").removeChild(passAlert);
    //
    if (username.value !== "" && password.value !== "") {
        console.log(username.value, password.value);
        location.href = "index.html";
    }
    else {
        if (username.value === "") {
            popAlert("username");
        }
        if (password.value === "") {
            popAlert("password");
        }
    }
}
