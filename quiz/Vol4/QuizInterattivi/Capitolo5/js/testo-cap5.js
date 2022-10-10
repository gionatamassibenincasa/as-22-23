$( function($){

   var quizMulti = {
 
       multiList:[
         {ques: "Qual &egrave; il tipo di linguaggio per il comando INSERT?", ans: "DML", 
             ansSel : ["DDL", 
     "QL (Query Language)"]},
     
         {ques: "Qual &egrave; il tipo di linguaggio per il comando UPDATE?", ans: "DML", 
             ansSel : ["DDL", 
     "QL (Query Language)"]},
     
         {ques: "Qual &egrave; il tipo di linguaggio per il comando DELETE?", ans: "DML", 
             ansSel : ["DDL", 
     "QL (Query Language)"]},
     
         {ques: "Qual &egrave; il tipo di linguaggio per il comando CREATE TABLE?", ans: "DDL", 
             ansSel : ["DML", 
     "QL (Query Language)"]},
     
       {ques: "Qual &egrave; il tipo di linguaggio per il comando ALTER TABLE?", ans: "DDL", 
             ansSel : ["DML", 
     "QL (Query Language)"]},
     
              {ques: "Quale delle seguenti frasi SQL estrae i valori di A1 nelle righe di Tabella con A2 = 5?", ans: "Select A1 From Tabella Where A2 = 5", 
             ansSel : ["Select A1, A2 = 5 From Tabella", 
     "Select A2 = 5 From Tabella.A1", "Select Tabella.A1 From Tabella.A2 = 5"]},
     
              {ques: "Quale delle seguenti frasi SQL estrae le righe di Tabella prive di valori in A2?", ans: "Select * From Tabella Where A2 Is Null", 
             ansSel : ["Select ALL From Tabella Where A1 = ' '", 
     "Select Tabella.* From Tabella Where A1 = ' '", "Select A1 From Tabella With A2 Null"]},
     
              {ques: "Quale delle seguenti frasi SQL rappresenta meglio una proiezione?", ans: "Select A1, A2 From Tabella1", 
             ansSel : ["Select A1, A2 From Tabella1 Where K1 &gt; 10", 
     "Select * From Tabella1, Tabella2 Where K1 = K2", "Select * From Tabella1 Where A1 = 'xyz'"]},
     
              {ques: "Quale delle seguenti frasi SQL contiene una selezione?", ans: "Select * From Tabella1 Where A1 = 'xyz'", 
             ansSel : ["Select * From Tabella1", 
     "Select * From Tabella1, Tabella2 Where K1 = K2", "Select A1 = A2 From Tabella1"]},
     
              {ques: "Quale delle seguenti frasi SQL rappresenta meglio una congiunzione?", ans: "Select * From Tabella1 Inner Join Tabella2 On K1 = K2", 
             ansSel : ["Select A1, A2 From Tabella1", 
     "Select A1,A2,K1 From Tabella1 Inner Join Tabella2 On K1 = K2 Where  A1 ='xyz'", "Select * From Tabella2 Where A1 = 'xyz'"]},
     
              {ques: "Quali delle seguenti frasi SQL elenca il totale delle fatture suddivise per cliente?", ans: "Select Cliente, SUM (Importo) From TabellaFatture Group By Cliente;", 
             ansSel : ["Select Cliente, SUM(Importo) From TabellaFatture Group By Importo;", 
     "Select Cliente, SUM (Importo) From TabellaFatture Order By Cliente;", "Select ORDER (Cliente,Importo) From TabellaFatture;"]},
     
       {ques: "Quale delle seguenti frasi SQL consente di ottenere il numero degli studenti che provengono da una citta' prefissata?", ans: "Select COUNT(*) From Studenti Where Citta' = [Citta' prefissata];", 
             ansSel : ["Select COUNT(*) From Studenti Group By [Citta' prefissata];", 
     "Select COUNT (*) From Studenti Group By Citta' Where Citta' = [Citta' prefissata];", "Select COUNT(*) From Studenti Having Citta' = [Citta' prefissata];"]},
     
       {ques: "Qual &egrave; la funzione svolta nelle condizioni di ricerca dal predicato BETWEEN?", ans: "Controlla se un valore e' compreso in un intervallo di valori.", 
             ansSel : ["Controlla se un valore appartiene a un insieme specificato di valori.", 
     "Confronta il valore in una colonna con il valore nullo.", "Confronta il valore di un attributo con un modello di stringa."]},
     
        {ques: "Qual &egrave; la funzione svolta nelle condizioni di ricerca dal predicato IN?", ans: "Controlla se un valore appartiene a un insieme specificato di valori.", 
             ansSel : ["Controlla se un valore e' compreso in un intervallo di valori.", 
     "Confronta il valore in una colonna con il valore nullo.", "Confronta il valore di un attributo con un modello di stringa."]},
     
        {ques: "Qual &egrave; la funzione svolta nelle condizioni di ricerca dal predicato LIKE?", ans: "Confronta il valore di un attributo con un modello di stringa.", 
             ansSel : ["Controlla se un valore appartiene a un insieme specificato di valori.", 
     "Confronta il valore in una colonna con il valore nullo.", "Controlla se un valore e' compreso in un intervallo di valori."]},
     
        {ques: "Qual &egrave; la funzione svolta nelle condizioni di ricerca dal predicato IS NULL?", ans: "Confronta il valore in una colonna con il valore nullo.", 
             ansSel : ["Controlla se un valore appartiene a un insieme specificato di valori.", 
     "Controlla se un valore e' compreso in un intervallo di valori.", "Controlla se un valore e' compreso in un intervallo di valori."]},
     
       {ques: "Quale delle seguenti frasi SQL consente di ottenere il numero della fattura di importo massimo?", ans: "Select NumFattura From Fatture Where Importo = (Select MAX(Importo) From Fatture);", 
             ansSel : ["Select NumFattura, MAX(Importo) From Fatture;", 
     "Select NumFattura From Fatture Where Importo = MAX(Importo);", "Select NumFattura From Fatture Having Importo = MAX(Importo);"]},
   
        {ques: "Quale delle seguenti frasi SQL consente di ottenere il nome delle citt&agrave; da cui provengono 10 studenti?", ans: "Select Citta From Studenti Group By Citta Having COUNT(*) = 10;", 
             ansSel : ["Select Studenti From Citta Group By Citta Having COUNT(*) = 10;", 
     "Select Studenti From Citta Group By Citta Where COUNT(*) = 10;", "Select Citta From Studenti Group By Citta Where COUNT(*) = 10;"]},
      
        {ques: "Che cosa si ottiene dal seguente comando Select? <br />Select NumFattura From Fatture Order By Importo;", ans: "Elenco dei numeri di fattura ordinato per valori crescenti dell'importo.",
            ansSel: ["Il numero della fattura di importo massimo.",
                "Elenco dei numeri di fattura ordinato per valori decrescenti dell'importo.", "L'importo della fattura avente il numero più alto."]
        },
     
       ],
	
   
   tf:[
  
 { ques: "Il left join si pu&ograve; realizzare in SQL, ma non nell'SQL di Access", ans: false}, 
 
 { ques: "Il left join &egrave; una congiunzione di scarsa utilit&agrave;", ans: false},
 
 { ques: "Nelle interrogazioni che riguardano un'entit&agrave; sulla quale &egrave; stata stabilita un'associazione ricorsiva pu&ograve; essere necessario il self join", ans: true},
 
 { ques: "Un self join tra tabelle si realizza con il comando: Self Join", ans: false},

 { ques: "Select SUM (Num1 * Num2) AS 'Totale' From Tabella;  <br/>&egrave; sintatticamente corretta", ans: true}, 
 
 { ques: "Select Tabella Where AVG(Importo) > 100; <br />&egrave; sintatticamente corretta", ans: false},
 
 { ques: "Select Count (Num1) AS Conteggio From Tabella Where Nome = 'ABCD'; <br />&egrave; sintatticamente corretta", ans: true},
 
 { ques: "Select Nome, Num1 From Tabella Group By Nome; <br />&egrave; sintatticamente corretta", ans: false},

{ ques: "Il comando GRANT crea una vista parziale sulle tabelle del database", ans: false}, 
 
 { ques: "L'annullamento dei permessi agli utenti per l'accesso alle tabelle viene effettuato con il comando REVOKE", ans: true},
 
 { ques: "La vista consente di decidere le modalit&agrave; con le quali gli utenti possono vedere le tabelle del database", ans: true},
 
 { ques: "Il comando GRANT UPDATE concede permessi di variazione sui dati", ans: true},

        ],


        fill:[
                { ques: "Per eliminare una tabella dal database si usa il comando .........", ans: "Drop Table"},
				
				{ ques: "Per modificare i valori nelle righe di una tabella si usa il comando .........", ans: "Update"},
				
				{ ques: "Per inserire nuove tabelle nel database si usa il comando.........", ans: "Create Table"},
				
 				{ ques: "Per aggiungere una colonna a una tabella si usa il comando .........", ans: "Alter Table"},


 				
        ] 


        };

	var options = {
			title: "PRO.SIA Informatica e processi aziendali - Classe 4<br />5. Il linguaggio SQL",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
            intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA4.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctr+, Ctr-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});