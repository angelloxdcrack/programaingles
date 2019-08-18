var verbops=document.getElementById("vps");
var verbopp=document.getElementById("vpp");
var boton=document.getElementById("button");
var rpta=document.getElementById("Resultado");
var alerta=document.getElementById("alerta");
/** comentario---------------------------------- */
var verbops1=document.getElementById("vps1");
var verbopp1=document.getElementById("vpp1");
var boton1=document.getElementById("button1");
var rpta1=document.getElementById("Resultado1");
var alerta1=document.getElementById("alerta1");

/**--------------------------------------------- */
var verbops2=document.getElementById("vps2");
var verbopp2=document.getElementById("vpp2");
var boton2=document.getElementById("button2");
var rpta2=document.getElementById("Resultado2");
var alerta2=document.getElementById("alerta2");

/**--------------------------------------------- */
var verbops3=document.getElementById("vps3");
var verbopp3=document.getElementById("vpp3");
var boton3=document.getElementById("button3");
var rpta3=document.getElementById("Resultado3");
var alerta3=document.getElementById("alerta3");
/**--------------------------------------------- */
var verbops4=document.getElementById("vps4");
var verbopp4=document.getElementById("vpp4");
var boton4=document.getElementById("button4");
var rpta4=document.getElementById("Resultado4");
var alerta4=document.getElementById("alerta4");
/**--------------------------------------------- */
var verbops5=document.getElementById("vps5");
var verbopp5=document.getElementById("vpp5");
var boton5=document.getElementById("button5");
var rpta5=document.getElementById("Resultado5");
var alerta5=document.getElementById("alerta5");

/**--------------------------------------------- */

var verbops6=document.getElementById("vps6");
var verbopp6=document.getElementById("vpp6");
var boton6=document.getElementById("button6");
var rpta6=document.getElementById("Resultado6");
var alerta6=document.getElementById("alerta6");

/**--------------------------------------------- */
var verbops7=document.getElementById("vps7");
var verbopp7=document.getElementById("vpp7");
var boton7=document.getElementById("button7");
var rpta7=document.getElementById("Resultado7");
var alerta7=document.getElementById("alerta7");

/**--------------------------------------------- */
var verbops8=document.getElementById("vps8");
var verbopp8=document.getElementById("vpp8");
var boton8=document.getElementById("button8");
var rpta8=document.getElementById("Resultado8");
var alerta8=document.getElementById("alerta8");

/**--------------------------------------------- */
var verbops9=document.getElementById("vps9");
var verbopp9=document.getElementById("vpp9");
var boton9=document.getElementById("button9");
var rpta9=document.getElementById("Resultado9");
var alerta9=document.getElementById("alerta9");

/**--------------------------------------------- */
var verbops10=document.getElementById("vps10");
var verbopp10=document.getElementById("vpp10");
var boton10=document.getElementById("button10");
var rpta10=document.getElementById("Resultado10");
var alerta10=document.getElementById("alerta10");

/**--------------------------------------------- */
var verbops11=document.getElementById("vps11");
var verbopp11=document.getElementById("vpp11");
var boton11=document.getElementById("button11");
var rpta11=document.getElementById("Resultado11");
var alerta11=document.getElementById("alerta11");

/**--------------------------------------------- */
var verbops12=document.getElementById("vps12");
var verbopp12=document.getElementById("vpp12");
var boton12=document.getElementById("button12");
var rpta12=document.getElementById("Resultado12");
var alerta12=document.getElementById("alerta12");

/**--------------------------------------------- */
var verbops13=document.getElementById("vps13");
var verbopp13=document.getElementById("vpp13");
var boton13=document.getElementById("button13");
var rpta13=document.getElementById("Resultado13");
var alerta13=document.getElementById("alerta13");

/**--------------------------------------------- */
var verbops14=document.getElementById("vps14");
var verbopp14=document.getElementById("vpp14");
var boton14=document.getElementById("button14");
var rpta14=document.getElementById("Resultado14");
var alerta14=document.getElementById("alerta14");

