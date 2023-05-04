import React from 'react';
const Blog = () => {

    return (

        <div className='grid md:grid-cols-2 gap-2 ml-4 mr-4'>
            <div className='border border-red-400 p-4 bg-slate-200'>
                <h2>1.Tell us the differences between uncontrolled and controlled components.?</h2>
                <p>Controlled Component</p>
                <ul>
                    <li>Generally faster as there's less state management</li>
                    <li>Less complex code</li>
                    <li>Easier to debug</li>
                </ul>
                <p>Uncontrolled Component</p>
                <ul>
                    <li>Generally slower as there's more state management</li>
                    <li>More complex code</li>
                    <li>More difficult to debug</li>
                </ul>
            </div>
            <div className='border border-red-400 p-4 bg-slate-200'>
                <h2>2.How to validate React props using PropTypes</h2>
                <p>propTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App. defaultProps.</p>
            </div>
            <div className='border border-red-400 p-4 bg-slate-200'>
                <h2>3.Tell us the difference between nodejs and express js.</h2>
                <p>NodeJS is a framework of JavaScript which is mainly used for working with the backend of our application or building the backend using JavaScript</p>
                <p>ReactJS is a JavaScript front-end library. It is mainly used for building the user interface or the frontend of our application</p>
            </div>
            <div className='border border-red-400 p-4 bg-slate-200'>
                <h2>4.What is a custom hook, and why will you create a custom hook?</h2>
                <p>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks</p>
                <p>Be called at the very top level of your React function to ensure that hooks are called in the same order each time a component rendersStart with the use keyword.</p>
            </div>
        </div>
    );
};

export default Blog;