const Validate = () => {
    let nin = document.bodaregister.nin;
    let date = document.bodaregister.date;




    let ninError = document.getElementById("ninerror");


    const ninRegex = /^CF([a-zA-Z0-9]{12})+$/;
    const ninRegex2 = /^CM([a-zA-Z0-9]{12})+$/;

    if(!(ninRegex.test(nin.value) || ninRegex2.test(nin.value))){
        nin.style.border = "2px solid red";
        ninError.textContent = "Enter a valid NIN number";
        //styling error
        ninError.style = "color: red; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        nin.focus();
        return false;
    }else{
        nin.style.border = "2px solid green";
        ninError.textContent = "sucess";
        ninError.style = "color: green; font-size:11px; font-family: Helevetica,Arial;";
        //focus cursor
        date.focus();
    }

    // Generating unique numbers

    const uniqueNumberRegex = /^BB-([0-9]{3})+$/;
    //e.g. BB-001, BB-002

    

}