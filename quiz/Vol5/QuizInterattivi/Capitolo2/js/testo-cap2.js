$( function($){

   var quizMulti = {
 
       multiList:[
         {ques: "Quale delle seguenti frasi spiega meglio il significato di rete peer to peer?", ans: "Una rete dove ogni computer funziona sia come server che come client.", 
             ansSel : ["Una rete nella quale un computer svolge il ruolo di server dedicato.", 
             "Un rete nella quale si possono condividere solo stampanti, ma non file."]},
		
		   {ques: "Quale delle seguenti frasi spiega meglio l'utilizzo di programmi di file-sharing?", ans: "Ogni utente condivide e scarica file contemporaneamente.", 
             ansSel : ["Tutti gli utenti possono scaricare i file presenti su un server centrale.", 
             "Ogni utente deve caricare file su un server centrale.", "Tutti gli utenti devono essere autorizzati dall'amministratore."]},
		
		   {ques: "Quale delle seguenti affermazioni definisce il significato di ISO/OSI?", ans: "Un insieme di livelli e protocolli.", 
             ansSel : ["Un protocollo di rete.", 
             "Un livello dell'architettura di rete.", "Un modello non standard."]},
		
			   {ques: "Quale livello &egrave; pi&ugrave; basso nel modello TCP/IP?", ans: "Rete", 
             ansSel : ["TCP", 
             "Applicazione", "IP"]},
		
			   {ques: "Quale livello &egrave; pi&ugrave; alto nel modello TCP/IP?", ans: "Applicazione", 
             ansSel : ["TCP", 
             "Rete", "IP"]},
		
		   {ques: "Quale tra i seguenti numeri rappresenta un indirizzo IP?", ans: "192.168.1.12", 
             ansSel : ["192.342.12.12", 
             "1.1.1.1", "255.255.255.255"]},
		
		 {ques: "Qual &egrave; la funzionalit&agrave; dell'applicativo HTTP?", ans: "Trasmissione di informazioni ipertestuali", 
             ansSel : ["Trasferimento di posta elettronica", 
             "Trasmissione di file tra due sistemi", "Trasmissioni criptate"]},
		
		 {ques: "Qual &egrave; la funzionalit&agrave; dell'applicativo FTP?", ans: "Trasmissione di file tra due sistemi", 
             ansSel : ["Trasferimento di posta elettronica", 
             "Trasmissione di informazioni ipertestuali", "Trasmissioni criptate"]},
		
		 {ques: "Qual &egrave; la funzionalit&agrave; dell'applicativo SMTP?", ans: "Trasferimento di posta elettronica", 
             ansSel : ["Trasmissione di file tra due sistemi", 
             "Trasmissione di informazioni ipertestuali", "Trasmissioni criptate"]},
	
		 {ques: "Quale delle seguenti definizioni corrisponde a WWW?", ans: "L'organizzazione ipertestuale dei documenti, che possono risiedere anche su computer diversi e geograficamente lontani.", 
             ansSel : ["Il linguaggio utilizzato per creare pagine grafiche per Internet.", 
             "L'insieme delle apparecchiature hardware per mettere in comunicazione pi&ugrave; computer.", "L'elenco dei computer collegati a Internet."]},
		
			 {ques: "Quale &egrave; il significato di E-commerce?", ans: "Acquistare tramite Internet", 
             ansSel : ["Studiare a distanza", 
             "Lavoro da casa", "Condividere informazioni"]},
             
             	 {ques: "Quale &egrave; il significato di Social network?", ans: "Condividere informazioni", 
             ansSel : ["Studiare a distanza", 
             "Lavoro da casa", "Acquistare tramite Internet"]},
		
		   	 {ques: "Quale &egrave; il significato di Telelavoro?", ans: "Lavoro da casa", 
             ansSel : ["Studiare a distanza", 
             "Condividere informazioni", "Acquistare tramite Internet"]},
		
			 {ques: "Quale &egrave; il significato di E-learning?", ans: "Studiare a distanza", 
             ansSel : ["Lavoro da casa", 
             "Condividere informazioni", "Acquistare tramite Internet"]},
		
			 {ques: "Quale delle seguenti affermazioni spiega il significato di DNS?", ans: "Traduce gli indirizzi IP in nomi di dominio.", 
             ansSel : ["&Egrave; un provider per la connessione a Internet.", 
             "&Egrave; un programma del sistema operativo che identifica l'indirizzo IP della macchina.", "&Egrave; un programma per visualizzare le pagine Web."]},
		
			 {ques: "Nell'indirizzo www.provincia.milano.it quale parte rappresenta il dominio di primo livello (TLD)?", ans: "it", 
             ansSel : ["www", 
             "provincia", "milano"]},
             
             {ques: "Che cosa indica il termine localhost?", ans: "Il computer locale dell'utente.", 
             ansSel : ["Una rete locale.", 
             "Un'applicazione locale sul disco C:.", "Un browser locale."]},
		
		   {ques: "Quale tra i seguenti indirizzi per un sito Internet &egrave; scritto correttamente secondo la sintassi URL?", ans: "http://utenti.web.it/museoweb/documenti/mappa.htm", 
             ansSel : ["http:\\utenti.web.it\museoweb\documenti\mappa.htm", 
             "http:utenti.web.it//museoweb//documenti//mappa.htm", "http:/utenti.web.it/museoweb/documenti/mappa.htm"]},
		
		   {ques: "Quale &egrave; il significato di Protocollo?", ans: "Insieme di regole", 
             ansSel : ["Elenco delle directory da percorrere per trovare un file", 
             "Indirizzo Internet di un sito", "Nome di una macchina in una rete"]},
	
		   {ques: "Quale &egrave; il significato di Nome di dominio?", ans: "Indirizzo Internet di un sito", 
             ansSel : ["Elenco delle directory da percorrere per trovare un file", 
             "Insieme di regole", "Nome di una macchina in una rete"]},
		
		 {ques: "Quale &egrave; il significato di Percorso?", ans: "Elenco delle directory da percorrere per trovare un file", 
             ansSel : ["Indirizzo Internet di un sito", 
             "Insieme di regole", "Nome di una macchina in una rete"]},
		
		{ques: "Quale &egrave; il significato di Nome host?", ans: "Nome di una macchina in una rete", 
             ansSel : ["Indirizzo Internet di un sito", 
             "Insieme di regole", "Elenco delle directory da percorrere per trovare un file"]},
		
	
		   
           
       ],
	
   
   tf:[
  
 { ques: "Una rete non pu&ograve; essere formata solamente da due computer", ans: false}, 
 
 { ques: "Due persone che si telefonano creano una rete", ans: false},
 
 { ques: "Un personal computer &egrave; in grado di connettersi a una rete", ans: true},
 
 { ques: "Un terminale non connesso a una rete &egrave; inutilizzabile", ans: true},
 
  { ques: "Una mainframe non connesso a una rete &egrave; inutilizzabile", ans: false},
  
  { ques: "In una rete &egrave; possibile condividere componenti hardware", ans: true},

  { ques: "In una rete &egrave; possibile condividere solamente risorse software", ans: false},

  { ques: "In una rete &egrave; possibile spostare un file da un computer a un altro", ans: true},

  { ques: "In una rete &egrave; possibile condividere l'utilizzo di un software", ans: true},

  { ques: "In una rete &egrave; possibile condividere l'uso di un lettore CD", ans: true},

  { ques: "Un server deve essere un computer molto potente", ans: false},

  { ques: "Un client non connesso alla rete &egrave; inutilizzabile", ans: false},

  { ques: "Un personal computer connesso alla rete pu&ograve; essere un client", ans: true},

  { ques: "Le richieste di servizi vengono fatte dal client", ans: true},

  { ques: "Un client non pu&ograve; mai essere anche server", ans: false},
  
  { ques: "Un server pu&ograve; condividere una componente hardware", ans: true},

  { ques: "Un client pu&ograve; condividere una componente hardware", ans: true},

  { ques: "Un computer pu&ograve; essere sia client sia server", ans: true},

  { ques: "I client non possono eseguire programmi", ans: false},

  { ques: "I server non possono eseguire programmi", ans: false},
  
  { ques: "Internet &egrave; una rete di tipo WAN", ans: true},

  { ques: "Una rete WAN &egrave; pi&ugrave; piccola di una rete LAN", ans: false },

  { ques: "Non &egrave; possibile collegare due reti di tipo diverso", ans: false },

  { ques: "&Egrave; possibile collegare una rete LAN con una WAN", ans: true },

  { ques: "Le problematiche di gestione di una rete dipendono anche dalla sua dimensione", ans: true },
  
    { ques: "Le reti moderne trasmettono pacchetti", ans: true },

  { ques: "Un pacchetto contiene un indirizzo di destinazione", ans: true },

  { ques: "Un pacchetto pu&ograve; seguire pi&ugrave; strade per andare da un host a un altro", ans: true },

  { ques: "Un pacchetto pu&ograve; essere spedito solamente a un singolo host", ans: false },

  { ques: "Un pacchetto inviato all'indirizzo di broadcast viene ricevuto da tutti gli host connessi alla rete", ans: true },

  { ques: "Se la rete &egrave; composta da molti computer &egrave; necessario installare un router", ans: false },

  { ques: "Uno switch &egrave; utilizzato per connettere pi&ugrave; computer alla rete", ans: true },

  { ques: "Per unire due reti di tipo differente &egrave; necessario uno switch", ans: false },

  { ques: "I router possono svolgere anche le funzionalit&agrave; di switch", ans: true },

  { ques: "La fibra ottica permette elevate velocit&agrave; di trasmissione", ans: true },

  { ques: "Il doppino telefonico pu&ograve; essere utilizzato sia per le trasmissioni telefoniche sia di dati", ans: true },

  { ques: "Il protocollo 802.11b permette di trasmettere a una distanza di parecchi chilometri", ans: false },

  { ques: "La velocit&agrave; delle trasmissioni wireless &egrave; oggi paragonabile a quella delle trasmissioni cablate", ans: true },

  { ques: "Le trasmissioni wireless possono dare problemi riguardanti la sicurezza", ans: true },

  { ques: "L'intera rete Internet &egrave; gestita da pochi potenti server", ans: false },

  { ques: "Internet &egrave; una rete di tipo LAN", ans: false },

  { ques: "Internet &egrave; una rete formata da pi&ugrave; reti differenti tra loro", ans: true },

  { ques: "La rete Internet viene anche chiamata WWW", ans: false },

  { ques: "Un browser permette di navigare nel World Wide Web", ans: true },

  { ques: "Le informazioni, per essere trasmesse, vengono suddivise in pacchetti", ans: true },

  { ques: "Il percorso seguito dai pacchetti &egrave; sempre lo stesso", ans: false },
 
  { ques: "Ogni volta che si trasmette un pacchetto ci si assicura che questo arrivi a destinazione", ans: true },

  { ques: "Due host con lo stesso IP non possono comunicare tra loro", ans: true },

  { ques: "Un host pu&ograve; essere individuato utilizzando un nome", ans: true },

  { ques: "Un IP dinamico cambia numerose volte durante una connessione", ans: false },

  { ques: "Un IP dinamico non cambia durante una connessione", ans: true },

  { ques: "Un IP statico non cambia mai", ans: true },

  { ques: "Due host possono avere, all'inizio della connessione, lo stesso IP", ans: false },

  { ques: "Due host possono avere, durante una connessione, lo stesso IP", ans: false },

        ],


   fill:[
                { ques: "La creazione di una rete telematica permette di condividere ogni tipo di ............", ans: "risorsa"},
				
				                { ques: "La tolleranza ai guasti viene indicata con il termine ............", ans: "fault tolerance"},

                { ques: "Nelle reti............alcuni computer offrono servizi e altri ne usufruiscono.", ans: "client/server"},
 
                { ques: "Nelle reti ............ tutti i computer svolgono entrambi i ruoli di client e server.", ans: "peer to peer"},

		],	


        };

	var options = {
			title: "PRO.SIA - Informatica e processi aziendali<br />2. Reti e protocolli",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
			intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA5.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctr+, Ctr-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});