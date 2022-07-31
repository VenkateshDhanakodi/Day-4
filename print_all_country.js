let req = new XMLHttpRequest();

req.open("GET","https://restcountries.com/v2/all");
req.onload = ()=>{
  let a = JSON.parse(req.response);
    for(let i = 0; i<a.length; i++){
      console.log(a[i].name);
      console.log(a[i].region);
      console.log(a[i].subregion);
      console.log(a[i].population);
    };
};
req.send();