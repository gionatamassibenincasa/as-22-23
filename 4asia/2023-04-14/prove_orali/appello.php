<?php

$db = new PDO('sqlite:registro.sqlite3');
$sql = 'SELECT RANK() OVER ( ORDER BY cognome) AS pos, cognome, nome ' .
'FROM Studente ' .
'    INNER JOIN Registro USING (studenteId) ' .
'WHERE classeId = ' . $_GET['classeId'];
$qry = $db->query($sql);
$elenco = $qry->fetchAll();
?>

<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="utf-8">
    <title>Registro - appello</title>
  </head>
  <body>
    <table>
      <caption>Elenco</caption>
      <thead>
        <tr>
          <th>Pos</th>
          <th>Cognome</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <?php
            for($i = 0; $i < count($elenco); $i++) {
              echo "<tr>";
              $colonne = $elenco[$i];
              echo "<th>" . $colonne['pos'] . "</th>";
              echo "<td>" . $colonne['cognome'] . "</td>";
              echo "<td>" . $colonne['nome'] . "</td>";
              echo "</tr>";
            }
        ?>
      </tbody>
  </body>
</html>