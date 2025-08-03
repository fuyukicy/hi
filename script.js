window.onload = function() {
  document.querySelector('.start-btn').addEventListener('click', function() {
    document.querySelector('.intro-screen').style.display = 'none';
    document.getElementById('message').style.display = 'block';

    const fortune = document.querySelector('.fortune-text');
    fortune.classList.add('reveal');
  });
};
