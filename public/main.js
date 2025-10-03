// main.js - Handles all interactivity for Eman's Birthday site (mobile optimized)

// main.js - All interactive and animation features for Eman's Birthday (mobile optimized)
document.addEventListener('DOMContentLoaded', function() {
  // Love messages for floating notes
  const loveMessages = [
    "You're my everything 💕",
    "I love your smile ☺️",
    "You make me complete 💖",
    "Forever yours 💑",
    "My heart beats for you 💓",
    "You're so beautiful 🌹",
    "Thinking of you always 💭",
    "You're my sunshine ☀️",
    "I'm so lucky to have you 🍀",
    "You're absolutely amazing ✨",
    "Can't wait to see you 😘",
    "You light up my life ✨",
    "Our love is eternal 💞"
  ];
  const balloonEmojis = ['🎈', '🎈', '🎈', '🎈'];
  const confettiColors = ['#ff69b4', '#ff1493', '#db7093', '#ffc0cb', '#ffb6c1'];

  // Stars
  function createStars() {
    const container = document.getElementById('starsContainer');
    for (let i = 0; i < 60; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 3 + 's';
      container.appendChild(star);
    }
  }

  // Sparkles on touch
  let lastSparkle = 0;
  document.addEventListener('touchmove', function(e) {
    const now = Date.now();
    if (now - lastSparkle > 100 && e.touches.length > 0) {
      createSparkle(e.touches[0].clientX, e.touches[0].clientY);
      lastSparkle = now;
    }
  });
  function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.innerHTML = '✨';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.fontSize = (Math.random() * 16 + 10) + 'px';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  }

  // Floating love notes
  function createLoveNote() {
    const note = document.createElement('div');
    note.className = 'love-note';
    note.innerHTML = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    note.style.left = Math.random() * (window.innerWidth - 120) + 'px';
    note.style.bottom = '-50px';
    document.body.appendChild(note);
    setTimeout(() => note.remove(), 8000);
  }

  // Kiss marks
  function createKissMarks() {
    setInterval(() => {
      const kiss = document.createElement('div');
      kiss.className = 'kiss-mark';
      kiss.innerHTML = '💋';
      kiss.style.left = Math.random() * 90 + '%';
      kiss.style.top = Math.random() * 90 + '%';
      document.body.appendChild(kiss);
      setTimeout(() => kiss.remove(), 4000);
    }, 3500);
  }

  // Fireworks
  function createFirework(x, y) {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f093fb', '#f5576c', '#ffd93d'];
    const container = document.getElementById('fireworksContainer');
    for (let i = 0; i < 18; i++) {
      const firework = document.createElement('div');
      firework.className = 'firework';
      firework.style.left = x + 'px';
      firework.style.top = y + 'px';
      const color = colors[Math.floor(Math.random() * colors.length)];
      firework.style.background = color;
      firework.style.setProperty('--color', color);
      const angle = (Math.PI * 2 * i) / 18;
      const velocity = 30 + Math.random() * 30;
      firework.style.setProperty('--x', Math.cos(angle) * velocity + 'px');
      firework.style.setProperty('--y', Math.sin(angle) * velocity + 'px');
      container.appendChild(firework);
      setTimeout(() => firework.remove(), 1500);
    }
  }

  // Party popper
  function createPartyPopper(x, y) {
    const popper = document.createElement('div');
    popper.className = 'party-popper';
    popper.innerHTML = '🎉';
    popper.style.left = x + 'px';
    popper.style.top = y + 'px';
    document.body.appendChild(popper);
    setTimeout(() => popper.remove(), 2000);
  }

  // Touch/click for popper and fireworks
  document.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      createPartyPopper(e.touches[0].clientX, e.touches[0].clientY);
      createFirework(e.touches[0].clientX, e.touches[0].clientY);
    }
  });
  document.addEventListener('click', (e) => {
    createPartyPopper(e.clientX, e.clientY);
    createFirework(e.clientX, e.clientY);
  });

  // Floating hearts
  function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 2.5 + 's';
    heart.style.fontSize = Math.random() * 14 + 18 + 'px';
    document.getElementById('heartContainer').appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }

  // Floating balloons
  function createFloatingBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'floating-balloon';
    balloon.innerHTML = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDuration = Math.random() * 3 + 4 + 's';
    balloon.style.fontSize = Math.random() * 18 + 22 + 'px';
    balloon.style.setProperty('--drift', (Math.random() * 120 - 60) + 'px');
    document.getElementById('balloonContainer').appendChild(balloon);
    setTimeout(() => balloon.remove(), 8000);
  }

  // Confetti
  function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 2 + 2.5 + 's';
    confetti.style.animationDelay = Math.random() * 1.5 + 's';
    const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    confetti.style.setProperty('--color', color);
    document.getElementById('confettiContainer').appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }

  // Gift box
  const giftBox = document.getElementById('giftBox');
  const surpriseMessage = document.getElementById('surpriseMessage');
  giftBox.addEventListener('click', (e) => {
    giftBox.style.display = 'none';
    surpriseMessage.classList.add('show');
    createFirework(window.innerWidth/2, window.innerHeight/2);
    setTimeout(() => createFirework(window.innerWidth/2 + 60, window.innerHeight/2 - 60), 200);
    setTimeout(() => createFirework(window.innerWidth/2 - 60, window.innerHeight/2 + 60), 400);
  });

  // Countdown timer
  function updateCountdown() {
    const startDate = new Date(2024, 0, 1);
    const now = new Date();
    const difference = now - startDate;
    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const timer = document.getElementById('countdownTimer');
    timer.innerHTML = `
      <div class="countdown-item">
        <span class="countdown-value">${years}</span>
        <span class="countdown-label">Years</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-value">${months}</span>
        <span class="countdown-label">Months</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-value">${days}</span>
        <span class="countdown-label">Days</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-value">${hours}</span>
        <span class="countdown-label">Hours</span>
      </div>
    `;
  }

  // Section navigation
  window.scrollToSection = function(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  // Intro screen
  const introScreen = document.getElementById('introScreen');
  const enterBtn = document.getElementById('enterBtn');
  const mainContainer = document.getElementById('mainContainer');
  enterBtn.addEventListener('click', () => {
    introScreen.classList.add('fade-out');
    setTimeout(() => {
      mainContainer.classList.add('active');
    }, 1000);
  });

  // Music control
  const musicControl = document.getElementById('musicControl');
  const musicIcon = document.querySelector('.music-icon');
  const bgMusic = document.getElementById('bgMusic');
  let isPlaying = false;
  let musicClickCount = 0;
  musicControl.addEventListener('click', () => {
    if (!isPlaying) {
      bgMusic.play();
      musicIcon.textContent = '🔊';
      isPlaying = true;
    } else {
      bgMusic.pause();
      musicIcon.textContent = '🔇';
      isPlaying = false;
    }
    musicClickCount++;
    if (musicClickCount === 3) {
      document.getElementById('easterEgg').style.display = 'block';
      musicClickCount = 0;
    }
  });
  document.getElementById('closeEaster').addEventListener('click', () => {
    document.getElementById('easterEgg').style.display = 'none';
  });

  // Initialize all effects
  createStars();
  setInterval(createFloatingHeart, 600);
  setInterval(createFloatingBalloon, 1200);
  setInterval(createConfetti, 350);
  setInterval(createLoveNote, 5000);
  createKissMarks();
  updateCountdown();
  setInterval(updateCountdown, 60000);

  // Try to auto-play music on load (may be blocked by browser)
  window.addEventListener('load', () => {
    bgMusic.play().catch(() => {});
  });
});
