import { Component, OnInit } from '@angular/core';
import { IUsuario } from './IUsuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-homeapp-nav-menu',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

    //lista de usuarios
    usuarios: IUsuario[];

    constructor(private usuarioService: UsuarioService) {

    }

    //pega resposta do método getUsuarios e sobrescreve a variavel já declarada
    ngOnInit() {
        this.usuarioService.getUsuarios()
            .subscribe(usuarioWebAPI => this.usuarios = usuarioWebAPI),
            error => console.error(error);
    }
}
