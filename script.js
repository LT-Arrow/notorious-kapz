document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('[data-tone]').forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && button.dataset.filter !== card.dataset.tone;
    });
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('share').addEventListener('click', async () => {
  const status = document.getElementById('share-status');
  try {
    if (navigator.share) {
      await navigator.share({title:'Notorious Kapz',text:'Quality headwear. Unmistakable attitude.',url:location.href});
      status.textContent = 'Thanks for spreading the word.';
    } else if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(location.href);
      status.textContent = 'Link copied. Make your mark.';
    } else {
      status.textContent = 'Copy the address from your browser to share this page.';
    }
  } catch (error) {
    status.textContent = error.name === 'AbortError' ? '' : 'Copy the address from your browser to share this page.';
  }
});

document.getElementById('copy-email').addEventListener('click', async () => {
  const status = document.getElementById('contact-status');
  try {
    await navigator.clipboard.writeText('Munozpressuerwashing@gmail.com');
    status.textContent = 'Email address copied.';
  } catch {
    status.textContent = 'Select and copy the email address above, or use the email button.';
  }
});
