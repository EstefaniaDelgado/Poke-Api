 
 // regular expression for name
 const expRegular = /^[a-zA-Z]{2,15}$/;
 //regular expression for URL
 const regex = /^https?:\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|gif|png)$/i;

//funcion validadora:

 const validate = (input)=>{
   
  let errors={};

  if(!input.name) errors.name = "Name is required";
  
  else if(!expRegular.test(input.name)) errors.name = "Name must be at least 2 characters and less than 15 and either cannot has specials characters or numbers";
  
  if(!input.img) errors.image= "Image is optional";

  else if(!regex.test(input.img)) errors.img = "URL is invalidate";
  
if(input.types.length === 0 || input.types.length >2 ) errors.types= "You must choose only 2 types for your Pokemón";
  
return errors;
   
};

export default validate;



