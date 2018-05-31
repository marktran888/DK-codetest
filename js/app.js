const catergories = {
  chidrens: {label: 'Children\'s'},
  crafts: {label: 'Crafts & Hobbies'},
  education: {label: 'Education & Teachers'},
  food: {label: 'Food & Drink'},
  garden: {label: 'Gardening'},
  health: {label: 'Health & Fitness'},
  history: {label: 'History & Reference'},
  lego: {label: 'Lego&reg; Books'},
  marvel: {label: 'Marvel'},
  pregnancy: {label: 'Pregnancy & Parenting'},
  star: {label: 'Star Wars&trade;'},
  travel: {label: 'Travel'}
};

function init() {
  //create buttons for all catergories
  const catergoriesDiv = document.querySelector('.catergories');
  Object.keys(catergories).forEach(function(key) {
    catergoriesDiv.innerHTML += '<button class="' + key + '"><input class="checkBox" type="checkbox">' + catergories[key].label + '</button>';
  });

  //create click event listners for all buttons
  Object.keys(catergories).forEach(function(key) {
    document.querySelector('.'+key).addEventListener('click', ()=>{
      console.log(key);
    });
    console.log('.'+key);
  });

}

window.addEventListener('DOMContentLoaded', init);
