document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.rating label');
    stars.forEach(star => {
      star.addEventListener('click', () => {
        const previousStars = Array.from(star.parentNode.children).filter(
          item => item.tagName === 'LABEL' && item.previousElementSibling.checked
        );
        previousStars.forEach(prevStar => (prevStar.style.color = 'gold'));
      });
    });
  });

