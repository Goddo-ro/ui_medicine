export type PointerParams = {
  readonly letter: string;
};

export interface PrefixWord {
  readonly title: string;
  readonly id: number;
}

export type PrefixWords = Record<string, PrefixWord[]>;
