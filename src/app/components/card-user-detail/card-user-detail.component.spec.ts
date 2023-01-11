import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUserDetailComponent } from './card-user-detail.component';

describe('CardUserDetailComponent', () => {
  let component: CardUserDetailComponent;
  let fixture: ComponentFixture<CardUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardUserDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
