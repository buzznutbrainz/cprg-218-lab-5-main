document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('skip-info-button').addEventListener('click', () => window.location.href = 'cardDetails/skipCard.html');
  document.getElementById('reverse-info-button').addEventListener('click', () => window.location.href = 'cardDetails/reverseCard.html');
  document.getElementById('draw-info-button').addEventListener('click', () => window.location.href = 'cardDetails/drawCard.html');
  document.getElementById('uno-official-rules-button').addEventListener('click', () => window.location.href = 'cardDetails/officialRules.html');
});