import { Component } from '@angular/core';
import { CategoryService } from './../../../service/category.service';


@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  //categories display user
  categories: any;

  // listItems = [
  //   { linkTitle: 'Home ', link: '/user', icon: 'home' },
  //   { linkTitle: 'All Quizzes', icon: 'account_circle' },
  // ];
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

}
