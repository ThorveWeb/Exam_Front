import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../../../service/quiz.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { CategoryService } from '../../../../service/category.service';



;
@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent {

constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizService: QuizService,
    private snackbar: MatSnackBar,
    private categoryService: CategoryService
  ) {}

  qid: any;
  quiz: any;
  categories: any;
  ngOnInit(): void {

    this.qid = this.route.snapshot.params['qid'];

    //console.log(this.qId)
    this.quizService.getQuiz(this.qid).subscribe(
      (data) => {
        console.log(data);
        this.quiz = data;
      },
      (error) => {
        console.log(error);
      }
    );

//category get
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

//update form submit
  updateQuiz() {
    if (this.quiz.title.trim() == '' || this.quiz.title == null) {
      this.snackbar.open('Title is required', 'ok', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });

      return;
    }

    this.quizService.updateQuiz(this.quiz).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Done', 'Quiz is Updated', 'success').then((e) => {
          this.router.navigate(['/admin/quizzes']);
        });
      },
      (error) => {
        this.snackbar.open('Quiz could not be updated', 'ok', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
      }
    );
  }

}
