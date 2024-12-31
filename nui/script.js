document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById("background-video");
    const progressBar = document.getElementById("progress-bar");
    const progressHorse = document.getElementById("progress-horse");
    const videoTimer = config.videoTimer || 10000;

    // Video başladığında RedM seslerini kapat
    function muteRedMSounds() {
        try {
            if (typeof invokeNative !== 'undefined') {
                invokeNative('startMusic', '');
                invokeNative('setAudioSubmixEffectParamInt', 0, 0, 0, 0);
            }
        } catch (error) {
           console.error(error);
        }
    }

    // Video bittiğinde RedM seslerini aç
    function unmuteRedMSounds() {
        try {
            if (typeof invokeNative !== 'undefined') {
                invokeNative('setAudioSubmixEffectParamInt', 0, 0, 1, 1);
            }
        } catch (error) {
            console.error(error);
        }
    }

    // Video başladığında sesleri kapat
    video.addEventListener('play', muteRedMSounds);

    let startTime = Date.now();
    const interval = setInterval(() => {
        let elapsed = Date.now() - startTime;
        let progress = Math.min(elapsed / videoTimer, 1);

        progressBar.style.width = `${progress * 100}%`;
        progressHorse.style.left = `${progress * 100}%`;

        if (progress >= 1) {
            clearInterval(interval);
            closeLoadingScreen();
        }
    }, 16);


    video.play()
        .then(() => {
            muteRedMSounds();
        })
        .catch(error => console.error(error));

  
    if (video) {
        video.volume = config.videoVolume;
    }

 
    video.addEventListener('ended', () => {
        unmuteRedMSounds();
        closeLoadingScreen();
    });
    
    video.addEventListener('error', () => {
        unmuteRedMSounds();
        closeLoadingScreen();
    });
});

function closeLoadingScreen() {
    const video = document.getElementById("background-video");
    const progressContainer = document.getElementById("progress-container");

  
    try {
        if (typeof invokeNative !== 'undefined') {
            invokeNative('setAudioSubmixEffectParamInt', 0, 0, 1, 1);
        }
    } catch (error) {
        console.error(error);
    }

    if (video) {
        video.pause();
        video.remove();
    }

    document.body.style.display = 'none';
}