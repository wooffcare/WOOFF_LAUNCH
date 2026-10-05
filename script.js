/**
 * Wooff Kids - Text Type Effect & Loading Indicator Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  const typingTargets = document.querySelectorAll('.typing-target');
  const phrase = "Better oral care for kids?";
  
  let charIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  function typeStep() {
    if (isPaused) return;

    if (!isDeleting) {
      // Typing forward
      charIndex++;
      const currentText = phrase.substring(0, charIndex);
      typingTargets.forEach(el => el.textContent = currentText);

      if (charIndex === phrase.length) {
        // Finished typing full phrase, pause for 4 seconds
        isPaused = true;
        setTimeout(() => {
          isPaused = false;
          isDeleting = true;
          typeStep();
        }, 4000);
        return;
      }
      setTimeout(typeStep, 65 + Math.random() * 30);
    } else {
      // Backspacing
      charIndex--;
      const currentText = phrase.substring(0, charIndex);
      typingTargets.forEach(el => el.textContent = currentText);

      if (charIndex === 0) {
        // Finished erasing, pause briefly before typing again
        isPaused = true;
        setTimeout(() => {
          isPaused = false;
          isDeleting = false;
          typeStep();
        }, 600);
        return;
      }
      setTimeout(typeStep, 35);
    }
  }

  // Start typing effect immediately
  typeStep();
});
