$(document).ready(function () { 
    var $newPhone = $("#phone");
    $newPhone.mask("(00) 0 0000-0000");
});

function validateEmail(email) {
    if (email === "") {
        return false;
    }else if(email.match(/^([a-zA-z1-9-_.]{1,})+@+([a-zA-Z1-9.]{1,})$/) == null){
        return false;
    }
}

function validatePhone(phone){
    if(phone === ""){
        return false;
    }else if(phone.match(/^\([0-9]{2}\) [0-9]{1} [0-9]{4}-[0-9]{4}$/) == null){
        return false;
    }
}

$(function(){
    $("form").submit(function(){
        var error = false;
        var name = $("[name=nome]").val();
        var email = $("[name=email]").val();
        var phone = $("[name=telefone]").val();

        if (name === ""){
            error=true;
            $("[name=nome]").css("border", "1px solid red");
        }else{
            $("[name=nome]").css("border", "1px solid #4444BE");
        }
        if (validateEmail(email) === false){
            error=true;
            $("[name=email]").css("border", "1px solid red");
        }else{
            $("[name=email]").css("border", "1px solid #4444BE");
        }
        if (validatePhone(phone) === false){
            error=true;
            $("[name=telefone]").css("border", "1px solid red");
        }else{
            $("[name=telefone]").css("border", "1px solid #4444BE");
        }
        if(error === false){
            $(".box-sucess").fadeIn(function(){
                setTimeout(function(){
                    $(".box-sucess").fadeOut();
                },5000);
            });
            $(this)[0].reset();
        }
        return false;
    });
});