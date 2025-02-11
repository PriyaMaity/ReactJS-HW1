const root = document.getElementById('root');

const App = () => {
  return (
    <div className = "container">
      <header>
        <h1>Welcome to my React Webpage!</h1>
      </header>

      <section className = "topics">
        <h2>Topics Covered</h2>
        <p>
          This project explores the use of **React.js** for building dynamic web pages.
          React is a JavaScript library that allows developers to create efficient, reusable UI components. 
          Some of the key concepts covered include:
        </p>
        <ul>
          <li>Using React with CDN links</li>
          <li>Creating and rendering components</li>
          <li>Structuring a webpage using HTML and CSS</li>
          <li>Ensuring UI consistency and styling</li>
        </ul>
      </section>

      <section className = "getting-started">
        <h2>Getting Started with React.js</h2>
        <p>
          Before diving into React, we need to set up the environment. One of the simplest ways is by using 
          **CDN (Content Delivery Network)** links, which allow us to use React without installing dependencies.
          Add the following scripts to your HTML file:
        </p>
        <pre>
          {`<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>`}
        </pre>
        <p>
          For more details, visit the official{" "}
          <a href="https://react.dev" target="_blank">React documentation</a>.
        </p>
      </section>

      <section className ="html-structure">
        <h2>HTML - Structuring the Web</h2>
        <p>
          HTML (HyperText Markup Language) is the backbone of any webpage. It provides the structure 
          for content using elements like headings, paragraphs, lists, and images. React enhances HTML 
          by enabling **component-based architecture**, where UI elements can be reused efficiently.
        </p>
        <p>
          For example, a simple React component can be written as:
        </p>
        <pre>
          {`const Heading = () => <h1>Welcome to React</h1>;`}
        </pre>
      </section>

      <section className="css-styling">
        <h2>CSS - Styling the Web</h2>
        <p>
          CSS (Cascading Style Sheets) is used to enhance the appearance of a webpage. It allows developers 
          to define styles for elements, ensuring a visually engaging experience. With CSS, we can control:
        </p>
        <ul>
          <li>Colors and backgrounds</li>
          <li>Layouts and positioning</li>
          <li>Typography and font styles</li>
          <li>Responsiveness for different screen sizes</li>
        </ul>
        <p>
          To learn more about CSS, visit the{" "}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
            MDN CSS Guide
          </a>.
        </p>
      </section>

      <footer>
        <p>© 2025 | Built with ❤️ by [Priya Maity]</p>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />,root);