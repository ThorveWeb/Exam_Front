import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../../service/quiz.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent {
  quiz: any;
  constructor(private quizService: QuizService, private router: Router) {}


  //load compon
  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.quizService.getAllQuiz().subscribe(
      (data) => {
        //success msg
        this.quiz = data;
      },
      (error) => {
        //error msg
        console.log(error);
        Swal.fire('Error!', 'server loading error', 'error');
      }
    );
  }
  deleteQuiz(qid:any) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure you want to delete?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.quizService.deleteQuiz(qid).subscribe(
          (data) => {
            this.ngOnInit();
            Swal.fire('Success!', 'Quiz Deleted ', 'success');
          },
          (error) => {
            Swal.fire('Error!', 'server loading error', 'error');
          }
        );
      }
    });
  }
  updateQuiz(qid: any) {
    this.router.navigate(['/admin/update-quiz/', qid]);
  }
}
