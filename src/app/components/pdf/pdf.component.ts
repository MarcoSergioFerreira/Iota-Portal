import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxExtendedPdfViewerService } from 'ngx-extended-pdf-viewer';
import { Subscription } from 'rxjs';
import { DealingInstruction } from 'src/app/models/dealing-instructions/dealing-instruction.interface';
import { PdfService } from 'src/app/services/pdf/pdf.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit, OnDestroy {

  public nedbankFormData = {
    isin: [''],
    instruction: [''],
    amount: [''],
    fundName: [''],
    currencyAsset: [''],
    currencySettlement: [''],
    // row1: {
    // },
    // row2: {
    //   isin: '',
    //   instruction: '',
    //   amount: '',
    //   fundName: '',
    //   currencyAsset: '',
    //   currencySettlement: '',
    // },
    // row3: {
    //   isin: '',
    //   instruction: '',
    //   amount: '',
    //   fundName: '',
    //   currencyAsset: '',
    //   currencySettlement: '',
    // },
    // row4: {
    //   isin: '',
    //   instruction: '',
    //   amount: '',
    //   fundName: '',
    //   currencyAsset: '',
    //   currencySettlement: '',
    // },
    // row5: {
    //   isin: '',
    //   instruction: '',
    //   amount: '',
    //   fundName: '',
    //   currencyAsset: '',
    //   currencySettlement: '',
    // },
    // row6: {
    //   isin: '',
    //   instruction: '',
    //   amount: '',
    //   fundName: '',
    //   currencyAsset: '',
    //   currencySettlement: '',
    // },
  }

  private rowNumber = 0;

  private formDataSubscription = new Subscription;

  constructor(
    public pdfService: PdfService,
    private ngxService: NgxExtendedPdfViewerService
  ) { }

  ngOnInit(): void {
    this.formDataSubscription = this.pdfService.formData$
      .subscribe((fundData: { formData: DealingInstruction, index: number }) => {
        this.rowNumber = fundData.index;
        // console.log("🚀 ~ file: pdf.component.ts ~ line 73 ~ PdfComponent ~ .subscribe ~ formData", formData)
        this.updateFormData(fundData.formData);
      });
  }

  ngOnDestroy(): void {
    this.formDataSubscription.unsubscribe();
  }

  private updateFormData(fundData: any): void {
    console.log("🚀 ~ file: pdf.component.ts ~ line 82 ~ PdfComponent ~ updateFormData ~ fundData", fundData)
    this.formData = fundData;
    // this.formData = {isin: "text"};
  }

  public get formData(): { [fieldName: string]: string | number | boolean | string[] } {
    return {
      'SEDOLISINRow1': this.nedbankFormData.isin[0] || '',
      'BUY SELL SWITCHRow1': this.nedbankFormData.instruction[0] || '',
      'CASH CURRENCY AND AMOUNTRow1': this.nedbankFormData.amount[0] || '',
      'STOCK NAME in fullRow1': this.nedbankFormData.fundName[0] || '',
      'CURRENCY OF ASSETRow1': this.nedbankFormData.currencyAsset[0] || '',
      'CLIENT SETTLEMENT CURRENCYRow1': this.nedbankFormData.currencySettlement[0] || '',
      'SEDOLISINRow2': this.nedbankFormData.isin[1] || '',
      'BUY SELL SWITCHRow2': this.nedbankFormData.instruction[1] || '',
      'CASH CURRENCY AND AMOUNTRow2': this.nedbankFormData.amount[1] || '',
      'STOCK NAME in fullRow2': this.nedbankFormData.fundName[1] || '',
      'CURRENCY OF ASSETRow2': this.nedbankFormData.currencyAsset[1] || '',
      'CLIENT SETTLEMENT CURRENCYRow2': this.nedbankFormData.currencySettlement[1] || '',
      'SEDOLISINRow3': this.nedbankFormData.isin[2] || '',
      'BUY SELL SWITCHRow3': this.nedbankFormData.instruction[2] || '',
      'CASH CURRENCY AND AMOUNTRow3': this.nedbankFormData.amount[2] || '',
      'STOCK NAME in fullRow3': this.nedbankFormData.fundName[2] || '',
      'CURRENCY OF ASSETRow3': this.nedbankFormData.currencyAsset[2] || '',
      'CLIENT SETTLEMENT CURRENCYRow3': this.nedbankFormData.currencySettlement[2] || '',
      'SEDOLISINRow4': this.nedbankFormData.isin[3] || '',
      'BUY SELL SWITCHRow4': this.nedbankFormData.instruction[3] || '',
      'CASH CURRENCY AND AMOUNTRow4': this.nedbankFormData.amount[3] || '',
      'STOCK NAME in fullRow4': this.nedbankFormData.fundName[3] || '',
      'CURRENCY OF ASSETRow4': this.nedbankFormData.currencyAsset[3] || '',
      'CLIENT SETTLEMENT CURRENCYRow4': this.nedbankFormData.currencySettlement[3] || '',
      'SEDOLISINRow5': this.nedbankFormData.isin[4] || '',
      'BUY SELL SWITCHRow5': this.nedbankFormData.instruction[4] || '',
      'CASH CURRENCY AND AMOUNTRow5': this.nedbankFormData.amount[4] || '',
      'STOCK NAME in fullRow5': this.nedbankFormData.fundName[4] || '',
      'CURRENCY OF ASSETRow5': this.nedbankFormData.currencyAsset[4] || '',
      'CLIENT SETTLEMENT CURRENCYRow5': this.nedbankFormData.currencySettlement[4] || '',
      'SEDOLISINRow6': this.nedbankFormData.isin[5] || '',
      'BUY SELL SWITCHRow6': this.nedbankFormData.instruction[5] || '',
      'CASH CURRENCY AND AMOUNTRow6': this.nedbankFormData.amount[5] || '',
      'STOCK NAME in fullRow6': this.nedbankFormData.fundName[5] || '',
      'CURRENCY OF ASSETRow6': this.nedbankFormData.currencyAsset[5] || '',
      'CLIENT SETTLEMENT CURRENCYRow6': this.nedbankFormData.currencySettlement[5] || '',
    };
  }

  public set formData(data: { [fieldName: string]: string | number | boolean | string[] }) {
    console.log("🚀 ~ file: pdf.component.ts ~ line 128 ~ PdfComponent ~ setformData ~ data", data)
    this.nedbankFormData.isin[this.rowNumber] = data.isin as string;
    console.log("🚀 ~ file: pdf.component.ts ~ line 130 ~ PdfComponent ~ setformData ~ data.isin", data.isin)
    this.nedbankFormData.instruction[this.rowNumber] = data.instruction as string;
    this.nedbankFormData.amount[this.rowNumber] = data.amount as string;
    this.nedbankFormData.fundName[this.rowNumber] = data.fundName as string;
    this.nedbankFormData.currencyAsset[this.rowNumber] = data.currencyAsset as string;
    this.nedbankFormData.currencySettlement[this.rowNumber] = data.currencySettlement as string;
  }

  public async onPageLoaded() {
    const raw = await this.ngxService.getFormData();
    const rawFormData = raw.map((annotation: any) => ({
      alternativeText: annotation.fieldAnnotation.alternativeText,
      fieldName: annotation.fieldAnnotation.fieldName,
      fieldType: annotation.fieldAnnotation.fieldType,
      fieldValue: annotation.fieldAnnotation.fieldValue,
      id: annotation.fieldAnnotation.id,
      maxLen: annotation.fieldAnnotation.maxLen,
      rect: annotation.fieldAnnotation.rect
    }));
    console.log("🚀 ~ file: pdf.component.ts ~ line 154 ~ PdfComponent ~ rawFormData ~ rawFormData", rawFormData)
  }

}
