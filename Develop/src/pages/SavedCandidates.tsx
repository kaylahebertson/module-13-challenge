import { Candidate } from "../interfaces/Candidate.interface";

type CandidateCardProps = {
    candidate: Candidate;
};

const SavedCandidates = ({candidate,}: CandidateCardProps) => {
  return (
    <tr>
      {candidate ? (
        <>
          <td>
            <img
              src={`${candidate.avatar_url}`}
              alt={`Profile of ${candidate.login}`}
              style={{
                width: '70px',
                borderRadius: '10px',
                display: 'block',
                margin: '0 auto',
              }}
            />
          </td>
          <td>
            <a href={candidate.html_url || ''} target='_blank' rel='noreferrer'>
              <h3 style={{ color: 'white' }}>
                {candidate.name}
                <br />
                <em>({candidate.login})</em>
              </h3>
            </a>
          </td>
          <td>{candidate.location}</td>
          <td>
            <a href={`mailto:${candidate.email}`}>{candidate.email}</a>
          </td>
          <td>{candidate.company}</td>
          <td>
            <div style={{ maxHeight: '100px', overflowY: 'scroll' }}>
              {candidate.bio}
            </div>
          </td>
        </>
      ) : (
        <h2>No Candidates at this time</h2>
      )}
    </tr>
  );
};

export default SavedCandidates;
