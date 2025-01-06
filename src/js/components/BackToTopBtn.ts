// @ts-expect-error
import debounce from 'lodash.debounce'

const backToTopBtnWrapper = document.querySelector('#back-to-top-button-wrapper') as HTMLDivElement
const backToTopBtn = document.querySelector('#back-to-top-button') as HTMLAnchorElement

backToTopBtn.addEventListener('click', e => {
    e.preventDefault()
    scrollTo({
        top : 0, 
        behavior : 'smooth'
    })
})

function showBackToTopBtn() {
    backToTopBtnWrapper.classList.add('bottom-2')
    backToTopBtnWrapper.classList.remove('-bottom-24')
}

function hideBackToTopBtn() {
    backToTopBtnWrapper.classList.add('-bottom-24')
    backToTopBtnWrapper.classList.remove('bottom-2')
}

document.addEventListener('scroll', debounce( () => {
    if( scrollY > window.screen.height) {
        showBackToTopBtn()
    } else {
        hideBackToTopBtn()
    }
}, 500))