/**--------------------------------------------- */
var verbops15=document.getElementById("vps15");
var verbopp15=document.getElementById("vpp15");
var boton15=document.getElementById("button15");
var rpta15=document.getElementById("Resultado15");
var alerta15=document.getElementById("alerta15");

/**--------------------------------------------- */
var verbops16=document.getElementById("vps16");
var verbopp16=document.getElementById("vpp16");
var boton16=document.getElementById("button16");
var rpta16=document.getElementById("Resultado16");
var alerta16=document.getElementById("alerta16");

/**--------------------------------------------- */
var verbops17=document.getElementById("vps17");
var verbopp17=document.getElementById("vpp17");
var boton17=document.getElementById("button17");
var rpta17=document.getElementById("Resultado17");
var alerta17=document.getElementById("alerta17");

/**--------------------------------------------- */
var verbops18=document.getElementById("vps18");
var verbopp18=document.getElementById("vpp18");
var boton18=document.getElementById("button18");
var rpta18=document.getElementById("Resultado18");
var alerta18=document.getElementById("alerta18");

/**--------------------------------------------- */
var verbops19=document.getElementById("vps19");
var verbopp19=document.getElementById("vpp19");
var boton19=document.getElementById("button19");
var rpta19=document.getElementById("Resultado19");
var alerta19=document.getElementById("alerta19");

/**--------------------------------------------- */

boton.addEventListener("click", function(){
 var datops=verbops.value;
 var datopp=verbopp.value;
 var respuesta="";
 var respuesta1="";
 
    if(datops=="was/were"){
       respuesta="correcta";

    }else{
       respuesta="incorrecta";
  
    }
    if(datopp=="been"){
        respuesta1="correcta";
      
    }else{
        respuesta1="incorrecta";
     
    }
    rpta.innerText= " Es " + respuesta + "," + respuesta1;
    
});
alerta.addEventListener("click", function(){
    alert("La respuesta es "+ "Vs: "+ "was/were"+ " , "+  " Vp : " + "been");
});

  /**------------------------------------------------------------------------------------ */
  boton1.addEventListener("click", function(){
    var datops1=verbops1.value;
    var datopp1=verbopp1.value;
    var respuesta="";
    var respuesta1="";
    
       if(datops1=="beat"){
          respuesta="correcta";
   
       }else{
          respuesta="incorrecta";
     
       }
       if(datopp1=="beaten"){
           respuesta1="correcta";
         
       }else{
           respuesta1="incorrecta";
        
       }
       rpta1.innerText= " Es " + respuesta + "," + respuesta1;
   
   });
   alerta1.addEventListener("click", function(){
    alert("La respuesta es "+ "Vs: "+ "beat"+ " , "+  " Vp : " + "beaten");
});

  /**------------------------------------------------------------------------------------ */

/**------------------------------------------------------------------------------------ */
boton2.addEventListener("click", function(){
    var datops2=verbops2.value;
    var datopp2=verbopp2.value;
    var respuesta="";
    var respuesta1="";
    
       if(datops2=="said"){
          respuesta="correcta";
   
       }else{
          respuesta="incorrecta";
     
       }
       if(datopp2=="said"){
           respuesta1="correcta";
         
       }else{
           respuesta1="incorrecta";
        
       }
       rpta2.innerText= " Es " + respuesta + "," + respuesta1;
   
   });

   alerta2.addEventListener("click", function(){
    alert("La respuesta es "+ "Vs: "+ "said"+ " , "+  " Vp : " + "said");
});

  /**------------------------------------------------------------------------------------ */  
   /**------------------------------------------------------------------------------------ */
