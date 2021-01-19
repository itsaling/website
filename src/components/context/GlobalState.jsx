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
      title: "Its Aling",
      year: "2020",
      development: {
        dev1: "web design",
        dev2: "web development",
      },
      language: {
        lang1: "HTML",
        lang2: "SCSS",
        lang3: "Bootstrap",
        lang4: "Gulp",
        lang5: "JavaScript",
        lang6: "React.js",
      },
      images: {
        img1:
          "https://user-images.githubusercontent.com/54334129/105059704-9260e900-5a45-11eb-8313-8e814747ac88.JPG",
        img2:
          "https://user-images.githubusercontent.com/54334129/105059705-9260e900-5a45-11eb-9d41-d155dfe114e7.JPG",
        img3:
          "https://user-images.githubusercontent.com/54334129/105059706-9260e900-5a45-11eb-8ad3-9aff9ad95448.JPG",
      },
      descriptions: {
        info1:
          "This is a redesign of my original web portfolio using React.js along with context API to store data regarding experiences, and projects so new data can be easily added and display without duplicating the div content.",
        info2:
          "When I was trying to update my web portfolio through the old site I find myself being confused with the code because everything was stored on the page and I would have to duplicate the existing container and substitute the content. React made it easier for me to add new content and have it stored elsewhere, which I find that way to be more organize and I now have a single point of storage of data.",
        info3:
          "I still have a lot to learn on React.js. The beginning stage of learning is always the most difficult part over time I begin to enjoy the framework and see its benefit for real-life application",
      },
      challenges: {
        challenge1:
          "Some of the challenges I faced and learn to solve was how to structure my state in my GlobalContext and parsing through a nested object.",
      },
      button: "https://itsaling.github.io/website",
    },
    {
      id: 2,
      title: "Movies",
      year: "2020",
      development: {
        dev1: "web design",
        dev2: "web development",
      },
      language: {
        lang1: "HTML",
        lang2: "SCSS",
        lang3: "Bootstrap",
        lang4: "Gulp",
        lang5: "JavaScript",
        lang6: "React.js",
      },
      images: {
        img1:
          "https://user-images.githubusercontent.com/54334129/105059297-1ff00900-5a45-11eb-84fc-6e438e858bd6.JPG",
        img2:
          "https://user-images.githubusercontent.com/54334129/105059299-20889f80-5a45-11eb-9e4a-37459fe80501.JPG",
        img3:
          "https://user-images.githubusercontent.com/54334129/105059300-20889f80-5a45-11eb-986b-483e07b6e281.JPG",
      },
      descriptions: {
        info1:
          "Movies is a React-based web application that calls to The MovieDB API using Axios and displays movies based on popularity, trends, upcoming, etc.",
      },
      challenges: {
        challenge1:
          "This was one of the first projects I created when I was learning the React framework so there were many challenges that I faced such as working with state, props, and how components work together.",
        challenge2:
          "Additionally, the favorite component is giving a bit of an issue at the moment. This is due to how to store my data is in the App.js itself. Ideally, I want to go back and move the data to be in a context and use a reducer to handle different functionality the app might have.",
      },
      button: "https://moviessuggests.herokuapp.com/",
    },
    {
      id: 3,
      title: "Dashboard",
      year: "2020",
      development: {
        dev1: "web design",
        dev2: "web development",
      },
      language: {
        lang1: "HTML",
        lang2: "SCSS",
        lang3: "Bootstrap",
        lang4: "Gulp",
        lang5: "JavaScript",
        lang6: "React.js",
      },
      images: {
        img1:
          "https://user-images.githubusercontent.com/54334129/105059236-0cdd3900-5a45-11eb-99d3-87cb1ee09781.JPG",
        img2:
          "https://user-images.githubusercontent.com/54334129/105059236-0cdd3900-5a45-11eb-99d3-87cb1ee09781.JPG",
        img3:
          "https://user-images.githubusercontent.com/54334129/105059236-0cdd3900-5a45-11eb-99d3-87cb1ee09781.JPG",
      },
      descriptions: {
        info1:
          "Dashboard is a React-based web application that makes up of different widgets. The main purpose of this project was to learn/understand how to parse different APIs and separate each component and understanding the basics of passing state as props.",
      },
      challenges: {
        challenge1: "",
      },
      button: "https://react-dashboard-1.herokuapp.com/",
    },
    {
      id: 4,
      title: "Covid",
      year: "2020",
      development: {
        dev1: "web design",
        dev2: "web development",
      },
      language: {
        lang1: "HTML",
        lang2: "SCSS",
        lang3: "Bootstrap",
        lang4: "Gulp",
        lang5: "JavaScript",
        lang6: "React.js",
      },
      images: {
        img1:
          "https://user-images.githubusercontent.com/54334129/105059032-de5f5e00-5a44-11eb-8e21-700a6c48580c.JPG",
        img2:
          "https://user-images.githubusercontent.com/54334129/105059091-ecad7a00-5a44-11eb-8cbe-98863a57250f.JPG",
      },
      descriptions: {
        info1:
          "Covid is a React-based application that calls to The Covid Tracking Project API for data regarding the current state of the pandemic.",
        info2:
          "The main purpose of this project is to utilize context API to store data and recall it using useContext instead of storing data in the App.js and prop drilling.",
      },
      challenges: {
        challenge1: "",
      },
      button: "https://github.com/itsaling/covid-report-react",
    },
    {
      id: 5,
      title: "It's Aling",
      year: "2019",
      development: {
        dev1: "web design",
        dev2: "web development",
      },
      language: {
        lang1: "HTML",
        lang2: "SCSS",
        lang3: "JavaScript",
        lang4: "JQuery",
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
          "Its Aling is a website that I both designed and developed to showcase my portfolio and skill set as a front-end web developer.",
        info2:
          "I utilized Adobe XD to wireframe, design, and prototype the web site before actually developing the HTML structure because it’s much easier to have a vision and layout before spending time developing it blindly. To build the site I took advantage of libraries such as jquery, and anime.js to add simple animations to the site to provide visual interest.",
      },
      challenges: {
        challenge1:
          "Designing the website initially was the most challenging part because I wanted the website to reflect my personality while maintaining a clean and modern style. I’ve spent a lot of time creating different versions of the site, I've experimented with different color schemes, and I've searched for inspiration on sites like Awwwards, dribble, and Pinterest. Eventually, I landed on this current design to which I feel channels my style and personality.",
        challenge2:
          "Another challenge I faced was building the website itself. There were times where I would get stuck with CSS positioning and making the site responsive. With lots of practice spent learning from other sources, I was able to accomplish my vision within the first week of development.",
      },
      button: "https://itsaling.github.io/index.html",
    },
    {
      id: 6,
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
      id: 7,
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
          "ManeChoice recommends hair products to the users based on their hair types. By utilizing our initial screening questions, the everyday user can navigate the complex world of hair types with ease.",
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
      id: 8,
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
          "As fellow pet owners, we all love our pets and would do anything for them. Sadly, on occasion pets have been known to run away or get lost during terrible natural disasters. In repsonse, we founded a web application that would allow us to connect with those whom have lost or found pets.",
        info2:
          "Find My Paws is a dynamic web application,functioning as a virtual bulletin board dedicated for users to post information, search for, and find their lost pets.",
      },
      challenges: {
        challenge1:
          "Due to the lack of experience in PHP, my team and I had a hard time creating validations of various users via their email and username.",
      },
      button: "https://github.com/itsaling/FindMyPaw",
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
