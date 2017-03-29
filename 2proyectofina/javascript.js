	 //variable para mi contador;
	 var i =0;
	function crearelemento (){
		//alert("prueba")
		//contador que se uso para cambiar los id de la caja de texto y el boton
		i = i + 1;
		//crear los elementos que contendra pendientes de semana:boton, caja de texto y un h2
	    var btn = document.getElementById("btncrearlista");
	    var elemento= document.getElementById('semana');
		var text=document.getElementById("crearlista").value;
		console.log(text);
		var h2=document.createElement("h2");
		h2.innerHTML =text;
		var div=document.createElement("div");
		div.id="div"+i;
		var caja=document.createElement("input");
		var boton= document.createElement("input");
        //dar valor a los botones 
		boton.type="button";
		boton.value="crearpendiente";
		//agrego un addEventListener a los botones que se crean en cada pendiente semanal 
		if (boton.addEventListener) {
	    boton.addEventListener('click', crearlista, false);
	     } else {
	    boton.attachEvent('onclick', crearlista);
	    }
		boton.id="btn"+i;
		caja.id=i;
	    elemento.appendChild(h2);
		elemento.appendChild(div);
		
		elemento.appendChild(caja);
		elemento.appendChild(boton);


	}
	 //document.getElementById("btn1").onclick=crearlista();
	function crearlista(){
		//funcion que me  escribe los pendientes obtiene el valor de la caja de texto y escribe en el div que se creo 
		var lista=document.getElementById("1").value;
		console.log(lista)
		var escribir=document.getElementById("div1");
		//el span manda a llamar la funcion eliminar cuando al darle clic
	    escribir.innerHTML+=lista +" <span onclick='eliminar(this)'>X</span> "+ "<br>";
	}
	function eliminar(){
		//elimina todos los elementos que se escriben 
		document.getElementById("div1").innerHTML="";
	}
