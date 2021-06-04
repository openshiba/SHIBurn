# What you need

> Docker

# Steps

1. `docker build -t burner-backend .`
2. `docker run -it --rm --env-file .env -v %cd%:/src -p 8545:8545 burner-backend`
3. `yarn install` 
4. Start Node `npx hardhat node`
7. open a new docker instance `docker exec -it xxxxx /bin/bash`
8. Compile `npx hardhat compile`
9. and deploy `npx hardhat run scripts/01.deploy.js --network localhost`

If you need to console to it use `npx hardhat console --network localhost`