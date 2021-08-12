import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { DealingInstruction } from 'src/app/models/dealing-instructions/dealing-instruction.interface';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  // Nedbank PDF field names (x = row number)
  // ISIN: "SEDOL/ISIN_Row_x"
  // Instruction: "BUY SELL SWITCHRowx"
  // Amount: "CASH CURRENCY AND AMOUNTRowx"
  // Units: "UNITSNOMINALRowx"
  // Fund Name: "STOCK NAME in fullRowx"
  // Asset Currency: "CURRENCY OF ASSETRowx"
  // Settlement Currency: "CLIENT SETTLEMENT CURRENCYRow1"

  // TODO: add type
  private nedbankDealingInstructionData: ReplaySubject<any> = new ReplaySubject<any>();
  private formData: ReplaySubject<any> = new ReplaySubject<any>();

  constructor() { }

  public get nedbankDealingInstructionData$(): Observable<any> {
    return this.nedbankDealingInstructionData.asObservable();
  }

  public get formData$(): Observable<any> {
    return this.formData.asObservable();
  }

  public updateFormData(data: any): void {
    // this.formData.next(data);
  }

  public addFundToDealingInstruction(fund: DealingInstruction, index: number): void {
    console.log("🚀 ~ file: pdf.service.ts ~ line 12 ~ PdfService ~ addFundToDealingInstruction ~ fund", fund)
    const PDF_KEYS: any = this.createPdfKeys(index);
    let newFormData: any = {};

    newFormData[PDF_KEYS.isin] = fund.isin;
    newFormData[PDF_KEYS.instruction] = fund.instruction;
    newFormData[PDF_KEYS.amount] = fund.amount;
    newFormData[PDF_KEYS.fundName] = fund.fundName;
    newFormData[PDF_KEYS.currencyAsset] = fund.currencyAsset;
    newFormData[PDF_KEYS.currencySettlement] = fund.currencySettlement;
    console.log("🚀 ~ file: pdf.service.ts ~ line 55 ~ PdfService ~ addFundToDealingInstruction ~ newFormData", newFormData)

    this.formData.next({formData: fund, index: index});

    // console.log("🚀 ~ file: pdf.service.ts ~ line 44 ~ PdfService ~ addFundToDealingInstruction ~ this.formData", this.formData)
    // let currentData = this.formData.value;

    // for (let i = 0; i < currentData.length; i++) {
    //   // console.log("🚀 ~ file: pdf.service.ts ~ line 45 ~ PdfService ~ addFundToDealingInstruction ~ currentData", currentData[i])
    //   // currentData.forEach((annotation: any), index = 0 => {
    //   currentData[i].fieldAnnotation = this.updateAnnotation(currentData[i].fieldAnnotation, fund, PDF_KEYS);
    // };
    // console.log("🚀 ~ file: pdf.service.ts ~ line 46 ~ PdfService ~ //currentData.forEach ~ currentData", currentData)

    // this.updateFormData(currentData);
    // this.nedbankDealingInstructionData.next(this.mapNedbankDealingInstructionData(fund, index));
  }

  // private updateAnnotation(fund: DealingInstruction, annotation: any, keys: string[]) {
  //   if (keys.includes(annotation.fieldName)) {
  //     return this.assignValue(annotation, fund, keys);
  //   }
  // }

  private updateAnnotation(annotation: any, fund: DealingInstruction, keys: any) {
    console.log("🚀 ~ file: pdf.service.ts ~ line 62 ~ PdfService ~ updateAnnotation ~ annotation.fieldName", annotation.fieldName)
    if (annotation.fieldName === keys.isin) {
      annotation.contents = fund.isin
      return annotation;
    } else if (annotation.fieldName === keys.instruction) {
      annotation.contents = fund.instruction
      return annotation;
    } else if (annotation.fieldName === keys.amount) {
      annotation.contents = fund.amount
      return annotation;
    } else if (annotation.fieldName === keys.fundName) {
      annotation.contents = fund.fundName
      return annotation;
    } else if (annotation.fieldName === keys.currencyAsset) {
      annotation.contents = fund.currencyAsset
      return annotation;
    } else if (annotation.fieldName === keys.currencySettlement) {
      annotation.contents = fund.currencySettlement
      return annotation;
    } else {
      return annotation;
    }
  }

  // private mapNedbankDealingInstructionData(fund: DealingInstruction, index: number): any {
  //   let rowData: any = {};

  //   rowData[PDF_KEYS.isin] = fund.isin;
  //   rowData[PDF_KEYS.instruction] = fund.instruction;
  //   rowData[PDF_KEYS.amount] = fund.amount;
  //   rowData[PDF_KEYS.fundName] = fund.fundName;
  //   rowData[PDF_KEYS.currencyAsset] = fund.currencyAsset;
  //   rowData[PDF_KEYS.currencySettlement] = fund.currencySettlement;

  //   return rowData;
  // }

  // TODO: create separate functions for Nedbank / Stonehage
  private createPdfKeys(index: number): any {
    return {
      isin: `SEDOL/ISIN_Row_${index + 1}`,
      instruction: `BUY SELL SWITCHRow${index + 1}`,
      amount: `CASH CURRENCY AND AMOUNTRow${index + 1}`,
      fundName: `STOCK NAME in fullRow${index + 1}`,
      currencyAsset: `CURRENCY OF ASSETRow${index + 1}`,
      currencySettlement: `CLIENT SETTLEMENT CURRENCYRow${index + 1}`,
    }
  }
}
