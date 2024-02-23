export interface HIWStep {
  title: string;
  description: string;
  imageIndex: number;
}

export interface HIWPhase {
  title: string;
  description: string;
  steps: HIWStep[];
}
