var cards = [
	{name: "Avondklok PersCo - 20 Januari", freeSquare: "Corona (altijd 1 slok)", quotes: ["\"Licht aan het einde van de tunnel\"", "\"We zijn er nog niet\"", "\"Hoeveelheid vaccins te laag\"", "\"Verandering van denken\"", "\"Avondklok instellen\"", "\"Missionair op de corona- bestrijding\"", "\"Vooral door jongeren\"", "\"We hadden dit liever niet hoeven doen\"", "\"Zware maatregel\"", "\"We doen het voor de zorg\"", "\"Alleen samen krijgen we het onder controle\"", "\"Dankbaarheid voor de zorg wordt geuit\"", "\"Irma in beeld\"", "\"Uitgezonderd vitale beroepen\"", "\"Groepsvorming onder jongeren", "\"Sociale leven op pauze zetten\"", "\"We moeten doorzetten\"", "\"Ik ga u niet verrassen", "\"Jong en oud\"", "\"Lastige boodschap\"", "\"Was je handen kapot\"", "\"Complot theorieën\"", "\"Advies van het OMT\"", "\"Waarom zijn er nog vluchten op Schiphol?\"", "\"Proportioneel\"", "\"De R onder de 1 krijgen\"", "\"Het aantal besmettingen neemt niet snel genoeg af\"", "\"We hopen dat jullie nu niet gaan overnachten\"", "\"Mentale gezondheid\"", "\"Britse variant\"", "\"Zware maanden\"", "\"Zorgvuldig\"", "\"Mondkapjes\"", "Grappig gebarentaal gebaar", "\"Ga nou niet\""]},
	{name: "Post-rellen PersCo - 2 Februari", freeSquare: "Corona (altijd 1 slok)", quotes: ["Basisscholen gaan weer open", "Sneltesten voor leraren", "\"Licht aan het einde van de tunnel\"", "\"We zijn er nog niet\"", "\"Hoeveelheid vaccins te laag\"", "\"Verandering van denken\"", "Avondklok wordt verlengd", "Avondklok wordt vervroegd", "\"We hadden dit liever niet hoeven doen\"", "\"Zware maatregel\"", "\"We doen het voor de zorg\"", "\"Alleen samen krijgen we het onder controle\"", "Dankbaarheid voor de zorg wordt geuit", "Irma!", "\"x is uitgezonderd voor vitale beroepen\"", "Jongeren krijgen de schuld", "\"We moeten doorzetten\"", "\"Ik ga u niet verrassen\"", "\"Lastige boodschap\"", "\"Complot theorieën\"", "\"Advies van het OMT\"", "Iets over vluchten", "\"Proportioneel\"", "\"Het aantal besmettingen neemt niet snel genoeg af\"", "\"Mentale gezondheid\"", "Iets over een andere variant Corona", "\"Zware maanden\"", "Mondkapjes", "\"Grappig gebarentaal gebaar\"", "\"Ga nou niet\"", "Iets over GGD-datalek", "Iets over rellen", "Journalist stelt domme vraag", "Routekaart wordt benoemd"]},
	{name: "Verlengingen - 23 Februari", freeSquare: "Corona (altijd 1 slok)", quotes: ["Middelbare school deels open", "Kappers open", "\"Licht aan het einde van de tunnel\"", "\"We zijn er nog niet\"", "\"Dolgraag\"", "Avondklok wordt verlengd", "Strikte voorwaarden", "\"Sport\"", "Iets over verkiezingen", "\"We hadden dit liever niet hoeven doen\"", "\"Zware maatregel\"", "\"Alleen samen krijgen we het onder controle\"", "Dankbaarheid voor de zorg wordt geuit", "Irma!", "\"x is uitgezonderd voor vitale beroepen\"", "\"Dillema\"", "Jongeren krijgen de schuld", "\"We moeten doorzetten\"", "\"Ik ga u niet verrassen\"", "\"Lastige boodschap\"", "\"Advies van het OMT\"", "\"Proportioneel\"", "\"Het aantal besmettingen neemt niet snel genoeg af\"", "\"Mentale gezondheid\"", "Iets over een andere variant Corona", "\"Zware maanden\"", "Mondkapjes", "\"Grappig gebarentaal gebaar\"", "\"Ga nou niet\"", "Journalist stelt domme vraag", "Routekaart wordt benoemd"]},
	{name: "Meivakantie perspectief - 8 Maart", freeSquare: "Corona (altijd 1 slok)", quotes: ["Meivakantie", "Zwemles hervat", "\"Licht aan het einde van de tunnel\"", "\"We zijn er nog niet\"", "\"Dolgraag\"", "Negatief reisadvies tm 15 april", "Strikte voorwaarden", "\"Sport\"", "Iets over verkiezingen", "\"We hadden dit liever niet hoeven doen\"", "\"Zware maatregel\"", "\"Alleen samen krijgen we het onder controle\"", "Irma!", "Avondklok verlengd", "\"Dillema\"", "Jongeren krijgen de schuld", "\"We moeten doorzetten\"", "\"Ik ga u niet verrassen\"", "\"Lastige boodschap\"", "\"Advies van het OMT\"", "\"Proportioneel\"", "\"Het aantal besmettingen neemt niet snel genoeg af\"", "\"Mentale gezondheid\"", "Iets over een andere variant Corona", "\"Zware maanden\"", "Mondkapjes", "\"Grappig gebarentaal gebaar\"", "\"Ga nou niet\"", "Journalist stelt domme vraag", "Routekaart wordt benoemd", "Vaccinatie paspoort", "\"We willen geen (impliciete) vaccinatieplicht\""]},
	{name: "Toch geen versoepelingen - 13 April", freeSquare: "Corona (altijd 1 slok)", quotes: ["Zelftests nu te koop", "Studenten mogen iets wanneer ze testen", "Snelheid vaccineren", "\"Licht aan het einde van de tunnel\"", "\"We zijn er nog niet\"", "\"Dolgraag\"", "\"Fieldlabs\"", "Geen ruimte voor versoepelingen", "Was er niet een app?", "Routekaart is alweer vergeten", "Strikte voorwaarden", "\"Sport\"", "R-waarde", "\"We hadden dit liever niet hoeven doen\"", "\"Zware maatregel\"", "\"Alleen samen krijgen we het onder controle\"", "Irma!", "\"Dillema\"", "Jongeren krijgen de schuld", "\"We moeten doorzetten\"", "\"Ik ga u niet verrassen\"", "\"Lastige boodschap\"", "\"Advies van het OMT\"", "\"Proportioneel\"", "\"Het aantal besmettingen neemt niet snel genoeg af\"", "\"Mentale gezondheid\"", "Iets over een andere variant Corona", "\"Zware maanden\"", "Mondkapjes", "Grappig gebarentaal gebaar", "\"Ga nou niet\"", "Journalist stelt domme vraag", "Vaccinatie paspoort", "\"Als de cijfers het toelaten\""]},
	{name: "Toch wel versoepelingen?!? - 20 April", freeSquare: "Corona (altijd 1 slok)", quotes: ["Meer bezoekers begrafenissen", "Terassen onder voorwaarden open", "Avondklok weg", "\"Licht aan het einde van de tunnel\"", "\"We zijn er nog niet\"", "Iets over de fieldlabs", "Was er niet een app?", "Routekaart is alweer vergeten", "ONDER STRIKTE VOORWAARDEN", "\"Sport\"", "R-waarde", "\"Zware maatregel\"", "\"Alleen samen krijgen we het onder controle\"", "Irma!", "\"Dillema\"", "Jongeren krijgen de schuld", "\"We moeten doorzetten\"", "\"Advies van het OMT\"", "\"Proportioneel\"", "\"Mentale gezondheid\"", "Iets over een andere variant Corona", "\"Zware maanden\"", "Mondkapjes", "Grappig gebarentaal gebaar", "Journalist stelt domme vraag", "Vaccinatie paspoort", "\"Als de cijfers het toelaten\"", "\"Detailhandel open zonder afspraak\""]},
	{name: "Dan nu toch echt het begin ... van het einde - 18 Juni", freeSquare: "Corona (altijd 1 slok)", quotes: ["Mondkapjesplicht weg", "Wel mondkapjes in OV", "8 Personen per dag ontvangen", "Openingstijden horeca verruimd", "Advies thuiswerken vervalt", "1.5 meter regel blijft", "\"Het vaccineren gaat goed\"", "\"MAAARRRRR\"", "\"Licht aan het einde van de tunnel\"", "\"We zijn er nog niet\"", "Iets over festivals", "Routekaart is alweer vergeten", "\"Sport\"", "R-waarde", "Irma!", "\"Dillema\"", "Iets over onderwijs", "\"Nog even doorzetten\"", "\"Advies van het OMT\"", "\"Proportioneel\"", "Iets over een andere variant Corona", "\"Zware maanden\"", "\"Achter de rug\"", "Iets over vakanties", "Grappig gebarentaal gebaar", "Journalist stelt domme vraag", "Vaccinatie paspoort", "\"Aantal positieve tests\""]},
	{name: "Ah shit, here we go again - 9 Juli", freeSquare: "Corona (altijd 1 slok)", quotes: ["Iets over mondkapjesplicht", "\"Deltavariant\"", "\"Rukt op\"", "\"Grijpt om ons heen\"", "\"Het ging een lange tijd goed\"", "Vooral jongeren verspreiden het virus", "Nachtclubs en discotheken dicht", "Einde van testen voor toegang", "Samen kunnen we dit aan", "\"De kop in drukken\"", "Iets over vakanties", "Code rood vermijden", "\"Onvoorzien\"", "\"2 weken na de prik pas\"", "Ga niet dom lopen doen", "1.5 meter benadrukken", "Wel mondkapjes in OV", "8 Personen per dag ontvangen", "Advies thuiswerken terug", "\"Het vaccineren gaat goed\"", "\"MAAARRRRR\"", "\"Licht aan het einde van de tunnel\"", "\"We zijn er nog niet\"", "Iets over festivals", "Routekaart", "\"Sport\"", "R-waarde", "Irma!", "\"Dillema\"", "Iets over onderwijs", "\"Nog even doorzetten\"", "\"Advies van het OMT\"", "\"Zware maanden\"", "\"Achter de rug\"", "Grappig gebarentaal gebaar", "Journalist stelt domme vraag", "\"Aantal positieve tests\""]},
	{name: "PersCo's vaker terug dan SVO - 2 November", freeSquare: "Corona (altijd 1 slok)", quotes: ["Moeilijke tijden", "Ongevaccineerden", "R-Waarde/getal", "\"Volhouden\"", "Sportscholen", "Sekswerkers", "Nieuwe normaal", "Kerst(vakantie)", "Contactberoepen", "Tweedeling in de samenleving", "\"Seizoenseffect\"", "Vaccinatieplicht", "Onbeschermd", "Solidariteit", "Opschalen", "Vaccinatiegraad", "Staphorst", "Wappie", "QR-Codes", "Licht aan de horizon", "Café, bars restaurants", "\"Doe het voor een ander\"", "IC-Bedden", "Basisregels", "Iets over een Coronavariant", "\"Een stap terug\"", "Handen wassen", "Schouders eronder", "Advies thuiswerken", "Iets over mondkapjesplicht", "Irma!!!", "Iets over onderwijs", "Grappig gebarentaal gebaar"]},
	{name: "Lockdown 2.0 - 12 November", freeSquare: "Corona (altijd 1 slok)", quotes: ["Moeilijke tijden", "Ongevaccineerden", "R-Waarde/getal", "\"Volhouden\"", "Sportscholen", "Sekswerkers", "Kerst(vakantie)", "Contactberoepen", "Tweedeling in de samenleving", "\"Seizoenseffect\"", "Vaccinatieplicht", "Onbeschermd", "Solidariteit", "Opschalen", "Vaccinatiegraad", "QR-Codes", "Café, bars restaurants", "IC-Bedden", "Basisregels", "Iets over een Coronavariant", "Handen wassen", "Advies thuiswerken", "Iets over mondkapjesplicht", "Irma!!!", "Iets over onderwijs", "Grappig gebarentaal gebaar", "2G / 3G", "Evenementen geschrapt", "3 weken lockdown", "Boostershot", "info 2e Prik mvoor mensen met Janssen", "Museau / culturele sector", "Iets over 1.5 meter", "Iets over winkels / detailhandel"]},
	{name: "Groundhog Day PersCo - 26 November", freeSquare: "Corona (altijd 1 slok)", quotes: ["Code Zwart", "Rellen", "\"Avondklok\"", "\"Eenzaamheid\"", "Ongevaccineerden", "R-Waarde/getal", "\"Volhouden\"", "Sportscholen", "Sekswerkers", "Kerst(vakantie)", "Contactberoepen", "Tweedeling in de samenleving", "\"Seizoenseffect\"", "Vaccinatieplicht", "Onbeschermd", "Solidariteit", "Opschalen", "Vaccinatiegraad", "QR-Codes", "Horeca eerder dicht", "IC-Bedden", "Zuid Afrikaanse variant", "Handen wassen", "Advies thuiswerken", "Irma!!!", "Scholen blijven open", "Grappig gebarentaal gebaar", "2G / 3G", "Evenementen geschrapt", "Lockdown verlengt", "Boostershot", "info 2e Prik voor mensen met Janssen", "Musea / culturele sector", "Iets over 1.5 meter", "Niet essentiele sectoren dicht 17:00"]},
	{name: "Nog een lockdown - 18 December", freeSquare: "Corona (altijd 1 slok)", quotes: ["Iets over kerst", "Scenario immuniteitsdoorbraak", "Klap voor de sector", "Jaap van Dissel", "Code Zwart", "(Nog) geen avondklok", "\"Eenzaamheid\"", "Ongevaccineerden", "R-Waarde/getal", "\"Volhouden\"", "Sportscholen dicht", "Sekswerkers", "Contactberoepen", "\"Seizoenseffect\"", "Vaccinatieplicht", "Onbeschermd", "Solidariteit", "Vaccinatiegraad", "QR-Codes", "Horeca eerder dicht", "IC-Bedden", "Nieuwe variant", "Handen wassen", "Advies thuiswerken wordt benadrukt", "Irma!!!", "Grappig gebarentaal gebaar", "2G / 3G", "Boostershot", "Info 2e Prik voor mensen met Janssen", "Musea / culturele sector", "Iets over 1.5 meter", "Niet essentiele sectoren dicht", "Scholen dicht", "\"We zijn te optimistisch geweest\""]}
]