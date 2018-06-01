const categories = {
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
let checkBox = false; //boolean to indicate terms conditions agreed
let categoriesDiv; //HTML div wrapping around category buttons
let formDiv; //HTML div wrapping around the form

//checks at lease one catergory is selected
function validateCat(){
  let validate = false;
  Object.keys(categories).forEach(function(key) {
    if(categories[key].selected) validate = true;
  });
  return validate;
}

//checks email is in the form string @ string . string
function validateEmail(email){
  var regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}

//toggles the terms and conditions selected
function toggleCheckBox(){
  checkBox = !checkBox;
}

//removes title, categories and form then adds thank you screen
function showThankYou(){
  categoriesDiv.innerHTML = '';
  formDiv.innerHTML = '';
  document.querySelector('.title').innerHTML = '';
  document.querySelector('.subtitle').innerHTML = '';
  document.querySelector('body').classList.add('green');
  document.querySelector('.thanks').innerHTML = `
  <p class="title successwhite">Success!<p>
  <p class="title successblack">Thank you for signing up to our newsletter<p>
  `;
}

// check validation and show warning signs
function submit(){
  const firstname = document.querySelector('.firstname').value;
  const lastname = document.querySelector('.lastname').value;
  const email = document.querySelector('.email').value;
  const warningValidateCat = document.querySelector('.warningValidateCat');
  const warningValidateFirstName = document.querySelector('.warningValidateFirstName');
  const warningValidateLastName = document.querySelector('.warningValidateLastName');
  const warningValidateEmail = document.querySelector('.warningValidateEmail');
  const warningValidateConfirm = document.querySelector('.warningValidateConfirm');
  warningValidateCat.innerHTML = !validateCat() ? 'Please select at least one category above': '';
  warningValidateFirstName.innerHTML = !firstname ? 'Please enter your first name': '';
  warningValidateLastName.innerHTML = !lastname ? 'Please enter your last name': '';
  warningValidateEmail.innerHTML = !validateEmail(email) ? 'Please enter your email address': '';
  warningValidateConfirm.innerHTML = !checkBox ? 'Please agree to the privacy policy and minimum age ': '';
  if(validateCat() && firstname && lastname && validateEmail(email) && checkBox) showThankYou();
}

function checkShowForm(){
  if(!showForm){
    formDiv = document.querySelector('.form');
    formDiv.innerHTML = `
      <p class="warningValidateCat warning"></p>
      <p>Join our newsletter so we can send you book recommendations</p>
      <form>
        <input type="text" class="firstname forminput" name="firstname" placeholder="First name *"><br>
        <p class="warningValidateFirstName warning"></p>
        <input type="text" class="lastname forminput" name="lastname" placeholder="Last name *"><br>
          <p class="warningValidateLastName warning"></p>
        <input type="text" class="email forminput" name="email" placeholder="Your email address *"><br>
          <p class="warningValidateEmail warning"></p>
      </form>
      <input type="submit" class="submit" onclick="submit()">
      <p><input type="checkbox" class="checkBox" onchange="toggleCheckBox()"> I agree to the <u>Privacy Policy</u> and I am over 16 years of age</p>
      <p class="warningValidateConfirm warning"></p>
    `;
    showForm = true;
  }
}

function init() {
  //create buttons for all catergories
  categoriesDiv = document.querySelector('.categories');
  Object.keys(categories).forEach(function(key) {
    categoriesDiv.innerHTML += '<button class="category ' + key + '"><input class="checkBox" type="checkbox">' + categories[key].label + '</button>';
  });

  //create click event listners for all buttons
  Object.keys(categories).forEach(function(key) {
    document.querySelector('.'+key).addEventListener('change', ()=>{
      categories[key].selected = !categories[key].selected;
      checkShowForm();
    });
  });
}

window.addEventListener('DOMContentLoaded', init);
