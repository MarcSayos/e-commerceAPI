const url = "https://e-commerceapi-production.up.railway.app/users";

async function verify(username) {
    person = (await axios.get(`${url}?username=${username}`)).data;
    return person !== undefined;
}

async function writeInDB(firstName, lastName, username, password, address, city, zip) {
    let person = {
        username, password, firstName, lastName, address, city, zip
    }
    await axios.post(url, person)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(username.value, password.value);
    location.href = "login.html";
}

const popAlert = (name) => {
    let field;
    let alertname;
    let fatherID;
    console.log("popAlert1");
    switch(name) {
        case "validationCustom01":
            field = "First Name is empty";
            alertname = "firstEmpty";
            fatherID = "fatherFirst";
            break;
        case "validationCustom02":
            field = "Last Name is empty";
            alertname = "lastEmpty";
            fatherID = "fatherLast";
            break;
        case "validationCustomUsername":
            field = "Username is empty";
            alertname = "usernameEmpty";
            fatherID = "fatherUser";
            break;
        case "validationCustomPassword":
            field = "Password is empty";
            alertname = "passwordEmpty";
            fatherID = "fatherPass";
            break;
        case "validationCustom03":
            field = "Address is empty";
            alertname = "addressEmpty";
            fatherID = "fatherAdr";
            break;
        case "validationCustom04":
            field = "City is empty";
            alertname = "cityEmpty";
            fatherID = "fatherCity";
            break;
        case "validationCustom05":
            field = "Zip is empty";
            alertname = "zipEmpty";
            fatherID = "fatherZip";
            break;
        case "invalidCheck":
            field = "You have to agree to the Terms and Conditions to proceed";
            alertname = "termsEmpty";
            fatherID = "fatherTerms";
            break;
        default:
          undefined
      }
    console.log(field)
    const newP = document.createElement("p");
    newP.innerHTML = field;
    newP.className = name + "Empty text-danger text-center";
    newP.id = alertname;
    newP.style.fontSize = "large"
    if (newP !== null && fatherID !== undefined) document.getElementById(fatherID).appendChild(newP);
}

function removeExistingAlerts() {
    let firstAlert = document.getElementById("firstEmpty");
    if (firstAlert !== null) document.getElementById("fatherFirst").removeChild(firstAlert);
    let lastAlert = document.getElementById("lastEmpty");
    if (lastAlert !== null) document.getElementById("fatherLast").removeChild(lastAlert);
    let userAlert = document.getElementById("usernameEmpty");
    if (userAlert !== null) document.getElementById("fatherUser").removeChild(userAlert);
    let passAlert = document.getElementById("passwordEmpty");
    if (passAlert !== null) document.getElementById("fatherPass").removeChild(passAlert);
    let addressAlert = document.getElementById("addressEmpty");
    if (addressAlert !== null) document.getElementById("fatherAdr").removeChild(addressAlert);
    let cityAlert = document.getElementById("cityEmpty");
    if (cityAlert !== null) document.getElementById("fatherCity").removeChild(cityAlert);
    let zipAlert = document.getElementById("zipEmpty");
    if (zipAlert !== null) document.getElementById("fatherZip").removeChild(zipAlert);
    let termsAlert = document.getElementById("termsEmpty");
    if (termsAlert !== null) document.getElementById("fatherTerms").removeChild(termsAlert);
}

async function handleSubmitSignUp(event) {
    event.preventDefault();
    console.log("HI")
    let firstName = document.getElementById("validationCustom01");
    let lastName  = document.getElementById("validationCustom02");
    let username  = document.getElementById("validationCustomUsername");
    let password  = document.getElementById("validationCustomPassword");
    let address   = document.getElementById("validationCustom03");
    let city      = document.getElementById("validationCustom04");
    let zip       = document.getElementById("validationCustom05");
    let termsConditions = document.getElementById("invalidCheck");
    
    removeExistingAlerts();
    console.log("Terms and conditions value: " + termsConditions.value)
    if (firstName.value === "" || lastName.value === "" || username.value === "" || 
    password.value === "" || address.value === "" || city.value === "" || 
    zip.value === "" || !termsConditions.checked) {
        if (firstName.value === "") popAlert("validationCustom01");
        if (lastName.value === "")  popAlert("validationCustom02");
        if (username.value === "")  popAlert("username");
        if (password.value === "")  popAlert("password");
        if (address.value === "")   popAlert("validationCustom03");
        if (city.value === "")      popAlert("validationCustom04");
        if (zip.value === "")       popAlert("validationCustom05");
        if (!termsConditions.checked) popAlert("invalidCheck");

    }
    else {
        if (await verify(username))
            await writeInDB(firstName.value, lastName.value, username.value, password.value, address.value, city.value, zip.value);
    }
}