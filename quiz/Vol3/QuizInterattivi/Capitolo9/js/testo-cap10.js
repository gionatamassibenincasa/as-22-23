$( function($){

   var quizMulti = {
 
       multiList:[
        {ques: "Quale programma si usa per trasferire i file contenenti le pagine Web dal proprio computer al server Internet dove devono essere pubblicate?", ans: "Un programma di FTP.", 
             ansSel : ["Un programma di posta elettronica.", "Un programma browser.", 
             "Un programma di compressione."]},
	
	   {ques: "Qual &egrave; l'ordine dei tag che definiscono la struttura fondamentale della pagina HTML?", ans: "HTML, HEAD, BODY", 
             ansSel : ["BODY, HEAD, HTML", "HEAD, HTML, BODY", 
             "HTML, BODY, HEAD"]},
	
		     {ques: "Qual &egrave; il corrispondente codice RGB del colore nero?", ans: "000000", 
             ansSel : ["FFFFFF", "0000FF", 
             "FF0000"]},
	
	       {ques: "Qual &egrave; il corrispondente codice RGB del colore rosso?", ans: "FF0000", 
             ansSel : ["FFFFFF", "0000FF", 
             "000000"]},
	
	       {ques: "Qual &egrave; il corrispondente codice RGB del colore bianco?", ans: "FFFFFF", 
             ansSel : ["FF00FF", "0000FF", 
             "000000"]},
	
	      {ques: "Qual &egrave; il corrispondente codice RGB del colore verde?", ans: "00FF00", 
             ansSel : ["FFFFFF", "0000FF", 
             "000000"]},

      {ques: "Qual &egrave; il corrispondente codice RGB del colore blu?", ans: "0000FF", 
             ansSel : ["FFFFFF", "00FF00", 
             "000000"]},

		
	   {ques: "In una pagina Web, qual &egrave; il significato dell'oggetto grafico <i>form</i>?", ans: "modulo", 
             ansSel : ["annulla", "invia", 
             "area di testo"]},
	
	   {ques: "In una pagina Web, qual &egrave; il significato dell'oggetto grafico <i>textarea</i>?", ans: "area di testo", 
             ansSel : ["annulla", "invia", 
             "modulo"]},
	
	 {ques: "In una pagina Web, qual &egrave; il significato dell'oggetto grafico <i>select</i>?", ans: "casella combinata", 
             ansSel : ["annulla", "invia", 
             "modulo"]},
	
	 {ques: "In una pagina Web, qual &egrave; il significato dell'oggetto grafico <i>reset</i>?", ans: "annulla", 
             ansSel : ["casella combinata", "invia", 
             "modulo"]},
	
	 {ques: "In una pagina Web, qual &egrave; il significato dell'oggetto grafico <i>submit</i>?", ans: "invia", 
             ansSel : ["casella combinata", "annulla", 
             "modulo"]},
	
	   {ques: "Perch&egrave; l'uso dei fogli di stile rappresenta un vantaggio?", ans: "Le modifiche possono essere fatte velocemente cambiando poche righe di codice.", 
             ansSel : ["Le pagine Web vengono caricate pi&ugrave; velocemente.", "Il sito pu&ograve; avere pi&ugrave; immagini e pi&ugrave; colori rispetto all'uso del solo HTML.", 
             "I contenuti e lo stile vengono rappresentati usando uno stesso linguaggio."]},
	
		   {ques: "Quale dei seguenti &egrave; un attributo per utilizzare i selettori di un foglio di stile?", ans: "class", 
             ansSel : ["link", "type"]},

	   {ques: "Quale dei seguenti &egrave; un attributo per utilizzare i selettori di un foglio di stile?", ans: "id", 
             ansSel : ["link", "type"]},
	
	  {ques: "Che cosa &egrave; un modulo di feedback?", ans: "Una pagina per raccogliere suggerimenti o commenti dai visitatori di un sito Internet.", 
             ansSel : ["La ricevuta di un pagamento di commercio elettronico.", "La ricevuta dell'avvenuta ricezione di un messaggio di posta elettronica.", 
             "Il modulo per acquistare una connessione a Internet."]},
	
	   {ques: "Chi ha promosso il progetto WAI (Web Accessibility Initiative)?", ans: "Il W3C.", 
             ansSel : ["Un gruppo di Web designer indipendenti.", "Il CERN di Ginevra.", 
             "Il governo degli Stati Uniti."]},
	
	   {ques: "Quale delle seguenti frasi esprime meglio la definizione di accessibilit&agrave;?", ans: "La capacita' dei sistemi informatici di erogare servizi e fornire informazioni anche a persone con disabilita' fisiche.", 
             ansSel : ["La capacita' dei sistemi informatici di interagire con computer aventi sistemi operativi diversi.", "La capacita' dei sistemi informatici di controllare l'accesso degli utenti tramite username e password.", 
             "La capacita' dei sistemi informatici di erogare servizi e fornire informazioni in tempi molto rapidi."]},
	
	   {ques: "Come deve essere un sito Web accessibile secondo le specifiche WCAG?", ans: "percepibile, utilizzabile, comprensibile, robusto", 
             ansSel : ["visibile, navigabile, comprensibile, multilingua", "scalabile, leggibile, orientabile, conforme", 
             "distinguibile, solido, comprensibile, validato"]},
	
	
	
	
	      ],
	
  
   tf:[
  
 { ques: "&lt;/I&gt; significa 'scrivi in corsivo'", ans: false}, 
 
 { ques: "&lt;B&gt; significa 'grassetto'", ans: true}, 

  { ques: "Il codice &lt;I&gt;&lt;B&gt;ciao&lt;/B&gt;&lt;/I&gt; genera un errore", ans: false}, 

 { ques: "Il tag &lt;A&gt; crea un link", ans: true}, 
 
 { ques: "Il tag &lt;LINK&gt; crea un link ipertestuale", ans: false}, 

 { ques: "&Egrave; possibile creare un link a un indirizzo e-mail", ans: true}, 
 
  { ques: "&Egrave; possibile creare un link a un punto specifico di una pagina", ans: true}, 

  { ques: "Un form permette di trasferire dati dall'utente al Web", ans: true}, 

 { ques: "Un form permette di eseguire semplici programmi", ans: false}, 
 
 { ques: "Un form permette di inviare dati da una pagina a un'altra", ans: true}, 

 { ques: "Tutti i siti devono contenere un form", ans: false}, 
 
  { ques: "Tutti i browser supportano il tag &lt;FORM&gt;", ans: true}, 

  { ques: "La seguente porzione di codice HTML: <br> <br /> &lt;HTML&gt;&lt;BODY&gt;ciao&lt;/body&gt;&lt;/html&gt; <br> <br /> &egrave; priva di errori", ans: true}, 

  { ques: "La seguente porzione di codice HTML: <br> <br /> ciao &lt;B&gt;a tutti&lt;/B&gt; &lt;I&gt;voi&lt;/I&gt; <br> <br /> visualizza la scritta 'ciao <b>a tutti</b> <i>voi</i>'", ans: true}, 

  { ques: "La seguente porzione di codice HTML: <br> <br /> &lt;A HREF='pagina.htm'&gt;&lt;IMG SRC='immagine.jpg'&gt;&lt;/A&gt; <br> <br /> consente di impostare un'immagine come link a un'altra pagina", ans: true}, 

  { ques: "La seguente porzione di codice HTML: <br> <br /> &lt;IMG &gt;&lt;A HREF='pagina.htm'&gt;&lt;SRC='immagine.jpg'>&lt;/A&gt; <br> <br /> consente di impostare un'immagine come link a un'altra pagina", ans: false}, 

  { ques: "La seguente porzione di codice HTML: <br> <br /> &lt;A HREF=&lt;IMG SRC=' immagine.jpg'&gt;pagina.htm&lt;/A&gt; <br> <br /> consente di impostare un'immagine come link a un'altra pagina", ans: false}, 

  { ques: "Il seguente tag <br> <br /> &lt;UL>&lt;LI> ... &lt;/LI&gt;&lt;/UL&gt; <br> <br /> produce una lista puntata in html", ans: true}, 

  { ques: "Il seguente tag <br> <br /> &lt;UL>&lt;LO> ... &lt;/LO&gt;&lt;/UL&gt; <br> <br /> produce una lista puntata in html", ans: false}, 

  { ques: "La seguente porzione di codice HTML: <br> <br /> &lt;TABLE&gt;&lt;TR&gt;&lt;TD&gt;A&lt;/TD&gt;&lt;TD&gt;B&lt;/TD&gt;&lt;/TR&gt;&lt;/TABLE> <br> <br /> produce una tabella con le lettere A e B su 1 riga e 2 colonne", ans: true}, 

  { ques: "La seguente porzione di codice HTML: <br> <br /> &lt;TABLE&gt;&lt;TR&gt;&lt;TD&gt;A&lt;/TD&gt;&lt;/TR&gt;&lt;TR&gt;&lt;TD&gt;B&lt;/TD&gt;&lt;/TR&gt;&lt;/TABLE> <br> <br /> produce una tabella con le lettere A e B su 1 riga e 2 colonne", ans: false}, 

  { ques: "Il seguente tag <br> <br /> &lt;STYLE TYPE='text/css'&gt; ...... &lt;/STYLE &gt; <br> <br /> definisce un foglio di stile incorporato", ans: true}, 

  { ques: "Il seguente tag <br> <br /> &lt;STYLE SHEET='text/css'&gt; ...... &lt;/STYLE &gt; <br> <br /> definisce un foglio di stile incorporato", ans: false}, 

      ],


        fill:[
                { ques: "Le classi sono precedute da ...............", ans: "punto"},
				
				{ ques: "Gli id sono preceduti da ...............", ans: "cancelletto"},
				
		
			
        ] 


        };

	var options = {
			title: "Pro.SIA - Informatica e processi aziendali - Classe 3<br />9. Pagine Web e fogli di stile",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
			intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA3.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctrl+, Ctrl-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});