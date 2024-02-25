
document.addEventListener("DOMContentLoaded", function() {
  const leavesContainer = document.querySelector('.leaves-container');

  // Generate random number of leaves
  const numLeaves = Math.floor(Math.random() * 20) + 10;

  for (let i = 0; i < numLeaves; i++) {
      createLeaf();
  }

  // Function to create a single leaf
  function createLeaf() {
      const leaf = document.createElement('div');
      leaf.classList.add('falling-leaf');

      // Randomize leaf position
      const randomX = Math.random() * window.innerWidth;
      leaf.style.left = randomX + 'px';

      // Randomize animation duration
      const duration = Math.random() * 60 + 5; // Adjust as needed
      leaf.style.animationDuration = duration + 's';

      leavesContainer.appendChild(leaf);

      // Remove leaf when animation ends
      leaf.addEventListener('animationend', function() {
          leavesContainer.removeChild(leaf);
      });
  }
});


window.addEventListener('load', function() {
    var audio = document.getElementById('assets/sound_asset/Jurassic Park - T-Rex Roar (Rexy Best Roar).mp3');
    audio.play();
});