
function init() {

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

  const catergoriesDiv = document.querySelector('.catergories');

  Object.keys(catergories).forEach(function(key) {
    catergoriesDiv.innerHTML += '<button><input class="checkBox" type="checkbox">' + catergories[key].label + '</button>';
  });

}

window.addEventListener('DOMContentLoaded', init);
