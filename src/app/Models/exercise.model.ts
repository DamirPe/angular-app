export class Exercise {
    constructor(
      public exercise: {
        id: number,
        name: string,
        parentIds: number[],
      },
      public sets: number,
      public reps: number
    ) {}
  }