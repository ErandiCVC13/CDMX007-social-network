(function(window, document){
    libreria.getID('vista').enrutar()
    .ruta('/','./views/inicio.html', 'controlador', window.controlador.iniciosesion)
    .ruta('/registro', './views/registro.html','controlador',window.controlador.registro )
    .ruta('/wall', './views/wall.html','controlador', window.controlador.muro )
    

})(window, document);

// (function(window, document){
//     libreria.getID('vista').enrutar()
//            .ruta('/','/vistas/inicio.html', null, null)
//            .ruta('/crear-contacto', './vistas/crear.html', 'contacto', function(){
//                    _.getID('crearContacto').noSubmit();
//            })
//            .ruta('/listar-contactos', 
//            './vistas/listar.html',
//            'contacto', function(){
//                    _.getCtrl().listar();
//            })
//            .ruta('/actualizar-contactos', './vistas/actualizar.html', 'contacto', function(){
//                    _.getID('frmActualiza').noSubmit();
//                    _.getCtrl().preparaActualizacion();
//            })
   
//    })(window,document)