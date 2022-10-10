$( function($){

   var quizMulti = {
 
       multiList:[
 		  {ques: "Quale delle seguenti frasi descrive il significato di <i>data mining</i>?", ans: "Acquisizione di conoscenza estratta dai dati aziendali.", 
             ansSel : ["Gestione delle risorse necessarie nella fornitura di un prodotto o di un servizio.", 
             "Gestione delle interazioni con clienti attivi o potenziali clienti.", "Un'interrogazione a una base di dati per ottenere informazioni."]},
             
           	  {ques: "Quale strumento del foglio di calcolo consenti di incrociare i dati e di evidenziare eventuali dipendenze tra i dati?", ans: "Tabella pivot", 
             ansSel : ["Gestione scenari", 
             "Subtotali", "Tabella a due variabili"]},
                   
   {ques: "Quali problemi vengono risolti con lo strumento <i>Risolutore</i>?", ans: "Problemi di Ottimizzazione.", 
             ansSel : ["Problemi di Analisi Statistica.", 
             "Problemi di Analisi di Grafici.", "Problemi di qualunque tipo."]},
             
           	  {ques: "In quale scheda si trova il comando che attiva il <i>Risolutore</i>? ", ans: "Dati", 
             ansSel : ["Inserisci", 
             "Sviluppo", "Formule"]},
                         
      	  {ques: "Quale delle seguenti frasi &egrave; corretta? ", ans: "In un problema di ottimizzazione e' richiesto il valore massimo oppure minimo oppure uguale a un dato specifico. ", 
             ansSel : ["In un problema di ottimizzazione e' richiesto sempre il valore massimo", 
             "In un problema di ottimizzazione e' richiesto il valore minimo.", "In un problema di ottimizzazione e' richiesto il valore massimo o il valore minimo."]},
             
           	  {ques: "Quale dei seguenti parametri non fa parte del <i>Risolutore</i>?", ans: "Casella dei Dati ", 
             ansSel : ["Imposta Obiettivo", 
             "Celle variabili", "Casella dei Vincoli"]},
                   
   {ques: "A che cosa serve lo strumento <i>Ricerca obiettivo</i>?", ans: "Trovare il risultato desiderato modificando un valore di input.", 
             ansSel : ["Evidenziare le dipendenze tra i dati.", 
             "Calcolare il punto di pareggio.", "Fornire un indicatore che controlla l'andamento di un processo aziendale."]},
             
           	  {ques: "Come si chiama la formula di calcolo creata per l'utilizzo in una tabella/grafico pivot con i dati di <i>Power Pivot</i>?", ans: "Misura", 
             ansSel : ["Formula DAX", 
             "Scenario", "Break even point"]},       
             
             	  {ques: "Che cosa indica il termine <i>KPI</i>?", ans: "Indicatore chiave di prestazione.", 
             ansSel : ["Indice di raggruppamento dei dati.", 
             "Formula di calcolo su un campo chiave.", "Soluzione del Risolutore."]},
                   
              
       ],
	
  
   tf:[
  
 { ques: "I Big Data sono data set della dimensione di diversi Gigabytes", ans: false}, 
 
 { ques: "I Big Data possono essere considerati un'evoluzione della Business Intelligence", ans: true}, 
 
  { ques: "I Big Data sono caratterizzati dalla presenza di dati strutturati e non strutturati quali immagini e suoni", ans: true}, 
 
 { ques: "Con 4V si fa riferimento ai termini Volume, Velocit&agrave;, Variet&agrave;, Valore", ans: false},
 
  { ques: "I settori di applicazione della tecnologia dei big data sono limitati all'industria e al commercio", ans: false}, 
 


        ],


        };

	var options = {
			title: "PRO.SIA - Informatica e processi aziendali <br />7. Analisi dei dati aziendali e big data",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
			intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA5.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctr+, Ctr-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});