function updateServerStatus() {
  const onlineIndicator = document.getElementById('s-online');
  const notStreamingIndicator = document.getElementById('s-not');
  const offlineIndicator = document.getElementById('s-offline');
  const viewersCount = document.getElementById('viewers');

  fetch('http://127.0.0.1:5000/vc-data')
      .then(response => response.json())
      .then(data => {
          const { dude_present, dude_streaming, other_members } = data;
          
          if (dude_present) {
              if (dude_streaming) {
                  onlineIndicator.style.display = 'inline';
                  notStreamingIndicator.style.display = 'none';
                  offlineIndicator.style.display = 'none';
              } else {
                  onlineIndicator.style.display = 'none';
                  notStreamingIndicator.style.display = 'inline';
                  offlineIndicator.style.display = 'none';
              }
          } else {
              onlineIndicator.style.display = 'none';
              notStreamingIndicator.style.display = 'none';
              offlineIndicator.style.display = 'inline';
          }

          let totalDudes = other_members;
          if (dude_present && !dude_streaming) {
              totalDudes += 1;
          }
          viewersCount.textContent = totalDudes;
      })
      .catch(error => {
          console.error('Error fetching VC data:', error);
          onlineIndicator.style.display = 'none';
          notStreamingIndicator.style.display = 'none';
          offlineIndicator.style.display = 'inline';
          viewersCount.textContent = 0;
      });
}

updateServerStatus();

setInterval(updateServerStatus, 600000);
