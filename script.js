

//jaut banka ir masīvs ar vārdnīcas tipa elemntiem (jautājums un atbilde ir mainīgie)
const jautajumi=[
  {
    jautajums: "Kas ir galvenais zemes satelīts?",
    atbilde: "Mēness"
  },
  {
    jautajums: "cik ir 2+2?",
    atbilde: "4"
  },
  {
    jautajums: "Kā sauc lielāko okeānu?",
    atbilde: "Klusais okeāns"
  },
]; 

//mainigie js....sasaista ar HTML
const jautajumsElements=document.getElementById("jautajums");
const atbildeInput=document.getElementById("atbilde");
const iesniegtButton=document.getElementById("iesniegt");

let esosaisJautajumsIndex=0;
//funkciju....parādīt jaut
function paradiJautajumu(){
  jautajumsElements.textContent=jautajumi[esosaisJautajumsIndex].jautajums;
}


//funkciju....pārbudīt atbildi
function parbauditAtbildi(){
  const lietotajaAtbilde=atbildeInput.value.trim().toLowerCase();
  const pareizaAtbilde=textContent=jautajumi[esosaisJautajumsIndex].atbilde.toLowerCase();

  if(lietotajaAtbilde===pareizaAtbilde){
    alert("Pareizi");
  }else{
    alert("Nepareizi");
  }
  esosaisJautajumsIndex++;
  if(esosaisJautajumsIndex<jautajumi.length){
    paradiJautajumu();
    atbildeInput.value="";
  }else{
    jautajumsElements.textContent="Spēle beigusies!";
    atbildeInput.disabled=true;
    iesniegtButton.disibled=true;
  }
}

// klasusītājs....jāsāk strādāt
paradiJautajumu();
iesniegtButton.addEventListener("click", parbauditAtbildi);  
