  
  function myFunction(){
  const N = document.querySelector("#print-input");
    setInterval(function(){ document.querySelector("#print-input").focus(); }, 1000);
    document.querySelector("#print-input").addEventListener('keyup', logKey);
  }
  myFunction()

function logKey(e){
  if(e.key=="Enter"){
    window.open(N.value,'_self');
    N.value="";
    N.focus();
  }
}
