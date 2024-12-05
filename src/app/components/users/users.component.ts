import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-users',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './users.component.html',
})
export class UsersComponent { //This is a form written with  NgForm.
  addModel = new Users();
  updateModel = new Users();
  users: Users[] = [];
  userIndex: number = 0;
  isActive: boolean = false

  add(form: NgForm) {
    if (form.valid) {
      this.users.push(form.value)
      form.resetForm()
    }
  }
  update(form: NgForm) {
    if (form.valid) {
      this.users[this.userIndex] = this.updateModel
      this.isActive = false
    } }
  get(model: Users, index: number) {
    this.userIndex = index;
    this.updateModel = { ...model };
    this.isActive = true
  }
  del(index: number) { this.users.splice(index, 1) }
  cancel() { this.isActive = false; }
}
class Users {
  id: number = 0;
  name: string = "";
  username: string = "";
}
