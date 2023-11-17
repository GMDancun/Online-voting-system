# This file contains all errors that will be displayed to the user
# incase a problem occurs

from kybra import Variant, Principal
from models import Voter, Votes


class DeleteVoterResult(Variant, total=False):
    Ok: Voter
    Err: "DeleteVoterError"


class DeleteVoterError(Variant, total=False):
    VoterDoesNotExist: Principal


class CreateVoteResult(Variant, total=False):
    Ok: Votes
    Err: "CreateVoteErr"
    # Err: "VoterHasAlreadyVoted"


class CreateVoteErr(Variant, total=False):
    VoterDoesNotExist: Principal


class DeleteVoteResult(Variant, total=False):
    Ok: Votes
    Err: "DeleteVoteError"


class DeleteVoteError(Variant, total=False):
    VoteDoesNotExist: Principal
    VoterDoesNotExist: Principal
