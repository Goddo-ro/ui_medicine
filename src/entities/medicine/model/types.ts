export interface IMedicine {
  readonly id: number;
  readonly title: string;
  readonly type_id: number;
  readonly description: string;
}

export interface IGetMedicineBody {
  readonly search?: string;
  readonly startsWith?: string;
}

export interface IPrefix {
  readonly [key: string]: string[];
}
