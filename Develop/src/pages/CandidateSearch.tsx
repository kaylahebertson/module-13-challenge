import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type { Candidate } from '../types/Candidate';

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
  }

const CandidateSearch = () => {
  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
