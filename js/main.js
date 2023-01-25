const btnencriptar = document.getElementById("btnencriptar"),
    btndesencriptar = document.getElementById("btndesencriptar"),
    textoingresado = document.getElementById("textoingresado"),
    textconver = document.getElementById("textconver"),
    btncopiar = document.getElementById("btncopiar");


    textoingresado.addEventListener("keyup", ()=>{   //funcion que valida al escribir para q no reciba mayusculas ni caracteres especiales
        let texto = textoingresado.value.toLowerCase() ;
        texto = texto.replace (/^ /,"");          //Valida que el primer espacio no este en blanco
        texto = texto.replace (/[ ]+/g," ");     //Valida q no hayan varios espacios juntos
        texto = texto.replace (/[-´áéíóú{}+*:;!""#$%&/()=?¿¡<>[.,0-9@]+/g,"");  //Valida para que no reciba ´áéíóú-{}+*:;!""#$%&/()=?¿¡<>.,0-9@
        texto = texto.replaceAll("]", "")
        textoingresado.value = texto   //devuelve el texto limpio
    });

     

      btnencriptar.addEventListener("click", ()=>{
        let texto = textoingresado.value; 
        let nuevotexto = [];
        for (let i = 0; i < texto.length; i=i+1){
            if(texto[i] == "e"){
                nuevotexto.push("enter");
            }else if(texto[i] == "i") {
                nuevotexto.push("imes");
            }else if(texto[i] == "a") {
                nuevotexto.push("ai");
            }else if(texto[i] == "o") {
                nuevotexto.push("ober");
            }else if(texto[i] == "u") {
                nuevotexto.push("ufat");
            } else {
                nuevotexto.push(texto[i])
            }
        }
        textconver.value = nuevotexto.join("");
      });


      btndesencriptar.addEventListener("click", ()=>{
        let texto = textoingresado.value;
        let palabrasencrip = ["enter", "imes", "ai", "ober", "ufat"];
        let vocales = ["e", "i", "a", "o", "u"];
        for (let i = 0; i < palabrasencrip.length; i=i+1){
           texto =  texto.replaceAll(palabrasencrip[i], vocales[i]);
        }
        textconver.value = texto
      });


      btncopiar.addEventListener("click", ()=>{
        textconver.select();
        document.execCommand("copy");
        textconver.value = "";
        textoingresado.value = "";
        textoingresado.focus();
      });


     



