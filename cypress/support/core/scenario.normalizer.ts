export class ScenarioNormalizer {
  public randomizeState(state: any): any {
    if (!!state.emailStep) {
      state.emailStep.email = this.randomEmail();
    }
    if (!!state.identityStep) {
      state.identityStep.lastName = this.randomName();
      state.identityStep.firstName = this.randomName();
    }
    if (!!state.partnerIdentityStep) {
      state.partnerIdentityStep.lastName = this.randomName();
      state.partnerIdentityStep.firstName = this.randomName();
    }
    return state;
  }

  randomEmail(): string {
    const email = "regression_test." + this.formatDate() + "@yuc.fr";
    return email;
  }

  formatDate(): string {
    const today = new Date();
    return (
      today.getFullYear().toString() +
      today.getMonth() +
      today.getDate() +
      today.getHours() +
      today.getMinutes() +
      today.getSeconds()
    );
  }

  randomName(): string {
    let text = "";
    const possible = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 10; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  randomDate(start: Date, end: Date): Date {
    let date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    if (date.getMonth() === 0) {
      date = new Date(date.getFullYear(), 3, date.getDate());
    }
    if (date.getDate() === 1) {
      date = new Date(date.getFullYear(), date.getMonth(), 20);
    }
    return date;
  }
}
