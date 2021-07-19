

function validarform(){
  //valido el nombre
  if (document.contacto.nombre.value.length==0){

    //  alert("Tiene que escribir su nombre")
    AlertaCamposVacios("Error", "Ingresa tu nombre", "error");
     document.contacto.nombre.focus()
     return 0;
  }
  if (document.contacto.email.value.length==0){
    alert("Tiene que escribir su correo")
    document.contacto.email.focus()
    return 0;
 }





   //el formulario se envia
   AlertaCamposVacios("Envio Exitoso", "En breve nos canctaremos contigo.", "success");
   document.contacto.submit();
}

function AlertaCamposVacios(titulo, descrip, tipoAlerta) {
  Swal.fire(
    titulo,
    descrip,
    tipoAlerta

  );
}
