import { currencySymbolType } from '../body.component';

export interface OpenBankModel {
  from: string;
  to: string;
  purchasePrice: number;
  salePrice: number;
  range: number;
  priceCurrency: string;
  createdAt: string;
}

export interface MoneyItemModel {
  createdDateTime?: string;
  value: number | undefined;
  type: currencySymbolType;
  comment: string;
}
