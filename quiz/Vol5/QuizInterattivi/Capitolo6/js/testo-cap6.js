$( function($){

   var quizMulti = {
 
       multiList:[
         {ques: "Che cosa si intende con ERP?", ans: "Un software per soluzioni aziendali integrate.", 
             ansSel : ["Il trattamento automatico dei documenti aziendali.", 
             "L'estrazione dei dati aziendali da database decisionali.", "Un unico grande programma che gestisce tutta l'azienda."]},
             
              {ques: "Quale tra i seguenti &egrave; un vantaggio nell'adozione di un sistema ERP?", ans: "Le decisioni aziendali sono piu' precise e sono eseguite con maggiore velocita'.", 
             ansSel : ["Si hanno costi elevati per l'implementazione della soluzione ERP.", 
             "Riduzione del numero dei fornitori del software."]},
             
              {ques: "Che cosa si intende con sistema CRM?", ans: "Un sistema per gestire le relazioni con i clienti.", 
             ansSel : ["Un sistema per gestire la filiera produttiva.", 
             "Un sistema per soluzioni aziendali integrate.", "Un sistema per gestire le transazioni commerciali on line."]},
             
              {ques: "Quale tra i seguenti &egrave; un vantaggio nell'adozione di un sistema CRM?", ans: "Ridurre il costo del marketing e del servizio clienti.", 
             ansSel : ["Diminuire i contatti con i clienti.", 
             "Gestire i clienti in modo indipendente dal marketing, dal servizio clienti e dal supporto tecnico."]},
             
             
	    
       ],
	
   
   tf:[
  
 { ques: "Alla base di un sistema ERP c'&egrave; un database come deposito di dati comune ai diversi moduli", ans: true}, 
 
 { ques: "I moduli di un sistema ERP presentano interfacce diverse tra loro", ans: false},
 
 { ques: "I sistemi ERP non sono configurabili", ans: false},
 
 { ques: "Al crescere della personalizzazione crescono i costi di realizzazione e di manutenzione", ans: true},
 
  { ques: "Al crescere della personalizzazione aumenta l'affidabilit&agrave; del sistema", ans: false},

  { ques: "Il costo di conservazione di un cliente &egrave; inferiore a quello per acquisire un nuovo cliente", ans: true},

  { ques: "La gestione delle relazioni con il cliente si basa su prodotti software sofisticati", ans: false},

  { ques: "La gestione delle relazioni con il cliente &egrave; una precisa strategia aziendale che pone attenzione alle esigenze del cliente", ans: true},

  { ques: "Il CRM riguarda solo gli addetti alle vendite e il marketing", ans: false},

        ],


        };

	var options = {
			title: "PRO.SIA - Informatica e processi aziendali<br />6. Sistemi ERP e CRM",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
			intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA5.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctr+, Ctr-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});