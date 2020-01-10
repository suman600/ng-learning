import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { 
        path: 'home', 
        loadChildren: './home/home.module#HomeModule',
        canActivate: [AuthGuard]
    },
    { 
        path: 'account-settings', 
        loadChildren: './account-settings/account-settings.module#AccountSettingsModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: './login-form/login-form.module#LoginFormModule',
        data: { showHeader: false, showSidebar: false}
    },
    {
        path: 'quiz',
        loadChildren: './demo/quiz/quiz.module#QuizModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'quiz-result',
        loadChildren: './demo/quiz-result/quiz-result.module#QuizResultModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'quiz-instruction',
        loadChildren: './demo/quiz-instruction/quiz-instruction.module#QuizInstructionModule',
        canActivate: [AuthGuard]
    },
    { 
        path: '**', 
        loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule', 
        pathMatch: 'full',
        data: { showHeader: false, showSidebar: false} 
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }