console.log('JS EXTERNO CARGADO');

(function ($) {
  $(function () {
    //Para seleccionar con jquery se debe agregar el shadowRoot como segundo atributo
    console.log('text field = ', $('#textfield', shadowRoot).val());
  }); // end of document ready
})(jQuery); // end of jQuery name space
