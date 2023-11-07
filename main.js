function check()
{
  if(!document.getElementById("subscribe-email").checkValidity())
  {

    alert("input not valid! შეცვალე იმეილი!");
    
}else
{
    callMeIfValid();
}
}

