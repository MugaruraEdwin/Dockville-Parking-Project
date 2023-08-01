const Validate = (event) => {
    let error = 0;
    let price = 0;

    let tireSize = document.tyreclinicform.tiresize;
    let carType = document.tyreclinicform.type;
    let carModel = document.tyreclinicform.carmodel;

    let tireError = document.getElementById('tiresizeerror');
    let carMakeError = document.getElementById('typeerror');
    let carModelError = document.getElementById('carmodelerror');
    let total = document.getElementById('total');


    const tireSizeRegex = /\b\d{2,3}(?:\/\d{2,3})?\s?[A-Z]\d{2,3}\b/g;
    if(tireSize.value == ""){
        tireSize.style.border = "2px solid red";
        tireError.textContent = "Tire Size is required";
        //styling error
        tireError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        tireSize.focus();
        // return false;
        error++;
    }
    else if(!tireSizeRegex.test(tireSize.value)){
        tireSize.style.border = "2px solid red";
        tireError.textContent = "Tire Size is invalid, correct format i.e: 195/50R15";
        //styling error
        tireError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        tireSize.focus();
        // return false;
        error++;
    }

    let newTireSize = Number(tireSize.value[7] + tireSize.value[8]);
    if (newTireSize <= 20){
        price += 50000;
        tireSize.style.border = "2px solid green";
        tireError.textContent = "";
    }
    else if(newTireSize <= 40){
        price += 100000;
        tireSize.style.border = "2px solid green";
        tireError.textContent = "";
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


    if(!carType.value == "" && !newTireSize == "" ){
        total.innerHTML = "Total cost is "+ price +" for "+ newTireSize + " inch " + carType.value + " tyre";
    }else if(!carType.value == "" && !tireSizeRegex.test(tireSize.value)){
        total.innerHTML ="Correct car tyre size to right format"
    }







    if(error > 0){
        event.preventDefault();
    }
}