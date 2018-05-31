{
    let botonIniciar;

    let iniciarJuego = function(){
        let nuevaVentana = window.open("Juego.html", "MasterMind");        
    }

    let init = function(){
        botonIniciar = document.getElementById('botonIniciar');

        botonIniciar.addEventListener("click", iniciarJuego);
    }

    window.onload=init;
}