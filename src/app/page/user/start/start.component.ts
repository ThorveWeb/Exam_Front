import { LocationStrategy } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from './../../../service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  qid: any;     //qusetion id 
  questions: any;


  marksGot = 0;     
  correctAnswer = 0;
  attempted = 0;



  maximumMarks = 0;
  isSubmit = false;    //submit display
 
 
  timer: any;
  counter: any;
  interval: any;
  value: any;
  test: number = 0;



  constructor(
    private locationStrategy: LocationStrategy,
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private router: Router
  ) {}




  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];     ///category all question are use
    this.preventBackButton();    //back function call
    this.loadQuestions();    ///load question call
  }





  loadQuestions() {


    //getQuestionsOfQuizForUser all question get
  
    this.questionService.getQuestionsOfQuizForUser(this.qid).subscribe(
      (data) => {
        this.questions = data;     //question display
  //      console.log(this.questions);



  this.timer=this.questions.length*2*60;
                                  this.questions.forEach((ques: any) => {
                                    //answer save use
                                    ques['givenAnswer'] = '';
                                  });              // server code write
        this.startTimer();
      },
      (error) => {}
    );
  }



  //start timer low
  startTimer() {
   let t= window.setInterval(()=>{
      //code
      if(this.timer<=0){
        //automate submit
        this.evaluateQuiz();
        clearInterval(t);
      }
      else{
        this.timer--;
      }
    },1000)
  }
  
  
  getFormattedTime()
{
  let mm=Math.floor(this.timer/60);
  let ss=this.timer-mm*60;
  return `${mm} min: ${ss} sec`;
}


  //use function user are not back page display
  preventBackButton() {
    history.pushState(null, '', location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, '', location.href);
    });
  }

 

  //submit 
  submitQuiz() {
 //msg
    Swal.fire({
      title: 'Do you want to submit the Quiz?',
      showCancelButton: true,
      confirmButtonText: 'Submit',

      icon: 'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      //
      if (result.isConfirmed) {
        
        //evalueQuiz call function
        this.evaluateQuiz();
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }











//calculation
  evaluateQuiz() {





//result div display
    this.isSubmit = true;
   
    this.value = this.timer;
    
    //one question mark
    this.questions.forEach((ques: any) => {
  //check get ans and server question match 
      if (ques.givenAnswer == ques.answer) {
        this.correctAnswer++;
        this.maximumMarks = this.questions[0].quiz.maxMarks;
        
        //signler question mark
        let eachQuestionMark = this.maximumMarks / this.questions.length;
       //addition to question and mark 
        this.marksGot += eachQuestionMark;
      }


      //question ans attempted
      if (ques.givenAnswer.trim() != '') {
        this.attempted++;
      }
    });







      //console.log("correct answers"+this.correctAnswer)
      //console.log("marks got"+this.marksGot)
         //console.log(this.question)
//console.log(this.attempted)

        }






        
    print(){
      window.print();
    }
}