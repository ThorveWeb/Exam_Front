import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from './../../../service/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent {
  cid: any;

  quizzes: any;
  
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {

//load  all quiz
    this.route.params.subscribe((params) => {


      //catagory id
      this.cid = params['cid'];
      if (this.cid == 'all') {
        //get actuve quizzes  method name
        this.quizService.getActiveQuizzes().subscribe(
          (data) => {
            this.quizzes = data;
            console.log(this.quizzes);
          },
          (error) => {
            console.log(error);
            alert('Could not load');
          }
        );
      } else {
        this.quizService.getActiveQuizzesOfCategory(this.cid).subscribe((data) => {
          this.quizzes = data;
        });
      }
    });
}
}