import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators} from '@angular/forms';



@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cadastroForm:FormGroup;

  constructor(private cadastro: FormBuilder){
    this.cadastroForm = this.cadastro.group({
      nome:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      senha:['', [Validators.required, Validators.minLength(6)]],
      data:['', Validators.required],
      telefone:['', Validators.required]
    })
  }

  enviarCadastro(){
    if(this.cadastroForm.valid){
      alert("Cadastro Realizado com sucesso!")
      this.cadastroForm.reset()
    }else{
      alert("Preencha todos os campos corretamente ! ")
    }
  }
}
