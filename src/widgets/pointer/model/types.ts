export type IPointerParams = {
  readonly letter: string;
};

export interface IPrefixWord {
  readonly title: string;
  readonly id: number;
}

export type IPrefixWords = Record<string, IPrefixWord[]>;
