# Synopsis
Dit is een library voor een Jquery countdown code.

At the top of the file there should be a short introduction and/ or overview that explains what the project is. This description should match descriptions added for package managers (Gemspec, package.json, etc.)

# Code Example

De mamier waarop deze library werkt is als volgt:
1. Er wordt een functie aangemaakt genaamd "countdown"
2. In deze funcie worden een aantal variabelen gezet
   
        var datumNu = new Date();                    
        var eventDatum = new Date(2017, 04, 05);      //2017-04-05 is de opgegeven datum als countdown.
                                                        Let op! 04 is de dag en 05 is de maand!
        
        var nu = datumNu.getTime();                   //de waarde hieruit is het aantal milliseconden sinds 00:00:00   01-01-1970 
        var eventTijd = eventDatum.getTime();         //de waarde hieruit is het aantal milliseconden sinds 00:00:00   01-01-1970 

        var overgebleven = eventTijd - nu;            
        
de waarde van variabele "overgebleven" is nu een getal in milliseconden. Om dit getal om te zetten in dagen, uren, minuten en seconden gaan we door naar stap 3

3. In dit deel worden aan alle variabelen de juiste waarde toegewezen.

        var sec = Math.floor(overgebleven / 1000);  //er zitten 1000 milliseconden in 1 seconde dus aantal sec is millisec / 1000
        var min = Math.floor(sec / 60);             //er zitten 60 seconden in 1 minuut dus aantal minuuten is sec / 60
        var uur = Math.floor(min / 60);             //er zitten 60 minuten in 1 uur dus aantal uur is minuten / 60               
        var dag = Math.floor(uur / 24);             //er zitten 24 uur in 1 dag dus aantal dagen is uur / 24
        
            uur %= 24;                              //stel er zijn 55 uur over. om het aantal uren te bepalen moeten we kijken hoeveel                                                        uur er overblijven na de volle dagen. Hiervoor doen we / 24
            min %= 60;                              //hiervoor geldt hetzelfde
            sec %= 60;                              //hiervoor geldt hetzelfde
            
4. Om ervoor te zorgen dat iedere variabele een waarde heeft van 2 getallen doen we het volgende:

        //Lange vesie 
        //if (uur < 10){
        //  uur = "0" + uur; }
        //else {
        //  uur = uur; }
          
        // Korte versie 
        dag = (dag < 10) ? "0" + dag : dag;         
        uur = (uur < 10) ? "0" + uur : uur;         
        min = (min < 10) ? "0" + min : min;
        sec = (sec < 10) ? "0" + sec : sec;

Dit stuk code is volledig optioneel maar ik vind het er persoonlijk mooier uitzien.

5. Om de waardes op de HTML pagina aan te passen doen we het volgende

        document.getElementById('seconden').innerHTML = sec;   
        document.getElementById('minuten').innerHTML = min;     
        document.getElementById('uren').innerHTML = uur;        
        document.getElementById('dagen').innerHTML = dag;   
        
 6. Om ervoor te zorgen dat de waardes van de countdown iedere seconde worden aangepast maken we gebruikt van de setTimeout() methode, deze zorgt ervoor dat de functie wordt herhaald om een specifiek aantal opgegeven milliseconden (in dit geval 1000) ofterwel 1 seconde.
 
        setTimeout(countdown, 1000);
        
7. Tot slot wordt de functie aangeroepen

        countdown();
        
# Motivation

Ik heb deze library gemaakt voor een schoolopdracht.

# Installation

Download countdown.js en zorg ervoor dat je de gewenste countdown datum invult en dat je in de html classes hebt met de juiste benaming.

# API Reference


# Tests

Door gebruikt te maken van console.log(variabele) is het makkelijk om achter mogelijke fouten te komen.

# License

MIT license