boton3.addEventListener("click", function(){
    var datops3=verbops3.value;
    var datopp3=verbopp3.value;
    var respuesta="";
    var respuesta1="";
    
       if(datops3=="did"){
          respuesta="correcta";
   
       }else{
          respuesta="incorrecta";
     
       }
       if(datopp3=="done"){
           respuesta1="correcta";
         
       }else{
           respuesta1="incorrecta";
        
       }
       rpta3.innerText= " Es " + respuesta + "," + respuesta1;
   });
   alerta3.addEventListener("click", function(){
    alert("La respuesta es "+ "Vs: "+ "did"+ " , "+  " Vp : " + "done");
});
/**--------------------------------------------- */
boton4.addEventListener("click", function(){
    var datops4=verbops4.value;
    var datopp4=verbopp4.value;
    var respuesta="";
    var respuesta1="";
    
       if(datops4=="ate"){
          respuesta="correcta";
   
       }else{
          respuesta="incorrecta";
     
       }
       if(datopp4=="eaten"){
           respuesta1="correcta";
         
       }else{
           respuesta1="incorrecta";
        
       }
       rpta4.innerText= " Es " + respuesta + "," + respuesta1;
       
   });
   alerta4.addEventListener("click", function(){
       alert("La respuesta es "+ "Vs: "+ "ate"+ " , "+  " Vp : " + "eaten");
   });

   /**--------------------------------------------- */
boton5.addEventListener("click", function(){
    var datops5=verbops5.value;
    var datopp5=verbopp5.value;
    var respuesta="";
    var respuesta1="";
    
       if(datops5=="heard"){
          respuesta="correcta";
   
       }else{
          respuesta="incorrecta";
     
       }
       if(datopp5=="heard"){
           respuesta1="correcta";
         
       }else{
           respuesta1="incorrecta";
        
       }
       rpta5.innerText= " Es " + respuesta + "," + respuesta1;
       
   });
   alerta5.addEventListener("click", function(){
       alert("La respuesta es "+ "Vs: "+ "heard"+ " , "+  " Vp : " + "heard");
   });

   
   /**--------------------------------------------- */
boton6.addEventListener("click", function(){
    var datops6=verbops6.value;
    var datopp6=verbopp6.value;
    var respuesta="";
    var respuesta1="";
    
       if(datops6=="took"){
          respuesta="correcta";
   
       }else{
          respuesta="incorrecta";
     
       }
       if(datopp6=="taken"){
           respuesta1="correcta";
         
       }else{
           respuesta1="incorrecta";
        
       }
       rpta6.innerText= " Es " + respuesta + "," + respuesta1;
       
   });
   alerta6.addEventListener("click", function(){
       alert("La respuesta es "+ "Vs: "+ "took"+ " , "+  " Vp : " + "taken");
   });

    
   /**--------------------------------------------- */
boton7.addEventListener("click", function(){
    var datops7=verbops7.value;
    var datopp7=verbopp7.value;
    var respuesta="";
    var respuesta1="";
    
       if(datops7=="saw"){
          respuesta="correcta";
   
       }else{
          respuesta="incorrecta";
     
       }
       if(datopp7=="seen"){
           respuesta1="correcta";
         
       }else{
           respuesta1="incorrecta";
        
       }
       rpta7.innerText= " Es " + respuesta + "," + respuesta1;
       
   });
   alerta7.addEventListener("click", function(){
       alert("La respuesta es "+ "Vs: "+ "saw"+ " , "+  " Vp : " + "seen");
   });
/**--------------------------------------------------------------------------------------------- */
boton8.addEventListener("click", function(){
    var datops8=verbops8.value;
    var datopp8=verbopp8.value;
    var respuesta="";
    var respuesta1="";
    
       if(datops8=="met"){
          respuesta="correcta";
   
       }else{
          respuesta="incorrecta";
     
       }
       if(datopp8=="met"){
           respuesta1="correcta";
         
       }else{
           respuesta1="incorrecta";
        
       }
       rpta8.innerText= " Es " + respuesta + "," + respuesta1;
       
   });
   alerta8.addEventListener("click", function(){
       alert("La respuesta es "+ "Vs: "+ "met"+ " , "+  " Vp : " + "met");
   });
