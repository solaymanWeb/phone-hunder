

const loadData= ()=>{
    const searchBox = document.getElementById('search-box')
    const searchValue = searchBox.value;
    const error = document.getElementById('error')
    if(searchValue==''|| isNaN(searchValue)==false){
        error.innerText='Please! enter phone name';
    }else{
        fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(response =>response.json())
        .then(data =>loadApi(data.data))
    }
}


const products = document.getElementById('products')
const loadApi= (phones)=>{
for(const phone of phones){
    // console.log(phone)
    const div= document.createElement('div');
    div.classList.add('col-lg-4');
      div.innerHTML =`<div class="card" style="width: 18rem;">
      <img src="${phone.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`
    products.appendChild(div);


}
}