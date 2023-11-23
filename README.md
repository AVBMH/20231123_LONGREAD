Deze documentatie zou een en ander duidelijk moeten maken over hoe we digitale producties maken met Svelte.

Dit document is _work in progress_, zoals dat altijd gaat met projecten zoals deze.

In deze repo zit trouwens ook het bestandje `longread.code-snippets`, oa om shortcuts in VS Code mogelijk te maken. Toevoegen kan via **File > Preferences > Configure user snippets > svelte.json**

<br><br>

# _‘Let's get this party started’_ (**STAP 1**)

In theorie moet het mogelijk zijn om alles vanuit de terminal in VS Code te regelen, maar in de praktijk zorgt het clonen van een template repo voor problemen (en dreig je de template te overschrijven). Daarom lijkt het beter om het vooralsnog op de volgende manier te doen.

#### Verder werken op een bestaande repo?

Heeft iemand anders al een repo aangemaakt? Ga dan in Github Desktop naar **File > Clone a repository**, kies de juiste uit de lijst, pas (eventueel) je lokale pad aan en klik op **Clone**. Ga ineens naar stap 3 - passeer niet langs Start, u ontvangt geen €200.

### 1. Beginnen op Github.com

- Surf naar [https://github.com/RabijnsJoppe/longread_svelte_arjan](https://github.com/RabijnsJoppe/longread_svelte_arjan)
- Klik de groene knop **Use this template** en **Create a new repository**
- Geef de repo een naam (idealiter iets als _YYYY-MM-project_) en klik **Create repository**
- De nieuwe repo is aangemaakt. Klik op de groene knop **<> Code** en kies **Open with Github Desktop**.

### 2. Tussenstapje in Github Desktop

Hier kies je vervolgens op welk **Local path** de nieuwe repo moet komen en klik je op **Clone**. De bestanden worden lokaal gekopieerd.

### 3. Verder in VS Code

- Rechtermuis op de mapnaam van het nieuwe project en kies **Open in integrated terminal**
- `npm i` (installeer alle dependencies)
- `npm run dev` (activeer preview)
- http://localhost:5173/

<br><br>

# _‘Build me up, buttercup’_ (**STAP 2**)

Vanaf hier kan je dan de `App.svelte` etc. aanpassen.

Uitleg over de verschillende componenten komt hier.

<br><br>

# _‘Push it’_ (**STAP 3**)

### 1. Artikel builden

Als alles klaar is, kan je terug naar de terminal in VS Code.

- **Ctrl+C** breekt het huidige dev-proces af en geeft terug een command line.
- `npm run build` (genereert in het mapje **dist** 3 html/css/js-files)

### 2. Aanpassingen aan `index.html`

- Upload de files uit de **dist**-folder naar de FTP (tegenwoordig gebruiken we https://markup.standaard.be/extra/YYYY/MM/projectnaam)
- Pas een paar dingen aan in `index.html`
  - Pas `<html lang="en">` aan naar `<html lang="nl">` **(issue?)**
  - Maak de paden voor CSS en JS absoluut (zie vorige stap)
  - Copypaste de **evilCSS** van hieronder in de `body` **(issue?)**
- Maak een extra page en copypaste de inhoud van `index.html` in een HTML-widget. _(Note to self: metadata van de pagina invullen en een extra veld `adv_filter` = `noads` om reclame af te zetten)_

```
<script>
  const evilCSS = Array.from(document.querySelectorAll('link')).find(link => link.href.includes('master.css'));
  evilCSS.parentNode.removeChild(evilCSS)
</script>

<style>
  [data-fragment-name="sitefooter"] {
    max-width: 62.1875rem;
    margin-left: auto;
    margin-right: auto;
  }

  [data-testid="site-desktop-header"],
  [data-fragment-name="siteheader"] {
    display: none;
  }
</style>
```

### 3. Changes pushen

In principe zou de repo in Github Desktop moeten staan en kunnen alle changes gepusht worden. Belangrijk om weten is dat de inhoud van de **dist** niet gepusht wordt en dat aanpassingen altijd moeten gebeuren via `npm run dev`, `npm run build`, ...
