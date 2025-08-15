import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './_components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './_components/secondary-button/secondary-button.component';
import { ItemCertificadoComponent } from './_components/item-certificado/item-certificado.component';
import { BaseUiComponent } from './_components/base-ui/base-ui.component';
import { RouterOutlet } from '@angular/router';
import { CertificadoService } from './_services/certificado.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CommonModule, BaseUiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'gerador-certificado';
  exibeNavbar: boolean = true;

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoService.certificados = certificados ? JSON.parse(certificados) : [];
    console.log(this.certificadoService.certificados);
  }
}
