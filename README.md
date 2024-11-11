# Zukunftstag

Willkommen beim Zukunftstag hier im LearningHub.

## Intro

Heute Morgen wirst du lernen, wie du eine einfache Website mit HTML, CSS und ein bisschen JavaScript erstellst.

## Installation
Die folgenden Dinge sind Sachen, die wir benötigen um zu programmieren<br>
<b>Git:</b> <a href="https://git-scm.com/downloads">Link</a><br>
<b>VisualStudioCode:</b> <a href="https://code.visualstudio.com/download">Link</a><br>

<b>Extensions in VSCode</b><br>
- Live Server
- Auto Rename Tag


## Aber was ist eigentlich HTML?

HTML steht für HyperText Markup Language und ist technisch gesehen keine Programmiersprache. Dennoch ist es der Grundbaustein für jede Website. Wenn du eine Website öffnest (z.B. [Swisscom.com](www.swisscom.com)) und dann F12 drückst oder einen Rechtsklick machst und "Untersuchen" auswählst, kannst du sehen, wie die Website aufgebaut ist.

Es gibt insgesamt 115 funktionale HTML-Tags, aber die meisten wirst du nie oder nur sehr selten benutzen. Die wichtigsten (meiner Meinung nach) sind:

- h1 - h6: Überschriften
- p: Paragraphen (Text)
- a: Links
- img: Bilder
- div: Block
- button: halt einfach ein button
- input: kann verschiedene dinge sein (inputfield, ein submit button, radiobutton, etc)

