
interface Project {
    title : string,
    role : string,
    tags : string[],
    cover : string,
    caseStudyUrl : string,
    projectUrl : string | null,
}

export const PROJECTS: Project[] = [

    {
        title : 'Elite Canadian Homestay',
        role : 'Small business design + development',
        tags : ['Brochure website', 'Professional, clean design', 'Static site'],
        cover : '/projects/elite-homestay-cover.webp',
        caseStudyUrl : '/case-study/elite-homestay',
        projectUrl : 'https://elitehomestay.com',
    },

    {
        title : 'Kelly Ann Creations',
        role : 'Small business design + development',
        tags : ['Brochure website', 'Minimalist, modern design', 'Static site'],
        cover : '/projects/kelly-ann-creations-cover.webp',
        caseStudyUrl : '/case-study/kelly-ann-creations',
        projectUrl : 'https://kelly-ann-creations.netlify.app/',
    },

    {
        title : 'Tri-city Bikes and Brews',
        role : 'Wordpress design + development',
        tags : ['Wordpress blog', 'Custom theme', 'Modern design'],
        cover : '/projects/bikes-and-brews-cover.webp',
        caseStudyUrl : '/case-study/bikes-and-brews',
        projectUrl : 'https://web.archive.org/web/20250224205751/https://bikesandbrews.ca/',
    },

    {
        title : 'Vitality Fitness',
        role : 'Wordpress design + development',
        tags : ['Wordpress', 'Modern design', 'Custom theme'],
        cover : '/projects/vitality-fitness-cover.webp',
        caseStudyUrl : '/case-study/vitality-fitness',
        projectUrl : 'https://web.archive.org/web/20250228131451/http://vitality-fitness.ca/',
    },

    {
        title : 'Megan Riley',
        role : 'Landing page design + development',
        tags : ['Landing Page', 'Modern, professional design', 'Static site'],
        cover : '/projects/megan-riley-cover.webp',
        caseStudyUrl : '/case-study/megan-riley',
        projectUrl : null,
    },
    
]