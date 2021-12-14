import { CreditApplicationContexts } from "./creditApplication-contexts";

export const scenarios = [
  {
    name: "FR_SINGLE",
    creditApplicationContext: CreditApplicationContexts.France,
    data: `
            {
            "bankStep": {
                "bankCode": "BNP_PARIBAS",
                "bankFrom": 1262304000000,
                "isRepayingDebts": false,
                "isValid": true,
                "order": 9,
                "path": "bank"
            },
            "contactStep": {
                "cellPhoneNumber": "0699999999",
                "isValid": true,
                "order": 13,
                "path": "contact",
                "adress": "21 rue de chateaudun",
                "postalCode": "75019",
                "countryCode": "FR",
                "city": "7511975019"
            },
            "emailStep": {
                "email": "gfdgsf@gggggggg.ua",
                "isValid": true,
                "order": 2,
                "path": "email",
                "businessProviderCode": "Web"
            },
            "familySituationStep": {
                "childNumber": "0",
                "isValid": true,
                "maritalStatusCode": "SINGLE",
                "order": 3,
                "path": "familysituation"
            },
            "financialSituationStep": {
                "additionalIncome": 0,
                "isValid": false,
                "loanCount": "0",
                "loans": [],
                "order": 7,
                "path": "financialsituation"
            },
            "housingStep": {
                "housingStatus": "HOMELESS",
                "housingStatusFrom": 986083200000,
                "isValid": true,
                "order": 4,
                "path": "housing"
            },
            "identityStep": {
                "birthPostalCode": 75020,
                "dateOfBirth": 134006400000,
                "firstName": "dgfdsgf",
                "genderCode": "MME",
                "isValid": true,
                "lastName": "ggfds",
                "maidenName": "gfdsgf",
                "nationalityCountryCode": "FR",
                "order": 10,
                "path": "identity",
                "secondNationalityCountryCode": "-1",
                "countryCode": "FR"
            },
            "incomesStep": {
                "additionalIncome": 0,
                "coIncome": 2500,
                "household": 350,
                "isValid": true,
                "mainIncome": 4400,
                "order": 7,
                "path": "incomes",
                "property": 350,
                "yucSessionId": "4b83c2d8-b0a2-4a39-a5d1-30d1a136f6d9"
            },
            "startState": {
                "agentCode": null,
                "borrowedAmount": 10000,
                "borrowedAmountCode": "10K",
                "creditMaturityCode": "M48",
                "funnelType": 0,
                "isValid": true,
                "maturity": 48,
                "order": 0,
                "path": "",
                "projectTypeCode": "NEWCAR",
                "selectedOffer": null,
                "yucSessionId": "4b83c2d8-b0a2-4a39-a5d1-30d1a136f6d9"
            },
            "optinState": {
                "isValid": true,
                "yucOptin": true,
                "yucPartnerOptin": true,
                "yucSessionId": "4b83c2d8-b0a2-4a39-a5d1-30d1a136f6d9"
            },
            "outcomesStep": {
                "isLateOnPayment": false,
                "isValid": true,
                "loanCount": 0,
                "loans": [],
                "mortgageAmount": 900,
                "monthlyTaxesAmount": 2115,
                "order": 8,
                "otherAmount": 450,
                "path": "outcomes",
                "pensionAmount": 0,
                "yucSessionId": "4b83c2d8-b0a2-4a39-a5d1-30d1a136f6d9"
            },
            "professionalSituationStep": {
                "activitySector": "PRIVATE_SECTOR",
                "contractType": "PERMANENT",
                "employedFrom": 1356998400000,
                "isValid": true,
                "order": 5,
                "path": "professionalsituation",
                "profession": "SECURITY_GUARD",
                "siretCode": "36252187900034",
                "naceCode": "1910A",
                "yucSessionId": "4b83c2d8-b0a2-4a39-a5d1-30d1a136f6d9",
                "isCompanyBankrupt": false
            }
        }`
  }
];
