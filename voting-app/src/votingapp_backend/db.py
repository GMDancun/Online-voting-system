''' This file contains The database StableBTreeMap is a type of map (or dictionary) data structure.
It typically uses a B-tree internally, which is a self-balancing
tree data structure that maintains sorted data and allows for efficient search,
 insertion, and deletion operations. '''

from kybra import StableBTreeMap, Principal
from models import Voter, Votes, Candidate

# Voters
voters = StableBTreeMap[Principal, Voter](
    memory_id=3, max_key_size=38, max_value_size=100_000
)

# Votes
votes = StableBTreeMap[Principal, Votes](
    memory_id=4, max_key_size=38, max_value_size=5_000_000
)


# Candidates
candidates = StableBTreeMap[Principal, Candidate](
    memory_id=5, max_key_size=28, max_value_size=100_000
)
