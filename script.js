// Simple Pop-up Introduction - Shows on Every Visit
window.addEventListener('load', function() {
  // Create modal HTML
  const modalHTML = `
    <div id="intro-modal">
      <div class="modal-content">
        <button class="close-btn">&times;</button>
        <div class="intro-animation">
          <div class="flower flower1">🌸</div>
          <div class="flower flower2">🌺</div>
          <div class="flower flower3">🌼</div>
          <div class="butterfly">🦋</div>
          <div class="character">😊</div>
          <div class="star star1">⭐</div>
          <div class="star star2">✨</div>
        </div>
        <h2>Welcome to My Portfolio!</h2>
        <p>Hi! I'm <strong>Uhirwa Rwigema Faith</strong></p>
        <p>A Grade 7 student passionate about web development and building cool projects!</p>
        <p>Explore my work and learn more about me. 🚀</p>
      </div>
    </div>
  `;
  
  // Add modal to page
  document.body.insertAdjacentHTML('afterbegin', modalHTML);
  
  // Get the close button
  const closeBtn = document.querySelector('.close-btn');
  const modal = document.getElementById('intro-modal');
  
  // Close button click
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });
  
  // Click outside to close
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// Smooth Scrolling
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Hover Effects on Sections
document.querySelectorAll('section').forEach(section => {
  section.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.02) translateY(-5px)';
    this.style.boxShadow = '0 8px 20px rgba(0, 188, 212, 0.4)';
  });
  
  section.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) translateY(0)';
    this.style.boxShadow = '0 4px 10px rgba(0, 188, 212, 0.2)';
  });
  
  section.style.transition = 'all 0.3s ease';
});
