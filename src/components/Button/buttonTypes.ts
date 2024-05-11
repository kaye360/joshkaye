interface BaseButton  { 

    variant? : 'fill' | 'outline' | 'ghost',

    class? : string,

    id? : string,

    /**
     * 
     * @description This component can render as either a button or an anchor tag.
     * 
     * @prop variant : 'outline-primary' | 'outline-secondary' | 'outline-tertiary' | 'fill-primary' | 'fill-secondary' | 'fill-tertiary' | 'plain-primary' | 'plain-secondary' | 'plain-tertiary',
     * @prop icon? : string
     * @prop class? : string
     * @prop id? : string
     * 
     * @prop href? : string
     * @prop target? : '_blank'
     * @prop download? : boolean
     * 
     * @prop type? : 'submit' | 'reset' | 'button'
     * @prop disabled? : boolean
     * @prop name? : string
     * @prop value? : string
     * 
     * @prop slot
     */
    props? : true,
}

export interface HtmlATag extends BaseButton {
    href      : string,
    target?   : '_blank',
    download? : boolean,

    type?     : never,
    disabled? : never,
    name?     : never,
    value?    : never
}

export interface HtmlButtonTag extends BaseButton { 
    href?     : never,
    target?   : never,
    download? : never

    type?      : 'submit' | 'reset' | 'button',
    disabled?  : boolean,
    name?      : string,
    value?     : string
}
