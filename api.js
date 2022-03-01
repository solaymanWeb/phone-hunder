

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
const loadApi= (phones)=>{
for(const phone of phones){
    console.log(phone)
    
}
}