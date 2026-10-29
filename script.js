function updateClock() {
    const now = new Date();

    // Uhrzeit formatieren (HH:MM:SS)
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

    // Datum auf Deutsch formatieren
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('de-DE', options);
}

// Uhrzeit sofort beim Laden anzeigen
updateClock();

// Jede Sekunde aktualisieren
setInterval(updateClock, 1000);

