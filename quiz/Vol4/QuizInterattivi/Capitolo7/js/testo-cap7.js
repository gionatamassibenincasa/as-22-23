$( function($){

   var quizMulti = {
 
       multiList:[
         {ques: "Quale carattere indica il tag di chiusura?", ans: "Barra", 
             ansSel : ["Punto e virgola", "Punto interrogativo", "Punto esclamativo"]},
	 
         {ques: "Quale delle seguenti frasi esprime meglio la definizione di <i>parser</i>?", ans: "Un elaboratore di testi che possiedono una struttura sintattica predefinita.", 
             ansSel : ["Un linguaggio per preparare documenti strutturati.", 
     "Un linguaggio per preparare pagine Web.", "Un programma per scrivere documenti XML in modo corretto."]},
	 	 
         {ques: "Come si chiama il linguaggio per la trasformazione dei documenti XML?", ans: "Xsl", 
             ansSel : ["Xls", "Xms", "Xmlns"]}, 
	 
         {ques: "Qual &egrave; la funzionalit&agrave; svolta del tag del linguaggio XSL &lt;xsl:template&gt; ?", ans: "associare un template a un elemento XML", 
             ansSel : ["selezionare con una ripetizione ogni elemento di uno o piu' nodi XML", 
     "estrarre un valore di un elemento XML"]},
	 
         {ques: "Qual &egrave; la funzionalit&agrave; svolta del tag del linguaggio XSL &lt;xsl:value&ndash;of&gt; ?", ans: "estrarre un valore di un elemento XML", 
             ansSel : ["selezionare con una ripetizione ogni elemento di uno o piu' nodi XML", 
     "associare un template a un elemento XML"]},
	 
         {ques: "Qual &egrave; la funzionalit&agrave; svolta del tag del linguaggio XSL &lt;xsl:for&ndash;each&gt; ?", ans: "selezionare con una ripetizione ogni elemento di uno o piu' nodi XML", 
             ansSel : ["selezionare con una ripetizione ogni elemento di uno o piu' nodi XML", 
     "estrarre un valore di un elemento XML"]},
	 
	       
         
     
    
     
           ],
	
  
   tf:[
  
 
 {ques: "Il frammento di codice XML: <br><br> &lt;persona&gt;&lt;cognome&gt;Rossi <br><br> &egrave; formalmente corretto", ans: false}, 
 
 { ques: "Il frammento di codice XML: <br><br> &lt;persona&gt;Rossi&lt;cognome&gt; <br><br> &egrave; formalmente corretto", ans: false},
 
 { ques: "Il frammento di codice XML: <br><br> &lt;persona&gt;&lt;cognome&gt;Rossi&lt;/cognome&gt;&lt;/persona&gt; <br><br> &egrave; formalmente corretto", ans: true},
 
 {ques: "&lt;css type='text/css' href='siti.css' ?&gt;&lt;/css&gt; <br><br> &egrave; la sintassi corretta per collegare il file CSS al documento XML", ans: false}, 
 
 {ques: "&lt;?xml&ndash;stylesheet type='text/css' href='siti.css' ?&gt; <br><br> &egrave; la sintassi corretta per collegare il file CSS al documento XML", ans: true},
 
 {ques: "&lt;css&gt;href='siti.css' &lt;/css&gt; <br><br> &egrave; la sintassi corretta per collegare il file CSS al documento XML", ans: false},
 


 
        ],


        fill:[
            { ques: "Un documento XML si dice valido se &egrave; anche conforme a un XML .....", ans: "schema"},
				
            { ques: "Un documento XML si dice well-formed se &egrave; conforme alla sintassi .....", ans: "xml"},
				
            { ques: "Un ..... moderno contiene le funzionalit&agrave; di parser.", ans: "browser"},
				
            { ques: "Uno schema XML contiene il riferimento a un .......", ans: "namespace"},

 				
        ] ,

        };

	var options = {
			title: "PRO.SIA Informatica e processi aziendali - Classe 4<br />7. Linguaggio XML",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
            intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA4.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctr+, Ctr-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});