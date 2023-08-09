const Validate = (event) => {
    let error = 0;
    let price = 0;

    let firstName = document.batterysection.firstname;
    let lastName = document.batterysection.lastname;
    let phoneNumber = document.batterysection.phonenumber;
    let time = document.batterysection.time;
    let date = document.batterysection.date;
    let gender = document.batterysection.gender;
    let nin = document.batterysection.nin;
    let batterySize = document.batterysection.batterysize;
    let receiptNumber = document.batterysection.receiptnumber;
    let hireTime = document.batterysection.hire;

    let firstNameError = document.getElementById("firstnameerror");
    let lastNameError = document.getElementById("lastnameerror");
    let phoneNumberError = document.getElementById("phonenumbererror");
    let timeError = document.getElementById("timeerror");
    let dateError = document.getElementById("dateerror");
    let genderError = document.getElementById("gendererror");
    let ninError = document.getElementById("ninerror");
    let batterySizeError = document.getElementById("batterysizeerror");
    let receiptNumberError = document.getElementById("receiptnumbererror");
    let hireTimeError = document.getElementById("hireerror");
    let totalInput = document.getElementById("totalinput");


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
        phoneNumber.focus();
        // return false; // stops form submission until you collect the input before - only for errors
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
        date.focus();
    }


    if(date.value == ""){
        date.style.border = "2px solid red";
        dateError.textContent = "Select Parking option";
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
       gender.focus();
    }

    if(gender.value == ""){
        gender.style.border = "2px solid red";
        genderError.textContent = "Gender is required";
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
        
    }

    if(hireTime.value == ""){
        hireTime.style.border = "2px solid red";
        hireTimeError.textContent = "Hire Time is required";
        //styling error
        hireTimeError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        hireTime.focus();
        // return false;
        error++;
    }else{
        hireTime.style.border = "2px solid green";
        hireTimeError.textContent = "";
        //focus cursor
        batterySize.focus();
    }

    const batterySizeRegex = /\b\d{2,3}R\b/;

    if(!(batterySizeRegex.test(batterySize.value) )){
        batterySize.style.border = "2px solid red";
        batterySizeError.textContent = "Enter a valid batterysize i.e. 10R - 999R";
        //styling error
        batterySizeError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        batterySize.focus();
        error++;
    }else{
        batterySize.style.border = "2px solid green";
        batterySizeError.textContent = "";
        batterySizeError.style = "color: green; font-size:11px; font-family: Helevetica,Arial;";
           
    }

    if(batterySize.value.length < 4){

        let newSize = batterySize.value[0] + batterySize.value[1];

        if(newSize < 50 && hireTime.value == "week" ){
           price += 50000;
           price = price;
           totalInput.value = price;
        }else if(newSize < 50 && hireTime.value == "fortnight"){
           price += 70000;
           price = price;
           totalInput.value = price;
        }else if(newSize < 50 && hireTime.value == "month"){
           price += 90000;
           price = price;
           totalInput.value = price;
        }else if(newSize < 100 && hireTime.value == "week"){
           price += 100000;
           price = price;
           totalInput.value = price;
        }else if(newSize < 100 && hireTime.value == "fortnight"){
           price += 120000;
           price = price;
           totalInput.value = price;
        }else if(newSize < 100 && hireTime.value == "month"){
           price += 150000;
           price = price;
           totalInput.value = price;
        }
    }else if(batterySize.value.length = 4){
        let newSize = batterySize.value[0] + batterySize.value[1] + batterySize.value[2];

        if(newSize < 200 && hireTime.value == 'week'){
           price += 180000;
           price = price;
           totalInput.value = price;
        }else if(newSize < 200 && hireTime.value == 'fortnight'){
           price += 190000;
           price = price;
           totalInput.value = price;
        }else if(newSize < 200 && hireTime.value =='month'){
           price += 200000;
           price = price;
           totalInput.value = price;
        }else if(newSize < 400 && hireTime.value == 'week'){
           price += 300000;
           price = price;
           totalInput.value = price;
        }else if(newSize < 400 && hireTime.value=='fortnight'){
           price += 350000;
           price = price;
           totalInput.value = price;
        }else if(newSize < 400 && hireTime.value=='month'){
           price += 400000;
           price = price;
           totalInput.value = price;
        }else if(newSize < 600 && hireTime.value == 'week'){
           price += 500000;
           price = price;
           totalInput.value = price;
        }else if(newSize < 600 && hireTime.value=='fortnight'){
           price += 550000;
           price = price;
           totalInput.value = price;
        }else if(newSize < 600 && hireTime.value=='month'){
           price += 600000;
           price = price;
           totalInput.value = price;
        }else if(newSize < 800 && hireTime.value == 'week'){
           price += 700000;
           price = price;
           totalInput.value = price;
        }else if(newSize < 800 && hireTime.value=='fortnight'){
           price += 750000;
           price = price;
           totalInput.value = price;
        }else if(newSize < 800 && hireTime.value=='month'){
           price += 800000;
           price = price;
           totalInput.value = price;
        }else if(newSize < 1000 && hireTime.value == 'week'){
           price += 900000;
           price = price;
           totalInput.value = price;
        }else if(newSize < 1000 && hireTime.value=='fortnight'){
           price += 950000;
           price = price;
           totalInput.value = price;
        }else if(newSize < 1000 && hireTime.value=='month'){
           price += 1000000;
           price = price;
           totalInput.value = price;
        }
    }

    
    const batteryRegex = /^BAT-(\d{3})$/;

    if(receiptNumber.value == ""){
        receiptNumber.style.border = "2px solid red";
        receiptNumberError.textContent = "Receipt numeber is required";
        //styling error
        receiptNumberError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        receiptNumber.focus();
        // return false;
        error++;
    }else if(!receiptNumber.value.match(batteryRegex)){
        receiptNumber.style.border = "2px solid red";
        receiptNumberError.textContent = "Enter Correct format: BAT-000";
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
        // tireSize.focus();
    }


    if(error > 0){
        event.preventDefault();
    }

}