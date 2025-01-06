const btn = document.querySelector('[data-element="mobile-menu-btn"]') as HTMLButtonElement

function toggleMobileMenu(): void { 
    const body = document.body as HTMLBodyElement
    body.dataset.mobileMenu = body.dataset.mobileMenu === 'open' ? 'closed' : 'open'
    btn.blur()
}

btn.addEventListener('click', toggleMobileMenu )
btn.addEventListener('focus', toggleMobileMenu )
btn.addEventListener('blur', toggleMobileMenu )