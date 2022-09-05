function tipCal(){
    const billAmount=document.getElementById("billamt");
    const pep=document.getElementById("peopleamt");
    let tip=0;
    if(billAmount.value=="")
    {alert("Please Enter Bill Amount");
    }
  //  alert(billAmount.value);
     else{
    const service=document.getElementById("serviceQual");
   // alert(service.value);
   let pepnum=pep.value;
   if(pepnum=="" || pepnum==1)
    {
   
     tip= billAmount.value*service.value;
    tip=Math.round(tip*100)/100;
   
    document.getElementById("tip").innerText="$"+tip;
   
    document.getElementById("op").style.display="block";
     document.getElementById("each").style.display="none";
  
   // alert(tip);
   }
   else{
     tip= billAmount.value*service.value/pepnum;
    tip=Math.round(tip*100)/100;
    document.getElementById("tip").innerText="$"+tip;
    document.getElementById("op").style.display="block";
     document.getElementById("each").style.display="block";
     }
}  
}
