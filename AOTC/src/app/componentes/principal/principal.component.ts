import { Component, OnInit } from '@angular/core';
import { ListaP } from 'interfaces/productos.interface';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

listadop_roductos: ListaP[]=[
  {
    nombre : "Anillo de oro 12k con 12 Puntos de Diamante",
    img: "https://assets.stickpng.com/images/580b585b2edbce24c47b2420.png",
    descripcion:"anillo de oro 12k",
    precio:7933
  },
  {
    nombre : "Anillo tipo argolla de oro de 12k",
    img: "https://assets.stickpng.com/thumbs/580b585b2edbce24c47b242f.png",
    descripcion:"anillo tipo argolla 12k",
    precio:6433
  },
  {
    nombre : "ARETE CHAPA ORO, ZIRCONIAS",
    img: "http://www.karunaco.com/img/products/AJ4EGC.png",
    descripcion:"ARETE CHAPA ORO, ZIRCONIAS",
    precio:462
  },
  {
    nombre : "ARETES SAILOR ZIRCONIAS CHAPA DE ORO",
    img: "https://cdn.shopify.com/s/files/1/0024/2814/1603/products/aretes-de-oro-10k-kilates-joyas-centro-joyero-guadalajara-aura-prata-sailor_480f6825-36c7-499f-88c6-63ed5f99e149_1200x1200.png?v=1582670754",
    descripcion:"Aretes sailor",
    precio:2520
  },
  {
    nombre : "ARETE SWAROVSKI CUADRADO",
    img: "http://www.karunaco.com/img/products/AR2-AZ.png",
    descripcion:"ARETE SWAROVSKI CUADRADO",
    precio:650
  },
  {
    nombre : "ARETE SWAROVSKI LAGRIMA CHAPA DE ORO",
    img: "http://www.karunaco.com/img/products/AR4-CL.png",
    descripcion:"ARETE SWAROVSKI CUADRADO",
    precio:720
  },
  {
    nombre : "COLLAR LARGO CHAPA DE ORO",
    img: "http://www.karunaco.com/img/products/CJ24X0.png",
    descripcion:"COLLAR LARGO CHAPA DE ORO",
    precio:910
  },
  {
    nombre : "PULSERA RODIO Y CHAPA CON PERLAS",
    img: "http://www.karunaco.com/img/products/PMX003-3.png",
    descripcion:"PULSERA RODIO Y CHAPA",
    precio:520
  }
  
];

  constructor() { }

  ngOnInit(): void {
  }

}
