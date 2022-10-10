$( function($){

   var quizMulti = {
 
       multiList:[
           {ques: "Quale delle seguenti frasi spiega in modo corretto il significato di costruttore?", ans: "Metodo attivato quando si crea un'istanza.", 
             ansSel : ["Metodo attivato quando si crea una classe.", 
             "Metodo attivato quando si crea un metodo.", "Metodo attivato quando si crea un attributo."]},
		
		   {ques: "Quando una funzione non appartenente a una classe pu&ograve; accedere ai membri privati della classe?", ans: "Solo se dichiarata friend nella classe.", 
             ansSel : ["In nessun caso.", 
             "In caso acceda ai metodi e non agli attributi.", "Sempre.", "Solo se dichiarata friend."]},
		
		     {ques: "Quali delle seguenti frasi definisce meglio il significato di ereditariet&agrave; multipla?", ans: "La possibilita' di derivare una classe da una o piu' classi.", 
             ansSel : ["La possibilita' di derivare lo stesso metodo di una classe base in piu' classi derivate.", 
             "La possibilita' di derivare gli stessi attributi di una classe base in piu' classi derivate.", "La possibilita' di derivare piu' classi da una classe base."]},
		
		   {ques: "Quale delle seguenti definizioni descrive meglio il significato del termine overloading?", ans: "L'arricchimento delle capacita' di un metodo.", 
             ansSel : ["L'aumento del numero di attributi di una classe.", 
             "L'impostazione dell'accesso privato ai membri di una classe.", "Un'impostazione assunta dal sistema se non specificata dall'utente."]},
		
		    {ques: "Qual &egrave; il significato della funzione member function?", ans: "Identifica un metodo di una classe", 
             ansSel : ["Assicura a una funzione non membro l'accesso ai membri privati", 
             "Ridefinisce una funzione gi&agrave; esistente per l'impiego di altri parametri"]},
		
		 {ques: "Qual &egrave; il significato della funzione friend function?", ans: "Assicura a una funzione non membro l'accesso ai membri privati", 
             ansSel : ["Identifica un metodo di una classe", 
             "Ridefinisce una funzione gi&agrave; esistente per l'impiego di altri parametri"]},
		
		 {ques: "Qual &egrave; il significato della funzione function overloading?", ans: "Ridefinisce una funzione gia' esistente per l'impiego di altri parametri", 
             ansSel : ["Identifica un metodo di una classe", 
             "Assicura a una funzione non membro l'accesso ai membri privati"]},
		
		   {ques: "Quali sono i  privilegi all'accesso dei membri di una classe di base delle funzioni di tipo friend?", ans: "Privati, protetti, pubblici", 
             ansSel : ["Protetti, pubblici", 
             "Pubblici"]},
		
		 {ques: "Quali sono i  privilegi all'accesso dei membri di una classe di base della classe derivata?", ans: "Protetti, pubblici", 
             ansSel : ["Privati, protetti, pubblici", 
             "Pubblici"]},
		
		{ques: "Quali sono i  privilegi all'accesso dei membri di una classe di base delle funzioni membro?", ans: "Privati, protetti, pubblici", 
             ansSel : ["Protetti, pubblici", 
             "Pubblici"]},
             
             {ques: "Volendo creare un costruttore per la classe Lettere, la seguente dichiarazione: <pre> <br /> class Lettere { <br /> ... public: <br /> Lettere() {} <br /> ... <br /> }; </pre> &egrave; corretta?", ans: "Si", 
             ansSel : ["No"]},
		
		  {ques: "Volendo creare un costruttore per la classe Lettere, la seguente dichiarazione: <pre> <br /> class Lettere { <br /> ... public: <br /> constructor() {} <br /> ... <br /> }; </pre> &egrave; corretta?", ans: "No", 
             ansSel : ["Si"]},
		
		 {ques: "Volendo creare un costruttore per la classe Lettere, la seguente dichiarazione: <pre> <br /> class Lettere { <br /> ... <br /> public: <br /> constructor Lettere() {} <br /> ... <br /> }; </pre> &egrave; corretta?", ans: "No", 
             ansSel : ["Si"]},
		
		 {ques: "Date le dichiarazioni: <pre> <br /> class Dato { <br /> public: <br /> &nbsp; &nbsp; int a; <br /> &nbsp; &nbsp; double b; <br /> &nbsp; &nbsp; Dato(): a(3), b(5.0) {} <br /> }; <br /> </pre> qual &egrave; l'output del seguente programma? <pre> int main() { <br /> &nbsp; &nbsp; Dato dato; <br /> &nbsp; &nbsp; cout << dato.a << ' '; <br /> &nbsp; &nbsp; cout << dato.b << endl; <br /> &nbsp; &nbsp; return 0; <br /> } </pre>", ans: "3,5", 
             ansSel : ["3.0,5.0", "8.0", "3 5"]},
		
	 {ques: "Avendo definito le classi A e B, a quali dati ha accesso la classe B? <pre> <br /> class A { <br /> &nbsp; &nbsp; int a,b; <br /> public: <br /> &nbsp; &nbsp; int a,c; <br /> protected <br /> &nbsp; &nbsp; int e,f; <br /> }; <br /> <br> class B: public A { <br /> &nbsp; &nbsp; ... <br /> &nbsp; &nbsp; ... <br /> }; <br /> </pre>", ans: "Sia ai dati protetti sia a quelli pubblici",  
		ansSel : ["A tutti i dati", "Solo a quelli protetti", "Solo a quelli pubblici"]},
            
       ],
	
  
   tf:[
  
 { ques: "&Egrave; possibile accedere agli attributi di una classe attraverso i metodi", ans: true}, 
 
 { ques: "Con l'incapsulamento tutto ci&ograve; che si riferisce ad un oggetto &egrave; racchiuso all'interno dell'oggetto stesso", ans: true},    
 
 { ques: "Una classe &egrave; un'unit&agrave; di programmazione che pu&ograve; essere utilizzata in un solo programma", ans: false},    
 
 { ques: "Le classi pi&ugrave; generali si chiamano classi base o superclassi", ans: true},    

  { ques: "Gli attributi non incidono sulla dimensione delle istanze", ans: false},    

 { ques: "La dimensione di un'istanza coincide con il numero di byte occupati dai suoi metodi", ans: false},    

 { ques: "Se nella classe sono indicati solo i prototipi dei metodi, per la loro implementazione si utilizza la sintassi:<br /> tipo nome_classe::nome_metodo", ans: true},    

 { ques: "Non implementando il costruttore e il distruttore, il compilatore li crea automaticamente (default)", ans: true},    

 { ques: "Una classe pu&ograve; avere pi&ugrave; di un costruttore", ans: true},    

 { ques: "Se si implementa un costruttore, il compilatore include comunque quello di default", ans: false},    

 { ques: "Il distruttore serve nella gestione dinamica della memoria per liberare spazio non pi&ugrave; necessario", ans: true},    

 { ques: "Se il programmatore ha definito un costruttore che prevede dei parametri, non &egrave; possibile dichiarare un'istanza senza argomenti", ans: true},    

 { ques: "Le classi derivate ereditano tutti i membri della classe di base", ans: true},    

 { ques: "Le classi derivate non possono essere arricchite con funzionalit&agrave; aggiuntive rispetto alla classe di base, &egrave; necessario integrare la classe di base", ans: false},    

 { ques: "Una classe derivata dispone di tutti gli attributi e dei metodi della classe d'origine: questa caratteristica &egrave; nota con il termine incapsulamento", ans: false},    

 { ques: "Un attributo protetto &egrave; visto da una funzione non membro", ans: false},    

 { ques: "Un attributo protetto &egrave; visto da una classe derivata", ans: true},    

 { ques: "Un membro protetto &egrave; visto da una funzione friend", ans: true},    

 { ques: "Un metodo protetto &egrave; visto da una funzione non membro", ans: false},    

 { ques: "Un metodo privato &egrave; visto da una classe derivata", ans: false},    

 { ques: "Una classe derivata pu&ograve; coprire un metodo della classe base scrivendo un nuovo metodo avente lo stesso nome e la stessa firma", ans: true},    

 { ques: "Un metodo pu&ograve; essere ridefinito, consentendo il passaggio di parametri in numero e di tipo diversi", ans: true},    

 { ques: "L'overriding dei metodi modifica un metodo all'interno della classe base", ans: false},    

 { ques: "L'overriding dei metodi sovrascrive, nella classe derivata, un metodo ereditato, cambiando le istruzioni che ne descrivono il comportamento", ans: true},    

 { ques: "La programmazione orientata agli oggetti pu&ograve; essere definita bug-free poich&egrave; riduce il rischio di commettere errori quando si utilizzano i codici gi&agrave; testati", ans: true},    

 { ques: "La programmazione tradizionale permette di riutilizzare con maggior facilit&agrave; i codici gi&agrave; testati rispetto alla programmazione orientata agli oggetti", ans: false},    

 { ques: "Durante l'analisi di un oggetto &egrave; importante individuare eventuali membri comuni ad altri oggetti in modo da definire una classe di base condivisibile con altre applicazioni", ans: true},    

 { ques: "Nella programmazione orientata agli oggetti, la classe derivata &egrave; lasciata intatta, in quanto le variazioni al codice sono implementate nella classe base", ans: false},    

        ],


        fill:[
                { ques: "Gli elementi base della OOP si chiamano ..................", ans: "oggetti"},
				
				{ ques: "Gli .................. definiscono le caratteristiche di un oggetto.", ans: "attributi"},
				
				{ ques: "I ............ definiscono le funzionalit&agrave; dell'oggetto.", ans: "metodi"},
				
				{ ques: "I costruttori delle classi devono essere definiti ....................", ans: "pubblici"},
				
				{ ques: "Gli attributi e i metodi sono definiti .................... se nessun altro, eccetto la classe stessa, deve accedervi.", ans: "privati"},
				
				{ ques: "Gli attributi e i metodi sono definiti .................. se sono disponibili a tutti.", ans: "pubblici"},
				
			
        ] 


        };

	var options = {
        title: "PRO.SIA - Informatica e processi aziendali<br />6. Programmazione ad oggetti",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
            intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA3.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctrl+, Ctrl-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});