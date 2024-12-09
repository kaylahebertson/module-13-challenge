import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type { Candidate } from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [results, setResults] = useState<Candidate[]>([]);
  const [currentUser, setCurrentUser] = useState<Candidate>({
    id: null,
    login: null,
    email: null,
    html_url: null,
    name: null,
    bio: null,
    company: null,
    location: null,
    avatar_url: null,
  });
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const searchSpecificUser = async (username: string) => {
    const user: Candidate = await searchGithubUser(username);
    setCurrentUser(user);
  };

  const searchForUsers = async () => {
    const users: Candidate[] = await searchGithub();
    setResults(users);
    await searchSpecificUser(users[currentIndex].login || '');
  };

  const addCandidate = async (isSelected: boolean) => {
    if (isSelected) {
      let parsedCandidates = Candidate[] = [];
      const SavedCandidates = localStorage.getItem('SavedCandidates');
      if (typeof SavedCandidates === 'string') {
        parsedCandidates = JSON.parse(SavedCandidates);
      }
      parsedCandidates.push(currentUser);
      localStorage.setItem('SavedCandidates', JSON.stringify(parsedCandidates));
    }
    if (currentIndex < results.length - 1) {
      setCurrentIndex(currentIndex + 1);
      await searchSpecificUser(results[currentIndex + 1].login || '');
    } else {
      setCurrentIndex(0);
      await searchForUsers();
    }
  };

  useEffect(() => {
    searchForUsers();
    searchSpecificUser(currentUser.login || '');
  }, []);

  return (
    <>
      </><h1>CandidateSearch</h1>
      <CandidateCard currentUser={currentUser} addCandidate={addCandidate} />
    </>
  );
};

export default CandidateSearch;
