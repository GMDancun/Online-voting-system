import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export type CreateVoteErr = { 'VoterDoesNotExist' : Principal };
export type CreateVoteResult = { 'Ok' : Votes } |
  { 'Err' : CreateVoteErr };
export type DeleteVoteError = { 'VoteDoesNotExist' : Principal } |
  { 'VoterDoesNotExist' : Principal };
export type DeleteVoteResult = { 'Ok' : Votes } |
  { 'Err' : DeleteVoteError };
export type DeleteVoterError = { 'VoterDoesNotExist' : Principal };
export type DeleteVoterResult = { 'Ok' : Voter } |
  { 'Err' : DeleteVoterError };
export interface Voter {
  'firstname' : string,
  'username' : string,
  'vote_ids' : Array<Principal>,
  'hasvoted' : boolean,
  'created_at' : bigint,
  'voterid' : Principal,
}
export interface Votes {
  'votername' : string,
  'voter_id' : Principal,
  'voteid' : Principal,
  'created_at' : bigint,
}
export interface _SERVICE {
  'create_voter' : ActorMethod<[string, string], Voter>,
  'delete_vote' : ActorMethod<[Principal], DeleteVoterResult>,
  'delete_voter' : ActorMethod<[Principal], DeleteVoteResult>,
  'read_vote_by_id' : ActorMethod<[Principal], [] | [Votes]>,
  'read_voter_by_id' : ActorMethod<[Principal], [] | [Voter]>,
  'read_voters' : ActorMethod<[], Array<Voter>>,
  'read_votes' : ActorMethod<[], Array<Votes>>,
  'vote_now' : ActorMethod<[string, Principal], CreateVoteResult>,
}
