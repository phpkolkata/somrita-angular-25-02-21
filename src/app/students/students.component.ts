import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'app-students',
  templateUrl: 'students.component.html',
  // template: `
  //   <h1>inline tpl</h1>
  //   <hr />
  // `,
  // styles: [
  //   `
  //     h1 {
  //       color: red;
  //     }
  //   `,
  // ],
  styleUrls: ['students.component.css'],
})
export class StudentsComponent {}
