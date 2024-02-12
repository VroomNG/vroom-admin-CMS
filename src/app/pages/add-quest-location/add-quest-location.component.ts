import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
// import { IAdmin, IQuest } from 'src/app/model/admins';
import { UsersService } from 'src/app/service/users.service';
// import { MouseEvent } from '@angular/google-maps';

interface City {
  name: string;
  // code: string;
}
interface Users {
  type: string;
  code: string;
}

@Component({
  selector: 'add-quest-location',
  templateUrl: 'add-quest-location.component.html',
  styleUrls: ['add-quest-location.component.scss']
})

export class AddQuestLocationComponent implements OnInit {

  @ViewChild('searchInput', { static: false }) searchInput!: ElementRef<HTMLInputElement>;

  credentials = {
    point: '',
    location:'',
    latitude: '',
    longitude: '',
  }
  
  inSubmission = false; 

  cities!: City[] |  undefined;
  userType!: Users[] |  undefined;

  quest!: any;
  questId!: any;
  userDetails:any

  showAlert:boolean = false;
  alertMsg = 'please wait your account is being created';
  alertColor = 'primary';
  center: google.maps.LatLngLiteral = { lat: 4.8472, lng: 6.9746 };
  place:any;
  zoom = 8;
  markerPosition: google.maps.LatLngLiteral = { lat: 51.678418, lng: 7.809007 };

  map!: google.maps.Map;
  // searchBox!: google.maps.places.SearchBox;


  constructor(
    private route: ActivatedRoute,
    private admin: AdminService,
    private router:Router,
    private users: UsersService
    ){
  }
  ngOnInit() { 
   
  // this.initializeMap();
  // const places = this.searchBox.getPlaces();
  // this.place = places
  

  this.questId = this.route.snapshot.paramMap.get('id')
  console.log(this.questId)
  this.admin.getSingleQuest(this.questId).subscribe(
    (res:any)=>{
      console.log(res)
      this.quest = res.data.quest
      console.log(this.quest.location)
      console.log(res.data.quest)
    }
  )
  const userDetails = this.users.getStoredUserDetails();
  this.userDetails = userDetails
  // this.addAccessTrail()
  }

  // latitude = new FormControl('111',[Validators.required, Validators.minLength(3)])
  // longitude = new FormControl('11',[Validators.required, Validators.minLength(3)])

  // addAccessTrail(){
  //   const {email} = this.userDetails
  //   console.log(email)

  //   const userCredetials = {
  //     login: email,
  //     action: 'Viewed Edit Admin'
  //   }

  //   this.users.addAccesstrail(userCredetials).subscribe(
  //     (res:any)=>{
  //       // console.log(res)
  //       const {message} = res
  //       if(message === "Success insering access"){
  //       //  console.log('access trail added')
  //        } else {
  //       // console.log('not added')
  //        }
  //     }
  //   )
  // }

  addLocation(){
    var locationForm = {
      quest_id: this.questId,
      location: this.credentials.location,
      latitude: this.credentials.latitude,
      longitude: this.credentials.longitude,
      point: this.credentials.point
    }
    console.log(locationForm)
    this.admin.addQuestLocation(locationForm).subscribe({
      next: (res:any) => {
        console.log(res)
     if(res.code === 200){
      this.alertMsg = 'Quest Location Added',
      this.alertColor = 'success'
     } else {
      this.alertMsg = 'Failed to Add Location, ERROR from Server ',
      this.alertColor = 'danger'
     }
      }
    })
  }
  // mapClicked(event: any) {
  //   // console.log('Latitude: ' + event.latLng.lat());
  //   // console.log('Longitude: ' + event.latLng.lng());
  //   const lat = event.latLng.lat()
  //   const long = event.latLng.lng();
  //   this.credentials.latitude = lat
  //   this.credentials.longitude = long 
  //   console.log('latitude from cr', this.credentials.latitude)
  //   console.log('longtitude from cr', this.credentials.longitude)
  //   console.log('credentials',this.credentials)
  // }
  // initializeMap() {
  //   this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
  //     center: this.center,
  //     zoom: 8,
  //   });

  //   // Create the search box and link it to the UI element.
  //   const input = document.getElementById('pac-input') as HTMLInputElement;
  //   this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  //   this.searchBox = new google.maps.places.SearchBox(input);

  //   // Bias the SearchBox results towards current map's viewport.
  //   this.map.addListener('bounds_changed', () => {
  //     this.searchBox.setBounds(this.map.getBounds() as google.maps.LatLngBounds);
  //   });

  //   // Listen for the event fired when the user selects a prediction and retrieve
  //   // more details for that place.
  //   this.searchBox.addListener('places_changed', () => {
  //     const places = this.place;

  //     if (places.length == 0) {
  //       return;
  //     }

  //     // For each place, get the icon, name and location.
  //     const bounds = new google.maps.LatLngBounds();
  //     places.forEach((place:any) => {
  //       if (!place.geometry) {
  //         console.log("Returned place contains no geometry");
  //         return;
  //       }
  //       const icon = {
  //         url: place.icon as string,
  //         size: new google.maps.Size(71, 71),
  //         origin: new google.maps.Point(0, 0),
  //         anchor: new google.maps.Point(17, 34),
  //         scaledSize: new google.maps.Size(25, 25),
  //       };

  //       // Create a marker for each place.
  //       new google.maps.Marker({
  //         map: this.map,
  //         icon,
  //         title: place.name,
  //         position: place.geometry.location,
  //       });

  //       if (place.geometry.viewport) {
  //         // Only geocodes have viewport.
  //         bounds.union(place.geometry.viewport);
  //       } else {
  //         bounds.extend(place.geometry.location);
  //       }
  //     });
  //     this.map.fitBounds(bounds);
  //   });
  // }  
  mapClicked(event: any) {
    this.credentials.latitude = event.latLng.lat().toString();
    this.credentials.longitude = event.latLng.lng().toString();
    console.log('Latitude:', this.credentials.latitude);
    console.log('Longitude:', this.credentials.longitude);
  }

  onPlaceSelected(place: google.maps.places.PlaceResult) {
    if (!place.geometry || !place.geometry.location) {
      console.log('Place not found');
      return;
    }

    this.credentials.location = place.formatted_address || '';
    this.credentials.latitude = place.geometry.location.lat().toString();
    this.credentials.longitude = place.geometry.location.lng().toString();
    this.center = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    };
    this.markerPosition = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    };
    console.log('Location:', this.credentials.location);
  }

  onSearchInput() {
    const input = this.searchInput.nativeElement.value;
    if (input) {
      const autocomplete = new google.maps.places.AutocompleteService();
      autocomplete.getPlacePredictions({ input }, (predictions, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
          // Handle the predictions here
          console.log(predictions);
        }
      });
    }
  }
  
}
