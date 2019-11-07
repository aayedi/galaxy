import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Star, StarType} from '../models/star.model';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-create-star',
  templateUrl: './create-star.component.html',
  styleUrls: ['./create-star.component.scss']
})
export class CreateStarComponent implements OnInit {
  createStarForm: FormGroup;
  types: StarType[];

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<CreateStarComponent>) {
    this.types = [StarType.FRONT, StarType.LIBRARY, StarType.BACK];
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.createStarForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: '',
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(values: any): void {
    const star: Star = {
      id: null,
      name: values.name,
      type: values.type,
      description: values.description,
      links: []
    };
    console.log(star);
    this.dialogRef.close({data: star});
  }
}
