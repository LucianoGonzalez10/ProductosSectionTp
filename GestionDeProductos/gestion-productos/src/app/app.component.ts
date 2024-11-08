import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListProductosComponent } from "./productos/components/list-productos/list-productos.component";
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListProductosComponent, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestion-productos';
}
