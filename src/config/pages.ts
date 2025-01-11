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

export type SubPage = Omit<Page, 'group' | 'subPages'>


export const PAGES : Page[] = [
    {
        title : 'Home',
        path  : '/',
        group : ['header', 'footer'],
    },
    {
        title : 'Plans + Pricing',
        path  : '/plans',
        group : ['header', 'footer'],
        subPages : [
            { title : 'Starter website', path : '/plans/starter'},
            { title : '3-page website', path : '/plans/3-page'},
            { title : '6-page website', path : '/plans/6-page'},
            { title : 'Compare all plans', path : '/plans'},
        ]
    },
    {
        title : 'Projects',
        path  : '/projects',
        group : ['header', 'footer'],
    },
    {
        title : 'FAQ',
        path  : '/faq',
        group : ['header', 'footer'],
    },
    {
        title : 'About',
        path  : '/about',
        group : ['footer'],
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
        title : 'Site Map',
        path  : '/site-map',
        group : ['footer'],
    },
    {
        title : 'Get Started',
        path  : '/get-started',
        group : ['cta'],
    },
]