const Validate = (event) =>{

    let error = 0;

    let firstName = document.batterysignout.firstname;
    let lastName = document.batterysignout.lastname;
    let receiptNumber = document.batterysignout.receiptnumber;
    let time = document.batterysignout.time;
    let date = document.batterysignout.date;

    let firstNameError = document.getElementById("firstnameerror");
    let lastNameError = document.getElementById("lastnameerror");
    let receiptNumberError = document.getElementById("receiptnumbererror");
    let timeError = document.getElementById("timeerror");
    let dateError = document.getElementById("dateerror");

    let nameRegex = /^[A-Z][a-zA-Z]*$/;

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
    }else if(!nameRegex.test(firstName.value)){
        firstName.style.border = "2px solid red";
        firstNameError.textContent = "First name must start with a capital letter and only include letters i.e. Yukon ";
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
    }else if(lastName.value.length < 2){
        lastName.style.border = "2px solid red";
        lastNameError.textContent = "Last name must be atleast 2 characters";
        //styling error
        lastNameError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        lastName.focus();
        // return false;
        error++;
    }else if(lastName.value.length > 15){
        lastName.style.border = "2px solid red";
        lastNameError.textContent = "Last name must be less than or equal to 15";
        //styling error
        lastNameError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        lastName.focus();
        // return false;
        error++;
    }else if(!nameRegex.test(lastName.value)){
        lastName.style.border = "2px solid red";
        lastNameError.textContent = "Last name must start with a capital letter and only include letters i.e. Yukon ";
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
        receiptNumber.focus();
        // return false; // stops form submission until you collect the input before - only for errors
    }

    const uniqueNumberRegex = /^BB-([0-9]{3})+$/;
    const personalCarRegex = /^PC-([0-9]{3})+$/;
    const truckCarRegex = /^TC-([0-9]{3})+$/;
    const coasterCarRegex = /^CC-([0-9]{3})+$/;
    const taxiCarRegex = /^TAXI-([0-9]{3})+$/;

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
    }
    else{
        receiptNumber.style.border = "2px solid green";
        receiptNumberError.textContent = "";
        //focus cursor
        time.focus();
    }


    if(time.value == ""){
        time.style.border = "2px solid red";
        timeError.textContent = "Time of return is required";
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
        date.focus();
    }

    if(date.value == ""){
        date.style.border = "2px solid red";
        dateError.textContent = "Date of return is required";
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
    //    gender.focus();
    }

    if(error > 0){
        event.preventDefault();
    }
}