/**--------------------------------------------------------------------------------------------- */
boton9.addEventListener("click", function(){
    var datops9=verbops9.value;
    var datopp9=verbopp9.value;
    var respuesta="";
    var respuesta1="";
    
       if(datops9=="drove"){
          respuesta="correcta";
   
       }else{
          respuesta="incorrecta";
     
       }
       if(datopp9=="driven"){
           respuesta1="correcta";
         
       }else{
           respuesta1="incorrecta";
        
       }
       rpta9.innerText= " Es " + respuesta + "," + respuesta1;
       
   });
   alerta9.addEventListener("click", function(){
       alert("La respuesta es "+ "Vs: "+ "drove"+ " , "+  " Vp : " + "driven");
   });
   /**--------------------------------------------------------------------------------------------- */
boton10.addEventListener("click", function(){
    var datops10=verbops10.value;
    var datopp10=verbopp10.value;
    var respuesta="";
    var respuesta1="";
    
       if(datops10=="woke"){
          respuesta="correcta";
   
       }else{
          respuesta="incorrecta";
     
       }
       if(datopp10=="woken"){
           respuesta1="correcta";
         
       }else{
           respuesta1="incorrecta";
        
       }
       rpta10.innerText= " Es " + respuesta + "," + respuesta1;
       
   });
   alerta10.addEventListener("click", function(){
       alert("La respuesta es "+ "Vs: "+ "woke"+ " , "+  " Vp : " + "woken");
   });
      /**--------------------------------------------------------------------------------------------- */
boton11.addEventListener("click", function(){
    var datops11=verbops11.value;
    var datopp11=verbopp11.value;
    var respuesta="";
    var respuesta1="";
    
       if(datops11=="spoke"){
          respuesta="correcta";
   
       }else{
          respuesta="incorrecta";
     
       }
       if(datopp11=="spoken"){
           respuesta1="correcta";
         
       }else{
           respuesta1="incorrecta";
        
       }
       rpta11.innerText= " Es " + respuesta + "," + respuesta1;
       
   });
   alerta11.addEventListener("click", function(){
       alert("La respuesta es "+ "Vs: "+ "spoke"+ " , "+  " Vp : " + "spoken");
   });
         /**--------------------------------------------------------------------------------------------- */
