import React from 'react';
import {TypeAnimation} from 'react-type-animation';

const TypingText = ({ typing }) => {
  console.log(typing);

  return (
    <TypeAnimation
      className="center-block__typing-box"
      sequence={[
        ...typing.list,
        () => {}
      ]}
      wrapper="span"
      speed={1}
      deletionSpeed={1}
      cursor={false}
      repeat={Infinity}
      style={{ fontSize: '.8em', display: 'inline-block' }}
    />
  );
};

export default TypingText;
