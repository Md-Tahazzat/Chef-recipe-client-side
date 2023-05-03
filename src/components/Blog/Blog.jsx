import React from "react";
import { useNavigation } from "react-router-dom";
import Loading from "../loading/Loading";

const Blog = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") return <Loading></Loading>;
  return (
    <div className="w-full min-h-[calc(100vh-121px)] md:min-h-[calc(100vh-161px)] flex flex-col items-center justify-center">
      <div className="collapse collapse-plus border w-full md:w-4/6 rounded-lg my-2">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          1. What is the difference between uncontrolled and controlled
          components?
        </div>
        <div className="collapse-content">
          <p className="font-semibold">
            A controlled component is a component which takes value through
            props from its parent component and notifies changes through a
            callback function and then parent component update its value.
            <br />
            Where a uncrontrolled component manage its own value internally
            through state managment system
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border w-full md:w-4/6 rounded-lg my-2">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          2. How to validate React props using PropTypes?
        </div>
        <div className="collapse-content">
          <p className="font-semibold">
            First we need to import PropsTypes from "props-types"; Then we need
            to create a functional component which will take props. Then we need
            to create Component.propsTypes method and inside that method we need
            to define the validation method. Example :
            <code>
              <pre>
                {`
            import PropTypes from 'prop-types';
            function MyComponent(props) {
             return <div>{props.message}</div>;
              }
             MyComponent.propTypes = {
                message: PropTypes.string.isRequired,
            };
           `}
              </pre>
            </code>
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border w-full md:w-4/6 rounded-lg my-2">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          3. What is the difference between Node.js and Express.js?
        </div>
        <div className="collapse-content">
          <p className="font-semibold">
            Node.js provides the runtime environment for executing JavaScript on
            the server-side but Express.js provides a framework for building web
            applications with Node.js. Express.js converts the application into
            routes to make code easier.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus border w-full md:w-4/6 rounded-lg my-2">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          4. What is a custom hook, and why will you create a custom hook?
        </div>
        <div className="collapse-content">
          <p className="font-semibold">
            A custom hook is functional component which can be shared through
            the react Application. A custom hook helps to avoid code duplication
            and make code more redable and clean.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
