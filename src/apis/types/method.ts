export interface GetMethodResponse {
    methods: MethodItem[]
}

export class MethodItem {
    id: number;
    name: string;
}