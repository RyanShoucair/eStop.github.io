document.getElementById('contactForm')?.addEventListener('submit', e => {
    e.preventDefault();
    e.target.reset();
    alert('Thank you for your message. We will get back to you soon!');
});
