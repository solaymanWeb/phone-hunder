
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
        showMore.innerHTML='';
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
  showMore.innerHTML='';
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
  // console.log(id)
  const url = `https://openapi.programming-hero.com/api/phone/${id}`
  fetch(url)
  .then(response => response.json())
  .then(data =>showMoreDisplay(data.data))

}

//show more details

const showMore= document.getElementById('show-more')
const showMoreDisplay = (data) =>{
// console.log(data)
products.innerHTML='';
const div = document.createElement('div')
div.classList.add('w-50')
div.classList.add('mx-auto')
    div.innerHTML= `<div class="card" style="width: 18rem;">
    <img src="${data.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Brand: ${data.brand}</h5>
      <h5 class="card-title"> model: ${data.name}</h5>
      <p class="card-title"> Release Date: ${data.releaseDate}.</p>
      <p class="card-title">Fingerprint: ${data.mainFeatures.sensors[0]}.</
      </p>
      <p class="card-title">storage: ${data.mainFeatures.memory}.</
      </p>
    </div>
  </div>`
  showMore.appendChild(div)

}

