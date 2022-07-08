window.onload = function(){
    console.log("onload")
    loadCards();
}
// is equivalent to 
// window.onload = () => {}

//document.getElementById("formulario").addEventListener("submit", getFormData);

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
        let url = location.href;
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

// const str = `asdf ${window}`;

// $().add(
//     `<div>
//         <img src=${asdf}>
//     </div>`
// )

const db = [
    {
        url: "https://cdn.motor1.com/images/mgl/WVJ9q/s3/lanzamiento-ferrari-488-pista.jpg",
        name: "Ferrari 488",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        url: "https://www.diariomotor.com/imagenes/picscache/1920x1600c/lamborghini-aventador-ultimae-031_1920x1600c.jpg",
        name: "Lamborghini Aventador",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        url: "https://i0.wp.com/asphalt9.info/wp-content/uploads/2019/08/Porsche-911-GT3-RS.jpg?fit=1062%2C588&ssl=1",
        name: "Porsche 911 GT3 RS",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        url: "https://fotografias.lasexta.com/clipping/cmsimages02/2018/12/09/E19424F5-9FEE-4DE1-B3CB-FB33A6CE5874/98.jpg?crop=1500,844,x0,y142&width=1900&height=1069&optimize=high&format=webply",
        name: "Mclaren 720s",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        url: "https://cdn-images.motor.es/image/m/800w/fotos-noticias/2020/07/mercedes-amg-gt-black-series-2021-202069154-1594802419_1.jpg",
        name: "Mercedes AMG GT Black Series",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        url: "https://www.autonocion.com/wp-content/uploads/2022/03/Aston-Martin-Vantage-Addarmor-6-1130x636.jpg",
        name: "Aston Martin Vantage",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        url: "https://i0.wp.com/asphalt9.info/wp-content/uploads/2018/07/Bugatti-Chiron.jpg?resize=750%2C415&ssl=1",
        name: "Bugatti Chiron",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        url: "https://cdn.motor1.com/images/mgl/WVJ9q/s3/lanzamiento-ferrari-488-pista.jpg",
        name: "Ferrari 488",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        url: "https://www.diariomotor.com/imagenes/picscache/1920x1600c/lamborghini-aventador-ultimae-031_1920x1600c.jpg",
        name: "Lamborghini Aventador",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        url: "https://i0.wp.com/asphalt9.info/wp-content/uploads/2019/08/Porsche-911-GT3-RS.jpg?fit=1062%2C588&ssl=1",
        name: "Porsche 911 GT3 RS",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        url: "https://fotografias.lasexta.com/clipping/cmsimages02/2018/12/09/E19424F5-9FEE-4DE1-B3CB-FB33A6CE5874/98.jpg?crop=1500,844,x0,y142&width=1900&height=1069&optimize=high&format=webply",
        name: "Mclaren 720s",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        url: "https://cdn-images.motor.es/image/m/800w/fotos-noticias/2020/07/mercedes-amg-gt-black-series-2021-202069154-1594802419_1.jpg",
        name: "Mercedes AMG GT Black Series",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        url: "https://www.autonocion.com/wp-content/uploads/2022/03/Aston-Martin-Vantage-Addarmor-6-1130x636.jpg",
        name: "Aston Martin Vantage",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
        url: "https://i0.wp.com/asphalt9.info/wp-content/uploads/2018/07/Bugatti-Chiron.jpg?resize=750%2C415&ssl=1",
        name: "Bugatti Chiron",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
];


function loadCards() {
    let container = document.getElementById("row-wrapper");
    db.forEach(element => {
        let div = document.createElement('div');
        div.innerHTML = 
            `<div class="col">
                <div class="card h-100">
                    <img src="${element.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">${element.desc}</p>
                        <div class="col-12 px-2 position-sticky bottom-0">
                            <form class="row mx-0 px-0 justify-content-around">
                                <button type="button" onclick="minusClicked()" class="btn btn-danger card-actions">-</button>
                                <input type="number" min="0" placeholder="0" class="item-count w-75">
                                <button type="button" onclick="plusClicked()" class="btn btn-success card-actions">+</button>
                                <button id="addToCart" type="submit" class="btn btn-primary btn-block my-2"> ADD TO CART </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>`;
        container.insertBefore(div,document.getElementById("aux"));
    });
}

//#region ButtonClicks
function minusClicked() {
    console.log(x);
}

function plusClicked() {

}

const x = JSON.stringify(db[0]);
//#endregion