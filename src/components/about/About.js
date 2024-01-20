
import React from 'react';
import './About.scss';

const AboutPage = () => {
    return (
        <div className="about-container">
            <h2>About Provision Store E-shop</h2>
            <p>
                Welcome to the Provision Store E-shop.
            </p>

            <h3>Folder Structure</h3>
            <pre>
                {`
        src/
        ├── components/
        |   |
        │   ├── about/
        │   |   ├── About.js
        │   |   ├── About.scss
        │   ├── login/
        │   |   ├── Login.js
        │   |   ├── Login.scss
        │   ├── navbar/
        │   |   ├── Navbar.js
        │   |   ├── Navbar.scss
        │   └── productsList/
        │       ├── Products.js
        │       └── Products.scss
        │   
        ├── pages/
        │   ├── about.js
        │   ├── login.js
        │   └── products.js
        ├── App.js
        ├── App.scss
        └── index.js
        `}
            </pre>

            <h3>Challenges Faced</h3>
            <p>
                During the development of this project, I faced challenges in implementing password hashing using <em>SHA256</em>.<br />
                I learned about the new logic for password hashing and implemented it using the <em>'crypto-js'</em> library.<br />
                Additionally, finding the right regex for proper <u>password</u> and <u>email</u> verification was a crucial step in ensuring the security of user data.
                <br />
                I also had to learn a new way to perform case-insensitive searches using regular expressions<em>( RegExp )</em>.
            </p>
            <h3>Key Features</h3>
            <ol>
                <li>
                    <strong>User Authentication:</strong> Users can securely log in using their email and password. The login form includes validation for email and password fields, with appropriate error handling.
                </li>
                <li>
                    <strong>Automatic Navigation:</strong> Upon successful login, users are automatically redirected to the product list page to explore available products.
                </li>
                <li>
                    <strong>Navigation to About Page:</strong> Users can easily navigate to the About page using the navigation bar.
                </li>
                <li>
                    <strong>Product Search:</strong> In the products page, users can search for specific products using the product name. The search functionality enhances the user experience.
                </li>
            </ol>

            <h3>How to Start the Project</h3>
            <p>
                To start the project, follow these steps:
            </p>
            <ol>
                <li>Clone the repository: <code>git clone [ https://github.com/Arpan3211/promilo-assignment.git ]</code></li>
                <li>Install dependencies: <code>npm install</code></li>
                <li>Start the development server: <code>npm start</code></li>
                <li>Open your browser and navigate to <code>http://localhost:3000</code></li>
            </ol>
        </div>
    );
};

export default AboutPage;
