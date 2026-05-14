document.getElementById('locateBtn').addEventListener('click', () => {
  const output = document.getElementById('output');

  if (!navigator.geolocation) {
    output.textContent = 'Geolocation is not supported by your browser';
    return;
  }

  output.textContent = 'Locating...';

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      output.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
    },
    (error) => {
      output.textContent = `Error: ${error.message}`;
    }
  );
});
