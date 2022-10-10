$( function($){

   var quizMulti = {
 
       multiList:[
         {ques: "La struttura di dati nel modello logico deve facilitare", ans: "Le operazioni di manipolazione e di interrogazione.", 
             ansSel : ["La progettazione del modello concettuale.", 
     "La scelta della chiave tra gli attributi di un'entit&agrave;.", "Le operazioni di derivazione del modello fisico."]},
             
              {ques: "Quale tra le seguenti frasi esprime meglio il significato di schema Entity/Relationship?", ans: "Rappresentazione grafica del modello concettuale.", 
             ansSel : ["Rappresentazione grafica del modello logico.", 
             "Rappresentazione grafica del modello fisico.", "Rappresentazione grafica del modello sequenziale."]},
             
              {ques: "Quali sono gli elementi di un modello Entity/Relationship?", ans: "entita', associazioni, attributi", 
             ansSel : ["associazioni", 
             "entita', archivi, dati", "attributi, archivi, grafici"]},
             
              {ques: "Quali delle seguenti definizioni esprime meglio la definizione di associazione?", ans: "Un legame che stabilisce un'interazione tra entita'.", 
             ansSel : ["Un legame che definisce una corrispondenza tra attributi della stessa entita'.", 
             "Un legame che definisce una corrispondenza tra attributi di entita' differenti.", "Una correlazione tra domini di entita'."]},
             
              {ques: "Si consideri l'associazione <i>EssereGenitore</i> definita sull'entit&agrave; <i>Persona</i>. Quale delle seguenti affermazioni &egrave; vera?", ans: "Persona partecipa all'associazione nei due ruoli di Genitore e Figlio.", 
             ansSel : ["Essere Genitore &egrave; un'associazione binaria.", 
             "La partecipazione di Persona &egrave; obbligatoria in entrambe le direzioni."]},
             
               {ques: "Si consideri l'associazione <i>EssereMadre</i> definita sull'entit&agrave; <i>Persona</i> nei due ruoli di Madre e Figlio. Quale delle seguenti affermazioni &egrave; vera?", ans: "Essere Madre e' un'associazione ricorsiva su Persona.", 
             ansSel : ["Essere Madre e' un'associazione binaria tra Madre e Figlio.", 
             "La partecipazione di Persona nel ruolo di Madre e' obbligatoria."]},
             
                            {ques: "Quale dei seguenti termini non esprime le caratteristiche di un attributo?", ans: "istanza", 
             ansSel : ["formato", 
             "dimensione", "opzionalit&agrave;"]},
             
               {ques: "Quale dei seguenti attributi pu&ograve; svolgere la funzione di chiave primaria dell'entit&agrave;?", ans: "Numero di registrazione di una fattura.", 
             ansSel : ["Data di svolgimento della prova di uno studente.", 
             "Citt&agrave; di residenza di una persona.", "Cognome di una persona."]},
             
               {ques: "Quale delle seguenti definizioni esprime meglio la definizione di chiave primaria?", ans: "Un attributo (o un insieme di attributi) che permette di distinguere tra le istanze di un'entita'", 
             ansSel : ["Uno solo tra gli attributi di un'entit&agrave;.", 
             "Il primo attributo riprodotto nello schema E/R.", "Un attributo qualsiasi scelto dal progettista."]},
             
               {ques: "Qual &egrave; la definizione corretta di attributi derivati?", ans: "gli attributi che si ottengono con le elaborazioni", 
             ansSel : ["informazione mancante, inapplicabile o sconosciuta", 
             "un attributo che consente di distinguere un'istanza dall'altra per la stessa entit&agrave;", "insieme dei possibili valori assunti da un attributo"]},
             
               {ques: "Qual &egrave; la definizione corretta di chiave primaria?", ans: "un attributo che consente di distinguere un'istanza dall'altra per la stessa entita'", 
             ansSel : ["informazione mancante, inapplicabile o sconosciuta", 
             "gli attributi che si ottengono con le elaborazioni", "insieme dei possibili valori assunti da un attributo"]},
            
               {ques: "Qual &egrave; la definizione corretta di dominio dell'attributo?", ans: "insieme dei possibili valori assunti da un attributo", 
             ansSel : ["informazione mancante, inapplicabile o sconosciuta", 
             "gli attributi che si ottengono con le elaborazioni", "un attributo che consente di distinguere un'istanza dall'altra per la stessa entit&agrave;"]},
             
               {ques: "Quale dei seguenti elementi non caratterizza un'associazione?", ans: "Il dominio.", 
             ansSel : ["Il nome.", 
             "Il verso di lettura", "La molteplicit&agrave;."]},
             
               {ques: "Per stabilire la natura dell'associazione tra le entit&agrave; E1 ed E2, si rappresentano E1 ed E2 come insiemi e si collegano con archi gli elementi di E1 ed E2 corrispondenti. I collegamenti uscenti da E1 sono 0..1 e quelli uscenti da E2 sono 1..N. Quale delle seguenti affermazioni &egrave; vera?", ans: "Si tratta di un'associazione N:1 tra E1 ed E2.", 
             ansSel : ["Si tratta di un'associazione 1:1 tra E1 ed E2.", 
             "Si tratta di un'associazione 1:N tra E1 ed E2.", "Si tratta di un'associazione N:N tra E1 ed E2."]},
             
               {ques: "Per stabilire la natura dell'associazione tra le entit&agrave; E1 ed E2, si rappresentano E1 ed E2 come insiemi e si collegano con archi gli elementi di E1 ed E2 corrispondenti. I collegamenti uscenti da E1 sono 0..N e quelli uscenti da E2 sono 2..N. Quali delle seguenti affermazioni &egrave; vera?", ans: "La partecipazione di E1 all'associazione e' facoltativa.", 
             ansSel : ["La partecipazione di E1 all'associazione e' obbligatoria.", 
             "La partecipazione di E2 all'associazione e' facoltativa."]},
             
              {ques: "Per stabilire la natura dell'associazione tra le entit&agrave; E1 ed E2, si rappresentano E1 ed E2 come insiemi e si collegano con archi gli elementi di E1 ed E2 corrispondenti. I collegamenti uscenti da E1 sono 1..1 e quelli uscenti da E2 sono 0..1. Quale delle seguenti affermazioni &egrave; vera?", ans: "Si tratta di un'associazione 1:1 tra E1 ed E2.", 
             ansSel : ["Si tratta di un'associazione 1: N tra E1 ed E2.", 
             "Si tratta di un'associazione N:1 tra E1 ed E2.", "Si tratta di un'associazione N:N tra E1 ed E2."]},
             
              {ques: "Per stabilire la natura dell'associazione tra le entit&agrave; E1 ed E2, si rappresentano E1 ed E2 come insiemi e si collegano con archi gli elementi di E1 ed E2 corrispondenti. I collegamenti uscenti da E1 sono 1..N e quelli uscenti da E2 sono 0..1. Quale delle seguenti affermazioni &egrave; vera?", ans: "La partecipazione di E1 all'associazione e' obbligatoria.", 
             ansSel : ["Si tratta di un'associazione 1:1 tra E1 ed E2.", 
             "La partecipazione di E1 all'associazione e' facoltativa."]},
             
              {ques: "In quale tipo di associazione ogni istanza della prima entit&agrave; si pu&ograve; associare a una o pi&ugrave; istanze della seconda entit&agrave; e viceversa?", ans: "molti a molti", 
             ansSel : ["uno a uno", 
             "uno a molti"]},
             
              {ques: "In quale tipo di associazione ogni istanza della prima entit&agrave; si pu&ograve; associare a una o pi&ugrave; istanze della seconda entit&agrave;, mentre ogni istanza della seconda entit&agrave; si deve associare a una sola istanza della prima?", ans: "uno a molti", 
             ansSel : ["uno a uno", 
             "molti a molti"]},
              
              {ques: "Tra E1 ed E2 esiste un'associazione di nome <i>Leggere</i>, di tipo uno a molti, con partecipazione obbligatoria per E1, facoltativa per E2. Come si pu&ograve; verificare l'associazione applicando le regole di lettura?", ans: "Ogni E2 puo' essere letto da uno e un solo E1.", 
             ansSel : ["Ogni E1 puo' leggere uno o piu' E2.", 
             "Ogni E1 deve leggere uno e un solo E2."]},
             
              {ques: "Tra E1 ed E2 esiste un'associazione di nome <i>Leggere</i>, di tipo uno a uno, con partecipazione facoltativa per E1, obbligatoria per E2. Come si pu&ograve; verificare l'associazione applicando le regole di lettura?", ans: "Ogni E1 puo' leggere uno e un solo E2.", 
             ansSel : ["Ogni E1 puo' leggere uno o piu' E2.", 
             "Ogni E1 deve leggere uno e un solo E2."]},
             
              {ques: "Tra E1 ed E2 esiste un'associazione di nome <i>Leggere</i>, di tipo molti a molti, con partecipazione facoltativa per E1, facoltativa per E2. Come si pu&ograve; verificare l'associazione applicando le regole di lettura? ", ans: "Ogni E1 puo' leggere uno o piu' E2.", 
             ansSel : ["Ogni E1 deve leggere uno e un solo E2.", 
             "Ogni E1 deve leggere uno o piu' E2."]},
            
            		            
       ],
	
   
   tf:[
  
 { ques: "L'entit&agrave; &egrave; un oggetto che ha un significato solo quando viene considerato in relazione ad altri oggetti", ans: false}, 
 
 { ques: "Un'istanza &egrave; uno specifico esemplare di una entit&agrave;", ans: true},
 
 { ques: "L'associazione &egrave; un legame che stabilisce un'interazione tra gli attributi di una entit&agrave;", ans: false},
 
 { ques: "Gli attributi possono essere propriet&agrave; delle entit&agrave; o delle associazioni", ans: true},
 
  { ques: "Le associazioni molti a molti sono scomponibili in due associazioni uno a uno", ans: false},

 { ques: "Le associazioni molti a molti non sono mai scomponibili", ans: false},

 { ques: "Le associazioni molti a molti sono scomponibili in due associazioni uno a molti", ans: true},

 { ques: "Le associazioni uno a uno sono raggruppabili in associazioni uno a molti", ans: false},

 { ques: "Le associazioni uno a molti sono scomponibili in pi&ugrave; associazioni uno a uno", ans: false},

        ],


        fill:[
                { ques: "Il livello ........ rappresenta l'effettiva installazione degli archivi elettronici.", ans: "fisico"},
				
				{ ques: "Il livello ........ rappresenta la realt&agrave; dei dati e le associazioni tra essi attraverso uno schema.", ans: "concettuale"},
				
				{ ques: "Il livello ....... rappresenta il modo attraverso il quale i dati sono organizzati negli archivi elettronici.", ans: "logico"},
				
 

 				
        ] 


        };

	var options = {
			title: "PRO.SIA Informatica e processi aziendali - Classe 4<br />2. Modello concettuale dei dati",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
            intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA4.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctr+, Ctr-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});