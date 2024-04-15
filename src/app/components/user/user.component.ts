import { Component } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { RouterLink } from '@angular/router';
import { BookingService } from '../booking/booking.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [BookingComponent,RouterLink,CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  Users: any;
  constructor(private service:BookingService){
this.getAllUsers();
  }

  getAllUsers(){
    this.service.getAllUsers().subscribe(data=>{
      this.Users = data;
      console.log("users",data);
    })
  }

}
