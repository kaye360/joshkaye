import { PAGES, type Page, type PageGroup, type SubPage } from "../config/pages"

export function getPages() {

    function returnMethods(pages : (Page | SubPage)[]) {
        return {
            single : () => pages[0],
            all : () => pages,
        }
    }

    function flattenedPages() {
        return PAGES.flatMap( page => page.subPages
            ? [...page.subPages]
            : page
        )
    }

    return {

        byTitle(title: string) {

            const pages =  flattenedPages().filter( page => 
                page.title.toLowerCase() === title.toLowerCase() 
            )
            return returnMethods(pages)
        },

        byGroup(group: PageGroup) {
            const pages =  PAGES.filter( page => page.group.includes(group) ) 
            return returnMethods(pages)
        },

        /**
         * 
         */
        subPagesOf(titleOrPath: string) {
            const page =  PAGES.filter( page => page.title === titleOrPath )[0] ||
                          PAGES.filter( page => page.path === titleOrPath )[0]
            return page?.subPages || []
        },

        all() {
            return PAGES
        },

        allFlat() {
            return flattenedPages()
        }
    }
}