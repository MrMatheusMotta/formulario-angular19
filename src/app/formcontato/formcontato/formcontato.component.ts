import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-formcontato',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formcontato.component.html',
  styleUrl: './formcontato.component.css',
})
export class FormcontatoComponent {
  contatoForm: FormGroup; //controlar os campos

  constructor(private fb: FormBuilder) {
    //inicializar os campos com as validações
    this.contatoForm = this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      assunto: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  enviarFormulario() {
    if (this.contatoForm.valid) {
      alert('Dados enviados com sucesso!');
      this.contatoForm.reset();
    } else {
      alert('Preencha todos os campos corretamente !');
    }
  }
}
