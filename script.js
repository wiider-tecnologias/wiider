document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    const copyBtn = document.getElementById('copyEmailBtn');
    const copyFeedback = document.getElementById('copyFeedback');
    const email = 'sac@wiider.com.br';

    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(email);
                if (copyFeedback) {
                    copyFeedback.textContent = '✓ E-mail sac@wiider.com.br copiado para a área de transferência!';
                    setTimeout(() => {
                        copyFeedback.textContent = '';
                    }, 3500);
                }
            } catch {
                if (copyFeedback) {
                    copyFeedback.textContent = 'E-mail: sac@wiider.com.br';
                }
            }
        });
    }
});

