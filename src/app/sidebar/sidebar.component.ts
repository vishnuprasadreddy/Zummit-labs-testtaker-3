import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  answered3:string = 'Japanese capital (order intera'; 
  answered2:string = 'Luxembourg neigbourhood (ch'; 
  answered4:string = ' Languages of Europe (Associa'; 
  answered5:string = ' HG well: The times machine(ho'; 
  answered6:string = ' Baudellaire: A unaire  dame cre'; 
  answered7:string = ' Calculate a percentage (Slider'; 
  answered8:string = ' Market square in Germany ( Ex'; 
  answered9:string = ' Extended Formula (File upload'; 

  viewed:number=4;
  answered:number=3;
  unanswered:number=14;
  flaged:number=1;
  overview:number=4;

  ngOnInit(): void {  
   
  }






}
