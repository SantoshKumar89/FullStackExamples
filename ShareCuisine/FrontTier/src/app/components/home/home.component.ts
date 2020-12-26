import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from './../../services/navbar-service.service';
import { CraftService } from '../../services/craft.service';
import { Craft } from 'src/app/models/craft';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  crafts: Craft[]=[];
  imageUrl: String[] = [
    "https://res.cloudinary.com/mhmd/image/upload/v1556294927/cody-davis-253928-unsplash_vfcdcl.jpg",
    "https://res.cloudinary.com/mhmd/image/upload/v1556294929/matthew-hamilton-351641-unsplash_zmvozs.jpg",
    "https://res.cloudinary.com/mhmd/image/upload/v1556294926/cody-davis-253925-unsplash_hsetv7.jpg",
    "https://res.cloudinary.com/mhmd/image/upload/v1556294928/tim-foster-734470-unsplash_xqde00.jpg",
    "https://res.cloudinary.com/mhmd/image/upload/v1556294927/mike-meyers-737494-unsplash_yd11yq.jpg",
    "https://res.cloudinary.com/mhmd/image/upload/v1556294930/ronald-cuyan-434484-unsplash_iktjid.jpg",
    "https://res.cloudinary.com/mhmd/image/upload/v1556294929/matthew-hamilton-351641-unsplash_zmvozs.jpg"
  ]


  constructor(public nav: NavbarServiceService, private craftService: CraftService) { }

  ngOnInit(): void {
    this.nav.show();

    this.craftService.getCraft().subscribe(res => {
      this.crafts=res;
    })
  }

}
