// Mobile navigation toggle (responsive navbar)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a nav link
    document.querySelectorAll('.nav-link').forEach((link) =>
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        })
    );
}

// Smooth scrolling for same-page anchors
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('header[id], section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    let current = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 160) {
            current = section.getAttribute('id') || '';
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// Email obfuscation: render clickable email without exposing it in HTML
function decodeBase64Utf8(b64) {
    try {
        return decodeURIComponent(
            Array.prototype.map
                .call(atob(b64), (c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );
    } catch {
        return '';
    }
}

function formatObfuscatedEmail(email) {
    const [user, domain] = email.split('@');
    if (!user || !domain) return email;
    const parts = domain.split('.');
    if (parts.length < 2) return `${user} [at] ${domain}`;
    const tld = parts.pop();
    const host = parts.join('.');
    return `${user} [at] ${host} [dot] ${tld}`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.js-email-link').forEach((el) => {
        const b64 = el.getAttribute('data-email-b64') || '';
        const email = decodeBase64Utf8(b64);
        if (!email) return;

        const text = el.querySelector('.js-email-text') || el;
        text.textContent = formatObfuscatedEmail(email);

        el.setAttribute('href', `mailto:${email}`);
        el.setAttribute('rel', 'nofollow');
    });
});
