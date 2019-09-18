import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidlebarComponent } from './midlebar.component';

describe('MidlebarComponent', () => {
  let component: MidlebarComponent;
  let fixture: ComponentFixture<MidlebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidlebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidlebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
