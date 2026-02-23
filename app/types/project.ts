export interface Project {
    id: string | number | undefined | ""
    title: string | undefined | ""
    description: string | undefined | ""
    company: string | undefined | ""
    startDate:string | undefined | ""
    endDate: string | undefined | ""
    screenshots: Array<String | undefined | "" | []>
    skills: Array<String | undefined | "" | []>
}