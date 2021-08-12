import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { INSTRUCTION } from 'src/app/models/dealing-instructions/instruction.model';
import { PdfService } from 'src/app/services/pdf/pdf.service';
import { MOCK_FUND_LIST } from '../../services/temp-be/ mock-data/fund-list.model'

@Component({
  selector: 'app-dealing-instruction',
  templateUrl: './dealing-instruction.component.html',
  styleUrls: ['./dealing-instruction.component.scss']
})
export class DealingInstructionComponent implements OnInit {

  fundForms: FormGroup[] = [
    this.fb.group({
      fundName: [''],
      class: [''],
      currencyAsset: [''],
      isin: [''],
      sedol: [''],
      feeAM: [0],
      currencySettlement: [''],
      instruction: [''],
      amount: [0],
      limitPrice: ['']
    })
  ]

  fundList = MOCK_FUND_LIST;
  instructions = INSTRUCTION;

  constructor(
    private fb: FormBuilder,
    private pdfService: PdfService
  ) { }

  ngOnInit(): void {
  }

  public addFund(): void {
    this.fundForms.push(new FormGroup({
      fundName: new FormControl(''),
      class: new FormControl(''),
      currencyAsset: new FormControl(''),
      isin: new FormControl(''),
      sedol: new FormControl(''),
      feeAM: new FormControl(0),
      currencySettlement: new FormControl(''),
      instruction: new FormControl(''),
      amount: new FormControl(0),
      limitPrice: new FormControl(''),
    }))
    console.log(this.fundForms)
  }

  public selectFund(fundName: string, fundGroupIndex: number): void {
    let selectedFund = MOCK_FUND_LIST.find(fund => fund.fundName === fundName)

    console.log("🚀 ~ file: dealing-instruction.component.ts ~ line 38 ~ DealingInstructionComponent ~ selectFund ~ selectedFund", selectedFund)

    this.fundForms[fundGroupIndex].patchValue({
      class: selectedFund?.class,
      currencyAsset: selectedFund?.currencyAsset,
      isin: selectedFund?.isin,
      sedol: selectedFund?.sedol,
      feeAM: selectedFund?.feeAM
    })
    console.log("🚀 ~ file: dealing-instruction.component.ts ~ line 42 ~ DealingInstructionComponent ~ selectFund ~ this.dealingInstructionForm", this.fundForms)
  }

  public addToPDF(fundIndex: number): void {
    this.pdfService.addFundToDealingInstruction(this.fundForms[fundIndex].value, fundIndex);
  }

}
