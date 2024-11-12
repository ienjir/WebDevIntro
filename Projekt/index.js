// APIRequestURL gibt den Pfad zur lokalen JSON-Datei an
APIRequestURL = "http://localhost:63342/untitled/Projekt/Beispiel_Response.json"
Response = {}

// Diese Funktion führt Dinge bei laden der Seite aus
document.addEventListener('DOMContentLoaded', function () {

    // API Request wenn die Seite geladen wird um die Wetterdaten herzubekommen
    fetch(APIRequestURL)
        .then(response => response.json())
        .then(data => {
            Response = data;
        })
        .catch(error => {
            console.log('Fehler beim Abrufen der Daten:', error);
        });


    // Dieser Teil rendert ein Div mit der Klasse "container" 5 mal
    const container = document.getElementById("container");
    // Anzahl der divs, die du darstellen möchtest
    const divCount = 5;

    for (let i = 0; i < divCount; i++) {
        const div = document.createElement("div");
        div.textContent = `Dies ist div Nummer ${i + 1}`;
        div.style.border = "1px solid black";
        div.style.margin = "5px";
        div.style.padding = "10px";

        container.appendChild(div);
    }
});

/*
Im file "Beispiel_Response.json" ist eine Beispiel Response wie wir später bekommen von der API.
Hier ist ein Beispiel wie wir die Daten danach verarbeiten können. Momentan sind die Daten in der Variablen "Response" gespeichert.
In der folgenden Funktion holen wir uns alle Daten vom ersten Tag und logen sie in der Console. Da wir ja die Daten für alle 7 Tage an der gleichen Stelle haben (z.B. Response.daily.time würde
uns alle Daten).
*/

function DatenVomErstenTag() {
    // Hier loggen wir das Datum welches der Tag ist.
    console.log(Response.daily.time[0]); // Logt das Datum des ersten Tages
    console.log(Response.daily.time) // Logt alle Daten
}

