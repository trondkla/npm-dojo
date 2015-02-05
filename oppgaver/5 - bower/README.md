# NPM og Bower
Prosjekter ender ofte opp med mange eksterne ressurser. Noen fra npm, noen fra bower, noen fra github og andre bare eksterne script i ditt eget repo.

Her er ett løsningsforslag for å håndtere en slik situasjon

NPM originalt inneholdt mer javascript backend kode for node, derav navnet node package manager.
Bower derimot var laget for frontend javascript kode som f.eks. jQuery, backbone og lodash.

Selv om mange pakker ligger i både NPM og Bower hender det at de som maintainer de er flinkere å oppgradere den ene plassen og ikke den andre. Det er derfor ofte nødvendig å både npm og bower.

Bower ligger i NPM og kan installeres med _npm install bower_

Oppgave 5 går ut på å laste ned bower med npm, så bruke bower til å laste ned jquery.

Kjør deretter _npm start_ for å verifisere om oppgaven er riktig!
