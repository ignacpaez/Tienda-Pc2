function valida(){
	//Validar rut
	/*var rutCliente = document.getElementById("rutCliente");
	var expRutCliente = /^[0-9]+[-]{1}[0-9kK]$/;
	if(!expRutCliente.test(rutCliente.value)){
		alert("rut de 7 digitos, ingresar codigo verificador");
		rutCliente.focus();
		return false;
	}*/
	
	//Nombre maximo 20 caracteres
	var nombreCliente = document.getElementById("nombreCliente");
	var expNombreCliente = /^[A-Za-z\s]{1,20}$/;
	if(!expNombreCliente.test(nombreCliente.value)){
		alert("Nombre máximo 20 caracteres");
		nombre.focus();
		return false;
	}
	
	//Validar Vehiculo
	var equipo = document.getElementById("equipo");
	if(equipo.selectedIndex == 0){
		alert("Equipo no seleccionado");
		return false;
	}
	
	
		
	//Validar Forma Pago
	var formaPago = document.getElementById("formaPago");
	if(formaPago.selectedIndex == 0){
		alert("Forma Pago no seleccionado");
		formaPago.focus();
		return false;
	}
	var equipo = document.getElementById("equipo");
	var preciof = document.getElementById("preciof");
	if(equipo.selectedIndex == 2){
		preciof.Text = "$400.000";
		
	}
	
	
	
	return true;
	alert("Compra exitosa");	
}