boton12.addEventListener("click", function(){
    var datops12=verbops12.value;
    var datopp12=verbopp12.value;
    var respuesta="";
    var respuesta1="";
    
       if(datops12=="left"){
          respuesta="correcta";
   
       }else{
          respuesta="incorrecta";
     
       }
       if(datopp12=="left"){
           respuesta1="correcta";
         
       }else{
           respuesta1="incorrecta";
        
       }
       rpta12.innerText= " Es " + respuesta + "," + respuesta1;
       
   });
   alerta12.addEventListener("click", function(){
       alert("La respuesta es "+ "Vs: "+ "left"+ " , "+  " Vp : " + "left");
   });
  /**--------------------------------------------------------------------------------------------- */
   boton13.addEventListener("click", function(){
    var datops13=verbops13.value;
    var datopp13=verbopp13.value;
    var respuesta="";
    var respuesta1="";
    
       if(datops13=="wrote"){
          respuesta="correcta";
   
       }else{
          respuesta="incorrecta";
     
       }
       if(datopp13=="written"){
           respuesta1="correcta";
         
       }else{
           respuesta1="incorrecta";
        
       }
       rpta13.innerText= " Es " + respuesta + "," + respuesta1;
       
   });
   alerta13.addEventListener("click", function(){
       alert("La respuesta es "+ "Vs: "+ "wrote"+ " , "+  " Vp : " + "written");
   });

   /**--------------------------------------------------------------------------------------------- */
   boton14.addEventListener("click", function(){
    var datops14=verbops14.value;
    var datopp14=verbopp14.value;
    var respuesta="";
    var respuesta1="";
    
       if(datops14=="read"){
          respuesta="correcta";
   
       }else{
          respuesta="incorrecta";
     
       }
       if(datopp14=="read"){
           respuesta1="correcta";
         
       }else{
           respuesta1="incorrecta";
        
       }
       rpta14.innerText= " Es " + respuesta + "," + respuesta1;
       
   });
   alerta14.addEventListener("click", function(){
       alert("La respuesta es "+ "Vs: "+ "read"+ " , "+  " Vp : " + "read");
   });


    /**--------------------------------------------------------------------------------------------- */

   boton15.addEventListener("click", function(){
    var datops15=verbops15.value;
    var datopp15=verbopp15.value;
    var respuesta="";
    var respuesta1="";
    
       if(datops15=="forgot"){
          respuesta="correcta";
   
       }else{
          respuesta="incorrecta";
     
       }
       if(datopp15=="forgotten"){
           respuesta1="correcta";
         
       }else{
           respuesta1="incorrecta";
        
       }
       rpta15.innerText= " Es " + respuesta + "," + respuesta1;
       
   });
   alerta15.addEventListener("click", function(){
       alert("La respuesta es "+ "Vs: "+ "forgot"+ " , "+  " Vp : " + "forgottenw");
   });

   /**--------------------------------------------------------------------------------------------- */

   boton16.addEventListener("click", function(){
    var datops16=verbops16.value;
    var datopp16=verbopp16.value;
    var respuesta="";
    var respuesta1="";
    
       if(datops16=="sang"){
          respuesta="correcta";
   
       }else{
          respuesta="incorrecta";
     
       }
       if(datopp16=="sung"){
           respuesta1="correcta";
         
       }else{
           respuesta1="incorrecta";
        
       }
       rpta16.innerText= " Es " + respuesta + "," + respuesta1;
       
   });
   alerta16.addEventListener("click", function(){
       alert("La respuesta es "+ "Vs: "+ "sang"+ " , "+  " Vp : " + "sung");
   });

    /**--------------------------------------------------------------------------------------------- */

    boton17.addEventListener("click", function(){
        var datops17=verbops17.value;
        var datopp17=verbopp17.value;
        var respuesta="";
        var respuesta1="";
        
           if(datops17=="went"){
              respuesta="correcta";
       
           }else{
              respuesta="incorrecta";
         
           }
           if(datopp17=="gone"){
               respuesta1="correcta";
             
           }else{
               respuesta1="incorrecta";
            
           }
           rpta17.innerText= " Es " + respuesta + "," + respuesta1;
           
       });
       alerta17.addEventListener("click", function(){
           alert("La respuesta es "+ "Vs: "+ "went"+ " , "+  " Vp : " + "gone");
       });

     /**--------------------------------------------------------------------------------------------- */

     boton18.addEventListener("click", function(){
        var datops18=verbops18.value;
        var datopp18=verbopp18.value;
        var respuesta="";
        var respuesta1="";
        
           if(datops18=="put"){
              respuesta="correcta";
       
           }else{
              respuesta="incorrecta";
         
           }
           if(datopp18=="put"){
               respuesta1="correcta";
             
           }else{
               respuesta1="incorrecta";
            
           }
           rpta18.innerText= " Es " + respuesta + "," + respuesta1;
           
       });
       alerta18.addEventListener("click", function(){
           alert("La respuesta es "+ "Vs: "+ "put"+ " , "+  " Vp : " + "put");
       });

   /**--------------------------------------------------------------------------------------------- */
   boton19.addEventListener("click", function(){
    var datops19=verbops19.value;
    var datopp19=verbopp19.value;
    var respuesta="";
    var respuesta1="";
    
       if(datops19=="told"){
          respuesta="correcta";
   
       }else{
          respuesta="incorrecta";
     
       }
       if(datopp19=="told"){
           respuesta1="correcta";
         
       }else{
           respuesta1="incorrecta";
        
       }
       rpta19.innerText= " Es " + respuesta + "," + respuesta1;
       
   });
   alerta19.addEventListener("click", function(){
       alert("La respuesta es "+ "Vs: "+ "told"+ " , "+  " Vp : " + "told");
   });