import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './../../../services/auth.service';

export class User{
    email: string;
    password: string;
}


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    model: any = {};
    returnUrl: string;
    message: string = this.authService.message;

    constructor(
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {

        // this.authService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login(){

        //Logs a user in. Calls the login service.
        console.log(this.model.email + " " + this.model.password)
        this.authService.login(this.model.email, this.model.password)
            .subscribe( data => {
                this.router.navigate([this.returnUrl]);
            });
    }
}