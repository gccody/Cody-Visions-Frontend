import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  text: string;
  link: string;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <div className={props.className ? `button ${props.className}` : 'button'}>
      <Link style={{ textDecoration: 'none' }} to={props.link}>{props.text}</Link>
    </div>
  );
}