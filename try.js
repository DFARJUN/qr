  
  function listenQr(){
    setInterval(function(){ document.querySelector("#print-input").focus(); }, 500);
    document.querySelector("#print-input").addEventListener('keyup', logKey);
  }
document.addEventListener("DOMContentLoaded", () => listenQr());


function logKey(e){
  if(e.key=="Enter"){
    window.open(document.querySelector("#print-input").value,'_self');
    document.querySelector("#print-input").value="";
    document.querySelector("#print-input").focus();
  }
}
