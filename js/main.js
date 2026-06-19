document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('welcome-overlay');
  const closeBtn = document.getElementById('welcome-close');

  if (closeBtn && overlay) {
    closeBtn.addEventListener('click', function () {
      overlay.style.display = 'none';
    });
  }
});
