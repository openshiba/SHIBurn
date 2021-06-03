# What you need

> Docker

# Steps

1. `docker build -t burner-backend .`
2. `docker run -it --rm --env-file .\.env -v %cd%:/src -p 8546:8546 burner-backend`
3. `yarn install` 
4. Compile `npx hardhat compile`
5. Deploy `npx hardhat run scripts/sample-script.js`
6. Start Node `npx hardhat node`