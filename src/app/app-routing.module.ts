import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './page/signup/signup.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './page/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './service/admin.guard';
import { UserGuard } from './service/user.guard';
import { ProfileComponent } from './page/admin/profile/profile.component';
import { WelcomeComponent } from './page/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './page/admin/categories/view-categories/view-categories.component';
import { AddCategoriesComponent } from './page/admin/categories/add-categories/add-categories.component';
import { ViewQuizzesComponent } from './page/admin/quiz/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './page/admin/quiz/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './page/admin/quiz/update-quiz/update-quiz.component';
// import { ViewQuizQuestionsComponent } from './page/admin/question/add-question/view-quiz-questions/view-quiz-questions.component';
// import { AddQuestionComponent } from './page/admin/question/add-question/add-question.component';
// import { UpdateQuestionsComponent } from './page/admin/question/add-question/update-questions/update-questions.component';
import { UpdateCategoryComponent } from './page/admin/categories/update-category/update-category.component';
// import { ViewQuizQuestionsComponent } from './page/admin/add-question/view-quiz-questions/view-quiz-questions.component';
// import { AddQuestionComponent } from './page/admin/add-question/add-question.component';
import { UpdateQuestionsComponent } from './page/admin/question/update-questions/update-questions.component';
import { ViewQuizQuestionsComponent } from './page/admin/question/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './page/admin/question/add-question/add-question.component';
import { LoadQuizComponent } from './page/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './page/user/instructions/instructions.component';
import { StartComponent } from './page/user/start/start.component';
import { UserWelcomeComponent } from './page/user/user-welcome/user-welcome.component';


// import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
// import { UserDashboardComponent } from './page/user/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: "signup",
    component: SignupComponent,
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "admin",
    component: DashboardComponent,
    //pathMatch:"full",
    canActivate: [AdminGuard],  //securty guard eye
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },

      {
        path: 'categories',
        component: ViewCategoriesComponent
      },
      {
        path: 'add-categories',
        component: AddCategoriesComponent
      },


      {
        path: "quizzes",
        component: ViewQuizzesComponent
      },
      {
        path: "add-quizzes",
        component: AddQuizComponent
      }
      , {
        path: "update-quiz/:qid",
        component: UpdateQuizComponent
      }, {
        path: "view-question/:qid/:qtitle",
        component: ViewQuizQuestionsComponent
      },
      {

        path: 'add-question/:qid/:qtitle',
        component: AddQuestionComponent
      },
      {
        path: 'update-question/:quesId',
        component: UpdateQuestionsComponent
      },
      {
        path: 'update-category/:cid',
        component: UpdateCategoryComponent
      },


    ]
  },
  {
    path: "user",
    component: UserDashboardComponent,
    canActivate: [UserGuard],
    children: [{
      path:'welcome',
      component:UserWelcomeComponent

    },

      {
        path: ':cid',
        component: LoadQuizComponent   //cid=categoeis
      },



      {
        path: 'instructions/:qid',
        component: InstructionsComponent
      },

    

    ],
  },

  //  RUN TO APP COMPNENT   
  {
    path: 'start/:qid',
    component: StartComponent,
    canActivate: [UserGuard],     //daria not access normal user access
  },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
