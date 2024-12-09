import { Candidate } from "../interfaces/Candidate.interface";

type CandidateCardProps = {
    currentUser: Candidate;
    addCandidate: (isSelected: boolean) => void;
    };

const CandidateCard = ({ currentUser, addCandidate }: CandidateCardProps) => {
    return (
        <div className="card">
            <img src={`${currentUser.avatar_url}`} alt="Avatar" />
            <h2>{currentUser.name}</h2>
            <p>{currentUser.bio}</p>
            <p>{currentUser.company}</p>
            <p>{currentUser.location}</p>
            <button onClick={() => addCandidate(true)}>Add Candidate</button>
        </div>
    );
};

export default CandidateCard;