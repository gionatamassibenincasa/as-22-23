$( function($){

   var quizMulti = {
 
       multiList:[
         {ques: "Quale delle seguenti frasi rappresenta la definizione di Intranet?", ans: "La rete interna aziendale che usa le modalita' e i protocolli tipici di Internet.", 
             ansSel : ["La connessione tra reti aziendali.", 
             "Il collegamento in rete tra l'azienda e una banca.", "L'estensione di una rete da locale a geografica."]},
	
	     {ques: "Quale tra i seguenti tipi di rete &egrave; adatta per la distribuzione di cataloghi di prodotti riservati ai rappresentanti od operatori commerciali di un'azienda?", ans: "Extranet", 
             ansSel : ["Internet", 
             "Intranet"]},
	
	     {ques: "Quale tra i seguenti &egrave; un vantaggio per le aziende derivanti dal cloud computing?", ans: "Diminuzione dei costi dei sistemi informatici.", 
             ansSel : ["Eliminazione dei computer aziendali.", 
             "Diminuzione del personale."]},
	
	     {ques: "Quali tra i seguenti &egrave; un vantaggio per gli utenti nell'uso della cloud?", ans: "Utilizzo di software e applicazioni senza la necessita' di installazione e aggiornamento sui propri computer.", 
             ansSel : ["Utilizzo delle applicazioni senza il browser.", 
             "Possibilita' di accesso ai servizi solo dal proprio computer."]},
	
	     {ques: "Quale tra le seguenti frasi descrive l'aspetto innovativo del Web 2.0?", ans: "E' un'evoluzione in ottica sociale degli strumenti di comunicazione.", 
             ansSel : ["Permette l'accesso alla rete a pi&ugrave; utenti rispetto al Web tradizionale.", 
             "Elimina i problemi di spam relativi alla posta elettronica.", "Consente un uso pi&ugrave; semplice della chat e dei forum."]},
	
	     {ques: "A che cosa serve il pulsante Mi piace?", ans: "Esprimere la propria approvazione per la pagina sulla quale si trova il pulsante.", 
             ansSel : ["Stringere amicizia con qualcuno.", 
             "Entrare a far parte di una community on line.", "Abbonarsi ad un feed RSS."]},
	
	     {ques: "Quale tra i seguenti &egrave; un punto di forza del marketing non convenzionale?", ans: "Puntare sul coinvolgimento personale dei consumatori.", 
             ansSel : ["Offrire ai consumatori prodotti con prezzi pi&ugrave; bassi.", 
             "Raggiungere clienti anche di altre nazioni."]},
	
	    {ques: "Come viene decifrata la parola 'RTSLBF', creata usando il cifrario a sostituzione (chiave = 5)?", ans: "moneta", 
             ansSel : ["manica", 
             "matita", "motore"]},
	
	    {ques: "Quale delle seguenti frasi definisce il significato di RSA?", ans: "algoritmo crittografico a chiave asimmetrica", 
             ansSel : ["algoritmo crittografico a sostituzione", 
             "algoritmo crittografico a trasposizione", "algoritmo crittografico a chiave simmetrica"]},
	
	    {ques: "Quale delle seguenti frasi esprime meglio il significato del termine e-government?", ans: "L'utilizzo e l'applicazione delle tecnologie informatiche nelle amministrazioni centrali e periferiche dello Stato.", 
             ansSel : ["La formazione del personale della Pubblica Amministrazione.", 
             "L'approvvigionamento di beni e servizi.", "Le comunicazioni tra le pubbliche amministrazioni tramite posta elettronica."]},
		
		 
           
       ],
	
   
   tf:[
  
 { ques: "In relazione al social marketing, il passaparola assume un'importanza primaria", ans: true}, 
 
 { ques: "In relazione al social marketing, i contenuti devono essere innovativi e non banali", ans: true},
 
 { ques: "Il social marketing si rivolge solo ai possessori di dispositivi mobili", ans: false},
 
 { ques: "Il social marketing pu&ograve; essere percepito come una pubblicit&agrave; classica", ans: false},
 
  { ques: "Nel social marketing il coinvolgimento di molti utenti &egrave; un fattore primario", ans: true},

  { ques: "La crittografia a chiave asimmetrica utilizza una coppia di chiavi", ans: true},

  { ques: "Nella crittografia a chiave asimmetrica la chiave pubblica non pu&ograve; essere usata per le operazioni di decifrazione", ans: false},

  { ques: "Nella crittografia a chiave asimmetrica la chiave privata deve essere tenuta segreta", ans: true},

  { ques: "Nella crittografia a chiave asimmetrica il mittente e il destinatario non condividono chiavi segrete", ans: true},

   { ques: "La firma digitale si basa sui Certificati elettronici rilasciati da Enti certificatori accreditati", ans: true},

  { ques: "La posta elettronica certificata non richiede un ente gestore di certificazione", ans: false},

  { ques: "L'e-procurement indica le operazioni di acquisto in rete o le aste online per la scelta dei fornitori", ans: true},

  { ques: "Gli strumenti dell'amministrazione digitale riguardano solo le imprese e non i singoli cittadini", ans: false},

{ ques: "SSH rappresenta un programma per la crittografia", ans: false},

  { ques: "PGP rappresenta un programma per la crittografia", ans: true},

  { ques: "GPG rappresenta un un protocollo", ans: false},

  { ques: "SSL rappresenta un programma per la crittografia", ans: false},

  { ques: "TLS rappresenta un un protocollo", ans: true},

 
        ],


        fill:[
                        { ques: "Gli strumenti ...................... permettono una comunicazione in tempo reale.", ans: "sincroni"},
				
				                { ques: "Il software Skype consente di effettuare chiamate con la tecnologia .....................", ans: "VoIP"},

                { ques: "Per una video conferenza sono necessari: connessione Internet, microfono e ..................", ans: "webcam"},
 
                { ques: "I ...................... aziendali permettono all'azienda di avere un canale comunicativo pi&ugrave; informale con i clienti.", ans: "blog"},

                { ques: "Il messaggio che pu&ograve; essere letto da tutti si chiama ..............", ans: "testo in chiaro"},

                { ques: "Il messaggio codificato e reso illeggibile si chiama ..............", ans: "testo cifrato"},

                { ques: "I metodi di .............. servono per codificare l'informazione.", ans: "crittografia"},

                { ques: "I metodi di .............. servono per decodificare il testo cifrato.", ans: "decifrazione"},

			
        ],

        };

	var options = {
			title: "PRO.SIA - Informatica e processi aziendali<br />3. Servizi di rete e sicurezza",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
			intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA5.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctr+, Ctr-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});