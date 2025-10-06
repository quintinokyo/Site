// Menu móvel
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    const open = menu.style.display === 'flex';
    menu.style.display = open ? 'none' : 'flex';
    hamburger.setAttribute('aria-expanded', (!open).toString());
  });
}

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Formulário: abre email com dados preenchidos
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const nome = data.get('nome');
    const email = data.get('email');
    const telefone = data.get('telefone');
    const mensagem = data.get('mensagem');

    const subject = encodeURIComponent(`Orçamento — INOVASEG (${nome})`);
    const body = encodeURIComponent(
      `Nome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\n\nMensagem:\n${mensagem}`
    );

    // Substitua o email abaixo pelo e-mail comercial da INOVASEG
    window.location.href = `mailto:contato@inovaseg.com?subject=${subject}&body=${body}`;
  });
}