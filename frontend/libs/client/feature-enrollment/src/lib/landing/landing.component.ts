import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientType } from '@qro/auth/api';

@Component({
  selector: 'qro-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  public ClientType = ClientType;
  public userType = ClientType.Index;
  public clientcode: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userType = (this.route.snapshot.paramMap.get('usertype') as ClientType) || this.userType;
    this.clientcode = this.route.snapshot.paramMap.get('clientcode');
  }

  showIndexNumber() {
    return this.userType === ClientType.Index;
  }
  showContactNumber() {
    return this.userType === ClientType.Contact;
  }
}
