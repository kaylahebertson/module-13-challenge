import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const currentPage = useLocation().pathname;
  return (
    <ul>
      <li>
        <Link to="/" className={currentPage === '/' ? 'active' : ''}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/SavedCandidates" className={currentPage === '/SavedCandidates' ? 'active' : ''}>
          Saved Candidates
        </Link>
      </li>
    </ul>
  )
};

export default Nav;
