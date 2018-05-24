import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var working = false;
    $('.login').on('submit', function (e) {
      e.preventDefault();
      if (working) return;
      working = true;
      var $this = $(this),
        $state = $this.find('button > .state');
      $this.addClass('loading');
      $state.html('Authenticating');
      setTimeout(function () {
        $this.addClass('ok');
        $state.html('Welcome back!');
        setTimeout(function () {
          $state.html('Log in');
          $this.removeClass('ok loading');
          working = false;
        }, 4000);
      }, 3000);
    });
  }

}
