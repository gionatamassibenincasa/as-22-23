<?php
  $db = new PDO('sqlite:registro.sqlite3');
  $qry = $db->query("SELECT classeId, anno || ' ' || sezione || ' ' || articolazione AS classe FROM Classe");
  $classi = $qry->fetchAll();
?>

<!DOCTYPE html>
<html lang="it">
	<head>
		<meta charset="utf-8">
		<title>Prove orali - Scelta classe</title>
	</head>
	<body>
		<form action="appello.php" method="GET">
			<label>Classe:
				<select name="classeId">
          <?php
              for($i = 0; $i < count($classi); $i++)
                echo '<option value="' . $classi[$i]['classeId'] . '">' . $classi[$i]['classe'] . '</option>';
          ?>
				</select>
			</label>
			<button type="submit">Fai l'appello</button>
		</form>
	</body>
</html>