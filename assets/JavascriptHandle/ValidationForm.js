// const $ = document.querySelector.bind(document);

// Open and Close Form Register
var formRegister = $('#form-register');
$('#register').addEventListener('click', function(){
    formRegister.style.display = 'flex';
});
$('#layer-opacity-form-1').addEventListener('click', function(){
    formRegister.style.display = 'none';
});

// Validation Form
function Validator(options) {
    var formElement = $(options.form);

    function validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        if (errorMessage) {
            errorElement.innerHTML = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerHTML = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }

    if (formElement) {
        options.rules.forEach(function(rule) {
            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                // Xử lý mỗi khi người dùng focus ra ngoài input
                inputElement.onblur = function() {
                   validate(inputElement, rule);
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector('.form-message');
                    errorElement.innerHTML = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }
}

Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : `Vui lòng nhập trường này!`
        }
    }
}

Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : `Trường này phải là email!`
        }
    }
}

Validator.minLength = function(selector, min) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : `Tối thiểu ${min} ký tự`;
        }
    }
}


Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            // message || `Giá trị nhập không chính xác!`
            // Tức là nếu không có giá trị cho message thì lấy vế bên kia.
            return value === getConfirmValue() ? undefined : message || `Giá trị nhập không chính xác!` 
        }
    }
} 


// Open and Close Form Login
var formLogin = $('#form-login');
$('#login').addEventListener('click', function(){
    formLogin.style.display = 'flex';
});
$('#layer-opacity-form-2').addEventListener('click', function(){
    formLogin.style.display = 'none';
});