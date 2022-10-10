$( function($){

   var quizMulti = {
 
       multiList:[
        			
             {ques: "Che cosa significa connettere dei computer in rete?", ans: "Consentire la condivisione di file e risorse tra gli utenti.", 
             ansSel : ["Eliminare la necessit&agrave; della posta elettronica.", 
             "Rendere i computer pi&ugrave; affidabili.", "Aumentare la sicurezza nell'uso dei computer."]},
             
              {ques: "Quale tra le seguenti &egrave; la caratteristica pi&ugrave; importante delle reti?", ans: "Lavoro cooperativo tra utenti diversi.", 
             ansSel : ["Costruzione di reti telefoniche.", 
             "Utilizzo della posta elettronica.", "Produzione di software."]},
             
              {ques: "Qual &egrave; il significato della sigla FTP?", ans: "Programma per il trasferimento di file.", 
             ansSel : ["Protocollo per la visualizzazione di pagine Web.", 
             "Protocollo per la connessione sicura a un computer remoto.", "Protocollo per la posta elettronica."]},
             
              {ques: "Qual &egrave; il significato della sigla TCP/IP?", ans: "Protocolli di base di Internet.", 
             ansSel : ["Protocollo per la visualizzazione di pagine Web.", 
             "Protocollo per la connessione sicura a un computer remoto.", "Protocollo per la posta elettronica."]},
             
                {ques: "Qual &egrave; il significato della sigla SMTP?", ans: "Protocollo per la posta elettronica.", 
             ansSel : ["Protocollo per la visualizzazione di pagine Web.", 
             "Protocollo per la connessione sicura a un computer remoto.", "Protocolli di base di Internet."]},
             
                  {ques: "Qual &egrave; il significato della sigla SSH?", ans: "Protocollo per la connessione sicura a un computer remoto.", 
             ansSel : ["Protocollo per la visualizzazione di pagine Web.", 
             "Protocollo per la posta elettronica.", "Protocolli di base di Internet."]},
           
                   {ques: "Qual &egrave; il significato della sigla HTTP?", ans: "Protocollo per la visualizzazione di pagine Web.", 
             ansSel : ["Protocollo per la connessione sicura a un computer remoto.", 
             "Protocollo per la posta elettronica.", "Protocolli di base di Internet."]},
             
              {ques: "Quale delle seguenti frasi riferite al WWW (World Wide Web) NON &egrave; corretta?", ans: "Insieme dei computer collegati attraverso le reti e dei programmi residenti su di essi.", 
             ansSel : ["Insieme di informazioni disponibili in rete e visualizzabili attraverso il browser.", 
             "Insieme di documenti multimediali collegati tra loro e consultabili in Internet."]},
             
              {ques: "Quale delle seguenti frasi riferite al WWW (World Wide Web) NON &egrave; corretta?", ans: "Insieme dei programmi grafici e dei protocolli utilizzati da Internet.", 
             ansSel : ["Insieme di informazioni disponibili in rete e visualizzabili attraverso il browser.", 
             "Insieme di documenti multimediali collegati tra loro e consultabili in Internet."]},
             
              {ques: "Quale tra i seguenti indirizzi per un sito Internet &egrave; scritto correttamente secondo la sintassi URL?", ans: "http://www.meteo.it", 
             ansSel : ["http:/www.meteo.it", 
             "www.meteo.it//http", "www://http.meteo.it"]},
             
              {ques: "Quale tra i seguenti indirizzi di posta elettronica &egrave; scritto correttamente, supponendo che il nome dell'utente sia john, il provider Internet sia greenchip e la nazione sia la Gran Bretagna?", ans: "john@greenchip.uk", 
             ansSel : ["john@uk.greenchip", 
             "greenchip.uk@john", "john.uk@greenchip"]},
             
                           {ques: "Quale tra le seguenti &egrave; la definizione corretta di Instant Messaging?", ans: "Invio e ricezione di messaggi in modalita' sincrona.", 
             ansSel : ["Invio e ricezioni di mail in modalita' asincrona.", 
             "Invio e ricezione di mail in modalita' sincrona.", "Invio e ricezione di messaggi in modalita' asincrona."]},
             
             
              {ques: "Quale delle seguenti frasi spiega il significato di netiquette?", ans: "Un insieme di regole di comportamento per gli utenti della rete.", 
             ansSel : ["Un protocollo utilizzato dagli utenti della rete per la posta elettronica.", 
             "L'insieme delle azioni in rete punite dalla legge.", "Le attivit&agrave; da svolgere per aprire un nuovo sito Web."]},
             
              {ques: "Quali tra le seguenti sono precauzioni importanti da prendere durante l'accesso alle comunit&agrave; virtuali?", ans: "Rendere privato il proprio profilo.", 
             ansSel : ["Fornire molti dati personali.", 
             "Interagire anche con sconosciuti."]},
             
               {ques: "Quali tra le seguenti sono precauzioni importanti da prendere durante l'accesso alle comunit&agrave; virtuali?", ans: "Essere consapevoli che le informazioni fornite sono disponibili a tutti.", 
             ansSel : ["Fornire molti dati personali.", 
             "Interagire anche con sconosciuti."]},
             
            
             
            
             
             
              
             
   
   
         
             
                                        
           
       ],
	
   
   tf:[
  
 { ques: "LAN indica una rete di dimensioni metropolitane", ans: false}, 
 
  { ques: "WAN indica una rete nella quale la connessione tra computer copre una zona corrispondente al territorio di una Nazione", ans: true}, 

 { ques: "In una architettura client/server i ruoli di server e client sono predefiniti", ans: false}, 

 { ques: "Il nome Internet deriva da Internetworking che significa rete di reti interconnesse", ans: true}, 

 { ques: "Internet si basa su un'architettura di tipo client/server", ans: true}, 

 { ques: "Il protocollo di base di Internet si chiama FTP", ans: false}, 

 { ques: "Due reti possono essere connesse tra loro solo se sono dello stesso tipo", ans: false}, 

 { ques: "Nell'indirizzo di posta tex@willer.it, il nome utente &egrave; tex willer", ans: false}, 

 { ques: "Nell'indirizzo di posta tex@willer.it, il nome utente &egrave; willer", ans: false}, 

 { ques: "Nell'indirizzo di posta tex@willer.it, il nome del server &egrave; willer.it", ans: true}, 

 { ques: "In riferimento all'indirizzo di posta tex@willer.it, potrebbe esistere anche tex@willer.com", ans: true}, 

 { ques: "In riferimento all'indirizzo di posta tex@willer.it, potrebbe esistere anche tex.willer@com", ans: false}, 

 { ques: "&Egrave; possibile allegare a una email un'immagine", ans: true}, 

 { ques: "&Egrave; possibile inviare una email a pi&ugrave; indirizzi contemporaneamente", ans: true}, 

 { ques: "Un indirizzo di posta elettronica &egrave; univoco", ans: true}, 

 { ques: "Gli utenti non possono inviare messaggi per conoscenza", ans: false}, 

 { ques: "Facebook permette di condividere informazioni personali", ans: true}, 

 { ques: "Facebook &egrave; un servizio di microblogging", ans: false}, 

 { ques: "Twitter fa parte del Web 2.0", ans: true}, 

 { ques: "Per utilizzare Twitter &egrave; necessario avere un personal computer", ans: false}, 

  { ques: "Chiunque pu&ograve; creare gratuitamente un blog", ans: true}, 

 { ques: "Un blog viene utilizzato per effettuare un collegamento sincrono con un altro utente", ans: false}, 

 { ques: "Un blog viene utilizzato per cercare pagine di argomenti specifici", ans: false}, 

 { ques: "Un blog viene utilizzato per condividere riflessioni personali", ans: true}, 

 { ques: "Ogni forum tratta di argomenti specifici", ans: false}, 

 { ques: "In un forum si pu&ograve; scrivere sempre quello che si vuole", ans: false}, 

 { ques: "Per scrivere su un forum &egrave; necessario registrarsi", ans: true}, 

 { ques: "Per scrivere su un forum &egrave; necessario seguire alcune regole", ans: true}, 

 { ques: "Un flame &egrave; il messaggio pi&ugrave; letto", ans: false}, 


        ],


        fill:[
                { ques: "Le pagine Web possono essere visualizzate con un .......... sul video dei computer degli utenti.", ans: "browser"},
				
				{ ques: "In un sito Internet i salti da un documento all'altro vengono attivati attraverso un ...........", ans: "link"},
				
				{ ques: "La pagina iniziale di un sito Internet si chiama.............", ans: "Home Page"},
				
				{ ques: "L'indirizzo di un sito Internet si chiama .......... perch&egrave; serve a identificare le risorse residenti sui vari computer collegati alla rete.", ans: "URL"},
 
 				{ ques: "Il protocollo standard ........... &egrave; utilizzato per la trasmissione delle informazioni sul Web.", ans: "HTTP"},

 				{ ques: "La posta elettronica viene trasferita mediante l'uso di un .................. di comunicazione.", ans: "protocollo"},

 				{ ques: "Il termine ............... indica un'attivit&agrave; che non richiede la connessione contemporanea degli utenti.", ans: "asincrona"},

 				{ ques: "Quando si vuole scaricare la propria posta sono necessari: .................. e password", ans: "username"},

 				{ ques: "Una chat &egrave; un collegamento in modalit&agrave; .....................", ans: "sincrona"},


        ] 


        };

	var options = {
			title: "Pro.SIA - Informatica e processi aziendali - Classe 3<br />8. Reti e comunicazione",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
			intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA3.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctr+, Ctr-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});