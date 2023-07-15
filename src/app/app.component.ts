import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface PeopleObject {
  country: string;
  details: Array<UserDetail>;
}

interface UserDetail {
  Name: string;
  Place: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practice';
  found = '';
  flag=0;

  newcountry='';
  newname='';
  newplace='';

  userName = '';
  placeName = '';

  showError = false;
  changecolor=false;

  peopleList: PeopleObject[] = [
    {
      country: 'India',
      details: [
        { Name: 'Anushkka Dhamija', Place: 'Delhi' },
        { Name: 'Akshay Bhat', Place: 'J&K' },
      ],
    },
    {
      country: 'USA',
      details: [
        { Name: 'Priya Saha', Place: 'LA' },
        { Name: 'Ayush Mudgal', Place: 'Chicago' },
      ]
    }
  ];
  checkIfEligible() {

    // this.peopleList.forEach((people) => {
    //   people.details.forEach((person) => {
    //       if(this.userName === person.Name) {

    //       }
    //   })
    // })

    for (let i = 0; i < this.peopleList.length; i++) 
    {
      for (let j = 0; j < this.peopleList[i].details.length; j++) 
      {
        if((this.userName.toLowerCase()==this.peopleList[i].details[j].Name.toLowerCase())&&(this.placeName.toLowerCase()==this.peopleList[i].details[j].Place.toLowerCase()))
        {
       this.flag=1;
       break;
        }
      }
  }
  if(this.flag==1)
  this.found='person found';
  else
  this.found='person not found';
}

// Todo - change using ngModel
onNameChange(event: any) {
  this.userName = event.target.value;
}

// Todo - change using ngModel
onPlaceChange(event: any) {
  this.placeName = event.target.value;
}

addentry(){
  const detail = {Name: this.newname, Place: this.newplace}
  const countryExists = this.peopleList.find(people => people.country.toLowerCase().trim() == this.newcountry.toLowerCase().trim());
  if(countryExists) {
    countryExists.details.push(detail);
  } else {
    this.peopleList.push({
      country: this.newcountry,
      details: [detail]
    })
  }


}
showentries(){
  for (let i = 0; i < this.peopleList.length; i++) 
  {
    console.log(this.peopleList[i]);

    for (let j = 0; j < this.peopleList[i].details.length; j++) 
    {
      console.log(this.peopleList[i].details[j]);
    }
  }
}
onclick(){
  if((this.newname!='')&&(this.newplace!='')&&(this.newcountry!='')) {
  this.showError = false;
  this.addentry();
  }
  else {
  this.showError = true;
  }
}
}