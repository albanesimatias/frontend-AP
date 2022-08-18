import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>) { }

  ngOnInit(): void {
  }

  confirmar(): void{
    this.dialogRef.close(true);
  }
  
  cancelar(): void {
    this.dialogRef.close(false);
  }
}
