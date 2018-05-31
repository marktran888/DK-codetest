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

let showForm = false;
let firstname;
let lastname;
let email;
let checkBox = false;

function validateEmail(email){
  var regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}

function validateCat(){
  let validate = false;
  Object.keys(catergories).forEach(function(key) {
    if(catergories[key].selected) validate = true;
  });
  return validate;
}

function submit(){
  firstname = document.querySelector('.firstname').value;
  lastname = document.querySelector('.lastname').value;
  email = document.querySelector('.email').value;
  console.log(firstname, lastname, validateEmail(email), checkBox, validateCat());
  if(validateCat() && firstname && lastname && validateEmail(email) && checkBox) console.log('ok');
}

function toggleCheckBox(){
  checkBox = !checkBox;
}

function checkShowForm(){
  if(!showForm){
    const formDiv = document.querySelector('.form');
    formDiv.innerHTML = `
      <p>Join out newsletter so we can send you book recommendations</p>
      <form>
        <input type="text" class="firstname" name="firstname" placeholder="First name *"><br>
        <input type="text" class="lastname" name="lastname" placeholder="Last name *"><br>
        <input type="text" class="email" name="email" placeholder="Your email address *"><br>
      </form>
      <input type="submit" onclick="submit()">
      <p><input type="checkbox" class="checkBox" onchange="toggleCheckBox()"> I agree to the Privacy Policy and I am over 16 years of age</p>
    `;
    showForm = true;
  }
}

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
      checkShowForm();
      console.log('cat: ', key,',', 'selected: ', catergories[key].selected);
    });
  });

}

window.addEventListener('DOMContentLoaded', init);
