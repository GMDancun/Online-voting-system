from kybra import (
    ic, Opt, Vec,
    query, update,
)
import secrets
from db import *
from errors import *


@update
def create_voter(username: str, firstname: str) -> Voter:
    voterid = generate_id()
    voter: Voter = {
        "voterid": voterid,
        "created_at": ic.time(),
        "vote_ids": [],
        "username": username,
        "firstname": firstname,
        "hasvoted": False,
    }

    voters.insert(voter["voterid"], voter)

    return voter


@query
def read_voters() -> Vec[Voter]:
    return voters.values()


@query
def read_voter_by_id(voterid: Principal) -> Opt[Voter]:
    return voters.get(voterid)


@update
def delete_voter(voterid: Principal) -> DeleteVoteResult:
    voter = voters.get(voterid)

    if voter is None:
        return {"Err": {"VoterDoesNotExist": voterid}}

    for voterid in voters["vote_ids"]:
        votes.remove(voterid)

    voters.remove(voter["voterid"])

    return {"Ok": voter}


@update
def vote_now(
        votername: str, voterid: Principal) -> CreateVoteResult:
    voter = voters.get(voterid)

    if voter is None:
        return {"Err": {"VoterDoesNotExist": voterid}}

    voteid = generate_id()
    vote: Votes = {
        "voteid": voteid,
        "created_at": ic.time(),
        "votername": votername,
        "voter_id": voterid,

    }

    votes.insert(vote["voteid"], vote)

    # Check if hasvoted is False before updating
    if not voter["hasvoted"]:
        # Update hasvoted to True

        # Update hasvoted to True
        voter["hasvoted"] = True

        updated_voter: Voter = {
            "voterid": voter["voterid"],
            "created_at": voter["created_at"],
            "firstname": voter["firstname"],
            "username": voter["username"],
            "hasvoted": voter["hasvoted"],
            "vote_ids": [*voter["vote_ids"], vote["voteid"]],
        }

        voters.insert(updated_voter["voterid"], updated_voter)

        return {"Ok": vote}
    else:
        return {"Err": {"CreateVoteErr": voterid}}


@query
def read_votes() -> Vec[Votes]:
    return votes.values()


@query
def read_vote_by_id(voteid: Principal) -> Opt[Votes]:
    return votes.get(voteid)


@update
def delete_vote(voteid: Principal) -> DeleteVoterResult:
    vote = votes.get(voteid)

    if vote is None:
        return {"Err": {"VoterDoesNotExist": voteid}}

    voter = voters.get(vote["voterid"])

    if voter is None:
        return {"Err": {"VoterDoesNotExist": vote["voterid"]}}

    updated_voter: Voter = {
        "voterid": voter["voterid"],
        "created_at": voter["created_at"],
        "firstname": voter["firstname"],
        "username": voter["username"],
        "hasvoted": voter["hasvoted"],
        "vote_ids": list(
            filter(
                lambda vote_id: vote_id.to_str() != vote["voteid"].to_str(),
                voter["vote_ids"],
            )
        ),
    }

    votes.insert(updated_voter["voterid"], updated_voter)

    votes.remove(voteid)

    return {"Ok": vote}

    # {{{{{{{{{{{{{{{{{{{{Vote}}}}}}}}}}}}}}}}}}}}


def generate_id() -> Principal:
    random_bytes = secrets.token_bytes(29)

    return Principal.from_hex(random_bytes.hex())
