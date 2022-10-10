$( function($){

   var quizMulti = {
 
       multiList:[
              {ques: "Qual &egrave; l'obiettivo generale della metodologia?", ans: "Un'organizzazione del lavoro tale da fornire il prodotto desiderato.", 
             ansSel : ["La qualit&agrave; del software di progetto.", 
             "Il modello di qualit&agrave; generale.", "La struttura degli archivi elettronici."]},
             
              {ques: " Qual &egrave; il ruolo corrispondente alla figura professionale di Utente?", ans: "approvazione", 
             ansSel : ["responsabilit&agrave;", 
             "collaborazione", "controllo"]},
             
              {ques: " Qual &egrave; il ruolo corrispondente alla figura professionale di Committente?", ans: "approvazione", 
             ansSel : ["responsabilit&agrave;", 
             "collaborazione", "controllo"]},
             
              {ques: " Qual &egrave; il ruolo corrispondente alla figura professionale di Direzione Aziendale?", ans: "approvazione", 
             ansSel : ["responsabilit&agrave;", 
             "collaborazione", "controllo"]},
             
                {ques: " Qual &egrave; il ruolo corrispondente alla figura professionale di Ispettore?", ans: "controllo", 
             ansSel : ["responsabilit&agrave;", 
             "collaborazione", "approvazione"]},
             
             {ques: " Qual &egrave; il ruolo corrispondente alla figura professionale di Capo Progetto?", ans: "responsabilita'", 
             ansSel : ["controllo", 
             "collaborazione", "approvazione"]},
             
                {ques: " Qual &egrave; il ruolo corrispondente alla figura professionale di Progettista?", ans: "collaborazione", 
             ansSel : ["controllo", 
             "responsabilit&agrave;", "approvazione"]},
             			 			 
			   {ques: "Qual &egrave; l'obiettivo dell'intervista conoscitiva?", ans: "Ottenere la visione e la conoscenza globale dell'area di progetto.", 
             ansSel : ["Comunicare i tempi di realizzazione.", 
             "Chiedere quale metodologia utilizzare.", "Conoscere le persone che opereranno nel progetto."]},
             
              {ques: "Qual &egrave; il significato del termine metadati?", ans: "La descrizione dei dati.", 
             ansSel : ["L'elenco delle funzioni di progetto.", 
             "Il piano di migrazione.", "Gli archivi elettronici."]},
             
              {ques: "Quali sono gli aspetti fondamentali trattati nella fase di analisi?", ans: "dati, funzioni, flusso dei dati", 
             ansSel : ["obiettivi, strumenti, tecniche", 
             "intervista, modello, metodologia", "dati, archivi, programmi"]},
			 
			  {ques: "Qual &egrave; il termine pi&ugrave; appropriato da associare a <i>controllo</i>?", ans: "riservatezza", 
             ansSel : ["stampe", 
             "disaster recovery", "procedure"]},
			 
              {ques: "Qual &egrave; il termine pi&ugrave; appropriato da associare a <i> ripristino sistema</i>?", ans: "disaster recovery", 
             ansSel : ["stampe", 
             "riservatezza", "procedure"]},
			 
              {ques: "Qual &egrave; il termine pi&ugrave; appropriato da associare a <i> ergonomia</i>?", ans: "interfacce utente", 
             ansSel : ["stampe", 
             "disaster recovery", "procedure"]},
             
              {ques: "Qual &egrave; il termine pi&ugrave; appropriato da associare a <i> report</i>?", ans: "stampe", 
             ansSel : ["riservatezza", 
             "disaster recovery", "procedure"]},
             
              {ques: "Qual &egrave; il termine pi&ugrave; appropriato da associare a <i>  moduli software</i>?", ans: "procedure", 
             ansSel : ["riservatezza", 
             "disaster recovery", "stampe"]},
			 
			 {ques: "Qual &egrave; il prodotto della fase di realizzazione?", ans: "I moduli software e gli archivi utilizzati dai programmi.", 
             ansSel : ["Il piano di migrazione e il piano di rilascio.", 
             "Il funzionigramma e il flusso dei dati.", "Le specifiche di installazione."]},
			 
             {
                 ques: "Quali ambienti vanno tenuti separati nel progetto software?", ans: "Sviluppo, Test, Produzione", 
                 ansSel: ["Progettazione, Test, Migrazione", 
                     "Analisi, Realizzazione, Test", "Sviluppo, Validazione, Formazione"]},
			 
			  {ques: "Come si chiama l'ultima fase del processo di sviluppo del software?", ans: "esercizio", 
             ansSel : ["transizione", 
             "migrazione", "installazione"]},
			 
			
			 
           
       ],
	
   
   tf:[
  
 { ques: "La metodologia a cascata, a spirale o l'approccio prototipale sono le diverse modalit&agrave; per lo sviluppo di progetti informatici", ans: true}, 
 
 { ques: "La metodologia &egrave; suddivisa in fasi", ans: true},
 
 { ques: "I controlli descrivono dettagliatamente che cosa deve essere fatto", ans: false},
 
 { ques: "Nella metodologia non serve indicare il tempo previsto per lo svolgimento di ogni attivit&agrave;", ans: false},
  
  { ques: "In un funzionigramma la funzione radice contiene il titolo generale del progetto", ans: true},

 { ques: "Le funzioni che vengono scomposte in sottofunzioni sono dette funzioni madre", ans: true},

 { ques: "Le funzioni foglie sono le funzioni che non presentano diramazioni", ans: true},

 { ques: "I termini 'funzioni foglia' e 'funzioni figlia' indicano il medesimo tipo di funzione", ans: false},

 { ques: "La radice dell'albero gerarchico non &egrave; una funzione madre", ans: false},

 { ques: "La descrizione di una funzione inizia con un verbo transitivo", ans: true},

 { ques: "Il numero delle funzioni figlie di una medesima funzione madre va da due a sei", ans: true},

 { ques: "La somma delle funzioni figlie &egrave; pari alla funzione madre", ans: true},

 { ques: "Il funzionigramma indica l'ordine di esecuzione delle singole funzioni", ans: false},

 { ques: "Le funzioni descrivono l'attivit&agrave; di un sistema di elaborazione dati", ans: false},

 { ques: "Il salvataggio e il ripristino del sistema sono specifiche prodotte nella fase di transizione", ans: false},

 { ques: "La definizione del piano di formazione determina la struttura degli archivi", ans: false},

 { ques: "La migrazione definisce le specifiche per generare i dati di partenza del nuovo progetto", ans: true},

 { ques: "L'installazione &egrave; l'attivit&agrave; nella quale si scrive il codice software", ans: false},

        ],



        };

	var options = {
			title: "PRO.SIA Informatica e processi aziendali - Classe 4<br />1. Fasi di sviluppo di un progetto software",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
            intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA4.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctr+, Ctr-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});