function maskEmail(email){
  const endOfEmail = email.indexOf("@")-1;

  let emailSliced= email.slice(1,endOfEmail);
  email = email[0]+"*".repeat((emailSliced.length))+email.slice(endOfEmail);
  return email;
}

let email= "apple.pie@example.com";
console.log(maskEmail(email));