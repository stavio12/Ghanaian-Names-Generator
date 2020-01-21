document.querySelector('#generateGhanaian-names').addEventListener('submit', generator);


function generator(e){
    e.preventDefault();
const day = document.querySelector('#days').value,
  genre = document.querySelector('#genre').value,
  tribe = document.querySelector('#tribe').value,
  amount = document.querySelector('#quantity').value;

  let url = 'https://testapi.io/api/hello/name?';

  if (day !== ''){

    url += `Day=${day}&`
}

if (tribe !== ''){

    url += `Tribe=${tribe}&`
}

if (genre !== ''){

    url += `Gender=${genre}&`
}


if (amount !== ''){

    url += `amount=${amount}&`
}

  fetch(url)
 .then(function(response){
     return response.json();
 })
 .then(function(names){

    let html = ` <h2> Generated Names </h2>`

    html +='<ul class="list">'

    names.forEach( function (name){ 
       html += `
       <li>${name.Name } <li>` 
    })

  html += '</ul>'

  document.querySelector('#result').innerHTML = html
   console.log(names)
 })

} 