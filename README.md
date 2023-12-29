
# Blogging application - ECE Webtech project

### Overview
The ECE Webtech project, specifically the repository at *ece-webtech-2023-fall-gr03-10*, is a comprehensive educational project aimed at creating a web-based blogging application named [**ALIBOBO**](https://ece-webtech-2023-fall-gr03-10-beta.vercel.app/). This project encompasses a range of web technologies and is designed to provide a practical learning experience in web development.

### Pre-requisites
Before diving into the project, it's essential to have a basic understanding of the following technologies and concepts:

- **Node.js**: Fundamental knowledge of Node.js is crucial as it forms the backbone of the server-side operations.
- **React and Next.js**: Familiarity with React and Next.js is required for the frontend development.
- **Tailwind CSS**: Styling is done using Tailwind CSS, so a basic understanding of this framework will be helpful.
- **Supabase**: Knowledge of Supabase, an open-source Firebase alternative, is necessary for database operations and authentication.
- **Docker**: The project uses Docker for containerization and easy deployment.

### Installation

To get the project up and running, follow these steps:

1. **Clone the Repository:**

```
git clone https://github.com/marcolap13/ece-webtech-2023-fall-gr03-10
```

and navigate to the project directory: 
```
cd app
```


2. **Install Dependencies:**

```
npm install

```

3. **Then, launch the application locally**

```
npm start

```

### Accessing ALIBOBO
However, instead of starting the project locally, you can conveniently access our site directly via the following link: [https://ece-webtech-2023-fall-gr03-10-beta.vercel.app/](https://ece-webtech-2023-fall-gr03-10-beta.vercel.app/).

Feel free to explore the various features and functionalities of ALIBOBO using the provided test credentials:

- **Username:** tester@gmail.com
- **Password:** test123

This access allows you to seamlessly navigate the site and test different aspects, including commenting on articles and exploring the article creation and editing features.
    
### Usage
The application is structured into various components and pages, each serving a specific function in the blogging platform. Key components include:

- **Header and Footer:** Essential UI components for navigation and information display.
- **User Authentication:** Utilizing Supabase for user authentication and profile management.
- **Article Management:** Features for creating, editing, and deleting blog articles.
- **Theme Context:** A context for managing and applying themes across the application.

### Key Pages
1. **Home Page (`pages/index.js`):** The landing page of the application, introducing ALIBOBO.
2. **About Page (`pages/about.js`):** Provides information about the collaborators and the project.
3. **Articles Page (`pages/articles/index.js`):** Where users can view, create, and manage articles.
4. **Login Page (`pages/login.js`):** Handles user authentication.
5. **Profile Page (`pages/profiles.js`):** Displays user profile information.

## Deliverables 

- Vercel URL: *https://ece-webtech-2023-fall-gr03-10-beta.vercel.app*
- Supabase project URL: *https://fwkcwbjmeziovqczkbxn.supabase.co*

## Authors

- *Steeve HUANG, 03-10*
- *Marco LA, 03-10*
- *Rayan ZOUCH, 03-10*

## Evaluation

### Mandatory Tasks

* **Naming convention**
  * Grade: 2/2
  * Comments: We ensured consistent and descriptive naming throughout the project, which helped maintain clarity. In addition, these commit names are inspired by the [conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/). 
  * Task feedback: Adopting the Conventional Commits standard initially posed a challenge but it became logical and natural over time. This practice soon proved essential for ensuring clarity and maintaining the project's structure.
* **Project structure**
  * Grade: 2/2
  * Comments: We adhered to the recommended project structure, finding it to be logical and reasonable. By following this structure, we were able to maintain an organized codebase that is easy to navigate and manage.
  * Task feedback: The task of implementing the project structure was straightforward. The logical arrangement and clear guidance provided made the process simple.
* **Git usage**
  * Grade: 2/2
  * Comments: We managed to have a proper git history with meaningful commit messages respecting [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Additionally, our use of GitKraken significantly streamlined our version control process, providing an intuitive and visual interface that enhanced our overall efficiency in managing the codebase.
  * Task feedback: Initially challenging, mastering Git was fundamental to our teamwork. Over time, we fully grasped its importance and how it facilitates smoother collaboration and project tracking.
* **Code quality**
  * Grade: 4/4
  * Comments: To ensure high code quality, we utilized the format selection feature in Visual Studio Code (VSCode), which allowed us to maintain consistent indentation, line spacing, and overall code formatting. Alongside this, we focused on writing understandable code, supplemented by descriptive variable names.
  * Task feedback: While maintaining code quality presented its challenges, like in enforcing consistency across the team, the process was made more accessible through the use of VSCode’s formatting tools. The task underscored the importance of such practices in teamwork, where the clarity of code directly influences the ease teamwork.
* **Design, UX, and content**
  * Grade: 4/4
  * Comments: We managed to create a good-looking and user-friendly website. Utilizing Tailwind CSS, we focused on responsive design principles to ensure a seamless experience across various devices. 
  * Task feedback: This task holds significant importance as it directly influences the first impression users have of our website meaning that this required a lot of thoughtful consideration and maintenance. 

* **Home page**
  * Grade: 2/2
  * Comments: We made our home page using JSX to define the structure and layout of components. We made it friendly, good-looking, informative, and with a call to action (CTA).
  * Task feedback: This task was pretty easy. It is a part of the "Design, UX, and content" task because it is related to the first impression of the users.
* **Navigation**
  * Grade: 2/2
  * Comments: We implemeted the navigation bar thanks to a series of 'Link' components from Next.js library and regular HTML buttons.
  * Task feedback: This task was very easy and links to the pages we implemented.
* **Login and profile page**
  * Grade: 4/4
  * Comments: We created a login button, redirecting to a login page, made using OAuth 2.0. In our code, Oauth is implemented with Supabase authentification library '@supabase/auth-ui-react' along with the Supabase client 'supabase'. Also, when the user is connected, he can click on his profile page to see his informations that were stored in supabase.
  * Task feedback: This was not easy. We had to link our supabase to the code and to try severals tests to make it work.
* **Post creation and display**
  * Grade: 6/6
  * Comments: A authenticated user on our website can create post. There is a "Create New article" button that will display a form when clicked. After submitting, the information will be added on supabase. For the image of the post, the user have to use an image hosting site like [IMGBB](https://imgbb.com/) and to get the image url. Each post have its own page. and can be accessed by anyone. 
  * Task feedback: This was really hard to implement using supabase ad linking it to our code. When we had a problem, we were askign ourself if the problem was coming from supabase or from our code.
* **Comment creation and display**
  * Grade: 4/4
  * Comments: A user can reply to a post at the bottom of a post page. He has to be authenticated to reply. The user can then type a message and click on submit to reply to the post.
  * Task feedback: The task was not simple. We had to create a new table in which we would store the comments, allowing only authenticated users to create new comments.
* **Post modification and removal**
  * Grade: 4/4
  * Comments: In the articles table in supabase, there is a user_id column, foreign key of auth_users.id. If the user_id of the authenticated user is the same as the one who created the articles, then an edit and delete button appears and this user can delete or edit his post.
  * Task feedback: This was not very hard, considering we are editing or deleting rows in supabase.
* **Search**
  * Grade: 6/6
  * Comments: Implemented using Supabase's full-text search capabilities, integrated with a React frontend. The search dynamically updates as the user types, offering a responsive and interactive experience
  * Task feedback: The task was challenging in terms of integrating backend and frontend functionnalities effectively.
* **Use an external API**
  * Grade: 2/2
  * Comments: We successfully incorporated an external API into our project, enhancing user engagement and diversifying content. In the **footer** section of our React frontend, we integrated the Cat Fact API, which dynamically fetches and displays interesting cat facts.
  * Task feedback: It was interesting to see how we could set up an API from the web. We checked out a few options, and the cat one was funny, adding a cool touch to our project.
* **Resource access control**
  * Grade: 6/6
  * Comments: We implemented resource access control using Supabase RLS (Row-Level Security) to restrict access appropriately. Authenticated users can create posts, and users can only access their own content. The API returns the correct data for each user, and HTTP responses include relevant status codes and messages.
  * Task feedback: This task was tough but pertinent. It's important to ensure data security and access control in applications, and the use of Supabase RLS is a good approach to achieve this.
* **Account settings**
  * Grade: 4/4
  * Comments: When a users is authenticated, he can click on his profile picture. This profile page will show him informations like 'username' 'email' etc. On this profile page, there is a 'Go to dashboard' button. When he clicks on this button, he is redirected to the dashboard page. He can see all his informations and he also have an edit button to edit his informations.
  * Task feedback: This was an easy task, taking into account that we already managed to edit posts, it was the same logic.
* **WYSIWYG integration**
  * Grade:2/2
  * Comments: We successfully integrated the WYSIWYG editor into both the article creation and comment sections of the platform. This implementation allows users to compose their content in a more intuitive and visually appealing manner.
  * Task feedback: It's intriguing to observe the various implementations and text customizations, adding a layer of creativity and individuality to the platform's user experience.
* **Gravatar integration**
  * Grade: 2/2
  * Comments: Gravatar integration was successful, we can add a personalized profile picture for users. Don't forget to create an account on [gravatar.com](https://gravatar.com/) and add a profile picture for a more personalized touch!
  * Task feedback: This task was quite easy to implement.
* **Light/dark mode**
  * Grade: 2/2
  * Comments: We implemented the light/dark mode effectively. Clicking on a button will switch modes letting the choice to the users preferrences.
  * Task feedback: This features is present on a lot of website and it was fun to implement.

### Bonus Tasks

* ***Nested Comment***   
  * Grade: *3*
  * Comments: We created a new table in our supabase called comment_replies. Thanks to this, we can reply to a comment and also we added a "show/hide replies" button, thinking that sometimes, the comment section would be flooded.
* ***Profile picture***   
  * Grade: *2*
  * Comments: We added gravatar but we also have the possibility to directly add our profile picture in our website. The user have to use an image hosting site like [IMGBB](https://imgbb.com/), retrieve the url and paste it in his profile picture section. If the user have gravatar, our website will prioritize his profile picture in his account details. To use gravatar, he has to update his profile picture to a null value. 

## Miscellaneous

### Course Feedback

All three of us came to the same conclusion: the Webtech course was extremely enriching both in terms of content and practical application. The various labs guided us well in preparing for our projects. Getting feedback on our weekly labs was a great way to keep us motivated. It made sure we didn't fall behind on our projects.

### Project Reuse

- [x] We authorize the professors to use our project as an example for the next year students (facultative).
