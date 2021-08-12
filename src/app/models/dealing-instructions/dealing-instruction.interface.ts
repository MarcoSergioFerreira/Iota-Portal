import { Fund } from "./fund.interface";

export interface DealingInstruction extends Fund {
    currencySettlement: string, // TODO: add list of currencies
    instruction: 'BUY' | 'SELL' | 'SWITCH',
    amount: number,
    units?: string // TODO: confirm type
    limitPrice?: number
}