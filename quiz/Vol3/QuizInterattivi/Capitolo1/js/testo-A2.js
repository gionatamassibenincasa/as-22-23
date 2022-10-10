$( function($){

   var quizMulti = {
 
       multiList:[
         {ques: "Quale delle seguenti definizioni corrisponde al significato del termine <i>outsourcing</i>?", ans: "L'affidamento di alcune parti gestionali del sistema informativo ad aziende e societa' di servizi esterne.", 
             ansSel : ["L'acquisizione di informazioni da banche dati esterne all'azienda.", 
             "L'acquisto di software per il sistema informatico.", "La progettazione del sistema informativo nelle aziende che hanno molte filiali."]},
             
              {ques: "Che cosa si intende con ERP?", ans: "Un software per soluzioni aziendali integrate.", 
             ansSel : ["Il trattamento automatico dei documenti aziendali.", 
             "Un unico grande programma che gestisce tutta l'azienda.", "L'estrazione dei dati aziendali da database decisionali."]},
             
                           		
  	          
       ],
	
   
   tf:[
  
 { ques: "Il sistema informativo aziendale &egrave; l'insieme delle attrezzature hardware e software di un'azienda", ans: false}, 
 
  { ques: "Il sistema informatico &egrave; l'insieme delle risorse tecnologiche, delle persone che le utilizzano e delle applicazioni aziendali", ans: true}, 

 { ques: "Le procedure e le applicazioni informatiche non possono essere utilizzate negli ambiti decisionali dell'azienda", ans: false}, 

 { ques: "I dati sono una materia prima per l'azienda", ans: true}, 

        ],

        };

	var options = {
			title: "Pro.SIA - Informatica e processi aziendali - Classe 3<br />1. Processi aziendali e sistema informatico",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
            intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA3.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctr+, Ctr-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});