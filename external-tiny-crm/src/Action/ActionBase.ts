export abstract class ActionBase {
  protected request: any;

  constructor (request: any) {
    this.request = request;
  }

  /**
   * action nameを取得
   * @protected
   * @return string action name
   */
  protected getActionName() {
    let className = this.constructor.name;
    return className.replace("Action", "");
  }

  public abstract validate(): void;

  public abstract execute (): any;
}
