import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];

  constructor(private service: PortfolioService) { }

  ngOnInit(): void {
    this.projects = this.service.getProjects();
  }

}
