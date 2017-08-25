
import{RouterModule,Routes} from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

const AppRoutes: Routes = [
    {path: '',component:ListagemComponent},
    {path: 'cadastro',component:CadastroComponent},
    {path: 'cadastro/:id',component:CadastroComponent},
    {path: '**',component:ListagemComponent}
];

export const routing = RouterModule.forRoot(AppRoutes);