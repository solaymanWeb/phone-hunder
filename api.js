
//search button click function
const loadData = ()=>{
  const searchValue = document.getElementById('search-box').value;
  searchData(searchValue); 
 
}
//get value form input box
const searchValue = document.getElementById('search-box')
//error condition and api load dynamicly
const searchData= (searchText)=>{
    const error = document.getElementById('error')
    if(searchText==''|| isNaN(searchText)==false){
        error.innerText='Please! enter phone name';
        products.innerHTML='';
    }
    else{
      const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
      fetch(url)
      .then(response =>response.json())
      .then(data =>loadApi(data.data))
      error.innerText='';
    }
}
//get display all mobile phone area
const products = document.getElementById('products')
//create element and dynamic show phone details
const loadApi= (phones)=>{
  products.innerHTML='';
  // console.log(phones)

for(const phone of phones){
    const div= document.createElement('div');
    div.classList.add('col-lg-4');
    div.classList.add('col');
    div.classList.add('pb-5');
      div.innerHTML =`<div class="card" style="width: 18rem;">
      <img src="${phone.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Brand: ${phone.brand}</h5>
        <h5 class="card-title"> model: ${phone.phone_name}</h5>
        <button onclick="seeMore('${phone.slug}')" class='btn btn-success' >See more</button>
        
        
      </div>
    </div>`
    products.appendChild(div);
}
searchValue.value='';
error.innerText='';
}

// see more button


const seeMore = (id)=>{
  console.log(id)
  fetch

}






















// false code 


// const searchOutput = document.getElementById('search-output')
// const loadData= (cards)=>{
//    // console.log(cards)
//    for(const card of cards){
//       // console.log(card)
//       const div = document.createElement('div')
//       div.classList.add('mb-5')
//       div.classList.add('col-lg-4')
//       div.innerHTML= `<div class="card" style="width: 18rem;">
//       <img src="${card.image}" class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">${card.suit}</h5>
//         <h4>${card.code}</h4>
//         <p class="card-text"></p>
//         <button onclick="seeMore('${card.code}')" class='btn btn-success'>See More</button>
//       </div>
//     </div>`

//     searchOutput.appendChild(div)
//    }
   
// }
// const seeMore =(code)=>{
//    // console.log(code)
//    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
//    .then(response => response.json())
//    .then(data => {
//       // console.log(data.cards)
//       const allCard= data.cards;
//       const singleCard = allCard.find(card => card.code === code)

//       const div = document.createElement('div')
//       searchOutput.innerHTML='';
//       div.classList.add('mb-5')
//       div.classList.add('col')
//       div.innerHTML = `<div class="card" style="width: 18rem;">
//       <img src="${singleCard.image}" class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title"> Brand : ${singleCard.suit}</h5>
//         <h4>${singleCard.code}</h4>
//         <p class="card-text"> value :${singleCard.value}</p>
//       </div>
//     </div>`
//       searchOutput.appendChild(div)
//       console.log(singleCard)
//    })
// }