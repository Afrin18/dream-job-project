import React from 'react';

const Blog = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-center font-semibold text-2xl mb-8'>Question and Answer</h2>

            <p><b>1.</b> Question: When should you use context API? <br/> 
                <b>Answer: </b>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
            </p> <br/>
            <p><b>2.</b> Question: What is a custom hook? <br/>
                 <b>Answer: </b>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. A custom hook does not require a specific signature.
            </p> <br/>
            <p><b>3.</b> Question :What is useRef? <br/>
                <b>Answer: </b>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .

            </p> <br/>
            <p><b>4.</b> Question: What is useMemo? <br/>
                <b>Answer: </b>useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.
            </p>
        </div>
    );
};

export default Blog;