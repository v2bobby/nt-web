function initializeTailwind() {
    return { config() { return { content: [], theme: { extend: { colors: { primary: '#10b981' } } }, plugins: [] }; } };
}

function initialize() {
    const config = initializeTailwind().config();
    document.documentElement.setAttribute('data-tailwind-config', JSON.stringify(config));

    let score = 87;
    const scoreEl = document.querySelector('.text-7xl');
    if (scoreEl) {
        setInterval(() => {
            score = Math.min(95, score + Math.floor(Math.random() * 3));
            scoreEl.textContent = score;
        }, 2800);
    }
    console.log('%c🚀 NomaTrack landing page initialized', 'color:#10b981; font-family:monospace');
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-icon');
    menu.classList.toggle('hidden');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
}

function showWaitlistModal() {
    const modal = document.getElementById('waitlist-modal');
    modal.classList.remove('hidden'); modal.classList.add('flex');
}

function hideWaitlistModal() {
    const modal = document.getElementById('waitlist-modal');
    modal.classList.add('hidden'); modal.classList.remove('flex');
}

function handleSubmit(e) {
    e.preventDefault();
    // (same demo logic as before)
    const btnText = document.getElementById('submit-text');
    const original = btnText.innerHTML;
    btnText.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i><span class="ml-3">Connecting...</span>`;
    setTimeout(() => {
        btnText.innerHTML = `<i class="fa-solid fa-check-circle"></i><span class="ml-3">You’re in!</span>`;
        btnText.style.color = '#10b981';
        setTimeout(() => { hideWaitlistModal(); e.target.reset(); btnText.innerHTML = original; btnText.style.color = ''; }, 2100);
    }, 1650);
}

window.onload = initialize;