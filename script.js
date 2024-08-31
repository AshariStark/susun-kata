const letters = document.querySelectorAll('.letter');
const dropZones = document.querySelectorAll('.drop-zone');
let draggedLetter = null;

letters.forEach(letter => {
    letter.addEventListener('dragstart', () => {
        draggedLetter = letter;
    });
});

dropZones.forEach(zone => {
    zone.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    zone.addEventListener('drop', () => {
        if (!zone.hasChildNodes()) {
            zone.appendChild(draggedLetter);
        }
    });
});

function checkWord() {
    const word = Array.from(dropZones).map(zone => zone.textContent).join('');
    const resultElement = document.getElementById('result');
    if (word === 'KATA') {
        resultElement.textContent = 'Benar! Anda berhasil.';
    } else {
        resultElement.textContent = 'Salah! Coba lagi.';
    }
}
