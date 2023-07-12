/**
 * 
 * Site Configuration
 * 
 */


/**
 * Site Info
 */

export const SITE_URL = 'http://'

export const SITE_BASE_PATH = '/'

export const SITE_FULL_NAME = 'Full Cool Site Name Ltd.'

export const SITE_SHORT_NAME = 'Cool Site'

export const LOGO_NAME = SITE_SHORT_NAME

export const PHONE_NUMBER = '604-533-1234'

export const EMAIL_ADDRESS = 'email@email.com'

export const LOCATION = 'Port Coquitlam, BC'

export const ADDRESS = '123 Address St, City, BC'

export const HEADER_LOGO_PATH = '/img/logo.svg'

export const HEADER_LOGO_DIMENSIONS = { width : 28, height : 28 }

export const HERO_IMG_PATH = '/img/hero.webp'

export const HERO_IMG_ALT_TEXT = 'Hero image alt text'

export const HERO_IMG_DIMENSIONS = { width : 200, height : 100 }

export const FAVICON_PATH = '/meta-img/favicon.svg'

export const OPENGRAPH_PATH = '/meta-img/og.png'


/**
 * Navigation Links
 */

export interface Navlink {
    title     : string,
    path      : string,
    mainNav   : boolean,
    footerNav : boolean,
    cta       : boolean
}

/** Note: There can only be 1 Call to Action link */
export const NAV_LINKS : Navlink[] = [
    {
        title     : 'Home',
        path      : '/',
        mainNav   : true,
        footerNav : true,
        cta       : false
    },
    {
        title     : 'About',
        path      : '/about',
        mainNav   : true,
        footerNav : true,
        cta       : false
    },
    {
        title     : 'Products',
        path      : '/products',
        mainNav   : true,
        footerNav : true,
        cta       : false
    },
    {
        title     : 'Contact',
        path      : '/contact',
        mainNav   : true,
        footerNav : true,
        cta       : false
    },
    {
        title     : 'Form',
        path      : '/form',
        mainNav   : true,
        footerNav : true,
        cta       : false
    },
    {
        title     : 'Store',
        path      : '/store',
        mainNav   : true,
        footerNav : true,
        cta       : false
    },
    {
        title     : 'Privacy Policy',
        path      : '/privacy',
        mainNav   : false,
        footerNav : true,
        cta       : false
    },
    {
        title     : 'Admin',
        path      : '/admin/index.html',
        mainNav   : false,
        footerNav : true,
        cta       : false
    },
    {
        title     : 'Call to Action',
        path      : '/cta',
        mainNav   : true,
        footerNav : true,
        cta       : true
    },
]

export interface Contactlink {
    title : string,
    icon? : string,
    path?  : string
}

export const CONTACT_LINKS: Contactlink[] = [
    {
        title : PHONE_NUMBER,
        icon  : 'phone_iphone',
        path  : 'tel:' + PHONE_NUMBER
    },
    {
        title : EMAIL_ADDRESS,
        icon  : 'email',
        path  : 'mailto:' + EMAIL_ADDRESS
    },
    {
        title : LOCATION,
        icon  : 'place',
    },
]


/**
 * General Types
 */

export interface Layout {
    title : string,
    description : string,
    class? : string
}