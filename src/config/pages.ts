/**
 * 
 * Site Page Config
 * 
 */


export type PageGroup = 'header' | 'footer' | 'cta'

export interface Page {
    /**
     * The title of the page as seen in the UI
     */
    title : string,

    /**
     * The relative path to the page
     */
    path : string,

    /**
     * An array of pages to appear as a dropdown
     */
    subPages? : Page[],

    /**
     * The grouping of the page. Usually for the location in the UI for this page to show
     */
    group : PageGroup[]
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
    },
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
        title : 'Book Now',
        path  : '/booking',
        group : ['cta'],
    },
]