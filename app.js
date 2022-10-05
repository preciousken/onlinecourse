

let firstName = document.querySelector(".firstName")
let lastName = document.querySelector(".lastName")
let birthDate = document.querySelector(".birthDate")
let gender = document.querySelector(".gender")
let address = document.querySelector(".address")
let email = document.querySelector(".email")
let country = document.querySelector(".country")
let postalCode = document.querySelector(".postalCode")
let state = document.querySelector(".state")
let mobileNumber = document.querySelector(".mobileNumber")
let message = document.querySelector(".tellUs")

// submit button
const submit = document.querySelector('.btn')

submit.addEventListener('click', (e) => {
 e.preventDefault()
 
 // const firstNameValue = firstName.value;
 // const lastName

 const toBackEnd = {
  firstName: firstName.value,
  lastName: lastName.value,
  birthDate: birthDate.value,
  gender: gender.value,
  address: address.value,
  email: email.value,
  country: country.value,
  postalCode: postalCode.value,
  state: state.value,
  mobileNumber: mobileNumber.value,
  message:message.value
 }

 if (firstName.value && lastName.value && birthDate.value && gender.value && address.value && email.value && country.value && postalCode.value && state.value && mobileNumber.value && message.value) {
  console.log('all filled')

  // send to the backend here

  // disable the button to send to backend
    submit.style.backgroundColor = "grey";
    submit.innerHTML = "sending";
  document.querySelector(".btn").disabled = true;
  
  // /////////
// http://localhost:3001/send
  // http://localhost:3001/receive
  // /////
try {
  const INFO = async () => {
    // axios.baseURL = "https://nodemailerautomation.herokuapp.com"
    await axios
      .post("https://nodemailerautomation.herokuapp.com/send",toBackEnd)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    submit.style.backgroundColor = "";
    submit.innerHTML = "Register Now";
    document.querySelector(".btn").disabled = false;
    window.location.href = 'https://preciousken.github.io/thankyoupage/'

    
  };
  INFO();
} catch (error) {
  console.log(error);
}
 }else{
  console.log('some left overs')


  }
})