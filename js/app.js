document.querySelector('#generateGhanaian-names').addEventListener('submit', generator);





function generator(e){
    e.preventDefault();
const day = document.getElementById('days').value;
const genre = document.querySelector('#genre').value;
const  tribe = document.querySelector('#tribe').value;
  let url = 'https://testapi.io/api/hello/name?';


  fetch(url)
 .then(function(response){
    return response.json();
 })
 .then(function(names){
    let html = ` <h2> Generated Names </h2>`

    html +='<ul class="list">'

    names.forEach( function (name){ 
        if(name.tribe === `${tribe}` && name.gender === `${genre}` && name.day === `${day}`){   
            html += `
            <li>${name.name} <li>` 
        }             
    })
    html += '</ul>'

    document.querySelector('#result').innerHTML = html
 

})
 .catch(function(error){
})
}


