$( function($){

   var quizMulti = {
 
       multiList:[ 
         {ques: "Qual &egrave; la definizione di Tabella?", ans: "Lo schema in base al quale sono organizzati i dati in Access.", 
             ansSel : ["Lo strumento per estrarre i dati secondo i criteri scelti dall'utente.", 
     "Oggetto per presentare i dati su elenchi cartacei.", "Lo strumento per mostrare e permettere l'aggiornamento dei dati mediante finestre."]},
   
       {ques: "Qual &egrave; la definizione di Query?", ans: "Lo strumento per estrarre i dati secondo i criteri scelti dall'utente.", 
             ansSel : ["Lo schema in base al quale sono organizzati i dati in Access.", 
     "Oggetto per presentare i dati su elenchi cartacei.", "Lo strumento per mostrare e permettere l'aggiornamento dei dati mediante finestre."]},
     
       {ques: "Qual &egrave; la definizione di Maschera?", ans: "Lo strumento per mostrare e permettere l'aggiornamento dei dati mediante finestre.", 
             ansSel : ["Lo strumento per estrarre i dati secondo i criteri scelti dall'utente.", 
     "Oggetto per presentare i dati su elenchi cartacei.", "Lo schema in base al quale sono organizzati i dati in Access."]},
    
       {ques: "Qual &egrave; la definizione di Report?", ans: "Oggetto per presentare i dati su elenchi cartacei.", 
             ansSel : ["Lo strumento per estrarre i dati secondo i criteri scelti dall'utente.", 
     "Lo strumento per mostrare e permettere l'aggiornamento dei dati mediante finestre.", "Lo schema in base al quale sono organizzati i dati in Access."]},
     
      {ques: "Qual &egrave; la corretta dimensione in byte di un Intero lungo?", ans: "4 byte", 
             ansSel : ["1 byte", 
     "2 byte", "8 byte"]},
     
       {ques: "Qual &egrave; la corretta dimensione in byte di una Precisione singola?", ans: "4 byte", 
             ansSel : ["1 byte", 
     "2 byte", "8 byte"]},
     
       {ques: "Qual &egrave; la corretta dimensione in byte di una Numerazione Automatica?", ans: "4 byte", 
             ansSel : ["1 byte", 
     "2 byte", "8 byte"]},
     
      {ques: "Qual &egrave; la corretta dimensione in byte di una Precisione doppia?", ans: "8 byte", 
             ansSel : ["1 byte", 
     "2 byte", "4 byte"]},
     
      {ques: "Per definire una nuova tabella, dopo aver selezionato la scheda Crea nella barra multifunzione, quale pulsante si pu&ograve; scegliere?", ans: "Tabella", 
             ansSel : ["Struttura query", 
     "Creazione guidata Query"]},
     
      {ques: "Con riferimento alla griglia della finestra QBE, qual &egrave; il contenuto della riga Campo?", ans: "Nome della colonna da presentare nella tabella risultato.", 
             ansSel : ["Indicazione se il campo deve essere visualizzato nella tabella risultato.", 
     "Valore per i criteri di selezione.", "Indicazione se il campo e' chiave di ordinamento crescente o decrescente."]},
  
    {ques: "Con riferimento alla griglia della finestra QBE, qual &egrave; il contenuto della riga Ordinamento?", ans: "Indicazione se il campo e' chiave di ordinamento crescente o decrescente.", 
             ansSel : ["Indicazione se il campo deve essere visualizzato nella tabella risultato.", 
     "Valore per i criteri di selezione.", "Nome della colonna da presentare nella tabella risultato."]},
  
      {ques: "Con riferimento alla griglia della finestra QBE, qual &egrave; il contenuto della riga Mostra?", ans: "Indicazione se il campo deve essere visualizzato nella tabella risultato.", 
             ansSel : ["Nome della colonna da presentare nella tabella risultato.", 
     "Valore per i criteri di selezione.", "Indicazione se il campo e' chiave di ordinamento crescente o decrescente."]},
   
      {ques: "Con riferimento alla griglia della finestra QBE, qual &egrave; il contenuto della riga Criteri?", ans: "Valore per i criteri di selezione.", 
             ansSel : ["Nome della colonna da presentare nella tabella risultato.", 
     "Indicazione se il campo deve essere visualizzato nella tabella risultato.", "Indicazione se il campo e' chiave di ordinamento crescente o decrescente."]},
     
      {ques: "Per produrre l'elenco dei movimenti di un soggetto di cui si conosce il codice in Anagrafica, dopo aver inserito le due tabelle Anagrafica e Movimenti sulla finestra della QBE:", ans: "Bisogna trascinare tutti i campi di Movimenti e selezionare il codice voluto nella riga Criteri.", 
             ansSel : ["Bisogna trascinare il campo Codice di Anagrafica nella griglia per poter selezionare il soggetto interessato e quindi tutti i campi di Anagrafica e Movimenti necessari.", 
     "Bisogna trascinare tutti i campi di Anagrafica e di Movimenti.", "Bisogna trascinare tutti i campi di Anagrafica e selezionare il codice voluto, al resto provvede il sistema."]},
     
      {ques: "&Egrave; possibile costruire un'associazione uno a uno tra Anagrafica e Movimenti?", ans: "Si, e' sufficiente attribuire alla proprieta' Indicizzato del campo Codice di Movimenti il valore Si (duplicati non ammessi) ma in tale caso per ogni anagrafica si potra' introdurre un solo movimento.", 
             ansSel : ["Si, basta selezionare uno a uno nella maschera Modifica relazioni.", 
     "No, l'associazione tra Anagrafica e Movimenti e' uno a molti.", "Si, e' sufficiente attribuire alla proprieta' Indicizzato del campo Codice di Movimenti il valore Si (duplicati ammessi)."]},
     
      {ques: "Le sottomaschere sono particolarmente utili per visualizzare i dati di tabelle tra le quali esiste:", ans: "Una relazione uno a molti (la maschera principale per i dati della tabella a uno).", 
             ansSel : ["Nessuna relazione.", 
     "Una relazione molti a molti.", "Una relazione molti a uno (la maschera principale per i dati della tabella a molti)."]},
     
      {ques: "Se in una maschera basata su una query si cerca di modificare il valore contenuto nel campo Importo:", ans: "La variazione si trasmette al valore del campo Importo di Movimenti.", 
             ansSel : ["Non succede nulla: la maschera serve solo a visualizzare i dati prodotti dalla query.", 
     "Viene variato il corrispondente valore nella query senza ulteriori effetti sulla tabella originale.", "Il sistema non permette di modificare il valore di una casella in una maschera."]},
     
     {ques: "Per identificare il numero medio di movimenti effettuato dai soggetti di Anagrafica:", ans: "Bisogna costruire una query Q basata su un'altra query P. P deve essere costruita in modo da contenere codice e numero di movimenti effettuati per tutti i soggetti di anagrafica.", 
             ansSel : ["Non c'&egrave; modo di saperlo con le query.", 
     "Basta costruire un report con l'elenco dei movimenti per cliente e fare un calcolo.", "Basta costruire una query con raggruppamento basata sulla tabella Movimenti e usare nella riga delle formule le funzioni di aggregazione media e conteggio."]},
     
       {ques: "A quale operazione relazionale corrisponde la seguente query su Tabella? <br /> <img src='images/img8.png' width='500' />", ans: "La selezione di Tabella per Campo1 = valore.", 
             ansSel : ["La proiezione di Tabella su Campo1.", 
     "Nessuna, viene visualizzata l'intera tabella.", "Errore: Tabella.* non e' un nome legale per Campo."]},
  
     {ques: "Quale elenco viene prodotto dalla seguente interrogazione? <br /> <img src='images/img10.png' width='500' />", ans: "L'elenco ordinato per cognome delle persone di Firenze in anagrafica con nome, cognome e indirizzo.", 
             ansSel : ["L'elenco ordinato per cognome delle persone in anagrafica con nome cognome indirizzo.", 
     "L'elenco delle persone in anagrafica, della citta' scelta, con nome e cognome.", "L'elenco delle persone di Firenze in anagrafica con nome e cognome e indirizzo."]},
    
        {ques: "Quale elenco viene prodotto dalla seguente interrogazione? <br /> <img src='images/img12.png' width='500' />", ans: "Nome e Cognome delle persone in anagrafica alle quali non sono associati movimenti O hanno uno o piu' movimenti senza importo, a condizione che il join tra le tabelle sia un join esterno opportuno.", 
             ansSel : ["Nome e Cognome delle persone in anagrafica alle quali non sono associati movimenti E che hanno uno o piu' movimenti senza importo, a condizione che il join tra le tabelle sia un join esterno opportuno.", 
     "Nome e Cognome delle persone in anagrafica alle quali non sono associati movimenti O che hanno uno o piu' movimenti con importo a zero, a condizione che il join tra le tabelle sia un join esterno opportuno.", "Nome e Cognome delle persone in anagrafica alle quali non sono associati movimenti E che hanno uno o piu' movimenti con importo a zero, a condizione che il join tra le tabelle sia un join esterno opportuno."]},
 
        {ques: "Quale elenco viene prodotto dalla seguente interrogazione? <br /> <img src='images/img14.png' width='500' />", ans: "Una sola riga con numero e somma dei versamenti di Giuseppe Garinei.", 
             ansSel : ["L'elenco dei versamenti di Giuseppe Garinei completato con numero e somma degli importi.", 
     "L'elenco dei versamenti raggruppati per nome e cognome.", "L'elenco dei versamenti raggruppati per causale."]},
   
        {ques: "Quale elenco viene prodotto dalla seguente interrogazione? <br /> <img src='images/img15.png' width='500' />", ans: "L'elenco dei prelievi delle persone con cognome che inizia per A con: nome, cognome, data e importo.", 
             ansSel : ["L'elenco dei prelievi delle persone con cognome che inizia per A con: nome, data e importo.", 
     "L'elenco dei prelievi delle persone con cognome che inizia per A con: cognome, data e importo.", "L'elenco dei prelievi delle persone con cognome che inizia per A con: nome, cognome, data, importo e causale."]},
   
            {ques: "Quale elenco viene prodotto dalla seguente interrogazione? <br /> <img src='images/img16.png' width='500' />", ans: "Gli stipendi di Mario Rossi, posteriori al 2017, incrementati del 10%, con data e nuovo importo.", 
             ansSel : ["L'elenco dei movimenti di Mario Rossi con data, importo e causale, aumentati del 10%.", 
     "L'elenco degli stipendi di Mario Rossi, posteriori al 2017, con data, importo e causale.", "L'elenco dei prelievi di Mario Rossi effettuati nel 2018, incrementati del 10%."]}, 
       	
       	    {ques: "Quale elenco viene prodotto dalla seguente interrogazione? <br /> <img src='images/img20.png' width='500' />", ans: "L'elenco dei versamenti, di importo superiore a 5000,con nome, cognome, data e importo.", 
             ansSel : ["L'elenco dei movimenti di importo superiore a 5000, con nome, cognome, data e importo.", 
     "L'elenco dei versamenti, di importo superiore a 5000, con nome, cognome, data, importo e causale.", "L'elenco dei versamenti con nome, cognome, data e importo."]},
 
       		
       		  {ques: "Quale elenco viene prodotto dalla seguente interrogazione? <br /> <img src='images/img21.png' width='500' />", ans: "L'elenco delle persone in anagrafica della citta' scelta con nome e cognome.", 
             ansSel : ["L'elenco delle persone in anagrafica con nome cognome e indirizzo.", 
     "L'elenco delle persone in anagrafica con nome cognome.", "L'elenco delle persone in anagrafica della citta' scelta con nome e cognome e indirizzo."]},
       	
       		  {ques: "Quale elenco viene prodotto dalla seguente interrogazione? <br /> <img src='images/img22.png' width='500' />", ans: " L'elenco dei movimenti di Giacomo Arcangeli, con data, importo e causale.", 
             ansSel : ["L'elenco dei movimenti di Giacomo Arcangeli, con data, importo e causale, ordinati per data.", 
     "L'elenco dei versamenti di Giacomo Arcangeli, con data, importo e causale.", "L'elenco dei versamenti di Giacomo Arcangeli, con data, importo e causale, ordinati per data."]},

      {ques: "A che cosa serve una query di creazione tabella?", ans: "Per creare una nuova tabella (struttura e dati) estraendo i dati da una o più tabelle esistenti.",
       ansSel: ["Per creare la struttura di nuove tabelle nel database.",
       "Per creare una nuova tabella (struttura e dati) estraendo i dati da una sola tabella.", "Per creare una nuova tabella prelevando i dati da un foglio Excel o da altre fonti esterne."]
                      },

      {ques: "Quale funzionalità &egrave; svolta da una query di accodamento?", ans: "Aggiunge righe a una tabella esistente copiando i dati da un’altra tabella.",
          ansSel: ["Permette di aggiungere record a una tabella esistente con una maschera.",
              "Crea una nuova tabella contenente solo una parte prefissata di dati prelevati da una tabella esistente.", "Aggiunge righe a una tabella esistente togliendole da un’altra tabella."]
        },


        
       ],
	
   tf:[
  
 { ques: "Non &egrave; possibile stabilire legami tra una tabella di Excel e una di Access", ans: false}, 
 
 { ques: "Una tabella Excel pu&ograve; essere importata in Access", ans: true},
 
 { ques: "Una tabella Excel pu&ograve; essere solo visualizzata da Access con un collegamento", ans: false},
 
  { ques: "Una tabella di Excel pu&ograve; essere vista e modificata da Access con un collegamento", ans: true},


        ],


        };

	var options = {
			title: "PRO.SIA Informatica e processi aziendali - Classe 4<br />4. Access",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
            intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA4.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctr+, Ctr-)</center>",
			allRandom: true, 
	};

	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
	});