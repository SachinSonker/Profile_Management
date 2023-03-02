import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewComponetComponent } from './list-view-componet.component';

describe('ListViewComponetComponent', () => {
  let component: ListViewComponetComponent;
  let fixture: ComponentFixture<ListViewComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewComponetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListViewComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
