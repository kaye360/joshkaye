import { isClicked } from "../isClicked"
    
/**
 * If the user clicked outside of the menu, close the mobile menu
 */
window.addEventListener('click', (e: MouseEvent) => {

    const header = document.querySelector('header') as HTMLElement
    const nav = document.querySelector('nav') as HTMLElement

    if( 
        !isClicked({e, el: header}) && 
        !isClicked({e, el: nav}) 
    ) {
        document.body.dataset.mobileMenu = 'closed'
    }
})