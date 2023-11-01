

$('#iban').click(function () {
    var textToCopy = $('#iban').text();
    var tempTextarea = $('<textarea>');
    $('body').append(tempTextarea);
    tempTextarea.val(textToCopy).select();
    document.execCommand('copy');
    tempTextarea.remove();

    $('#iban').fadeOut(500);
    setTimeout(function () {
        $('#iban').html('iban copiato negli appunti');
        $('#iban').fadeIn(200);
        setTimeout(function () {
            $('#iban').fadeOut(500);
            setTimeout(function () {
                $('#iban').html(textToCopy);
                $('#iban').fadeIn(500);
            }, 500)
        }, 500)
    }, 500)
});


function createStars() {
    const stars = 100; // Numero di stelle cadenti
    const container = document.getElementById('main-container'); // Usa il main-container come contenitore

    for (let i = 0; i < stars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`; // Posizione orizzontale casuale
        star.style.top = `${Math.random() * 100}%`; // Posizione verticale casuale
        star.style.animationDuration = `${Math.random() * 2 + 3}s`; // Durata casuale dell'animazione
        container.appendChild(star);
    }
}


createStars(); // Chiama la funzione per creare le stelle