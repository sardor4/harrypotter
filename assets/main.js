const cardsContent = document.querySelector(".cards__content"),
      btn = document.querySelectorAll('.category');
let html = '';
async function getData() {
  const response = await fetch('http://hp-api.herokuapp.com/api/characters');
  const data = await response.json();
  displayData(data);
}
  function displayData(data) {
    data.map(e => {
      html += `<div class="card__item">
                  <div class="left">
                    <img src="${e.image==""?e.gender=='male'?'assets/img/def-male.jpg':'assets/img/def-female.jpg':e.image}" class="card-image" alt="">
                    <p class="card__text card-name">${e.name}</p> 
                  </div>
                  <div class="right">
                    <p class="card__text card-alternate_names">Alternate names: <span class="card-span">${e.alternate_names.length==0?'no':e.alternate_names}</span></p>
                    <p class="card__text card-species">Species: <span class="card-span">${e.species}</span></p>
                    <p class="card__text card-gender">Gender: <span class="card-span">${e.gender}</span></p>
                    <p class="card__text card-house">House: <span class="card-span">${e.house==''?'no information available':e.house}</span></p>
                    <p class="card__text card-date">Date of birth: <span class="card-span">${e.dateOfBirth==''?'no information':e.dateOfBirth}</span></p>
                    <p class="card__text card-year">Year of birth: <span class="card-span">${e.yearOfBirth==''?'no information':e.yearOfBirth}</span></p>
                    <p class="card__text card-type">Type: <span class="card-span">${e.wizard===true?'wizard':'villain'}</span></p>
                    <p class="card__text card-ancestry">Ancestry: <span class="card-span">${e.ancestry==''?'no':e.ancestry}</span></p>
                    <p class="card__text card-eye">Eye colour: <span class="card-span">${e.eyeColour==''?'no information':e.eyeColour}</span></p> 
                    <p class="card__text card-hair">Hair colour: <span class="card-span">${e.hairColour==''?'no information':e.hairColour}</span></p>
                    <p class="card__text card-wand">Wand characteristics - wood: <span class="card-span">${e.wand.wood==''?'no':e.wand.wood}</span>; core: <span class="card-span">${e.wand.core==''?'no':e.wand.core}</span>; length: <span class="card-span">${e.wand.length==''?'no':e.wand.length}</span></p>
                    <p class="card__text card-patronus">Patronus: <span class="card-span"> ${e.patronus==''?'none':e.patronus}</span></p> 
                    <p class="card__text card-actor">Actor: <span class="card-span">${e.actor==''?'none':e.actor}</span></p> 
                    <p class="card__text card-alternate_actors">Alternate actors: <span class="card-span">${e.alternate_actors.length==0?'none':e.alternate_actors}</span></p> 
                  </div>
               </div>`
  })
  cardsContent.innerHTML = html;
  btn.forEach(e=>{
  let filter ='';
  e.addEventListener("click",function(){
      let filterData = data.filter(elem => elem.house == e.innerHTML);
      filterData.map(element =>{
        filter += `<div class="card__item">
                    <div class="left">
                      <img src="${element.image==""?element.gender=='male'?'assets/img/def-male.jpg':'assets/img/def-female.jpg':element.image}" class="card-image" alt="">
                      <p class="card__text card-name">${element.name}</p> 
                    </div>
                    <div class="right">
                      <p class="card__text card-alternate_names">Alternate names: <span class="card-span">${element.alternate_names.length==0?'no':element.alternate_names}</span></p>
                      <p class="card__text card-species">Species: <span class="card-span">${element.species}</span></p>
                      <p class="card__text card-gender">Gender: <span class="card-span">${element.gender}</span></p>
                      <p class="card__text card-house">House: <span class="card-span">${element.house==''?'no information available':element.house}</span></p>
                      <p class="card__text card-date">Date of birth: <span class="card-span">${element.dateOfBirth==''?'no information':element.dateOfBirth}</span></p>
                      <p class="card__text card-year">Year of birth: <span class="card-span">${element.yearOfBirth==''?'no information':element.yearOfBirth}</span></p>
                      <p class="card__text card-type">Type: <span class="card-span">${element.wizard===true?'wizard':'villain'}</span></p>
                      <p class="card__text card-ancestry">Ancestry: <span class="card-span">${element.ancestry==''?'no':element.ancestry}</span></p>
                      <p class="card__text card-eye">Eye colour: <span class="card-span">${element.eyeColour==''?'no information':element.eyeColour}</span></p> 
                      <p class="card__text card-hair">Hair colour: <span class="card-span">${element.hairColour==''?'no information':element.hairColour}</span></p>
                      <p class="card__text card-wand">Wand characteristics - wood: <span class="card-span">${element.wand.wood==''?'no':element.wand.wood}</span>; core: <span class="card-span">${element.wand.core==''?'no':element.wand.core}</span>; length: <span class="card-span">${element.wand.length==''?'no':element.wand.length}</span></p>
                      <p class="card__text card-patronus">Patronus: <span class="card-span"> ${element.patronus==''?'none':element.patronus}</span></p> 
                      <p class="card__text card-actor">Actor: <span class="card-span">${element.actor==''?'none':element.actor}</span></p> 
                      <p class="card__text card-alternate_actors">Alternate actors: <span class="card-span">${element.alternate_actors.length==0?'none':element.alternate_actors}</span></p> 
                    </div>
                  </div>`;
      });
      cardsContent.innerHTML = filter;
    });
  });
}

getData();