import React from 'react';

const About = () => {
  return (
    <div className='text'>
      <h3>About me</h3>
      <p>
        I'm a newly graduated enthusiast, recently finishing a 6 month contract
        at Gloversure as a full-stack web developer.
      </p>
      <p>
        I've excellent communication and organisational skills, and highly enjoy
        working in a team. I'm looking to learn as much as I possibly can about
        software engineering and computer science. From front-end dev to machine
        learning, I need to know it all!
      </p>
      <p>
        When I'm not doing computer stuff you'll find me on some hill hiking,
        biking, or just trying to get a good shot.
      </p>
      <p>
        Get in touch:{' '}
        <a href='mailto:alexsmith11nd@gmail.com' style={styles}>
          <u>alexsmith11nd@gmail.com</u>
        </a>
      </p>
    </div>
  );
};

/**
 * mailto links are annoying - overide the blue link text
 */
const styles = {
  color: 'inherit'
};

export default About;
