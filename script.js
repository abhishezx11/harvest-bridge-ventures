const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('inquiryForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = `Website inquiry: ${data.get('interest')} — ${data.get('name')}`;
  const body = [
    'New inquiry from the Harvest Bridge Ventures website',
    '',
    `Name: ${data.get('name')}`,
    `Company: ${data.get('company') || 'Not provided'}`,
    `Email: ${data.get('email')}`,
    `Phone: ${data.get('phone') || 'Not provided'}`,
    `Inquiry type: ${data.get('interest')}`,
    '',
    'Requirement:',
    data.get('message')
  ].join('\n');
  const mailto = `mailto:abhishekharvestbridgeventures@gmail.com,anantharvestbridgeventures@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById('formStatus').textContent = 'Opening your email application…';
  window.location.href = mailto;
});
