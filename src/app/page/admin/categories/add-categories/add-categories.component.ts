import { Component } from '@angular/core';
import { CategoryService } from '../../../../service/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Category } from '../../../../service/category';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent {


  categories :Category=new Category;

  constructor(
    private categoryService: CategoryService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  formSubmit() {
//categories not black not null
    if (this.categories.title.trim() == '' || this.categories.title == null) {
      //msg
      this.snackbar.open('Title is required', 'ok', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
      });

      return;
    }


    //all done
    this.categoryService.addCategory(this.categories).subscribe(
      (data) => {
        console.log(data);
        //msg
        Swal.fire('Done', 'Category is created', 'success').then((e) => {
          this.router.navigate(['/admin/view-category']);
        });
      },
      (error) => {
        this.snackbar.open('Category could not be created', 'ok', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
        });
      }
    );
  }
}
