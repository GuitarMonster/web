import { HtmlModule } from './html.module';

describe('HtmlModule', () => {
  let htmlModule: HtmlModule;

  beforeEach(() => {
    htmlModule = new HtmlModule();
  });

  it('should create an instance', () => {
    expect(htmlModule).toBeTruthy();
  });
});
