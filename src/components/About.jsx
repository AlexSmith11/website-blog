import React from 'react';

const About = () => {
  return (
    <div className='text'>
      <h3>About me</h3>
      <p>
        I graduated four years ago, and have since worked in web,
        infrastructure, and mobile roles.
      </p>
      <p>
        I&apos;ve excellent communication and organisational skills, and highly
        enjoy working in a team. I&apos;m looking to learn as much as I possibly
        can about software engineering and computer science. From front-end dev
        to machine learning, I need to know it all!
      </p>
      <p>
        When I&apos;m not doing computer stuff you&apos;ll find me on some hill
        hiking, biking, or climbing.
      </p>
      <p>
        Get in touch:{' '}
        <a
          className='fromLeft'
          href='mailto:alexsmith11nd@gmail.com'
          target='blank'>
          alexsmith11nd@gmail.com
        </a>
      </p>
    </div>
  );
};

export default About;
