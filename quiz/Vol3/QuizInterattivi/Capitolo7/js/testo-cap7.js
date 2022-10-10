$( function($){

   var quizMulti = {
 
       multiList:[
 	      {ques: "Quando si verifica una situazione di <i>stack overflow</i> durante l'esecuzione di un programma?", ans: "Quando si usano array di variabili locali di dimensioni elevate.", 
             ansSel : ["Quando un programma contenente funzioni ricorsive termina.", "Quando in una struttura a pila si esegue un'operazione di Push seguita da un'operazione di Pop.", 
             "Quando una pila contiene valori numerici al di fuori del range previsto per il tipo numerico."]},
	    
	   	     	      {ques: "Quando si verifica una situazione di <i>stack overflow</i> durante l'esecuzione di un programma?", ans: "Quando, in un programma contenente funzioni ricorsive, l'accumularsi di versioni dello stesso sottoprogramma causa il riempimento della memoria.", 
             ansSel : ["Quando un programma contenente funzioni ricorsive termina.", "Quando in una struttura a pila si esegue un'operazione di Push seguita da un'operazione di Pop.", 
             "Quando si usano array di dimensioni troppo piccole."]},


	      {ques: "Come viene chiamata la struttura coda?", ans: "FIFO", 
             ansSel : ["LIFO"]},
	    
	      {ques: "Quale delle seguenti coppie di istruzioni si deve usare per l'operazione di <i>Push</i> in una coda rappresentata con un array:", ans: "Fine++; Coda [Fine] = dato;", 
             ansSel : ["Fine &ndash; &ndash;; Coda [Fine] = dato;", "Coda [Fine] = dato; Fine&ndash; &ndash;;", 
             "Coda[Fine] = dato; Fine++;"]},
	    
	      {ques: "Data la definizione: <br> <pre> struct Prova { <br /> &nbsp; &nbsp; int c1; <br /> &nbsp; &nbsp; char c2[20]; <br /> }; <br /> Prova* p; <br /> p = new Prova; </pre> l'istruzione <br><pre>p-&gt;c1 = 20; </pre>&egrave; corretta per assegnare il valore 20 al campo <i>c1</i>?", ans: "Si", 
             ansSel : ["No"]},
	   
	       {ques: "Quale tra le seguenti frasi definisce il significato di <i>template</i> di una funzione?", ans: "Funzione con un parametro che puo' essere sostituito con un tipo o classe al momento della chiamata della funzione stessa.", 
             ansSel : ["Funzione con un parametro che puo' essere sostituito con un valore al momento della chiamata della funzione stessa.", "Funzione con un parametro che puo' essere sostituito con un template di una classe al momento della chiamata della funzione stessa.", 
             "Funzione con un parametro che puo' essere sostituito con un array di valori al momento della chiamata della funzione stessa."]},
	   
	       {ques: "<pre> template&lt;class T&gt; class NomeClasse { ... } </pre> &egrave; la sintassi corretta per la dichiarazione di un template delle classi?", ans: "Si", 
             ansSel : ["No"]},
	   
	       {ques: "Con <pre> TProva&lt;double&gt; Prova; </pre>  si istanzia una classe <i>Prova</i> utilizzando il template <i>TProva</i> con il tipo <i>double</i>?", ans: "Si", 
             ansSel : ["No"]},
	   
	       {ques: "Quale tra i seguenti termini NON rappresenta una delle componenti fondamentali della libreria STL?", ans: "puntatori", 
             ansSel : ["iteratori", "contenitori", 
             "algoritmi"]},
	   
	       {ques: "Che cosa scrive in output il seguente frammento di programma? <br> <pre> string s1, s2; <br> <br /> s1 = 'Automobile'; <br /> s2 = s1.substr(0, 4); <br /> cout << s2 << endl; </pre>", ans: "Auto", 
             ansSel : ["Automobile", 
             "Nulla"]},
	    
	        {ques: "Che cosa scrive in output il seguente frammento di programma? <br> <pre> string s1('Automobile'); <br /> string s2('carro'); <br> <br /> s1.replace(4, 6, s2); <br /> cout << s1 << endl; </pre>", ans: "Autocarro", 
             ansSel : ["Mobile", "Auto", 
             "Nulla"]},
	   
	      {ques: "Qual &egrave; il significato del metodo <i>push_back()</i> della classe <i>vector</i>?", ans: "Aggiunge una componente in coda", 
             ansSel : ["Elimina l'ultima componente del vettore", "Elimina tutte le componenti del vettore", 
             "Restituisce il numero delle componenti"]},
	   
	      {ques: "Qual &egrave; il significato del metodo <i>pop_back()</i> della classe <i>vector</i>?", ans: "Elimina l'ultima componente del vettore", 
             ansSel : ["Aggiunge una componente in coda", "Elimina tutte le componenti del vettore", 
             "Restituisce il numero delle componenti"]},
	   
	      {ques: "Qual &egrave; il significato del metodo <i>clear()</i> della classe <i>vector</i>?", ans: "Elimina tutte le componenti del vettore", 
             ansSel : ["Aggiunge una componente in coda", "Controlla se il vettore e' vuoto", 
             "Restituisce il numero delle componenti"]},
	   
	      {ques: "Qual &egrave; il significato del metodo <i>size()</i> della classe <i>vector</i>?", ans: "Restituisce il numero delle componenti", 
             ansSel : ["Aggiunge una componente in coda", "Controlla se il vettore e' vuoto", 
             "Elimina tutte le componenti del vettore"]},
	   
	      {ques: "Qual &egrave; il significato del metodo <i>empty()</i> della classe <i>vector</i>?", ans: "Controlla se il vettore e' vuoto", 
             ansSel : ["Aggiunge una componente in coda", "Restituisce il numero delle componenti", 
             "Elimina tutte le componenti del vettore"]},
	    
	      {ques: "Quale delle seguenti frasi spiega in modo corretto il significato dell'istruzione <i>try... catch</i>?", ans: "La gestione strutturata delle eccezioni che sia in grado di intercettare le situazioni di errore fornendo all'utente opportuni messaggi.", 
             ansSel : ["Il trasferimento del controllo all'istruzione immediatamente successiva a quella nella quale &egrave; stato generato l'errore.", "La gestione degli errori anche se non &egrave; stato generato alcun errore.", 
             "La visualizzazione di un messaggio di errore da parte del sistema e l'interruzione del programma."]},
	    
	      {ques: "<pre> vector&lt;int&gt;::iterator i; </pre> &egrave; la sintassi corretta per dichiarare un iteratore per un vettori di interi?", ans: "Si", 
             ansSel : ["No"]},
	    
	        {ques: "Che cosa viene restituito dal metodo <i>find()</i> del contenitore <i>map</i>?", ans: "iteratore", 
             ansSel : ["chiave", "valore", 
             "coppia chiave + valore"]},
	    
	      {ques: "Quali delle seguenti istruzioni mette in ordine crescente gli elementi di un vettore <i>v</i>?", ans: "sort(v.begin(), v.end());", 
             ansSel : ["v.sort(v.begin(), v.end());", "v.sort(begin(), end());", 
             "sort(begin(), end());"]},


             {ques: "Data l'istruzione <br /> <pre> *pInteri = 2; </pre> che cosa contiene il puntatore <i>pInteri</i>?", ans: "L'indirizzo di una cella di memoria che contiene il valore intero 2.", 
             ansSel : ["Il valore presente nella cella di memoria numero 2.", 
             "Il valore intero 2.", "L'istruzione presenta un errore di sintassi perch&egrave; *pInteri non pu&ograve; essere usato in un'istruzione di assegnazione."]},

{ques: "Quale delle seguenti affermazioni riferite all'istruzione <br /> <pre> x= *p; </pre> &egrave; corretta?", ans: "Assegna a x il contenuto della memoria puntata da p.", 
             ansSel : ["Assegna a p il contenuto della memoria puntata da x.", 
             "Assegna a x il prodotto di x per p.", "Assegna a p il prodotto di x per p."]},

{ques: "Quale delle seguenti affermazioni riferite all'istruzione <br /> <pre> p = &x;</pre> &egrave; corretta?", ans: "Assegna a p l'indirizzo della variabile x.", 
             ansSel : ["Assegna a x l'indirizzo della variabile p.", 
             "Assegna a p il contenuto della variabile x.", "Assegna a x il contenuto della variabile p."]},

{ques: "Data la definizione <br /> <pre> struct Nodo { <br /> &nbsp; string nome; <br /> &nbsp; Nodo *succ; <br /> }; <br /> Nodo* n, p, q; </pre> dopo le istruzioni: <pre> p = q; <br /> q = n; <br /> q->succ = p; </pre> <i>p</i> e <i>q</i> puntano allo stesso nodo?", ans: "No", 
             ansSel : ["Si"]},
	     
       ],
	
  
   tf:[
  
 { ques: "Il vettore &egrave; organizzato in memoria centrale come un insieme di elementi contigui", ans: true}, 
 
  { ques: "Il vettore non consente l'accesso diretto ad una singola componente", ans: false}, 

 { ques: "La lista bidirezionale &egrave; pi&ugrave; efficiente solo quando si devono fare poche operazioni di inserimento e cancellazione", ans: false}, 

 { ques: "Con la lista bidirezionale non si pu&ograve; usare l'operatore [ ]", ans: false}, 

 { ques: "La funzione <i>find()</i> &egrave; un algoritmo per il contenitore <i>vector</i>", ans: true}, 

 { ques: "La funzione <i>find()</i> &egrave; un metodo per il contenitore <i>map</i>", ans: true}, 

 { ques: "La funzione <i>count()</i> &egrave; un metodo per il contenitore <i>list</i>", ans: false}, 

 { ques: "La funzione <i>count()</i> &egrave; un algoritmo per il contenitore <i>vector</i>", ans: true}, 

 { ques: "La funzione <i>for_each()</i> &egrave; un algoritmo per il contenitore <i>vector</i>", ans: true}, 

 { ques: "La funzione <i>for_each()</i> &egrave; un algoritmo per il contenitore <i>map</i>", ans: true}, 

 { ques: "<pre> cout &lt;&lt; Pila[testa] &lt;&lt; endl; Testa++; </pre> &egrave; la coppia di istruzioni che si deve usare per l'operazione di <i>Pop</i> in una pila rappresentata con un array", ans: true}, 

        ],
        };

	var options = {
        title: "PRO.SIA - Informatica e processi aziendali<br />7. Librerie di template",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
            intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA3.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctrl+, Ctrl-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});