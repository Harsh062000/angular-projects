import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedColor = signal('#3498db');

  onColorChange(newColor: string){
    this.selectedColor.set(newColor);
  }

  copyColor(){
    navigator.clipboard.writeText(this.selectedColor());
    alert('HEX Code Copied to Clip Board: '+ this.selectedColor());
  }
}
