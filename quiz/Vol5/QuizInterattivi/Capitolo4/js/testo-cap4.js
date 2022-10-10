$( function($){

   var quizMulti = {
 
       multiList:[
 			{ques: "Qual &egrave; il corrispondente numero di porta prefissato del servizio <i>ftp</i>?", ans: "21", 
             ansSel : ["110", 
             "25", "80"]},
  
			{ques: "Qual &egrave; il corrispondente numero di porta prefissato del servizio <i>ssh</i>?", ans: "22", 
             ansSel : ["110", 
             "25", "80"]},
  
 			{ques: "Qual &egrave; il corrispondente numero di porta prefissato del servizio <i>smtp</i>?", ans: "25", 
             ansSel : ["110", 
             "21", "80"]},
  
 		{ques: "Qual &egrave; il corrispondente numero di porta prefissato del servizio <i>http</i>?", ans: "80", 
             ansSel : ["110", 
             "21", "22"]},
             
             	{ques: "Qual &egrave; il corrispondente numero di porta prefissato del servizio <i>pop3</i>?", ans: "110", 
             ansSel : ["80", 
             "21", "22"]},

   			{ques: "Con quale comando &egrave; possibile verificare il corretto funzionamento dei nomi associati alle macchine dichiarate nel file <i> /etc/hosts</i>?", ans: "ping", 
             ansSel : ["ifconfig", 
             "iptables", "netstat"]},
  
 			{ques: "Qual &egrave; il contenuto della cartella <i>/etc/init.d</i>?", ans: "script di avvio", 
             ansSel : ["documenti di rete", 
             "file di configurazione", "log del sistema"]},
             
             {ques: "Qual &egrave; il contenuto della cartella <i>/etc</i>?", ans: "file di configurazione", 
             ansSel : ["documenti di rete", 
             "script di avvio", "log del sistema"]},
             
                {ques: "Qual &egrave; il contenuto della cartella <i>/var/log</i>?", ans: "log del sistema", 
             ansSel : ["documenti di rete", 
             "script di avvio", "file di configurazione"]},
             
                     {ques: "Qual &egrave; il contenuto della cartella <i>/var/www</i>?", ans: "documenti di rete", 
             ansSel : ["log del sistema", 
             "script di avvio", "file di configurazione"]},
       
             {ques: "La stringa <i> acl 	retelocale 	src</i> 	192.168.10.0/255.255.255.0 nel file <i>squid.conf </i>", ans: "Consente l'accesso al proxy all'host 192.168.10.24", 
             ansSel : ["Vieta l'accesso all'host 192.168.10.1", 
             "Consente l'accesso solamente all'host 192.168.0.10", "Consente l'accesso a tutte le interfacce di rete con netmask 255.255.255.0"]},
             
             {ques: "Il comando <i>iptables</i> &ndash;A INPUT &ndash;<i>p tcp &ndash;j</i> ACCEPT ", ans: "Permette il transito di tutti i pacchetti in entrata.", 
             ansSel : ["Blocca tutti i pacchetti in entrata.", 
             "Blocca tutte le connessioni che utilizzano il protocollo tcp.", "Blocca tutte le connessioni che utilizzano il protocollo udp."]},
             
           
   
       ],
	
  
   tf:[
  
 { ques: "Il protocollo FTP permette di trasferire file", ans: true}, 
 
 { ques: "Il protocollo FTP utilizza solo Internet per trasferire file ", ans: false}, 
 
  { ques: "FTP permette di trasferire file tra due host qualsiasi ", ans: true}, 
 
 { ques: "Esistono sia client che server FTP", ans: true}, 
 
 { ques: "Tutti i siti utilizzando un server Web ", ans: true}, 
 
 { ques: "Tutti i siti utilizzano Apache", ans: false}, 
 
  { ques: "Apache &egrave; un server Web", ans: true}, 
 
 { ques: "Un browser &egrave; un client Web ", ans: true}, 

 { ques: "Ogni utente Linux possiede un indirizzo di posta elettronica ", ans: true}, 
 
 { ques: "Il protocollo utilizzato per ricevere la posta &egrave; diverso da quello utilizzato per inviarla", ans: true}, 
 
  { ques: "Un client di posta non pu&ograve; inviare messaggi di posta a un altro client", ans: false}, 
 
 { ques: "Un server di posta &egrave; installabile su qualsiasi computer ", ans: true}, 

 { ques: "Non &egrave; possibile condividere una stampante tra un sistema Linux e uno Windows ", ans: false}, 
 
 { ques: "Utilizzando <i>samba</i> &egrave; possibile condividere un file ", ans: true}, 
 
  { ques: "Utilizzando <i>samba</i> &egrave; possibile modificare un file memorizzato su un computer remoto ", ans: false}, 
 
 { ques: "<i>Samba</i> &egrave; il servizio <i>nfs</i> per Windows ", ans: false}, 
 
  { ques: "Tutte le reti devono avere un server DHCP ", ans: false}, 
 
 { ques: "Ogni computer &egrave; un client DHCP ", ans: true}, 

 { ques: "Gli indirizzi assegnati dal DHCP sono dinamici ", ans: true}, 
 
 { ques: "Gli indirizzi assegnati dal DHCP sono statici ", ans: false}, 




        ],


        fill:[
                { ques: "..................... significa tradurre nomi di dominio in indirizzi IP", ans: "risolvere"},
				
				{ ques: "Memorizzare un ..................... &egrave; pi&ugrave; semplice che memorizzare un indirizzo IP", ans: "dominio"},
				
				{ ques: "Bind &egrave; un particolare server .....................", ans: "DNS"},
				
				{ ques: "Un host pu&ograve; possedere un nome e vari .....................", ans: "alias"},
				
				   { ques: "Utilizzando <i>nfs</i> &egrave; possibile ............. una porzione del proprio filesystem", ans: "condividere"},
				
				{ ques: "Si pu&ograve; utilizzare un filesystem di rete utilizzando il comando .............", ans: "mount"},
				
				{ ques: "Chiunque pu&ograve; ............. un filesystem di rete", ans: "montare"},
				
		{ ques: "Il protocollo <i>samba</i>  prevede la ............. degli utenti", ans: "autenticazione"},
				
				   { ques: "<i>Samba</i>  permette di condividere risorse in reti di tipo .............", ans: "misto"},
				
				{ ques: "<i>Nobody</i> indica l'utente .............", ans: "generico"},
				
				{ ques: "<i>Samba</i> divide la rete in ............. di lavoro", ans: "gruppi"},
		
		{ ques: "Un insieme di regole &egrave; chiamato ...................", ans: "catena"},
				
				   { ques: "Un firewall utilizza ................... per stabilire quali pacchetti bloccare.", ans: "regole"},
				
				{ ques: "Un firewall permette di ................... un pacchetto in base all'indirizzo di provenienza.", ans: "filtrare"},
				
				{ ques: "Un firewall filtra i ................... in base a dati contenuti nell'header.", ans: "pacchetti"},

		
        ], 


        };

	var options = {
			title: "PRO.SIA - Informatica e processi aziendali<br />4. Comandi per server, sicurezza e crittografia",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
			intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA5.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctr+, Ctr-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});