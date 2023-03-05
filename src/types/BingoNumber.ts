import { ColorCode } from "@/domains/bingo/consts/colorCodes";

export type BingoNumber = {
  number: number;
  isHit: boolean;
  color: ColorCode;
};
