var _ar_datos= [];	
var i=0,j=0;
var aux;
var iteracion; 

$(document).ready(function() {

	var ii=1;

   $("#add_valor").click(function(){
    	

		ii++;
    	$("#dato_valor").append(
    			
				
		  	'<div class="form-group" id="fila_valor_'+ii+'">'
		  	+'<div class="text-right"><button type="button" class="btn btn-danger remove_valor" id="'+ii+'" name="remove_valor">-</button></div>'
		  	+'<br/>'
		  	+'<label for="numeros"> Ingrese valor : </label>'
			+'<input type="text" class="form-control" id="numeros['+ii+']" name="numeros['+ii+']" placeholder="Ingrese Valor" onblur="llenar_celda('+ii+')">'		
			+'<br/>'
			+'<br/>'
			+'</div>'
			+'<br/>'

		)

    });


    $(document).on('click','.remove_valor',function(){

		var button_id = $(this).attr("id");
	
		var celda = $("div input[name='numeros["+button_id+"]']");

		$("#celdas_valor").html("");

		celda.map( function() { 
			
			_valor_celda = parseInt($(this).val());

			if(_valor_celda ==""){

				$('div#fila_valor_'+button_id).remove();

			}else{	

			var index = _ar_datos.indexOf(parseInt(_valor_celda));
			_ar_datos.splice(index, 1);
			$('div#fila_valor_'+button_id).remove();

			
			
			}

		}).get();

			$.each( _ar_datos, function( index, value ){


				$("#celdas_valor").append(

						'<div class="form-inline">'
						+'<div class="elemento"><label>'+value+'</label></div>'
						+'</div>'

						);




			});

			
 


			
	});

	
	

	

});
	
	

	function llenar_celda(id_celda)
	{
		var celda = $("div input[name='numeros["+id_celda+"]']");


		var _valor_celda="";

		$("#celdas_valor").html("");

		celda.map( function() { 

			_valor_celda = parseInt($(this).val());

			if(_valor_celda == "")
			{
					
			}else if(parseInt(_valor_celda) >=0){


				if(jQuery.inArray(parseInt(_valor_celda),_ar_datos) == -1)
				{
				   
				    _ar_datos.push(parseInt(_valor_celda));

					
				}else{
					alert("El valor "+_valor_celda+" ya fue ingresado. Por favor colocar otro valor");	
				};

		
			}			



		}).get();


		html='<div class="form-inline">'
				$.each(_ar_datos,function(index,value){
					html+='<div class="elemento"><label>'+value+'</label></div>'
				})
				html+='</div>';
				

			$("#celdas_valor").append(html);


	}

	function comenzar(){
 
    iteracion=setInterval(burbuja,300);
   	$("#botonsito").prop("disabled",true)
 
}
 

function imprimirArreglo(){
 
     
    $("#celdas_ordenadas").html("");

    	$("#celdas_ordenadas").append("<h3>Serie Ordenada</h3>");
  
    for(i_=0;i_<_ar_datos.length;i_++){
 
     	$("#celdas_ordenadas").append("<div class='bloque'>"+_ar_datos[i_]+"</div>");
    }
 
}

function burbuja(){

	var len = _ar_datos.length;

	for(i = 0 ; i < (len - 1);i++)
	{
		for(j = 0 ; j < (len - i);j++)
		{
			if(_ar_datos[j]>_ar_datos[j+1])
			{
				aux = _ar_datos[j];
				_ar_datos[j]=_ar_datos[j+1];
				_ar_datos[j+1]=aux;

			}else{

				clearInterval(iteracion);

			}


		}
	}

	imprimirArreglo();
}
