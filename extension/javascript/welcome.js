navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
  alert("Microphone access has successfully been granted!");
  window.close();
});
