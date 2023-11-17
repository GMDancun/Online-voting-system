# Online Voting App

Kybra project! This is a group project which we are required to deploy our canister (application) to the Internet Computer (IC) decentralized cloud. 
It is a simple Online Voting APP canister. You can always refer to https://github.com/GMDancun/Blockchain-Books/blob/main/The%20Kybra%20Book.pdf for more in-depth documentation.

`dfx` is the tool you will use to interact with the IC locally and on mainnet. If you don't already have it installed:

<br>

---
Step 1: Check if you have the following installed or install the following
---

<br>

---
    Python 3.10.7
    dfx 0.14.2
    Python VS Code Extension or Pycharm Community/Professional
---

<br>


---
Installation Process.
---

It is highly recommended to install Python 3.10.7 using pyenv. To do so, use the pyenv installer as shown below:

``` bash
# install pyenv
curl https://pyenv.run | bash
```

```
# install Python 3.10.7
~/.pyenv/bin/pyenv install 3.10.7
```

<br>

---
dfx - Run the following command to install dfx 0.14.2:
---

```bash
DFX_VERSION=0.14.2 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"
```

<br>

---
If after trying to run dfx commands you encounter an error such as dfx: command not found, you might need to add $HOME/bin to your path. Here's an example of doing this in your .bashrc:
---

```bash
echo 'export PATH="$PATH:$HOME/bin"' >> "$HOME/.bashrc"
```

<br>

---
Step 2: Create and source a virtual environment:
---

```bash
~/.pyenv/versions/3.10.7/bin/python -m venv venv
source venv/bin/activate
```

<br>

---
Step 3: Now install Kybra:
---

```bash
pip install kybra
```


---
To Run this App locally follow the following steps:
Step 4: Use the git clone command followed by the link to this repo.
---

```bash
  git clone https://github.com/GMDancun/Online-voting-system.git
```


<br>


---
Step 5: cd to the app directory.
---

```bash
  cd: Online-voting-system/votingapp
```

<br>

---
Step 6: Start a replica, which is a local instance of the IC that you can deploy your canisters to:
---

```bash
  dfx start --background --clean
```


---
Step 7: Install the Dependencies:
---

```bash
    npm install
```


---
Step 8: Now you can deploy your canister locally:
---

```bash
    dfx deploy
```