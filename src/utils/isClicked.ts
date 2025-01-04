

/**
 * Determines if an element was in the click event.
 */
export function isClicked( {e, el} : {e : MouseEvent, el : Element} ) {
    return document.elementsFromPoint(e.x, e.y).includes( el )
}