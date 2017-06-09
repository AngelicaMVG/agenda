var cargarPagina = function() {
  var guardar = $('#guardar');
  guardar.attr('disabled', true);
  var obtenerNombre = $('#nombre').val();
  var obtenerTelefono = $('#telefono').val();

  $('#nombre').keyup(function(e){
   $('#guardar').removeAttr('disabled');
  })

  guardar.click(function() {
    var contenedor = $('#contenedor');
    var obtenerNombre = $('#nombre').val();
    var obtenerTelefono = $('#telefono').val();
    //creamos elementos
    var postContenedor = $("<article />", {"class": "postContenedor"})
    var nombre = $('<h3/>');
    var telefono = $('<h3/>');
    var botonBorrar = $('<button><i class="fa fa-trash"></i> </button>', {"class": "btn"});

    botonBorrar.addClass('btn-borrar');
    nombre.addClass('nombre');

    botonBorrar.click(function(){
      $(this).parent().remove();
    })

    nombre.text(obtenerNombre);
    telefono.text(obtenerTelefono);

    postContenedor.append(nombre);
    postContenedor.append(telefono);
    postContenedor.append(botonBorrar);

    contenedor.prepend(postContenedor);
    $('#nombre').val('');
    $('#telefono').val('');
    $(this).attr('disabled', true);
    $('#myModal').modal('hide');

  });
  //borrar todos los contactos

  $('#borrar').click(function(){
    var contenedor = $('#contenedor');
    contenedor.children().remove();
  });

  //buscar contacto

  $('#buscar').click(function(){
    var buscar = $('<input [type = search]/>')

  });

  
};

$(document).ready(cargarPagina);
