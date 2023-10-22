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
 * Site Pages
 */

export interface Page {
    title            : string,
    path             : string,
    headerNav        : boolean,
    footerNav        : boolean,
}



export const PAGES : Page[] = [
    {
        title            : 'Home',
        path             : '/',
        headerNav        : true,
        footerNav        : true,
    },
    {
        title            : 'About',
        path             : '/about',
        headerNav        : true,
        footerNav        : true,
    },
    {
        title            : 'Products',
        path             : '/products',
        headerNav        : true,
        footerNav        : true,
    },
    {
        title            : 'Contact',
        path             : '/contact',
        headerNav        : true,
        footerNav        : true,
    },
    {
        title            : 'Form',
        path             : '/form',
        headerNav        : true,
        footerNav        : true,
    },
    {
        title            : 'Store',
        path             : '/store',
        headerNav        : true,
        footerNav        : true,
    },
    {
        title            : 'Privacy Policy',
        path             : '/privacy',
        headerNav        : false,
        footerNav        : true,
    },
    {
        title            : 'Admin',
        path             : '/admin/index.html',
        headerNav        : false,
        footerNav        : true,
    },
    {
        title            : 'Call to Action',
        path             : '/cta',
        headerNav        : true,
        footerNav        : true,
    },
]





export const CTAPath = '/cta'





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

