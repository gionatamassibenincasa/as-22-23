$( function($){

   var quizMulti = {
 
       multiList:[
         {ques: "Quale delle seguenti frasi esprime meglio la definizione di <i>relazione di grado 2</i>?", ans: "Una tabella con due colonne.", 
             ansSel : ["Una tabella bidimensionale.", 
     "Un sottoinsieme di un qualsiasi insieme.", "Una tabella con due righe."]},
     
             {ques: "Se il dominio dell'attributo A1 &egrave; formato da un insieme di 5 oggetti e quello dell'attributo A2 ne contiene 3, che cosa si pu&ograve; dire in merito alla cardinalit&agrave; di una relazione con attributi A1 e A2?", ans: "La cardinalita' e' minore o uguale a 15.", 
             ansSel : ["La cardinalita' e' 25.", 
     "La cardinalita' e' minore di 15.", "La cardinalita' e' minore o uguale a 8."]},
     
      {ques: "Qual &egrave; la definizione corretta di <i>grado</i>?", ans: "Numero delle colonne della tabella.", 
             ansSel : ["Insieme di n-uple.", 
     "Riga di una tabella.", "Attributo che identifica una n-upla."]},
   
      {ques: "Qual &egrave; la definizione corretta di <i>dominio</i>?", ans: "Insieme dei valori assunti da un attributo.", 
             ansSel : ["Insieme di n-uple.", 
     "Riga di una tabella.", "Attributo che identifica una n-upla."]},
   
      {ques: "Qual &egrave; la definizione corretta di <i>relazione</i>?", ans: "Insieme di n-uple.", 
             ansSel : ["Numero delle colonne della tabella.", 
     "Riga di una tabella.", "Attributo che identifica una n-upla."]},
   
      {ques: "Qual &egrave; la definizione corretta di <i>tupla</?", ans: "Riga di una tabella.", 
             ansSel : ["Insieme di n-uple.", 
     "Numero delle colonne della tabella.", "Attributo che identifica una n-upla."]},
  
      {ques: "Qual &egrave; la definizione corretta di <i>chiave</i>?", ans: "Attributo che identifica una n-upla.", 
             ansSel : ["Insieme di n-uple.", 
     "Numero delle colonne della tabella.", "Riga di una tabella."]},
     
      {ques: "Quale delle seguenti frasi esprime la definizione di <i>chiave di una relazione</i>?", ans: "Un attributo o un insieme di attributi che permettono di distinguere tra le righe della relazione.", 
             ansSel : ["Un attributo numerico.", 
     "Un attributo senza valori duplicati.", "Un attributo non derivato da altri."]},
     
      {ques: "In riferimento a una tabella con i dati sulle prove degli studenti, l'oggetto Voto &egrave;:", ans: "un campo", 
             ansSel : ["una tabella", 
     "una chiave primaria"]},
     
      {ques: "In riferimento a una tabella con i dati sulle prove degli studenti, l'oggetto Identificativo della prova &egrave;:", ans: "una chiave primaria", 
             ansSel : ["una tabella", 
     "un campo"]},
     
      {ques: "In riferimento a una tabella con i dati sulle prove degli studenti, l'oggetto Data della prova &egrave;:", ans: "un campo", 
             ansSel : ["una tabella", 
     "una chiave primaria"]},
     
      {ques: "In riferimento a una tabella con i dati sulle prove degli studenti, l'oggetto Prove &egrave;:", ans: "una tabella", 
             ansSel : ["un campo", 
     "una chiave primaria"]},
     
      {
          ques: "Un'associazione (1:N) tra due entit&agrave; E1 ed E2, dalle quali derivano le tabelle: <br /> T1 (K1, A, B, C) e, rispettivamente, T2 (K2, D) <br />(dove K1 e K2 sono le chiavi)<br /> viene tradotta nel modello relazionale con:", ans: "T1 (K1, A, B, C);  T2 (K2, D, K1);", 
             ansSel : ["T1 (K1, A, B, C);  T2 (K2, D);  T3 (K1,K2);", 
     "T1 (K1, A, B, C, K2);  T2 (K2, D);", "T1 (K1, A, B, C, K2);  T2 (K2, D, K1)."]},
     
      {
          ques: "Un'associazione (1:N) tra due entit&agrave; E1 ed E2, dalle quali derivano le tabelle: <br /> T1 (K1, A, B, C) e, rispettivamente, T2 (K2, D)  <br />(dove K1 e K2 sono le chiavi)<br /> ha attributi A1 e A2. Come viene tradotta nel modello relazionale?", ans: "T1 (K1, A, B, C);  T2 (K2, D, K1, A1, A2).", 
             ansSel : ["T1 (K1, A, B, C);  T2 (K2, D);  T3 (K1, K2, A1, A2);", 
     "T1 (K1, A, B, C, K2);  T2 (K2, D, K1, A1, A2);", "T1 (K1, A, B, C, A1, A2);  T2 (K2, D, K1);"]},
     
      {
          ques: "Un'associazione (N:N) tra due entit&agrave; E1 ed E2, dalle quali derivano le tabelle: <br /> T1 (K1, A, B, C) e, rispettivamente, T2 (K2, D)  <br />(dove K1 e K2 sono le chiavi)<br /> viene rappresentata nel modello relazionale con:", ans: "T1 (K1, A, B, C);  T2 (K2, D);  T3(K1,K2);", 
             ansSel : ["T1 (K1, A, B, C, K2);  T2 (K2, D, K1);", 
     "T1 (K1, A, B, C);  T2 (K2, D, K1);", "T1 (K1, A, B, C, K2);  T2 (K2, D)."]},
     
      {
          ques: "Un'associazione 1:1 tra due entit&agrave; E1 ed E2, dalle quali derivano le tabelle: <br /> T1 (K1, A, B, C) e, rispettivamente, T2 (K2, D)  <br />(dove K1 e K2 sono le chiavi)<br /> con partecipazione facoltativa di E1 e obbligatoria di E2, viene tradotta nel modello relazionale con:", ans: "T1 (K1, A, B, C);  T2 (K2, D, K1);", 
             ansSel : ["T (K1, K2, A, B, C, D)", 
     "T1 (K1, A, B, C);  T2 (K2, D)  T3 (K1, K2)", "T1 (K1, A, B, C, K2);  T2 (K2, D);"]},
     
      {ques: "Data la tabella anagrafica A (Codice, Cognome, Citta), per ottenere l'elenco delle anagrafiche dei soggetti che risiedono a Genova, bisogna eseguire l'interrogazione:", ans: "Selezione di A per Citta = 'Genova'.", 
             ansSel : ["Proiezione di A su Citta.", 
     "Proiezione di A su Codice.", "Selezione di A per Cognome."]},
     
      {ques: "Le relazioni R e S hanno schema: R(A,B,C) e S(C,D,E). Qual &egrave; lo schema di R left join S?", ans: "T (A, B, R.C, S.C, D, E)", 
             ansSel : ["T (R.C,D,E)", 
     "T (A,B,R.C,D,E)", "T (A, B, R.C)"]},
     
       {ques: "Quale delle seguenti affermazioni esprime meglio la definizione di <i>chiave candidata</i> di una relazione?", ans: "Un attributo (o un insieme minimale di attributi) che identifica in modo univoco una n-upla.", 
             ansSel : ["Un attributo (o un insieme di attributi) che identifica in modo univoco una n-upla.", 
     "Una chiave formata da un solo attributo.", "Un attributo prescelto dal progettista del database."]},
     
       {ques: "Quale tra le seguenti frasi esprime meglio il significato di <i>terza forma normale</i> di una relazione?", ans: "Una relazione in 2FN che elimina la dipendenza transitiva degli attributi dalla chiave.", 
             ansSel : ["La forma normale che elimina la dipendenza transitiva degli attributi dalla chiave.", 
     "Una relazione che rispetta i requisiti fondamentali del modello relazionale.", "La forma normale che elimina la dipendenza parziale degli attributi dalla chiave."]},
     
       {ques: "Quale tra le seguenti frasi esprime meglio il significato di <i>integrit&agrave;</i>?", ans: "Garantire che le operazioni effettuate sul database da utenti autorizzati non provochino una perdita di consistenza ai dati.", 
             ansSel : ["Impedire che il database venga danneggiato da interventi accidentali o non autorizzati.", 
     "I dati contenuti nel database devono essere effettivamente utilizzabili in altri database.", "Gli stessi dati non compaiono pi&ugrave; volte in archivi diversi, cio&egrave; il database &egrave; costituito da archivi integrati di dati."]},
     
     
            		            
       ],
	
   
   tf:[
  
 { ques: "La relazione rappresenta un'associazione tra tabelle", ans: false}, 
 
 { ques: "Ogni n-upla rappresenta un'istanza dell'entit&agrave;", ans: true},
 
 { ques: "Le colonne contengono i valori assunti dagli attributi dell'entit&agrave;", ans: true},
 
 { ques: "Il dominio &egrave; l'insieme dei valori che possono essere assunti da una chiave", ans: false},
        
   { ques: "Gli attributi rappresentano informazioni elementari", ans: true},

 { ques: "Una relazione pu&ograve; avere righe duplicate", ans: false},

 { ques: "La presenza di una chiave primaria garantisce l'assenza di righe duplicate", ans: true},

 { ques: "Il numero di attributi deve essere identico per tutte le righe di una relazione", ans: true},
      
       { ques: "Per rappresentare un'associazione 1: N si aggiunge la chiave dell'entit&agrave; che sta dalla parte N agli attributi dell'entit&agrave; che sta dalla parte 1", ans: false},

 { ques: "Per rappresentare un'associazione 1: N si aggiunge la chiave dell'entit&agrave; che sta dalla parte 1 agli attributi dell'entit&agrave; che sta dalla parte N", ans: true},

 { ques: "Un'associazione N:N non &egrave; rappresentabile nel modello relazionale e si sostituisce con due associazioni 1:N", ans: false},

 { ques: "Un'associazione N:N si rappresenta aggiungendo la chiave della prima entit&agrave; agli attributi della seconda entit&agrave; e viceversa", ans: false},

 { ques: "Un'associazione 1:1 si rappresenta sempre aggregando in un'unica tabella gli attributi delle entit&agrave; associate", ans: false},

 { ques: "Un'associazione 1:1 si rappresenta spesso aggregando in un'unica tabella gli attributi delle entit&agrave; associate", ans: true},

 { ques: "Un'associazione 1:1 con partecipazione facoltativa di un'entit&agrave; si rappresenta aggiungendo agli attributi dell'entit&agrave; con partecipazione obbligatoria la chiave dell'entit&agrave; con partecipazione facoltativa", ans: true},

 { ques: "Un'associazione 1:1 con partecipazione facoltativa di un'entit&agrave; si rappresenta aggiungendo agli attributi dell'entit&agrave; con partecipazione facoltativa la chiave dell'entit&agrave; con partecipazione obbligatoria", ans: false},

 { ques: "Una proiezione non pu&ograve; alterare la cardinalit&agrave; di una relazione", ans: false},

 { ques: "Nella maggior parte dei casi una proiezione non altera la cardinalit&agrave; di una relazione", ans: true},

 { ques: "La selezione non cambia il grado di una relazione", ans: true},

 { ques: "La selezione non cambia mai la cardinalit&agrave; di una relazione", ans: false},

 { ques: "Il join naturale non &egrave; altro che un left join seguito da un'opportuna proiezione", ans: false},

 { ques: "Il left join tra due tabelle produce una tabella che include tutte le righe presenti nel join naturale tra le due tabelle", ans: true},

 { ques: "Il full join di R e S contiene tutte le righe presenti nel left join tra R e S e quelle generate dal right join tra R e S", ans: true},

 {ques: "Nel left join tra due tabelle R ed S, le righe di R senza corrispondenti con righe di S sono completate con valori nulli", ans: true},

 { ques: "La normalizzazione delle relazioni ha lo scopo di prevenire la ridondanza", ans: true},

 { ques: "Le anomalie di aggiornamento, cancellazione, inserimento sono effetti indesiderati della normalizzazione", ans: false},

 { ques: "La normalizzazione non garantisce la conservazione dell'informazione", ans: false},

 { ques: "La normalizzazione &egrave; una tecnica alternativa alla progettazione concettuale", ans: false},
  
   { ques: "Una chiave &egrave; determinante per ogni attributo della relazione", ans: true},

 { ques: "Un insieme di attributi determinante per ogni attributo della relazione &egrave; una chiave candidata", ans: false},

 { ques: "Un attributo determinante per ogni attributo della relazione &egrave; una chiave candidata", ans: true},

 { ques: "Un insieme di attributi &egrave; determinante di ogni attributo che compone l'insieme", ans: true},

 { ques: "L'attributo Codice &egrave; la chiave di Anagrafica ed &egrave; presente come chiave esterna in Movimenti. Se tra le due tabelle sono stati imposti vincoli di integrit&agrave; referenziale, non &egrave; possibile inserire una riga di Anagrafica con un valore di Codice che non sia presente in Movimenti come chiave esterna", ans: false},

 { ques: "L'attributo Codice &egrave; la chiave di Anagrafica ed &egrave; presente come chiave esterna in Movimenti. Se tra le due tabelle sono stati imposti vincoli di integrit&agrave; referenziale, &egrave; possibile cancellare una riga di Anagrafica a condizione che il valore di Codice non sia presente in nessuna riga di Movimenti", ans: true},


        ],



        };

	var options = {
			title: "PRO.SIA Informatica e processi aziendali - Classe 4<br />3. Modello relazionale",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
            intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA4.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctr+, Ctr-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});