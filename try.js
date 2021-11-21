  
  function myFunction(){
  const N = document.querySelector("#print-input");
    setInterval(function(){ document.querySelector("#print-input").focus(); }, 1000);
    document.querySelector("#print-input").addEventListener('keyup', logKey);
  }
  
function logKey(e){
  if(e.key=="Enter"){
    indow.open(N.value,'_self');
    N.value="";
    N.focus();
  }
}
