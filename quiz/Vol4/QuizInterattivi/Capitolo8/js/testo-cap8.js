$( function($){

   var quizMulti = {
 
       multiList:[
         {ques: "Quale dei seguenti nomi non &egrave; corretto per identificare le variabili in PHP?", ans: "$dom*", 
             ansSel : ["$prezzo", 
     "$risp2", "$tot_iva"]},
     
          {ques: "Come si chiamano gli array il cui indice &egrave; rappresentato da una stringa?", ans: "Array associativi", 
             ansSel : ["Array numerici", 
     "Array di stringhe", "Array indicizzati"]},
     
          {ques: "Quale di queste variabili individua l'indirizzo IP da cui proviene la richiesta di esecuzione dello script PHP?", ans: "$_SERVER['REMOTE_ADDR']", 
             ansSel : ["$_GET['REMOTE_ADDR']", 
     "$_POST['REMOTE_ADDR']", "$_SERVER['IP_ADDR']"]},
     
          {ques: "Qual &egrave; la funzione PHP che serve per controllare se a una variabile &egrave; stato assegnato un valore?", ans: "isset", 
             ansSel : ["rand", 
     "var_dump", "count"]},
     
          {ques: "Qual &egrave; il valore di ritorno del metodo fetch_assoc?", ans: "Un array associativo in cui ogni elemento corrisponde a un campo del record.", 
             ansSel : ["Un array associativo in cui ogni elemento corrisponde a una riga della tabella.", 
     "Un array numerico in cui ogni elemento corrisponde a una riga della tabella.", "Un array numerico in cui ogni elemento corrisponde a un campo del record."]},
     
          {ques: "Quale propriet&agrave; restituisce un numero intero corrispondente al numero di righe coinvolte in un'operazione di aggiornamento o di eliminazione?", ans: "affected_rows", 
             ansSel : ["fetch_array", 
     "num_rows", "mysql_num_rows"]},
     
    
     
           ],
	
   
   tf:[
  
 { ques: "Una stringa &egrave; costruita racchiudendo il testo tra doppi apici", ans: true}, 
 
 { ques: "Una stringa &egrave; costruita racchiudendo il testo tra parentesi", ans: false},
 
 { ques: "Una stringa &egrave; costruita racchiudendo il testo tra singoli apici", ans: true},
 
 { ques: "Per concatenare le stringhe si usa l'operatore +", ans: false},

 
        ],


        fill:[
            { ques: "La classe che rappresenta la connessione con il server MySQL &egrave; ...................", ans: "mysqli"},
				
            { ques: "Il metodo per chiudere una connessione con il server MySQL &egrave; ...................", ans: "close"},
				
            { ques: "Il metodo per rilasciare la memoria associata al result set di una query &egrave; ...................", ans: "free"},
				
            { ques: "Il metodo per inviare comandi SQL al server MySQL &egrave; ...................", ans: "query"},

 				
        ] 


        };

	var options = {
			title: "PRO.SIA Informatica e processi aziendali - Classe 4<br />8. Dati in rete con pagine PHP",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
            intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA4.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctr+, Ctr-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});