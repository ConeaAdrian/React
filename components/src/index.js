import React from 'react'
import ReactDOM from 'react-dom'

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
    <div className='ui containet comments'>
    <ApprovalCard>
            <CommentDetail              //children component
                author="Sam" 
                timeAgo="Today at 5.23PM" 
                content="I like this new post"
            />
    </ApprovalCard>

    <ApprovalCard>
            <CommentDetail 
                author="Adrian" 
                timeAgo="Today at 3.23PM"
                content="Nice blog post"
            />
    </ApprovalCard>

    <ApprovalCard>
            <CommentDetail 
                author="Alex" 
                timeAgo="Yesterday at 5.00PM" 
                content="I like the writing"
            />
    </ApprovalCard>
    </div>
    
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))