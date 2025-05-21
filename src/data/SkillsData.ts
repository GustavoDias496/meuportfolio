import javascript from "@/assets/javascript.svg";
import typescript from "@/assets/typescript.svg";
import c from "@/assets/c.png";
import java from "@/assets/java.png";
import python from "@/assets/python.png";
import vue from "@/assets/vuejs.png";
import react from "@/assets/react.png";
import express from "@/assets/express.png";

interface Skill {
  id: number;
  title: string;
  image: string; 

}

export const skills: Skill[] = [
  {
    id: 1,
    title: "JavaScript",
    image: javascript, 
  },
  {
    id: 2,
    title: "TypeScript",
    image: typescript, 
  },
  {
    id: 3,
    title: "C",
    image: c, 
  },
  {
    id: 4,
    title: "Java",
    image: java, 
  },
  {
    id: 5,
    title: "Python",
    image: python, 
  },
  {
    id: 6,
    title: "Vue",
    image: vue, 
  },
  {
    id: 7,
    title: "React",
    image: react, 
  },
  {
    id: 8,
    title: "React Native",
    image: react, 
  },
  {
    id: 9,
    title: "Express",
    image: express, 
  }
];