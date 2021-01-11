import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingPageService } from '../../Services/landing-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public landingTileDetail;

  public selectedYear: string='';

  public selectedLaunchStatus: string='';

  public selectedLandingStatus: string='';

  public changeFilterMessage: boolean = false;

  public buttonActive: boolean = false;

  public yearsList = ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'];

  constructor(private router: Router, private LandingServ: LandingPageService) { }

  ngOnInit() {

      this.firstLoadWithoutFilters();  
  
  }

  firstLoadWithoutFilters() {
    this.LandingServ.loadWithoutFilters().subscribe((data: any) => {
      if(data.length == 0){
        this.changeFilterMessage = true;
      }
      else{
        this.changeFilterMessage = false;
      }
      this.landingTileDetail = data;
    },
    error => { 
    },
    () => {
    })
  }

  
  filterByYear(years){
    this.buttonActive = true;
    if(years == this.selectedYear){
      this.selectedYear='';
    }
    else{
      this.selectedYear = years;
    }

    this.LandingServ.yearFilters(this.selectedYear,this.selectedLaunchStatus,this.selectedLandingStatus).subscribe((data: any) => {
      if(data.length == 0){
        this.changeFilterMessage = true;
      }
      else{
        this.changeFilterMessage = false;
      }
      this.landingTileDetail = data;
      },
      error => { 
      },
      () => {
      })

    }

  filterBylaunch(launchStatus){


    if(launchStatus == this.selectedLaunchStatus){
      this.selectedLaunchStatus='';
    }
    else{
      this.selectedLaunchStatus = launchStatus;
    }

    this.LandingServ.launchFilters(this.selectedYear,this.selectedLaunchStatus,this.selectedLandingStatus).subscribe((data: any) => {
      if(data.length == 0){
        this.changeFilterMessage = true;
      }
      else{
        this.changeFilterMessage = false;
      }
      this.landingTileDetail = data;
      },
      error => { 
      },
      () => {
      })

  }

  filterBylanding(landingStatus){


    if(landingStatus == this.selectedLandingStatus){
      this.selectedLandingStatus='';
    }
    else{
      this.selectedLandingStatus = landingStatus;
    }

    this.LandingServ.landingFilters(this.selectedYear,this.selectedLaunchStatus,this.selectedLandingStatus).subscribe((data: any) => {
      if(data.length == 0){
        this.changeFilterMessage = true;
      }
      else{
        this.changeFilterMessage = false;
      }
      this.landingTileDetail = data;
      },
      error => { 
      },
      () => {
      })

  }



}
