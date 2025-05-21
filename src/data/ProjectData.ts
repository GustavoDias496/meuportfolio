import HomeAdmin from "@/assets/HomeAdmin.png";
import mncvexpress from "@/assets/mnexpress.PNG";
import sifsoft from "@/assets/sifsoft.PNG";

interface TechItem {
  name: string;
  bgColor?: string;
}

interface Project {
  id: number;
  title: string;
  describe: string;
  image: string; 
  link?: string;
  technologies: TechItem[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MN CV Express",
    describe: "CRM para Gerenciamento de Currículos na Moto Nanuque - Salinas, desenvolvido para otimizar o processo de gestão de currículos recebidos pela empresa, o sistema permite o armazenamento, organização e consulta eficiente das informações dos candidatos. Além disso, possibilita a geração de diversos relatórios personalizados, contribuindo diretamente para a agilidade e eficiência dos processos internos.",
    image: mncvexpress, 
    link: "teste",
    technologies: [
      { name: "ReactJs", bgColor: "#0118EB" },
      { name: "TypeScript", bgColor: "#3178c6" },
      { name: "Express JS", bgColor: "#68a063" },
      { name: "Jest", bgColor: "#EAB506"},
      { name: "Nodemailer", bgColor: "#EA0700"},
      { name: "Bcrypt", bgColor: "#06EA16"},
      { name: "Postgres", bgColor: "#EA6402"},
    ]
  },
    {
    id: 2,
    title: "NOTIFICA",
    describe: "Projeto de TCC, um Sistema de Registro de Ocorrências no IFNMG - Campus Salinas, voltado para o desenvolvimento de um software destinado ao registro e acompanhamento de ocorrências no IFNMG - Campus Salinas. A solução é composta por um backend em Node.js com Express, um frontend web em React.js e um aplicativo mobile desenvolvido em React Native. O sistema permite o cadastro e o monitoramento de ocorrências de diversas naturezas, como bullying, furtos e problemas de infraestrutura, contribuindo para um ambiente mais seguro e organizado dentro da instituição.",
    image: HomeAdmin,
    link: "teste",
    technologies: [
      { name: "ReactJs", bgColor: "#0118EB" },
      { name: "TypeScript", bgColor: "#3178c6" },
      { name: "Express JS", bgColor: "#68a063" },
      { name: "Nodemailer", bgColor: "#EA0700"},
      { name: "Bcrypt", bgColor: "#06EA16"},
      { name: "Prisma Js", bgColor: "#6F88E8"},
      { name: "Postgres", bgColor: "#EA6402"},
    ]
  },
  {
    id: 2,
    title: "SIFSoft Júnior",
    describe: "Atuei como Diretor de Projetos e Desenvolvedor Backend, contribuindo ativamente em diversos projetos. Participei de múltiplas etapas do ciclo de desenvolvimento, desde o levantamento de requisitos até o deploy das aplicações, sempre com foco na entrega de soluções eficientes e alinhadas às necessidades dos clientes.",
    image: sifsoft,
    link: "teste",
    technologies: [
      { name: "ReactJs", bgColor: "#0118EB" },
      { name: "TypeScript", bgColor: "#3178c6" },
      { name: "Express JS", bgColor: "#68a063" },
      { name: "Django", bgColor: "#68a063" },
    ]
  },
];