const url = "https://e-commerceapi-production.up.railway.app/cars";
let carsArray = [];

// #region login
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

// #endregion



const load = cars => {
    if (!cars) return;

    var imgs = cars.img_url;
    var names = cars.name;
    var prices = cars.price;
    let div = document.createElement('div'); 
    div.className = "col";
    div.innerHTML = 
        `<div class="card h-100">
            <img src="${imgs}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${names}</h5>
                <h5 class="card-title text-success">${prices} € (Rebajas)</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="col-12 px-2 position-sticky bottom-0">
                    <form id="ammountOfEachCard" class="row mx-0 px-0 justify-content-around">
                    <div class="move d-flex justify-content-center"><button id="buttonMinus" type="button" class="btn btn-danger card-actions">-</button></div>
                    <input id="inputNum" type="number" min="0" placeholder="0" class="item-count">
                    <div class="move d-flex justify-content-center"><button id="buttonPlus" type="button" class="btn btn-success card-actions">+</button></div>
                        <p></p>
                        <button id="addToCart" type="submit" class="btn btn-primary btn-block my-2"> ADD TO CART </button>
                    </form>
                </div>
            </div>
        </div>`
        document.getElementById("row-wrapper").insertBefore(div, document.getElementById("aux"));
};

$(window).on("load",  async () => {
    try {
        carsArray = (await axios.get(`${url}`)).data;
        console.log("loading...");
        carsArray.forEach(element => {
            load( element );
        });
    } catch (error) {
        console.log(error)
    }

    $('#buttonMinus').on("click", async () => {
        
        console.log("minus");
    });

    // $('#send-search').on("click", async () => {
    //     var inputVal = $('#search').val();
    //     if(isNaN(inputVal)) load(carsArray.find(poke => poke.name === inputVal));
    //     else load(carsArray.find(poke => poke.num === parseInt(inputVal)));
    // });

    $('#buttonPlus').on("click", async () => {
        // if (id < 6) ++id;
        // else if (id === 6) id = 1;
        // load( carsArray.find(poke => poke.id === id) );
        console.log("plus");
    });
});