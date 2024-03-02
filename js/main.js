

// $(window).scroll(function{}{
//     var top = $(this). scrollTop();
//     console.log(top);
//     if($(this).scrollTop() > 100){
//         $('.header-navigation').addClass('_sticky');
//     }else{
//         $('.header-navigation').removeClass('_sticky');
//     }
// });


// document.querySelector('.manu').addEventListener('click', function (){
//     var navList = document.getElementById('nav_list');
//     navList.classList.add('manu_active');
// });

// document.querySelector('.close').addEventListener('click', function (){
//     var navList = document.getElementById('nav_list');
//     navList.classList.remove('manu_active');
// });









function textInput(){
    var text = document.getElementById('text').value;
    var textError = document.getElementById('textError')
    console.log(text);
    if (text == '') {
        textError.innerHTML = 'um... yea, you have to write something to send tis form';
        return false;
    } else if (text.length < 5) {
        textError.innerHTML = 'Minimum 5 characters are required.';
        return false;
    } else {
        textError.innerHTML = '';
        return true;
    }
}
document.getElementById('text').addEventListener('keyup', textInput)
document.getElementById('text').addEventListener('blur', textInput)


function subjectInput() {
    var subject = document.getElementById('subject').value;
    var subError = document.getElementById('subError');
    if (subject == '') {
        subError.innerHTML = 'come on, you have a subject, dont you?.';
        return false;
    } else if (subject.length < 3) {
        subError.innerHTML = 'Minimum 3 characters are required.';
        return false;
    } else {
        subError.innerHTML = '';
        return true;
    }
}
document.getElementById('subject').addEventListener('keyup', subjectInput)
document.getElementById('subject').addEventListener('blur', subjectInput)


function nameInput() {
    var name = document.getElementById('name').value;
    var nameError = document.getElementById('nameError')
    if (name == '') {
        nameError.innerHTML = 'come on, you have a name, dont you?.';
        return false;
    } else if (name.length < 3) {
        nameError.innerHTML = 'Minimum 3 characters are required.';
        return false;
    } else {
        nameError.innerHTML = '';
        return true;
    }
}
document.getElementById('name').addEventListener('keyup', nameInput);
document.getElementById('name').addEventListener('blur', nameInput)



function emailInput() {
    var email = document.getElementById('email').value;
    var emailError = document.getElementById('emailError');
    if (email == '') {
        emailError.innerHTML = "no email, no message.";
        return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.innerHTML = "Email is not valid.";
        return false;

    } else {
        emailError.innerHTML = "";
        return true;
    }
}
document.getElementById('email').addEventListener('keyup', emailInput)
document.getElementById('email').addEventListener('blur', emailInput)

document.getElementById('form-submit').addEventListener('click', function(e) {
    e.preventDefault();
    var form = document.getElementById('form');
    var nameV = nameInput();
    var subjectV = subjectInput();
    var emailV = emailInput();
    var textV = textInput();

    var check = nameV && subjectV && emailV && textV;

    if (!check) {
        console.log('Pleae fill the form.')
        return;
    };
    form.reset();
    console.log('form submit succesfully.');
});