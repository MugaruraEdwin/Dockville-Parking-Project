const Validate = (event) =>{
    // for whole validation
    // event called up here is for submission
    let error = 0;
    let price = 0;
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
    let carmodel = document.truckregister.model;
    let date = document.truckregister.date;
    let key = document.truckregister.securitykey;
    let receiptNumber = document.truckregister.receiptnumber;

    //Picking the error fields
    let firstNameError = document.getElementById("firstnameerror");
    let lastNameError = document.getElementById("lastnameerror");
    let numberPlateError = document.getElementById("numberplateerror");
    let phoneNumberError = document.getElementById("phonenumbererror");
    let emailError = document.getElementById("emailerror");
    let parkError = document.getElementById("parkerror");
    let timeError = document.getElementById("timeerror")
    let typeError = document.getElementById("typeerror")
    let colorError  = document.getElementById("colorerror")
    let carModelError = document.getElementById("modelerror");
    let dateError = document.getElementById("dateerror");
    let keyError = document.getElementById("securitykeyerror");
    let totalInput = document.getElementById("totalinput");



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
        numberPlate.focus();
        // return false; // stops form submission until you collect the input before - only for errors
    }

    let numberPlateRegex = /^(UA|UB)[A-Z][A-Z0-9]{0,4}[A-Z]$/;
    if(numberPlate.value == ""){
        numberPlate.style.border = "2px solid red";
        numberPlateError.textContent = "Number Plate is required";
        //styling error
        numberPlateError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        numberPlate.focus();
        // return false;
        error++;
    }else if(numberPlate.value.length > 7){
        numberPlate.style.border = "2px solid red";
        numberPlateError.textContent = "Enter a number plate with 7 or less characters";
        //styling error
        numberPlateError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        numberPlate.focus();
        // return false;
        error++;
    }else if(!numberPlateRegex.test(numberPlate.value)){
        numberPlate.style.border = "2px solid red";
        numberPlateError.textContent = "Enter a number plate that is valid i.e. UBA001A, UAA002E";
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

    if(color.value == ""){
        color.style.border = "2px solid red";
        colorError.textContent = "Car color is required";
        //styling error
        colorError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        color.focus();
        // return false;
        error++;
    }else{
        color.style.border = "2px solid green";
        colorError.textContent = "";
        //focus cursor
        email.focus();
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
        carmodel.focus();
    }


    

    if(carmodel.value == ""){
        carmodel.style.border = "2px solid red";
        carModelError.textContent = "Car model is required";
        //styling error
        carModelError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        carmodel.focus();
        // return false;
        error++;
     } else{
        carmodel.style.border = "2px solid green";
        carModelError.textContent = "";
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
        carType.focus();
    }

    if(key.value == ""){
        key.style.border = "2px solid red";
        keyError.textContent = "Security key is required";
        //styling error
        keyError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        key.focus();
        // return false;
        error++;
     } else{
        key.style.border = "2px solid green";
        keyError.textContent = "";
        //focus cursor
        time.focus();
    }

    if(carType.value == ""){
        carType.style.border = "2px solid red";
        typeError.textContent = "Car type is required";
        //styling error
        typeError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        carType.focus();
        // return false;
        error++;
    }else{
        carType.style.border = "2px solid green";
        typeError.textContent = "";
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
    }else{
        parkOption.style.border = "2px solid green";
        parkError.textContent = "";
    }

    if(parkOption.value == "day" && (carType.value =="truck" || carType.value =="personalcar" || carType.value =="taxi")){
        price += 3000;
        totalInput.value = price;
    }else if(parkOption.value == "day" && carType.value =="coaster"){
        price += 4000;
        price = total;
        totalInput.value = price;
    } else if(parkOption.value == "day" && carType.value =="bodaboda"){
        price += 2000;
        price = price;
        totalInput.value = price;
    } else if(parkOption.value == "night" && (carType.value =="coaster" || carType.value =="personalcar" || carType.value =="taxi" || carType.value =="bodaboda")){
        price += 2000;
        price = price;
        totalInput.value = price;
    }else if(parkOption.value == "night" && carType.value =="truck"){
        price += 5000;
        price = price;
        totalInput.value = price;
    }else if(parkOption.value == "lessthanthreehours" && (carType.value =="truck" || carType.value =="personalcar" || carType.value =="taxi")){
        price += 2000;
        price = price;
        totalInput.value = price;
    }else if(parkOption.value == "lessthanthreehours" && carType.value =="coaster"){
        price += 3000;
        price = price;
        totalInput.value = price;
    }else if(parkOption.value == "lessthanthreehours" && carType.value =="bodaboda"){
        price += 1000;
        price = price;
        totalInput.value = price;
    }

    // const bodaRegex = /^BB-([0-9]{3})+$/;
    // const personalCarRegex = /^PC-([0-9]{3})+$/;
    // const truckCarRegex = /^TC-([0-9]{3})+$/;
    // const coasterCarRegex = /^CC-([0-9]{3})+$/;
    // const taxiCarRegex = /^TAXI-([0-9]{3})+$/;

        // Get the current date
    const currentDate = new Date();

    // Get day, month, and year components
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = currentDate.getFullYear();

    // Format the date as DD/MM/YYYY
    const formattedDate = `${day}${month}`;

    console.log(formattedDate);


    // Get the current date
    const currentTime = new Date();

    // Get hour, minute, and second components
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    // const seconds = String(currentTime.getSeconds()).padStart(2, '0');

    // Format the time as HRS/MINS/SECONDS
    const formattedTime = `${hours}${minutes}`;

    console.log(formattedTime);

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    let combinedReg = formattedDate + formattedTime + randomNumber;

    // if(receiptNumber.value == ""){
    //     receiptNumber.style.border = "2px solid red";
    //     receiptNumberError.textContent = "Receipt numeber is required";
    //     //styling error
    //     receiptNumberError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
    //     //focus cursor
    //     receiptNumber.focus();
    //     // return false;
    //     error++;
    // }else if(!(receiptNumber.value.match(uniqueNumberRegex) || receiptNumber.value.match(personalCarRegex) || receiptNumber.value.match(truckCarRegex) || receiptNumber.value.match(coasterCarRegex) || receiptNumber.value.match(taxiCarRegex))){
    //     receiptNumber.style.border = "2px solid red";
    //     receiptNumberError.textContent = "Correct format: TC-000 for trucks / PC-000 for personalcars / TAX1-000 for taxis / CC-000 for coasters / BB-000 for bodas";
    //     //styling error
    //     receiptNumberError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
    //     //focus cursor
    //     receiptNumber.focus();
    //     // return false;
    //     error++;
    // }
    // }else if (carType.value == "taxi") {
    //     if(!taxiCarRegex.test(receiptNumber.value)){
    //         receiptNumber.style.border = "2px solid red";
    //         receiptNumberError.textContent = "Enter a receipt number in format TAXI-000";
    //         //styling error
    //         receiptNumberError.style.color = "red";
    //         receiptNumberError.style.fontSize = "11px";
    //         receiptNumberError.style.fontFamily = "Helvetica, Arial";
    //         //focus cursor
    //         receiptNumber.focus();
    //         // return false;
    //         error++;
    //     }else{
    //         receiptNumber.style.border = "2px solid green";
    //         receiptNumberError.textContent = "";
    //     }
    //   } else if (carType.value == "personalcar") {
    //     if (!personalCarRegex.test(receiptNumber.value)) {
    //       receiptNumber.style.border = "2px solid red";
    //       receiptNumberError.textContent = "Enter a receipt number in format PC-000";
    //       //styling error
    //       receiptNumberError.style.color = "red";
    //       receiptNumberError.style.fontSize = "11px";
    //       receiptNumberError.style.fontFamily = "Helvetica, Arial";
    //       //focus cursor
    //       receiptNumber.focus();
    //       // return false;
    //       error++;
    //     }else{
    //         receiptNumber.style.border = "2px solid green";
    //         receiptNumberError.textContent = "";
    //     }
    //   } else if (carType.value == "coaster") {
    //     if (!coasterCarRegex.test(receiptNumber.value)) {
    //       receiptNumber.style.border = "2px solid red";
    //       receiptNumberError.textContent = "Enter a receipt number in format CC-000";
    //       //styling error
    //       receiptNumberError.style.color = "red";
    //       receiptNumberError.style.fontSize = "11px";
    //       receiptNumberError.style.fontFamily = "Helvetica, Arial";
    //       //focus cursor
    //       receiptNumber.focus();
    //       // return false;
    //       error++;
    //     }else{
    //         receiptNumber.style.border = "2px solid green";
    //         receiptNumberError.textContent = "";
    //     }
    //   }else if (carType.value == "truck") {
    //     if (!truckCarRegex.test(receiptNumber.value)) {
    //       receiptNumber.style.border = "2px solid red";
    //       receiptNumberError.textContent = "Enter a receipt number in format TC-000";
    //       //styling error
    //       receiptNumberError.style.color = "red";
    //       receiptNumberError.style.fontSize = "11px";
    //       receiptNumberError.style.fontFamily = "Helvetica, Arial";
    //       //focus cursor
    //       receiptNumber.focus();
    //       // return false;
    //       error++;
    //     }else{
    //         receiptNumber.style.border = "2px solid green";
    //         receiptNumberError.textContent = "";
    //     }
    //   }else if (carType.value == "bodaboda") {
    //     if (!bodaRegex.test(receiptNumber.value)) {
    //       receiptNumber.style.border = "2px solid red";
    //       receiptNumberError.textContent = "Enter a receipt number in format BB-000";
    //       //styling error
    //       receiptNumberError.style.color = "red";
    //       receiptNumberError.style.fontSize = "11px";
    //       receiptNumberError.style.fontFamily = "Helvetica, Arial";
    //       //focus cursor
    //       receiptNumber.focus();
    //       // return false;
    //       error++;
    //     }else{
    //         receiptNumber.style.border = "2px solid green";
    //         receiptNumberError.textContent = "";
    //     }
    //   }
      
    // else{
    //     receiptNumber.style.border = "2px solid green";
    //     receiptNumberError.textContent = "";
    //     //focus cursor
    //     // parkOption.focus();
    // }

     if(carType.value == "personalcar"){
        receiptNumber.value = `PC-${combinedReg}`
    }else if(carType.value == "taxi"){
        receiptNumber.value = `TAXI-${combinedReg}`
    }else if(carType.value == "truck"){
        receiptNumber.value = `TC-${combinedReg}`
    }else if(carType.value == "bodaboda"){
        receiptNumber.value = `BB-${combinedReg}`
    }else if(carType.value == "coaster"){
        receiptNumber.value = `CC-${combinedReg}`
    }
  
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