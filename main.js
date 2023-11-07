function check()
{
  if(!document.getElementById("subscribe-email").checkValidity())
  {

    alert("input not valid!");
    
}else
{
    callMeIfValid();
}
}

