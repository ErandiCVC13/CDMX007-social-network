(function(window, document){
    libreria.getID('vista').enrutar()
    .ruta('/','./views/inicio.html', 'controlador', window.controlador.iniciosesion)
    .ruta('/registro', './views/registro.html','controlador',window.controlador.registro )
    .ruta('/wall', './views/wall.html','controlador', window.controlador.muro )
})(window, document);

