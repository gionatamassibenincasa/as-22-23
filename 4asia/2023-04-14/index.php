<?php
	$numeroStudenti = 8;
?>
<!DOCTYPE html>
<html lang="it">
	<head>
		<meta charset="utf-8">
		<title>Numeri casuali</title>
	</head>
	<body>
		<h1>Numeri casuali</h1>
		
		<form>
			<label for="numeri">Numeri: 
				<input type="number" min="1" max="<?= $numeroStudenti ?>" id="numeri" name="numeri" value="<?= isset($_GET['numeri'])?$_GET['numeri']:1;?>" />
			</label>
			<button type="submit">Genera!</button>
		</form>
		
		<ol>
			<?php
				$estratto = array_fill(1, $numeroStudenti, 
				for($i = 0; $i < $_GET['numeri']; $i++) {
					$numeroCasuale = rand(1, $numeroStudenti);
					while ($estratto[$numeroCasuale])
						$numeroCasuale = rand(1, $numeroStudenti);
					$estratto[$numeroCasuale] = true;
					echo "<li>" . $numeroCasuale . "</li>\n";
				}
			?>
		</ol>
	</body>
</html>
