<?php

$db = new PDO('sqlite:registro.sqlite3');
$sql = 'SELECT RANK() OVER ( ORDER BY cognome) AS pos, cognome, nome ' .
'FROM Studente ' .
'    INNER JOIN Registro USING (studenteId) ' .
'WHERE classeId = ' . $_GET['classeId'];
$qry = $db->query($sql);
$elenco = $qry->fetchAll();
$time = time();
$data = date('Y-m-d', $time);
$paginaSorteggio = 'index.php?pagina=sorteggio&classeId=' .
   $_GET['classeId'] . '&data=' . $data;
?>

<a href="<?= $paginaSorteggio ?>">
  <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
    <i class="material-icons">arrow_forward</i>
  </button>
</a>
    <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
      <caption>Elenco</caption>
      <thead>
        <tr>
          <th>Pos</th>
          <th class="mdl-data-table__cell--non-numeric">Cognome</th>
          <th class="mdl-data-table__cell--non-numeric">Nome</th>
          <th class="mdl-data-table__cell--non-numeric">Assente</th>
          <th class="mdl-data-table__cell--non-numeric">G. restanti</th>
          <th class="mdl-data-table__cell--non-numeric">G. non motivata</th>
          <th class="mdl-data-table__cell--non-numeric">Giust. libera</th>
        </tr>
      </thead>
      <tbody>
        <?php
            for($i = 0; $i < count($elenco); $i++) {
              echo '<tr>';
              $colonne = $elenco[$i];
              echo '<td>' . $colonne['pos'] . '</th>';
              echo '<td class="mdl-data-table__cell--non-numeric">' . $colonne['cognome'] . '</td>';
              echo '<td class="mdl-data-table__cell--non-numeric">' . $colonne['nome'] . '</td>';
              echo '</tr>';
            }
        ?>
      </tbody>
    </table>