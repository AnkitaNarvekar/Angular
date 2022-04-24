import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  public name: string;
  public points: number;
  public currentQuestion: number;
  public counter: number = 30;
  public correctAnswers: number = 0;
  public questions: any = [];
  public quizCompleted = false;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.points = 0;
    this.currentQuestion = 0;

    this.questionService.getQuestions().subscribe((quests) => {
      this.questions = quests.questions;
      console.log(this.questions);
    });
  }

  answer(currentQuestion:number, option: any){
    console.log(currentQuestion, option);

    if(currentQuestion == this.questions.length){
      this.quizCompleted = true;
    }

    if(option.correct){
      console.log("correct answer");
      this.points += 5;
      this.correctAnswers++;
    } else {
      console.log('wrong answer');
    }

    setTimeout(() => {
      this.currentQuestion++;
    }, 1000);
  }
}
