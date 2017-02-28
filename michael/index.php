<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>.: Ordenamiento de series :.</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<script src="assets/js/funciones.js"></script>
	<link rel="stylesheet" href="assets/css/estilos.css">
</head>
<body>
	<div class="container">
		<div class="row">

			<div class="col-lg-6">
				
			

				<div class="centro">

					<h1> Ordenamiento por series</h1>
					<br/>
					<div class="form-inline" id="dato_valor" name="dato_valor">
						
						<div class="form-group" id="fila_valor_0">
							<div class="text-right"><button type="button" class="btn btn-primary" id="add_valor" name="add_valor"> + </button></div>
							<br/>
						   <label for="numeros"> Ingrese valor : </label>
						   <input type="text" class="form-control" id="numeros[0]" name="numeros[0]" placeholder="Ingrese Valor" onblur="llenar_celda(0)" value="">
						<br/>
						<br/>
						</div>
						<br/>

					</div>

				</div>
				<div>
					
					<input id="botonsito" type="button" value="Ordenar" onclick="comenzar()" />
				</div>

			</div>
			<div class="col-lg-6">

				<br/>

					<div id="celdas_valor">
						
					</div>


			</div>
				<br>
			<div class="col-lg-6">
				<div id="celdas_ordenadas">
						
					</div>
			</div>
		
		</div>
	</div>
</body>
</html>