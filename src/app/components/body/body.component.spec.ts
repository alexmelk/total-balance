/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { BodyComponent } from './body.component'
import { OpenBankService } from './wallet-table/services/open-bank-service'

describe('BodyComponent', () => {
    let component: BodyComponent
    let fixture: ComponentFixture<BodyComponent>

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BodyComponent],
            providers: [OpenBankService],
        }).compileComponents()
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(BodyComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
