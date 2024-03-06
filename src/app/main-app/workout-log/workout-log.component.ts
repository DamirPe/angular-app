import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BodyPart } from '../../Models/bodyPart.model';
import * as data from '../../../assets/exercises.json';
import { Exercise } from '../../Models/exercise.model';

@Component({
  selector: 'app-workout-log',
  templateUrl: './workout-log.component.html',
  styleUrls: ['./workout-log.component.css']
})
export class WorkoutLogComponent implements OnInit {
  workoutForm: FormGroup;
  visible = false;

  bodyParts: BodyPart[] = [
    { id: 1, name: 'Back' },
    { id: 2, name: 'Legs' },
    { id: 3, name: 'Shoulders' },
    { id: 4, name: 'Biceps' },
    { id: 5, name: 'Triceps' },
    { id: 6, name: 'Chest'},
    { id: 7, name: 'Abs'}
  ];

  exerciseInputArray: Exercise[] = [];
  bodyPartNames: string[] = [];
  exercises = (data as any).default;
  muscleGroupId: number[] = [];

  constructor(private formBuilder: FormBuilder) {}  

  ngOnInit() {
    this.workoutForm = this.formBuilder.group({
      date: new FormControl(null, Validators.required),
      duration: new FormControl(null, Validators.required),
      muscleGroup: new FormControl(null, Validators.required),
    });

    this.bodyPartNames = this.bodyParts.map(bodyPart => bodyPart.name);

    // Initialize exerciseInputArray with an empty Exercise object
    this.exerciseInputArray.push(new Exercise(null, null, null));
  }

  showDialog() {
    this.visible = true;
  }

  addExercise() {
    // Push a new instance of Exercise to exerciseInputArray
    this.exerciseInputArray.push(new Exercise(null, null, null));
  }

  onMultiSelectChange() {}

  onSubmit() {}
}
