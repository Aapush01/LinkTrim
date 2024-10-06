# LinkTrim - URL Shortener

**LinkTrim** is a simple and efficient URL shortener built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to shorten long URLs, making them easier to share and manage. The backend API handles URL shortening and redirection, while the frontend provides a user-friendly interface to interact with the service.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Contribution Guidelines](#contribution-guidelines)
- [How to Contribute](#how-to-contribute)
- [Issues and Bugs](#issues-and-bugs)
- [License](#license)
- [Contact](#contact)

## Tech Stack

- **Frontend:** React, TypeScript,  Tailwind-CSS
- **Backend:** Node.js, Express, MongoDB
- **Database:** MongoDB


## Features

- URL shortening functionality
- Redirects users to the original URL
- User-friendly interface for easy interaction
- Real-time URL validation before shortening

## Getting Started

### Prerequisites

To set up the project locally, ensure you have the following installed:

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Aapush01/LinkTrim.git
   cd LinkTrim
   
2. Install the backend dependencies:
      ```bash
   cd backend
   npm install
   
3. Install the frontend dependencies:
      ```bash
    cd ../frontend
    npm install
    
4. Set up the environment variables: 
    
   Create a .env file in the backend directory with the following variables:
      ```bash
      NODE_ENV=development
      PORT=5000
      MongoDB_URL=your_mongodb_connection_string
      BASE_URL=https://linktrim-ts01.onrender.com

    Create a .env file in the backend directory with the following variables:
      ```bash
      VITE_SERVER_URL="Your_Backend_URL"   
5. Start the backend server:
     ```bash
     cd backend
     npm run dev
     ```
   This will start the Express.js server at http://localhost:5000.
     
6. Start the frontend server:
    ```bash
    cd ../frontend
    npm run dev
    ```
    This will start the frontend at http://localhost:3000.
    
7. You can now visit the app at http://localhost:3000!


## Contribution Guidelines

I am excited to have you contribute to LinkTrim! Please follow these guidelines to ensure a smooth collaboration:

- Follow the [Code of Conduct](#).
- Fork the repository and clone it to your local machine.
- Create a new branch (`git checkout -b your-feature-branch`).
- Make your changes and test thoroughly.
- Submit a pull request (PR) to the `main` branch, describing the changes you've made.
- Ensure your PR addresses an open issue or includes details in the PR.

### Code Style

- Follow standard JavaScript best practices.
- Use Tailwind CSS for styling.
- Make sure code is well-documented.

### Testing

Please make sure to test your changes before submitting a pull request.

## How to Contribute

1. **Find an Issue**: Check the [Issues](https://github.com/Aapush01/LinkTrim/issues) tab for bugs or features you can work on.
2. **Open a Pull Request**: Once you've made your changes, open a PR, and describe your work.

If you're new to open-source, feel free to ask questions! I am happy to help you get started.

## Issues and Bugs

I track issues in the [GitHub Issues](https://github.com/Aapush01/LinkTrim/issues) section. If you find a bug or have a feature request, please create a new issue with as much detail as possible.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

Feel free to reach out for any questions or discussions:

- Twitter: [@aapush2](https://twitter.com/aapush2)
- GitHub: [@aapush01](https://github.com/aapush01)
- LinkedIn: [Md Shahid Afridi](https://www.linkedin.com/in/md-shahidafridi/)


    

