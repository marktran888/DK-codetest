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
let checkBox = false;

function validateCat(){
  let validate = false;
  Object.keys(catergories).forEach(function(key) {
    if(catergories[key].selected) validate = true;
  });
  return validate;
}

function validateEmail(email){
  var regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}

function toggleCheckBox(){
  checkBox = !checkBox;
}

function submit(){
  const firstname = document.querySelector('.firstname').value;
  const lastname = document.querySelector('.lastname').value;
  const email = document.querySelector('.email').value;
  const warningValidateCat = document.querySelector('.warningValidateCat');
  const warningValidateFirstName = document.querySelector('.warningValidateFirstName');
  const warningValidateLastName = document.querySelector('.warningValidateLastName');
  const warningValidateEmail = document.querySelector('.warningValidateEmail');
  const warningValidateConfirm = document.querySelector('.warningValidateConfirm');
  warningValidateCat.innerHTML = !validateCat() ? 'Please select at least one catergory above': '';
  warningValidateFirstName.innerHTML = !firstname ? 'Please enter your first name': '';
  warningValidateLastName.innerHTML = !lastname ? 'Please enter your last name': '';
  warningValidateEmail.innerHTML = !validateEmail(email) ? 'Please enter your email address': '';
  warningValidateConfirm.innerHTML = !checkBox ? 'Please agree to the privacy policy and minimum age ': '';
  if(validateCat() && firstname && lastname && validateEmail(email) && checkBox) console.log('THANK YOU');
}

function checkShowForm(){
  if(!showForm){
    const formDiv = document.querySelector('.form');
    formDiv.innerHTML = `
      <p class="warningValidateCat warning"></p>
      <p>Join out newsletter so we can send you book recommendations</p>
      <form>
        <input type="text" class="firstname" name="firstname" placeholder="First name *"><br>
        <p class="warningValidateFirstName warning"></p>
        <input type="text" class="lastname" name="lastname" placeholder="Last name *"><br>
          <p class="warningValidateLastName warning"></p>
        <input type="text" class="email" name="email" placeholder="Your email address *"><br>
          <p class="warningValidateEmail warning"></p>
      </form>
      <input type="submit" onclick="submit()">
      <p><input type="checkbox" class="checkBox" onchange="toggleCheckBox()"> I agree to the <u>Privacy Policy</u> and I am over 16 years of age</p>
      <p class="warningValidateConfirm warning"></p>
    `;
    showForm = true;
  }
}

function init() {
  //create buttons for all catergories
  const catergoriesDiv = document.querySelector('.catergories');
  Object.keys(catergories).forEach(function(key) {
    catergoriesDiv.innerHTML += '<button class="catergory ' + key + '"><input class="checkBox" type="checkbox">' + catergories[key].label + '</button>';
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
