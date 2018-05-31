{
    let coloresPosibles;
    let combinacionPrueba;
    let aciertos;
    let contador;
    let botonComprobar;
    let intentosRealizados;
    let numeroLinea;

    ////
    let botonJuegoNuevo;
    let botonSalir;
    let nuevoJuego;
    let background_shadow;
    

    let pintarCirculo = function(evt){
        for(let i=0; i<combinacionPrueba.length;i++){
            if(combinacionPrueba[i].style.backgroundColor == "moccasin" || combinacionPrueba[i].style.backgroundColor==""){ 
                switch(this.id){
                    case "colorRojo":
                        combinacionPrueba[i].style="background-color:red";
                        break;
                    case "colorBlanco":
                        combinacionPrueba[i].style="background-color:white";
                        break;
                    case "colorNegro":
                        combinacionPrueba[i].style="background-color:black";
                        break;
                    case "colorAmarillo":
                        combinacionPrueba[i].style="background-color:yellow";
                        break;
                    case "colorNaranja":
                        combinacionPrueba[i].style="background-color:orange";
                        break;
                    case "colorMarron":
                        combinacionPrueba[i].style="background-color:brown";
                        break;
                    case "colorAzul":
                        combinacionPrueba[i].style="background-color:blue";
                        break;
                    case "colorVerde":  
                        combinacionPrueba[i].style="background-color:green";
                        break;
                } //switch
                break;
            }//if 
        }//for
    }

    let comprobarCombinacion = function(){
       let combinacion = [];
       for(let i=0;i<combinacionPrueba.length;i++){         
            switch(combinacionPrueba[i].style.backgroundColor){
                case 'red':
                    combinacion.push('rojo');
                    break;
                case 'white':
                    combinacion.push('blanco');
                    break; 
                case 'black':
                    combinacion.push('negro');
                    break;
                case 'yellow':
                    combinacion.push('amarillo');
                    break;     
                case 'orange':
                    combinacion.push('naranja');
                    break;
                case 'brown':
                    combinacion.push('marron');
                    break;
                case 'blue':
                    combinacion.push('azul');
                    break;
                case 'green':
                    combinacion.push('verde');
                    break;    
            }
       }

      if(combinacion.length==4){
        let numeroAciertos = masterMind.comprobar(combinacion); 
        let contadorAciertos = 0;
        for(let i=0;i<numeroAciertos.estaEnSuSitio;i++){
            aciertos[contadorAciertos].style="background-color:black";
            contadorAciertos++;
        }
        for(let i=0;i<numeroAciertos.esta;i++){
            aciertos[contadorAciertos].style="background-color:white";
            contadorAciertos++;
        }

        if(numeroAciertos.estaEnSuSitio==4){
            hasGanado();
        }else{
            crearNuevaLinea();
        }
        
        
      } 

    }

    let vaciarFondo = function(){
        this.style="background-color: moccasin"
    }

    let hasGanado = function(){
        nuevoJuego.style.left = "0%";
        background_shadow.style.opacity = "0.5";
        background_shadow.style.visibility = "visible";
    }

    let crearNuevaLinea = function(){
        for(let i=0; i<combinacionPrueba.length; i++){
            combinacionPrueba[i].removeEventListener("click", vaciarFondo);
        }

        let intentoFila = document.createElement('div');
        intentoFila.className = "intentoFila";

        let combinacionPrueba2 = document.createElement('div');
        combinacionPrueba2.className = "combinacionPrueba";

        let aciertos2 = document.createElement("div");
        aciertos2.className = "aciertos";

        let circulosPrueba;
        let circulosAcierto;

        for(let i=0; i<4; i++){
            circulosPrueba = document.createElement('div');
            circulosPrueba.classList.add("circulosPrueba" + numeroLinea);
            circulosPrueba.classList.add("circulosPrueba");
            circulosPrueba.addEventListener("click", vaciarFondo);
            
            
            circulosAcierto = document.createElement('div');
            circulosAcierto.classList.add("circuloAcierto" + numeroLinea);
            circulosAcierto.classList.add("circuloAcierto");
            
            
            combinacionPrueba2.appendChild(circulosPrueba);
            aciertos2.appendChild(circulosAcierto);

        }

        intentoFila.appendChild(combinacionPrueba2);
        intentoFila.appendChild(aciertos2);

        intentosRealizados.appendChild(intentoFila);
        
        combinacionPrueba = document.getElementsByClassName("circulosPrueba" + numeroLinea);
        aciertos = document.getElementsByClassName("circuloAcierto" + numeroLinea);
        contador=0;
        numeroLinea++;

    }

    let comenzarNuevoJuego = function(){
        location.reload();
    }

    let cerrarVentana = function(){
        window.close();
    }

      
    let init = function(){
        numeroLinea = 0;
        masterMind.init();
        masterMind.listarObjetivo();
        contador = 0;


        intentosRealizados = document.getElementById("intentosRealizados");
        coloresPosibles = document.getElementsByClassName("colores");
        combinacionPrueba = document.getElementsByClassName("circulosPrueba");
        aciertos = document.getElementsByClassName("circuloAcierto");
        botonComprobar = document.getElementById("botonComprobar");
        botonJuegoNuevo = document.getElementById("botonJuegoNuevo");
        botonSalir = document.getElementById("botonSalir");
        nuevoJuego = document.getElementById("nuevoJuego");
        background_shadow = document.getElementById("background_shadow");

        botonJuegoNuevo.addEventListener("click", comenzarNuevoJuego);
        botonSalir.addEventListener("click", cerrarVentana);

        botonComprobar.addEventListener("click", comprobarCombinacion);

        for(let i=0;i<coloresPosibles.length;i++){
            coloresPosibles[i].addEventListener("click",pintarCirculo);
        }

        for(let i=0;i<combinacionPrueba.length;i++){
            combinacionPrueba[i].addEventListener("click", vaciarFondo);
        }
    }

    window.onload = init;
}