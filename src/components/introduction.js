import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Introduction = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-4">Meditation Community</h1>
        <p className="lead">Here you can connect with all meditators whose goal is to end there suffering by removing craving, aversion and ignorance.</p>
        <hr className="my-2" />
        <p>Chat with meditators around you or world and find right place to meditate and discuss dhamma or technique of meditation. Community can help you stay consistent in your practice.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Introduction;
