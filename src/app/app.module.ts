import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavabarComponent } from './page/navabar/navabar.component';
import { SignupComponent } from './page/signup/signup.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';






//angular ng submit use
import { FormsModule } from '@angular/forms';


//massage display user
import { MatSnackBarModule } from '@angular/material/snack-bar';


//spring boot api user
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { authInterceptorProvider } from './service/auth.interceptor';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './page/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './page/admin/profile/profile.component';
import { SidebarComponent } from './page/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './page/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './page/admin/categories/view-categories/view-categories.component';
import { AddCategoriesComponent } from './page/admin/categories/add-categories/add-categories.component';
import { ViewQuizzesComponent } from './page/admin/quiz/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './page/admin/quiz/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './page/admin/quiz/update-quiz/update-quiz.component';
import { AddQuestionComponent } from './page/admin/question/add-question/add-question.component';
import { ViewQuizQuestionsComponent } from './page/admin/question/view-quiz-questions/view-quiz-questions.component';
import { UpdateQuestionsComponent } from './page/admin/question/update-questions/update-questions.component';
import { UpdateCategoryComponent } from './page/admin/categories/update-category/update-category.component';
import { SidebarComponent as UserSidebar } from './page/user/sidebar/sidebar.component';
import { LoadQuizComponent } from './page/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './page/user/instructions/instructions.component';
import { StartComponent } from './page/user/start/start.component';


//ui loader
import { NgxUiLoaderModule ,  NgxUiLoaderHttpModule} from 'ngx-ui-loader';
import { UserWelcomeComponent } from './page/user/user-welcome/user-welcome.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    UserSidebar,
    AppComponent,
    NavabarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoriesComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    AddQuestionComponent,
    ViewQuizQuestionsComponent,
    UpdateQuestionsComponent,
    UpdateCategoryComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent,
    UserWelcomeComponent,
    FooterComponent,

  ],
  imports: [
    MatListModule,MatProgressSpinnerModule,
    MatCardModule, BrowserModule, MatButtonModule, MatInputModule,MatSlideToggleModule,
    AppRoutingModule, MatIconModule, MatFormFieldModule,MatSelectModule,
    BrowserAnimationsModule, MatTableModule, FormsModule, HttpClientModule, MatSnackBarModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true    //center loader
    })
  ],
  providers: [authInterceptorProvider],     //auth.interceptor.ts complese
  bootstrap: [AppComponent]
})
export class AppModule { }
