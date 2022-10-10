$( function($){

   var quizMulti = {
 
       multiList:[
         {ques: "Con quale termine viene indicato il trasferimento di un problema sul sistema di elaborazione?", ans: "Implementazione", 
             ansSel : ["Traduzione", 
             "Traslazione", "Programmazione"]},
			 
			{ques: "Quali sono le attivit&agrave; che in un algoritmo consentono di ottenere i risultati desiderati, mettendo i dati in relazione tra loro?", ans: "Istruzioni", 
             ansSel : ["Controlli", 
             "Azioni", "Trasformazioni"]},
             
             {ques: "Quale tra le seguenti definizioni descrive meglio la Macchina di Turing?", ans: "Una macchina astratta in grado di eseguire un algoritmo.", 
             ansSel : ["Un esempio di computer di piccole dimensioni.", 
             "Un automa in grado di eseguire solo le quattro operazioni aritmetiche.", "Una macchina in grado di scrivere simboli su un nastro."]},
             
             {ques: "Secondo il teorema di Bohm-Jacopini, quale tra le seguenti non &egrave; una struttura di controllo per esprimere un algoritmo?", ans: "interruzione", 
             ansSel : ["sequenza", 
             "alternativa", "ripetizione"]},
             
             {ques: "Quali delle seguenti istruzioni &egrave; un esempio corretto di chiamata ricorsiva della funzione <i>fattoriale</i>?", ans: "fattoriale=x*fattoriale(x-1)", 
             ansSel : ["fattoriale=x*fattoriale", 
             "fattoriale(x-1)=x*fattoriale(x)", "fattoriale(x)=x*(x-1)"]},
             
             {ques: "Con quale strumento si traduce il codice sorgente in codice oggetto?", ans: "compilatore", 
             ansSel : ["editor", 
             "interprete", "linker"]},            
                   	
           
       ],
	
   
   tf:[
  
 { ques: "Un paradigma &egrave; un insieme di idee a cui ci si ispira per risolvere i problemi", ans: true}, 
 
 { ques: "Il paradigma imperativo si basa sull'uso di funzioni e sulla loro composizione", ans: false},
 
  { ques: "Particolari problemi sono risolti pi&ugrave; efficientemente con certi paradigmi", ans: true},

 { ques: "C++ e Java sono linguaggi che usano il paradigma orientato agli oggetti", ans: true},

        ],


        fill:[
                { ques: "Le ...................... descrivono le azioni che deve compiere un esecutore.", ans: "istruzioni"},
				
				{ ques: "Un ..................... &egrave; formato da pi&ugrave; azioni elementari.", ans: "processo"},
				
				{ ques: "Si dice.....................l'ente che esegue le azioni secondo le istruzioni di un algoritmo.", ans: "processore"},
				
				{ ques: "Un ........................ &egrave; un insieme di operazioni da eseguire per ottenere certi risultati.", ans: "algoritmo"},
 
 				{ ques: "Un ........................ &egrave; la rappresentazione grafica di un algoritmo.", ans: "diagramma a blocchi"},

 				{ ques: "Il termine ..................... indica la rappresentazione di un algoritmo tramite un linguaggio naturale.", ans: "pseudocodifica"},

 				{ ques: "Un ..................... &egrave; la rappresentazione di un algoritmo in una forma comprensibile all'elaboratore.", ans: "programma"},

        ] 


        };

	var options = {
			title: "Pro.SIA - Informatica e processi aziendali - Classe 3<br />3. Progettazione degli algoritmi",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
            intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA3.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctr+, Ctr-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});