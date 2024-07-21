import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

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

  roomList: RoomList[] = [{
    roomNumber: 10,
    roomType: 'Delux Room',
    amenities: 'Air Conditioner, Free Wifi, Tv',
    price: 500,
    photos: 'https://unsplash.com/photos/sunloungers-fronting-buildings-near-mountain-DGa0LQ0yDPc',
    checkinTime: new Date(1 - 3 - 2017),
    checkoutTime: new Date(10 - 3 - 2015)
  }, {
    roomNumber: 15,
    roomType: 'Delux Room',
    amenities: 'Air Conditioner, Free Wifi, Tv',
    price: 1000,
    photos: 'https://unsplash.com/photos/sunloungers-fronting-buildings-near-mountain-DGa0LQ0yDPc',
    checkinTime: new Date(1 - 3 - 2017),
    checkoutTime: new Date(10 - 3 - 2017)
  }, {
    roomNumber: 20,
    roomType: 'Private Suite',
    amenities: 'Air Conditioner, Free Wifi, Tv',
    price: 15000,
    photos: 'https://unsplash.com/photos/sunloungers-fronting-buildings-near-mountain-DGa0LQ0yDPc',
    checkinTime: new Date(1 - 3 - 2017),
    checkoutTime: new Date(10 - 3 - 2017)
  },]




  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    this.hideRooms = !this.hideRooms
  }
}
