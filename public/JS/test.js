const Validate = (event) => {
    let error = 0;
    let price = 0;

    let firstName = document.servicesform.firstname;
    let lastName = document.servicesform.lastname;
    let date = document.servicesform.date;
    let receiptNumber = document.servicesform.receiptnumber;
    let phoneNumber = document.servicesform.phonenumber;
    let email = document.servicesform.email;
    let pressure = document.servicesform.pressure;
    let puncture = document.servicesform.puncture;
    let valves = document.servicesform.valves;

    let firstNameError = document.getElementById("firstnameerror");
    let lastNameError = document.getElementById("lastnameerror");
    let phoneNumberError = document.getElementById("phonenumbererror");
    let emailError = document.getElementById("emailerror");
    let dateError = document.getElementById("dateerror");
    let receiptNumberError = document.getElementById("receiptnumbererror");
    let totalInput = document.getElementById('totalinput');
  

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

    const tyreRegex = /^TS-(\d{3})$/;

    if(receiptNumber.value == ""){
        receiptNumber.style.border = "2px solid red";
        receiptNumberError.textContent = "Receipt numeber is required";
        //styling error
        receiptNumberError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        receiptNumber.focus();
        // return false;
        error++;
    }else if(!(receiptNumber.value.match(tyreRegex))){
        receiptNumber.style.border = "2px solid red";
        receiptNumberError.textContent = "Please enter correct format: TS-000 for tyre service ";
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
        // parkOption.focus();
    }

    if(pressure.checked == true && valves.checked == true && puncture.checked == true ){
        price +=10500;
        totalInput.value = price;
    }else if(pressure.checked == true && puncture.checked == true ){
        price +=5500;
        totalInput.value = price;
    }else if(pressure.checked == true && valves.checked == true ){
        price +=5500;
        totalInput.value = price;
    }else if(puncture.checked == true && valves.checked == true ){
        price +=10000;
        totalInput.value = price; 
    }else  if(pressure.checked == true && (puncture.checked == false && valves.checked == false) ){
      
        price +=500;
        totalInput.value = price;
    }
    else if(puncture.checked && (pressure.checked == false && valves.checked == false)){
   
       price +=5000;
       totalInput.value = price;
    }else if(valves.checked && (puncture.checked == false && pressure.checked == false)){
       
        price +=5000;
        totalInput.value = price;
     }else{
        alert('Pick tyre service')
        error++;
     }

    

     






    if(error > 0){
        event.preventDefault();
    }




}