<?php
  $db = new PDO('sqlite:registro.sqlite3');
  $qry = $db->query("SELECT classeId, anno || ' ' || sezione || ' ' || articolazione AS classe FROM Classe ORDER BY classe");
  $classi = $qry->fetchAll();
?>

<!DOCTYPE html>
<html lang="it">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
		<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700" type="text/css">
		<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.indigo-blue.min.css">
		<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script> 

		<title>Prove orali - Scelta classe</title>
	</head>
	<body>
    <div>
  <!-- Always shows a header, even in smaller screens. -->
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <span class="mdl-layout-title">Registro del docente</span>
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>
      <!-- Navigation. We hide it in small screens. -->
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <a class="mdl-navigation__link" href="/index.php">Appello</a>
      </nav>
    </div>
  </header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Scegli la classe</span>
    <nav class="mdl-navigation">
          <?php
                  for($i = 0; $i < count($classi); $i++) {
                    echo '<a class="mdl-navigation__link" href="/appello.php?classeId=' . $classi[$i]['classeId'] . '">' . $classi[$i]['classe'] . '</a>' . "\n";
                  }
          ?>
    </nav>
  </div>
  <main class="mdl-layout__content">
    <div class="page-content">
      <!-- Carica dinamicamente la pagina opportuna (appello, interrogati, domande) -->
    </div>
  </main>
    </div>
	</body>
</html>