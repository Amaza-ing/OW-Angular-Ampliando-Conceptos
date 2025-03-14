import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationsBannerComponent } from './recommendations-banner.component';

describe('RecommendationsBannerComponent', () => {
  let component: RecommendationsBannerComponent;
  let fixture: ComponentFixture<RecommendationsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationsBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