Natürlich gibt es noch viele weitere Tags, die Text fett machen (b) oder kursiv (i), aber darauf kommen wir später zurück. Du kannst auch nachschlagen, welche anderen Tags es gibt und ein bisschen damit herumprobieren. Eine gute Ressource für HTML, CSS und JavaScript ist die Website [w3schools.com](https://www.w3schools.com/html/default.asp).

## Wie ist HTML aufgebaut?
HTML ist eigentlich ziemlich simpel. Es gibt zwar einige Regeln, die man beachten muss, aber ansonsten ist man ziemlich frei, wie man die HTML-Elemente anordnet. Eine Grundstruktur ohne irgendwelche dargestellten Elemente würde so aussehen:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title></title>
</head>
<body>

</body>
</html>
```

- Der `<!DOCTYPE html>` Tag gibt dem Browser an, dass es sich um ein HTML File handelt.
- Der `html` Tag ist der unterste Layer, der gerendert wird. Auf ihm baut alles auf.
- Der `head` Tag ist ein Tag, das nicht dafür gedacht ist, dass man darin Tags verwendet, die gerendert werden, sondern nur für Metadaten (Daten über Daten). Darin werden z.B. der Titel (das, was oben auf dem Browsertab steht) oder die Beschreibung festgelegt.
- Der `body` Tag ist der Tag, in dem alles, was man rendern möchte, hinkommt.

Alle Tags (mit ein paar Ausnahmen wie z.B. der `br` Tag für eine neue Zeile) werden wieder geschlossen, indem man das gleiche Tag verwendet, aber vor dem Tagnamen ein `/` hinzufügt.

## Was ist CSS?

CSS steht für Cascading Style Sheets und ist ebenfalls keine "richtige" Programmiersprache. CSS wird verwendet, um das Aussehen einer Website zu gestalten. Wenn du das HTML-File im Browser ohne CSS öffnest, siehst du, wie die Website ohne das Styling aussieht.

CSS kannst du auf verschiedene Arten in dein HTML einfügen, aber dazu kommen wir später. In CSS arbeitest du mit Klassen und IDs. Beide dienen dazu, das Styling einfacher zu machen, indem du die Klasse einmal definierst und sie dann den HTML-Elementen zuweist. Das hat den Vorteil, dass du Änderungen nicht an jedem einzelnen Element vornehmen musst, sondern nur an der Klasse. IDs funktionieren ähnlich, haben aber eine höhere Priorität. Das bedeutet, wenn du einem Element mit einer Klasse eine Hintergrundfarbe Blau zuweist und mit einer ID eine Hintergrundfarbe Orange, wird die Hintergrundfarbe des Elements Orange sein.

Es gibt auch eine vierte Möglichkeit, wie du Elemente stylen kannst, und das ist das Element selbst. Das bedeutet, du veränderst jedes Element global. Wenn du zum Beispiel den Hintergrund eines Buttons änderst, musst du keine Klasse oder ID mehr anwenden, um die Hintergrundfarbe zu ändern.

## Was ist JavaScript?

Jetzt kommen wir zum spannenden Teil: JavaScript! JavaScript (oft auch abgekürzt als JS) ist eine Programmiersprache, mit der du interaktive Funktionen auf Websites erstellen kannst.

JavaScript ermöglicht es dir, verschiedene Aufgaben auszuführen, wie z.B.:

- Das Ändern von HTML-Inhalten
- Das Ändern von CSS-Stilen
- Das Reagieren auf Benutzerinteraktionen (wie das Klicken auf einen Button)
- Das Validieren von Formularen
- Das Abrufen von Daten von externen APIs

Hier ist ein einfaches Beispiel für JavaScript-Code:

```javascript
// Das ist ein Kommentar. Es wird ignoriert und dient zur Erläuterung des Codes.

// Eine Variable erstellen
var name = 'Max';

// Eine Funktion erstellen
function greet() {
  console.log('Hallo ' + name + '!');
}

// Die Funktion aufrufen
greet();
```

In diesem Beispiel erstellen wir eine Variable namens `name` und setzen ihren Wert auf `'Max'`. Dann erstellen wir eine Funktion namens `greet`, die den Namen in der Konsole ausgibt. Schließlich rufen wir die Funktion `greet` auf, um die Ausgabe `'Hallo Max!'` zu generieren.

Das ist nur ein sehr einfaches Beispiel, aber JavaScript kann viel komplexere Aufgaben bewältigen. Es gibt viele Ressourcen online, um JavaScript zu lernen, darunter auch [w3schools.com](https://www.w3schools.com/js/default.asp). JavaScript werden wir später brauchen, um z.B. ein Element zu löschen.

## Aufgaben

### Html
Falls noch nicht gemacht, durchsuche ein bisschen das Internet und probiere einige Tags aus, die du findest.

### CSS
Momentan sieht deine Website noch ziemlich langweilig aus. Darum verwenden wir jetzt CSS. Wie bereits oben beschrieben, gibt es 3 Möglichkeiten CSS auf der Website zu verwenden, nämlich inline, im HTML und als externes StyleSheet, und wir werden jede einzelne Methode durchgehen und uns am Schluss anschauen, was die Vorteile und die Nachteile davon sind.

#### Inline CSS
Inline CSS ist ziemlich einfach. Man schreibt einfach innerhalb des ersten HTML Tags (das ohne /) "Style", dann noch ein `=""` und dann in die Anführungszeichen das CSS, das man möchte. Hier im Beispiel setzen wir die Farbe der Schrift auf Rot:

```html
<h1 style="color: red">Text</h1>
```

Probiere das mal aus.

#### Im HTML
Nun werden wir unsere erste Klasse erstellen. Dafür schreiben wir innerhalb des `<body>` Tags den Tag `<style>`. In diesem definieren wir unsere erste Klasse mit einem `.` und dann gleich den Namen. Danach machen wir noch die geschweiften Klammern `{}` dahinter. Du kannst die Klasse nennen, wie du willst. Danach packen wir wieder denselben Style hinein wie im Inline CSS (`color: red`). Fertig sieht das dann so aus:

```html
<body>
<style>
    .EigeneKlasse {
        color: red;
    }
</style>

<h1 class="EigeneKlasse">Text</h1>
</body>
```

Nun können wir die Klasse einem HTML Element geben, indem wir dasselbe wie beim Inline CSS machen und dem Tag im HTML Element schreiben. Dieses Mal ist es `class`. Dieses Mal schreiben wir den Namen der Klasse, die du vorher definiert hast, in die Anführungszeichen. Hier wäre es dann `class="EigeneKlasse"`. Komplett fertig würde es so aussehen:

```html
<body>
<style>
    .EigeneKlasse {
        color: red;
    }
</style>

<h1 class="EigeneKlasse">Text</h1>
</body>
```

#### External stylesheet
Das externe Stylesheet ist eine separate Datei (meistens style.css, kann aber heißen, wie man will), und dort schreibt man dann alles hinein, was wir vorhin im `<style>` Tag geschrieben haben. Damit alles funktioniert, muss man aber zuerst das CSS importieren, was wir jetzt machen. Dafür verwenden wir den `<link>` Tag. Diesen Tag benutzen wir im `<head>`. Dort brauchen wir den `rel` Tag (gleich wie class) und dort schreiben wir `stylesheet`. Zudem schreiben wir noch den Tag `href` und dort schreiben wir `./style.css`, da wir bereits eine CSS Datei erstellt haben, die style.css heißt. Das `./` benutzen wir, um den Dateipfad zu referenzieren. Der `.` sagt, dass es im gleichen Ordner ist, und der `/` ist dafür da, um zu sagen, dass der Dateipfad mit diesem Zeichen beginnt. Das sieht dann so aus:

```html
<head>
    <link rel="stylesheet" href="./style.css">
</head>
```

Dannach können wir in das File hineingehen und das gleiche, was wir vorhin beim Im HTML Punkt gemacht haben, wiederholen, nur dass wir den `<style>` Tag nicht mehr brauchen. Das heißt, unser style.css File würde so aussehen:

```css
.EigeneKlasse {
    color: red;
}
```

Nun probieren wir noch die 2 anderen Methoden aus, um ein Element zu stylen (IDs und global). Zuerst machen wir eine ID in unserem Stylesheet mit `#EigeneID {}`. In diesem geben machen verwenden wir das `color` Attribut, doch dieses Mal setzen wir es auf Grün (green).

```css
#EigeneID {
    color: green;
}
```

Jetzt gehen wir zurück ins HTML und fügen in einem `<h1>` (am besten schon mit unserer Klasse) die id ein mit `id="EigeneID"`. Nun sollte diese Überschrift grün erscheinen.

Globale Styles fügen wir hinzu, indem wir den HTML Tag (bei uns jetzt `<h1>`) nehmen und danach die geschweiften Klammern verwenden. Dann schreiben wir wie vorher das `color` Attribut und setzen es dieses Mal auf Blau (blue). Unser fertiges CSS File würde dann so aussehen:

```css
.EigeneKlasse {
    color: red;
}

#EigeneID {
    color: green;
}

h1 {
    color: blue;
}
```

Nun sollten alle Überschriften, die keine Klasse oder ID haben, blau sein, alle mit einer Klasse rot, und alle mit einer ID grün.

#### Vorteile und Nachteile
Doch was sind jetzt die Vor- und Nachteile der verschiedenen Benutzungsweisen?

**Inline CSS**

Vorteile:
- Geht schnell

Nachteile:
- Keine Klassen oder IDs (man muss jedes Element einzeln stylen)
- Der Code wird unleserlich
- Sehr unübersichtlich, was man wo gemacht hat

**Im HTML**

Vorteile:
- Man kann Klassen und IDs benutzen
- Man muss nicht die ganze Zeit die Files wechseln
- Bei kleinen Projekten ist es auch ziemlich übersichtlich

Nachteile:
- Bei großen Projekten sehr unübersichtlich, da man tausende von Zeilen CSS hat

**Externes Stylesheet**

Vorteile:
- Man kann Klassen und IDs benutzen
- Man kann mehrere Files für verschiedene Dinge verwenden (z.B. globale Styles und eigene Klassen)
- Sehr übersichtlich bei großen Projekten

Nachteile:
- Man muss die Files extra importieren
- Wenn man zu viele Files hat, ist es unübersichtlich, welche Klassen wo sind

**Wann soll ich welche Methode verwenden?**

Ich persönlich benutze Inline CSS z.B. um Bugs herauszufinden (z.B. mit einer roten Border). Im HTML verwende ich es eigentlich nie, da ich normalerweise immer ein Stylesheet benutze.

### CSS Attribute und CSS Größen

#### Attribute
CSS hat noch mehr Attribute als HTML, nämlich um die 250, aber auch hier wirst du vielleicht nur 30 davon oft benutzen. Hier eine kleine Erklärung der Attribute, die ich persönlich am meisten benutze:

- `height`: Setzt die Höhe eines Elements. Achtung, es kann hier auch schiefgehen, wenn z.B. die Höhe des Elements innerhalb eines anderen Elements (das Child) größer als die Höhe des äußeren Elements (dem Parent) ist. Aber darauf kommen wir beim CSS Höhen noch ein bisschen genauer zurück.
- `width`: Setzt die Breite eines Elements. Achtung, gleich wie bei der Höhe, einfach halt für die Breite.
- `color`: Haben wir ja bereits kennengelernt. Setzt die Schriftfarbe.
- `background`: Setzt den Hintergrund eines Elements, z.B. eine Farbe, einen Übergang oder etwas anderes.
- `border-radius`: `border-radius` ist für runde Kanten zuständig.
- `border`: Macht einen Rand um das Element
- `font-height`: Setzt die Schriftgröße. Hier ist es wichtig aufzupassen, welche Einheit man benutzt. Darauf gehen wir aber gleich im nächsten Teil genauer ein.
- `padding`: Setzt den Abstand zwischen dem Inhalt und dem Rand eines Elements.
- `margin`: Setzt den Abstand zwischen dem Rand eines Elements und den umgebenden Elementen.
- `text-align`: Legt die Ausrichtung des Textes innerhalb eines Elements fest.
- `text-decoration`: Fügt dem Text eine dekorative Linie hinzu (z.B. Unterstreichung, Durchstreichung, etc.).
- `font-family`: Legt die Schriftart für den Text innerhalb eines Elements fest.
- `font-weight`: Bestimmt die Schriftstärke (z.B. normal, fett, etc.).
- `background-image`: Setzt ein Hintergrundbild für ein Element.

#### CSS Größen
Es gibt einen Fehler, den viele neue Webentwickler (ich habe ihn auch gemacht) machen. Nämlich ist es, dass sie die falschen CSS Einheiten verwenden. Versuche so wenig wie möglich Pixel zu verwenden. Klar, teilweise ist es notwendig, aber alles mit Pixeln zu machen, ist der größte Fehler, den man machen kann.

Doch welche Größen sollte man nun verwenden? Es gibt viele Möglichkeiten, responsive und behindertenfreundliche Websites zu erstellen. Hier sind die Einheiten, die du am meisten brauchen wirst:

- `rem`: Rem ist abhängig von der Größe der Schrift. Normalerweise ist die Standardschriftgröße im Browser 16px, kann aber vom Benutzer in den Browsereinstellungen geändert werden. Das heißt, 1rem = 16px. Wenn man `rem` benutzt, sieht alles immer noch genauso aus wie wenn man Pixel benutzt.
- `%`: `%` sind sehr angenehm, z.B. bei Höhen und Breiten. Sie berechnen z.B. 40% der Größe des Parents. Wichtig ist zu beachten, dass das Padding auch zu dieser Größe hinzugezählt wird. Das heißt, wenn zwischen dem 1rem Padding des Parents noch 100px Platz frei sind, wäre 100% nicht diese 100px, sondern 100px und die 2rem (=132px/8.25rem).
- `vh` und `vw`: `vh` und `vw` beziehen sich auf die Größe des Browserfensters. 1vh ist z.B. 1% der Höhe des Fensters. Benutze `vh` am besten nur mit den `min` (min-height, min-width) Attributen, da man ja nicht weiß, welche Breite/Höhe der Bildschrim des Benutzers hat.

### JavaScript
Wir werden jetzt einen Button machen, der beim Klicken eine Box erscheinen lässt.

Zuerst müssen wir das JavaScript File importieren. Das machen wir wieder im `<head>` Tag und fügen dannach noch einen Button und ein Div hinzu mit einer Klasse und einer ID, der wir aber keine Styles zuweisen werden.

```html
<head>
    <script src="index.js"></script>
</head>

<body>
    <button></button>
    <div class="showDiv" id="showDivID"></div>
</body>
```
Und noch das CSS. `display: none;` sorgt dafür, dass das Element nicht dargestellt wird.

```css
.showDiv {
    height: 10rem;
    width: 10rem;
    background: red;
    display: none;
}
```

Gut. Nun können wir im JavaScript eine Funktion erstellen. Diese definieren wir mit dem `function` Schlüsselwort gefolgt vom Namen und den geschweiften Klammern.

```javascript
function showDiv() {
    var div = document.getElementById("showDivID");
    div.style.display = "block";
}
```

Nun können wir mit JavaScript unserem Div mitteilen, dass es das `display` auf `block` setzt. Das machen wir, indem wir `div.style.display = "block";` schreiben.

Als letztes müssen wir nun noch die Funktion aufrufen, wenn wir den Button klicken. Das machen wir im Button Tag selbst. Dort fügen wir einen `onClick` Tag hinzu und rufen dort unsere Funktion auf. Am Schluss würde es dann so aussehen: `onClick="showDiv()"`.

## Projekt
Da du jetzt die basics der Webentwicklung kennst, bist du bereit ein Projekt anzufangen. Zusammen werden wir eine Wetterwebsite erstellen die mit Echtzeitdaten funktioniert. Damit du nicht alles selbst machen musst, habe ich bereits die Logik für die Datenvorbereitung übernommen. Weiter unten steht, wie du die Daten integrieren kannst. Zudem habe ich auch bereits ein Design und ein paar CSS dafür erstellt, du kannst sie aber abändern wie du willst. <br>
### Wie kannst du vorgehen?
Das hier ist nur ein grober Ablauf aber ungefähr so könntest du es machen
1. Lies dir die Infos weiter unten durch.
2. Schau dir das Design an, mache Abänderungen oder erstelle selber eines.
3. Mach zuerst einmal ein div für einen Tag (ohne echtzeitdaten fürs erste)
4. Probiere aus wie es ist wenn du 7 der Tagesdivs nebeneinder machst (respektive ins vorhergesehne div)
5. Versuche das Div mit JavaScript darzustellen
6. Verwende eine ForEach Schleife um das div 7 mal darzustellen
7. Nimm die Daten aus der API Request und schiebe die Daten für jeden Tag in das passende Div

