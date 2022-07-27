/* 
   purpose: computes interest based on user input
   and gives user a detailed output of all relevant 
   components
   
   */

   function compute(){
    /* get  elements that we are gonna need*/
   let p = document.getElementById("principal").value;

   /* validation time checking for empty values*/
    if (p =="") {
        alert("Enter a positive number");
        return false;
    }  
    
   /* make sure these are numbers */
   let r = Number(document.getElementById("rate").value);
   let t = Number(document.getElementById("years").value);
    
   /* this is the si formula */
   var i = p * t * r /100;

   /* the output element*/
   let resultOut = document.getElementById("result");
   
    /* get the current year */
    let thisYear =  new Date().getFullYear();
	
	/* format string year to integer for calculating maturing year */
	let my = Number(thisYear)+t
	
    /* build the response string*/
    let rs='If you deposit <span class="response">'+ p +'</span>,<br/> at an interest rate of <span class="response">'+ r +'%</span>.<br/> You will recieve an amount of <span class="response">'+ i +'</span>,<br/> in the year <span class="response">'+ my +'</span>'
	
    /* update the element*/
   resultOut.innerHTML = rs;

}

/* 
   purpose: checks if principal is less 
   than one and alert user

   */
function checkValue() {
    let x = document.getElementById("principal");
    /* checking for any value less than one: zero and negatives*/
    if (x.value < 1) { 
        alert("Enter a positive number");
        /*clear out incorrect data*/
        x.value="";
        return false;
    }
  }       


  /* 
   purpose: appends % sign to interest rate output
   */
  function doPercentage(){

    /* get values*/

    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
    
    }

       