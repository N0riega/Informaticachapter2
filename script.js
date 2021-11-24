let imc = Number (prompt("ingrese su peso en Kg"))
if(imc< 18.5)
{
    console.log("usted esta bajo de peso")
}else{
    if(imc <25)
        {console.log("su peso es normal")
    }else{
     if(imc < 30)
        {console.log("preobesidad")
        }else{
     if(imc <=30)
        {console.log("obesidad")
    }
    }
    }
}