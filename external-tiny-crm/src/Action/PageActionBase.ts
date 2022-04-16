import {ActionBase} from "./ActionBase";
import HtmlTemplate = GoogleAppsScript.HTML.HtmlTemplate;

export abstract class PageActionBase extends ActionBase {
  protected pageTitle: string;

  protected constructor (request: any, pageTitle: string) {
    super(request);
    this.pageTitle = pageTitle;
  }

  protected getViewTemplate() {
    let html = HtmlService.createTemplateFromFile(this.getActionName());
    html.pageTitle = this.pageTitle;
    return html;
  }

  protected getView(html: HtmlTemplate) {
    return html.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .setWidth(800)
        .setHeight(600)
        .setTitle(this.pageTitle);
  }
}
