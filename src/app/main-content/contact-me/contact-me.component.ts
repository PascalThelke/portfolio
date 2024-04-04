import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
})
export class ContactMeComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  acceptedPolicy = false;
  mailTest = true;
  http = inject(HttpClient)

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response: any) => {
            ngForm.resetForm();
          },
          error: (error: any) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  acceptPolicy(event: any) {
    const checkboxImage = event.target;
    if(!this.acceptedPolicy){
      checkboxImage.src = '../../../assets/img/contact_me/check_box.svg';
      this.acceptedPolicy = true;
    }else{
      checkboxImage.src = '../../../assets/img/contact_me/check_box_outline_blank.svg';
      this.acceptedPolicy = false;
    }
   
  
  }
}
