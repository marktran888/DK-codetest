const catergories = {
  chidrens: {label: 'Children\'s', selected: false},
  crafts: {label: 'Crafts & Hobbies', selected: false},
  education: {label: 'Education & Teachers', selected: false},
  food: {label: 'Food & Drink', selected: false},
  garden: {label: 'Gardening', selected: false},
  health: {label: 'Health & Fitness', selected: false},
  history: {label: 'History & Reference', selected: false},
  lego: {label: 'Lego&reg; Books', selected: false},
  marvel: {label: 'Marvel', selected: false},
  pregnancy: {label: 'Pregnancy & Parenting', selected: false},
  star: {label: 'Star Wars&trade;', selected: false},
  travel: {label: 'Travel', selected: false}
};

function init() {
  //create buttons for all catergories
  const catergoriesDiv = document.querySelector('.catergories');
  Object.keys(catergories).forEach(function(key) {
    catergoriesDiv.innerHTML += '<button class="' + key + '"><input class="checkBox" type="checkbox">' + catergories[key].label + '</button>';
  });

  //create click event listners for all buttons
  Object.keys(catergories).forEach(function(key) {
    document.querySelector('.'+key).addEventListener('change', ()=>{
      catergories[key].selected = !catergories[key].selected;
      console.log('cat: ', key,',', 'selected: ', catergories[key].selected);
    });
  });

}

window.addEventListener('DOMContentLoaded', init);
