import { Component, Input, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
import * as $ from 'jquery'
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms: boolean = false;
  rooms: Room = {
    totalRooms: 17,
    availableRooms: 18,
    bookedRooms: 7
  }

  roomList: RoomList[] = []




  constructor() { }

  ngOnInit(): void {
    $(document).on('click', function () {
      $("#button").toggle()
    })

    this.roomList = [
      {
        roomNumber: 10,
        roomType: 'Delux Room',
        amenities: 'Air Conditioner, Free Wifi, Tv',
        price: 500,
        photos: 'https://unsplash.com/photos/sunloungers-fronting-buildings-near-mountain-DGa0LQ0yDPc',
        checkinTime: new Date(1 - 3 - 2017),
        checkoutTime: new Date(10 - 3 - 2015),
        rating: 4.32543
      }, {
        roomNumber: 15,
        roomType: 'Delux Room',
        amenities: 'Air Conditioner, Free Wifi, Tv',
        price: 1000,
        photos: 'https://unsplash.com/photos/sunloungers-fronting-buildings-near-mountain-DGa0LQ0yDPc',
        checkinTime: new Date(1 - 3 - 2017),
        checkoutTime: new Date(10 - 3 - 2017),
        rating: 4.5
      }, {
        roomNumber: 20,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free Wifi, Tv',
        price: 15000,
        photos: 'https://unsplash.com/photos/sunloungers-fronting-buildings-near-mountain-DGa0LQ0yDPc',
        checkinTime: new Date(1 - 3 - 2017),
        checkoutTime: new Date(10 - 3 - 2017),
        rating: 4.8
      }
    ]
  }
  toggle() {
    this.hideRooms = !this.hideRooms
  }

}
