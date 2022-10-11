<script>
  let prova = [
    {
      competenza: "Esercizi sulla struttura di sequenza",
      esercizi: [
        {
          titolo: "Area del quadrato di lato <code>l</code>",
          descrizione:
            "Si modifichi la funzione <code>quadrato</code> affiché restituisca il quadrato del parametro <code>l</code>",
          input: "Il parametro reale <code>l</code>",
          output: "Il quadrato di <code>l</code>",
          esempi: ["quadrato(0) = 0", "quadrato(1) = 1", "quadrato(10) = 100"],
        },
        {
          titolo:
            "Perimentro del rettangolo di base <code>b</code> e area <code>A</code>",
          descrizione:
            "Si modifichi la funzione <code>perimentroRettangolo</code> affiché restituisca il perimetro del rettangolo di base <code>b</code> e area <code>A</code>",
          input: "I parametri reali <code>b</code> e <code>A</code>",
          output: "Il perimetro <code>2(b+h)</code>",
          esempi: [
            "perimentroRettangolo(1, 2) = 6",
            "perimentroRettangolo(10, 20) = 24",
            "perimentroRettangolo(25, 625) = 100",
          ],
        },
        {
          titolo:
            "Perimentro del trapezio rettangolo di base maggiore <code>B</code>, altezza <code>h</code> e area <code>A</code>",
          descrizione:
            "Si modifichi la funzione <code>perimetroTrapezio</code> affiché restituisca il perimetro del rettangolo di base maggiore <code>B</code>, altezza <code>h</code> e area <code>A</code>. Si ricordi che A = (B+b)*h / 2.",
          input: "I parametri reali <code>b</code> e <code>A</code>",
          output: "Il perimetro <code>2(b+h)</code>",
          esempi: [
            "perimetroTrapezio(7, 3, 15) = 18",
            "perimetroTrapezio(17, 5, 55) = 40",
            "perimetroTrapezio(31, 7, 133) = 70",
          ],
        },
      ],
    },

    {
      competenza: "Esercizi sulla struttura di selezione",
      esercizi: [
        {
          titolo: "Pari o dispari",
          descrizione:
            "Si modifichi la funzione <code>pari</code> affiché restituisca <code>VERO</code> se il parametro <code>n</code> è pari, <code>FALSO</code> altrimenti",
          input: "Il parametro intero <code>n</code>",
          output:
            "<code>VERO</code> se <code>n</code> è divisibile per 2, <code>FALSO</code> altrimenti",
          esempi: ["pari(0) = True", "pari(1) = False", "pari(100) = True"],
        },
        {
          titolo: "Maggiorenne o minorenne",
          descrizione:
            "Si modifichi la funzione <code>maggiorenne</code> affiché restituisca <code>maggiorenne</code> o <code>minorenne</code> in funzione dell'età",
          input: "Il parametro intero <code>eta</code>",
          output:
            "<code>minorenne</code> se <code>eta &lt; 18</code>, <code>maggiorenne</code> altrimenti",
          esempi: [
            'maggiorenne(16) = "minorenne"',
            'maggiorenne(18) = "maggiorenne"',
            'maggiorenne(42) = "maggiorenne"',
          ],
        },
        {
          titolo:
            "Abbonamento con tariffa base e ridotta in base al parametro <code>eta</code>",
          descrizione:
            "Si modifichi la funzione <code>abbonamento</code> affiché restituisca <code>35</code> se l'età è minore di 11 o maggiore di 64, <code>50</code> altrimenti.",
          input: "Il parametro intero <code>eta</code>",
          output: "La tariffa come numero intero",
          esempi: [
            "abbonamento(10) = 35",
            "abbonamento(16) = 50",
            "abbonamento(65) = 35",
          ],
        },
      ],
    },

    {
      competenza: "Esercizi sulla struttura di iterazione",
      esercizi: [
        {
          titolo: "Somma dei primi n numeri pari",
          descrizione:
            "Si modifichi la funzione <code>sommaPari</code> affiché restituisca la somma dei primi n numeri pari: 0 + 2 + 4 + ... + 2 (n - 1)",
          input: "Il parametro intero <code>n</code>",
          output: "0 + 2 + 4 + ... + 2 (n - 1)",
          esempi: [
            "sommaPari(0) = 0",
            "sommaPari(10) = 1",
            "quadrato(10) = 100",
          ],
        },
        {
          titolo: "Prodotto dei numeri da 1 a <code>n</code>",
          descrizione:
            "Si modifichi la funzione <code>fattoriale</code> affiché restituisca il prodotto di tutti i numeri tra 1 e <code>n</code>",
          input: "Il parametro intero <code>n</code>",
          output: "1 * 2 * 3 * ... * n",
          esempi: [
            "fattoriale(1) = 1",
            "fattoriale(5) = 120",
            "fattoriale(10) = 3628800",
          ],
        },
        {
          titolo:
            "Somma di quadrati dei numeri compresi tra 1 e <code>n</code>",
          descrizione:
            "Si modifichi la funzione <code>sommaQuadrati</code> affiché restituisca la somma dei quadrati dei numeri compresi tra 1 e <code>n</code>.",
          input: "Il parametro intero <code>n</code>",
          output: "1 + 4 + 9 + ...",
          esempi: [
            "sommaQuadrati(1) = 1",
            "sommaQuadrati(3) = 14",
            "sommaQuadrati(10) = 385",
          ],
        },
      ],
    },
  ];
  // import Card from "@smui/card";
</script>

<main>
  <h1>Prova di informatica</h1>

  <h2>Algoritmo per l'esecuzione della verifica e della sua consegna</h2>

  <ol>
    <li>Scaricare il file della prova in formato Flowgorithm;</li>
    <li>Rinominarlo con il proprio cognome;</li>
    <li>
      Modificare la proprietà <code>autore</code> (<tt
        >Programma > Informazioni programma... > Autore/i:</tt
      >) inserendo il proprio nome e cognome;
    </li>
    <li>Aprire il file trascinarlo sull'icona di Flowgorithm;</li>
    <li>Per ogni esercizio:</li>
    <ol>
      <li>Aprire su Flowgorithm la funzione corrispondente;</li>
      <li>progettare l'algoritmo o passare all'esercizio succcessivo;</li>
    </ol>
    <li>Consegnare su Classroom il file.</li>
  </ol>

  {#each prova as p, i}
    <h2>{p.competenza}</h2>

    {#each p.esercizi as e, j}
      <div>
        <h3>
          {i + 1}.{j + 1}
          {@html e.titolo}
        </h3>
        <p>
          {@html e.descrizione}
        </p>
        <p>
          <strong>INPUT</strong>: {@html e.input}
        </p>
        <p>
          <strong>OUTPUT</strong>: {@html e.output}
        </p>
        <p>
          <strong>Esempi</strong>:<br />
          {#each e.esempi as s}
            <code>{s}</code><br />
          {/each}
        </p>
      </div>
    {/each}
  {/each}
</main>
