//Indico si estoy cogiendo el video o no.
var streaming = false;
var video = null;

function startup() {
  video = document.getElementById("video"); //obtengo el elemento donde albergo el video en el HTML.

  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false }) //Obtengo la cam del navegador pero no el audio.
    .then(function (stream) {
      //En cuanto la obtengo, ejeuto la funcion que tiene como parametro el flujo de fotogramas
      video.srcObject = stream; //Quiero reproducir el video de la camara, lo asigno a srcObject (fuente, el stream)
      video.play(); //Reproduzco
    })
    .catch(function (err) {
      console.log("ha pasao algo xd: " + err); //Si pasa algo raro pues catch
    });

  video.addEventListener("canplay",      //Si el usuario dice que comparte la camara, sigo
    function (evento) {
      if (!streaming) {
        //Si no estoy emitiendo el video
        //util para modificar una unica vez, por ejemplo, el tamaño
        //del contenedor del video.
        streaming = true; //Estoy emitiendo el video.
      }
    }, false);
}
window.addEventListener("load", startup, false); //En cuanto cargue la página, inicializo.
