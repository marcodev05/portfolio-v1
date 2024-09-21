import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private projects: Project[] = [
    {
      title: "Mybeedoo",
      description: "Site de reseau sociaux",
      image: "assets/telma net.png",
      techno: ["Java", "Mongodb"],
      site: "https://mybeedoo.com"
    },
    {
      title: "Hadeen",
      description: "Plateforme de marketplace",
      image: "assets/design 1.png",
      techno: ["Java", "Mysql"],
      site: "https://hadeen-place.fr"
    },

  ]; 

  constructor() { }

  getProjects(): Project[]{
    return this.projects;
  }
}
