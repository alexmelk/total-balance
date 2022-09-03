import { currencySymbolType } from '../../body.component'

export interface WalletItemModel {
    createdDateTime?: string
    value: number | undefined
    type: currencySymbolType
    comment: string
}
