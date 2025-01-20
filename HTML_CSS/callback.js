function submitForm(submit,isFormValid) {
    if(isFormValid)
    {
        console.log("Field validated successfully")
        console.log(submit);
    }
    else{
        console.log("form validation is failed")
        console.log(submit)
    }
} 

function formValidation(){
    email = "sece@sece.ac.in"
    password = "123456"
    if(email === "sece@sece.ac.in" && password)
    {
        return true
    }
    else{
        return false
    }
}