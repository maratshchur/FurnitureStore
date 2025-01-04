function startCountdown(initialTime) {
    const countdownDisplay = document.getElementById('countdown'); 
  
    let timeLeft = initialTime; // Время в секундах
  
    const storedTime = localStorage.getItem('countdownTime');
    if (storedTime) {
      timeLeft = parseInt(storedTime, 10);
    }
  
    const intervalId = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(intervalId);
        countdownDisplay.textContent = 'Время вышло!';
        localStorage.removeItem('countdownTime'); // Удаляем данные из localStorage после завершения отсчета
        return;
      }
  
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      countdownDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
      timeLeft--;
      localStorage.setItem('countdownTime', timeLeft); // Сохраняем оставшееся время в localStorage
    }, 1000);
  }
  
  
  const initialTimeInSeconds = 3600; 
  
  startCountdown(initialTimeInSeconds);