export interface Fund {
    fundName: string;
    class: 'A' | 'B' | 'C' | 'D',
    currencyAsset: string, // TODO: add list of currencies
    isin: string,
    sedol: string,
    feeAM: number // percentage
}