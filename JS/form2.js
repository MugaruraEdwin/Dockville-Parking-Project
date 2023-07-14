const Validate = (event) =>{
    // for whole validation
    // event called up here is for submission
    let error = 0;
    //Picking input fields with their names
    // access document then name 
    let firstName = document.truckregister.firstname;
    let lastName = document.truckregister.lastname;
    let numberPlate = document.truckregister.numberplate;
    let phoneNumber = document.truckregister.phonenumber;
    let email = document.truckregister.email;
    let parkOption = document.truckregister.park;
    let time = document.truckregister.time;
    let carType = document.truckregister.type;
    let color = document.truckregister.color;

    //Picking the error fields
    let firstNameError = document.getElementById("firstnameerror");
    let lastNameError = document.getElementById("lastnameerror");
    let numberPlateError = document.getElementById("numberplateerror");
    let phoneNumberError = document.getElementById("phonenumbererror");
    let emailError = document.getElementById("emailerror");
    let parkError = document.getElementById("parkerror");
    let typeError = document.getElementById("typeerror")
    let colorError  = document.getElementById("colorError")


    //Validating name input
    //Validating for emptiness

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
        lastName.style.border = "1px solid red";
        lastNameError.textContent = "Last name is required";
        //styling error
        lastNameError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        lastName.focus();
    }else{
        lastName.style.border = "2px solid green";
        lastNameError.textContent = "";
        //focus cursor
        numberPlate.focus();
        // return false; // stops form submission until you collect the input before - only for errors
    }

    if(numberPlate.value == ""){
        numberPlate.style.border = "1px solid red";
        numberPlateError.textContent = "Number Plate is required";
        //styling error
        numberPlateError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        numberPlate.focus();
        // return false;
        error++;
    }else{
        numberPlate.style.border = "2px solid green";
        numberPlateError.textContent = "";
        //focus cursor
        color.focus();
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
        time.focus();
    }

    // Validating phone number

    let phoneRegex = /^\+256\d{9}$/;
    if(!phoneRegex.test(phoneNumber.value)){
        phoneNumber.style.border = "2px solid red";
        phoneNumberError.textContent = "Enter a valid number starting with +256";
        //styling error
        phoneNumberError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        phoneNumber.focus();
        // return false;
        error++;
    }else{
        phoneNumber.style.border = "2px solid green";
        phoneNumberError.textContent = "";
        //focus cursor
        parkOption.focus();
    }


    // validating select for emptiness

    if(parkOption.value == ""){
        parkOption.style.border = "2px solid red";
        parkError.textContent = "Select Parking option";
        //styling error
        parkError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        parkOption.focus();
        // return false;
        error++;
    }
    
    const uniqueNumberRegex = /^BB-([0-9]{3})+$/;
    const personalCarRegex = /^PC-([0-9]{3})+$/;
    const truckCarRegex = /^TC-([0-9]{3})+$/;
    const coasterCarRegex = /^CC-([0-9]{3})+$/;
    const taxiCarRegex = /^TAXI-([0-9]{3})+$/;
    //e.g. BB-001, BB-002
    

    // Will help you make sure that you don't recapture the same number captured earlier
    // if(!(carType.value.test(uniqueNumberRegex) || carType.value.match(personalCarRegex) || carType.value.match(truckCarRegex) || carType.value.match(coasterCarRegex) || carType.value.match(taxiCarRegex))){
    //     carType.style.border = "2px solid red";
    //     typeError.textContent = "Enter a valid unique number";
    //     //styling error
    //     typeError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
    //     //focus cursor
    //     carType.focus();
    //     // return false;
    //     error++;
    // }

    // All errors showing at the same time

    if(error > 0){
        event.preventDefault();// if the error is greater than zero please prevent default submit, don't submit
    }

    










}