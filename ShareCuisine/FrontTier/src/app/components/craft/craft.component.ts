import { Component, OnInit } from '@angular/core';
import { NavbarServiceService } from './../../services/navbar-service.service';
import { LoginServiceService } from './../../services/login-service.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { Craft, Content } from 'src/app/models/craft';
import { CraftService } from '../../services/craft.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-craft',
  templateUrl: './craft.component.html',
  styleUrls: ['./craft.component.scss']
})
export class CraftComponent implements OnInit {
  craft: Craft;
  user: User;
  public currentSelectedContent: Content=new Content();
  selectedEmbeddedUrl: any;


  constructor(private sanitizer: DomSanitizer,private craftService: CraftService, private route: ActivatedRoute, private nav: NavbarServiceService, private loginService: LoginServiceService) { }

  ngOnInit(): void {

    let craftId: string;


    this.nav.show();

    this.route.queryParams.subscribe(params => {
      craftId = this.route.snapshot.paramMap.get('craftId');
    });

    this.craftService.getCraftById(craftId).subscribe(res => {
      this.craft = res;

      this.loginService.getUserById(res.createdBy).subscribe(res => {
        this.user = res;

      })

    })

  }

  showContent(sectionId:number,contentId:number,content:Content){

    this.currentSelectedContent=content;
    if(this.currentSelectedContent != undefined && 
      this.currentSelectedContent.content != undefined &&
      this.currentSelectedContent.content.embed != undefined &&
      this.currentSelectedContent.content.embed.url !=undefined
      ){
      this.selectedEmbeddedUrl=this.sanitizer.bypassSecurityTrustResourceUrl(this.currentSelectedContent.content.embed.url)
      }
    


  }

}
