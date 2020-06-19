


 exports.getDate= function (){
    let today = new Date();
options={
   weekday:"long",
   day:"numeric",
   month:"long"
};

return today.toLocaleDateString("eng-us",options);
 
}


exports.getDay= function ()
{
    let today = new Date();
options={
   weekday:"long",
  
};

return today.toLocaleDateString("eng-us",options);
  
}


