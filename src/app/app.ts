import { Component } from '@angular/core';
import { Navbar } from "./_components/navbar/navbar";
import { CommonModule } from '@angular/common';
import { PrimaryButton } from './_components/primary-button/primary-button';
import { SecondaryButton } from './_components/secondary-button/secondary-button';
import { ItemCertificado } from './_components/item-certificado/item-certificado';
import { BaseUi } from './_components/base-ui/base-ui';
import { Certificados } from './pages/certificados/certificados';
import { CertificadoForm } from './pages/certificado-form/certificado-form';
import { RouterOutlet } from '@angular/router';
import { Certificado } from './pages/certificado/certificado';

@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule, BaseUi, Certificados, CertificadoForm, Certificado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'gerador-certificado';
  exibeNavbar: boolean = true;
}
