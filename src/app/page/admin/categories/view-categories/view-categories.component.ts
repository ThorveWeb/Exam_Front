import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent {
  categories: any;

  constructor(private categoryService:CategoryService,private router:Router) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (data: any) => {
       //css
        this.categories = data;
      },
      (error) => {
        console.log(error);
        Swal.fire('Error!', 'server loading error', 'error');
      }
    );
  }

  deleteCategory(cid: any) {
    Swal.fire({
      icon: 'info',
      title: 'Are you sure you want to delete?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoryService.deleteCategory(cid).subscribe(
          (data) => {
            this.ngOnInit();
            Swal.fire('Success!', 'Category Deleted ', 'success');
          },
          (error) => {
            Swal.fire('Error!', 'server loading error', 'error');
          }
        );
      }
    });
  }
  updateCategory(cid: any) {
    this.router.navigate(['/admin/update-category/',cid]);
  }
}
