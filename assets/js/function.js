let contacts = [
    {
        name: "Hà Đức Kiên",
        phone: "0987654321",
        email: "hihi1709@gmail.com"
    },
    {
        name: "Bảo Nhân",
        phone: "0985947191",
        email: "baonhan@gmail.com"
    }
];

if (localStorage.getItem("contacts")){
    contacts = JSON.parse(localStorage.getItem("contacts"))
};

let cardsContainer = document.querySelector(".cards");
let createBtn = document.getElementById("create-btn");
let popupContainer = document.querySelector(".popup-container");
let popupMain = document.querySelector(".popup-main");

// open popup
createBtn.addEventListener("click", function(){
    popupContainer.classList.toggle('active');
});

// close popup
popupContainer.addEventListener('click', function(){
    document.getElementById("field-name").value = "";
    document.getElementById("field-phone").value = "";
    document.getElementById("field-email").value = "";
    popupContainer.classList.toggle('active');
});

// prevent main popup close
popupMain.addEventListener("click", function(event){
    event.stopPropagation();
});



function render(){
    let elements = contacts.map((item, index)=>{
        return `<div class="cards">
            <div class="card">
                <div class="card-item">
                    <img src="./assets/icon/img/person.svg" alt="">
                    <span id="name">${item.name}</span>
                </div>
                <div class="card-item">
                    <img src="./assets/icon/img/contact.svg" alt="">
                    <span id="phone">${item.phone}</span>
                </div>
                <div class="card-item">
                    <img src="./assets/icon/img/email.svg" alt="">
                    <span id="mail">${item.email}</span>
                </div>
                <div class="action">
                    <img id="edit" src="./assets/icon/img/edit.svg" alt="">
                    <img id="delete" onclick="Delete(${index})" src="./assets/icon/img/delete.svg" alt="">
                </div>
            </div>
        </div>`
    });
  
    cardsContainer.innerHTML = elements.join("");
    // console.log(cardsContainer.innerHTML);
}

function onCreate() {
    let Nname = document.getElementById("field-name").value;
    let Nphone = document.getElementById("field-phone").value;
    let Nemail = document.getElementById("field-email").value;
    console.log( Nname, Nphone, Nemail )
    contacts.push({
        name : Nname,
        phone : Nphone,
        email: Nemail
    });
    console.log(contacts);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    render();
    popupContainer.classList.toggle('active');
}
function Delete (index){

    console.log(index);
    contacts.splice(index, 1);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    render();
}
render();
