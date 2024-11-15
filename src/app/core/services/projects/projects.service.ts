import { Injectable } from '@angular/core';
import { Project } from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

    projects: Project[] = [
    {
      title: 'E-Commerce',
      image: 'assets/images/Annotation 2024-10-06 041734.png',
      link: 'https://thefreshcartapp.netlify.app/',
      tags: ['Angular', 'Typescript', 'Bootstrap','Api']
    },
    {
      title: 'amazon',
      image: 'assets/images/Annotation 2024-10-06 075931.png',
      link: 'https://amazonproject01.netlify.app/login',
      tags: ['Angular', 'Typescript', 'Tailwind','Api']
    },
    {
      title: 'Movie Production',
      image: 'assets/images/movies1.png',
      link: 'https://github.com/sayedmohameddev/movies.git',
      tags: ['Angular', 'Typescript', 'SCSS' ,'Bootstrap']
    },
    {
      title: 'BookMark',
      image: 'assets/images/crud.PNG',
      link: 'https://crud-theta-amber.vercel.app',
      tags: ['HTML', 'JavaScript', 'CSS','Bootstrap']
    },
    {
      title: 'Games',
      image: 'assets/images/games.PNG',
      link: 'https://sayedmohameddev.github.io/game/',
      tags: ['OOP', 'JavaScript', 'HTML','Bootstrap']
    },
    {
      title: 'Login System',
      image: 'assets/images/Annotation 2024-11-15 024810.png',
      link: 'https://sayedmohameddev.github.io/login-logout/',
      tags: ['HTML', 'SCSS', 'JavaScript','Bootstrap']
    },
    {
      title: 'Live Weather',
      image: 'assets/images/weather.PNG',
      link: 'https://sayedmohameddev.github.io/Weather-main/',
      tags: ['HTML', 'SCSS', 'JavaScript','Bootstrap']
    },
    
    {
      title: 'Mealify',
      image: 'assets/images/Mealify.PNG',
      link: 'https://sayedmohameddev.github.io/Mealify/',
      tags: ['HTML', 'JavaScript','Bootstrap']
    },
    {
      title: 'Yummy',
      image: 'assets/images/Yummy.PNG',
      link: 'https://sayedmohameddev.github.io/YummyExam/',
      tags: ['HTML','SCSS','JavaScript','Bootstrap']
    },
    {
      title: 'Transaction App',
      image: 'assets/images/Annotation 2024-10-06 054516.png',
      link: 'https://sayedmohameddev.github.io/Customer-Transactions/',
      tags: ['HTML', 'SCSS', 'JavaScript', 'Bootstrap']
    },
    {
      title: 'Egyption Party',
      image: 'assets/images/EgyptionParty.PNG',
      link: 'https://sayedmohameddev.github.io/egyptianParty/',
      tags: ['HTML', 'SCSS', 'JavaScript', 'Bootstrap']
    },
    
    {
      title: 'DevFolio',
      image: 'assets/images/Annotation 2024-11-15 025608.png',
      link: 'https://sayedmohameddev.github.io/devfolio/',
      tags: ['HTML', 'SCSS', 'JavaScript', 'Bootstrap']
    },
    
    {
      title: 'Fokir',
      image: 'assets/images/Fokir.PNG',
      link: 'https://yaraaamohsen.github.io/fokir/',
      tags: ['HTML', 'SCSS', 'JavaScript']
    },
    {
      title: 'Bakery',
      image: 'assets/images/Bakery.PNG',
      link: 'https://sayedmohameddev.github.io/BACKREY-/',
      tags: ['HTML', 'SCSS', 'JavaScript']
    },
  ];

}