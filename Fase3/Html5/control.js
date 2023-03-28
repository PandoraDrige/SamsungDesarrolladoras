function loadVideo(file, videoPlayer) {

    //Check if the file is mp4    
    if (file.type === 'video/mp4') {
        // do not show error msg
        document.getElementById("formarError").hidden = true;
        
        //create url
        const url = URL.createObjectURL(file);

        //Read the file
        const reader = new FileReader();
        reader.onloadstart = () => {
            //Show spinner
            document.getElementById("loadingSpinnner").hidden = false;
        };
        reader.onload = () => {
            //hide placeholder  text
            document.getElementById("videoPlaceHolder").hidden = true;

            document.getElementById("loadingSpinnner").hidden = false;
            videoPlayer.src = url;

            videoPlayer.onloadedmetadata = () => {
                //enable buttons
                const buttons = document.getElementsByTagName('button');
                for (let i = 0; i < buttons.length; i++) {
                    if (buttons[i].id != 'pause' && buttons[i].id != 'restart') {
                        buttons[i].disabled = false;
                    }
                }
                //hide spinner
                document.getElementById("loadingSpinnner").hidden = true;

                //remove videoplaceholder
                document.getElementById("videoContainer").classList.remove("videoPlaceHolder");
            }
        };
        reader.readAsDataURL(file);

    } else {
        document.getElementById("formarError").hidden = false;
    }
}

function downVolumen(button, video) {
    if (video.volume.toFixed(2) >= 0.10) {
        video.volume -= 0.1;
        document.getElementById('vUp').disabled = false;
    } else {
        button.disabled = true;
    }
}

function upVolumen(button, video) {
    if (video.volume != 1) {
        video.volume += 0.1;
        document.getElementById('vDown').disabled = false;
    } else {
        button.disabled = true;
    }
}

function resetButtons() {
    document.getElementById('play').disabled = false;
    document.getElementById('pause').disabled = true;
    document.getElementById('restart').disabled = true;
}