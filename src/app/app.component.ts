import { Component } from '@angular/core';
import { Student } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: Student[] = [
    {
      Sid: 1,
      Sname: 'kesari',
      dob: new Date('1990-05-15'),
      course: 'Computer Science',
      fees: 2000
    },
    {
      Sid: 2,
      Sname: 'reddy',
      dob: new Date('1995-03-20'),
      course: 'Electrical Engineering',
      fees: 2200
    },
    {
      Sid: 3,
      Sname: 'sidhartha',
      dob: new Date('1998-07-10'),
      course: 'Mechanical Engineering',
      fees: 2100
    },
    {
      Sid: 4,
      Sname: 'sai',
      dob: new Date('1992-11-30'),
      course: 'Civil Engineering',
      fees: 2150
    }
  ];
}
