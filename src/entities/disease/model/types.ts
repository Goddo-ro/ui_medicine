export interface IDisease {
  readonly id: number;
  readonly title: string;
}

export interface IGetDiseaseBody {
  readonly startsWith?: string;
}
