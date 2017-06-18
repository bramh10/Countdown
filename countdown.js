$(function (){

      function countdown(){
            
        /**
         * Default settings for the module
         */
        var defaultSettings = {
            secondsclass: 'seconden',
            minutesclass: 'minuten',
            hoursclass: 'uren', 
            daysclass: 'dagen',
            eventyear: 2017,
            eventmonth: 05,
            eventday: 30
        };
            
        var datumNu = new Date();                    //geeft het volgende resultaat -- Tue May 02 2017 16:55:38 GMT+0200 (West-Europa (zomertijd))
        var eventDatum = new Date(defaultSettings.eventyear, defaultSettings.eventmonth, defaultSettings.eventday)
        var nu = datumNu.getTime();                  //de waarde hieruit is het aantal milliseconden sinds 00:00:00   01-01-1970 
        var eventTijd = eventDatum.getTime();        //de waarde hieruit is het aantal milliseconden sinds 00:00:00   01-01-1970 

        var overgebleven = eventTijd - nu;          //om te weten hoeveel milliseconden er tussen de datum van nu en het event datum zit trekken we deze waardes van elkaar af

        var sec = Math.floor(overgebleven / 1000);  //er zitten 1000 milliseconden in 1 seconde dus aantal sec is millisec / 1000
        var min = Math.floor(sec / 60);             //er zitten 60 seconden in 1 minuut dus aantal minuuten is sec / 60
        var uur = Math.floor(min / 60);             //er zitten 60 minuten in 1 uur dus aantal uur is minuten / 60               
        var dag = Math.floor(uur / 24);             //er zitten 24 uur in 1 dag dus aantal dagen is uur / 24
          

        //x %= y betekent x = x % y
         uur %= 24;                                 //stel er zijn 55 uur over. om het aantal uren te bepalen moeten we kijken hoeveel uur er overblijven na de volle dagen. Hiervoor doen we / 24
         min %= 60;                                 //hiervoor geldt hetzelfde
         sec %= 60;                                 //hiervoor geldt hetzelfde

          
          
        //Lange vesie 
        //if (uur < 10){
        //  uur = "0" + uur; }
        //else {
        //  uur = uur; }
          
        // Dit doen we om altijd een getal met 2 cijfers te krijgen, bijvoorbeeld als de waarde van uur 6 is wordt het nu 06.
        dag = (dag < 10) ? "0" + dag : dag;         
        uur = (uur < 10) ? "0" + uur : uur;         
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;
          
        document.getElementById(defaultSettings.secondsclass).innerHTML = sec;    //De elementen op de html pagina de juiste waarde geven.
        document.getElementById(defaultSettings.minutesclass).innerHTML = min;     //De elementen op de html pagina de juiste waarde geven.
        document.getElementById(defaultSettings.hoursclass).innerHTML = uur;        //De elementen op de html pagina de juiste waarde geven.
        document.getElementById(defaultSettings.daysclass).innerHTML = dag;       //De elementen op de html pagina de juiste waarde geven.

        setTimeout(countdown, 1000);                            //de setTimeout() methode zorgt ervoor dat de functie countdown iedere seconde wordt herhaald.
          
    }
    
    countdown();
});
