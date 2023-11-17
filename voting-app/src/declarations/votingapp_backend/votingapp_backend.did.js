export const idlFactory = ({ IDL }) => {
  const Voter = IDL.Record({
    'firstname' : IDL.Text,
    'username' : IDL.Text,
    'vote_ids' : IDL.Vec(IDL.Principal),
    'hasvoted' : IDL.Bool,
    'created_at' : IDL.Nat64,
    'voterid' : IDL.Principal,
  });
  const DeleteVoterError = IDL.Variant({ 'VoterDoesNotExist' : IDL.Principal });
  const DeleteVoterResult = IDL.Variant({
    'Ok' : Voter,
    'Err' : DeleteVoterError,
  });
  const Votes = IDL.Record({
    'votername' : IDL.Text,
    'voter_id' : IDL.Principal,
    'voteid' : IDL.Principal,
    'created_at' : IDL.Nat64,
  });
  const DeleteVoteError = IDL.Variant({
    'VoteDoesNotExist' : IDL.Principal,
    'VoterDoesNotExist' : IDL.Principal,
  });
  const DeleteVoteResult = IDL.Variant({
    'Ok' : Votes,
    'Err' : DeleteVoteError,
  });
  const CreateVoteErr = IDL.Variant({ 'VoterDoesNotExist' : IDL.Principal });
  const CreateVoteResult = IDL.Variant({ 'Ok' : Votes, 'Err' : CreateVoteErr });
  return IDL.Service({
    'create_voter' : IDL.Func([IDL.Text, IDL.Text], [Voter], []),
    'delete_vote' : IDL.Func([IDL.Principal], [DeleteVoterResult], []),
    'delete_voter' : IDL.Func([IDL.Principal], [DeleteVoteResult], []),
    'read_vote_by_id' : IDL.Func([IDL.Principal], [IDL.Opt(Votes)], ['query']),
    'read_voter_by_id' : IDL.Func([IDL.Principal], [IDL.Opt(Voter)], ['query']),
    'read_voters' : IDL.Func([], [IDL.Vec(Voter)], ['query']),
    'read_votes' : IDL.Func([], [IDL.Vec(Votes)], ['query']),
    'vote_now' : IDL.Func([IDL.Text, IDL.Principal], [CreateVoteResult], []),
  });
};
export const init = ({ IDL }) => { return []; };
