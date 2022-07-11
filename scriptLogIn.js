const url = "https://e-commerceapi-production.up.railway.app/users";

async function verify(username, password) {
    person = (await axios.get(`${url}?username=${username}`)).data;
    console.log("The person is:" + person[0])
    if (person[0] !== undefined) 
        return person[0].password === password; 
    else 
        return false;
}

const popAlert = (name) => {
    console.log(name, " is empty")
    const newP = document.createElement("p");
    if (name === "incorrect") newP.innerHTML = "Username or password incorrect"
    else newP.innerHTML = name + " is empty";
    newP.className = name + "Empty text-danger text-center";
    newP.id = name + "Empty";
    newP.style.fontSize = "large"
    document.getElementById("emptyContainer").appendChild(newP);
}

function removeExistingAlerts() {
    let userAlert = document.getElementById("usernameEmpty");
    if (userAlert !== null) document.getElementById("emptyContainer").removeChild(userAlert);
    let passAlert = document.getElementById("passwordEmpty");
    if (passAlert !== null) document.getElementById("emptyContainer").removeChild(passAlert);
    let incAlert = document.getElementById("incorrectEmpty");
    if (incAlert !== null) document.getElementById("emptyContainer").removeChild(incAlert);
}

async function handleSubmit(event) {
    event.preventDefault();
    let username = document.getElementById("validationCustomUsername");
    let password = document.getElementById("validationCustomPassword");
    
    removeExistingAlerts();
    
    if (username.value !== "" && password.value !== "") {
        console.log(username.value, password.value);
        if (await verify(username.value, password.value)) {
            console.log("verified");
            window.location.href = "index.html";
        } else {
            console.log("not verified");
            document.getElementById("validationCustomPassword").value = ""
            popAlert("incorrect");
        }
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
