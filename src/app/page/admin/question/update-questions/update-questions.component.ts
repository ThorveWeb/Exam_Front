import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from './../../../../service/question';
import { QuizService } from './../../../../service/quiz.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { QuestionService } from './../../../../service/question.service';

@Component({
  selector: 'app-update-questions',
  templateUrl: './update-questions.component.html',
  styleUrls: ['./update-questions.component.css']
})
export class UpdateQuestionsComponent {
  question: any;
  qid: any;
  qtitle: any;
  quesId: any;
  constructor(
    private quizService: QuizService,
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.quesId = this.route.snapshot.params['quesId'];

    this.questionService.getQuestion(this.quesId).subscribe(
      (data) => {
        console.log(data);
        this.question = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  updateSubmit() {
    this.questionService.updateQuestion(this.question).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Done', 'Question is Updated', 'success').then((e) => {
          this.router.navigate(['/admin/quizzes/']);
        });
      },
      (error) => {
        this.snackbar.open('Question could not be updated', 'ok', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
      }
    );
  }
}
