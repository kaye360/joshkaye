import { PAGES, type Page, type PageGroup } from "../config/pages"

export function getPages() {

    function returnMethods(pages : Page[]) {
        return {
            single : () => pages[0],
            all : () => pages,
        }
    }

    return {
        byTitle(title: string) {
            const pages =  PAGES.filter( page => page.title === title )
            return returnMethods(pages)
        },
        byGroup(group: PageGroup) {
            const pages =  PAGES.filter( page => page.group.includes(group) )
            return returnMethods(pages)
        },
        subPagesOf(title: string) {
            const page =  PAGES.filter( page => page.title === title )[0]
            return page?.subPages || []
        },
        all() {
            return PAGES
        }
    }
}