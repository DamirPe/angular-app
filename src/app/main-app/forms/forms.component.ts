import { Component, OnInit} from '@angular/core';
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
  setOnSubmit = false;

  constructor(private sharedService: SharedService) {
    this.currentDate = new Date();
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
          this.passwordCheck.bind(this)
        ]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'age': new FormControl(null, [Validators.required, Validators.min(18), Validators.max(65)]),
      'startDate': new FormControl(null, [Validators.required, this.dateValidator.bind(this)]),
      'check': new FormControl(null),
      'description': new FormControl(null),
      'selectPlan': new FormControl(null, Validators.required),
      'theme': new FormControl('#ffffff')
    });
}

  

  onSubmit() {
    this.setOnSubmit = true;
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

  passwordCheck(control: FormControl):{[s: string]:boolean}{
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /\d/;
    

    if(uppercaseRegex.test(control.value) && lowercaseRegex.test(control.value) && numberRegex.test(control.value)){
      return {'correctPassword': true};
    }
    return null;
  }
}