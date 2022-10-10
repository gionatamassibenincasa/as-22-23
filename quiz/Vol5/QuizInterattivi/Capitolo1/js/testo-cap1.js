$( function($){

   var quizMulti = {
 
       multiList:[
 			{ques: "Quale delle seguenti frasi corrisponde al significato di <i>time sharing</i>?", ans: "Suddivisione del tempo di utilizzo di una risorsa", 
             ansSel : ["Suddivisione di una risorsa.", 
             "Suddivisione del sistema operativo in moduli.", "Suddivisione di un programma."]},
  
 		{ques: "Quale delle seguenti frasi corrisponde al significato di <i>deadlock</i>?", ans: "Una situazione nella quale due o piu' processi sono in attesa di una condizione che non si verifichera' mai.", 
             ansSel : ["Una situazione nella quale uno o piu' processi non riescono ad accedere a una risorsa e quindi non possono eseguire il proprio lavoro.", 
             "Una situazione nella quale un processo &egrave; stato bloccato da un semaforo.", "Una situazione nella quale piu' processi possono lavorare in modo del tutto asincrono."]},
  
			{ques: "La gestione a pagine &egrave; un concetto che si pu&ograve; applicare:", ans: "all'impiego della memoria centrale", 
             ansSel : ["all'impiego dello spazio sul disco", 
             "alla gestione delle periferiche", "all'organizzazione dei file"]},
  
 	        		{ques: "In quale file sono contenute le informazioni riguardanti gli utenti del sistema?", ans: "/etc/passwd", 
             ansSel : ["/etc/motd", 
             "/etc/users", "/etc/profile"]},
            
             		{ques: "Quale tra i seguenti termini indica la modalit&agrave; operativa dell'amministratore del sistema?", ans: "superuser", 
             ansSel : ["administrator", 
             "admin", "userroot"]},
  
 		{ques: "Che cosa significa eseguire un comando in <i>background</i>?", ans: "il comando viene lanciato in esecuzione e all'utente viene subito riproposto il prompt della shell, in modo da richiedere un altro comando mentre il primo viene eseguito", 
             ansSel : ["il comando viene lanciato in esecuzione solo dopo che &egrave; stata completata l'esecuzione del comando precedente", 
             "il comando viene lanciato in esecuzione e l'utente deve attivare un'altra shell per eseguire i comandi successivi", "la shell cede il controllo al processo di esecuzione del comando e lo riprende al termine di questa."]},
  
			{ques: "Con quale comando &egrave; possibile ottenere il calendario di un mese e di un anno prefissati?", ans: "cal", 
             ansSel : ["month", 
             "year", "date"]},
  
 		{ques: "Quale dei seguenti comandi consente di cercare il file di nome arch.dat nella directory corrente e a partire da essa nelle sue sottodirectory?", ans: "find . -name arch.dat", 
                ansSel : ["find arch.dat . -name", 
             "find . arch.dat", "find -name arch.dat"]},
             
             	{ques: "Quale dei seguenti comandi stabilisce il solo permesso di lettura sul file prova per tutte e tre le categorie di utenti, usando la notazione ottale?", ans: "chmod 444 prova", 
                ansSel : ["chmod 400 prova", 
             "chmod 700 prova", "chmod 777 prova"]},
             
             	{ques: "Quale dei seguenti comandi occorre usare per mandare un messaggio di posta elettronica all'utente <i>user2</i>?", ans: "mail user2", 
                ansSel : ["write user2", 
             "mesg user2", "print user2"]},
             
             	{ques: "Sulle righe di un file si possono effettuare operazioni analoghe alle operazioni relazionali sulle tabelle di un database. Associa all'operazione selezione il corrispondente comando", ans: "grep", 
                ansSel : ["diff", 
             "paste", "cat"]},
             
                     	{ques: "Sulle righe di un file si possono effettuare operazioni analoghe alle operazioni relazionali sulle tabelle di un database. Associa all'operazione proiezione il corrispondente comando", ans: "cut", 
                ansSel : ["diff", 
             "df", "cat"]},
     
                  	{ques: "Sulle righe di un file si possono effettuare operazioni analoghe alle operazioni relazionali sulle tabelle di un database. Associa all'operazione congiunzione il corrispondente comando", ans: "join", 
                ansSel : ["grep", 
             "df", "cat"]},
     
             
             	{ques: "Qual &egrave; il corrispondente significato del comando <i>cp</i> ?", ans: "Copia", 
                ansSel : ["Rinomina", 
             "Visualizza", "Cancella"]},
             
            
             	{ques: "Qual &egrave; il significato del comando <i>mv</i> ?", ans: "Rinomina", 
                ansSel : ["Visualizza", 
             "Lista", "Cancella"]},
 
          
             	{ques: "Qual &egrave; il significato del comando <i>ls</i> ?", ans: "Lista", 
                ansSel : ["Visualizza", 
             "Rinomina", "Cancella"]},
 
          
             	{ques: "Qual &egrave; il significato del comando <i>cd</i> ?", ans: "Cambia directory", 
                ansSel : ["Visualizza", 
             "Lista", "Cancella"]},

            	{ques: "Qual &egrave; il significato del comando <i>rm</i> ?", ans: "Cancella", 
                ansSel : ["Visualizza", 
             "Cambia directory", "Lista"]},

            	{ques: "Qual &egrave; il significato del comando <i>cat</i> ?", ans: "Visualizza", 
                ansSel : ["Cancella", 
             "Cambia directory", "Lista"]},
             
             {ques: "Qual &egrave; il significato del simbolo <i>&gt;</i> ?", ans: "ridirige lo standard output", 
                ansSel : ["ridirige lo standard input", 
             "appende l'output in coda", "ridirige standard output e standard error"]},
             
                   {ques: "Qual &egrave; il significato del simbolo <i>&lt;</i> ?", ans: "ridirige lo standard input", 
                ansSel : ["ridirige lo standard output", 
             "appende l'output in coda", "ridirige standard output e standard error"]},
             
                         {ques: "Qual &egrave; il significato del simbolo <i>&gt;&gt;</i> ?", ans: "appende l'output in coda", 
                ansSel : ["ridirige lo standard input", 
             "ridirige lo standard output", "ridirige standard output e standard error"]},
             
                              {ques: "Qual &egrave; il significato del simbolo <i>&gt;&amp;</i> ?", ans: "ridirige standard output e standard error", 
                ansSel : ["ridirige lo standard input", 
             "ridirige lo standard output", "appende l'output in coda"]},
  
  
  
  
  
       ],
	
  
   tf:[
  
 { ques: "Un sistema operativo non &egrave; in grado di parallelizzare i programmi ", ans: false}, 
 
 { ques: "Un singolo programma pu&ograve; essere suddiviso in pi&ugrave; processi che vengono eseguiti in parallelo ", ans: true}, 
 
  { ques: "Un thread &egrave; un programma di grandi dimensioni che deve essere eseguito in modo sequenziale ", ans: false}, 
 
 { ques: "Ci possono essere pi&ugrave; thread attivi all'interno dello stesso programma ", ans: true}, 
 
   { ques: "Il <i>file system</i> comprime gli archivi per occupare meno spazio su disco ", ans: false}, 
 
 { ques: "Il <i>file system</i> contiene informazioni sulle dimensioni degli archivi  ", ans: true}, 

  { ques: "Il <i>file system</i> gestisce l'organizzazione fisica dei file su disco ", ans: true}, 
 
 { ques: "Il <i>file system</i> consente di riferirsi in modo logico alle operazioni di I/O  ", ans: true}, 

  { ques: "Il <i>file system</i> virtualizza le periferiche", ans: false}, 
 
 { ques: "I file speciali risiedono nella directory <i>/dev</i> ", ans: true}, 

 { ques: "I file speciali a blocchi sono caratterizzati dalla lettera <i>s</i> ", ans: false}, 
 
 { ques: "I file speciali a caratteri sono caratterizzati dalla lettera <i>b</i> ", ans: false}, 
 
 { ques: "I file speciali caratterizzati dalla lettera <i>d</i> sono device ", ans: false}, 

 



        ],
/*

        fill:[
                { ques: "p and q &egrave; vera solo nel caso in cui ..............", ans: "entrambe vere"},
				
				{ ques: "p or q &egrave; falsa solo nel caso in cui ..............", ans: "entrambe false"},
				
				{ ques: "p or q &egrave; vera solo nel caso in cui ..............", ans: "almeno una vera"},
				
				{ ques: "p and q &egrave; falsa solo nel caso in cui ..............", ans: "almeno una falsa"},

		
        ], 
*/

        };

	var options = {
			title: "PRO.SIA - Informatica e processi aziendali <br />1. Sistemi operativi e comandi Linux",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
			intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA5.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctr+, Ctr-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});