
document.addEventListener('DOMContentLoaded', () => {

    startLiveClock();


    checkLastActivity();
});


function startLiveClock() {
    const liveWidget = document.getElementById('live-widget');

    setInterval(() => {
        if (liveWidget) {
            const now = new Date();
            const timeString = now.toLocaleTimeString('es-ES', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            liveWidget.innerHTML = `SINCRO: <strong>${timeString}</strong>`;
        }
    }, 1000);
}


function saveAndRedirect(projectName, url) {
    const activity = {
        project: projectName,
        timestamp: new Date().toLocaleString(),
        status: "Interesado"
    };


    localStorage.setItem('lastProjectViewed', JSON.stringify(activity));

    console.log(`Sincronizando datos de ${projectName}...`);


    window.location.href = url;
}


function goToWhatsApp() {
    const phone = "573163802042";
    const message = encodeURIComponent("¡Hola Natalie! Vi tu portafolio y me gustaría conversar contigo sobre tus proyectos.");
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;


    localStorage.setItem('lastContactAttempt', new Date().toLocaleString());

    window.open(whatsappUrl, '_blank');
}


function checkLastActivity() {
    const lastProject = JSON.parse(localStorage.getItem('lastProjectViewed'));
    if (lastProject) {
        console.log(`Bienvenida de nuevo. El último proyecto explorado fue: ${lastProject.project}`);
    }
}


const gameButtons = document.querySelectorAll('.btn-mini');
gameButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        localStorage.setItem('lastAction', `Jugando ${e.target.innerText}`);
    });
});