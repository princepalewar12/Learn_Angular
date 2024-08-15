import { CrudserviceService } from './../services/crudservice.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  form!: FormGroup
  data: any;
  toggleRead: boolean = false;
  toggleCreate: boolean = true;
  constructor(private CrudserviceService: CrudserviceService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      number: new FormControl('')
    })
  }
  postData() {
    let createForm = {
      name: this.form.value.name,
      email: this.form.value.email,
      number: this.form.value.number
    }
    this.CrudserviceService.postData(createForm).subscribe({
      next: (res: any) => {
        console.log(res);

      }, error(err: any) {
        console.log(err);

      }
    })
  }
  getData() {
    this.toggleCreate = !this.toggleCreate
    this.toggleRead = !this.toggleRead
    this.CrudserviceService.getData().subscribe({
      next: (res: any) => {
        // console.log(res);
        this.data = res
      },
      error(err: any) {
        console.log(err);

      }
    })
  }
  backFunction() {
    this.toggleRead = !this.toggleRead
    this.toggleCreate = !this.toggleCreate
  }
  deleteData(id: number) {
    this.CrudserviceService.deleteData(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error(err: any) {
        console.log(err);

      }
    })
  }
}
