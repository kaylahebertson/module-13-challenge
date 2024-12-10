import { Candidate } from "../interfaces/Candidate.interface";
import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5';

type CandidateCardProps = {
    currentUser: Candidate;
    addCandidate: (isSelected: boolean) => void;
    };

  const CandidateCard = ({ currentUser, addCandidate }: CandidateCardProps) => {  
    return (
        <section>
          {currentUser?.login ? (
            <>
              {currentUser?.avatar_url ? (
                <img
                  src={`${currentUser.avatar_url}`}
                  alt={`Profile of ${currentUser.login}`}
                  style={{ width: '300px', borderRadius: '30px' }}
                />
              ) : (
                <img
                  src={'https://placehold.co/600x400'}
                  alt={'Placeholder'}
                  style={{ width: '300px', borderRadius: '30px' }}
                />
              )}
    
              <section
                style={{
                  backgroundColor: '#000',
                  width: '280px',
                  borderRadius: '30px',
                  padding: '10px',
                }}
              >
                {currentUser?.html_url && currentUser?.login ? (
                  <a href={currentUser.html_url} target='_blank' rel='noreferrer'>
                    <h2
                      style={{ padding: 0, margin: '0', color: 'white' }}
                    >
                      {currentUser.name}
                      <em>({currentUser.login})</em>
                    </h2>
                  </a>
                ) : null}
                {currentUser?.location ? (
                  <p>Location: {currentUser.location}</p>
                ) : null}
                {currentUser?.email ? (
                  <p>
                    Email:{' '}
                    <a href={`mailto:${currentUser.email}`}>{currentUser.email}</a>
                  </p>
                ) : null}
                {currentUser?.company ? (
                  <p>Company: {currentUser.company}</p>
                ) : null}
                {currentUser?.bio ? <p>Bio: {currentUser.bio}</p> : null}
              </section>
              <section
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '10px',
                }}
              >
                <IoRemoveCircle
                  style={{
                    color: 'red',
                    fontSize: '80px',
                    cursor: 'pointer',
                  }}
                  onClick={() => addCandidate(false)}
                />
    
                <IoAddCircle
                  onClick={() => addCandidate(true)}
                  style={{
                    color: 'green',
                    fontSize: '80px',
                    cursor: 'pointer',
                  }}
                />
              </section>
            </>
          ) : (
            <h2>No Candidates at this time</h2>
          )}
        </section>
      );
    };
    
    export default CandidateCard;