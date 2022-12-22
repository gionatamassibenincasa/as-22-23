function creaQuiz(quiz) {
  let f = FormApp.create(quiz.titolo);
  f.setIsQuiz(true);
  f.setCollectEmail(true);
  f.setConfirmationMessage("Il quiz è stato consegnato");
  f.setDescription(quiz.descrizione);
  f.setLimitOneResponsePerUser(true);
  f.setProgressBar(true);
  f.setRequireLogin(true);
  f.setShowLinkToRespondAgain(false);
  f.setShuffleQuestions(true);

  if (quiz.quizMulti.tf) {
    quiz.quizMulti.tf.forEach((quesito, i) => {
      f.addPageBreakItem();
      let item = f.addMultipleChoiceItem();
      item.setPoints(1);
      item.setTitle(quesito.ques);
      let scelte = [];
      scelte.push(item.createChoice("Vero", quesito.ans));
      scelte.push(item.createChoice("Falso", !quesito.ans));
      item.setChoices(scelte);
    });
  }

  if (quiz.quizMulti.multiList) {
  if (quiz.quizMulti.multiList) {
    quiz.quizMulti.multiList.forEach(quesito => {
      try {
        f.addPageBreakItem();
        if (quesito.url) {
          let imgBlob = UrlFetchApp.fetch(quesito.url).getBlob();
          f.addImageItem().setImage(imgBlob).setTitle("Riferisciti a questa immagine");
        }
        let item = f.addMultipleChoiceItem();
        item.setPoints(1);
        item.setTitle((quesito.ques));
        let scelte = [];
        scelte.push(item.createChoice((quesito.ans), true));
        quesito.ansSel.forEach((q) =>
          scelte.push(item.createChoice((q), false))
        );
        item.setChoices(scelte);
      } catch (e) {
          Logger.log("Errore " + quiz.titolo + " " + e);
      }
    });
  }

  if (quiz.quizMulti.fill) {
    quiz.quizMulti.fill.forEach((quesito) => {
      let item = f.addTextItem();
      item.setPoints(1);
      item.setTitle(quesito.ques);
      // Mancando, va aggiunto a mano!
      //item.setCorrectAnsware(ques.ans)
    });
  }

  Logger.log("Published URL: " + f.getPublishedUrl());
  Logger.log("Editor URL: " + f.getEditUrl());
}

function main() {
  const qs = [
    {
      baseDir: "Vol3/QuizInterattivi/Capitolo1",
      classe: "3",
      capitolo: "1",
      titolo: "Classe 3 cap. 1. Processi aziendali e sistema informatico",
      descrizione:
        "Pro.SIA - Informatica e processi aziendali - Classe 3\n1. Processi aziendali e sistema informatico",
      quizMulti: {
        multiList: [
          {
            ques: "Quale delle seguenti definizioni corrisponde al significato del termine outsourcing?",
            ans: "L'affidamento di alcune parti gestionali del sistema informativo ad aziende e societa' di servizi esterne.",
            ansSel: [
              "L'acquisizione di informazioni da banche dati esterne all'azienda.",
              "L'acquisto di software per il sistema informatico.",
              "La progettazione del sistema informativo nelle aziende che hanno molte filiali.",
            ],
          },
          {
            ques: "Che cosa si intende con ERP?",
            ans: "Un software per soluzioni aziendali integrate.",
            ansSel: [
              "Il trattamento automatico dei documenti aziendali.",
              "Un unico grande programma che gestisce tutta l'azienda.",
              "L'estrazione dei dati aziendali da database decisionali.",
            ],
          },
        ],
        tf: [
          {
            ques: "Il sistema informativo aziendale è l'insieme delle attrezzature hardware e software di un'azienda",
            ans: false,
          },
          {
            ques: "Il sistema informatico è l'insieme delle risorse tecnologiche, delle persone che le utilizzano e delle applicazioni aziendali",
            ans: true,
          },
          {
            ques: "Le procedure e le applicazioni informatiche non possono essere utilizzate negli ambiti decisionali dell'azienda",
            ans: false,
          },
          {
            ques: "I dati sono una materia prima per l'azienda",
            ans: true,
          },
        ],
      },
    },
    {
      baseDir: "Vol3/QuizInterattivi/Capitolo2",
      classe: "3",
      capitolo: "2",
      titolo: "Classe 3 cap. 2. Sistemi operativi",
      descrizione:
        "Pro.SIA - Informatica e processi aziendali - Classe 3\n2. Sistemi operativi",
      quizMulti: {
        multiList: [
          {
            ques: "Quale tra i seguenti termini indica l�insieme dei programmi di base che permettono il funzionamento del computer?",
            ans: "Sistema operativo",
            ansSel: ["Hardware", "Memoria ROM", "Mainframe"],
          },
          {
            ques: "Quali tra i seguenti NON è un modulo del sistema operativo?",
            ans: "Progettazione di programmi",
            ansSel: ["Gestione dei processi", "Gestione dei file"],
          },
          {
            ques: "Quali tra i seguenti NON è un modulo del sistema operativo?",
            ans: "Programma di fatturazione",
            ansSel: [
              "Gestione delle periferiche",
              "Gestione della memoria centrale",
            ],
          },
          {
            ques: "Perché la struttura di un sistema operativo è descritta con un modello a strati?",
            ans: "Ciascun modulo comunica con i livelli sottostanti.",
            ansSel: [
              "I livelli non possono comunicare fra loro.",
              "Tutti i livelli possono comunicare fra loro.",
              "I moduli consentono all�utente di vedere le reali caratteristiche dell'hardware.",
            ],
          },
          {
            ques: "Quale tra i seguenti software è un sistema operativo?",
            ans: "Android",
            ansSel: ["Excel", "Office", "Firefox"],
          },
          {
            ques: "Quale tra i seguenti software è un sistema operativo?",
            ans: "Windows",
            ansSel: ["Word", "Prompt", "Chrome"],
          },
          {
            ques: "Quale tra queste definizioni corrisponde al termine multitasking?",
            ans: "La possibilita' di eseguire piu' applicazioni contemporaneamente.",
            ansSel: [
              "Lo spegnimento automatico del monitor dopo un certo tempo di inattivita'.",
              "L'apertura di un programma di trattamento del testo.",
              "La possibilita' di usare filmati e suoni in un computer.",
            ],
          },
          {
            ques: "Tenendo presente il tipo di organizzazione di un sistema operativo, indica da quale modulo è svolta la seguente funzione: 'ottimizzazione dei tempi di accesso a un disco'",
            ans: "Modulo di gestione delle periferiche",
            ansSel: [
              "Nucleo",
              "Interprete dei comandi",
              "Modulo di gestione della memoria",
            ],
          },
          {
            ques: "Tenendo presente il tipo di organizzazione di un sistema operativo, indica da quale modulo è svolta la seguente funzione: 'gestione dell'organizzazione di un disco'",
            ans: "File System",
            ansSel: [
              "Nucleo",
              "Interprete dei comandi",
              "Modulo di gestione della memoria",
            ],
          },
          {
            ques: "Tenendo presente il tipo di organizzazione di un sistema operativo, indica da quale modulo è svolta la seguente funzione: 'gestione delle pagine o dei segmenti di memoria'",
            ans: "Modulo di gestione della memoria",
            ansSel: [
              "Nucleo",
              "Interprete dei comandi",
              "Modulo di gestione delle periferiche",
            ],
          },
          {
            ques: "Tenendo presente il tipo di organizzazione di un sistema operativo, indica da quale modulo è svolta la seguente funzione: 'terminazione dei processi'",
            ans: "Nucleo",
            ansSel: [
              "Modulo di gestione delle periferiche",
              "Interprete dei comandi",
              "Modulo di gestione della memoria",
            ],
          },
          {
            ques: "Tenendo presente il tipo di organizzazione di un sistema operativo, indica da quale modulo è svolta la seguente funzione: 'assegnazione della CPU ai diversi processi'",
            ans: "Nucleo",
            ansSel: [
              "File System",
              "Interprete dei comandi",
              "Modulo di gestione della memoria",
            ],
          },
          {
            ques: "Tenendo presente il tipo di organizzazione di un sistema operativo, indica da quale modulo è svolta la seguente funzione: 'istruzioni per la formattazione di un disco'",
            ans: "Modulo di gestione delle periferiche",
            ansSel: [
              "Nucleo",
              "Interprete dei comandi",
              "Modulo di gestione della memoria",
            ],
          },
          {
            ques: "Tenendo presente il tipo di organizzazione di un sistema operativo, indica da quale modulo è svolta la seguente funzione: 'assegnazione dei diritti di accesso ad un file'",
            ans: "File System",
            ansSel: [
              "Nucleo",
              "Interprete dei comandi",
              "Modulo di gestione della memoria",
            ],
          },
          {
            ques: "Tenendo presente il tipo di organizzazione di un sistema operativo, indica da quale modulo è svolta la seguente funzione: 'controllo della correttezza sintattica di una linea di comando'",
            ans: "Interprete dei comandi",
            ansSel: [
              "Nucleo",
              "File System",
              "Modulo di gestione della memoria",
            ],
          },
          {
            ques: "Tenendo presente il tipo di organizzazione di un sistema operativo, indica da quale modulo è svolta la seguente funzione: 'sincronizzazione dei processi'",
            ans: "Nucleo",
            ansSel: [
              "File System",
              "Interprete dei comandi",
              "Modulo di gestione della memoria",
            ],
          },
          {
            ques: "Quale tra questi è uno dei vantaggi offerti dalla GUI (Graphical User Interface) agli utenti del computer?",
            ans: "Rendere facile l'uso dello stesso programma da utenti di qualsiasi nazionalit�.",
            ansSel: [
              "Consentire l'uso di stampanti grafiche a colori.",
              "Rendere pi� veloce l'esecuzione dei programmi.",
              "La possibilita' di usare filmati e suoni in un computer.",
            ],
          },
          {
            ques: "Quale tra questi è uno dei vantaggi offerti dalla GUI (Graphical User Interface) agli utenti del computer?",
            ans: "Facilitare l�utilizzo delle applicazioni con icone e mouse.",
            ansSel: [
              "La possibilit&agrave; di eseguire pi� applicazioni contemporaneamente.",
              "Rendere pi� veloce l'esecuzione dei programmi.",
              "La possibilit&agrave; di usare filmati e suoni in un computer.",
            ],
          },
          {
            ques: "Il programma con cui � stato creato un file � riconoscibile tramite:",
            ans: "La sua estensione.",
            ansSel: [
              "Il suo nome.",
              "La sua dimensione in byte.",
              "La cartella a cui appartiene.",
            ],
          },
        ],
        tf: [
          {
            ques: "Con il tasto destro mantenuto premuto si possono trascinare oggetti",
            ans: false,
          },
          {
            ques: "Un doppio clic con il tasto sinistro su un�icona apre un�applicazione",
            ans: true,
          },
          {
            ques: "Un clic con il tasto destro apre un menu",
            ans: true,
          },
          {
            ques: "Un clic con il tasto destro su una voce di un menu attiva il comando corrispondente",
            ans: false,
          },
          {
            ques: "Il passaggio del mouse su un�icona ne attiva le funzioni",
            ans: false,
          },
        ],
      },
    },
    {
      baseDir: "Vol3/QuizInterattivi/Capitolo3",
      classe: "3",
      capitolo: "3",
      titolo: "Classe 3 cap. 3. Progettazione degli algoritmi",
      descrizione:
        "Pro.SIA - Informatica e processi aziendali - Classe 3\n3. Progettazione degli algoritmi",
      quizMulti: {
        multiList: [
          {
            ques: "Con quale termine viene indicato il trasferimento di un problema sul sistema di elaborazione?",
            ans: "Implementazione",
            ansSel: ["Traduzione", "Traslazione", "Programmazione"],
          },
          {
            ques: "Quali sono le attività che in un algoritmo consentono di ottenere i risultati desiderati, mettendo i dati in relazione tra loro?",
            ans: "Istruzioni",
            ansSel: ["Controlli", "Azioni", "Trasformazioni"],
          },
          {
            ques: "Quale tra le seguenti definizioni descrive meglio la Macchina di Turing?",
            ans: "Una macchina astratta in grado di eseguire un algoritmo.",
            ansSel: [
              "Un esempio di computer di piccole dimensioni.",
              "Un automa in grado di eseguire solo le quattro operazioni aritmetiche.",
              "Una macchina in grado di scrivere simboli su un nastro.",
            ],
          },
          {
            ques: "Secondo il teorema di Bohm-Jacopini, quale tra le seguenti non è una struttura di controllo per esprimere un algoritmo?",
            ans: "interruzione",
            ansSel: ["sequenza", "alternativa", "ripetizione"],
          },
          {
            ques: "Quali delle seguenti istruzioni è un esempio corretto di chiamata ricorsiva della funzione fattoriale?",
            ans: "fattoriale=x*fattoriale(x-1)",
            ansSel: [
              "fattoriale=x*fattoriale",
              "fattoriale(x-1)=x*fattoriale(x)",
              "fattoriale(x)=x*(x-1)",
            ],
          },
          {
            ques: "Con quale strumento si traduce il codice sorgente in codice oggetto?",
            ans: "compilatore",
            ansSel: ["editor", "interprete", "linker"],
          },
        ],
        tf: [
          {
            ques: "Un paradigma è un insieme di idee a cui ci si ispira per risolvere i problemi",
            ans: true,
          },
          {
            ques: "Il paradigma imperativo si basa sull'uso di funzioni e sulla loro composizione",
            ans: false,
          },
          {
            ques: "Particolari problemi sono risolti più efficientemente con certi paradigmi",
            ans: true,
          },
          {
            ques: "C++ e Java sono linguaggi che usano il paradigma orientato agli oggetti",
            ans: true,
          },
        ],
        fill: [
          {
            ques: "Le ...................... descrivono le azioni che deve compiere un esecutore.",
            ans: "istruzioni",
          },
          {
            ques: "Un ..................... è formato da più azioni elementari.",
            ans: "processo",
          },
          {
            ques: "Si dice.....................l'ente che esegue le azioni secondo le istruzioni di un algoritmo.",
            ans: "processore",
          },
          {
            ques: "Un ........................ è un insieme di operazioni da eseguire per ottenere certi risultati.",
            ans: "algoritmo",
          },
          {
            ques: "Un ........................ è la rappresentazione grafica di un algoritmo.",
            ans: "diagramma a blocchi",
          },
          {
            ques: "Il termine ..................... indica la rappresentazione di un algoritmo tramite un linguaggio naturale.",
            ans: "pseudocodifica",
          },
          {
            ques: "Un ..................... è la rappresentazione di un algoritmo in una forma comprensibile all'elaboratore.",
            ans: "programma",
          },
        ],
      },
    },
    {
      baseDir: "Vol3/QuizInterattivi/Capitolo4",
      classe: "3",
      capitolo: "4",
      titolo: "Classe 3 cap. 4. Il linguaggio C++",
      descrizione:
        "PRO.SIA - Informatica e processi aziendali\n4. Il linguaggio C++",
      quizMulti: {
        multiList: [
          {
            ques: "Quale delle seguenti istruzioni è quella corretta per attribuire il risultato dell'espressione n * m alla variabile p?",
            ans: "p = n * m",
            ansSel: ["n * m = p", "p << n * m", "p >> n * m"],
          },
          {
            ques: "Supponendo che la variabile a di tipo float assuma il valore iniziale 5.0, quale valore assume alla fine del seguente gruppo di istruzioni? \n a = a * 4; \n a = a * a; \n b = - a;",
            ans: "400.0",
            ansSel: ["200.0", "300.0", "100.0"],
          },
          {
            ques: "Supponendo che la variabile a di tipo float assuma il valore iniziale 5.0, quale valore assume alla fine del seguente gruppo di istruzioni? \n a = a - 1; \n b = a / 2; \n a = 8;",
            ans: "8.0",
            ansSel: ["2.0", "3.0", "1.0"],
          },
          {
            ques: "Supponendo che la variabile a di tipo float assuma il valore iniziale 5.0, quale valore assume alla fine del seguente gruppo di istruzioni? \n b= a + 2; \n a = (a * a) / 2; \n a = 1 / a;",
            ans: "0.08",
            ansSel: ["0.04", "0.09", "0.07"],
          },
          {
            ques: "Supponendo che la variabile a di tipo int assuma il valore iniziale 3 e che la variabile b di tipo int assuma il valore 0, quale valore assume ciascuna variabile alla fine del seguente gruppo di istruzioni? \n a = a * b; \n c = (a + 1) * b; \n b = b - c;",
            ans: "0, 0, 0",
            ansSel: ["3, 3, 6;", "5, 2, 6;"],
          },
          {
            ques: "Supponendo che la variabile a di tipo int assuma il valore iniziale 3 e che la variabile b di tipo int assuma il valore 0, quale valore assume ciascuna variabile alla fine del seguente gruppo di istruzioni? \n b = b + 1; \n a = b; \n c = a + b;",
            ans: "1, 1, 2",
            ansSel: ["3, 3, 6;", "5, 2, 6;"],
          },
          {
            ques: "Qual è la descrizione della funzione pow(x,y)?",
            ans: "Calcola la potenza x alla y",
            ansSel: [
              "Calcola il valore di x arrotondato all'intero superiore",
              "Arrotonda x all'intero inferiore o uguale",
              "Calcola la radice quadrata di x",
            ],
          },
          {
            ques: "Qual è la descrizione della funzione sqrt(x)?",
            ans: "Calcola la radice quadrata di x",
            ansSel: [
              "Calcola il valore di x arrotondato all'intero superiore",
              "Arrotonda x all'intero inferiore o uguale",
              "Calcola la potenza x alla y",
            ],
          },
          {
            ques: "Qual è la descrizione della funzione ceil(x)?",
            ans: "Calcola il valore di x arrotondato all'intero superiore",
            ansSel: [
              "Calcola la radice quadrata di x",
              "Arrotonda x all'intero inferiore o uguale",
              "Calcola la potenza x alla y",
            ],
          },
          {
            ques: "Qual è la descrizione della funzione floor(x)?",
            ans: "Arrotonda x all'intero inferiore o uguale",
            ansSel: [
              "Calcola la radice quadrata di x",
              "Calcola il valore di x arrotondato all'intero superiore",
              "Calcola la potenza x alla y",
            ],
          },
          {
            ques: "Supponendo che x sia di tipo float e y di tipo int, quale delle seguenti istruzioni rappresenta un'operazione di casting?",
            ans: "y=(int)x;",
            ansSel: ["y=intx;", "(y)=intx;", "(int)y=x;"],
          },
          {
            ques: "Quale tra i seguenti NON è un tipo utilizzabile per rappresentare i dati numerici non interi?",
            ans: "long int",
            ansSel: ["float", "double", "long double"],
          },
          {
            ques: "Qual è l'output del seguente programma, supponendo che da tastiera venga assegnato ad a il valore 3? \n \n",
            ans: "4",
            ansSel: ["3", "5", "6"],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol3/QuizInterattivi/Capitolo4/images/Cap9_6a.png/",
          },
          {
            ques: "Qual è l'output del seguente programma, supponendo che da tastiera venga assegnato ad a il valore 3? \n \n",
            ans: "9",
            ansSel: ["8", "5", "6"],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol3/QuizInterattivi/Capitolo4/images/Cap9_6b.png/",
          },
          {
            ques: "Qual è l'output del seguente programma, supponendo che da tastiera venga assegnato ad a il valore 3 e a b il valore 5? \n \n",
            ans: "8",
            ansSel: ["7", "5", "6"],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol3/QuizInterattivi/Capitolo4/images/Cap9_6c.png/",
          },
          {
            ques: "Qual è l'output prodotto dall'esecuzione del seguente segmento di codice? \n \n",
            ans: "8",
            ansSel: ["7", "5", "9"],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol3/QuizInterattivi/Capitolo4/images/Cap9_12.png/",
          },
          {
            ques: "Qual è l'output prodotto dall'esecuzione del seguente segmento di codice? \n \n",
            ans: "5",
            ansSel: ["7", "8", "9"],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol3/QuizInterattivi/Capitolo4/images/Cap9_12b.png/",
          },
          {
            ques: "Che cosa viene scritto in output dall'esecuzione del seguente segmento di programma se x vale 1? \n \n",
            ans: "2",
            ansSel: ["7", "5", "4"],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol3/QuizInterattivi/Capitolo4/images/Cap9_13.png/",
          },
          {
            ques: "Che cosa viene scritto in output dall'esecuzione del seguente segmento di programma se x vale 1? \n \n",
            ans: "2",
            ansSel: ["7", "5", "9"],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol3/QuizInterattivi/Capitolo4/images/Cap9_14.png/",
          },
          {
            ques: "Che cosa viene scritto in output dall'esecuzione del seguente segmento di programma? \n \n",
            ans: "10, 20, 40",
            ansSel: ["20, 30, 40", "30, 40, 50"],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol3/QuizInterattivi/Capitolo4/images/Cap9_15.png/",
          },
          {
            ques: "Che cosa viene scritto in output dall'esecuzione del seguente segmento di programma? \n \n",
            ans: "10",
            ansSel: ["20", "30"],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol3/QuizInterattivi/Capitolo4/images/Cap9_16.png/",
          },
          {
            ques: "Che cosa viene scritto in output dall'esecuzione del seguente segmento di programma? \n \n",
            ans: "1, 3, 5, 7, 9",
            ansSel: ["2, 4, 6, 8, 10", "1, 2, 3, 4, 5"],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol3/QuizInterattivi/Capitolo4/images/Cap9_17.png/",
          },
          {
            ques: "Che cosa viene scritto in output dall'esecuzione del seguente segmento di programma? \n \n",
            ans: "9",
            ansSel: ["2", "7"],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol3/QuizInterattivi/Capitolo4/images/Cap9_18.png/",
          },
        ],
        tf: [
          {
            ques: "L'istruzione \ncout << a; \nscrive il carattere 'a' sul video",
            ans: false,
          },
          {
            ques: "L'istruzione \ncout << a; \nscrive il contenuto della variabile a sul video",
            ans: true,
          },
          {
            ques: "L'istruzione \ncout <<a<<endl; \nscrive il contenuto della variabile a e il cursore resta sulla medesima riga",
            ans: false,
          },
          {
            ques: "L'istruzione \ncout <<a<<endl; \nscrive il contenuto della variabile a e il cursore si sposta sulla riga successiva",
            ans: true,
          },
        ],
        fill: [
          {
            ques: "Per rappresentare un numero di tipo float servono ............. bit.",
            ans: "32",
          },
          {
            ques: "L'operazione di assegnazione si rappresenta nel linguaggio C++ con ....................",
            ans: "=",
          },
          {
            ques: "Le costanti vengono dichiarate attraverso la parola chiave ................",
            ans: "const",
          },
          {
            ques: "L'istruzione \ns = a + b; \nsi chiama ........................",
            ans: "assegnazione",
          },
          {
            ques: "Per acquisire un dato si usa l'istruzione...............>>",
            ans: "cin",
          },
          {
            ques: "Per comunicare un risultato si usa l'istruzione ..........<<",
            ans: "cout",
          },
          {
            ques: "La tastiera rappresenta lo standard..........",
            ans: "input",
          },
          {
            ques: "Il video rappresenta lo standard..........",
            ans: "output",
          },
        ],
      },
    },
    {
      baseDir: "Vol3/QuizInterattivi/Capitolo5",
      classe: "3",
      capitolo: "5",
      titolo: "Classe 3 cap. 5. Funzioni e strutture di dati",
      descrizione:
        "PRO.SIA - Informatica e processi aziendali\n5. Funzioni e strutture di dati",
      quizMulti: {
        multiList: [
          {
            ques: "Quale valore scrive con l'istruzione di output il seguente programma? \n \n",
            ans: "1",
            ansSel: ["2", "5", "6"],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol3/QuizInterattivi/Capitolo5/images/Cap10_2a.png/",
          },
          {
            ques: "Quale valore scrive con l'istruzione di output il seguente programma? \n \n",
            ans: "6",
            ansSel: ["2", "3", "7"],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol3/QuizInterattivi/Capitolo5/images/Cap10_2b.png/",
          },
          {
            ques: "Quale valore scrive con l'istruzione di output il seguente programma? \n \n",
            ans: "10, 25",
            ansSel: ["20, 40", "33, 67", "7, 11"],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol3/QuizInterattivi/Capitolo5/images/Cap10_2c.png/",
          },
          {
            ques: "Qual è il significato della funzione sqrt?",
            ans: "radice quadrata",
            ansSel: ["elevamento a potenza", "esponenziale"],
          },
          {
            ques: "Qual è il significato della funzione pow? ",
            ans: "elevamento a potenza",
            ansSel: ["radice quadrata", "esponenziale"],
          },
          {
            ques: "Qual è il significato della funzione exp? ",
            ans: "esponenziale",
            ansSel: ["radice quadrata", "elevamento a potenza"],
          },
          {
            ques: "Quale delle seguenti frasi corrisponde alla definizione di function overloading? ",
            ans: "Due funzioni con lo stesso nome che differiscono tra loro per il numero dei parametri passati o per il loro tipo o per entrambi.",
            ansSel: [
              "Due funzioni che differiscono per il nome ma hanno gli stessi parametri.",
              "Due funzioni con lo stesso nome che differiscono tra loro solamente per il numero dei parametri passati.",
              "Due funzioni con lo stesso nome che differiscono tra loro solamente per il tipo dei parametri passati.",
            ],
          } /*
          {
            "ques": "Date le seguenti dichiarazioni \n \n\n e le istruzioni \n \n\n quante volte viene eseguita la procedura Lavora e quante la procedura Riposa?",
            "ans": "5, 2",
            "ansSel": [
              "6, 4",
              "4, 3",
              "2, 9"
            ],
            "url": "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol3/QuizInterattivi/Capitolo5/images/Cap10_8a.png' width='280' />\n\n e le istruzioni \n <img src='images/Cap10_8b.png/"
          }*/,
          ,
          {
            ques: "Date le seguenti dichiarazioni \n <code>enum Colori {BIANCO, ROSSO, VERDE, ARANCIONE, VIOLA, GIALLO, BLU, MAGENTA}; \nColori a, b, c;</code>\n Che cosa contengono le variabili a, b, c dopo le seguenti assegnazioni? \n<code>a = ARANCIONE;\nb = VIOLA;\nc = BIANCO;</code>\n",
            ans: "3, 4, 0",
            ansSel: ["6, 4, 7", "4, 3, 8", "2, 9, 0"],
          },
          {
            ques: "Che cosa occorre specificare per indicare un elemento di un array?",
            ans: "Un indice racchiuso tra parentesi quadre.",
            ansSel: [
              "Un indice scritto in basso a destra rispetto al nome dell'array.",
              "Un indice racchiuso tra parentesi graffe.",
              "Un indice formato da una sola cifra.",
            ],
          },
          {
            ques: "Quale tra le seguenti dichiarazioni è corretta per inizializzare un array?",
            ans: "double valori[3] = {3.5, 0.2, 7.0};",
            ansSel: [
              "double valori = {3.5, 0.2, 7.0};",
              "double valori[2] = {3.5, 0.2, 7.0};",
              "double valori[3] {3.5, 0.2, 7.0};",
            ],
          },
          {
            ques: "Quale tra le seguenti affermazioni, riferite al passaggio di array a una funzione, è corretta?",
            ans: "Per effettuare il passaggio per referenza di un array alla funzione, basta indicare il nome dell'array nella chiamata della funzione.",
            ansSel: [
              "Per effettuare il passaggio per referenza di un array alla funzione, occorre aggiungere il carattere &amp; al tipo dell'array nell'intestazione della funzione.",
              "Per effettuare il passaggio per referenza di un array alla funzione, occorre aggiungere il carattere &amp; al nome dell'array nella chiamata alla funzione.",
              "Per effettuare il passaggio per referenza di un array alla funzione, occorre aggiungere il carattere &amp; alla prima componente dell'array nell'intestazione della funzione.",
            ],
          },
        ],
        tf: [
          {
            ques: "I parametri formali sono indicati nella riga di intestazione della funzione",
            ans: true,
          },
          {
            ques: "I parametri formali sono indicati quando viene richiamata la funzione",
            ans: false,
          },
          {
            ques: "I parametri attuali sono indicati nella riga di intestazione della funzione",
            ans: false,
          },
          {
            ques: "I parametri attuali sono indicati quando viene richiamata la funzione",
            ans: true,
          },
          {
            ques: "Le variabili che vengono dichiarate all'inizio di un programma, e fuori dal main(), sono dette variabili locali",
            ans: false,
          },
          {
            ques: "In qualsiasi punto del programma si può utilizzare una variabile globale",
            ans: true,
          },
          {
            ques: "Una variabile locale a una funzione può essere utilizzata dalla funzione main()",
            ans: false,
          },
          {
            ques: "In un programma ben strutturato è conveniente usare molte variabili globali",
            ans: false,
          },
          {
            ques: " #include <cmath>  è la riga di codice che occorre introdurre nel programma per utilizzare la funzione matematica predefinita pow per il calcolo della potenza",
            ans: true,
          },
          {
            ques: " #include cmath  è la riga di codice che occorre introdurre nel programma per utilizzare la funzione matematica predefinita pow per il calcolo della potenza",
            ans: false,
          },
          {
            ques: " #include pow  è la riga di codice che occorre introdurre nel programma per utilizzare la funzione matematica predefinita pow per il calcolo della potenza",
            ans: false,
          },
          {
            ques: " #include <pow>  è la riga di codice che occorre introdurre nel programma per utilizzare la funzione matematica predefinita pow per il calcolo della potenza",
            ans: false,
          },
        ],
      },
    },
    {
      baseDir: "Vol3/QuizInterattivi/Capitolo6",
      classe: "3",
      capitolo: "6",
      titolo: "Classe 3 cap. 6. Programmazione ad oggetti",
      descrizione:
        "PRO.SIA - Informatica e processi aziendali\n6. Programmazione ad oggetti",
      quizMulti: {
        multiList: [
          {
            ques: "Quale delle seguenti frasi spiega in modo corretto il significato di costruttore?",
            ans: "Metodo attivato quando si crea un'istanza.",
            ansSel: [
              "Metodo attivato quando si crea una classe.",
              "Metodo attivato quando si crea un metodo.",
              "Metodo attivato quando si crea un attributo.",
            ],
          },
          {
            ques: "Quando una funzione non appartenente a una classe può accedere ai membri privati della classe?",
            ans: "Solo se dichiarata friend nella classe.",
            ansSel: [
              "In nessun caso.",
              "In caso acceda ai metodi e non agli attributi.",
              "Sempre.",
              "Solo se dichiarata friend.",
            ],
          },
          {
            ques: "Quali delle seguenti frasi definisce meglio il significato di ereditarietà multipla?",
            ans: "La possibilita' di derivare una classe da una o piu' classi.",
            ansSel: [
              "La possibilita' di derivare lo stesso metodo di una classe base in piu' classi derivate.",
              "La possibilita' di derivare gli stessi attributi di una classe base in piu' classi derivate.",
              "La possibilita' di derivare piu' classi da una classe base.",
            ],
          },
          {
            ques: "Quale delle seguenti definizioni descrive meglio il significato del termine overloading?",
            ans: "L'arricchimento delle capacita' di un metodo.",
            ansSel: [
              "L'aumento del numero di attributi di una classe.",
              "L'impostazione dell'accesso privato ai membri di una classe.",
              "Un'impostazione assunta dal sistema se non specificata dall'utente.",
            ],
          },
          {
            ques: "Qual è il significato della funzione member function?",
            ans: "Identifica un metodo di una classe",
            ansSel: [
              "Assicura a una funzione non membro l'accesso ai membri privati",
              "Ridefinisce una funzione gi&agrave; esistente per l'impiego di altri parametri",
            ],
          },
          {
            ques: "Qual è il significato della funzione friend function?",
            ans: "Assicura a una funzione non membro l'accesso ai membri privati",
            ansSel: [
              "Identifica un metodo di una classe",
              "Ridefinisce una funzione gi&agrave; esistente per l'impiego di altri parametri",
            ],
          },
          {
            ques: "Qual è il significato della funzione function overloading?",
            ans: "Ridefinisce una funzione gia' esistente per l'impiego di altri parametri",
            ansSel: [
              "Identifica un metodo di una classe",
              "Assicura a una funzione non membro l'accesso ai membri privati",
            ],
          },
          {
            ques: "Quali sono i privilegi all'accesso dei membri di una classe di base delle funzioni di tipo friend?",
            ans: "Privati, protetti, pubblici",
            ansSel: ["Protetti, pubblici", "Pubblici"],
          },
          {
            ques: "Quali sono i privilegi all'accesso dei membri di una classe di base della classe derivata?",
            ans: "Protetti, pubblici",
            ansSel: ["Privati, protetti, pubblici", "Pubblici"],
          },
          {
            ques: "Quali sono i privilegi all'accesso dei membri di una classe di base delle funzioni membro?",
            ans: "Privati, protetti, pubblici",
            ansSel: ["Protetti, pubblici", "Pubblici"],
          },
          {
            ques: "Volendo creare un costruttore per la classe Lettere, la seguente dichiarazione:  \n class Lettere { \n ... public: \n Lettere() {} \n ... \n };  è corretta?",
            ans: "Si",
            ansSel: ["No"],
          },
          {
            ques: "Volendo creare un costruttore per la classe Lettere, la seguente dichiarazione:  \n class Lettere { \n ... public: \n constructor() {} \n ... \n };  è corretta?",
            ans: "No",
            ansSel: ["Si"],
          },
          {
            ques: "Volendo creare un costruttore per la classe Lettere, la seguente dichiarazione:  \n class Lettere { \n ... \n public: \n constructor Lettere() {} \n ... \n };  è corretta?",
            ans: "No",
            ansSel: ["Si"],
          },
          {
            ques: "Date le dichiarazioni:  \n class Dato { \n public: \n &nbsp; &nbsp; int a; \n &nbsp; &nbsp; double b; \n &nbsp; &nbsp; Dato(): a(3), b(5.0) {} \n }; \n  qual è l'output del seguente programma?  int main() { \n &nbsp; &nbsp; Dato dato; \n &nbsp; &nbsp; cout << dato.a << ' '; \n &nbsp; &nbsp; cout << dato.b << endl; \n &nbsp; &nbsp; return 0; \n } ",
            ans: "3,5",
            ansSel: ["3.0,5.0", "8.0", "3 5"],
          },
          {
            ques: "Avendo definito le classi A e B, a quali dati ha accesso la classe B?  \n class A { \n &nbsp; &nbsp; int a,b; \n public: \n &nbsp; &nbsp; int a,c; \n protected \n &nbsp; &nbsp; int e,f; \n }; \n \n class B: public A { \n &nbsp; &nbsp; ... \n &nbsp; &nbsp; ... \n }; \n ",
            ans: "Sia ai dati protetti sia a quelli pubblici",
            ansSel: [
              "A tutti i dati",
              "Solo a quelli protetti",
              "Solo a quelli pubblici",
            ],
          },
        ],
        tf: [
          {
            ques: "è possibile accedere agli attributi di una classe attraverso i metodi",
            ans: true,
          },
          {
            ques: "Con l'incapsulamento tutto ciò che si riferisce ad un oggetto è racchiuso all'interno dell'oggetto stesso",
            ans: true,
          },
          {
            ques: "Una classe è un'unità di programmazione che può essere utilizzata in un solo programma",
            ans: false,
          },
          {
            ques: "Le classi più generali si chiamano classi base o superclassi",
            ans: true,
          },
          {
            ques: "Gli attributi non incidono sulla dimensione delle istanze",
            ans: false,
          },
          {
            ques: "La dimensione di un'istanza coincide con il numero di byte occupati dai suoi metodi",
            ans: false,
          },
          {
            ques: "Se nella classe sono indicati solo i prototipi dei metodi, per la loro implementazione si utilizza la sintassi:\n tipo nome_classe::nome_metodo",
            ans: true,
          },
          {
            ques: "Non implementando il costruttore e il distruttore, il compilatore li crea automaticamente (default)",
            ans: true,
          },
          {
            ques: "Una classe può avere più di un costruttore",
            ans: true,
          },
          {
            ques: "Se si implementa un costruttore, il compilatore include comunque quello di default",
            ans: false,
          },
          {
            ques: "Il distruttore serve nella gestione dinamica della memoria per liberare spazio non più necessario",
            ans: true,
          },
          {
            ques: "Se il programmatore ha definito un costruttore che prevede dei parametri, non è possibile dichiarare un'istanza senza argomenti",
            ans: true,
          },
          {
            ques: "Le classi derivate ereditano tutti i membri della classe di base",
            ans: true,
          },
          {
            ques: "Le classi derivate non possono essere arricchite con funzionalità aggiuntive rispetto alla classe di base, è necessario integrare la classe di base",
            ans: false,
          },
          {
            ques: "Una classe derivata dispone di tutti gli attributi e dei metodi della classe d'origine: questa caratteristica è nota con il termine incapsulamento",
            ans: false,
          },
          {
            ques: "Un attributo protetto è visto da una funzione non membro",
            ans: false,
          },
          {
            ques: "Un attributo protetto è visto da una classe derivata",
            ans: true,
          },
          {
            ques: "Un membro protetto è visto da una funzione friend",
            ans: true,
          },
          {
            ques: "Un metodo protetto è visto da una funzione non membro",
            ans: false,
          },
          {
            ques: "Un metodo privato è visto da una classe derivata",
            ans: false,
          },
          {
            ques: "Una classe derivata può coprire un metodo della classe base scrivendo un nuovo metodo avente lo stesso nome e la stessa firma",
            ans: true,
          },
          {
            ques: "Un metodo può essere ridefinito, consentendo il passaggio di parametri in numero e di tipo diversi",
            ans: true,
          },
          {
            ques: "L'overriding dei metodi modifica un metodo all'interno della classe base",
            ans: false,
          },
          {
            ques: "L'overriding dei metodi sovrascrive, nella classe derivata, un metodo ereditato, cambiando le istruzioni che ne descrivono il comportamento",
            ans: true,
          },
          {
            ques: "La programmazione orientata agli oggetti può essere definita bug-free poichè riduce il rischio di commettere errori quando si utilizzano i codici già testati",
            ans: true,
          },
          {
            ques: "La programmazione tradizionale permette di riutilizzare con maggior facilità i codici già testati rispetto alla programmazione orientata agli oggetti",
            ans: false,
          },
          {
            ques: "Durante l'analisi di un oggetto è importante individuare eventuali membri comuni ad altri oggetti in modo da definire una classe di base condivisibile con altre applicazioni",
            ans: true,
          },
          {
            ques: "Nella programmazione orientata agli oggetti, la classe derivata è lasciata intatta, in quanto le variazioni al codice sono implementate nella classe base",
            ans: false,
          },
        ],
        fill: [
          {
            ques: "Gli elementi base della OOP si chiamano ..................",
            ans: "oggetti",
          },
          {
            ques: "Gli .................. definiscono le caratteristiche di un oggetto.",
            ans: "attributi",
          },
          {
            ques: "I ............ definiscono le funzionalità dell'oggetto.",
            ans: "metodi",
          },
          {
            ques: "I costruttori delle classi devono essere definiti ....................",
            ans: "pubblici",
          },
          {
            ques: "Gli attributi e i metodi sono definiti .................... se nessun altro, eccetto la classe stessa, deve accedervi.",
            ans: "privati",
          },
          {
            ques: "Gli attributi e i metodi sono definiti .................. se sono disponibili a tutti.",
            ans: "pubblici",
          },
        ],
      },
    },
    {
      baseDir: "Vol3/QuizInterattivi/Capitolo7",
      classe: "3",
      capitolo: "7",
      titolo: "Classe 3 cap. 7. Librerie di template",
      descrizione:
        "PRO.SIA - Informatica e processi aziendali\n7. Librerie di template",
      quizMulti: {
        multiList: [
          {
            ques: "Quando si verifica una situazione di stack overflow durante l'esecuzione di un programma?",
            ans: "Quando si usano array di variabili locali di dimensioni elevate.",
            ansSel: [
              "Quando un programma contenente funzioni ricorsive termina.",
              "Quando in una struttura a pila si esegue un'operazione di Push seguita da un'operazione di Pop.",
              "Quando una pila contiene valori numerici al di fuori del range previsto per il tipo numerico.",
            ],
          },
          {
            ques: "Quando si verifica una situazione di stack overflow durante l'esecuzione di un programma?",
            ans: "Quando, in un programma contenente funzioni ricorsive, l'accumularsi di versioni dello stesso sottoprogramma causa il riempimento della memoria.",
            ansSel: [
              "Quando un programma contenente funzioni ricorsive termina.",
              "Quando in una struttura a pila si esegue un'operazione di Push seguita da un'operazione di Pop.",
              "Quando si usano array di dimensioni troppo piccole.",
            ],
          },
          {
            ques: "Come viene chiamata la struttura coda?",
            ans: "FIFO",
            ansSel: ["LIFO"],
          },
          {
            ques: "Quale delle seguenti coppie di istruzioni si deve usare per l'operazione di Push in una coda rappresentata con un array:",
            ans: "Fine++; Coda [Fine] = dato;",
            ansSel: [
              "Fine &ndash; &ndash;; Coda [Fine] = dato;",
              "Coda [Fine] = dato; Fine&ndash; &ndash;;",
              "Coda[Fine] = dato; Fine++;",
            ],
          },
          {
            ques: "Data la definizione: \n  struct Prova { \n &nbsp; &nbsp; int c1; \n &nbsp; &nbsp; char c2[20]; \n }; \n Prova* p; \n p = new Prova;  l'istruzione \np->c1 = 20; è corretta per assegnare il valore 20 al campo c1?",
            ans: "Si",
            ansSel: ["No"],
          },
          {
            ques: "Quale tra le seguenti frasi definisce il significato di template di una funzione?",
            ans: "Funzione con un parametro che puo' essere sostituito con un tipo o classe al momento della chiamata della funzione stessa.",
            ansSel: [
              "Funzione con un parametro che puo' essere sostituito con un valore al momento della chiamata della funzione stessa.",
              "Funzione con un parametro che puo' essere sostituito con un template di una classe al momento della chiamata della funzione stessa.",
              "Funzione con un parametro che puo' essere sostituito con un array di valori al momento della chiamata della funzione stessa.",
            ],
          },
          {
            ques: " template<class T> class NomeClasse { ... }  è la sintassi corretta per la dichiarazione di un template delle classi?",
            ans: "Si",
            ansSel: ["No"],
          },
          {
            ques: "Con  TProva<double> Prova;  si istanzia una classe Prova utilizzando il template TProva con il tipo double?",
            ans: "Si",
            ansSel: ["No"],
          },
          {
            ques: "Quale tra i seguenti termini NON rappresenta una delle componenti fondamentali della libreria STL?",
            ans: "puntatori",
            ansSel: ["iteratori", "contenitori", "algoritmi"],
          },
          {
            ques: "Che cosa scrive in output il seguente frammento di programma? \n  string s1, s2; \n \n s1 = 'Automobile'; \n s2 = s1.substr(0, 4); \n cout << s2 << endl; ",
            ans: "Auto",
            ansSel: ["Automobile", "Nulla"],
          },
          {
            ques: "Che cosa scrive in output il seguente frammento di programma? \n  string s1('Automobile'); \n string s2('carro'); \n \n s1.replace(4, 6, s2); \n cout << s1 << endl; ",
            ans: "Autocarro",
            ansSel: ["Mobile", "Auto", "Nulla"],
          },
          {
            ques: "Qual è il significato del metodo push_back() della classe vector?",
            ans: "Aggiunge una componente in coda",
            ansSel: [
              "Elimina l'ultima componente del vettore",
              "Elimina tutte le componenti del vettore",
              "Restituisce il numero delle componenti",
            ],
          },
          {
            ques: "Qual è il significato del metodo pop_back() della classe vector?",
            ans: "Elimina l'ultima componente del vettore",
            ansSel: [
              "Aggiunge una componente in coda",
              "Elimina tutte le componenti del vettore",
              "Restituisce il numero delle componenti",
            ],
          },
          {
            ques: "Qual è il significato del metodo clear() della classe vector?",
            ans: "Elimina tutte le componenti del vettore",
            ansSel: [
              "Aggiunge una componente in coda",
              "Controlla se il vettore e' vuoto",
              "Restituisce il numero delle componenti",
            ],
          },
          {
            ques: "Qual è il significato del metodo size() della classe vector?",
            ans: "Restituisce il numero delle componenti",
            ansSel: [
              "Aggiunge una componente in coda",
              "Controlla se il vettore e' vuoto",
              "Elimina tutte le componenti del vettore",
            ],
          },
          {
            ques: "Qual è il significato del metodo empty() della classe vector?",
            ans: "Controlla se il vettore e' vuoto",
            ansSel: [
              "Aggiunge una componente in coda",
              "Restituisce il numero delle componenti",
              "Elimina tutte le componenti del vettore",
            ],
          },
          {
            ques: "Quale delle seguenti frasi spiega in modo corretto il significato dell'istruzione try... catch?",
            ans: "La gestione strutturata delle eccezioni che sia in grado di intercettare le situazioni di errore fornendo all'utente opportuni messaggi.",
            ansSel: [
              "Il trasferimento del controllo all'istruzione immediatamente successiva a quella nella quale &egrave; stato generato l'errore.",
              "La gestione degli errori anche se non &egrave; stato generato alcun errore.",
              "La visualizzazione di un messaggio di errore da parte del sistema e l'interruzione del programma.",
            ],
          },
          {
            ques: " vector<int>::iterator i;  è la sintassi corretta per dichiarare un iteratore per un vettori di interi?",
            ans: "Si",
            ansSel: ["No"],
          },
          {
            ques: "Che cosa viene restituito dal metodo find() del contenitore map?",
            ans: "iteratore",
            ansSel: ["chiave", "valore", "coppia chiave + valore"],
          },
          {
            ques: "Quali delle seguenti istruzioni mette in ordine crescente gli elementi di un vettore v?",
            ans: "sort(v.begin(), v.end());",
            ansSel: [
              "v.sort(v.begin(), v.end());",
              "v.sort(begin(), end());",
              "sort(begin(), end());",
            ],
          },
          {
            ques: "Data l'istruzione \n  *pInteri = 2;  che cosa contiene il puntatore pInteri?",
            ans: "L'indirizzo di una cella di memoria che contiene il valore intero 2.",
            ansSel: [
              "Il valore presente nella cella di memoria numero 2.",
              "Il valore intero 2.",
              "L'istruzione presenta un errore di sintassi perch&egrave; *pInteri non pu&ograve; essere usato in un'istruzione di assegnazione.",
            ],
          },
          {
            ques: "Quale delle seguenti affermazioni riferite all'istruzione \n  x= *p;  è corretta?",
            ans: "Assegna a x il contenuto della memoria puntata da p.",
            ansSel: [
              "Assegna a p il contenuto della memoria puntata da x.",
              "Assegna a x il prodotto di x per p.",
              "Assegna a p il prodotto di x per p.",
            ],
          },
          {
            ques: "Quale delle seguenti affermazioni riferite all'istruzione \n  p = &x; è corretta?",
            ans: "Assegna a p l'indirizzo della variabile x.",
            ansSel: [
              "Assegna a x l'indirizzo della variabile p.",
              "Assegna a p il contenuto della variabile x.",
              "Assegna a x il contenuto della variabile p.",
            ],
          },
          {
            ques: "Data la definizione \n  struct Nodo { \n &nbsp; string nome; \n &nbsp; Nodo *succ; \n }; \n Nodo* n, p, q;  dopo le istruzioni:  p = q; \n q = n; \n q->succ = p;  p e q puntano allo stesso nodo?",
            ans: "No",
            ansSel: ["Si"],
          },
        ],
        tf: [
          {
            ques: "Il vettore è organizzato in memoria centrale come un insieme di elementi contigui",
            ans: true,
          },
          {
            ques: "Il vettore non consente l'accesso diretto ad una singola componente",
            ans: false,
          },
          {
            ques: "La lista bidirezionale è più efficiente solo quando si devono fare poche operazioni di inserimento e cancellazione",
            ans: false,
          },
          {
            ques: "Con la lista bidirezionale non si può usare l'operatore [ ]",
            ans: false,
          },
          {
            ques: "La funzione find() è un algoritmo per il contenitore vector",
            ans: true,
          },
          {
            ques: "La funzione find() è un metodo per il contenitore map",
            ans: true,
          },
          {
            ques: "La funzione count() è un metodo per il contenitore list",
            ans: false,
          },
          {
            ques: "La funzione count() è un algoritmo per il contenitore vector",
            ans: true,
          },
          {
            ques: "La funzione for_each() è un algoritmo per il contenitore vector",
            ans: true,
          },
          {
            ques: "La funzione for_each() è un algoritmo per il contenitore map",
            ans: true,
          },
          {
            ques: " cout << Pila[testa] << endl; Testa++;  è la coppia di istruzioni che si deve usare per l'operazione di Pop in una pila rappresentata con un array",
            ans: true,
          },
        ],
      },
    },
    {
      baseDir: "Vol3/QuizInterattivi/Capitolo8",
      classe: "3",
      capitolo: "8",
      titolo: "Classe 3 cap. 8. Reti e comunicazione",
      descrizione:
        "Pro.SIA - Informatica e processi aziendali - Classe 3\n8. Reti e comunicazione",
      quizMulti: {
        multiList: [
          {
            ques: "Che cosa significa connettere dei computer in rete?",
            ans: "Consentire la condivisione di file e risorse tra gli utenti.",
            ansSel: [
              "Eliminare la necessit&agrave; della posta elettronica.",
              "Rendere i computer pi&ugrave; affidabili.",
              "Aumentare la sicurezza nell'uso dei computer.",
            ],
          },
          {
            ques: "Quale tra le seguenti è la caratteristica più importante delle reti?",
            ans: "Lavoro cooperativo tra utenti diversi.",
            ansSel: [
              "Costruzione di reti telefoniche.",
              "Utilizzo della posta elettronica.",
              "Produzione di software.",
            ],
          },
          {
            ques: "Qual è il significato della sigla FTP?",
            ans: "Programma per il trasferimento di file.",
            ansSel: [
              "Protocollo per la visualizzazione di pagine Web.",
              "Protocollo per la connessione sicura a un computer remoto.",
              "Protocollo per la posta elettronica.",
            ],
          },
          {
            ques: "Qual è il significato della sigla TCP/IP?",
            ans: "Protocolli di base di Internet.",
            ansSel: [
              "Protocollo per la visualizzazione di pagine Web.",
              "Protocollo per la connessione sicura a un computer remoto.",
              "Protocollo per la posta elettronica.",
            ],
          },
          {
            ques: "Qual è il significato della sigla SMTP?",
            ans: "Protocollo per la posta elettronica.",
            ansSel: [
              "Protocollo per la visualizzazione di pagine Web.",
              "Protocollo per la connessione sicura a un computer remoto.",
              "Protocolli di base di Internet.",
            ],
          },
          {
            ques: "Qual è il significato della sigla SSH?",
            ans: "Protocollo per la connessione sicura a un computer remoto.",
            ansSel: [
              "Protocollo per la visualizzazione di pagine Web.",
              "Protocollo per la posta elettronica.",
              "Protocolli di base di Internet.",
            ],
          },
          {
            ques: "Qual è il significato della sigla HTTP?",
            ans: "Protocollo per la visualizzazione di pagine Web.",
            ansSel: [
              "Protocollo per la connessione sicura a un computer remoto.",
              "Protocollo per la posta elettronica.",
              "Protocolli di base di Internet.",
            ],
          },
          {
            ques: "Quale delle seguenti frasi riferite al WWW (World Wide Web) NON è corretta?",
            ans: "Insieme dei computer collegati attraverso le reti e dei programmi residenti su di essi.",
            ansSel: [
              "Insieme di informazioni disponibili in rete e visualizzabili attraverso il browser.",
              "Insieme di documenti multimediali collegati tra loro e consultabili in Internet.",
            ],
          },
          {
            ques: "Quale delle seguenti frasi riferite al WWW (World Wide Web) NON è corretta?",
            ans: "Insieme dei programmi grafici e dei protocolli utilizzati da Internet.",
            ansSel: [
              "Insieme di informazioni disponibili in rete e visualizzabili attraverso il browser.",
              "Insieme di documenti multimediali collegati tra loro e consultabili in Internet.",
            ],
          },
          {
            ques: "Quale tra i seguenti indirizzi per un sito Internet è scritto correttamente secondo la sintassi URL?",
            ans: "http://www.meteo.it",
            ansSel: [
              "http:/www.meteo.it",
              "www.meteo.it//http",
              "www://http.meteo.it",
            ],
          },
          {
            ques: "Quale tra i seguenti indirizzi di posta elettronica è scritto correttamente, supponendo che il nome dell'utente sia john, il provider Internet sia greenchip e la nazione sia la Gran Bretagna?",
            ans: "john@greenchip.uk",
            ansSel: [
              "john@uk.greenchip",
              "greenchip.uk@john",
              "john.uk@greenchip",
            ],
          },
          {
            ques: "Quale tra le seguenti è la definizione corretta di Instant Messaging?",
            ans: "Invio e ricezione di messaggi in modalita' sincrona.",
            ansSel: [
              "Invio e ricezioni di mail in modalita' asincrona.",
              "Invio e ricezione di mail in modalita' sincrona.",
              "Invio e ricezione di messaggi in modalita' asincrona.",
            ],
          },
          {
            ques: "Quale delle seguenti frasi spiega il significato di netiquette?",
            ans: "Un insieme di regole di comportamento per gli utenti della rete.",
            ansSel: [
              "Un protocollo utilizzato dagli utenti della rete per la posta elettronica.",
              "L'insieme delle azioni in rete punite dalla legge.",
              "Le attivit&agrave; da svolgere per aprire un nuovo sito Web.",
            ],
          },
          {
            ques: "Quali tra le seguenti sono precauzioni importanti da prendere durante l'accesso alle comunità virtuali?",
            ans: "Rendere privato il proprio profilo.",
            ansSel: [
              "Fornire molti dati personali.",
              "Interagire anche con sconosciuti.",
            ],
          },
          {
            ques: "Quali tra le seguenti sono precauzioni importanti da prendere durante l'accesso alle comunità virtuali?",
            ans: "Essere consapevoli che le informazioni fornite sono disponibili a tutti.",
            ansSel: [
              "Fornire molti dati personali.",
              "Interagire anche con sconosciuti.",
            ],
          },
        ],
        tf: [
          {
            ques: "LAN indica una rete di dimensioni metropolitane",
            ans: false,
          },
          {
            ques: "WAN indica una rete nella quale la connessione tra computer copre una zona corrispondente al territorio di una Nazione",
            ans: true,
          },
          {
            ques: "In una architettura client/server i ruoli di server e client sono predefiniti",
            ans: false,
          },
          {
            ques: "Il nome Internet deriva da Internetworking che significa rete di reti interconnesse",
            ans: true,
          },
          {
            ques: "Internet si basa su un'architettura di tipo client/server",
            ans: true,
          },
          {
            ques: "Il protocollo di base di Internet si chiama FTP",
            ans: false,
          },
          {
            ques: "Due reti possono essere connesse tra loro solo se sono dello stesso tipo",
            ans: false,
          },
          {
            ques: "Nell'indirizzo di posta tex@willer.it, il nome utente è tex willer",
            ans: false,
          },
          {
            ques: "Nell'indirizzo di posta tex@willer.it, il nome utente è willer",
            ans: false,
          },
          {
            ques: "Nell'indirizzo di posta tex@willer.it, il nome del server è willer.it",
            ans: true,
          },
          {
            ques: "In riferimento all'indirizzo di posta tex@willer.it, potrebbe esistere anche tex@willer.com",
            ans: true,
          },
          {
            ques: "In riferimento all'indirizzo di posta tex@willer.it, potrebbe esistere anche tex.willer@com",
            ans: false,
          },
          {
            ques: "è possibile allegare a una email un'immagine",
            ans: true,
          },
          {
            ques: "è possibile inviare una email a più indirizzi contemporaneamente",
            ans: true,
          },
          {
            ques: "Un indirizzo di posta elettronica è univoco",
            ans: true,
          },
          {
            ques: "Gli utenti non possono inviare messaggi per conoscenza",
            ans: false,
          },
          {
            ques: "Facebook permette di condividere informazioni personali",
            ans: true,
          },
          {
            ques: "Facebook è un servizio di microblogging",
            ans: false,
          },
          {
            ques: "Twitter fa parte del Web 2.0",
            ans: true,
          },
          {
            ques: "Per utilizzare Twitter è necessario avere un personal computer",
            ans: false,
          },
          {
            ques: "Chiunque può creare gratuitamente un blog",
            ans: true,
          },
          {
            ques: "Un blog viene utilizzato per effettuare un collegamento sincrono con un altro utente",
            ans: false,
          },
          {
            ques: "Un blog viene utilizzato per cercare pagine di argomenti specifici",
            ans: false,
          },
          {
            ques: "Un blog viene utilizzato per condividere riflessioni personali",
            ans: true,
          },
          {
            ques: "Ogni forum tratta di argomenti specifici",
            ans: false,
          },
          {
            ques: "In un forum si può scrivere sempre quello che si vuole",
            ans: false,
          },
          {
            ques: "Per scrivere su un forum è necessario registrarsi",
            ans: true,
          },
          {
            ques: "Per scrivere su un forum è necessario seguire alcune regole",
            ans: true,
          },
          {
            ques: "Un flame è il messaggio più letto",
            ans: false,
          },
        ],
        fill: [
          {
            ques: "Le pagine Web possono essere visualizzate con un .......... sul video dei computer degli utenti.",
            ans: "browser",
          },
          {
            ques: "In un sito Internet i salti da un documento all'altro vengono attivati attraverso un ...........",
            ans: "link",
          },
          {
            ques: "La pagina iniziale di un sito Internet si chiama.............",
            ans: "Home Page",
          },
          {
            ques: "L'indirizzo di un sito Internet si chiama .......... perchè serve a identificare le risorse residenti sui vari computer collegati alla rete.",
            ans: "URL",
          },
          {
            ques: "Il protocollo standard ........... è utilizzato per la trasmissione delle informazioni sul Web.",
            ans: "HTTP",
          },
          {
            ques: "La posta elettronica viene trasferita mediante l'uso di un .................. di comunicazione.",
            ans: "protocollo",
          },
          {
            ques: "Il termine ............... indica un'attività che non richiede la connessione contemporanea degli utenti.",
            ans: "asincrona",
          },
          {
            ques: "Quando si vuole scaricare la propria posta sono necessari: .................. e password",
            ans: "username",
          },
          {
            ques: "Una chat è un collegamento in modalità .....................",
            ans: "sincrona",
          },
        ],
      },
    },
    {
      baseDir: "Vol3/QuizInterattivi/Capitolo9",
      classe: "3",
      capitolo: "9",
      titolo: "Classe 3 cap. 9. Pagine Web e fogli di stile",
      descrizione:
        "Pro.SIA - Informatica e processi aziendali - Classe 3\n9. Pagine Web e fogli di stile",
      quizMulti: {
        multiList: [
          {
            ques: "Quale programma si usa per trasferire i file contenenti le pagine Web dal proprio computer al server Internet dove devono essere pubblicate?",
            ans: "Un programma di FTP.",
            ansSel: [
              "Un programma di posta elettronica.",
              "Un programma browser.",
              "Un programma di compressione.",
            ],
          },
          {
            ques: "Qual è l'ordine dei tag che definiscono la struttura fondamentale della pagina HTML?",
            ans: "HTML, HEAD, BODY",
            ansSel: [
              "BODY, HEAD, HTML",
              "HEAD, HTML, BODY",
              "HTML, BODY, HEAD",
            ],
          },
          {
            ques: "Qual è il corrispondente codice RGB del colore nero?",
            ans: "000000",
            ansSel: ["FFFFFF", "0000FF", "FF0000"],
          },
          {
            ques: "Qual è il corrispondente codice RGB del colore rosso?",
            ans: "FF0000",
            ansSel: ["FFFFFF", "0000FF", "000000"],
          },
          {
            ques: "Qual è il corrispondente codice RGB del colore bianco?",
            ans: "FFFFFF",
            ansSel: ["FF00FF", "0000FF", "000000"],
          },
          {
            ques: "Qual è il corrispondente codice RGB del colore verde?",
            ans: "00FF00",
            ansSel: ["FFFFFF", "0000FF", "000000"],
          },
          {
            ques: "Qual è il corrispondente codice RGB del colore blu?",
            ans: "0000FF",
            ansSel: ["FFFFFF", "00FF00", "000000"],
          },
          {
            ques: "In una pagina Web, qual è il significato dell'oggetto grafico form?",
            ans: "modulo",
            ansSel: ["annulla", "invia", "area di testo"],
          },
          {
            ques: "In una pagina Web, qual è il significato dell'oggetto grafico textarea?",
            ans: "area di testo",
            ansSel: ["annulla", "invia", "modulo"],
          },
          {
            ques: "In una pagina Web, qual è il significato dell'oggetto grafico select?",
            ans: "casella combinata",
            ansSel: ["annulla", "invia", "modulo"],
          },
          {
            ques: "In una pagina Web, qual è il significato dell'oggetto grafico reset?",
            ans: "annulla",
            ansSel: ["casella combinata", "invia", "modulo"],
          },
          {
            ques: "In una pagina Web, qual è il significato dell'oggetto grafico submit?",
            ans: "invia",
            ansSel: ["casella combinata", "annulla", "modulo"],
          },
          {
            ques: "Perchè l'uso dei fogli di stile rappresenta un vantaggio?",
            ans: "Le modifiche possono essere fatte velocemente cambiando poche righe di codice.",
            ansSel: [
              "Le pagine Web vengono caricate pi&ugrave; velocemente.",
              "Il sito pu&ograve; avere pi&ugrave; immagini e pi&ugrave; colori rispetto all'uso del solo HTML.",
              "I contenuti e lo stile vengono rappresentati usando uno stesso linguaggio.",
            ],
          },
          {
            ques: "Quale dei seguenti è un attributo per utilizzare i selettori di un foglio di stile?",
            ans: "class",
            ansSel: ["link", "type"],
          },
          {
            ques: "Quale dei seguenti è un attributo per utilizzare i selettori di un foglio di stile?",
            ans: "id",
            ansSel: ["link", "type"],
          },
          {
            ques: "Che cosa è un modulo di feedback?",
            ans: "Una pagina per raccogliere suggerimenti o commenti dai visitatori di un sito Internet.",
            ansSel: [
              "La ricevuta di un pagamento di commercio elettronico.",
              "La ricevuta dell'avvenuta ricezione di un messaggio di posta elettronica.",
              "Il modulo per acquistare una connessione a Internet.",
            ],
          },
          {
            ques: "Chi ha promosso il progetto WAI (Web Accessibility Initiative)?",
            ans: "Il W3C.",
            ansSel: [
              "Un gruppo di Web designer indipendenti.",
              "Il CERN di Ginevra.",
              "Il governo degli Stati Uniti.",
            ],
          },
          {
            ques: "Quale delle seguenti frasi esprime meglio la definizione di accessibilità?",
            ans: "La capacita' dei sistemi informatici di erogare servizi e fornire informazioni anche a persone con disabilita' fisiche.",
            ansSel: [
              "La capacita' dei sistemi informatici di interagire con computer aventi sistemi operativi diversi.",
              "La capacita' dei sistemi informatici di controllare l'accesso degli utenti tramite username e password.",
              "La capacita' dei sistemi informatici di erogare servizi e fornire informazioni in tempi molto rapidi.",
            ],
          },
          {
            ques: "Come deve essere un sito Web accessibile secondo le specifiche WCAG?",
            ans: "percepibile, utilizzabile, comprensibile, robusto",
            ansSel: [
              "visibile, navigabile, comprensibile, multilingua",
              "scalabile, leggibile, orientabile, conforme",
              "distinguibile, solido, comprensibile, validato",
            ],
          },
        ],
        tf: [
          {
            ques: "</I> significa 'scrivi in corsivo'",
            ans: false,
          },
          {
            ques: "<B> significa 'grassetto'",
            ans: true,
          },
          {
            ques: "Il codice <I><B>ciao</B></I> genera un errore",
            ans: false,
          },
          {
            ques: "Il tag <A> crea un link",
            ans: true,
          },
          {
            ques: "Il tag <LINK> crea un link ipertestuale",
            ans: false,
          },
          {
            ques: "è possibile creare un link a un indirizzo e-mail",
            ans: true,
          },
          {
            ques: "è possibile creare un link a un punto specifico di una pagina",
            ans: true,
          },
          {
            ques: "Un form permette di trasferire dati dall'utente al Web",
            ans: true,
          },
          {
            ques: "Un form permette di eseguire semplici programmi",
            ans: false,
          },
          {
            ques: "Un form permette di inviare dati da una pagina a un'altra",
            ans: true,
          },
          {
            ques: "Tutti i siti devono contenere un form",
            ans: false,
          },
          {
            ques: "Tutti i browser supportano il tag <FORM>",
            ans: true,
          },
          {
            ques: "La seguente porzione di codice HTML: \n \n <HTML><BODY>ciao</body></html> \n \n è priva di errori",
            ans: true,
          },
          {
            ques: "La seguente porzione di codice HTML: \n \n ciao <B>a tutti</B> <I>voi</I> \n \n visualizza la scritta 'ciao a tutti voi'",
            ans: true,
          },
          {
            ques: "La seguente porzione di codice HTML: \n \n <A HREF='pagina.htm'><IMG SRC='immagine.jpg'></A> \n \n consente di impostare un'immagine come link a un'altra pagina",
            ans: true,
          },
          {
            ques: "La seguente porzione di codice HTML: \n \n <IMG ><A HREF='pagina.htm'><SRC='immagine.jpg'></A> \n \n consente di impostare un'immagine come link a un'altra pagina",
            ans: false,
          },
          {
            ques: "La seguente porzione di codice HTML: \n \n <A HREF=<IMG SRC=' immagine.jpg'>pagina.htm</A> \n \n consente di impostare un'immagine come link a un'altra pagina",
            ans: false,
          },
          {
            ques: "Il seguente tag \n \n <UL><LI> ... </LI></UL> \n \n produce una lista puntata in html",
            ans: true,
          },
          {
            ques: "Il seguente tag \n \n <UL><LO> ... </LO></UL> \n \n produce una lista puntata in html",
            ans: false,
          },
          {
            ques: "La seguente porzione di codice HTML: \n \n <TABLE><TR><TD>A</TD><TD>B</TD></TR></TABLE> \n \n produce una tabella con le lettere A e B su 1 riga e 2 colonne",
            ans: true,
          },
          {
            ques: "La seguente porzione di codice HTML: \n \n <TABLE><TR><TD>A</TD></TR><TR><TD>B</TD></TR></TABLE> \n \n produce una tabella con le lettere A e B su 1 riga e 2 colonne",
            ans: false,
          },
          {
            ques: "Il seguente tag \n \n <STYLE TYPE='text/css'> ...... </STYLE > \n \n definisce un foglio di stile incorporato",
            ans: true,
          },
          {
            ques: "Il seguente tag \n \n <STYLE SHEET='text/css'> ...... </STYLE > \n \n definisce un foglio di stile incorporato",
            ans: false,
          },
        ],
        fill: [
          {
            ques: "Le classi sono precedute da ...............",
            ans: "punto",
          },
          {
            ques: "Gli id sono preceduti da ...............",
            ans: "cancelletto",
          },
        ],
      },
    },
    {
      baseDir: "Vol4/QuizInterattivi/Capitolo1",
      classe: "4",
      capitolo: "1",
      titolo: "Classe 4 cap. 1. Fasi di sviluppo di un progetto software",
      descrizione:
        "PRO.SIA Informatica e processi aziendali - Classe 4\n1. Fasi di sviluppo di un progetto software",
      quizMulti: {
        multiList: [
          {
            ques: "Qual è l'obiettivo generale della metodologia?",
            ans: "Un'organizzazione del lavoro tale da fornire il prodotto desiderato.",
            ansSel: [
              "La qualit&agrave; del software di progetto.",
              "Il modello di qualit&agrave; generale.",
              "La struttura degli archivi elettronici.",
            ],
          },
          {
            ques: " Qual è il ruolo corrispondente alla figura professionale di Utente?",
            ans: "approvazione",
            ansSel: ["responsabilit&agrave;", "collaborazione", "controllo"],
          },
          {
            ques: " Qual è il ruolo corrispondente alla figura professionale di Committente?",
            ans: "approvazione",
            ansSel: ["responsabilit&agrave;", "collaborazione", "controllo"],
          },
          {
            ques: " Qual è il ruolo corrispondente alla figura professionale di Direzione Aziendale?",
            ans: "approvazione",
            ansSel: ["responsabilit&agrave;", "collaborazione", "controllo"],
          },
          {
            ques: " Qual è il ruolo corrispondente alla figura professionale di Ispettore?",
            ans: "controllo",
            ansSel: ["responsabilit&agrave;", "collaborazione", "approvazione"],
          },
          {
            ques: " Qual è il ruolo corrispondente alla figura professionale di Capo Progetto?",
            ans: "responsabilita'",
            ansSel: ["controllo", "collaborazione", "approvazione"],
          },
          {
            ques: " Qual è il ruolo corrispondente alla figura professionale di Progettista?",
            ans: "collaborazione",
            ansSel: ["controllo", "responsabilit&agrave;", "approvazione"],
          },
          {
            ques: "Qual è l'obiettivo dell'intervista conoscitiva?",
            ans: "Ottenere la visione e la conoscenza globale dell'area di progetto.",
            ansSel: [
              "Comunicare i tempi di realizzazione.",
              "Chiedere quale metodologia utilizzare.",
              "Conoscere le persone che opereranno nel progetto.",
            ],
          },
          {
            ques: "Qual è il significato del termine metadati?",
            ans: "La descrizione dei dati.",
            ansSel: [
              "L'elenco delle funzioni di progetto.",
              "Il piano di migrazione.",
              "Gli archivi elettronici.",
            ],
          },
          {
            ques: "Quali sono gli aspetti fondamentali trattati nella fase di analisi?",
            ans: "dati, funzioni, flusso dei dati",
            ansSel: [
              "obiettivi, strumenti, tecniche",
              "intervista, modello, metodologia",
              "dati, archivi, programmi",
            ],
          },
          {
            ques: "Qual è il termine più appropriato da associare a controllo?",
            ans: "riservatezza",
            ansSel: ["stampe", "disaster recovery", "procedure"],
          },
          {
            ques: "Qual è il termine più appropriato da associare a  ripristino sistema?",
            ans: "disaster recovery",
            ansSel: ["stampe", "riservatezza", "procedure"],
          },
          {
            ques: "Qual è il termine più appropriato da associare a  ergonomia?",
            ans: "interfacce utente",
            ansSel: ["stampe", "disaster recovery", "procedure"],
          },
          {
            ques: "Qual è il termine più appropriato da associare a  report?",
            ans: "stampe",
            ansSel: ["riservatezza", "disaster recovery", "procedure"],
          },
          {
            ques: "Qual è il termine più appropriato da associare a  moduli software?",
            ans: "procedure",
            ansSel: ["riservatezza", "disaster recovery", "stampe"],
          },
          {
            ques: "Qual è il prodotto della fase di realizzazione?",
            ans: "I moduli software e gli archivi utilizzati dai programmi.",
            ansSel: [
              "Il piano di migrazione e il piano di rilascio.",
              "Il funzionigramma e il flusso dei dati.",
              "Le specifiche di installazione.",
            ],
          },
          {
            ques: "Quali ambienti vanno tenuti separati nel progetto software?",
            ans: "Sviluppo, Test, Produzione",
            ansSel: [
              "Progettazione, Test, Migrazione",
              "Analisi, Realizzazione, Test",
              "Sviluppo, Validazione, Formazione",
            ],
          },
          {
            ques: "Come si chiama l'ultima fase del processo di sviluppo del software?",
            ans: "esercizio",
            ansSel: ["transizione", "migrazione", "installazione"],
          },
        ],
        tf: [
          {
            ques: "La metodologia a cascata, a spirale o l'approccio prototipale sono le diverse modalità per lo sviluppo di progetti informatici",
            ans: true,
          },
          {
            ques: "La metodologia è suddivisa in fasi",
            ans: true,
          },
          {
            ques: "I controlli descrivono dettagliatamente che cosa deve essere fatto",
            ans: false,
          },
          {
            ques: "Nella metodologia non serve indicare il tempo previsto per lo svolgimento di ogni attività",
            ans: false,
          },
          {
            ques: "In un funzionigramma la funzione radice contiene il titolo generale del progetto",
            ans: true,
          },
          {
            ques: "Le funzioni che vengono scomposte in sottofunzioni sono dette funzioni madre",
            ans: true,
          },
          {
            ques: "Le funzioni foglie sono le funzioni che non presentano diramazioni",
            ans: true,
          },
          {
            ques: "I termini 'funzioni foglia' e 'funzioni figlia' indicano il medesimo tipo di funzione",
            ans: false,
          },
          {
            ques: "La radice dell'albero gerarchico non è una funzione madre",
            ans: false,
          },
          {
            ques: "La descrizione di una funzione inizia con un verbo transitivo",
            ans: true,
          },
          {
            ques: "Il numero delle funzioni figlie di una medesima funzione madre va da due a sei",
            ans: true,
          },
          {
            ques: "La somma delle funzioni figlie è pari alla funzione madre",
            ans: true,
          },
          {
            ques: "Il funzionigramma indica l'ordine di esecuzione delle singole funzioni",
            ans: false,
          },
          {
            ques: "Le funzioni descrivono l'attività di un sistema di elaborazione dati",
            ans: false,
          },
          {
            ques: "Il salvataggio e il ripristino del sistema sono specifiche prodotte nella fase di transizione",
            ans: false,
          },
          {
            ques: "La definizione del piano di formazione determina la struttura degli archivi",
            ans: false,
          },
          {
            ques: "La migrazione definisce le specifiche per generare i dati di partenza del nuovo progetto",
            ans: true,
          },
          {
            ques: "L'installazione è l'attività nella quale si scrive il codice software",
            ans: false,
          },
        ],
      },
    },
    {
      baseDir: "Vol4/QuizInterattivi/Capitolo2",
      classe: "4",
      capitolo: "2",
      titolo: "Classe 4 cap. 2. Modello concettuale dei dati",
      descrizione:
        "PRO.SIA Informatica e processi aziendali - Classe 4\n2. Modello concettuale dei dati",
      quizMulti: {
        multiList: [
          {
            ques: "La struttura di dati nel modello logico deve facilitare",
            ans: "Le operazioni di manipolazione e di interrogazione.",
            ansSel: [
              "La progettazione del modello concettuale.",
              "La scelta della chiave tra gli attributi di un'entit&agrave;.",
              "Le operazioni di derivazione del modello fisico.",
            ],
          },
          {
            ques: "Quale tra le seguenti frasi esprime meglio il significato di schema Entity/Relationship?",
            ans: "Rappresentazione grafica del modello concettuale.",
            ansSel: [
              "Rappresentazione grafica del modello logico.",
              "Rappresentazione grafica del modello fisico.",
              "Rappresentazione grafica del modello sequenziale.",
            ],
          },
          {
            ques: "Quali sono gli elementi di un modello Entity/Relationship?",
            ans: "entita', associazioni, attributi",
            ansSel: [
              "associazioni",
              "entita', archivi, dati",
              "attributi, archivi, grafici",
            ],
          },
          {
            ques: "Quali delle seguenti definizioni esprime meglio la definizione di associazione?",
            ans: "Un legame che stabilisce un'interazione tra entita'.",
            ansSel: [
              "Un legame che definisce una corrispondenza tra attributi della stessa entita'.",
              "Un legame che definisce una corrispondenza tra attributi di entita' differenti.",
              "Una correlazione tra domini di entita'.",
            ],
          },
          {
            ques: "Si consideri l'associazione EssereGenitore definita sull'entità Persona. Quale delle seguenti affermazioni è vera?",
            ans: "Persona partecipa all'associazione nei due ruoli di Genitore e Figlio.",
            ansSel: [
              "Essere Genitore &egrave; un'associazione binaria.",
              "La partecipazione di Persona &egrave; obbligatoria in entrambe le direzioni.",
            ],
          },
          {
            ques: "Si consideri l'associazione EssereMadre definita sull'entità Persona nei due ruoli di Madre e Figlio. Quale delle seguenti affermazioni è vera?",
            ans: "Essere Madre e' un'associazione ricorsiva su Persona.",
            ansSel: [
              "Essere Madre e' un'associazione binaria tra Madre e Figlio.",
              "La partecipazione di Persona nel ruolo di Madre e' obbligatoria.",
            ],
          },
          {
            ques: "Quale dei seguenti termini non esprime le caratteristiche di un attributo?",
            ans: "istanza",
            ansSel: ["formato", "dimensione", "opzionalit&agrave;"],
          },
          {
            ques: "Quale dei seguenti attributi può svolgere la funzione di chiave primaria dell'entità?",
            ans: "Numero di registrazione di una fattura.",
            ansSel: [
              "Data di svolgimento della prova di uno studente.",
              "Citt&agrave; di residenza di una persona.",
              "Cognome di una persona.",
            ],
          },
          {
            ques: "Quale delle seguenti definizioni esprime meglio la definizione di chiave primaria?",
            ans: "Un attributo (o un insieme di attributi) che permette di distinguere tra le istanze di un'entita'",
            ansSel: [
              "Uno solo tra gli attributi di un'entit&agrave;.",
              "Il primo attributo riprodotto nello schema E/R.",
              "Un attributo qualsiasi scelto dal progettista.",
            ],
          },
          {
            ques: "Qual è la definizione corretta di attributi derivati?",
            ans: "gli attributi che si ottengono con le elaborazioni",
            ansSel: [
              "informazione mancante, inapplicabile o sconosciuta",
              "un attributo che consente di distinguere un'istanza dall'altra per la stessa entit&agrave;",
              "insieme dei possibili valori assunti da un attributo",
            ],
          },
          {
            ques: "Qual è la definizione corretta di chiave primaria?",
            ans: "un attributo che consente di distinguere un'istanza dall'altra per la stessa entita'",
            ansSel: [
              "informazione mancante, inapplicabile o sconosciuta",
              "gli attributi che si ottengono con le elaborazioni",
              "insieme dei possibili valori assunti da un attributo",
            ],
          },
          {
            ques: "Qual è la definizione corretta di dominio dell'attributo?",
            ans: "insieme dei possibili valori assunti da un attributo",
            ansSel: [
              "informazione mancante, inapplicabile o sconosciuta",
              "gli attributi che si ottengono con le elaborazioni",
              "un attributo che consente di distinguere un'istanza dall'altra per la stessa entit&agrave;",
            ],
          },
          {
            ques: "Quale dei seguenti elementi non caratterizza un'associazione?",
            ans: "Il dominio.",
            ansSel: [
              "Il nome.",
              "Il verso di lettura",
              "La molteplicit&agrave;.",
            ],
          },
          {
            ques: "Per stabilire la natura dell'associazione tra le entità E1 ed E2, si rappresentano E1 ed E2 come insiemi e si collegano con archi gli elementi di E1 ed E2 corrispondenti. I collegamenti uscenti da E1 sono 0..1 e quelli uscenti da E2 sono 1..N. Quale delle seguenti affermazioni è vera?",
            ans: "Si tratta di un'associazione N:1 tra E1 ed E2.",
            ansSel: [
              "Si tratta di un'associazione 1:1 tra E1 ed E2.",
              "Si tratta di un'associazione 1:N tra E1 ed E2.",
              "Si tratta di un'associazione N:N tra E1 ed E2.",
            ],
          },
          {
            ques: "Per stabilire la natura dell'associazione tra le entità E1 ed E2, si rappresentano E1 ed E2 come insiemi e si collegano con archi gli elementi di E1 ed E2 corrispondenti. I collegamenti uscenti da E1 sono 0..N e quelli uscenti da E2 sono 2..N. Quali delle seguenti affermazioni è vera?",
            ans: "La partecipazione di E1 all'associazione e' facoltativa.",
            ansSel: [
              "La partecipazione di E1 all'associazione e' obbligatoria.",
              "La partecipazione di E2 all'associazione e' facoltativa.",
            ],
          },
          {
            ques: "Per stabilire la natura dell'associazione tra le entità E1 ed E2, si rappresentano E1 ed E2 come insiemi e si collegano con archi gli elementi di E1 ed E2 corrispondenti. I collegamenti uscenti da E1 sono 1..1 e quelli uscenti da E2 sono 0..1. Quale delle seguenti affermazioni è vera?",
            ans: "Si tratta di un'associazione 1:1 tra E1 ed E2.",
            ansSel: [
              "Si tratta di un'associazione 1: N tra E1 ed E2.",
              "Si tratta di un'associazione N:1 tra E1 ed E2.",
              "Si tratta di un'associazione N:N tra E1 ed E2.",
            ],
          },
          {
            ques: "Per stabilire la natura dell'associazione tra le entità E1 ed E2, si rappresentano E1 ed E2 come insiemi e si collegano con archi gli elementi di E1 ed E2 corrispondenti. I collegamenti uscenti da E1 sono 1..N e quelli uscenti da E2 sono 0..1. Quale delle seguenti affermazioni è vera?",
            ans: "La partecipazione di E1 all'associazione e' obbligatoria.",
            ansSel: [
              "Si tratta di un'associazione 1:1 tra E1 ed E2.",
              "La partecipazione di E1 all'associazione e' facoltativa.",
            ],
          },
          {
            ques: "In quale tipo di associazione ogni istanza della prima entità si può associare a una o più istanze della seconda entità e viceversa?",
            ans: "molti a molti",
            ansSel: ["uno a uno", "uno a molti"],
          },
          {
            ques: "In quale tipo di associazione ogni istanza della prima entità si può associare a una o più istanze della seconda entità, mentre ogni istanza della seconda entità si deve associare a una sola istanza della prima?",
            ans: "uno a molti",
            ansSel: ["uno a uno", "molti a molti"],
          },
          {
            ques: "Tra E1 ed E2 esiste un'associazione di nome Leggere, di tipo uno a molti, con partecipazione obbligatoria per E1, facoltativa per E2. Come si può verificare l'associazione applicando le regole di lettura?",
            ans: "Ogni E2 puo' essere letto da uno e un solo E1.",
            ansSel: [
              "Ogni E1 puo' leggere uno o piu' E2.",
              "Ogni E1 deve leggere uno e un solo E2.",
            ],
          },
          {
            ques: "Tra E1 ed E2 esiste un'associazione di nome Leggere, di tipo uno a uno, con partecipazione facoltativa per E1, obbligatoria per E2. Come si può verificare l'associazione applicando le regole di lettura?",
            ans: "Ogni E1 puo' leggere uno e un solo E2.",
            ansSel: [
              "Ogni E1 puo' leggere uno o piu' E2.",
              "Ogni E1 deve leggere uno e un solo E2.",
            ],
          },
          {
            ques: "Tra E1 ed E2 esiste un'associazione di nome Leggere, di tipo molti a molti, con partecipazione facoltativa per E1, facoltativa per E2. Come si può verificare l'associazione applicando le regole di lettura? ",
            ans: "Ogni E1 puo' leggere uno o piu' E2.",
            ansSel: [
              "Ogni E1 deve leggere uno e un solo E2.",
              "Ogni E1 deve leggere uno o piu' E2.",
            ],
          },
        ],
        tf: [
          {
            ques: "L'entità è un oggetto che ha un significato solo quando viene considerato in relazione ad altri oggetti",
            ans: false,
          },
          {
            ques: "Un'istanza è uno specifico esemplare di una entità",
            ans: true,
          },
          {
            ques: "L'associazione è un legame che stabilisce un'interazione tra gli attributi di una entità",
            ans: false,
          },
          {
            ques: "Gli attributi possono essere proprietà delle entità o delle associazioni",
            ans: true,
          },
          {
            ques: "Le associazioni molti a molti sono scomponibili in due associazioni uno a uno",
            ans: false,
          },
          {
            ques: "Le associazioni molti a molti non sono mai scomponibili",
            ans: false,
          },
          {
            ques: "Le associazioni molti a molti sono scomponibili in due associazioni uno a molti",
            ans: true,
          },
          {
            ques: "Le associazioni uno a uno sono raggruppabili in associazioni uno a molti",
            ans: false,
          },
          {
            ques: "Le associazioni uno a molti sono scomponibili in più associazioni uno a uno",
            ans: false,
          },
        ],
        fill: [
          {
            ques: "Il livello ........ rappresenta l'effettiva installazione degli archivi elettronici.",
            ans: "fisico",
          },
          {
            ques: "Il livello ........ rappresenta la realtà dei dati e le associazioni tra essi attraverso uno schema.",
            ans: "concettuale",
          },
          {
            ques: "Il livello ....... rappresenta il modo attraverso il quale i dati sono organizzati negli archivi elettronici.",
            ans: "logico",
          },
        ],
      },
    },
    {
      baseDir: "Vol4/QuizInterattivi/Capitolo3",
      classe: "4",
      capitolo: "3",
      titolo: "Classe 4 cap. 3. Modello relazionale",
      descrizione:
        "PRO.SIA Informatica e processi aziendali - Classe 4\n3. Modello relazionale",
      quizMulti: {
        multiList: [
          {
            ques: "Quale delle seguenti frasi esprime meglio la definizione di relazione di grado 2?",
            ans: "Una tabella con due colonne.",
            ansSel: [
              "Una tabella bidimensionale.",
              "Un sottoinsieme di un qualsiasi insieme.",
              "Una tabella con due righe.",
            ],
          },
          {
            ques: "Se il dominio dell'attributo A1 è formato da un insieme di 5 oggetti e quello dell'attributo A2 ne contiene 3, che cosa si può dire in merito alla cardinalità di una relazione con attributi A1 e A2?",
            ans: "La cardinalita' e' minore o uguale a 15.",
            ansSel: [
              "La cardinalita' e' 25.",
              "La cardinalita' e' minore di 15.",
              "La cardinalita' e' minore o uguale a 8.",
            ],
          },
          {
            ques: "Qual è la definizione corretta di grado?",
            ans: "Numero delle colonne della tabella.",
            ansSel: [
              "Insieme di n-uple.",
              "Riga di una tabella.",
              "Attributo che identifica una n-upla.",
            ],
          },
          {
            ques: "Qual è la definizione corretta di dominio?",
            ans: "Insieme dei valori assunti da un attributo.",
            ansSel: [
              "Insieme di n-uple.",
              "Riga di una tabella.",
              "Attributo che identifica una n-upla.",
            ],
          },
          {
            ques: "Qual è la definizione corretta di relazione?",
            ans: "Insieme di n-uple.",
            ansSel: [
              "Numero delle colonne della tabella.",
              "Riga di una tabella.",
              "Attributo che identifica una n-upla.",
            ],
          },
          {
            ques: "Qual è la definizione corretta di tupla</?",
            ans: "Riga di una tabella.",
            ansSel: [
              "Insieme di n-uple.",
              "Numero delle colonne della tabella.",
              "Attributo che identifica una n-upla.",
            ],
          },
          {
            ques: "Qual è la definizione corretta di chiave?",
            ans: "Attributo che identifica una n-upla.",
            ansSel: [
              "Insieme di n-uple.",
              "Numero delle colonne della tabella.",
              "Riga di una tabella.",
            ],
          },
          {
            ques: "Quale delle seguenti frasi esprime la definizione di chiave di una relazione?",
            ans: "Un attributo o un insieme di attributi che permettono di distinguere tra le righe della relazione.",
            ansSel: [
              "Un attributo numerico.",
              "Un attributo senza valori duplicati.",
              "Un attributo non derivato da altri.",
            ],
          },
          {
            ques: "In riferimento a una tabella con i dati sulle prove degli studenti, l'oggetto Voto è:",
            ans: "un campo",
            ansSel: ["una tabella", "una chiave primaria"],
          },
          {
            ques: "In riferimento a una tabella con i dati sulle prove degli studenti, l'oggetto Identificativo della prova è:",
            ans: "una chiave primaria",
            ansSel: ["una tabella", "un campo"],
          },
          {
            ques: "In riferimento a una tabella con i dati sulle prove degli studenti, l'oggetto Data della prova è:",
            ans: "un campo",
            ansSel: ["una tabella", "una chiave primaria"],
          },
          {
            ques: "In riferimento a una tabella con i dati sulle prove degli studenti, l'oggetto Prove è:",
            ans: "una tabella",
            ansSel: ["un campo", "una chiave primaria"],
          },
          {
            ques: "Un'associazione (1:N) tra due entità E1 ed E2, dalle quali derivano le tabelle: \n T1 (K1, A, B, C) e, rispettivamente, T2 (K2, D) \n(dove K1 e K2 sono le chiavi)\n viene tradotta nel modello relazionale con:",
            ans: "T1 (K1, A, B, C); T2 (K2, D, K1);",
            ansSel: [
              "T1 (K1, A, B, C);  T2 (K2, D);  T3 (K1,K2);",
              "T1 (K1, A, B, C, K2);  T2 (K2, D);",
              "T1 (K1, A, B, C, K2);  T2 (K2, D, K1).",
            ],
          },
          {
            ques: "Un'associazione (1:N) tra due entità E1 ed E2, dalle quali derivano le tabelle: \n T1 (K1, A, B, C) e, rispettivamente, T2 (K2, D) \n(dove K1 e K2 sono le chiavi)\n ha attributi A1 e A2. Come viene tradotta nel modello relazionale?",
            ans: "T1 (K1, A, B, C); T2 (K2, D, K1, A1, A2).",
            ansSel: [
              "T1 (K1, A, B, C);  T2 (K2, D);  T3 (K1, K2, A1, A2);",
              "T1 (K1, A, B, C, K2);  T2 (K2, D, K1, A1, A2);",
              "T1 (K1, A, B, C, A1, A2);  T2 (K2, D, K1);",
            ],
          },
          {
            ques: "Un'associazione (N:N) tra due entità E1 ed E2, dalle quali derivano le tabelle: \n T1 (K1, A, B, C) e, rispettivamente, T2 (K2, D) \n(dove K1 e K2 sono le chiavi)\n viene rappresentata nel modello relazionale con:",
            ans: "T1 (K1, A, B, C); T2 (K2, D); T3(K1,K2);",
            ansSel: [
              "T1 (K1, A, B, C, K2);  T2 (K2, D, K1);",
              "T1 (K1, A, B, C);  T2 (K2, D, K1);",
              "T1 (K1, A, B, C, K2);  T2 (K2, D).",
            ],
          },
          {
            ques: "Un'associazione 1:1 tra due entità E1 ed E2, dalle quali derivano le tabelle: \n T1 (K1, A, B, C) e, rispettivamente, T2 (K2, D) \n(dove K1 e K2 sono le chiavi)\n con partecipazione facoltativa di E1 e obbligatoria di E2, viene tradotta nel modello relazionale con:",
            ans: "T1 (K1, A, B, C); T2 (K2, D, K1);",
            ansSel: [
              "T (K1, K2, A, B, C, D)",
              "T1 (K1, A, B, C);  T2 (K2, D)  T3 (K1, K2)",
              "T1 (K1, A, B, C, K2);  T2 (K2, D);",
            ],
          },
          {
            ques: "Data la tabella anagrafica A (Codice, Cognome, Citta), per ottenere l'elenco delle anagrafiche dei soggetti che risiedono a Genova, bisogna eseguire l'interrogazione:",
            ans: "Selezione di A per Citta = 'Genova'.",
            ansSel: [
              "Proiezione di A su Citta.",
              "Proiezione di A su Codice.",
              "Selezione di A per Cognome.",
            ],
          },
          {
            ques: "Le relazioni R e S hanno schema: R(A,B,C) e S(C,D,E). Qual è lo schema di R left join S?",
            ans: "T (A, B, R.C, S.C, D, E)",
            ansSel: ["T (R.C,D,E)", "T (A,B,R.C,D,E)", "T (A, B, R.C)"],
          },
          {
            ques: "Quale delle seguenti affermazioni esprime meglio la definizione di chiave candidata di una relazione?",
            ans: "Un attributo (o un insieme minimale di attributi) che identifica in modo univoco una n-upla.",
            ansSel: [
              "Un attributo (o un insieme di attributi) che identifica in modo univoco una n-upla.",
              "Una chiave formata da un solo attributo.",
              "Un attributo prescelto dal progettista del database.",
            ],
          },
          {
            ques: "Quale tra le seguenti frasi esprime meglio il significato di terza forma normale di una relazione?",
            ans: "Una relazione in 2FN che elimina la dipendenza transitiva degli attributi dalla chiave.",
            ansSel: [
              "La forma normale che elimina la dipendenza transitiva degli attributi dalla chiave.",
              "Una relazione che rispetta i requisiti fondamentali del modello relazionale.",
              "La forma normale che elimina la dipendenza parziale degli attributi dalla chiave.",
            ],
          },
          {
            ques: "Quale tra le seguenti frasi esprime meglio il significato di integrità?",
            ans: "Garantire che le operazioni effettuate sul database da utenti autorizzati non provochino una perdita di consistenza ai dati.",
            ansSel: [
              "Impedire che il database venga danneggiato da interventi accidentali o non autorizzati.",
              "I dati contenuti nel database devono essere effettivamente utilizzabili in altri database.",
              "Gli stessi dati non compaiono pi&ugrave; volte in archivi diversi, cio&egrave; il database &egrave; costituito da archivi integrati di dati.",
            ],
          },
        ],
        tf: [
          {
            ques: "La relazione rappresenta un'associazione tra tabelle",
            ans: false,
          },
          {
            ques: "Ogni n-upla rappresenta un'istanza dell'entità",
            ans: true,
          },
          {
            ques: "Le colonne contengono i valori assunti dagli attributi dell'entità",
            ans: true,
          },
          {
            ques: "Il dominio è l'insieme dei valori che possono essere assunti da una chiave",
            ans: false,
          },
          {
            ques: "Gli attributi rappresentano informazioni elementari",
            ans: true,
          },
          {
            ques: "Una relazione può avere righe duplicate",
            ans: false,
          },
          {
            ques: "La presenza di una chiave primaria garantisce l'assenza di righe duplicate",
            ans: true,
          },
          {
            ques: "Il numero di attributi deve essere identico per tutte le righe di una relazione",
            ans: true,
          },
          {
            ques: "Per rappresentare un'associazione 1: N si aggiunge la chiave dell'entità che sta dalla parte N agli attributi dell'entità che sta dalla parte 1",
            ans: false,
          },
          {
            ques: "Per rappresentare un'associazione 1: N si aggiunge la chiave dell'entità che sta dalla parte 1 agli attributi dell'entità che sta dalla parte N",
            ans: true,
          },
          {
            ques: "Un'associazione N:N non è rappresentabile nel modello relazionale e si sostituisce con due associazioni 1:N",
            ans: false,
          },
          {
            ques: "Un'associazione N:N si rappresenta aggiungendo la chiave della prima entità agli attributi della seconda entità e viceversa",
            ans: false,
          },
          {
            ques: "Un'associazione 1:1 si rappresenta sempre aggregando in un'unica tabella gli attributi delle entità associate",
            ans: false,
          },
          {
            ques: "Un'associazione 1:1 si rappresenta spesso aggregando in un'unica tabella gli attributi delle entità associate",
            ans: true,
          },
          {
            ques: "Un'associazione 1:1 con partecipazione facoltativa di un'entità si rappresenta aggiungendo agli attributi dell'entità con partecipazione obbligatoria la chiave dell'entità con partecipazione facoltativa",
            ans: true,
          },
          {
            ques: "Un'associazione 1:1 con partecipazione facoltativa di un'entità si rappresenta aggiungendo agli attributi dell'entità con partecipazione facoltativa la chiave dell'entità con partecipazione obbligatoria",
            ans: false,
          },
          {
            ques: "Una proiezione non può alterare la cardinalità di una relazione",
            ans: false,
          },
          {
            ques: "Nella maggior parte dei casi una proiezione non altera la cardinalità di una relazione",
            ans: true,
          },
          {
            ques: "La selezione non cambia il grado di una relazione",
            ans: true,
          },
          {
            ques: "La selezione non cambia mai la cardinalità di una relazione",
            ans: false,
          },
          {
            ques: "Il join naturale non è altro che un left join seguito da un'opportuna proiezione",
            ans: false,
          },
          {
            ques: "Il left join tra due tabelle produce una tabella che include tutte le righe presenti nel join naturale tra le due tabelle",
            ans: true,
          },
          {
            ques: "Il full join di R e S contiene tutte le righe presenti nel left join tra R e S e quelle generate dal right join tra R e S",
            ans: true,
          },
          {
            ques: "Nel left join tra due tabelle R ed S, le righe di R senza corrispondenti con righe di S sono completate con valori nulli",
            ans: true,
          },
          {
            ques: "La normalizzazione delle relazioni ha lo scopo di prevenire la ridondanza",
            ans: true,
          },
          {
            ques: "Le anomalie di aggiornamento, cancellazione, inserimento sono effetti indesiderati della normalizzazione",
            ans: false,
          },
          {
            ques: "La normalizzazione non garantisce la conservazione dell'informazione",
            ans: false,
          },
          {
            ques: "La normalizzazione è una tecnica alternativa alla progettazione concettuale",
            ans: false,
          },
          {
            ques: "Una chiave è determinante per ogni attributo della relazione",
            ans: true,
          },
          {
            ques: "Un insieme di attributi determinante per ogni attributo della relazione è una chiave candidata",
            ans: false,
          },
          {
            ques: "Un attributo determinante per ogni attributo della relazione è una chiave candidata",
            ans: true,
          },
          {
            ques: "Un insieme di attributi è determinante di ogni attributo che compone l'insieme",
            ans: true,
          },
          {
            ques: "L'attributo Codice è la chiave di Anagrafica ed è presente come chiave esterna in Movimenti. Se tra le due tabelle sono stati imposti vincoli di integrità referenziale, non è possibile inserire una riga di Anagrafica con un valore di Codice che non sia presente in Movimenti come chiave esterna",
            ans: false,
          },
          {
            ques: "L'attributo Codice è la chiave di Anagrafica ed è presente come chiave esterna in Movimenti. Se tra le due tabelle sono stati imposti vincoli di integrità referenziale, è possibile cancellare una riga di Anagrafica a condizione che il valore di Codice non sia presente in nessuna riga di Movimenti",
            ans: true,
          },
        ],
      },
    },
    {
      baseDir: "Vol4/QuizInterattivi/Capitolo4",
      classe: "4",
      capitolo: "4",
      titolo: "Classe 4 cap. 4. Access",
      descrizione:
        "PRO.SIA Informatica e processi aziendali - Classe 4\n4. Access",
      quizMulti: {
        multiList: [
          {
            ques: "Qual è la definizione di Tabella?",
            ans: "Lo schema in base al quale sono organizzati i dati in Access.",
            ansSel: [
              "Lo strumento per estrarre i dati secondo i criteri scelti dall'utente.",
              "Oggetto per presentare i dati su elenchi cartacei.",
              "Lo strumento per mostrare e permettere l'aggiornamento dei dati mediante finestre.",
            ],
          },
          {
            ques: "Qual è la definizione di Query?",
            ans: "Lo strumento per estrarre i dati secondo i criteri scelti dall'utente.",
            ansSel: [
              "Lo schema in base al quale sono organizzati i dati in Access.",
              "Oggetto per presentare i dati su elenchi cartacei.",
              "Lo strumento per mostrare e permettere l'aggiornamento dei dati mediante finestre.",
            ],
          },
          {
            ques: "Qual è la definizione di Maschera?",
            ans: "Lo strumento per mostrare e permettere l'aggiornamento dei dati mediante finestre.",
            ansSel: [
              "Lo strumento per estrarre i dati secondo i criteri scelti dall'utente.",
              "Oggetto per presentare i dati su elenchi cartacei.",
              "Lo schema in base al quale sono organizzati i dati in Access.",
            ],
          },
          {
            ques: "Qual è la definizione di Report?",
            ans: "Oggetto per presentare i dati su elenchi cartacei.",
            ansSel: [
              "Lo strumento per estrarre i dati secondo i criteri scelti dall'utente.",
              "Lo strumento per mostrare e permettere l'aggiornamento dei dati mediante finestre.",
              "Lo schema in base al quale sono organizzati i dati in Access.",
            ],
          },
          {
            ques: "Qual è la corretta dimensione in byte di un Intero lungo?",
            ans: "4 byte",
            ansSel: ["1 byte", "2 byte", "8 byte"],
          },
          {
            ques: "Qual è la corretta dimensione in byte di una Precisione singola?",
            ans: "4 byte",
            ansSel: ["1 byte", "2 byte", "8 byte"],
          },
          {
            ques: "Qual è la corretta dimensione in byte di una Numerazione Automatica?",
            ans: "4 byte",
            ansSel: ["1 byte", "2 byte", "8 byte"],
          },
          {
            ques: "Qual è la corretta dimensione in byte di una Precisione doppia?",
            ans: "8 byte",
            ansSel: ["1 byte", "2 byte", "4 byte"],
          },
          {
            ques: "Per definire una nuova tabella, dopo aver selezionato la scheda Crea nella barra multifunzione, quale pulsante si può scegliere?",
            ans: "Tabella",
            ansSel: ["Struttura query", "Creazione guidata Query"],
          },
          {
            ques: "Con riferimento alla griglia della finestra QBE, qual è il contenuto della riga Campo?",
            ans: "Nome della colonna da presentare nella tabella risultato.",
            ansSel: [
              "Indicazione se il campo deve essere visualizzato nella tabella risultato.",
              "Valore per i criteri di selezione.",
              "Indicazione se il campo e' chiave di ordinamento crescente o decrescente.",
            ],
          },
          {
            ques: "Con riferimento alla griglia della finestra QBE, qual è il contenuto della riga Ordinamento?",
            ans: "Indicazione se il campo e' chiave di ordinamento crescente o decrescente.",
            ansSel: [
              "Indicazione se il campo deve essere visualizzato nella tabella risultato.",
              "Valore per i criteri di selezione.",
              "Nome della colonna da presentare nella tabella risultato.",
            ],
          },
          {
            ques: "Con riferimento alla griglia della finestra QBE, qual è il contenuto della riga Mostra?",
            ans: "Indicazione se il campo deve essere visualizzato nella tabella risultato.",
            ansSel: [
              "Nome della colonna da presentare nella tabella risultato.",
              "Valore per i criteri di selezione.",
              "Indicazione se il campo e' chiave di ordinamento crescente o decrescente.",
            ],
          },
          {
            ques: "Con riferimento alla griglia della finestra QBE, qual è il contenuto della riga Criteri?",
            ans: "Valore per i criteri di selezione.",
            ansSel: [
              "Nome della colonna da presentare nella tabella risultato.",
              "Indicazione se il campo deve essere visualizzato nella tabella risultato.",
              "Indicazione se il campo e' chiave di ordinamento crescente o decrescente.",
            ],
          },
          {
            ques: "Per produrre l'elenco dei movimenti di un soggetto di cui si conosce il codice in Anagrafica, dopo aver inserito le due tabelle Anagrafica e Movimenti sulla finestra della QBE:",
            ans: "Bisogna trascinare tutti i campi di Movimenti e selezionare il codice voluto nella riga Criteri.",
            ansSel: [
              "Bisogna trascinare il campo Codice di Anagrafica nella griglia per poter selezionare il soggetto interessato e quindi tutti i campi di Anagrafica e Movimenti necessari.",
              "Bisogna trascinare tutti i campi di Anagrafica e di Movimenti.",
              "Bisogna trascinare tutti i campi di Anagrafica e selezionare il codice voluto, al resto provvede il sistema.",
            ],
          },
          {
            ques: "è possibile costruire un'associazione uno a uno tra Anagrafica e Movimenti?",
            ans: "Si, e' sufficiente attribuire alla proprieta' Indicizzato del campo Codice di Movimenti il valore Si (duplicati non ammessi) ma in tale caso per ogni anagrafica si potra' introdurre un solo movimento.",
            ansSel: [
              "Si, basta selezionare uno a uno nella maschera Modifica relazioni.",
              "No, l'associazione tra Anagrafica e Movimenti e' uno a molti.",
              "Si, e' sufficiente attribuire alla proprieta' Indicizzato del campo Codice di Movimenti il valore Si (duplicati ammessi).",
            ],
          },
          {
            ques: "Le sottomaschere sono particolarmente utili per visualizzare i dati di tabelle tra le quali esiste:",
            ans: "Una relazione uno a molti (la maschera principale per i dati della tabella a uno).",
            ansSel: [
              "Nessuna relazione.",
              "Una relazione molti a molti.",
              "Una relazione molti a uno (la maschera principale per i dati della tabella a molti).",
            ],
          },
          {
            ques: "Se in una maschera basata su una query si cerca di modificare il valore contenuto nel campo Importo:",
            ans: "La variazione si trasmette al valore del campo Importo di Movimenti.",
            ansSel: [
              "Non succede nulla: la maschera serve solo a visualizzare i dati prodotti dalla query.",
              "Viene variato il corrispondente valore nella query senza ulteriori effetti sulla tabella originale.",
              "Il sistema non permette di modificare il valore di una casella in una maschera.",
            ],
          },
          {
            ques: "Per identificare il numero medio di movimenti effettuato dai soggetti di Anagrafica:",
            ans: "Bisogna costruire una query Q basata su un'altra query P. P deve essere costruita in modo da contenere codice e numero di movimenti effettuati per tutti i soggetti di anagrafica.",
            ansSel: [
              "Non c'&egrave; modo di saperlo con le query.",
              "Basta costruire un report con l'elenco dei movimenti per cliente e fare un calcolo.",
              "Basta costruire una query con raggruppamento basata sulla tabella Movimenti e usare nella riga delle formule le funzioni di aggregazione media e conteggio.",
            ],
          },
          {
            ques: "A quale operazione relazionale corrisponde la seguente query su Tabella? \n ",
            ans: "La selezione di Tabella per Campo1 = valore.",
            ansSel: [
              "La proiezione di Tabella su Campo1.",
              "Nessuna, viene visualizzata l'intera tabella.",
              "Errore: Tabella.* non e' un nome legale per Campo.",
            ],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol4/QuizInterattivi/Capitolo4/images/img8.png/",
          },
          {
            ques: "Quale elenco viene prodotto dalla seguente interrogazione? \n ",
            ans: "L'elenco ordinato per cognome delle persone di Firenze in anagrafica con nome, cognome e indirizzo.",
            ansSel: [
              "L'elenco ordinato per cognome delle persone in anagrafica con nome cognome indirizzo.",
              "L'elenco delle persone in anagrafica, della citta' scelta, con nome e cognome.",
              "L'elenco delle persone di Firenze in anagrafica con nome e cognome e indirizzo.",
            ],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol4/QuizInterattivi/Capitolo4/images/img10.png/",
          },
          {
            ques: "Quale elenco viene prodotto dalla seguente interrogazione? \n ",
            ans: "Nome e Cognome delle persone in anagrafica alle quali non sono associati movimenti O hanno uno o piu' movimenti senza importo, a condizione che il join tra le tabelle sia un join esterno opportuno.",
            ansSel: [
              "Nome e Cognome delle persone in anagrafica alle quali non sono associati movimenti E che hanno uno o piu' movimenti senza importo, a condizione che il join tra le tabelle sia un join esterno opportuno.",
              "Nome e Cognome delle persone in anagrafica alle quali non sono associati movimenti O che hanno uno o piu' movimenti con importo a zero, a condizione che il join tra le tabelle sia un join esterno opportuno.",
              "Nome e Cognome delle persone in anagrafica alle quali non sono associati movimenti E che hanno uno o piu' movimenti con importo a zero, a condizione che il join tra le tabelle sia un join esterno opportuno.",
            ],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol4/QuizInterattivi/Capitolo4/images/img12.png/",
          },
          {
            ques: "Quale elenco viene prodotto dalla seguente interrogazione? \n ",
            ans: "Una sola riga con numero e somma dei versamenti di Giuseppe Garinei.",
            ansSel: [
              "L'elenco dei versamenti di Giuseppe Garinei completato con numero e somma degli importi.",
              "L'elenco dei versamenti raggruppati per nome e cognome.",
              "L'elenco dei versamenti raggruppati per causale.",
            ],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol4/QuizInterattivi/Capitolo4/images/img14.png/",
          },
          {
            ques: "Quale elenco viene prodotto dalla seguente interrogazione? \n ",
            ans: "L'elenco dei prelievi delle persone con cognome che inizia per A con: nome, cognome, data e importo.",
            ansSel: [
              "L'elenco dei prelievi delle persone con cognome che inizia per A con: nome, data e importo.",
              "L'elenco dei prelievi delle persone con cognome che inizia per A con: cognome, data e importo.",
              "L'elenco dei prelievi delle persone con cognome che inizia per A con: nome, cognome, data, importo e causale.",
            ],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol4/QuizInterattivi/Capitolo4/images/img15.png/",
          },
          {
            ques: "Quale elenco viene prodotto dalla seguente interrogazione? \n ",
            ans: "Gli stipendi di Mario Rossi, posteriori al 2017, incrementati del 10%, con data e nuovo importo.",
            ansSel: [
              "L'elenco dei movimenti di Mario Rossi con data, importo e causale, aumentati del 10%.",
              "L'elenco degli stipendi di Mario Rossi, posteriori al 2017, con data, importo e causale.",
              "L'elenco dei prelievi di Mario Rossi effettuati nel 2018, incrementati del 10%.",
            ],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol4/QuizInterattivi/Capitolo4/images/img16.png/",
          },
          {
            ques: "Quale elenco viene prodotto dalla seguente interrogazione? \n ",
            ans: "L'elenco dei versamenti, di importo superiore a 5000,con nome, cognome, data e importo.",
            ansSel: [
              "L'elenco dei movimenti di importo superiore a 5000, con nome, cognome, data e importo.",
              "L'elenco dei versamenti, di importo superiore a 5000, con nome, cognome, data, importo e causale.",
              "L'elenco dei versamenti con nome, cognome, data e importo.",
            ],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol4/QuizInterattivi/Capitolo4/images/img20.png/",
          },
          {
            ques: "Quale elenco viene prodotto dalla seguente interrogazione? \n ",
            ans: "L'elenco delle persone in anagrafica della citta' scelta con nome e cognome.",
            ansSel: [
              "L'elenco delle persone in anagrafica con nome cognome e indirizzo.",
              "L'elenco delle persone in anagrafica con nome cognome.",
              "L'elenco delle persone in anagrafica della citta' scelta con nome e cognome e indirizzo.",
            ],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol4/QuizInterattivi/Capitolo4/images/img21.png/",
          },
          {
            ques: "Quale elenco viene prodotto dalla seguente interrogazione? \n ",
            ans: " L'elenco dei movimenti di Giacomo Arcangeli, con data, importo e causale.",
            ansSel: [
              "L'elenco dei movimenti di Giacomo Arcangeli, con data, importo e causale, ordinati per data.",
              "L'elenco dei versamenti di Giacomo Arcangeli, con data, importo e causale.",
              "L'elenco dei versamenti di Giacomo Arcangeli, con data, importo e causale, ordinati per data.",
            ],
            url: "https://github.com/gionatamassibenincasa/as-22-23/raw/main/quiz/Vol4/QuizInterattivi/Capitolo4/images/img22.png/",
          },
          {
            ques: "A che cosa serve una query di creazione tabella?",
            ans: "Per creare una nuova tabella (struttura e dati) estraendo i dati da una o pi� tabelle esistenti.",
            ansSel: [
              "Per creare la struttura di nuove tabelle nel database.",
              "Per creare una nuova tabella (struttura e dati) estraendo i dati da una sola tabella.",
              "Per creare una nuova tabella prelevando i dati da un foglio Excel o da altre fonti esterne.",
            ],
          },
          {
            ques: "Quale funzionalit� è svolta da una query di accodamento?",
            ans: "Aggiunge righe a una tabella esistente copiando i dati da un�altra tabella.",
            ansSel: [
              "Permette di aggiungere record a una tabella esistente con una maschera.",
              "Crea una nuova tabella contenente solo una parte prefissata di dati prelevati da una tabella esistente.",
              "Aggiunge righe a una tabella esistente togliendole da un�altra tabella.",
            ],
          },
        ],
        tf: [
          {
            ques: "Non è possibile stabilire legami tra una tabella di Excel e una di Access",
            ans: false,
          },
          {
            ques: "Una tabella Excel può essere importata in Access",
            ans: true,
          },
          {
            ques: "Una tabella Excel può essere solo visualizzata da Access con un collegamento",
            ans: false,
          },
          {
            ques: "Una tabella di Excel può essere vista e modificata da Access con un collegamento",
            ans: true,
          },
        ],
      },
    },
    {
      baseDir: "Vol4/QuizInterattivi/Capitolo5",
      classe: "4",
      capitolo: "5",
      titolo: "Classe 4 cap. 5. Il linguaggio SQL",
      descrizione:
        "PRO.SIA Informatica e processi aziendali - Classe 4\n5. Il linguaggio SQL",
      quizMulti: {
        multiList: [
          {
            ques: "Qual è il tipo di linguaggio per il comando INSERT?",
            ans: "DML",
            ansSel: ["DDL", "QL (Query Language)"],
          },
          {
            ques: "Qual è il tipo di linguaggio per il comando UPDATE?",
            ans: "DML",
            ansSel: ["DDL", "QL (Query Language)"],
          },
          {
            ques: "Qual è il tipo di linguaggio per il comando DELETE?",
            ans: "DML",
            ansSel: ["DDL", "QL (Query Language)"],
          },
          {
            ques: "Qual è il tipo di linguaggio per il comando CREATE TABLE?",
            ans: "DDL",
            ansSel: ["DML", "QL (Query Language)"],
          },
          {
            ques: "Qual è il tipo di linguaggio per il comando ALTER TABLE?",
            ans: "DDL",
            ansSel: ["DML", "QL (Query Language)"],
          },
          {
            ques: "Quale delle seguenti frasi SQL estrae i valori di A1 nelle righe di Tabella con A2 = 5?",
            ans: "Select A1 From Tabella Where A2 = 5",
            ansSel: [
              "Select A1, A2 = 5 From Tabella",
              "Select A2 = 5 From Tabella.A1",
              "Select Tabella.A1 From Tabella.A2 = 5",
            ],
          },
          {
            ques: "Quale delle seguenti frasi SQL estrae le righe di Tabella prive di valori in A2?",
            ans: "Select * From Tabella Where A2 Is Null",
            ansSel: [
              "Select ALL From Tabella Where A1 = ' '",
              "Select Tabella.* From Tabella Where A1 = ' '",
              "Select A1 From Tabella With A2 Null",
            ],
          },
          {
            ques: "Quale delle seguenti frasi SQL rappresenta meglio una proiezione?",
            ans: "Select A1, A2 From Tabella1",
            ansSel: [
              "Select A1, A2 From Tabella1 Where K1 &gt; 10",
              "Select * From Tabella1, Tabella2 Where K1 = K2",
              "Select * From Tabella1 Where A1 = 'xyz'",
            ],
          },
          {
            ques: "Quale delle seguenti frasi SQL contiene una selezione?",
            ans: "Select * From Tabella1 Where A1 = 'xyz'",
            ansSel: [
              "Select * From Tabella1",
              "Select * From Tabella1, Tabella2 Where K1 = K2",
              "Select A1 = A2 From Tabella1",
            ],
          },
          {
            ques: "Quale delle seguenti frasi SQL rappresenta meglio una congiunzione?",
            ans: "Select * From Tabella1 Inner Join Tabella2 On K1 = K2",
            ansSel: [
              "Select A1, A2 From Tabella1",
              "Select A1,A2,K1 From Tabella1 Inner Join Tabella2 On K1 = K2 Where  A1 ='xyz'",
              "Select * From Tabella2 Where A1 = 'xyz'",
            ],
          },
          {
            ques: "Quali delle seguenti frasi SQL elenca il totale delle fatture suddivise per cliente?",
            ans: "Select Cliente, SUM (Importo) From TabellaFatture Group By Cliente;",
            ansSel: [
              "Select Cliente, SUM(Importo) From TabellaFatture Group By Importo;",
              "Select Cliente, SUM (Importo) From TabellaFatture Order By Cliente;",
              "Select ORDER (Cliente,Importo) From TabellaFatture;",
            ],
          },
          {
            ques: "Quale delle seguenti frasi SQL consente di ottenere il numero degli studenti che provengono da una citta' prefissata?",
            ans: "Select COUNT(*) From Studenti Where Citta' = [Citta' prefissata];",
            ansSel: [
              "Select COUNT(*) From Studenti Group By [Citta' prefissata];",
              "Select COUNT (*) From Studenti Group By Citta' Where Citta' = [Citta' prefissata];",
              "Select COUNT(*) From Studenti Having Citta' = [Citta' prefissata];",
            ],
          },
          {
            ques: "Qual è la funzione svolta nelle condizioni di ricerca dal predicato BETWEEN?",
            ans: "Controlla se un valore e' compreso in un intervallo di valori.",
            ansSel: [
              "Controlla se un valore appartiene a un insieme specificato di valori.",
              "Confronta il valore in una colonna con il valore nullo.",
              "Confronta il valore di un attributo con un modello di stringa.",
            ],
          },
          {
            ques: "Qual è la funzione svolta nelle condizioni di ricerca dal predicato IN?",
            ans: "Controlla se un valore appartiene a un insieme specificato di valori.",
            ansSel: [
              "Controlla se un valore e' compreso in un intervallo di valori.",
              "Confronta il valore in una colonna con il valore nullo.",
              "Confronta il valore di un attributo con un modello di stringa.",
            ],
          },
          {
            ques: "Qual è la funzione svolta nelle condizioni di ricerca dal predicato LIKE?",
            ans: "Confronta il valore di un attributo con un modello di stringa.",
            ansSel: [
              "Controlla se un valore appartiene a un insieme specificato di valori.",
              "Confronta il valore in una colonna con il valore nullo.",
              "Controlla se un valore e' compreso in un intervallo di valori.",
            ],
          },
          {
            ques: "Qual è la funzione svolta nelle condizioni di ricerca dal predicato IS NULL?",
            ans: "Confronta il valore in una colonna con il valore nullo.",
            ansSel: [
              "Controlla se un valore appartiene a un insieme specificato di valori.",
              "Controlla se un valore e' compreso in un intervallo di valori.",
              "Controlla se un valore e' compreso in un intervallo di valori.",
            ],
          },
          {
            ques: "Quale delle seguenti frasi SQL consente di ottenere il numero della fattura di importo massimo?",
            ans: "Select NumFattura From Fatture Where Importo = (Select MAX(Importo) From Fatture);",
            ansSel: [
              "Select NumFattura, MAX(Importo) From Fatture;",
              "Select NumFattura From Fatture Where Importo = MAX(Importo);",
              "Select NumFattura From Fatture Having Importo = MAX(Importo);",
            ],
          },
          {
            ques: "Quale delle seguenti frasi SQL consente di ottenere il nome delle città da cui provengono 10 studenti?",
            ans: "Select Citta From Studenti Group By Citta Having COUNT(*) = 10;",
            ansSel: [
              "Select Studenti From Citta Group By Citta Having COUNT(*) = 10;",
              "Select Studenti From Citta Group By Citta Where COUNT(*) = 10;",
              "Select Citta From Studenti Group By Citta Where COUNT(*) = 10;",
            ],
          },
          {
            ques: "Che cosa si ottiene dal seguente comando Select? \nSelect NumFattura From Fatture Order By Importo;",
            ans: "Elenco dei numeri di fattura ordinato per valori crescenti dell'importo.",
            ansSel: [
              "Il numero della fattura di importo massimo.",
              "Elenco dei numeri di fattura ordinato per valori decrescenti dell'importo.",
              "L'importo della fattura avente il numero pi� alto.",
            ],
          },
        ],
        tf: [
          {
            ques: "Il left join si può realizzare in SQL, ma non nell'SQL di Access",
            ans: false,
          },
          {
            ques: "Il left join è una congiunzione di scarsa utilità",
            ans: false,
          },
          {
            ques: "Nelle interrogazioni che riguardano un'entità sulla quale è stata stabilita un'associazione ricorsiva può essere necessario il self join",
            ans: true,
          },
          {
            ques: "Un self join tra tabelle si realizza con il comando: Self Join",
            ans: false,
          },
          {
            ques: "Select SUM (Num1 * Num2) AS 'Totale' From Tabella; \nè sintatticamente corretta",
            ans: true,
          },
          {
            ques: "Select Tabella Where AVG(Importo) > 100; \nè sintatticamente corretta",
            ans: false,
          },
          {
            ques: "Select Count (Num1) AS Conteggio From Tabella Where Nome = 'ABCD'; \nè sintatticamente corretta",
            ans: true,
          },
          {
            ques: "Select Nome, Num1 From Tabella Group By Nome; \nè sintatticamente corretta",
            ans: false,
          },
          {
            ques: "Il comando GRANT crea una vista parziale sulle tabelle del database",
            ans: false,
          },
          {
            ques: "L'annullamento dei permessi agli utenti per l'accesso alle tabelle viene effettuato con il comando REVOKE",
            ans: true,
          },
          {
            ques: "La vista consente di decidere le modalità con le quali gli utenti possono vedere le tabelle del database",
            ans: true,
          },
          {
            ques: "Il comando GRANT UPDATE concede permessi di variazione sui dati",
            ans: true,
          },
        ],
        fill: [
          {
            ques: "Per eliminare una tabella dal database si usa il comando .........",
            ans: "Drop Table",
          },
          {
            ques: "Per modificare i valori nelle righe di una tabella si usa il comando .........",
            ans: "Update",
          },
          {
            ques: "Per inserire nuove tabelle nel database si usa il comando.........",
            ans: "Create Table",
          },
          {
            ques: "Per aggiungere una colonna a una tabella si usa il comando .........",
            ans: "Alter Table",
          },
        ],
      },
    },
    {
      baseDir: "Vol4/QuizInterattivi/Capitolo6",
      classe: "4",
      capitolo: "6",
      titolo: "Classe 4 cap. 6. MySQL",
      descrizione:
        "PRO.SIA Informatica e processsi aziendali - Classe 4\n6. MySQL",
      quizMulti: {
        multiList: [
          {
            ques: "Quale dei seguenti comandi Select è corretto per ottenere l'elenco con cognome e nome delle persone della tabella Anagrafica che abitano nelle città aventi come iniziale del nome la lettera M?",
            ans: "Select Cognome, Nome From Anagrafica Where Citta Like 'M%';",
            ansSel: [
              "Select Cognome, Nome From Anagrafica Where Citta Like '%M';",
              "Select Cognome, Nome From Anagrafica Where Citta = 'M%';",
              "Select Cognome, Nome From Anagrafica Where Citta Like 'M*';",
            ],
          },
          {
            ques: "Quale dei seguenti nomi di variabile utente in MySQL è corretto?",
            ans: "@totale",
            ansSel: ["@@totale", "*totale", "?totale"],
          },
          {
            ques: "Quale comando si usa per annullare tutte le modifiche che una transazione ha apportato al database?",
            ans: "Rollback",
            ansSel: [
              "Rollback to savepoint",
              "End transaction",
              "Undo transaction",
            ],
          },
          {
            ques: "Una transazione T1 esegue un comando Update che modifica una riga di una tabella e subito dopo una transazione concorrente T2 esegue un comando Select che cerca di leggere il record. Quale delle seguenti affermazioni è corretta?",
            ans: "T2 legge il record ma con i valori precedenti gli aggiornamenti eseguiti da T1.",
            ansSel: [
              "T2 legge il record con i valori aggiornati da T1.",
              "T2 viene bloccata sino al termine della transazione T1.",
              "Il gestore delle transazioni abortisce immediatamente T2.",
            ],
          },
          {
            ques: "Quale delle seguenti affermazioni, riferite al comando Select ... For Update usato da una transazione T1, è corretta?",
            ans: "Impedisce ad altre transazioni di accedere in lettura e scrittura ai record letti da T1.",
            ansSel: [
              "Permette ad altre transazioni di leggere, ma impedisce di modificare, i record letti da T1.",
              "Serve a T1 per leggere e contemporaneamente modificare certi record.",
              "Si usa per permettere ad altre transazioni di modificare i record letti da T1.",
            ],
          },
          {
            ques: "La procedura Esegui con parametri P1 e P2 � creata con il comando: \n  CREATE Procedure Esegui (P1 INT, OUT P2 VARCHAR(30)) . . ;Quale dei seguenti comandi CALL � quello corretto per eseguirla?",
            ans: "CALL Esegui (5, @par);",
            ansSel: [
              "CALL Esegui (5, 3);",
              "CALL Esegui (�5�, @par);",
              "CALL Esegui (5, �valore del parametro 2�);",
            ],
          },
          {
            ques: "Quale di queste affermazioni, riferite ai trigger, � vera?",
            ans: "Un trigger � associato a una tabella.",
            ansSel: [
              "Un trigger non pu� contenere comandi SQL.",
              "Un trigger � attivato da un comando CALL.",
              "Un trigger � associato a un database.",
            ],
          },
        ],
        tf: [
          {
            ques: "MySQL è un sistema per la gestione di basi di dati relazionali",
            ans: true,
          },
          {
            ques: "Non è possibile interagire con MySQL utilizzando il linguaggio SQL",
            ans: false,
          },
          {
            ques: "Si può interagire con MySQL solo dalla linea comandi",
            ans: false,
          },
          {
            ques: "La connessione al server MySQL è fatta specificando username e password",
            ans: true,
          },
          {
            ques: "L'ordine corretto dei comandi per creare un database Db1 e inserire in esso una nuova tabella Tab1, di cui poi si vuole visualizzare la struttura è: Create Database Db1, UseDb1, Create Table Tab1, Describe Tab1",
            ans: true,
          },
          {
            ques: "L'ordine corretto dei comandi per creare un database Db1 e inserire in esso una nuova tabella Tab1, di cui poi si vuole visualizzare la struttura è: Create Database Db1, Describe Tab1, UseDb1, Create Table Tab1",
            ans: false,
          },
          {
            ques: "Una transazione inizia con il commando Savepoint",
            ans: false,
          },
          {
            ques: "Una transazione ha caratteristiche di atomicità",
            ans: true,
          },
          {
            ques: "Il commando Commit si usa per confermare le modifiche apportate al database",
            ans: true,
          },
          {
            ques: "In una transazione MySQL con livello di isolamento di default non ci possono essere perdita di aggiornamento e letture sporche",
            ans: true,
          },
          {
            ques: "La proprietà dell'isolamento riguarda l'esecuzione di una transazione in un database installato su un server isolato da qualsiasi rete",
            ans: false,
          },
        ],
      },
    },
    {
      baseDir: "Vol4/QuizInterattivi/Capitolo7",
      classe: "4",
      capitolo: "7",
      titolo: "Classe 4 cap. 7. Linguaggio XML",
      descrizione:
        "PRO.SIA Informatica e processi aziendali - Classe 4\n7. Linguaggio XML",
      quizMulti: {
        multiList: [
          {
            ques: "Quale carattere indica il tag di chiusura?",
            ans: "Barra",
            ansSel: [
              "Punto e virgola",
              "Punto interrogativo",
              "Punto esclamativo",
            ],
          },
          {
            ques: "Quale delle seguenti frasi esprime meglio la definizione di parser?",
            ans: "Un elaboratore di testi che possiedono una struttura sintattica predefinita.",
            ansSel: [
              "Un linguaggio per preparare documenti strutturati.",
              "Un linguaggio per preparare pagine Web.",
              "Un programma per scrivere documenti XML in modo corretto.",
            ],
          },
          {
            ques: "Come si chiama il linguaggio per la trasformazione dei documenti XML?",
            ans: "Xsl",
            ansSel: ["Xls", "Xms", "Xmlns"],
          },
          {
            ques: "Qual è la funzionalità svolta del tag del linguaggio XSL <xsl:template> ?",
            ans: "associare un template a un elemento XML",
            ansSel: [
              "selezionare con una ripetizione ogni elemento di uno o piu' nodi XML",
              "estrarre un valore di un elemento XML",
            ],
          },
          {
            ques: "Qual è la funzionalità svolta del tag del linguaggio XSL <xsl:value-of> ?",
            ans: "estrarre un valore di un elemento XML",
            ansSel: [
              "selezionare con una ripetizione ogni elemento di uno o piu' nodi XML",
              "associare un template a un elemento XML",
            ],
          },
          {
            ques: "Qual è la funzionalità svolta del tag del linguaggio XSL <xsl:for-each> ?",
            ans: "selezionare con una ripetizione ogni elemento di uno o piu' nodi XML",
            ansSel: [
              "selezionare con una ripetizione ogni elemento di uno o piu' nodi XML",
              "estrarre un valore di un elemento XML",
            ],
          },
        ],
        tf: [
          {
            ques: "Il frammento di codice XML: \n\n <persona><cognome>Rossi \n\n è formalmente corretto",
            ans: false,
          },
          {
            ques: "Il frammento di codice XML: \n\n <persona>Rossi<cognome> \n\n è formalmente corretto",
            ans: false,
          },
          {
            ques: "Il frammento di codice XML: \n\n <persona><cognome>Rossi</cognome></persona> \n\n è formalmente corretto",
            ans: true,
          },
          {
            ques: "<css type='text/css' href='siti.css' ?></css> \n\n è la sintassi corretta per collegare il file CSS al documento XML",
            ans: false,
          },
          {
            ques: "<?xml-stylesheet type='text/css' href='siti.css' ?> \n\n è la sintassi corretta per collegare il file CSS al documento XML",
            ans: true,
          },
          {
            ques: "<css>href='siti.css' </css> \n\n è la sintassi corretta per collegare il file CSS al documento XML",
            ans: false,
          },
        ],
        fill: [
          {
            ques: "Un documento XML si dice valido se è anche conforme a un XML .....",
            ans: "schema",
          },
          {
            ques: "Un documento XML si dice well-formed se è conforme alla sintassi .....",
            ans: "xml",
          },
          {
            ques: "Un ..... moderno contiene le funzionalità di parser.",
            ans: "browser",
          },
          {
            ques: "Uno schema XML contiene il riferimento a un .......",
            ans: "namespace",
          },
        ],
      },
    },
    {
      baseDir: "Vol4/QuizInterattivi/Capitolo8",
      classe: "4",
      capitolo: "8",
      titolo: "Classe 4 cap. 8. Dati in rete con pagine PHP",
      descrizione:
        "PRO.SIA Informatica e processi aziendali - Classe 4\n8. Dati in rete con pagine PHP",
      quizMulti: {
        multiList: [
          {
            ques: "Quale dei seguenti nomi non è corretto per identificare le variabili in PHP?",
            ans: "$dom*",
            ansSel: ["$prezzo", "$risp2", "$tot_iva"],
          },
          {
            ques: "Come si chiamano gli array il cui indice è rappresentato da una stringa?",
            ans: "Array associativi",
            ansSel: [
              "Array numerici",
              "Array di stringhe",
              "Array indicizzati",
            ],
          },
          {
            ques: "Quale di queste variabili individua l'indirizzo IP da cui proviene la richiesta di esecuzione dello script PHP?",
            ans: "$_SERVER['REMOTE_ADDR']",
            ansSel: [
              "$_GET['REMOTE_ADDR']",
              "$_POST['REMOTE_ADDR']",
              "$_SERVER['IP_ADDR']",
            ],
          },
          {
            ques: "Qual è la funzione PHP che serve per controllare se a una variabile è stato assegnato un valore?",
            ans: "isset",
            ansSel: ["rand", "var_dump", "count"],
          },
          {
            ques: "Qual è il valore di ritorno del metodo fetch_assoc?",
            ans: "Un array associativo in cui ogni elemento corrisponde a un campo del record.",
            ansSel: [
              "Un array associativo in cui ogni elemento corrisponde a una riga della tabella.",
              "Un array numerico in cui ogni elemento corrisponde a una riga della tabella.",
              "Un array numerico in cui ogni elemento corrisponde a un campo del record.",
            ],
          },
          {
            ques: "Quale proprietà restituisce un numero intero corrispondente al numero di righe coinvolte in un'operazione di aggiornamento o di eliminazione?",
            ans: "affected_rows",
            ansSel: ["fetch_array", "num_rows", "mysql_num_rows"],
          },
        ],
        tf: [
          {
            ques: "Una stringa è costruita racchiudendo il testo tra doppi apici",
            ans: true,
          },
          {
            ques: "Una stringa è costruita racchiudendo il testo tra parentesi",
            ans: false,
          },
          {
            ques: "Una stringa è costruita racchiudendo il testo tra singoli apici",
            ans: true,
          },
          {
            ques: "Per concatenare le stringhe si usa l'operatore +",
            ans: false,
          },
        ],
        fill: [
          {
            ques: "La classe che rappresenta la connessione con il server MySQL è ...................",
            ans: "mysqli",
          },
          {
            ques: "Il metodo per chiudere una connessione con il server MySQL è ...................",
            ans: "close",
          },
          {
            ques: "Il metodo per rilasciare la memoria associata al result set di una query è ...................",
            ans: "free",
          },
          {
            ques: "Il metodo per inviare comandi SQL al server MySQL è ...................",
            ans: "query",
          },
        ],
      },
    },
    {
      baseDir: "Vol5/QuizInterattivi/Capitolo1",
      classe: "5",
      capitolo: "1",
      titolo: "Classe 5 cap. 1. Sistemi operativi e comandi Linux",
      descrizione:
        "PRO.SIA - Informatica e processi aziendali \n1. Sistemi operativi e comandi Linux",
      quizMulti: {
        multiList: [
          {
            ques: "Quale delle seguenti frasi corrisponde al significato di time sharing?",
            ans: "Suddivisione del tempo di utilizzo di una risorsa",
            ansSel: [
              "Suddivisione di una risorsa.",
              "Suddivisione del sistema operativo in moduli.",
              "Suddivisione di un programma.",
            ],
          },
          {
            ques: "Quale delle seguenti frasi corrisponde al significato di deadlock?",
            ans: "Una situazione nella quale due o piu' processi sono in attesa di una condizione che non si verifichera' mai.",
            ansSel: [
              "Una situazione nella quale uno o piu' processi non riescono ad accedere a una risorsa e quindi non possono eseguire il proprio lavoro.",
              "Una situazione nella quale un processo &egrave; stato bloccato da un semaforo.",
              "Una situazione nella quale piu' processi possono lavorare in modo del tutto asincrono.",
            ],
          },
          {
            ques: "La gestione a pagine è un concetto che si può applicare:",
            ans: "all'impiego della memoria centrale",
            ansSel: [
              "all'impiego dello spazio sul disco",
              "alla gestione delle periferiche",
              "all'organizzazione dei file",
            ],
          },
          {
            ques: "In quale file sono contenute le informazioni riguardanti gli utenti del sistema?",
            ans: "/etc/passwd",
            ansSel: ["/etc/motd", "/etc/users", "/etc/profile"],
          },
          {
            ques: "Quale tra i seguenti termini indica la modalità operativa dell'amministratore del sistema?",
            ans: "superuser",
            ansSel: ["administrator", "admin", "userroot"],
          },
          {
            ques: "Che cosa significa eseguire un comando in background?",
            ans: "il comando viene lanciato in esecuzione e all'utente viene subito riproposto il prompt della shell, in modo da richiedere un altro comando mentre il primo viene eseguito",
            ansSel: [
              "il comando viene lanciato in esecuzione solo dopo che &egrave; stata completata l'esecuzione del comando precedente",
              "il comando viene lanciato in esecuzione e l'utente deve attivare un'altra shell per eseguire i comandi successivi",
              "la shell cede il controllo al processo di esecuzione del comando e lo riprende al termine di questa.",
            ],
          },
          {
            ques: "Con quale comando è possibile ottenere il calendario di un mese e di un anno prefissati?",
            ans: "cal",
            ansSel: ["month", "year", "date"],
          },
          {
            ques: "Quale dei seguenti comandi consente di cercare il file di nome arch.dat nella directory corrente e a partire da essa nelle sue sottodirectory?",
            ans: "find . -name arch.dat",
            ansSel: [
              "find arch.dat . -name",
              "find . arch.dat",
              "find -name arch.dat",
            ],
          },
          {
            ques: "Quale dei seguenti comandi stabilisce il solo permesso di lettura sul file prova per tutte e tre le categorie di utenti, usando la notazione ottale?",
            ans: "chmod 444 prova",
            ansSel: ["chmod 400 prova", "chmod 700 prova", "chmod 777 prova"],
          },
          {
            ques: "Quale dei seguenti comandi occorre usare per mandare un messaggio di posta elettronica all'utente user2?",
            ans: "mail user2",
            ansSel: ["write user2", "mesg user2", "print user2"],
          },
          {
            ques: "Sulle righe di un file si possono effettuare operazioni analoghe alle operazioni relazionali sulle tabelle di un database. Associa all'operazione selezione il corrispondente comando",
            ans: "grep",
            ansSel: ["diff", "paste", "cat"],
          },
          {
            ques: "Sulle righe di un file si possono effettuare operazioni analoghe alle operazioni relazionali sulle tabelle di un database. Associa all'operazione proiezione il corrispondente comando",
            ans: "cut",
            ansSel: ["diff", "df", "cat"],
          },
          {
            ques: "Sulle righe di un file si possono effettuare operazioni analoghe alle operazioni relazionali sulle tabelle di un database. Associa all'operazione congiunzione il corrispondente comando",
            ans: "join",
            ansSel: ["grep", "df", "cat"],
          },
          {
            ques: "Qual è il corrispondente significato del comando cp ?",
            ans: "Copia",
            ansSel: ["Rinomina", "Visualizza", "Cancella"],
          },
          {
            ques: "Qual è il significato del comando mv ?",
            ans: "Rinomina",
            ansSel: ["Visualizza", "Lista", "Cancella"],
          },
          {
            ques: "Qual è il significato del comando ls ?",
            ans: "Lista",
            ansSel: ["Visualizza", "Rinomina", "Cancella"],
          },
          {
            ques: "Qual è il significato del comando cd ?",
            ans: "Cambia directory",
            ansSel: ["Visualizza", "Lista", "Cancella"],
          },
          {
            ques: "Qual è il significato del comando rm ?",
            ans: "Cancella",
            ansSel: ["Visualizza", "Cambia directory", "Lista"],
          },
          {
            ques: "Qual è il significato del comando cat ?",
            ans: "Visualizza",
            ansSel: ["Cancella", "Cambia directory", "Lista"],
          },
          {
            ques: "Qual è il significato del simbolo > ?",
            ans: "ridirige lo standard output",
            ansSel: [
              "ridirige lo standard input",
              "appende l'output in coda",
              "ridirige standard output e standard error",
            ],
          },
          {
            ques: "Qual è il significato del simbolo < ?",
            ans: "ridirige lo standard input",
            ansSel: [
              "ridirige lo standard output",
              "appende l'output in coda",
              "ridirige standard output e standard error",
            ],
          },
          {
            ques: "Qual è il significato del simbolo >> ?",
            ans: "appende l'output in coda",
            ansSel: [
              "ridirige lo standard input",
              "ridirige lo standard output",
              "ridirige standard output e standard error",
            ],
          },
          {
            ques: "Qual è il significato del simbolo >&amp; ?",
            ans: "ridirige standard output e standard error",
            ansSel: [
              "ridirige lo standard input",
              "ridirige lo standard output",
              "appende l'output in coda",
            ],
          },
        ],
        tf: [
          {
            ques: "Un sistema operativo non è in grado di parallelizzare i programmi ",
            ans: false,
          },
          {
            ques: "Un singolo programma può essere suddiviso in più processi che vengono eseguiti in parallelo ",
            ans: true,
          },
          {
            ques: "Un thread è un programma di grandi dimensioni che deve essere eseguito in modo sequenziale ",
            ans: false,
          },
          {
            ques: "Ci possono essere più thread attivi all'interno dello stesso programma ",
            ans: true,
          },
          {
            ques: "Il file system comprime gli archivi per occupare meno spazio su disco ",
            ans: false,
          },
          {
            ques: "Il file system contiene informazioni sulle dimensioni degli archivi ",
            ans: true,
          },
          {
            ques: "Il file system gestisce l'organizzazione fisica dei file su disco ",
            ans: true,
          },
          {
            ques: "Il file system consente di riferirsi in modo logico alle operazioni di I/O ",
            ans: true,
          },
          {
            ques: "Il file system virtualizza le periferiche",
            ans: false,
          },
          {
            ques: "I file speciali risiedono nella directory /dev ",
            ans: true,
          },
          {
            ques: "I file speciali a blocchi sono caratterizzati dalla lettera s ",
            ans: false,
          },
          {
            ques: "I file speciali a caratteri sono caratterizzati dalla lettera b ",
            ans: false,
          },
          {
            ques: "I file speciali caratterizzati dalla lettera d sono device ",
            ans: false,
          },
        ],
      },
    },
    {
      baseDir: "Vol5/QuizInterattivi/Capitolo2",
      classe: "5",
      capitolo: "2",
      titolo: "Classe 5 cap. 2. Reti e protocolli",
      descrizione:
        "PRO.SIA - Informatica e processi aziendali\n2. Reti e protocolli",
      quizMulti: {
        multiList: [
          {
            ques: "Quale delle seguenti frasi spiega meglio il significato di rete peer to peer?",
            ans: "Una rete dove ogni computer funziona sia come server che come client.",
            ansSel: [
              "Una rete nella quale un computer svolge il ruolo di server dedicato.",
              "Un rete nella quale si possono condividere solo stampanti, ma non file.",
            ],
          },
          {
            ques: "Quale delle seguenti frasi spiega meglio l'utilizzo di programmi di file-sharing?",
            ans: "Ogni utente condivide e scarica file contemporaneamente.",
            ansSel: [
              "Tutti gli utenti possono scaricare i file presenti su un server centrale.",
              "Ogni utente deve caricare file su un server centrale.",
              "Tutti gli utenti devono essere autorizzati dall'amministratore.",
            ],
          },
          {
            ques: "Quale delle seguenti affermazioni definisce il significato di ISO/OSI?",
            ans: "Un insieme di livelli e protocolli.",
            ansSel: [
              "Un protocollo di rete.",
              "Un livello dell'architettura di rete.",
              "Un modello non standard.",
            ],
          },
          {
            ques: "Quale livello è più basso nel modello TCP/IP?",
            ans: "Rete",
            ansSel: ["TCP", "Applicazione", "IP"],
          },
          {
            ques: "Quale livello è più alto nel modello TCP/IP?",
            ans: "Applicazione",
            ansSel: ["TCP", "Rete", "IP"],
          },
          {
            ques: "Quale tra i seguenti numeri rappresenta un indirizzo IP?",
            ans: "192.168.1.12",
            ansSel: ["192.342.12.12", "1.1.1.1", "255.255.255.255"],
          },
          {
            ques: "Qual è la funzionalità dell'applicativo HTTP?",
            ans: "Trasmissione di informazioni ipertestuali",
            ansSel: [
              "Trasferimento di posta elettronica",
              "Trasmissione di file tra due sistemi",
              "Trasmissioni criptate",
            ],
          },
          {
            ques: "Qual è la funzionalità dell'applicativo FTP?",
            ans: "Trasmissione di file tra due sistemi",
            ansSel: [
              "Trasferimento di posta elettronica",
              "Trasmissione di informazioni ipertestuali",
              "Trasmissioni criptate",
            ],
          },
          {
            ques: "Qual è la funzionalità dell'applicativo SMTP?",
            ans: "Trasferimento di posta elettronica",
            ansSel: [
              "Trasmissione di file tra due sistemi",
              "Trasmissione di informazioni ipertestuali",
              "Trasmissioni criptate",
            ],
          },
          {
            ques: "Quale delle seguenti definizioni corrisponde a WWW?",
            ans: "L'organizzazione ipertestuale dei documenti, che possono risiedere anche su computer diversi e geograficamente lontani.",
            ansSel: [
              "Il linguaggio utilizzato per creare pagine grafiche per Internet.",
              "L'insieme delle apparecchiature hardware per mettere in comunicazione pi&ugrave; computer.",
              "L'elenco dei computer collegati a Internet.",
            ],
          },
          {
            ques: "Quale è il significato di E-commerce?",
            ans: "Acquistare tramite Internet",
            ansSel: [
              "Studiare a distanza",
              "Lavoro da casa",
              "Condividere informazioni",
            ],
          },
          {
            ques: "Quale è il significato di Social network?",
            ans: "Condividere informazioni",
            ansSel: [
              "Studiare a distanza",
              "Lavoro da casa",
              "Acquistare tramite Internet",
            ],
          },
          {
            ques: "Quale è il significato di Telelavoro?",
            ans: "Lavoro da casa",
            ansSel: [
              "Studiare a distanza",
              "Condividere informazioni",
              "Acquistare tramite Internet",
            ],
          },
          {
            ques: "Quale è il significato di E-learning?",
            ans: "Studiare a distanza",
            ansSel: [
              "Lavoro da casa",
              "Condividere informazioni",
              "Acquistare tramite Internet",
            ],
          },
          {
            ques: "Quale delle seguenti affermazioni spiega il significato di DNS?",
            ans: "Traduce gli indirizzi IP in nomi di dominio.",
            ansSel: [
              "&Egrave; un provider per la connessione a Internet.",
              "&Egrave; un programma del sistema operativo che identifica l'indirizzo IP della macchina.",
              "&Egrave; un programma per visualizzare le pagine Web.",
            ],
          },
          {
            ques: "Nell'indirizzo www.provincia.milano.it quale parte rappresenta il dominio di primo livello (TLD)?",
            ans: "it",
            ansSel: ["www", "provincia", "milano"],
          },
          {
            ques: "Che cosa indica il termine localhost?",
            ans: "Il computer locale dell'utente.",
            ansSel: [
              "Una rete locale.",
              "Un'applicazione locale sul disco C:.",
              "Un browser locale.",
            ],
          },
          {
            ques: "Quale tra i seguenti indirizzi per un sito Internet è scritto correttamente secondo la sintassi URL?",
            ans: "http://utenti.web.it/museoweb/documenti/mappa.htm",
            ansSel: [
              "http:\\utenti.web.itmuseowebdocumentimappa.htm",
              "http:utenti.web.it//museoweb//documenti//mappa.htm",
              "http:/utenti.web.it/museoweb/documenti/mappa.htm",
            ],
          },
          {
            ques: "Quale è il significato di Protocollo?",
            ans: "Insieme di regole",
            ansSel: [
              "Elenco delle directory da percorrere per trovare un file",
              "Indirizzo Internet di un sito",
              "Nome di una macchina in una rete",
            ],
          },
          {
            ques: "Quale è il significato di Nome di dominio?",
            ans: "Indirizzo Internet di un sito",
            ansSel: [
              "Elenco delle directory da percorrere per trovare un file",
              "Insieme di regole",
              "Nome di una macchina in una rete",
            ],
          },
          {
            ques: "Quale è il significato di Percorso?",
            ans: "Elenco delle directory da percorrere per trovare un file",
            ansSel: [
              "Indirizzo Internet di un sito",
              "Insieme di regole",
              "Nome di una macchina in una rete",
            ],
          },
          {
            ques: "Quale è il significato di Nome host?",
            ans: "Nome di una macchina in una rete",
            ansSel: [
              "Indirizzo Internet di un sito",
              "Insieme di regole",
              "Elenco delle directory da percorrere per trovare un file",
            ],
          },
        ],
        tf: [
          {
            ques: "Una rete non può essere formata solamente da due computer",
            ans: false,
          },
          {
            ques: "Due persone che si telefonano creano una rete",
            ans: false,
          },
          {
            ques: "Un personal computer è in grado di connettersi a una rete",
            ans: true,
          },
          {
            ques: "Un terminale non connesso a una rete è inutilizzabile",
            ans: true,
          },
          {
            ques: "Una mainframe non connesso a una rete è inutilizzabile",
            ans: false,
          },
          {
            ques: "In una rete è possibile condividere componenti hardware",
            ans: true,
          },
          {
            ques: "In una rete è possibile condividere solamente risorse software",
            ans: false,
          },
          {
            ques: "In una rete è possibile spostare un file da un computer a un altro",
            ans: true,
          },
          {
            ques: "In una rete è possibile condividere l'utilizzo di un software",
            ans: true,
          },
          {
            ques: "In una rete è possibile condividere l'uso di un lettore CD",
            ans: true,
          },
          {
            ques: "Un server deve essere un computer molto potente",
            ans: false,
          },
          {
            ques: "Un client non connesso alla rete è inutilizzabile",
            ans: false,
          },
          {
            ques: "Un personal computer connesso alla rete può essere un client",
            ans: true,
          },
          {
            ques: "Le richieste di servizi vengono fatte dal client",
            ans: true,
          },
          {
            ques: "Un client non può mai essere anche server",
            ans: false,
          },
          {
            ques: "Un server può condividere una componente hardware",
            ans: true,
          },
          {
            ques: "Un client può condividere una componente hardware",
            ans: true,
          },
          {
            ques: "Un computer può essere sia client sia server",
            ans: true,
          },
          {
            ques: "I client non possono eseguire programmi",
            ans: false,
          },
          {
            ques: "I server non possono eseguire programmi",
            ans: false,
          },
          {
            ques: "Internet è una rete di tipo WAN",
            ans: true,
          },
          {
            ques: "Una rete WAN è più piccola di una rete LAN",
            ans: false,
          },
          {
            ques: "Non è possibile collegare due reti di tipo diverso",
            ans: false,
          },
          {
            ques: "è possibile collegare una rete LAN con una WAN",
            ans: true,
          },
          {
            ques: "Le problematiche di gestione di una rete dipendono anche dalla sua dimensione",
            ans: true,
          },
          {
            ques: "Le reti moderne trasmettono pacchetti",
            ans: true,
          },
          {
            ques: "Un pacchetto contiene un indirizzo di destinazione",
            ans: true,
          },
          {
            ques: "Un pacchetto può seguire più strade per andare da un host a un altro",
            ans: true,
          },
          {
            ques: "Un pacchetto può essere spedito solamente a un singolo host",
            ans: false,
          },
          {
            ques: "Un pacchetto inviato all'indirizzo di broadcast viene ricevuto da tutti gli host connessi alla rete",
            ans: true,
          },
          {
            ques: "Se la rete è composta da molti computer è necessario installare un router",
            ans: false,
          },
          {
            ques: "Uno switch è utilizzato per connettere più computer alla rete",
            ans: true,
          },
          {
            ques: "Per unire due reti di tipo differente è necessario uno switch",
            ans: false,
          },
          {
            ques: "I router possono svolgere anche le funzionalità di switch",
            ans: true,
          },
          {
            ques: "La fibra ottica permette elevate velocità di trasmissione",
            ans: true,
          },
          {
            ques: "Il doppino telefonico può essere utilizzato sia per le trasmissioni telefoniche sia di dati",
            ans: true,
          },
          {
            ques: "Il protocollo 802.11b permette di trasmettere a una distanza di parecchi chilometri",
            ans: false,
          },
          {
            ques: "La velocità delle trasmissioni wireless è oggi paragonabile a quella delle trasmissioni cablate",
            ans: true,
          },
          {
            ques: "Le trasmissioni wireless possono dare problemi riguardanti la sicurezza",
            ans: true,
          },
          {
            ques: "L'intera rete Internet è gestita da pochi potenti server",
            ans: false,
          },
          {
            ques: "Internet è una rete di tipo LAN",
            ans: false,
          },
          {
            ques: "Internet è una rete formata da più reti differenti tra loro",
            ans: true,
          },
          {
            ques: "La rete Internet viene anche chiamata WWW",
            ans: false,
          },
          {
            ques: "Un browser permette di navigare nel World Wide Web",
            ans: true,
          },
          {
            ques: "Le informazioni, per essere trasmesse, vengono suddivise in pacchetti",
            ans: true,
          },
          {
            ques: "Il percorso seguito dai pacchetti è sempre lo stesso",
            ans: false,
          },
          {
            ques: "Ogni volta che si trasmette un pacchetto ci si assicura che questo arrivi a destinazione",
            ans: true,
          },
          {
            ques: "Due host con lo stesso IP non possono comunicare tra loro",
            ans: true,
          },
          {
            ques: "Un host può essere individuato utilizzando un nome",
            ans: true,
          },
          {
            ques: "Un IP dinamico cambia numerose volte durante una connessione",
            ans: false,
          },
          {
            ques: "Un IP dinamico non cambia durante una connessione",
            ans: true,
          },
          {
            ques: "Un IP statico non cambia mai",
            ans: true,
          },
          {
            ques: "Due host possono avere, all'inizio della connessione, lo stesso IP",
            ans: false,
          },
          {
            ques: "Due host possono avere, durante una connessione, lo stesso IP",
            ans: false,
          },
        ],
        fill: [
          {
            ques: "La creazione di una rete telematica permette di condividere ogni tipo di ............",
            ans: "risorsa",
          },
          {
            ques: "La tolleranza ai guasti viene indicata con il termine ............",
            ans: "fault tolerance",
          },
          {
            ques: "Nelle reti............alcuni computer offrono servizi e altri ne usufruiscono.",
            ans: "client/server",
          },
          {
            ques: "Nelle reti ............ tutti i computer svolgono entrambi i ruoli di client e server.",
            ans: "peer to peer",
          },
        ],
      },
    },
    {
      baseDir: "Vol5/QuizInterattivi/Capitolo3",
      classe: "5",
      capitolo: "3",
      titolo: "Classe 5 cap. 3. Servizi di rete e sicurezza",
      descrizione:
        "PRO.SIA - Informatica e processi aziendali\n3. Servizi di rete e sicurezza",
      quizMulti: {
        multiList: [
          {
            ques: "Quale delle seguenti frasi rappresenta la definizione di Intranet?",
            ans: "La rete interna aziendale che usa le modalita' e i protocolli tipici di Internet.",
            ansSel: [
              "La connessione tra reti aziendali.",
              "Il collegamento in rete tra l'azienda e una banca.",
              "L'estensione di una rete da locale a geografica.",
            ],
          },
          {
            ques: "Quale tra i seguenti tipi di rete è adatta per la distribuzione di cataloghi di prodotti riservati ai rappresentanti od operatori commerciali di un'azienda?",
            ans: "Extranet",
            ansSel: ["Internet", "Intranet"],
          },
          {
            ques: "Quale tra i seguenti è un vantaggio per le aziende derivanti dal cloud computing?",
            ans: "Diminuzione dei costi dei sistemi informatici.",
            ansSel: [
              "Eliminazione dei computer aziendali.",
              "Diminuzione del personale.",
            ],
          },
          {
            ques: "Quali tra i seguenti è un vantaggio per gli utenti nell'uso della cloud?",
            ans: "Utilizzo di software e applicazioni senza la necessita' di installazione e aggiornamento sui propri computer.",
            ansSel: [
              "Utilizzo delle applicazioni senza il browser.",
              "Possibilita' di accesso ai servizi solo dal proprio computer.",
            ],
          },
          {
            ques: "Quale tra le seguenti frasi descrive l'aspetto innovativo del Web 2.0?",
            ans: "E' un'evoluzione in ottica sociale degli strumenti di comunicazione.",
            ansSel: [
              "Permette l'accesso alla rete a pi&ugrave; utenti rispetto al Web tradizionale.",
              "Elimina i problemi di spam relativi alla posta elettronica.",
              "Consente un uso pi&ugrave; semplice della chat e dei forum.",
            ],
          },
          {
            ques: "A che cosa serve il pulsante Mi piace?",
            ans: "Esprimere la propria approvazione per la pagina sulla quale si trova il pulsante.",
            ansSel: [
              "Stringere amicizia con qualcuno.",
              "Entrare a far parte di una community on line.",
              "Abbonarsi ad un feed RSS.",
            ],
          },
          {
            ques: "Quale tra i seguenti è un punto di forza del marketing non convenzionale?",
            ans: "Puntare sul coinvolgimento personale dei consumatori.",
            ansSel: [
              "Offrire ai consumatori prodotti con prezzi pi&ugrave; bassi.",
              "Raggiungere clienti anche di altre nazioni.",
            ],
          },
          {
            ques: "Come viene decifrata la parola 'RTSLBF', creata usando il cifrario a sostituzione (chiave = 5)?",
            ans: "moneta",
            ansSel: ["manica", "matita", "motore"],
          },
          {
            ques: "Quale delle seguenti frasi definisce il significato di RSA?",
            ans: "algoritmo crittografico a chiave asimmetrica",
            ansSel: [
              "algoritmo crittografico a sostituzione",
              "algoritmo crittografico a trasposizione",
              "algoritmo crittografico a chiave simmetrica",
            ],
          },
          {
            ques: "Quale delle seguenti frasi esprime meglio il significato del termine e-government?",
            ans: "L'utilizzo e l'applicazione delle tecnologie informatiche nelle amministrazioni centrali e periferiche dello Stato.",
            ansSel: [
              "La formazione del personale della Pubblica Amministrazione.",
              "L'approvvigionamento di beni e servizi.",
              "Le comunicazioni tra le pubbliche amministrazioni tramite posta elettronica.",
            ],
          },
        ],
        tf: [
          {
            ques: "In relazione al social marketing, il passaparola assume un'importanza primaria",
            ans: true,
          },
          {
            ques: "In relazione al social marketing, i contenuti devono essere innovativi e non banali",
            ans: true,
          },
          {
            ques: "Il social marketing si rivolge solo ai possessori di dispositivi mobili",
            ans: false,
          },
          {
            ques: "Il social marketing può essere percepito come una pubblicità classica",
            ans: false,
          },
          {
            ques: "Nel social marketing il coinvolgimento di molti utenti è un fattore primario",
            ans: true,
          },
          {
            ques: "La crittografia a chiave asimmetrica utilizza una coppia di chiavi",
            ans: true,
          },
          {
            ques: "Nella crittografia a chiave asimmetrica la chiave pubblica non può essere usata per le operazioni di decifrazione",
            ans: false,
          },
          {
            ques: "Nella crittografia a chiave asimmetrica la chiave privata deve essere tenuta segreta",
            ans: true,
          },
          {
            ques: "Nella crittografia a chiave asimmetrica il mittente e il destinatario non condividono chiavi segrete",
            ans: true,
          },
          {
            ques: "La firma digitale si basa sui Certificati elettronici rilasciati da Enti certificatori accreditati",
            ans: true,
          },
          {
            ques: "La posta elettronica certificata non richiede un ente gestore di certificazione",
            ans: false,
          },
          {
            ques: "L'e-procurement indica le operazioni di acquisto in rete o le aste online per la scelta dei fornitori",
            ans: true,
          },
          {
            ques: "Gli strumenti dell'amministrazione digitale riguardano solo le imprese e non i singoli cittadini",
            ans: false,
          },
          {
            ques: "SSH rappresenta un programma per la crittografia",
            ans: false,
          },
          {
            ques: "PGP rappresenta un programma per la crittografia",
            ans: true,
          },
          {
            ques: "GPG rappresenta un un protocollo",
            ans: false,
          },
          {
            ques: "SSL rappresenta un programma per la crittografia",
            ans: false,
          },
          {
            ques: "TLS rappresenta un un protocollo",
            ans: true,
          },
        ],
        fill: [
          {
            ques: "Gli strumenti ...................... permettono una comunicazione in tempo reale.",
            ans: "sincroni",
          },
          {
            ques: "Il software Skype consente di effettuare chiamate con la tecnologia .....................",
            ans: "VoIP",
          },
          {
            ques: "Per una video conferenza sono necessari: connessione Internet, microfono e ..................",
            ans: "webcam",
          },
          {
            ques: "I ...................... aziendali permettono all'azienda di avere un canale comunicativo più informale con i clienti.",
            ans: "blog",
          },
          {
            ques: "Il messaggio che può essere letto da tutti si chiama ..............",
            ans: "testo in chiaro",
          },
          {
            ques: "Il messaggio codificato e reso illeggibile si chiama ..............",
            ans: "testo cifrato",
          },
          {
            ques: "I metodi di .............. servono per codificare l'informazione.",
            ans: "crittografia",
          },
          {
            ques: "I metodi di .............. servono per decodificare il testo cifrato.",
            ans: "decifrazione",
          },
        ],
      },
    },
    {
      baseDir: "Vol5/QuizInterattivi/Capitolo4",
      classe: "5",
      capitolo: "4",
      titolo: "Classe 5 cap. 4. Comandi per server, sicurezza e crittografia",
      descrizione:
        "PRO.SIA - Informatica e processi aziendali\n4. Comandi per server, sicurezza e crittografia",
      quizMulti: {
        multiList: [
          {
            ques: "Qual è il corrispondente numero di porta prefissato del servizio ftp?",
            ans: "21",
            ansSel: ["110", "25", "80"],
          },
          {
            ques: "Qual è il corrispondente numero di porta prefissato del servizio ssh?",
            ans: "22",
            ansSel: ["110", "25", "80"],
          },
          {
            ques: "Qual è il corrispondente numero di porta prefissato del servizio smtp?",
            ans: "25",
            ansSel: ["110", "21", "80"],
          },
          {
            ques: "Qual è il corrispondente numero di porta prefissato del servizio http?",
            ans: "80",
            ansSel: ["110", "21", "22"],
          },
          {
            ques: "Qual è il corrispondente numero di porta prefissato del servizio pop3?",
            ans: "110",
            ansSel: ["80", "21", "22"],
          },
          {
            ques: "Con quale comando è possibile verificare il corretto funzionamento dei nomi associati alle macchine dichiarate nel file  /etc/hosts?",
            ans: "ping",
            ansSel: ["ifconfig", "iptables", "netstat"],
          },
          {
            ques: "Qual è il contenuto della cartella /etc/init.d?",
            ans: "script di avvio",
            ansSel: [
              "documenti di rete",
              "file di configurazione",
              "log del sistema",
            ],
          },
          {
            ques: "Qual è il contenuto della cartella /etc?",
            ans: "file di configurazione",
            ansSel: ["documenti di rete", "script di avvio", "log del sistema"],
          },
          {
            ques: "Qual è il contenuto della cartella /var/log?",
            ans: "log del sistema",
            ansSel: [
              "documenti di rete",
              "script di avvio",
              "file di configurazione",
            ],
          },
          {
            ques: "Qual è il contenuto della cartella /var/www?",
            ans: "documenti di rete",
            ansSel: [
              "log del sistema",
              "script di avvio",
              "file di configurazione",
            ],
          },
          {
            ques: "La stringa  acl retelocale src 192.168.10.0/255.255.255.0 nel file squid.conf ",
            ans: "Consente l'accesso al proxy all'host 192.168.10.24",
            ansSel: [
              "Vieta l'accesso all'host 192.168.10.1",
              "Consente l'accesso solamente all'host 192.168.0.10",
              "Consente l'accesso a tutte le interfacce di rete con netmask 255.255.255.0",
            ],
          },
          {
            ques: "Il comando iptables -A INPUT -p tcp -j ACCEPT ",
            ans: "Permette il transito di tutti i pacchetti in entrata.",
            ansSel: [
              "Blocca tutti i pacchetti in entrata.",
              "Blocca tutte le connessioni che utilizzano il protocollo tcp.",
              "Blocca tutte le connessioni che utilizzano il protocollo udp.",
            ],
          },
        ],
        tf: [
          {
            ques: "Il protocollo FTP permette di trasferire file",
            ans: true,
          },
          {
            ques: "Il protocollo FTP utilizza solo Internet per trasferire file ",
            ans: false,
          },
          {
            ques: "FTP permette di trasferire file tra due host qualsiasi ",
            ans: true,
          },
          {
            ques: "Esistono sia client che server FTP",
            ans: true,
          },
          {
            ques: "Tutti i siti utilizzando un server Web ",
            ans: true,
          },
          {
            ques: "Tutti i siti utilizzano Apache",
            ans: false,
          },
          {
            ques: "Apache è un server Web",
            ans: true,
          },
          {
            ques: "Un browser è un client Web ",
            ans: true,
          },
          {
            ques: "Ogni utente Linux possiede un indirizzo di posta elettronica ",
            ans: true,
          },
          {
            ques: "Il protocollo utilizzato per ricevere la posta è diverso da quello utilizzato per inviarla",
            ans: true,
          },
          {
            ques: "Un client di posta non può inviare messaggi di posta a un altro client",
            ans: false,
          },
          {
            ques: "Un server di posta è installabile su qualsiasi computer ",
            ans: true,
          },
          {
            ques: "Non è possibile condividere una stampante tra un sistema Linux e uno Windows ",
            ans: false,
          },
          {
            ques: "Utilizzando samba è possibile condividere un file ",
            ans: true,
          },
          {
            ques: "Utilizzando samba è possibile modificare un file memorizzato su un computer remoto ",
            ans: false,
          },
          {
            ques: "Samba è il servizio nfs per Windows ",
            ans: false,
          },
          {
            ques: "Tutte le reti devono avere un server DHCP ",
            ans: false,
          },
          {
            ques: "Ogni computer è un client DHCP ",
            ans: true,
          },
          {
            ques: "Gli indirizzi assegnati dal DHCP sono dinamici ",
            ans: true,
          },
          {
            ques: "Gli indirizzi assegnati dal DHCP sono statici ",
            ans: false,
          },
        ],
        fill: [
          {
            ques: "..................... significa tradurre nomi di dominio in indirizzi IP",
            ans: "risolvere",
          },
          {
            ques: "Memorizzare un ..................... è più semplice che memorizzare un indirizzo IP",
            ans: "dominio",
          },
          {
            ques: "Bind è un particolare server .....................",
            ans: "DNS",
          },
          {
            ques: "Un host può possedere un nome e vari .....................",
            ans: "alias",
          },
          {
            ques: "Utilizzando nfs è possibile ............. una porzione del proprio filesystem",
            ans: "condividere",
          },
          {
            ques: "Si può utilizzare un filesystem di rete utilizzando il comando .............",
            ans: "mount",
          },
          {
            ques: "Chiunque può ............. un filesystem di rete",
            ans: "montare",
          },
          {
            ques: "Il protocollo samba prevede la ............. degli utenti",
            ans: "autenticazione",
          },
          {
            ques: "Samba permette di condividere risorse in reti di tipo .............",
            ans: "misto",
          },
          {
            ques: "Nobody indica l'utente .............",
            ans: "generico",
          },
          {
            ques: "Samba divide la rete in ............. di lavoro",
            ans: "gruppi",
          },
          {
            ques: "Un insieme di regole è chiamato ...................",
            ans: "catena",
          },
          {
            ques: "Un firewall utilizza ................... per stabilire quali pacchetti bloccare.",
            ans: "regole",
          },
          {
            ques: "Un firewall permette di ................... un pacchetto in base all'indirizzo di provenienza.",
            ans: "filtrare",
          },
          {
            ques: "Un firewall filtra i ................... in base a dati contenuti nell'header.",
            ans: "pacchetti",
          },
        ],
      },
    },
    {
      baseDir: "Vol5/QuizInterattivi/Capitolo5",
      classe: "5",
      capitolo: "5",
      titolo: "Classe 5 cap. 5. Informatica mobile",
      descrizione:
        "PRO.SIA - Informatica e processi aziendali\n5. Informatica mobile",
      quizMulti: {
        multiList: [
          {
            ques: "Quale tra i seguenti non è uno strumento integrato negli smartphone?",
            ans: "Mouse",
            ansSel: ["Antenna GPS", "Fotocamera", "Interfaccia WiFi"],
          },
          {
            ques: "Quale gesto eseguito con le dita sullo schermo touch indica il termine spread?",
            ans: "ingrandire",
            ansSel: ["toccare", "trascinare", "rimpicciolire"],
          },
          {
            ques: "Quale gesto eseguito con le dita sullo schermo touch indica il termine scroll?",
            ans: "scorrere",
            ansSel: ["toccare", "trascinare", "rimpicciolire"],
          },
          {
            ques: "Quale gesto eseguito con le dita sullo schermo touch indica il termine drag?",
            ans: "trascinare",
            ansSel: ["toccare", "scorrere", "rimpicciolire"],
          },
          {
            ques: "Quale gesto eseguito con le dita sullo schermo touch indica il termine rotate?",
            ans: "ruotare",
            ansSel: ["toccare", "scorrere", "rimpicciolire"],
          },
          {
            ques: "Quale gesto eseguito con le dita sullo schermo touch indica il termine pinch?",
            ans: "rimpicciolire",
            ansSel: ["ruotare", "scorrere", "trascinare"],
          },
          {
            ques: "Quale gesto eseguito con le dita sullo schermo touch indica il termine tap?",
            ans: "toccare",
            ansSel: ["ruotare", "scorrere", "trascinare"],
          },
          {
            ques: "Qual è il valore dell'attributo data-role di jQuery mobile che ha il significato di intestazione?",
            ans: "Header",
            ansSel: ["Page", "Content", "Footer"],
          },
          {
            ques: "Qual è il valore dell'attributo data-role  di  jQuery mobile che ha il significato di pagina?",
            ans: "Page",
            ansSel: ["Header", "Content", "Footer"],
          },
          {
            ques: "Qual è il valore dell'attributo data-role  di  jQuery mobile che ha il significato di piè di pagina?",
            ans: "Footer",
            ansSel: ["Header", "Content", "Page"],
          },
          {
            ques: "Qual è il valore dell'attributo data-role  di  jQuery mobile che ha il significato di contenuto?",
            ans: "Content",
            ansSel: ["Header", "Page", "Footer"],
          },
          {
            ques: "Quale tra i seguenti non è un livello di classificazione degli schermi di dispositivo in Bootstrap?",
            ans: "xm",
            ansSel: ["xl", "lg", "md"],
          },
          {
            ques: "Quale tra i seguenti termini indica un plugin di Bootstrap che permette di creare una sequenza di immagini o altri elementi a scorrimento?",
            ans: "carousel",
            ansSel: ["controls", "viewport", "container"],
          },
          {
            ques: "Quale tra i seguenti è il dispositivo virtuale usato nell'ambiente di sviluppo Android?",
            ans: "Emulatore AVD",
            ansSel: ["Emulatore APP", "Emulatore SDK", "Plug-in ADT"],
          },
        ],
        tf: [
          {
            ques: "I dispositivi mobili hanno una capacità di elaborazione paragonabile ai computer",
            ans: true,
          },
          {
            ques: "I dispositivi mobili sono solitamente collegati alla rete Internet",
            ans: true,
          },
          {
            ques: "I dispositivi mobili sono dispositivi di grandi dimensioni",
            ans: false,
          },
          {
            ques: "I dispositivi mobili sono spesso dotati di uno schermo sensibile al tatto",
            ans: true,
          },
          {
            ques: "Un blocco di contenuti di jQuery Mobile che organizza i dati in una griglia si chiama listview",
            ans: false,
          },
          {
            ques: "La classe ui-grid-c crea una griglia a 4 colonne",
            ans: true,
          },
          {
            ques: "La parola chiave @media rappresenta una media query",
            ans: true,
          },
          {
            ques: "L'orientamento in verticale si chiama landscape",
            ans: false,
          },
          {
            ques: "Android è un sistema operativo solo per telefoni cellulari",
            ans: false,
          },
          {
            ques: "Android è un sistema operativo sviluppato da Google",
            ans: true,
          },
          {
            ques: "Android è un insieme dei servizi Internet utilizzabili con uno smartphone",
            ans: false,
          },
          {
            ques: "Android è un software open source",
            ans: true,
          },
        ],
        fill: [
          {
            ques: "Il termine ................ indica la modalità con la quale gli elementi e gli oggetti sono disposti e organizzati in un documento o in una pagina Web.",
            ans: "layout",
          },
          {
            ques: "Il design .............. consente di realizzare pagine che si adattano automaticamente al dispositivo utilizzato e alla risoluzione del display.",
            ans: "responsivo",
          },
          {
            ques: "Il termine ................. indica un insieme di librerie software che consentono di scrivere codice conciso ed efficiente.",
            ans: "framework",
          },
          {
            ques: "Il termine ........... indica un catalogo on line per la raccolta delle app, organizzati per categorie.",
            ans: "store",
          },
        ],
      },
    },
    {
      baseDir: "Vol5/QuizInterattivi/Capitolo6",
      classe: "5",
      capitolo: "6",
      titolo: "Classe 5 cap. 6. Sistemi ERP e CRM",
      descrizione:
        "PRO.SIA - Informatica e processi aziendali\n6. Sistemi ERP e CRM",
      quizMulti: {
        multiList: [
          {
            ques: "Che cosa si intende con ERP?",
            ans: "Un software per soluzioni aziendali integrate.",
            ansSel: [
              "Il trattamento automatico dei documenti aziendali.",
              "L'estrazione dei dati aziendali da database decisionali.",
              "Un unico grande programma che gestisce tutta l'azienda.",
            ],
          },
          {
            ques: "Quale tra i seguenti è un vantaggio nell'adozione di un sistema ERP?",
            ans: "Le decisioni aziendali sono piu' precise e sono eseguite con maggiore velocita'.",
            ansSel: [
              "Si hanno costi elevati per l'implementazione della soluzione ERP.",
              "Riduzione del numero dei fornitori del software.",
            ],
          },
          {
            ques: "Che cosa si intende con sistema CRM?",
            ans: "Un sistema per gestire le relazioni con i clienti.",
            ansSel: [
              "Un sistema per gestire la filiera produttiva.",
              "Un sistema per soluzioni aziendali integrate.",
              "Un sistema per gestire le transazioni commerciali on line.",
            ],
          },
          {
            ques: "Quale tra i seguenti è un vantaggio nell'adozione di un sistema CRM?",
            ans: "Ridurre il costo del marketing e del servizio clienti.",
            ansSel: [
              "Diminuire i contatti con i clienti.",
              "Gestire i clienti in modo indipendente dal marketing, dal servizio clienti e dal supporto tecnico.",
            ],
          },
        ],
        tf: [
          {
            ques: "Alla base di un sistema ERP c'è un database come deposito di dati comune ai diversi moduli",
            ans: true,
          },
          {
            ques: "I moduli di un sistema ERP presentano interfacce diverse tra loro",
            ans: false,
          },
          {
            ques: "I sistemi ERP non sono configurabili",
            ans: false,
          },
          {
            ques: "Al crescere della personalizzazione crescono i costi di realizzazione e di manutenzione",
            ans: true,
          },
          {
            ques: "Al crescere della personalizzazione aumenta l'affidabilità del sistema",
            ans: false,
          },
          {
            ques: "Il costo di conservazione di un cliente è inferiore a quello per acquisire un nuovo cliente",
            ans: true,
          },
          {
            ques: "La gestione delle relazioni con il cliente si basa su prodotti software sofisticati",
            ans: false,
          },
          {
            ques: "La gestione delle relazioni con il cliente è una precisa strategia aziendale che pone attenzione alle esigenze del cliente",
            ans: true,
          },
          {
            ques: "Il CRM riguarda solo gli addetti alle vendite e il marketing",
            ans: false,
          },
        ],
      },
    },
    {
      baseDir: "Vol5/QuizInterattivi/Capitolo7",
      classe: "5",
      capitolo: "7",
      titolo: "Classe 5 cap. 7. Analisi dei dati aziendali e big data",
      descrizione:
        "PRO.SIA - Informatica e processi aziendali \n7. Analisi dei dati aziendali e big data",
      quizMulti: {
        multiList: [
          {
            ques: "Quale delle seguenti frasi descrive il significato di data mining?",
            ans: "Acquisizione di conoscenza estratta dai dati aziendali.",
            ansSel: [
              "Gestione delle risorse necessarie nella fornitura di un prodotto o di un servizio.",
              "Gestione delle interazioni con clienti attivi o potenziali clienti.",
              "Un'interrogazione a una base di dati per ottenere informazioni.",
            ],
          },
          {
            ques: "Quale strumento del foglio di calcolo consenti di incrociare i dati e di evidenziare eventuali dipendenze tra i dati?",
            ans: "Tabella pivot",
            ansSel: [
              "Gestione scenari",
              "Subtotali",
              "Tabella a due variabili",
            ],
          },
          {
            ques: "Quali problemi vengono risolti con lo strumento Risolutore?",
            ans: "Problemi di Ottimizzazione.",
            ansSel: [
              "Problemi di Analisi Statistica.",
              "Problemi di Analisi di Grafici.",
              "Problemi di qualunque tipo.",
            ],
          },
          {
            ques: "In quale scheda si trova il comando che attiva il Risolutore? ",
            ans: "Dati",
            ansSel: ["Inserisci", "Sviluppo", "Formule"],
          },
          {
            ques: "Quale delle seguenti frasi è corretta? ",
            ans: "In un problema di ottimizzazione e' richiesto il valore massimo oppure minimo oppure uguale a un dato specifico. ",
            ansSel: [
              "In un problema di ottimizzazione e' richiesto sempre il valore massimo",
              "In un problema di ottimizzazione e' richiesto il valore minimo.",
              "In un problema di ottimizzazione e' richiesto il valore massimo o il valore minimo.",
            ],
          },
          {
            ques: "Quale dei seguenti parametri non fa parte del Risolutore?",
            ans: "Casella dei Dati ",
            ansSel: [
              "Imposta Obiettivo",
              "Celle variabili",
              "Casella dei Vincoli",
            ],
          },
          {
            ques: "A che cosa serve lo strumento Ricerca obiettivo?",
            ans: "Trovare il risultato desiderato modificando un valore di input.",
            ansSel: [
              "Evidenziare le dipendenze tra i dati.",
              "Calcolare il punto di pareggio.",
              "Fornire un indicatore che controlla l'andamento di un processo aziendale.",
            ],
          },
          {
            ques: "Come si chiama la formula di calcolo creata per l'utilizzo in una tabella/grafico pivot con i dati di Power Pivot?",
            ans: "Misura",
            ansSel: ["Formula DAX", "Scenario", "Break even point"],
          },
          {
            ques: "Che cosa indica il termine KPI?",
            ans: "Indicatore chiave di prestazione.",
            ansSel: [
              "Indice di raggruppamento dei dati.",
              "Formula di calcolo su un campo chiave.",
              "Soluzione del Risolutore.",
            ],
          },
        ],
        tf: [
          {
            ques: "I Big Data sono data set della dimensione di diversi Gigabytes",
            ans: false,
          },
          {
            ques: "I Big Data possono essere considerati un'evoluzione della Business Intelligence",
            ans: true,
          },
          {
            ques: "I Big Data sono caratterizzati dalla presenza di dati strutturati e non strutturati quali immagini e suoni",
            ans: true,
          },
          {
            ques: "Con 4V si fa riferimento ai termini Volume, Velocità, Varietà, Valore",
            ans: false,
          },
          {
            ques: "I settori di applicazione della tecnologia dei big data sono limitati all'industria e al commercio",
            ans: false,
          },
        ],
      },
    },
  ];
  Logger.clear();
  qs.forEach((q) => creaQuiz(q));
}
