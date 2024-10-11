import { Link } from 'react-router-dom';
import './ButtonLink.css';

const ButtonLink = ({ to, children, type }) => {
  // Checks if the type is 'submit'; if so, render a button
  if (type === 'submit') {
    return (
      <button type="submit" className="custom-button">
        {children}
      </button>
    );
  }
  // Otherwise, render a Link
  return (
    <Link to={to} className="custom-button">
      {children}
    </Link>
  );
};

export default ButtonLink;