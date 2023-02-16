import React from 'react';
import { postings } from './postings.js';
import { PostingsList } from './postings.js';


function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <div> 
        <PostingsList postingss={postings} />
    </div>
      </div>
    </div>
  );
}

export default App;
