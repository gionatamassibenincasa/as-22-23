<?php
  if (!isset($_GET['candidati']))
    $candidati = 0;
  else
    $candidati = $_GET['candidati'];
  // Seleziona solo i candidati, ossia studenti presenti e non giustificati nella data odierna
  $qry = $db->prepare("SELECT count(*) FROM Registro WHERE classeId = ?");
  $qry->execute([$_GET['classeId']]);
  $maxCandidati = $qry->fetchColumn();

  function mescolaPrimiN($a, $n, $len) {
    for ($i = 0; $i < $n; $i++) {
      $j = rand($i + 1, $len - 1);
      $t = $a[$i];
      $a[$i] = $a[$j];
      $a[$j] = $t;
    }
    return array_slice($a, 0, $n);
  }
?>

<div>
<p style="width:300px">
  <input type="range" id="s1" min="0" max="<?= $maxCandidati ?>" value="<?= $candidati ?>" step="1">
</p>

<p>Numero studenti: <span id="numero"><?= $candidati ?></span></p>

</div>

<a id="estrai-url">
<button id="genera" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
  Estrai
</button>
</a>

<?php if ($candidati > 0) :?>
  
    <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
      <caption>Elenco</caption>
      <thead>
        <tr>
          <th class="mdl-data-table__cell--non-numeric">Cognome</th>
          <th class="mdl-data-table__cell--non-numeric">Nome</th>
        </tr>
      </thead>
      <tbody>
<?php 
  // Seleziona solo i candidati, ossia studenti presenti e non giustificati nella data odierna
  $qry = $db->prepare("SELECT studenteId FROM Registro WHERE classeId = ?");
  $qry->execute([$_GET['classeId']]);
  $array_candidati = $qry->fetchAll(PDO::FETCH_COLUMN, 0);
  $interrogati = mescolaPrimiN($array_candidati, $candidati, $maxCandidati);

  $in  = str_repeat('?,', $candidati - 1) . '?';
  $sql = "SELECT cognome, nome FROM Studente WHERE studenteId IN ($in) ORDER BY cognome, nome";
  $qry = $db->prepare($sql);
  $qry->execute($interrogati);
  $stud = $qry->fetchAll();

  for($i = 0; $i < count($stud); $i++) {
              echo '<tr>';
              $colonne = $stud[$i];
              echo '<td class="mdl-data-table__cell--non-numeric">' . $colonne['cognome'] . '</td>';
              echo '<td class="mdl-data-table__cell--non-numeric">' . $colonne['nome'] . '</td>';
              echo '</tr>';
            }
?>
      </tbody>
    </table>

<?php endif ?>

<script>
    document.getElementById("s1").addEventListener("input", ev => {
        document.getElementById("numero").innerText = ev.target.value;
        document.getElementById("estrai-url").href = document.documentURI + "&candidati=" + ev.target.value;
    });

</script>
