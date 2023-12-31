const Validate = (event) => {
    let error = 0;


    let firstName = document.signup_form.firstname;
    let lastName = document.signup_form.lastname;
    let email = document.signup_form.email;
    let password = document.signup_form.password;
    let confirmPassword = document.signup_form.confirmpassword;
    let role = document.signup_form.role;
    // let picture = document.signup_form.picture;


    let firstNameError = document.getElementById("firstnameerror");
    let lastNameError = document.getElementById('lastnameerror');
    let emailError = document.getElementById("emailerror");
    let passwordError =document.getElementById("passworderror");
    let confirmPasswordError = document.getElementById("confirmpassworderror");
    let roleError = document.getElementById('roleerror');
    // let pictureError = document.getElementById('pictureerror');


    if(firstName.value == ""){
        firstName.style.border = "2px solid red";
        firstNameError.textContent = "First name is required";
        //styling error
        firstNameError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        firstName.focus();
        // return false;
        error++;
    }else if(firstName.value.length < 2){
        firstName.style.border = "2px solid red";
        firstNameError.textContent = "First name must be atleast 2 characters";
        //styling error
        firstNameError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        firstName.focus();
        // return false;
        error++;
    }else if(firstName.value.length > 15){
        firstName.style.border = "2px solid red";
        firstNameError.textContent = "First name must be less than or equal to 15";
        //styling error
        firstNameError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        firstName.focus();
        // return false;
        error++;
    }else{
        firstName.style.border = "2px solid green";
        firstNameError.textContent = "";
        //focus cursor
        lastName.focus();
        // return false; // stops form submission until you collect the input before - only for errors
    }


    if(lastName.value == ""){
        lastName.style.border = "2px solid red";
        lastNameError.textContent = "Last name is required";
        //styling error
        lastNameError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        lastName.focus();
        error++;
    }else if(lastName.value.length < 2){
        lastName.style.border = "2px solid red";
        lastNameError.textContent = "First name must be atleast 2 characters";
        //styling error
        lastNameError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        lastName.focus();
        // return false;
        error++;
    }else if(lastName.value.length > 15){
        lastName.style.border = "2px solid red";
        lastNameError.textContent = "First name must be less than or equal to 15";
        //styling error
        lastNameError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        lastName.focus();
        // return false;
        error++;
    }else{
        lastName.style.border = "2px solid green";
        lastNameError.textContent = "";
        //focus cursor
        email.focus();
        // return false; // stops form submission until you collect the input before - only for errors
    }

    let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if(!email.value.match(emailRegex)){
        email.style.border = "2px solid red";
        emailError.textContent = "Email address should be valid ";
        //styling error
        emailError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        email.focus();
        // return false;
        error++;
    }else{
        email.style.border = "2px solid green";
        emailError.textContent = "";
        //focus cursor
        role.focus();
    }

    if(role.value == ""){
        role.style.border = "2px solid red";
        roleError.textContent = "Manager role is required";
        //styling error
        roleError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        role.focus();
        error++;
    }else{
        role.style.border = "2px solid green";
        roleError.textContent = "";
        //focus cursor
        password.focus();
        // return false; // stops form submission until you collect the input before - only for errors
    }

    // if(picture.value == ""){
    //     picture.style.border = "2px solid red";
    //     pictureError.textContent = "Your picture is required";
    //     //styling error
    //     pictureError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
    //     //focus cursor
    //     picture.focus();
    //     // return false;
    //     error++;
    // }else{
    //     picture.style.border = "2px solid green";
    //     pictureError.textContent = "";
    //     //focus cursor
    //     password.focus();
    // }



    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*]).{8,}$/;
    if(password.value == ""){
        password.style.border = "2px solid red";
        passwordError.textContent = "Password is required";
        //styling error
        passwordError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        password.focus();
        error++;
    }else if(!passwordRegex.test(password.value)){
        password.style.border = "2px solid red";
        passwordError.textContent = "Password is weak. Please follow the NIST guidelines for password security.";
        //styling error
        passwordError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        password.focus();
        error++;
    }
    else{
        password.style.border = "2px solid green";
        passwordError.textContent = "";
        //focus cursor
        confirmPassword.focus();
        // return false; // stops form submission until you collect the input before - only for errors
    }

    if(confirmPassword.value == ""){
        confirmPassword.style.border = "2px solid red";
        confirmPasswordError.textContent = "Re-enter password to confirm";
        //styling error
        confirmPasswordError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        confirmPassword.focus();
        error++;
    }else if(password.value !== confirmPassword.value){
        confirmPassword.style.border = "2px solid red";
        confirmPasswordError.textContent = "Passwords do not match";
        //styling error
        confirmPasswordError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        confirmPassword.focus();
        error++;
    }else{
        confirmPassword.style.border = "2px solid green";
        confirmPasswordError.textContent = "";
        //focus cursor
        // confirmPassword.focus();
        // return false; // stops form submission until you collect the input before - only for errors
    }

    if(error > 0){
        event.preventDefault();
        // const removeClass = document.getElementsByClassName('red');

        // for (let i = 0; i < removeClass.length; i++) {
        //     removeClass[i].classList.remove('red');
        //   }

    }

    

}