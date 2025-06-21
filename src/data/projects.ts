import type { project } from "../types";
import TodoListImg from '../assets/images/dlxmedia-hu-l7idyRTQePY-unsplash.jpg'
import NetflixCloneImg from "../assets/images/boliviainteligente-uuXa22lBaQQ-unsplash.jpg"
import JokesImg from "../assets/images/chaitanya-pillala-zDDdoYqQ64U-unsplash.jpg"

export const projects : project[] = [
    {
        id :1,
        icon : TodoListImg,
        title : "To-Do List", 
        main : "A clean and responsive task manager built with React, allowing users to add, update, complete, and delete tasks.",
        gitlink : `https://github.com/warghane-monali/ToDo_list`,
        projectlink : 'https://todo-lists-appication.netlify.app/'
    },
    {
        id :2,
        icon : NetflixCloneImg,
        title : "Netflix Clone", 
        main : "A responsive video streaming app clone built with React, featuring dynamic UI, user authentication, and real-time content fetching from TMDB API.",
        gitlink : `https://github.com/warghane-monali/netflix-website`,
        projectlink : ``
    },
    {
        id :3,
        icon : JokesImg,
        title : "Awesome Jokes", 
        main : "A fun and lightweight web app that displays random jokes on each visit or button click. Built with React and integrated with a jokes API to fetch fresh content in real-time.",
        gitlink : `https://github.com/warghane-monali/Awesome-Jokes`,
        projectlink :'https://awesomejokes.netlify.app/'
    }
]