document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById("background-video");
    const progressBar = document.getElementById("progress-bar");
    const progressHorse = document.getElementById("progress-horse");
    const videoTimer = config.videoTimer || 10000; 


    try {
        if (typeof invokeNative !== 'undefined') {
            invokeNative('startMusic', '');
            invokeNative('setAudioSubmixEffectParamInt', 0, 0, 1, 0); 
            console.log("RedM sesleri kapatıldı.");
        }
    } catch (error) {
        console.log("RedM ses kontrolü hatası:", error);
    }

 
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
        .then(() => console.log("Video started"))
        .catch(error => console.log("Video autoplay prevented:", error));

   
    video.addEventListener('ended', closeLoadingScreen);
    video.addEventListener('error', () => {
        console.log("Video yüklenemedi.");
        closeLoadingScreen();
    });
});


function closeLoadingScreen() {
    const video = document.getElementById("background-video");
    const progressContainer = document.getElementById("progress-container");

  
    try {
        if (typeof invokeNative !== 'undefined') {
            invokeNative('setAudioSubmixEffectParamInt', 0, 0, 1, 1);
            console.log("RedM sesleri geri açıldı.");
        }
    } catch (error) {
        console.log("RedM ses geri açma hatası:", error);
    }

    if (video) {
        video.pause();
        video.remove();
    }

    document.body.style.display = 'none';

    console.log("NUI kapatıldı.");

}
