export interface Task {
    id?: number,
    title: string,
    description: string,
    delivery_date: string,
    creation_date: string,
    conclude?: boolean,
    conclude_date?: string,
    edition_date?: string,
}