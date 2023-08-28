const Validate = (event) =>{

    let error = 0;

    let firstName = document.signout.firstname;
    let lastName = document.signout.lastname;
    let receiptNumber = document.signout.receiptnumber;
    let phoneNumber = document.signout.phonenumber;
    let time = document.signout.time;
    let date = document.signout.date;
    let gender = document.signout.gender;
    let nin = document.signout.nin;


    let firstNameError = document.getElementById("firstnameerror");
    let lastNameError = document.getElementById("lastnameerror");
    let receiptNumberError = document.getElementById("receiptnumbererror");
    let phoneNumberError = document.getElementById("phonenumbererror");
    let timeError = document.getElementById("timeerror");
    let dateError = document.getElementById("dateerror");
    let genderError = document.getElementById("gendererror");
    let ninError = document.getElementById("ninerror");


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
    }else{
        lastName.style.border = "2px solid green";
        lastNameError.textContent = "";
        //focus cursor
        receiptnumber.focus();
        // return false; // stops form submission until you collect the input before - only for errors
    }

    const uniqueNumberRegex = /^BB-([0-9]{9,10})+$/;
    const personalCarRegex = /^PC-([0-9]{9,10})+$/;
    const truckCarRegex = /^TC-([0-9]{9,10})+$/;
    const coasterCarRegex = /^CC-([0-9]{9,10})+$/;
    const taxiCarRegex = /^TAXI-([0-9]{9,10})+$/;

    if(receiptNumber.value == ""){
        receiptNumber.style.border = "2px solid red";
        receiptNumberError.textContent = "Receipt numeber is required";
        //styling error
        receiptNumberError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        receiptNumber.focus();
        // return false;
        error++;
    }else if(!(receiptNumber.value.match(uniqueNumberRegex) || receiptNumber.value.match(personalCarRegex) || receiptNumber.value.match(truckCarRegex) || receiptNumber.value.match(coasterCarRegex) || receiptNumber.value.match(taxiCarRegex))){
        receiptNumber.style.border = "2px solid red";
        receiptNumberError.textContent = "Correct format: TC-000 for trucks / PC-000 for personalcars / TAX1-000 for taxis / CC-000 for coasters / BB-000 for bodas";
        //styling error
        receiptNumberError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        receiptNumber.focus();
        // return false;
        error++;
    }else{
        receiptNumber.style.border = "2px solid green";
        receiptNumberError.textContent = "";
        //focus cursor
        phoneNumber.focus();
    }

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
        time.focus();
    }

    if(time.value == ""){
        time.style.border = "2px solid red";
        timeError.textContent = "Time of arrival is required";
        //styling error
        timeError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        time.focus();
        // return false;
        error++;
    }else{
        time.style.border = "2px solid green";
        timeError.textContent = "";
        //focus cursor
        phoneNumber.focus();
    }

    if(date.value == ""){
        date.style.border = "2px solid red";
        dateError.textContent = "Date is required";
        //styling error
        dateError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        date.focus();
        // return false;
        error++;
    }else{
        date.style.border = "2px solid green";
        dateError.textContent = "";
        //focus cursor
        phoneNumber.focus();
    }

    if(gender.value == ""){
        gender.style.border = "2px solid red";
        genderError.textContent = "Gender field is required";
        //styling error
        genderError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        gender.focus();
        // return false;
        error++;
    }else{
        gender.style.border = "2px solid green";
        genderError.textContent = "";
        //focus cursor
        nin.focus();
    }

    const ninRegex = /^CF([a-zA-Z0-9]{12})+$/;
    const ninRegex2 = /^CM([a-zA-Z0-9]{12})+$/;

    if(!(ninRegex.test(nin.value) || ninRegex2.test(nin.value))){
        nin.style.border = "2px solid red";
        ninError.textContent = "Enter a valid NIN number";
        //styling error
        ninError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        nin.focus();
        error++;
    }else{
        nin.style.border = "2px solid green";
        ninError.textContent = "";
        ninError.style = "color: green; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
    }

    if(error > 0){
        event.preventDefault();
    }
}