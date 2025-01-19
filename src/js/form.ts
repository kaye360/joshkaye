
export function persistForm( form : HTMLFormElement ) {
    const formData = new FormData(form)
    const entries = formData.entries()
    const data = Object.fromEntries(entries)
    localStorage.setItem("form", JSON.stringify(data))
}

export function loadPersistedForm( form : HTMLFormElement ) {
    const savedData = localStorage.getItem("form")

    if (!savedData) return

    const formData = Object.entries ( JSON.parse(savedData) )

    for (const [key, value] of formData ) {

        const input = form.elements.namedItem(key) as HTMLInputElement | null
        
        if( !input ) return

        if (input.type === "checkbox" || input.type === "radio") {
            input.checked = input.value === value
        } else {
            input.value = value as string
        }
    }
}

export function disableInitialInvalidState( inputs : string[] ) {
    inputs.forEach( input => {
        const el = document.querySelector(`#${input}`) as HTMLInputElement | HTMLTextAreaElement
        if( !el ) return
        el.dataset.isTouched = 'false'
        el.addEventListener('focus', () => el.dataset.isTouched = 'true')
    })
}