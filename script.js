/*this function computes the interest   */
function compute() 
{
    var principal = document.getElementById("principal").value; /*take the value from principal field and assign it to 'principal' variable */
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100 ;/*compute interest  */
    var year = new Date().getFullYear()+parseInt(years); 
    if (principal<=0){
        alert("Please enter a positive number"); /*alert message */
        location.reload(); /* reload page after 'OK' */
        getFocus(); /*focus on 'principal' field*/
    }
    else{
    /*output the interest result */
    document.getElementById("result").innerHTML = "If you deposit \<mark>" + principal+ "\</mark> , \<br\> at an interest rate of \<mark>" +rate+ " \</mark> %.\<br\> You will receive an amount of \<mark> " + interest + " \</mark> , \<br\> in the year \<mark>" + year + " \</mark>. \<br\>"  
    }
}


/*this function updates value when change thumb on range  */
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;

}

/*this function redirects user to the 'principal' input box*/
function getFocus(){ 
    document.getElementById("principal").focus();
}
