$( function($){

   var quizMulti = {
 
       multiList:[
         {ques: "Quale dei seguenti comandi Select &egrave; corretto per ottenere l'elenco con cognome e nome delle persone della tabella Anagrafica che abitano nelle citt&agrave; aventi come iniziale del nome la lettera M?", ans: "Select Cognome, Nome From Anagrafica Where Citta Like 'M%';", 
             ansSel : ["Select Cognome, Nome From Anagrafica Where Citta Like '%M';", 
     "Select Cognome, Nome From Anagrafica Where Citta = 'M%';", "Select Cognome, Nome From Anagrafica Where Citta Like 'M*';"]},
     
      {ques: "Quale dei seguenti nomi di variabile utente in MySQL &egrave; corretto?", ans: "@totale", 
             ansSel : ["@@totale", 
     "*totale", "?totale"]},
     
      {ques: "Quale comando si usa per annullare tutte le modifiche che una transazione ha apportato al database?", ans: "Rollback", 
             ansSel : ["Rollback to savepoint", 
     "End transaction", "Undo transaction"]},
     
      {ques: "Una transazione T1 esegue un comando Update che modifica una riga di una tabella e subito dopo una transazione concorrente T2 esegue un comando Select che cerca di leggere il record. Quale delle seguenti affermazioni &egrave; corretta?", ans: "T2 legge il record ma con i valori precedenti gli aggiornamenti eseguiti da T1.", 
             ansSel : ["T2 legge il record con i valori aggiornati da T1.", 
     "T2 viene bloccata sino al termine della transazione T1.", "Il gestore delle transazioni abortisce immediatamente T2."]},
  
     {ques: "Quale delle seguenti affermazioni, riferite al comando Select ... For Update usato da una transazione T1, &egrave; corretta?", ans: "Impedisce ad altre transazioni di accedere in lettura e scrittura ai record letti da T1.", 
             ansSel : ["Permette ad altre transazioni di leggere, ma impedisce di modificare, i record letti da T1.", 
     "Serve a T1 per leggere e contemporaneamente modificare certi record.", "Si usa per permettere ad altre transazioni di modificare i record letti da T1."]},
  
     {
         ques: "La procedura <i>Esegui</i> con parametri P1 e P2 è creata con il comando: <br /> <pre> CREATE Procedure Esegui (P1 INT, OUT P2 VARCHAR(30)) . . ;</pre>Quale dei seguenti comandi CALL è quello corretto per eseguirla?",
         ans: "CALL Esegui (5, @par);", 
         ansSel: ["CALL Esegui (5, 3);", 
             "CALL Esegui (“5”, @par);", "CALL Esegui (5, “valore del parametro 2”);"]},
     {
         ques: "Quale di queste affermazioni, riferite ai <i>trigger</i>, è vera?", ans: "Un trigger è associato a una tabella.",
         ansSel: ["Un trigger non può contenere comandi SQL.",
             "Un trigger è attivato da un comando CALL.", "Un trigger è associato a un database."]
     },

           ],
	
   
   tf:[
  
 { ques: "MySQL &egrave; un sistema per la gestione di basi di dati relazionali", ans: true}, 
 
 { ques: "Non &egrave; possibile interagire con MySQL utilizzando il linguaggio SQL", ans: false},
 
 { ques: "Si pu&ograve; interagire con MySQL solo dalla linea comandi", ans: false},
 
 { ques: "La connessione al server MySQL &egrave; fatta specificando username e password", ans: true},

 { ques: "L'ordine corretto dei comandi per creare un database Db1 e inserire in esso una nuova tabella Tab1, di cui poi si vuole visualizzare la struttura &egrave;: Create Database Db1, UseDb1, Create Table Tab1, Describe Tab1", ans: true},

 { ques: "L'ordine corretto dei comandi per creare un database Db1 e inserire in esso una nuova tabella Tab1, di cui poi si vuole visualizzare la struttura &egrave;: Create Database Db1, Describe Tab1, UseDb1, Create Table Tab1", ans: false},

 { ques: "Una transazione inizia con il commando Savepoint", ans: false},

 { ques: "Una transazione ha caratteristiche di atomicit&agrave;", ans: true},

 { ques: "Il commando Commit si usa per confermare le modifiche apportate al database", ans: true},

 { ques: "In una transazione MySQL con livello di isolamento di default non ci possono essere perdita di aggiornamento e letture sporche", ans: true},

 { ques: "La propriet&agrave; dell'isolamento riguarda l'esecuzione di una transazione in un database installato su un server isolato da qualsiasi rete", ans: false},

 
        ],


        };

	var options = {
			title: "PRO.SIA Informatica e processsi aziendali - Classe 4<br />6. MySQL",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
            intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA4.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctr+, Ctr-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});