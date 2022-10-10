$( function($){

   var quizMulti = {
 
       multiList:[
 			{ques: "Quale delle seguenti istruzioni &egrave; quella corretta per attribuire il risultato dell'espressione <i>n * m</i> alla variabile <i>p</i>?", ans: "p = n * m", 
             ansSel : ["n * m = p", 
             "p << n * m", "p >> n * m"]},
             
  			{ques: "Supponendo che la variabile <i>a</i> di tipo <i>float</i> assuma il valore iniziale 5.0, quale valore assume alla fine del seguente gruppo di istruzioni? <br/> a = a * 4; <br/> a = a * a; <br/> b = &ndash; a;", ans: "400.0", 
             ansSel : ["200.0", 
             "300.0", "100.0"]},
      
      	{ques: "Supponendo che la variabile <i>a</i> di tipo <i>float</i> assuma il valore iniziale 5.0, quale valore assume alla fine del seguente gruppo di istruzioni? <br/> a = a &ndash; 1; <br/> b = a / 2; <br/> a = 8;", ans: "8.0", 
             ansSel : ["2.0", 
             "3.0", "1.0"]},
 
      	{ques: "Supponendo che la variabile <i>a</i> di tipo <i>float</i> assuma il valore iniziale 5.0, quale valore assume alla fine del seguente gruppo di istruzioni? <br/> b= a + 2; <br/> a = (a * a) / 2; <br/> a = 1 / a;", ans: "0.08", 
             ansSel : ["0.04", 
             "0.09", "0.07"]},
    
      	{ques: "Supponendo che la variabile <i>a</i> di tipo <i>int</i> assuma il valore iniziale 3 e che la variabile <i>b</i> di tipo <i>int</i> assuma il valore 0, quale valore assume ciascuna variabile alla fine del seguente gruppo di istruzioni? <br/> a = a * b; <br/> c = (a + 1) * b; <br/> b = b &ndash; c;", ans: "0, 0, 0", 
             ansSel : ["3, 3, 6;", 
             "5, 2, 6;"]},
  
      	{ques: "Supponendo che la variabile <i>a</i> di tipo <i>int</i> assuma il valore iniziale 3 e che la variabile <i>b</i> di tipo <i>int</i> assuma il valore 0, quale valore assume ciascuna variabile alla fine del seguente gruppo di istruzioni? <br/> b = b + 1; <br/> a = b; <br/> c = a + b;", ans: "1, 1, 2", 
             ansSel : ["3, 3, 6;", 
             "5, 2, 6;"]},
       
       	{ques: "Qual &egrave; la descrizione della funzione <i>pow(x,y)</i>?", ans: "Calcola la potenza x alla y", 
             ansSel : ["Calcola il valore di x arrotondato all'intero superiore", 
             "Arrotonda x all'intero inferiore o uguale", "Calcola la radice quadrata di x"]},
    
      	{ques: "Qual &egrave; la descrizione della funzione <i>sqrt(x)</i>?", ans: "Calcola la radice quadrata di x", 
             ansSel : ["Calcola il valore di x arrotondato all'intero superiore", 
             "Arrotonda x all'intero inferiore o uguale", "Calcola la potenza x alla y"]},
    
      	{ques: "Qual &egrave; la descrizione della funzione <i>ceil(x)</i>?", ans: "Calcola il valore di x arrotondato all'intero superiore", 
             ansSel : ["Calcola la radice quadrata di x", 
             "Arrotonda x all'intero inferiore o uguale", "Calcola la potenza x alla y"]},
   
      	{ques: "Qual &egrave; la descrizione della funzione <i>floor(x)</i>?", ans: "Arrotonda x all'intero inferiore o uguale", 
             ansSel : ["Calcola la radice quadrata di x", 
             "Calcola il valore di x arrotondato all'intero superiore", "Calcola la potenza x alla y"]},
             
  			{ques: "Supponendo che <i>x</i> sia di tipo <i>float</i> e <i>y</i> di tipo <i>int</i>, quale delle seguenti istruzioni rappresenta un'operazione di <i>casting</i>?", ans: "y=(int)x;", 
             ansSel : ["y=intx;", 
             "(y)=intx;", "(int)y=x;"]},
       
       	{ques: "Quale tra i seguenti NON &egrave; un tipo utilizzabile per rappresentare i dati numerici non interi?", ans: "long int", 
             ansSel : ["float", 
             "double", "long double"]},
             
  			{ques: "Qual &egrave; l'output del seguente programma, supponendo che da tastiera venga assegnato ad <i>a</i> il valore 3? <br/> <img src='images/Cap9_6a.png' width='280' /><br/>", ans: "4", 
             ansSel : ["3", 
             "5", "6"]},
      
      	{ques: "Qual &egrave; l'output del seguente programma, supponendo che da tastiera venga assegnato ad <i>a</i> il valore 3? <br/> <img src='images/Cap9_6b.png' width='280' /><br/>", ans: "9", 
             ansSel : ["8", 
             "5", "6"]},
     
      	{ques: "Qual &egrave; l'output del seguente programma, supponendo che da tastiera venga assegnato ad <i>a</i> il valore 3 e a <i>b</i> il valore 5? <br/> <img src='images/Cap9_6c.png' width='280' /><br/>", ans: "8", 
             ansSel : ["7", 
             "5", "6"]},
       
      	{ques: "Qual &egrave; l'output prodotto dall'esecuzione del seguente segmento di codice? <br/> <img src='images/Cap9_12.png' width='280' /><br/>", ans: "8", 
             ansSel : ["7", 
             "5", "9"]},
     
      	{ques: "Qual &egrave; l'output prodotto dall'esecuzione del seguente segmento di codice? <br/> <img src='images/Cap9_12b.png' width='280' /><br/>", ans: "5", 
             ansSel : ["7", 
             "8", "9"]},
    
      	{ques: "Che cosa viene scritto in output dall'esecuzione del seguente segmento di programma se <i>x</i> vale 1? <br/> <img src='images/Cap9_13.png' width='280' /><br/>", ans: "2", 
             ansSel : ["7", 
             "5", "4"]},
     
      	{ques: "Che cosa viene scritto in output dall'esecuzione del seguente segmento di programma se <i>x</i> vale 1? <br/> <img src='images/Cap9_14.png' width='280' /><br/>", ans: "2", 
             ansSel : ["7", 
             "5", "9"]},
   
      	{ques: "Che cosa viene scritto in output dall'esecuzione del seguente segmento di programma? <br/> <img src='images/Cap9_15.png' width='280' /><br/>", ans: "10, 20, 40", 
             ansSel : ["20, 30, 40", 
             "30, 40, 50"]},
  
      	{ques: "Che cosa viene scritto in output dall'esecuzione del seguente segmento di programma? <br/> <img src='images/Cap9_16.png' width='280' /><br/>", ans: "10", 
             ansSel : ["20", 
             "30"]},
   
      	{ques: "Che cosa viene scritto in output dall'esecuzione del seguente segmento di programma? <br/> <img src='images/Cap9_17.png' width='280' /><br/>", ans: "1, 3, 5, 7, 9", 
             ansSel : ["2, 4, 6, 8, 10", 
             "1, 2, 3, 4, 5"]},
   
      	{ques: "Che cosa viene scritto in output dall'esecuzione del seguente segmento di programma? <br/> <img src='images/Cap9_18.png' width='280' /><br/>", ans: "9", 
             ansSel : ["2", 
             "7"]},
       
       ],
	
  
   tf:[
  
 { ques: "L'istruzione <br>cout &lt;&lt; a; <br>scrive il carattere 'a' sul video", ans: false}, 
 
 { ques: "L'istruzione <br>cout &lt;&lt; a; <br>scrive il contenuto della variabile <i>a</i> sul video", ans: true}, 

 { ques: "L'istruzione <br>cout &lt;&lt;a&lt;&lt;endl; <br>scrive il contenuto della variabile <i>a</i> e il cursore resta sulla medesima riga", ans: false}, 

 { ques: "L'istruzione <br>cout &lt;&lt;a&lt;&lt;endl; <br>scrive il contenuto della variabile <i>a</i> e il cursore si sposta sulla riga successiva", ans: true}, 



        ],





        fill:[
                { ques: "Per rappresentare un numero di tipo float servono ............. bit.", ans: "32"},
				
				{ ques: "L'operazione di assegnazione si rappresenta nel linguaggio C++ con ....................", ans: "="},
				
				{ ques: "Le costanti vengono dichiarate attraverso la parola chiave ................", ans: "const"},
				
				{ ques: "L'istruzione <br>s = a + b; <br>si chiama ........................", ans: "assegnazione"},

           { ques: "Per acquisire un dato si usa l'istruzione...............&gt;&gt;", ans: "cin"},
				
				{ ques: "Per comunicare un risultato si usa l'istruzione ..........&lt;&lt;", ans: "cout"},
				
				{ ques: "La tastiera rappresenta lo standard..........", ans: "input"},
				
				{ ques: "Il video rappresenta lo standard..........", ans: "output"},

	
        ], 
       


        };

	var options = {
			title: "PRO.SIA - Informatica e processi aziendali<br />4. Il linguaggio C++",	
			help: "Per ogni domanda viene fornito l'esito dopo aver premuto il tasto <i>Controlla</i>.<br />Al termine del quiz si possono rivedere le domande e le risposte: le risposte errate hanno un asterisco accanto al numero di domanda.<br />Mettendo il segno di spunta accanto all'elenco dei numeri di domanda, vengono elencati soli i numeri di quelle con risposta errata.",
            intro: "<center>Quiz di autovalutazione <br /><img src='../../images/SIA3.png' width='280' /><br /><i>usa lo zoom del browser per ridimensionare il quiz (Ctrl+, Ctrl-)</center>",
			allRandom: true, 
	};
	$( "#quizArea" ).jQuizMe( quizMulti, options, lang);
	$( "#jqueryVersion" ).text( $.fn.jquery );
	$( "#jQuizMeVersion" ).text( $.fn.jQuizMe.version );
});