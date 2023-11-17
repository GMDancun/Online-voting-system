# This file contains specifics of the structure of my object and its properties


from kybra import Record, Principal, nat64, Vec


class Voter(Record):
    voterid: Principal
    created_at: nat64
    vote_ids: Vec[Principal]
    username: str
    firstname: str
    hasvoted: bool


class Candidate(Record):
    candidateid: Principal
    created_at: nat64
    candidatefname: str


class Votes(Record):
    voteid: Principal
    created_at: nat64
    votername: str
    voter_id: Principal
