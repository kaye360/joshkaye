/**
 * 
 * Site Configuration
 * 
 */


/**
 * Site Info
 */

export const SITE_URL        = 'http://'
export const SITE_BASE_PATH  = '/'
export const SITE_FULL_NAME  = 'Full Cool Site Name Ltd.'
export const SITE_SHORT_NAME = 'Cool Site'
export const LOGO_NAME       = SITE_SHORT_NAME
export const PHONE_NUMBER    = '604-533-1234'
export const EMAIL_ADDRESS   = 'email@email.com'
export const LOCATION        = 'Port Coquitlam, BC'
export const ADDRESS         = '123 Address St, City, BC'


/**
 * Site Pages
 */

export type PageGroup = 'header' | 'footer' | 'services' | 'about'

export interface Page {
    title     : string,
    path      : string,
    group     : PageGroup[],
    dropdown? : PageGroup
}


export const PAGES : Page[] = [
    {
        title : 'Home',
        path  : '/',
        group : ['header', 'footer'],
    },
    {
        title : 'Services',
        path  : '/services',
        group : ['header', 'footer'],
        dropdown : 'services'
    },
        {
            title : 'Service One',
            path  : '/serviceone',
            group : ['services']
        },
        {
            title : 'Service Two',
            path  : '/servicetwo',
            group : ['services']
        },
        {
            title : 'Service Three',
            path  : '/servicethree',
            group : ['services']
        },
        {
            title : 'Service Four',
            path  : '/serviceone',
            group : ['services']
        },
        {
            title : 'Service Five',
            path  : '/serviceone',
            group : ['services']
        },
        {
            title : 'Service Six',
            path  : '/serviceone',
            group : ['services']
        },
        {
            title : 'Service Seven',
            path  : '/serviceone',
            group : ['services']
        },
        {
            title : 'Service Eight',
            path  : '/serviceone',
            group : ['services']
        },
        {
            title : 'Service Nine',
            path  : '/serviceone',
            group : ['services']
        },
        {
            title : 'Service Ten',
            path  : '/serviceone',
            group : ['services']
        },
        {
            title : 'Service Eleven',
            path  : '/serviceone',
            group : ['services']
        },
        {
            title : 'Service Twelve',
            path  : '/serviceone',
            group : ['services']
        },
    {
        title : 'Products',
        path  : '/products',
        group : ['header', 'footer'],
    },
    {
        title : 'Contact',
        path  : '/contact',
        group : ['header', 'footer'],
    },
    {
        title : 'About',
        path  : '/about',
        group : ['header', 'footer'],
        dropdown : 'about'
    },
        {
            title : 'About One',
            path  : '/about1',
            group : ['about']
        },
        {
            title : 'About Two',
            path  : '/about2',
            group : ['about']
        },
        {
            title : 'About Three',
            path  : '/about1',
            group : ['about']
        },
    // {
    //     title : 'Store',
    //     path  : '/store',
    //     group : ['header', 'footer'],
    // },
    {
        title : 'Privacy Policy',
        path  : '/privacy',
        group : ['footer'],
    },
    {
        title : 'Admin',
        path  : '/admin/index.html',
        group : ['footer'],
    },
    {
        title : 'Call to Action',
        path  : '/cta',
        group : ['header', 'footer'],
    },
    {
        title : 'Examples',
        path  : '/examples',
        group : ['header', 'footer'],
    },
]


export const CTAPath = '/cta'

