const url = "https://e-commerceapi-production.up.railway.app/";
let carsArray = [];

const load = cars => {
    if (!cars) return;

    var ids = cars.id;
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
                <div id="idAux${ids}" style="display: none;">${ids}</div>
                <div class="col-12 px-2 position-sticky bottom-0">
                    <form id="ammountOfEachCard" class="row mx-0 px-0 justify-content-around" onsubmit="return handleSubmit(event)">
                    <div class="move d-flex justify-content-center"><button id="buttonMinus" type="button" class="btn btn-danger card-actions" onclick="return restItems(event)">-</button></div>
                    <input id="inputNum" type="number" min="0" class="item-count" value=0>
                    <div class="move d-flex justify-content-center"><button id="buttonPlus" type="button" class="btn btn-success card-actions" onclick="return addItems(event)">+</button></div>
                    <p></p>
                    <button id="addToCart" type="submit" class="btn btn-primary btn-block my-2"> ADD TO CART </button>
                    </form>
                </div>
            </div>
        </div>`
        document.getElementById("row-wrapper").insertBefore(div, document.getElementById("aux"));
};

function addItems(event) {
    event.preventDefault();
    let id = event.path[4].children[3].innerHTML;
    document.getElementById("idAux" + id).nextSibling.nextSibling.childNodes[1][1].value -= -1;
}

function restItems(event) {
    event.preventDefault();
    let id = event.path[4].children[3].innerHTML;
    if (document.getElementById("idAux" + id).nextSibling.nextSibling.childNodes[1][1].value > 0)
        document.getElementById("idAux" + id).nextSibling.nextSibling.childNodes[1][1].value -= 1;
}

$(window).on("load",  async () => {
    try {
        carsArray = (await axios.get(`${url}cars`)).data;
        console.log("loading...");
        carsArray.forEach(element => {
            load( element );
        });
    } catch (error) {
        console.log(error)
    }
});

async function handleSubmit(event) {
    event.preventDefault();
    let id = event.path[2].children[3].innerHTML;
    let quantity = document.getElementById("idAux" + id).nextSibling.nextSibling.childNodes[1][1].value;
    if (quantity > 0) {
        comprasArray = (await axios.get(`${url}compras`)).data;
        car = (await axios.get(`${url}cars?id=${id}`)).data[0];

        let compra = {
            product_name: car.name,
            quantity,
            totalPrice: car.price * quantity
        }
        await axios.post(`${url}compras`, compra)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    
}

