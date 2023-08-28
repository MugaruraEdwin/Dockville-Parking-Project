const View = () =>{

    let password = document.loginform.password;
    let passwordchecker = document.loginform.check;

    if(passwordchecker.checked == true ){
        password.type = 'text';
    }else{
        password.type = 'password';
    }
}