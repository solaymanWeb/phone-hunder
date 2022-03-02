

const loadData = ()=>{
  const searchValue = document.getElementById('search-box').value;
  searchData(searchValue); 
}
const searchData= (searchText)=>{
    // // const searchBox = document.getElementById('search-box')
    // // const searchValue = searchBox.value;
    const searchValue = document.getElementById('search-box').value;
    const error = document.getElementById('error')
    if(searchText==''|| isNaN(searchText)==false){
        error.innerText='Please! enter phone name';
        error.innerText='';

    }else{
      const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
      fetch(url)
      .then(response =>response.json())
      .then(data =>loadApi(data.data))
    }
    //     // fetch('https://openapi.programming-hero.com/api/phones?search=phone')
    // }

}

const products = document.getElementById('products')
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
        <button onclick='seeMore()' class='btn btn-success' >See more</button>
        
        
      </div>
    </div>`
    products.appendChild(div);

}
}



