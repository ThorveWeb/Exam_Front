import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category';

const baseUrl = 'http://localhost:8080/quiz/';
@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  //get all quiz
  public getAllQuiz() {
    return this.http.get(`${baseUrl}`);
  }

  //add quiz
  public addQuiz(data: any) {
    console.log(data);
    return this.http.post(`${baseUrl}`, data);
  }


  //delete quiz
  public deleteQuiz(qid: any) {
    return this.http.delete(`${baseUrl}${qid}`);
  }

  //get quiz id single
  public getQuiz(qid: any) {
    return this.http.get(`${baseUrl}${qid}`);
  }

  //quiz update
  public updateQuiz(data: any) {
    return this.http.put(`${baseUrl}`, data);
  }

  //get quiz category
  public getQuizzesOfCategory(cid: any) {
    return this.http.get(`${baseUrl}category/${cid}`);
  }

  //get active quizzes
  public getActiveQuizzes() {
    return this.http.get(`${baseUrl}active`);
  }


  //get active quizzes of Category
  public getActiveQuizzesOfCategory(cid: any) {
    //url
    return this.http.get(`${baseUrl}category/active/${cid}`);
  }
}
