$( function($){

   var quizMulti = {
 
       multiList:[
               
                           
                      {ques: "Quale tra i seguenti termini indica l’insieme dei programmi di base che permettono il funzionamento del computer?", ans: "Sistema operativo", 
             ansSel : ["Hardware", 
             "Memoria ROM", "Mainframe"]},


                                   {ques: "Quali tra i seguenti NON &egrave; un modulo del sistema operativo?", ans: "Progettazione di programmi", 
             ansSel : ["Gestione dei processi", 
             "Gestione dei file"]},


                                   {ques: "Quali tra i seguenti NON &egrave; un modulo del sistema operativo?", ans: "Programma di fatturazione", 
             ansSel : ["Gestione delle periferiche", 
             "Gestione della memoria centrale"]},

             
                {ques: "Perch&eacute; la struttura di un sistema operativo &egrave; descritta con un modello a strati?", ans: "Ciascun modulo comunica con i livelli sottostanti.", 
             ansSel : ["I livelli non possono comunicare fra loro.", 
             "Tutti i livelli possono comunicare fra loro.", "I moduli consentono all’utente di vedere le reali caratteristiche dell'hardware."]},



                      {ques: "Quale tra i seguenti software &egrave; un sistema operativo?", ans: "Android", 
             ansSel : ["Excel", 
             "Office", "Firefox"]},


                      {ques: "Quale tra i seguenti software &egrave; un sistema operativo?", ans: "Windows", 
             ansSel : ["Word", 
             "Prompt", "Chrome"]},
             
                      {ques: "Quale tra queste definizioni corrisponde al termine <i>multitasking</i>?", ans: "La possibilita' di eseguire piu' applicazioni contemporaneamente.", 
             ansSel : ["Lo spegnimento automatico del monitor dopo un certo tempo di inattivita'.", 
             "L'apertura di un programma di trattamento del testo.", "La possibilita' di usare filmati e suoni in un computer."]},
             
              {ques: "Tenendo presente il tipo di organizzazione di un sistema operativo, indica da quale modulo &egrave; svolta la seguente funzione: 'ottimizzazione dei tempi di accesso a un disco'", ans: "Modulo di gestione delle periferiche", 
             ansSel : ["Nucleo", 
             "Interprete dei comandi", "Modulo di gestione della memoria"]},
             
             {ques: "Tenendo presente il tipo di organizzazione di un sistema operativo, indica da quale modulo &egrave; svolta la seguente funzione: 'gestione dell'organizzazione di un disco'", ans: "File System", 
             ansSel : ["Nucleo", 
             "Interprete dei comandi", "Modulo di gestione della memoria"]},
             
             {ques: "Tenendo presente il tipo di organizzazione di un sistema operativo, indica da quale modulo &egrave; svolta la seguente funzione: 'gestione delle pagine o dei segmenti di memoria'", ans: "Modulo di gestione della memoria", 
             ansSel : ["Nucleo", 
             "Interprete dei comandi", "Modulo di gestione delle periferiche"]},
             
             {ques: "Tenendo presente il tipo di organizzazione di un sistema operativo, indica da quale modulo &egrave; svolta la seguente funzione: 'terminazione dei processi'", ans: "Nucleo", 
             ansSel : ["Modulo di gestione delle periferiche", 
             "Interprete dei comandi", "Modulo di gestione della memoria"]},
             
             {ques: "Tenendo presente il tipo di organizzazione di un sistema operativo, indica da quale modulo &egrave; svolta la seguente funzione: 'assegnazione della CPU ai diversi processi'", ans: "Nucleo", 
             ansSel : ["File System", 
             "Interprete dei comandi", "Modulo di gestione della memoria"]},
             
             {ques: "Tenendo presente il tipo di organizzazione di un sistema operativo, indica da quale modulo &egrave; svolta la seguente funzione: 'istruzioni per la formattazione di un disco'", ans: "Modulo di gestione delle periferiche", 
             ansSel : ["Nucleo", 
             "Interprete dei comandi", "Modulo di gestione della memoria"]},
             
              {ques: "Tenendo presente il tipo di organizzazione di un sistema operativo, indica da quale modulo &egrave; svolta la seguente funzione: 'assegnazione dei diritti di accesso ad un file'", ans: "File System", 
             ansSel : ["Nucleo", 
             "Interprete dei comandi", "Modulo di gestione della memoria"]},
             
              {ques: "Tenendo presente il tipo di organizzazione di un sistema operativo, indica da quale modulo &egrave; svolta la seguente funzione: 'controllo della correttezza sintattica di una linea di comando'", ans: "Interprete dei comandi", 
             ansSel : ["Nucleo", 
             "File System", "Modulo di gestione della memoria"]},
             
               {ques: "Tenendo presente il tipo di organizzazione di un sistema operativo, indica da quale modulo &egrave; svolta la seguente funzione: 'sincronizzazione dei processi'", ans: "Nucleo", 
             ansSel : ["File System", 
             "Interprete dei comandi", "Modulo di gestione della memoria"]},         
             
                                   {ques: "Quale tra questi &egrave; uno dei vantaggi offerti dalla GUI (<i>Graphical User Interface</i>) agli utenti del computer?", ans: "Rendere facile l'uso dello stesso programma da utenti di qualsiasi nazionalità.", 
             ansSel : ["Consentire l'uso di stampanti grafiche a colori.", 
             "Rendere più veloce l'esecuzione dei programmi.", "La possibilita' di usare filmati e suoni in un computer."]},
  
                                   {ques: "Quale tra questi &egrave; uno dei vantaggi offerti dalla GUI (<i>Graphical User Interface</i>) agli utenti del computer?", ans: "Facilitare l’utilizzo delle applicazioni con icone e mouse.", 
             ansSel : ["La possibilit&agrave; di eseguire più applicazioni contemporaneamente.", 
             "Rendere più veloce l'esecuzione dei programmi.", "La possibilit&agrave; di usare filmati e suoni in un computer."]},

                                   {ques: "Il programma con cui è stato creato un file è riconoscibile tramite:", ans: "La sua estensione.", 
             ansSel : ["Il suo nome.", 
             "La sua dimensione in byte.", "La cartella a cui appartiene."]},

                                          
                                         	          
       ],
	
   
   tf:[
  
 { ques: "Con il tasto destro mantenuto premuto si possono trascinare oggetti", ans: false}, 
 
 { ques: "Un doppio clic con il tasto sinistro su un’icona apre un’applicazione", ans: true}, 

 { ques: "Un clic con il tasto destro apre un menu", ans: true}, 

 { ques: "Un clic con il tasto destro su una voce di un menu attiva il comando corrispondente", ans: false}, 

 { ques: "Il passaggio del mouse su un’icona ne attiva le funzioni", ans: false}, 

 

        ],



        };

	var options = {
			title: "Pro.SIA - Informatica e processi aziendali - Classe 3<br />2. Sistemi operativi",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
			intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA3.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctr+, Ctr-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});