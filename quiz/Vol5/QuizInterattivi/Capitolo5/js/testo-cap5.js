$( function($){

   var quizMulti = {
 
       multiList:[
 		  {ques: "Quale tra i seguenti non &egrave; uno strumento integrato negli <i>smartphone</i>?", ans: "Mouse", 
             ansSel : ["Antenna GPS", 
             "Fotocamera", "Interfaccia WiFi"]},
             
             {ques: "Quale gesto eseguito con le dita sullo schermo touch indica il termine <i>spread</i>?", ans: "ingrandire", 
             ansSel : ["toccare", 
             "trascinare", "rimpicciolire"]},
             
                     {ques: "Quale gesto eseguito con le dita sullo schermo touch indica il termine <i>scroll</i>?", ans: "scorrere", 
             ansSel : ["toccare", 
             "trascinare", "rimpicciolire"]},
             
                          {ques: "Quale gesto eseguito con le dita sullo schermo touch indica il termine <i>drag</i>?", ans: "trascinare", 
             ansSel : ["toccare", 
             "scorrere", "rimpicciolire"]},
             
                               {ques: "Quale gesto eseguito con le dita sullo schermo touch indica il termine <i>rotate</i>?", ans: "ruotare", 
             ansSel : ["toccare", 
             "scorrere", "rimpicciolire"]},
             
                                   {ques: "Quale gesto eseguito con le dita sullo schermo touch indica il termine <i>pinch</i>?", ans: "rimpicciolire", 
             ansSel : ["ruotare", 
             "scorrere", "trascinare"]},
             
                                        {ques: "Quale gesto eseguito con le dita sullo schermo touch indica il termine <i>tap</i>?", ans: "toccare", 
             ansSel : ["ruotare", 
             "scorrere", "trascinare"]},    
             
             {ques: "Qual &egrave; il valore dell'attributo <i>data-role</i> di <i>jQuery mobile</i> che ha il significato di <i>intestazione</i>?", ans: "Header", 
             ansSel : ["Page", 
             "Content", "Footer"]},
             
                    {ques: "Qual &egrave; il valore dell'attributo <i>data-role </i> di <i> jQuery mobile</i> che ha il significato di <i>pagina</i>?", ans: "Page", 
             ansSel : ["Header", 
             "Content", "Footer"]},
             
                             {ques: "Qual &egrave; il valore dell'attributo <i>data-role </i> di <i> jQuery mobile</i> che ha il significato di <i>pi&egrave; di pagina</i>?", ans: "Footer", 
             ansSel : ["Header", 
             "Content", "Page"]},
             
                                 {ques: "Qual &egrave; il valore dell'attributo <i>data-role </i> di <i> jQuery mobile</i> che ha il significato di <i>contenuto</i>?", ans: "Content", 
             ansSel : ["Header", 
             "Page", "Footer"]}, 
  
                         {ques: "Quale tra i seguenti non &egrave; un livello di classificazione degli schermi di dispositivo in Bootstrap?", ans: "xm", 
             ansSel : ["xl", 
             "lg", "md"]},
             
             {ques: "Quale tra i seguenti termini indica un <i>plugin</i> di Bootstrap che permette di creare una sequenza di immagini o altri elementi a scorrimento?", ans: "carousel", 
             ansSel : ["controls", 
             "viewport", "container"]},
             
             {ques: "Quale tra i seguenti &egrave; il dispositivo virtuale usato nell'ambiente di sviluppo Android?", ans: "Emulatore AVD", 
             ansSel : ["Emulatore APP", 
             "Emulatore SDK", "Plug-in ADT"]},
             
           
       ],
	
  
   tf:[
  
 { ques: "I dispositivi mobili hanno una capacit&agrave; di elaborazione paragonabile ai computer", ans: true}, 
 
 { ques: "I dispositivi mobili sono solitamente collegati alla rete Internet", ans: true}, 
 
  { ques: "I dispositivi mobili sono dispositivi di grandi dimensioni", ans: false}, 
 
 { ques: "I dispositivi mobili sono spesso dotati di uno schermo sensibile al tatto", ans: true},
 
 { ques: "Un blocco di contenuti di jQuery Mobile che organizza i dati in una griglia si chiama <i>listview</i>", ans: false}, 
 
  { ques: "La classe <i>ui-grid-c</i> crea una griglia a 4 colonne", ans: true}, 
 
 { ques: "La parola chiave <i>@media</i> rappresenta una <i>media query</i>", ans: true}, 
 
  { ques: "L'orientamento in verticale si chiama <i>landscape</i>", ans: false}, 
 
  { ques: "Android &egrave; un sistema operativo solo per telefoni cellulari", ans: false}, 
 
 { ques: "Android &egrave; un sistema operativo sviluppato da Google", ans: true}, 
 
  { ques: "Android &egrave; un insieme dei servizi Internet utilizzabili con uno smartphone", ans: false}, 
 
  { ques: "Android &egrave; un software <i>open source</i>", ans: true}, 
 




        ],


        fill:[
                { ques: "Il termine ................ indica la modalit&agrave; con la quale gli elementi e gli oggetti sono disposti e organizzati in un documento o in una pagina Web.", ans: "layout"},
				
				{ ques: "Il design .............. consente di realizzare pagine che si adattano automaticamente al dispositivo utilizzato e alla risoluzione del display.", ans: "responsivo"},
				
				{ ques: "Il termine ................. indica un insieme di librerie software che consentono di scrivere codice conciso ed efficiente.", ans: "framework"},
				
				{ ques: "Il termine ........... indica un catalogo on line per la raccolta delle app, organizzati per categorie.", ans: "store"},
				
			
        ], 


        };

	var options = {
			title: "PRO.SIA - Informatica e processi aziendali<br />5. Informatica mobile",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
			intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA5.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctr+, Ctr-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});