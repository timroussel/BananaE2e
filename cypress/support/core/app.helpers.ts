import { CreditApplicationContexts } from "./creditApplication-contexts";
import { Environments } from "./interfaces";
import { ScenarioNormalizer } from "./scenario.normalizer";
import { scenarios } from "./scenarios";
import { urlsDesktop } from "./urls";

export interface E2eParams {
  scenario: string;
  creditApplicationContext: CreditApplicationContexts;
  withCoBorrower: boolean;
  funnelState: any;
  startUrl: string;
  featuresToActivate?: string[];
  featuresToDesactivate?: string[];
}

export function getDateFormatted(): string {
  const now = new Date();
  return now.toISOString().substring(0, 19);
}

function getE2eParams(scenarioName: string, isMobile: boolean): E2eParams {
  const normalizer = new ScenarioNormalizer();
  const scenario = scenarios.filter(s => s.name == scenarioName)[0];
  const funnelState = normalizer.randomizeState(JSON.parse(scenario.data));
  const environment = Cypress.env("environment");

  let startUrl = getStartUrl(environment, scenario.creditApplicationContext);

  if (!!funnelState.startState) {
    startUrl = `${startUrl}?ProjectTypeCode=${funnelState.startState.projectTypeCode}`;

    if (!!funnelState.startState.businessProviderCode) {
      startUrl = `${startUrl}&BusinessProviderCode=${funnelState.startState.businessProviderCode}`;
    }
  }

  console.log(`start url = ${startUrl}`);

  const params = {
    scenario: scenario.name,
    creditApplicationContext: scenario.creditApplicationContext,
    withCoBorrower: scenario.withCoBorrower,
    isMobile,
    funnelState: funnelState,
    startUrl: startUrl
  };

  return params;
}

export function getE2eParamsDesktop(scenarioName: string): E2eParams {
  return getE2eParams(scenarioName, false);
}

export function getE2eParamsMobile(scenarioName: string): E2eParams {
  return getE2eParams(scenarioName, true);
}

export function getStartUrl(
  environment: Environments,
  creditApplicationContext: CreditApplicationContexts
): string {
  return urlsDesktop[creditApplicationContext][environment];
}
