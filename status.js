function checkServerStatus() {
  const onlineIndicator = document.getElementById('online');
  const offlineIndicator = document.getElementById('offline');

  fetch('https://watch.dude.science/web/assets/img/banner-light.png', { method: 'HEAD' })
    .then(response => {
      if (response.status === 200) {
        onlineIndicator.style.display = 'inline';
        offlineIndicator.style.display = 'none';
      } else {
        onlineIndicator.style.display = 'none';
        offlineIndicator.style.display = 'inline';
      }
    })
    .catch(error => {
      onlineIndicator.style.display = 'none';
      offlineIndicator.style.display = 'inline';
    });
}

checkServerStatus();
