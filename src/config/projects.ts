
interface Project {
    title : string,
    role : string,
    tags : string[],
    cover : string,
    caseStudyUrl : string,
    projectUrl : string | null,
}

export const projects: Project[] = [

    {
        title : 'Elite Canadian Homestay',
        role : 'Web design + development',
        tags : ['Brochure website', 'Professional, clean design', 'Static site'],
        cover : '/projects/elite-homestay-cover.webp',
        caseStudyUrl : '/projects/case-study/elite-homestay',
        projectUrl : 'https://elitehomestay.com',
    },

    {
        title : 'Kelly Ann Creations',
        role : 'Web design + development',
        tags : ['Brochure website', 'Minimalist, modern design', 'Static site'],
        cover : '/projects/kelly-ann-creations-cover.webp',
        caseStudyUrl : '/projects/case-study/kelly-ann-creations',
        projectUrl : 'https://kelly-ann-creations.netlify.app/',
    },

    {
        title : 'Tri-city Bikes and Brews',
        role : 'Web design + development',
        tags : ['Wordpress blog', 'Custom theme', 'Modern design'],
        cover : '/projects/bikes-and-brews-cover.webp',
        caseStudyUrl : '/projects/case-study/bikes-and-brews',
        projectUrl : 'https://bikesandbrews.ca',
    },

    {
        title : 'Vitality Fitness',
        role : 'Web design + development',
        tags : ['Wordpress', 'Modern design', 'Custom theme'],
        cover : '/projects/vitality-fitness-cover.webp',
        caseStudyUrl : '/projects/case-study/vitality-fitness',
        projectUrl : 'https://vitality-fitness.ca',
    },

    {
        title : 'Megan Riley',
        role : 'Web design + development',
        tags : ['Landing Page', 'Modern, professional design', 'Static site'],
        cover : '/projects/megan-riley-cover.webp',
        caseStudyUrl : '/projects/case-study/megan-riley',
        projectUrl : null,
    },
    
]