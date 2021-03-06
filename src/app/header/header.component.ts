import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/auth/authentication.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'srca-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  items: MenuItem[];
  open: boolean;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.currentUser = this.authenticationService.getLoggedInUser();
    this.loadMenu();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  loadMenu() {
    this.items = [
      {
        label: 'Sign Out', command: () => this.logout()
      }
    ];
  }
}

