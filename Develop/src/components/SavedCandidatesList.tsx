import { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';
import SavedCandidates from './SavedCandidates';

const SavedCandidatesList = () => {
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    
    useEffect(() => {
        const SavedCandidates = localStorage.getItem('SavedCandidates');
        if (typeof SavedCandidates === 'string') {
        setCandidates(JSON.parse(SavedCandidates));
        }
    }, []);
    
    return (
        <table className='table'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <SavedCandidates
                key={candidate.id}
                candidate={candidate}
              />
            ))}
          </tbody>
        </table>
      );
    };

    export default SavedCandidatesList;