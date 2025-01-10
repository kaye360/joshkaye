import { AppWindow, ChartSpline, FastForward, Lock, MonitorSmartphone, NotebookPen, SearchCheck, type IconNode } from "lucide"

interface Plan {
    title : string,
    description : string,
    slug : string,
    price : number,
    renewalPrice : number,
    features : string[]
}

export const plans : Plan[] = [
    {
        title : 'Starter Website',
        slug : 'starter',
        description : 'Perfect for dolor sit amet consectetur adipisicing elit. Quibusdam, nam!',
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
        description : 'Perfect for dolor sit amet consectetur adipisicing elit. Quibusdam, nam!',
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
        description : 'Perfect for dolor sit amet consectetur adipisicing elit. Quibusdam, nam!',
        price : 2000,
        renewalPrice : 250,
        features : [
            'Full website with up to 6 pages',
            'Hosting for 1 year (Renews at $250/year)',
            'Extra pages for $250/each (one time) plus $10/year',
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
        title : '1 year of website hosting, maintenance, and security (Renewals available)',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sapiente, iusto ad minima neque tempora.',
        icon : Lock,
    },
    {
        title : 'Content writing for the whole site',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sapiente, iusto ad minima neque tempora.',
        icon : NotebookPen,
    },
    {
        title : 'Custom, modern theme that looks great on all screen sizes',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sapiente, iusto ad minima neque tempora.',
        icon : MonitorSmartphone,
    },
    {
        title : 'Website page speed optimization',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sapiente, iusto ad minima neque tempora.',
        icon : FastForward,
    },
    {
        title : 'Analytics (by request)',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sapiente, iusto ad minima neque tempora.',
        icon : ChartSpline,
    },
    {
        title : 'On-page search engine optimization and best practices',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sapiente, iusto ad minima neque tempora.',
        icon : SearchCheck,
    },
    {
        title : 'Integrate with booking and payment apps',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sapiente, iusto ad minima neque tempora.',
        icon : AppWindow,
    },
]