import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../../../../service/question';
import { QuestionService } from '../../../../service/question.service';
import Swal from 'sweetalert2';
//import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
 // public Editor = ClassicEditor;

  question: Question = new Question();
  qid: any;
  qtitle: any;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];
    this.qtitle = this.route.snapshot.params['qtitle'];
    this.question.quiz['qid'] = this.qid;
  }

  //
  questionSubmit() {
    if (this.question.option1.trim() == '' || this.question.option1 == null) {
      return;
    }
    if (this.question.option2.trim() == '' || this.question.option2 == null) {
      return;
    }
    if (this.question.option3.trim() == '' || this.question.option3 == null) {
      return;
    }
    if (this.question.option4.trim() == '' || this.question.option4 == null) {
      return;
    }
    if (this.question.answer.trim() == '' || this.question.answer == null) {
      return;
    }


    //form question
    this.questionService.addQuestion(this.question).subscribe(
      (data) => {
        Swal.fire('Done', 'Question is created', 'success').then((e) => {
          this.router.navigate([
            '/admin/view-question/',
            this.qid,
            this.qtitle,
          ]);
        });
      },
      (error) => {
        Swal.fire('Error', 'Error in Loading', 'error');
      }
    );
  }
}
