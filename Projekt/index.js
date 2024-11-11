// APIRequestURL gibt den Pfad zur lokalen JSON-Datei an
APIRequestURL = "http://localhost:63342/untitled/Projekt/Beispiel_Response.json"
Response = {}

// API Request wenn die Seite geladen wird um die Wetterdaten herzubekommen
document.addEventListener('DOMContentLoaded', function () {
    fetch(APIRequestURL)
        .then(response => response.json())
        .then(data => {
            Response = data;
        })
        .catch(error => {
            console.log('Fehler beim Abrufen der Daten:', error);
        });
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

