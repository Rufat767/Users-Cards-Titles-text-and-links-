fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
  response.json().then((users) => {
    let data = "";
    for (let i = 0; i < users.length; i++) {
      data += `
                <div  class="card-body">
                <h5 class="card-title">${users[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${users[i].username}</h6>
                <p class="card-text">${users[i].email}</p>
                <button onclick="dataget(${users[i].address})" >Address</button>
                <button onclick="dataget(${users[i].address})" >company</button>

              </div>
                `;
    }

    document.querySelector("#card").innerHTML = data;
  });
});




// address.addEventListener("click", () => {
//   function data_get(address) {
//     address.addEventListener("click", () => {
//       fetch(
//         `https://jsonplaceholder.typicode.com/users/${users[i].address}`
//       ).then((response) => {
//         response.json().then((address) => {
//           document.querySelector(
//             "#address"
//           ).innerHTML = ` <button onclick="dataGetir(${users[i].address.street})">addres </button> 
//                   `;
//           document.querySelector("#address").innerHTML = dataget;
//         });
//       });
//     });
//   }
// });



function data_get(address) {
  address.addEventListener("click", () => {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${users[i].address}`
    ).then((response) => {
      response.json().then((address) => {
        document.querySelector(
          "#address"
        ).innerHTML = ` <button onclick="dataGetir(${users[i].address.street})">addres </button> 
                `;
        document.querySelector("#address").innerHTML = dataget;
      });
    });
  });
}

function data_get2() {
  adress.addEventListener("click", () => {
    fetch(
      `https://jsonplaceholder.typicode.com/users/${users[i].company.street}`
    ).then((response) => {
      response.json().then((company) => {
        let data_al = ``;
        for (let i = 0; i < company.length; i++) {
          data_al += `
                <button onclick="datagetr(${users[i].company.name})"> </button> 
                 <p class="card-text">${users[i].company.name}</p>
                   <p class="card-text">${users[i].company.catchPhrase}</p>
                   <p class="card-text">${users[i].company.bs}</p>
                        </a>
    
                `;
          document.querySelector("#company").innerHTML = data_get2;
        }
      });
    });
  });
}
