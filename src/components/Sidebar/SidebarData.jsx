import React from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Movies",
    path: "/movies",
    icon: <MdIcons.MdMovie />,
    cName: "nav-text",
  },
  {
    title: "Top IMDB",
    path: "/topidbm",
    icon: <MdIcons.MdReviews />,
    cName: "nav-text",
  },

  {
    title: "Favorites",
    path: "/favorites",
    icon: <AiIcons.AiFillHeart />,
    cName: "nav-text",
  },
];
