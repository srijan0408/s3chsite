import { Component } from '@angular/core'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  selectedFilter: string = '';
  subFilter: string = '';
  showVideos:any[] = [];
  YtVideos: any[] = [
    { title: 'Linux Full Course In English 2023', thumbnail: 'assets/yt-linx1.jpg', link: 'https://www.youtube.com/watch?v=iF7zoPKUdi8&list=PL_OdF9Z6GmVYx6qdYBWniM8wkdviyLx-O&pp=iAQB', type: "Free" ,plateform : 'YouTube' },
    { title: 'Shell Scripting Unleashed', thumbnail: 'assets/yt-shell.jpg', link: 'https://www.youtube.com/watch?v=LgoH6i1skQ4&list=PL_OdF9Z6GmVZ3nrUMo9Oqm1Sqadt72e5R&pp=iAQB', type: "Free" ,plateform : 'YouTube' },
    { title: 'Linux Tutorial 2023', thumbnail: 'assets/yt-linx3.jpg', link: 'https://www.youtube.com/watch?v=FdsKaLP3mrc&list=PL_OdF9Z6GmVYF6rNTXMx_AMv1M4yPCdeb&pp=iAQB', type: "Free" ,plateform : 'YouTube' },
    { title: 'Odoo Tutorial 2023', thumbnail: 'assets/yt-odoo.jpg', link: 'https://www.youtube.com/watch?v=vH4KFfIgQDU&list=PL_OdF9Z6GmVaMM_AXGaKopx3HXLyMkH3n&pp=iAQB', type: "Free" ,plateform : 'YouTube' },
  ];
  UVideos1: any[] = [
    { title: 'Python Crash Course For Absolute Beginners in Hindi', thumbnail: 'assets/python-free.jpg', link: 'https://www.udemy.com/course/python-crash-course-for-beginners-zero-to-hero/', type: "Free" ,plateform : 'Udemy' },
    { title: 'Infrastructure Automation With Terraform a DevOps Tool', thumbnail: 'assets/teraform-free.jpg', link: 'https://www.udemy.com/course/infrastructure-automation-with-terraform-a-devops-tool/', type: "Free" ,plateform : 'Udemy'},
    { title: 'DevOps : CI/CD with Jenkins', thumbnail: 'assets/jenkins-free.jpg', link: 'https://www.udemy.com/course/devops-cicd-with-jenkins/atch?v=video3', type: "Free" ,plateform : 'Udemy'},
    { title: 'Introduction to Linux Shell Scripting', thumbnail: 'assets/linus-both.jpg', link: 'https://www.udemy.com/course/introduction-to-linux-shell-scripting/', type: "Free" ,plateform : 'Udemy'},

  ];
  UVideos2: any[] = [
    { title: 'GitLab CI: Pipelines, CI/CD and DevOps for Beginners', thumbnail: 'assets/gitlab-paid.jpg', link: 'https://www.udemy.com/course/gitlab-ci-pipelines-cicd-and-devops-for-beginners/', type: "Paid" ,plateform : 'Udemy'},
    { title: 'AWS Certified Solution Architect Associate 2022 in HINDI', thumbnail: 'assets/aws-paid.jpg', link: 'https://www.udemy.com/course/aws-certified-solution-architect-associate-2019-in-hindi/', type: "Paid" ,plateform : 'Udemy'},
    { title: 'Ansible for the Absolute Beginner - DevOps in Hindi', thumbnail: 'assets/ansible-paid.jpg', link: 'https://www.udemy.com/course/ansible-for-the-absolute-beginner-devops-in-hindi/', type: "Paid" ,plateform : 'Udemy'},
    { title: 'Introduction to Linux Shell Scripting in Hindi', thumbnail: 'assets/linus-both.jpg', link: 'https://www.udemy.com/course/introduction-to-linux-shell-scripting-in-hindi/', type: "Paid" ,plateform : 'Udemy'},
  ];

  selectFilter(filter: string) {
    this.selectedFilter = filter;
    if(this.selectedFilter == "youtube"){
      this.showVideos = this.YtVideos;
    }
    
    // Reset subFilter when changing main filter
    this.subFilter = '';
  }

  selectSubFilter(subFilter: string) {
    this.subFilter = subFilter;
    if(this.selectedFilter == "udemy" && this.subFilter == "free"){
      this.showVideos = this.UVideos1;
    }
    else if(this.selectedFilter == "udemy" && this.subFilter == "paid"){
      this.showVideos = this.UVideos2;
    }
  }

}
