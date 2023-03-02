import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewComponentComponent } from './profile-view-component.component';

describe('ProfileViewComponentComponent', () => {
  let component: ProfileViewComponentComponent;
  let fixture: ComponentFixture<ProfileViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileViewComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
