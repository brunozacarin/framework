import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostagensComponent } from './postagens.component';

const routes: Routes = [
    {
        path: '',
        component: PostagensComponent,
        children: [
            { path: '', component: PostagensComponent }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostagensRoutingModule { }
