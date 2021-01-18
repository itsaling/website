import React, { createContext } from "react";

const initalState = {
  experiences: [
    {
      id: 1,
      company: "RagingBull",
      title: "web developer",
      date: "Jan 2019 - Jan 2020",
      descriptions: {
        list1: "Transforming PSD design into clean HTML and CSS.",
        list2:
          "Utilizing Javascript to add functionally such as timer, countdown, redirects and many more to increase engagement and sales.",
        list3:
          "Utilizing SQL to retrieve data and create various templates used for daily marketing reports.",
        list4:
          "Create and maintain various Wordpress sites including maintaining plugins, page development and seo management.",
        list5:
          "Troubleshoot various tasks relating to Web Development created in Jira.",
      },
    },
    {
      id: 2,
      company: "Driven Media Group",
      title: "web developer",
      date: "Jan 2019 - Jan 2020",
      descriptions: {
        list1:
          "Responsible for creating a responsive design and layout of a Wordpress site by utilizing various plugins and custom contents built using clean coded HTML5, CSS, JavaScript.",
        list2:
          "Create wireframes and prototypes using design tools such asPhotoshop, Adobe XD, Sketch and Figma.",
        list3:
          "Utilize elementor along with HTML5 and CSS to create wordpress sites.",
        list4:
          "Create custom landing pages/blog posts for various automotive client’s website.",
      },
    },
    {
      id: 3,
      company: "Groove Commerce",
      title: "Web Developer Intern",
      date: "Jun 2018 - Aug 2018",
      descriptions: {
        list1:
          "Worked alongside other developers to create a web application that utilizes BigCommerce API to design a more user-friendly 301 redirects page for BigCommerce.",
        list2:
          "Utilized Laravel framework, SQL, HTML, CSS to develop the application.",
        list3:
          "Designed the wireframe and user interface for the application by analyzing the current issue with the existing application and what the user required.",
        list4:
          "Managed the backend for handling the 301 redirects data (CRUD, Search, Sort).",
        list5: "Collaborated on the frontend for the entire application.",
      },
    },
  ],
  projects: [
    {
      id: 1,
      title: "It's Aling",
      year: "2019",
      development: {
        dev1: "web design",
        dev2: "web development",
      },
      language: {
        lang1: "HTML",
        lang2: "CSS",
        lang3: "SCSS",
        lang4: "JavaScript",
        lang5: "JQuery",
      },
      images: {
        img1: "https://itsaling.github.io/Assets/Photo/itsaling/itsaling.png",
        img2:
          "https://itsaling.github.io/Assets/Photo/itsaling/itsaling-profile.png",
        img3:
          "https://itsaling.github.io/Assets/Photo/itsaling/itsaling-work.png",
      },
      descriptions: {
        info1:
          "As you can already tell, its Aling is a website that I both designed and developed to showcase my portfolio and skill set as a front-end web developer.",
        info2:
          "I utilized Adobe XD to wireframe, design, and prototype the web site before actually developing the HTML structure because it’s much easier to have a vision and layout before spending time developing it blindly. To build the site I took advantage of libraries such as jquery, and anime.js to add simple animations to the site to provide visual interest.",
      },
      challenges: {
        challenge1:
          "Designing the website initally was the most challenging part because I wanted the website to reflect my personality while maintaining a clean and modern style. I’ve spent a lot of time creating different versions of the site, I've experimented with different color schemes, and I've searched for inspiration on sites like Awwwards, dribble, and Pinterest. Eventually, I landed on this current design to which I feel channels my style and personality.",
        challenge2:
          "Another challenge I faced was building the website itself. There were times where I would get stuck with CSS positioning and making the site responsive. With lots of practice spent learning from other sources, I was able to accomplish my vision within the first week of development.",
      },
      button: "https://itsaling.github.io/index.html",
    },
    {
      id: 2,
      title: "Devtamin",
      year: "2019",
      development: {
        dev1: "web design",
        dev2: "Web Development (In-progress)",
      },
      language: {
        lang1: "HTML",
        lang2: "CSS",
        lang3: "SCSS",
        lang4: "JavaScript",
        lang5: "JQuery",
      },
      images: {
        img1: "https://itsaling.github.io/Assets/Photo/devtamin/devtamin.png",
        img2:
          "https://itsaling.github.io/Assets/Photo/devtamin/devtamin-course.png",
        img3:
          "https://itsaling.github.io/Assets/Photo/devtamin/devtamin-content.png",
      },
      descriptions: {
        info1:
          "Devtamin is a fun take on a learning platform such as Udemy. This design was requested by a friend who was interested in owning a website where visitors can watch tutorials on basic programming. The vision for this website is to establish a creative environment for visitors and provide simple navigation.",
        info2:
          "Here, I also utilized Adobe XD to wireframe, design, and prototype the web site. Assets, such as logo, were created using Adobe illustrator.",
      },
      challenges: {
        challenge1:
          "Some challenges I faced while creating this site included the responsiveness of the website and some Javascript functionalities. The website is still under development right now.",
      },
      button: "https://itsaling.github.io/devtamin.github.io/",
    },
    {
      id: 3,
      title: "ManeChoice",
      year: "2019",
      development: {
        dev1: "Andriod Development",
        dev2: "Fullstack Development",
      },
      language: {
        lang1: "Kotlin",
      },
      images: {
        img1:
          "https://itsaling.github.io/Assets/Photo/manechoice/manechoice.png",
        img2:
          "https://itsaling.github.io/Assets/Photo/manechoice/manechoice-quiz.png",
        img3:
          "https://itsaling.github.io/Assets/Photo/manechoice/manechoice-review.png",
        img4:
          "https://itsaling.github.io/Assets/Photo/manechoice/manechoice-products.png",
        img5:
          "https://itsaling.github.io/Assets/Photo/manechoice/manechoice-email.png",
      },
      descriptions: {
        info1:
          "ManeChoice recommends hair products to the users based on their hair types. By utilizing our inital screening questions, the everyday user can navigate the complex world of hair types with ease.",
        info2:
          "Our app utilizes series of different activities for each question we ask the user to select. (Total of 6 questions).",
      },
      challenges: {
        challenge1:
          "For the product recommendations, my team hosted our data through My Json Server (GitHub Repo). Next we made a network call to the server to retrieve the products.",
        challenge2:
          "With the time limitations, we prioritized functionality by narrowing our variables to: Hair Type, Absorbency, and Fullness. As for the products, we broke it down to 4 varibles: lightweight, normal, heavyweight and volumizing products.",
        challenge3:
          "Furthermore, the JSON server had a data limitation of 10,000 contents so we had to host the JSON on two repositories.",
      },
      button: "https://github.com/itsaling/ManeChoice",
    },
    {
      id: 4,
      title: "Find My Paws",
      year: "2017",
      development: {
        dev1: "Web Design",
        dev2: "Web Development",
      },
      language: {
        lang1: "HTML",
        lang2: "CSS",
        lang3: "JavaScript",
        lang4: "PHP",
        lang5: "MySQL",
      },
      images: {
        img1:
          "https://itsaling.github.io/Assets/Photo/findmypaws/findmypaws.png",
        img2:
          "https://itsaling.github.io/Assets/Photo/findmypaws/findmypaws-login.png",
        img3:
          "https://itsaling.github.io/Assets/Photo/findmypaws/findmypaws-post.png",
      },
      descriptions: {
        info1:
          "ManeChoice recommends hair products to the users based on their hair types. By utilizing our inital screening questions, the everyday user can navigate the complex world of hair types with ease.",
        info2:
          "Our app utilizes series of different activities for each question we ask the user to select. (Total of 6 questions).",
      },
      challenges: {
        challenge1:
          "For the product recommendations, my team hosted our data through My Json Server (GitHub Repo). Next we made a network call to the server to retrieve the products.",
        challenge2:
          "With the time limitations, we prioritized functionality by narrowing our variables to: Hair Type, Absorbency, and Fullness. As for the products, we broke it down to 4 varibles: lightweight, normal, heavyweight and volumizing products.",
        challenge3:
          "Furthermore, the JSON server had a data limitation of 10,000 contents so we had to host the JSON on two repositories.",
      },
      button: "https://github.com/itsaling/ManeChoice",
    },
  ],
};

export const GlobalContext = createContext(initalState);

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider
      value={{
        experiences: this.initalState.experiences,
        projects: this.initalState.projects,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
