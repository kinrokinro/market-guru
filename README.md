![Main page](https://api.nodes.guru/agoric-market.png)

## Installation
 1. Connect to your server via SSH
 2. Install requirement software:
```
curl https://deb.nodesource.com/setup_14.x | sudo bash
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt install nodejs make clang pkg-config libssl-dev build-essential jq -y < "/dev/null"
sudo npm --force install -g yarn
```
 3. Install Agoric SDK:
```
cd $HOME
git clone https://github.com/Agoric/agoric-sdk -b agorictest-12
cd agoric-sdk
yarn install
yarn build
yarn link-cli /usr/local/bin/agoric
```
 4. Install [Market-Guru](https://github.com/kinrokinro/market-guru) Dapp:
```
cd $HOME
git clone https://github.com/kinrokinro/market-guru
cd market-guru
agoric install
```
 5. Start Agoric VM:
```
cd $HOME/market-guru
screen -dmS agoric-vm bash -c "agoric start --reset ; exec bash"
```
 6. Deploy contract:
```
cd $HOME/agoric-sdk
git pull origin master
yarn install
yarn build
cd $HOME/market-guru
screen -dmS agoric-deploy bash -c "agoric deploy ./contract/deploy.js ./api/deploy.js ; exec bash"
```
 7. Open your wallet (save output link):
```
agoric open --repl
```
 8. Start Dapp:
```
screen -dmS agoric-ui bash -c "(cd ui && yarn start) ; exec bash"
```
 9. Go to the [Market Guru](http://localhost:3000)
 10. Go to the wallet (your saved link in step 7)
 11. Under "Dapps" in the wallet, enable the nodesGuruNFTs Dapp.


## Using the Dapp

1. Navigate to https://market.nodes.guru.
2. Enter `agoric open` in your terminal (be sure you have installed Agoric, if not - look at the steps 2 and 3 above)
3. A window for your wallet should open.
4. Under "Dapps" in the wallet, enable the nodesGuruNFTs Dapp.
5. Now you should be able to click on a card to make an offer to buy it.
6. Approve the offer in your wallet
7. View the card in your wallet.

To learn more about how to build Agoric Dapps, please see the [Dapp Guide](https://agoric.com/documentation/dapps/).

See the [Dapp Deployment Guide](https://github.com/Agoric/agoric-sdk/wiki/Dapp-Deployment-Guide) for how to deploy this Dapp on a public website, such as https://market.nodes.guru

<div align="right">Based on the <a href="https://github.com/Agoric/dapp-card-store target="__blank">Agoric Card Store</a></div>
