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
    subPages? : SubPage[],

    /**
     * The grouping of the page. Usually for the location in the UI for this page to show
     */
    group : PageGroup[]
}

export type SubPage = Omit<Page, 'group'>


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
        subPages : [
            { title : 'Small business website', path : '/services/sub1' },
            { title : 'E-commerce website', path : '/services/sub2' },
            { title : 'Local SEO and Google Ads', path : '/services/sub3' },
            { title : 'Website Analytics', path : '/services/sub4' },
            { title : 'Landing Pages', path : '/services/sub5' },
            { title : 'Small business website', path : '/services/sub1' },
            { title : 'E-commerce website', path : '/services/sub2' },
            { title : 'Local SEO and Google Ads', path : '/services/sub3' },
        ]
    },
    {
        title : 'Examples',
        path  : '/examples',
        group : ['header', 'footer'],
        subPages : [
            { title : 'Small business website', path : '/services/sub1' },
            { title : 'E-commerce website', path : '/services/sub2' },
            { title : 'Local SEO and Google Ads', path : '/services/sub3' },
        ]
    },
    {
        title : 'About',
        path  : '/about',
        group : ['header', 'footer'],
    },
    {
        title : 'Contact',
        path  : '/contact',
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
        title : 'Site Map',
        path  : '/site-map',
        group : ['footer'],
    },
    {
        title : 'Book Now',
        path  : '/booking',
        group : ['cta'],
    },
]