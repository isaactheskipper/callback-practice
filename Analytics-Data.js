(function() {
    const interactionQueue = [], delay = 3000;
    let timer;
  
    function track(action, callback) {
      interactionQueue.push(action);
      console.log(`Queued: ${action}`);
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(interactionQueue.splice(0, interactionQueue.length));
      }, delay);
    }
  
    function sendToServer(data) {
      console.log(`Sent to server: ${JSON.stringify(data)}`);
    }
  
    document.querySelectorAll('.track').forEach(button => 
      button.addEventListener('click', e => 
        track(e.target.dataset.action, sendToServer)
      )
    );
  })();
  