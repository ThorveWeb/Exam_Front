import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from './../../../service/quiz.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent {
  qid: any;     //url value get

  quiz: any;
  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService,
    private router: Router
  ) {}







  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];
    //console.log(this.qid)
    this.quizService.getQuiz(this.qid).subscribe((data) => {
     //success quiz  get
      this.quiz = data;
    });
  }





  //function check quiz start
  startQuiz() {
//all the copy pastle sweet alert

    Swal.fire({
  
      title: 'Do you want to start the Quiz?',
      showDenyButton: true,
      confirmButtonText: 'Start',
      denyButtonText: `Don't start`,
      icon: 'info',
  
    }).then((result) => {

      /* Read more about isConfirmed, isDenied below */
      
      if (result.isConfirmed) 
      {
        this.router.navigate(['/start/' + this.qid]);
      } 
      else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}
