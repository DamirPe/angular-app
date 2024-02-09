import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  signupForm: FormGroup;
  currentDate: Date;

  constructor(private sharedService: SharedService) {
    this.currentDate = new Date();
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, { updateOn: 'submit' }),
      'password': new FormControl(null, { updateOn: 'submit' }),
      'email': new FormControl(null, { updateOn: 'submit' }),
      'age': new FormControl(null, { updateOn: 'submit' }),
      'startDate': new FormControl(null, { updateOn: 'submit' }),
      'check': new FormControl(null),
      'description': new FormControl(null),
      'selectPlan': new FormControl(null, { updateOn: 'submit' }),
      'theme': new FormControl('#ffffff', { updateOn: 'submit' })
    });
  }

  

  onSubmit() {
    this.signupForm.get('username').setValidators([Validators.required]);
    this.signupForm.get('password').setValidators([Validators.required, Validators.minLength(8), Validators.maxLength(16)]);
    this.signupForm.get('email').setValidators([Validators.required, Validators.email]);
    this.signupForm.get('age').setValidators([Validators.required, Validators.min(18), Validators.max(65)]);
    this.signupForm.get('startDate').setValidators([Validators.required, this.dateValidator.bind(this)]);
    this.signupForm.get('selectPlan').setValidators([Validators.required]);

    this.signupForm.updateValueAndValidity();

    this.sharedService.pickMainAppColor(this.signupForm.get('theme').value);
  }

  dateValidator(control: FormControl):{[s: string]: boolean}{
    const selectedDate = new Date(control.value);
    if (isNaN(selectedDate.getTime())) {
      return { 'invalidDate': true };
    }
    if(this.currentDate > selectedDate){
      return{'pastDate': true};
    }
    return null;
  }
}