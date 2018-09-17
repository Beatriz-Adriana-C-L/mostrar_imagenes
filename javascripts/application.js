window.onload=function(e){
	var pais = document.getElementById('country');
	var flag = document.getElementById('flag');

	pais.onclick=function(e){
		var ruta = pais.value;
		flag.src=ruta;
		alert(ruta);
	}
}