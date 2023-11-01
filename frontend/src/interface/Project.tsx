import type { ServiceInterface } from "./Service";

export interface ProjectInterface { 
    url: string;
    name: string;
    image_url: string;
    services: Array<ServiceInterface>;
}