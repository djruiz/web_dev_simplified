//get form elements
const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error')

//add event lsitener to form
form.addEventListener('submit', (e) => {
    let messages = [];
    if(name.value === '' || name.value == null){
        messages.push('Name is required field');
    } 
    if(password.value.length <= 6){
        messages.push("Password must be longer than 6 characters");
    }
    
    if(password.value.length >= 20){
        messages.push("Password must be shorter than 20 charactrers")
    }

    if(password.value === 'password'){
        messages.push('Password cannot equal password.')
    }
    console.log(messages);
    if(messages.length > 0){
        //prevent form from submitting
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    
})