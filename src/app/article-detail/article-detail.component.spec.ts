import { TestBed } from '@angular/core/testing';

import { ArticleDetailComponent } from './article-detail.component';

describe('ArticleDetail Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [ArticleDetailComponent]});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(ArticleDetailComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('Article detail Works!');
  });

});
