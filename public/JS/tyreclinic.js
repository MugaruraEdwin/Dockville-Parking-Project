const Validate = (event) => {
    let error = 0;
    let price = 0;

    let firstName = document.tyreclinicform.firstname;
    let lastName = document.tyreclinicform.lastname;
    let tyreSize = document.tyreclinicform.tyresize;
    let carType = document.tyreclinicform.type;
    let carModel = document.tyreclinicform.carmodel;
    let date = document.tyreclinicform.date;
    let receiptNumber = document.tyreclinicform.receiptnumber;
    let phoneNumber = document.tyreclinicform.phonenumber;
    let email = document.tyreclinicform.email;

    let firstNameError = document.getElementById("firstnameerror");
    let lastNameError = document.getElementById("lastnameerror");
    let tyreError = document.getElementById('tyresizeerror');
    let carMakeError = document.getElementById('typeerror');
    let carModelError = document.getElementById('carmodelerror');
    let phoneNumberError = document.getElementById("phonenumbererror");
    let emailError = document.getElementById("emailerror");
    let dateError = document.getElementById("dateerror");
    let receiptNumberError = document.getElementById("receiptnumbererror");
    let totalInput = document.getElementById('totalinput');


    


    //Validating name input
    //Validating for emptiness

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
        phoneNumber.focus();
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
        receiptNumber.focus();
    }


    // validating select for emptiness

    const tyreRegex = /^TR-(\d{3})$/;

    if(receiptNumber.value == ""){
        receiptNumber.style.border = "2px solid red";
        receiptNumberError.textContent = "Receipt numeber is required";
        //styling error
        receiptNumberError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        receiptNumber.focus();
        // return false;
        error++;
    }else if(!receiptNumber.value.match(tyreRegex)){
        receiptNumber.style.border = "2px solid red";
        receiptNumberError.textContent = "Enter Correct format: TR-000";
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
        tyreSize.focus();
    }



    const tyreSizeRegex = /\b\d{2,3}(?:\/\d{2,3})?\s?[A-Z]\d{2,3}\b/g;
    if(tyreSize.value == ""){
        tyreSize.style.border = "2px solid red";
        tyreError.textContent = "Tire Size is required";
        //styling error
        tyreError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        tyreSize.focus();
        // return false;
        error++;
    }
    else if(!tyreSizeRegex.test(tyreSize.value)){
        tyreSize.style.border = "2px solid red";
        tyreError.textContent = "Tire Size is invalid, correct format i.e: 195/50R15";
        //styling error
        tyreError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        tyreSize.focus();
        // return false;
        error++;
    }

    let newTyreSize = Number(tyreSize.value[7] + tyreSize.value[8]);
    if (newTyreSize <= 20){
        price += 50000;
        // tyreSize.style.border = "2px solid green";
        // tyreError.textContent = "";
    }
    else if(newTyreSize <= 40){
        price += 100000;
        // tyreSize.style.border = "2px solid green";
        // tyreError.textContent = "";
    }

    if(carType.value == ""){
        carType.style.border = "2px solid red";
        carMakeError.textContent = "Tire Make is required";
        //styling error
        carMakeError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        carType.focus();
        // return false;
        error++;
    }else if(carType.value == "truck"){
        price += 100000;
        carType.style.border = "2px solid green";
        carMakeError.textContent = "";
    }
    else if(carType.value == "taxi"){
        price += 80000;
        carType.style.border = "2px solid green";
        carMakeError.textContent = "";
    }
    else if(carType.value == "personalcar"){
        price += 60000;
        carType.style.border = "2px solid green";
        carMakeError.textContent = "";
    }
    else if(carType.value == "coaster"){
        price += 90000;
        carType.style.border = "2px solid green";
        carMakeError.textContent = "";
    }
    else if(carType.value == "bodaboda"){
        price += 30000;
        carType.style.border = "2px solid green";
        carMakeError.textContent = "";
    }
    


   

    if(carModel.value == ""){
        carModel.style.border = "2px solid red";
        carModelError.textContent = "Tire Model is required";
        //styling error
        carModelError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        carModel.focus();
        // return false;
        error++;
    } else if(carModel.value == "hatchback"){
        price += 15000;
        carModel.style.border = "2px solid green";
        carModelError.textContent = "";
    } else if(carModel.value == "sedan"){
        price += 20000;
        carModel.style.border = "2px solid green";
        carModelError.textContent = "";
    } else if(carModel.value == "suv"){
        price += 30000;
        carModel.style.border = "2px solid green";
        carModelError.textContent = "";
    } else if(carModel.value == "coupe"){
        price += 10000;
        carModel.style.border = "2px solid green";
        carModelError.textContent = "";
    } else if(carModel.value == "convertible"){
        price += 50000;
        carModel.style.border = "2px solid green";
        carModelError.textContent = "";
    } else if(carModel.value == "sportscar"){
        price += 70000;
        carModel.style.border = "2px solid green";
        carModelError.textContent = "";
    } else if(carModel.value == "minivan"){
        price += 60000;
        carModel.style.border = "2px solid green";
        carModelError.textContent = "";
    } else if(carModel.value == "stationwagon"){
        price += 80000;
        carModel.style.border = "2px solid green";
        carModelError.textContent = "";
    } else if(carModel.value == "crossover"){
        price += 45000;
        carModel.style.border = "2px solid green";
        carModelError.textContent = "";
    }else if(carModel.value == "pickuptruck"){
        price += 25000;
        carModel.style.border = "2px solid green";
        carModelError.textContent = "";
    }


    if(!carType.value == "" && !newTyreSize == "" && !carModel == "" ){
        totalInput.value = price;
    }


    if(error > 0){
        event.preventDefault();
    }
}