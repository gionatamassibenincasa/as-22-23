$( function($){

   var quizMulti = {
 
       multiList:[
 			{ques: "Quale valore scrive con l'istruzione di output il seguente programma? <br/> <img src='images/Cap10_2a.png' width='280' /><br/>", ans: "1", 
             ansSel : ["2", 
             "5", "6"]},
  
  			{ques: "Quale valore scrive con l'istruzione di output il seguente programma? <br/> <img src='images/Cap10_2b.png' width='280' /><br/>", ans: "6", 
             ansSel : ["2", 
             "3", "7"]},
  
  		{ques: "Quale valore scrive con l'istruzione di output il seguente programma? <br/> <img src='images/Cap10_2c.png' width='280' /><br/>", ans: "10, 25", 
             ansSel : ["20, 40", 
             "33, 67", "7, 11"]},
             
  		{ques: "Qual &egrave; il significato della funzione <i>sqrt</i>?", ans: "radice quadrata", 
             ansSel : ["elevamento a potenza", 
             "esponenziale"]},
   
   	{ques: "Qual &egrave; il significato della funzione <i>pow</i>? ", ans: "elevamento a potenza", 
             ansSel : ["radice quadrata", 
             "esponenziale"]},
   
   	{ques: "Qual &egrave; il significato della funzione <i>exp</i>? ", ans: "esponenziale", 
             ansSel : ["radice quadrata", 
             "elevamento a potenza"]},
       
       	{ques: "Quale delle seguenti frasi corrisponde alla definizione di <i>function overloading</i>?  ", ans: "Due funzioni con lo stesso nome che differiscono tra loro per il numero dei parametri passati o per il loro tipo o per entrambi.", 
             ansSel : ["Due funzioni che differiscono per il nome ma hanno gli stessi parametri.", 
             "Due funzioni con lo stesso nome che differiscono tra loro solamente per il numero dei parametri passati.", "Due funzioni con lo stesso nome che differiscono tra loro solamente per il tipo dei parametri passati."]},
             
  			{ques: "Date le seguenti dichiarazioni <br/> <img src='images/Cap10_8a.png' width='280' /><br/><br/> e le istruzioni <br/> <img src='images/Cap10_8b.png' width='280' /><br/><br/> quante volte viene eseguita la procedura <i>Lavora</i> e quante la procedura <i>Riposa</i>?", ans: "5, 2", 
             ansSel : ["6, 4", 
             "4, 3", "2, 9"]},
     
    {ques: "Date le seguenti dichiarazioni <br/> <code>enum Colori {BIANCO, ROSSO, VERDE, ARANCIONE, VIOLA, GIALLO, BLU, MAGENTA}; <br>Colori a, b, c;</code><br/> Che cosa contengono le variabili a, b, c dopo le seguenti assegnazioni? <br/><code>a = ARANCIONE;<br>b = VIOLA;<br>c = BIANCO;</code><br/>", ans: "3, 4, 0", 
             ansSel : ["6, 4, 7", 
             "4, 3, 8", "2, 9, 0"]},

       
       	{ques: "Che cosa occorre specificare per indicare un elemento di un array?", ans: "Un indice racchiuso tra parentesi quadre.", 
             ansSel : ["Un indice scritto in basso a destra rispetto al nome dell'array.", 
             "Un indice racchiuso tra parentesi graffe.", "Un indice formato da una sola cifra."]},
             
  			{ques: "Quale tra le seguenti dichiarazioni &egrave; corretta per inizializzare un array?", ans: "double valori[3] = {3.5, 0.2, 7.0};", 
             ansSel : ["double valori = {3.5, 0.2, 7.0};", 
             "double valori[2] = {3.5, 0.2, 7.0};", "double valori[3] {3.5, 0.2, 7.0};"]},
       
       	{ques: "Quale tra le seguenti affermazioni, riferite al passaggio di array a una funzione, &egrave; corretta?", ans: "Per effettuare il passaggio per referenza di un array alla funzione, basta indicare il nome dell'array nella chiamata della funzione.", 
             ansSel : ["Per effettuare il passaggio per referenza di un array alla funzione, occorre aggiungere il carattere &amp; al tipo dell'array nell'intestazione della funzione.", 
             "Per effettuare il passaggio per referenza di un array alla funzione, occorre aggiungere il carattere &amp; al nome dell'array nella chiamata alla funzione.", "Per effettuare il passaggio per referenza di un array alla funzione, occorre aggiungere il carattere &amp; alla prima componente dell'array nell'intestazione della funzione."]},
       
           
       ],
	
  
   tf:[
  
 { ques: "I parametri formali sono indicati nella riga di intestazione della funzione", ans: true}, 
 
 { ques: "I parametri formali sono indicati quando viene richiamata la funzione", ans: false}, 

 { ques: "I parametri attuali sono indicati nella riga di intestazione della funzione", ans: false}, 

 { ques: "I parametri attuali sono indicati quando viene richiamata la funzione", ans: true}, 

 
 { ques: "Le variabili che vengono dichiarate all'inizio di un programma, e fuori dal <i>main()</i>, sono dette variabili locali", ans: false}, 
 
 { ques: "In qualsiasi punto del programma si pu&ograve; utilizzare una variabile globale", ans: true}, 

 { ques: "Una variabile locale a una funzione pu&ograve;  essere utilizzata dalla funzione <i>main()</i>", ans: false}, 

 { ques: "In un programma ben strutturato &egrave; conveniente usare molte variabili globali", ans: false}, 


 { ques: "<pre> #include &lt;cmath&gt; </pre> &egrave; la riga di codice che occorre introdurre nel programma per utilizzare la funzione matematica predefinita <i>pow</i> per il calcolo della potenza", ans: true}, 
 
 { ques: "<pre> #include cmath </pre> &egrave; la riga di codice che occorre introdurre nel programma per utilizzare la funzione matematica predefinita <i>pow</i> per il calcolo della potenza", ans: false}, 

 { ques: "<pre> #include pow </pre> &egrave; la riga di codice che occorre introdurre nel programma per utilizzare la funzione matematica predefinita <i>pow</i> per il calcolo della potenza", ans: false}, 

 { ques: "<pre> #include &lt;pow&gt; </pre> &egrave; la riga di codice che occorre introdurre nel programma per utilizzare la funzione matematica predefinita <i>pow</i> per il calcolo della potenza", ans: false}, 



        ],




        };

	var options = {
            title: "PRO.SIA - Informatica e processi aziendali<br />5. Funzioni e strutture di dati",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
            intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA3.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctrl+, Ctrl-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});