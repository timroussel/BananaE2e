import { CreditApplicationContexts } from "./creditApplication-contexts";
import { Environments } from "./interfaces";

export const urlsDesktop: {
  [creditApplicationContext in CreditApplicationContexts]: {
    [environments in Environments]: string;
  };
} = {
  [CreditApplicationContexts.France]: {
    [Environments.PROD]: "https://fr-funnel.younited-credit.com/start"
  }
};
