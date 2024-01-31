export interface HIWStep { 
    title: string;
    description: string;
}

export interface HIWPhase { 
    title: string;
    description: string;
    steps: HIWStep[];
}