import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  boton_user: boolean = true;

  ngOnInit(): void {

  }


  sesion(){
    this.router.navigate(['/login']);
    this.boton_user = false;
  }

  desocultar(){
    this.boton_user = true;
  }

  shopping(){
    this.router.navigate(['/mi_carrito']);
  }
}
