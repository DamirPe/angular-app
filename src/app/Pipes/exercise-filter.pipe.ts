import { Pipe, PipeTransform } from '@angular/core';
import { BodyPart } from '../Models/bodyPart.model';

@Pipe({
  name: 'exerciseFilter'
})
export class ExerciseFilterPipe implements PipeTransform {

  transform(value: any[], selectedBodyParts: BodyPart[]): any[] {
    if (!value || value.length === 0 || !Array.isArray(selectedBodyParts)) {
      return value;
    }

    return value.filter(exercise => {
      return selectedBodyParts.some(selectedPart => exercise.parentIds.includes(selectedPart.id));
    });
  }

}
