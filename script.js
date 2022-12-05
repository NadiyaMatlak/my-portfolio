// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

let fields = {};
document.addEventListener('DOMContentLoaded', function() {
    fields.name = document.getElementById('name');
    fields.email = document.getElementById('email');
    fields.phone = document.getElementById('phone');
    fields.comment = document.getElementById('comment');
    fields.contactMe = document.getElementById('contactMe')
})
function isNotEmpty(value) {
    if (value === null || typeof value === 'undefined') return false;
    return (value.length > 0);
}
function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
}
function isEmail(email) {
    let regex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return regex.test(String(email).toLocaleLowerCase());
    }
    function isValid() {
        let valid = true;

        valid &= fieldValidation(fields.name, isNotEmpty);
        valid &= fieldValidation(fields.email, isEmail);
        valid &= fieldValidation(fields.phone, isNumber);
        valid &= fieldValidation(fields.comment, isNotEmpty);
         return valid;
    }
    class User {
        constructor(name, email, phone, comment) {
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.comment = comment;
        }
    }
    function contactToMe() {
        if (isValid(contactMe.addEventListener('click'))) {
           Email.send({
            to: 'nadiyamatlak@gmail.com'
           })
        alert('Mail has been sent');
    }
}

