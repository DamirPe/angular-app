export class PhoneNumber {
    constructor(
      public country: {
        id: number,
        name: string,
        code: string,
        icon: string,
        callingCodeId: number,
        isMainCountryCallingCode: boolean},
      public number: number,
    ) {}
  }