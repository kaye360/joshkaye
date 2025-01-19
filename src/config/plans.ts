import { AppWindow, ChartSpline, FastForward, Lock, MonitorSmartphone, NotebookPen, SearchCheck, type IconNode } from "lucide"

interface Plan {
    title : string,
    description : string,
    slug : string,
    price : number,
    renewalPrice : number,
    features : string[]
}

export const PLANS : Plan[] = [
    {
        title : 'Starter Website',
        slug : 'starter',
        description : 'Ideal for a one-person business looking to establish their online presence and get their business up and running.',
        price : 500,
        renewalPrice : 150,
        features : [
            'Single landing page with up to 6 sections',
            'Hosting for 1 year (Renews at $150/year)',
            'Content writing',
            'Custom theme and site optimization',
            'Integrate with booking and payment apps'
        ]
    },
    {
        title : '3-Page Website',
        slug : '3-page',
        description : 'Perfect for a small business that has grown and requires a more comprehensive website beyond a single page.',
        price : 1000,
        renewalPrice : 150,
        features : [
            'Website with up to 3 pages',
            'Hosting for 1 year (Renews at $150/year)',
            'Content writing',
            'Custom theme and site optimization',
            'Integrate with booking and payment apps'   
        ]
    },
    {
        title : '6-Page Website',
        slug : '6-page',
        description : 'Designed for the small business that requires a complete brochure website with the potential for future growth and scalability.',
        price : 2000,
        renewalPrice : 250,
        features : [
            'Full website with up to 6 pages',
            'Hosting for 1 year (Renews at $250/year)',
            'Extra pages for $250/each (one time) plus $10/year hosting',
            'Content writing',
            'Custom theme and site optimization',
            'Integrate with booking and payment apps'
        ]
    },

]

interface PlanFeature {
    title : string,
    description: string,
    icon : IconNode
}

export const planFeatures : PlanFeature[] = [
    {
        title : '1 year of website hosting, maintenance, and security',
        description : 'Get one year of reliable website hosting, ongoing maintenance, and robust security to keep your site running smoothly and safely. Renewals available.',
        icon : Lock,
    },
    {
        title : 'Content writing for the whole site',
        description : 'Professional, SEO-friendly content will be created for your entire site, ensuring clear communication and engagement with your audience.',
        icon : NotebookPen,
    },
    {
        title : 'Custom, modern theme that looks great on all screen sizes',
        description : 'A custom, modern theme will be designed to look stunning and function seamlessly across all screen sizes.',
        icon : MonitorSmartphone,
    },
    {
        title : 'Website page speed optimization',
        description : 'Website page speed will be optimized to ensure fast load times, improving user experience and boosting conversion rates.',
        icon : FastForward,
    },
    {
        title : 'Analytics (by request)',
        description : 'Analytics will be set up upon request, providing valuable insights into your website\'s performance and user behavior.',
        icon : ChartSpline,
    },
    {
        title : 'On-page search engine optimization and best practices',
        description : 'On-page SEO will be implemented to improve your site\'s visibility, helping it rank higher in search engine results and attract more traffic.',
        icon : SearchCheck,
    },
    {
        title : 'Integrate with booking and payment apps',
        description : 'Your website will be seamlessly integrated with booking and payment apps, streamlining transactions and enhancing user convenience.',
        icon : AppWindow,
    },
]