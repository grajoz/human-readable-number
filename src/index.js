module.exports = function toReadable (number) {
    let toReadable="";
  /*if (typeof( number )!==number){return "error"}*/
  
  let from0to19=['zero','one','two','three','four', 'five','six','seven','eight','nine',
  'ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
  let decadesfrom20to90=['','','twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  let hundred=['hundred'];
         function stringFrom0to19(number){
            for (let i=0;i<=19;i++){
                if (number==i){ toReadable=from0to19[i]; return toReadable};  
            };
            };
            function stringFrom20to99(number){
            for (let i=2;i<=9;i++){
              /*console.log(number/10);console.log(decadesfrom20to90[i]);*/
                if (i==(number/10)) {toReadable=decadesfrom20to90[number/10]; return toReadable} else{
                    toReadable=decadesfrom20to90[Math.floor(number/10)]+" "+stringFrom0to19(number-(Math.floor(number/10)*10));
                };
            };
              return toReadable.replace(/\s{2,}/g,' ');
          };
          
    
    if (number>=0&&number<=19){
          return stringFrom0to19(number);  
        };
        /*console.log(toReadable(stringFrom0to19(number)));*/
        if (number>=20&&number<=99){
          
          return stringFrom20to99 (number);
        }
        if (number>=100&&number<=999){
          function stringFrom100to999(number){
              
                if ((number%100)==0) {toReadable=stringFrom0to19(number/100)+' '+hundred; return toReadable} else{
                    if((number-(Math.floor(number/100)*100))>=20){
                  toReadable=stringFrom0to19(Math.floor(number/100))+" "+hundred+' '+stringFrom20to99(number-(Math.floor(number/100)*100));
                    }else{toReadable=stringFrom0to19(Math.floor(number/100))+" "+hundred+' '+stringFrom0to19(number-(Math.floor(number/100)*100));}

                }

                 
              
                return toReadable.replace(/\s{2,}/g,' ');
            }
            return stringFrom100to999(number);
        }
       
  }
  