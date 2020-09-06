$(document).ready(function() {
    // full screen to for experiments
    setTimeout(openFullscreen, 2000);
    // openFullscreen();
});

/* View in fullscreen */
function openFullscreen() {
    /* Get the documentElement (<html>) to display the page in fullscreen */
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

// if (document.addEventListener)
// {
//     document.addEventListener('fullscreenchange', exitHandler, false);
//     document.addEventListener('mozfullscreenchange', exitHandler, false);
//     document.addEventListener('MSFullscreenChange', exitHandler, false);
//     document.addEventListener('webkitfullscreenchange', exitHandler, false);
// }

// function exitHandler()
// {
//     if (document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement !== null)
//     {
//         // Run code on exit
//         alert("This experiment must be run in full screen mode. Please restore to full screen mode to continue.");
//         openFullscreen();
//     }
// }



// var changeHandler = function(){
//     //NB the following line requrires the libary from John Dyer
//     var fs = window.fullScreenApi.isFullScreen();
//     console.log("f" + (fs ? 'yes' : 'no' ));
//     if (fs) {
//         alert("In fullscreen, I should do something here");
//     }
//     else {
//         alert("NOT In fullscreen, I should do something here");
//     }
// }

// document.addEventListener("fullscreenchange", changeHandler, false);
// document.addEventListener("webkitfullscreenchange", changeHandler, false);
// document.addEventListener("mozfullscreenchange", changeHandler, false);



// document.addEventListener("fullscreenchange", onFullScreenChange, false);
// document.addEventListener("webkitfullscreenchange", onFullScreenChange, false);
// document.addEventListener("mozfullscreenchange", onFullScreenChange, false);

// onFullScreenChange() {
//     var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
//     if (fullscreenElement) {
//         alert("In fullscreen, I should do something here");
//     }
//     else {
//         alert("NOT In fullscreen, I should do something here");
//     }
// }


document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);

function exitHandler() {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {

        // ///fire your event
        // alert("You agreed to stay in the full screen mode during this trial. Exiting the full screen mode may result in termination of your participation.\n\n Click OK to go back to full screen. Or you can close the window if you indeed want to quit this trial.");
        // openFullscreen();

        // if the ok button is clicked, result will be true (boolean)
        var result = confirm( "You agreed to stay in the full screen mode during this trial. \n\n Exiting the full screen mode may result in termination of your participation.\n\n Click OK to go back to full screen. Or you can close the window if you indeed want to quit this trial." );

        if ( result ) {
            // the user clicked ok
            openFullscreen();
        } else {
            // window.close();
        }

        setTimeout(openFullscreen, 2000);
    }
}
