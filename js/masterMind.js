let masterMind = (function(){
    let colores = ['verde','azul','marron','naranja','amarillo','negro','blanco','rojo'];
    let esta;
    let estaEnSuSitio;
    let objetivo;
    
    let sacarColorAleatorio = function(){
       return colores[Math.floor(Math.random() * 8)];
    }  

    let rellenarObjetivo = function(){
        for(let i=0;i<4;i++){
            objetivo.push(sacarColorAleatorio());
        }
    }
    
    let listarObjetivo = function(){
        console.log(objetivo);
    }

    let comprobar = function(arrayUsuario){
        let copiaObjetivo = objetivo.slice();
        esta = 0;
        estaEnSuSitio = 0;

        arrayUsuario.forEach((element,index)=>{
            if(copiaObjetivo[index]==element){
                copiaObjetivo[index]=undefined;
                arrayUsuario[index]=1;
                estaEnSuSitio++;
            }
        });
        arrayUsuario.forEach((element,index)=>{
            let indice = copiaObjetivo.indexOf(element);
            if(copiaObjetivo.indexOf(element)!=-1){
                copiaObjetivo[indice]=0;
                esta++;
            }
        });
        return{
                listarObjetivo:listarObjetivo,
                estaEnSuSitio:estaEnSuSitio,
                esta:esta
        }
    }

    
    let init = function(){
        objetivo = [];
        rellenarObjetivo();
    }

    return{
        init:init,
        comprobar:comprobar,
        listarObjetivo:listarObjetivo
    }
})();