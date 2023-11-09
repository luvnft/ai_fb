# Nearcon_Hackathon - Zic
 
# AI Music Generation with FacebookMusicGen

Welcome to the AI Music Generation project powered by FacebookMusicGen, Hugging Face, and Next.js. This project leverages cutting-edge AI technology to create beautiful and unique music compositions. In addition to AI music generation, we utilize Near blockchain and the Mintbase library for minting and storing your music creations securely.

![AI Music Generation](./assets/ai.jpg)

## Table of Contents

- [Introduction](#introduction)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Minting with Near and Mintbase](#minting-with-nearcon-and-mintbase)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Music has always been a powerful form of artistic expression, and now, with the help of AI, we can explore entirely new frontiers of musical creativity. FacebookMusicGen is a state-of-the-art AI model that can generate unique and captivating music compositions. This project aims to provide an easy-to-use interface for generating AI music compositions and securely storing them using blockchain technology.

## Technology Stack

- **FacebookMusicGen**: This AI model is the heart of our music generation system. It has been trained on a vast dataset of musical compositions and can create music in various styles and genres.

- **Hugging Face**: We use Hugging Face's model hosting capabilities to provide an API for interacting with FacebookMusicGen.

- **Next.js**: Our web application is built with Next.js, a React framework. It provides a smooth and responsive user interface for generating and exploring AI music compositions.

- **Near Blockchain**: Near is a blockchain platform that ensures secure and transparent storage of your music compositions. This technology is used to create a permanent and tamper-proof record of your musical creations.

- **Mintbase Library**: Mintbase is a library for minting non-fungible tokens (NFTs) on the Near blockchain. We use this library to mint and manage NFTs representing your AI-generated music.

## Getting Started

To start with this project:

1. Clone the repository.
2. If you don't have `pnpm` installed, run:

   ```bash
   npm install -g pnpm
   ```
   
3. Then, install the required dependencies:

     ```bash
     pnpm install
     ```

## Environment Variables

Refer to the **.env.example** file for the environment variables used in this project. 

If you don't set up a `.env` file or environment variables with your provider, the project will retrieve values from the following files:

1. For CSS generation during build: `generate-css.js`
2. For configuration variables: `src/constants.ts`
3. For fallback metadata and text values: `src/fallback.ts`

## Local Development

To run the project locally, use:

  ```bash
  pnpm dev
  ```

## Updating Environment Variables

### Running Locally

If you're running your project locally, follow these steps to update your environment variables:

1. Save your changes in the `.env` file.
2. Run `pnpm dev` again to apply the updated environment variables.
3. Reload the page to reflect the changes.

### Deployed on Vercel

If you have deployed your project on Vercel, follow these steps to update your environment variables:

1. Log in to your Vercel account.
2. Navigate to the project settings for your deployed app.
3. Update the environment variables in the Vercel dashboard.
4. Trigger a redeployment of your app to apply the changes.

By following these steps, you can ensure that your project uses the updated environment variables.

## Usage

1. Visit the web application and explore the AI music generation interface.
2. Choose the style or genre for your music composition.
3. Click the "Generate" button to let FacebookMusicGen create a unique musical piece for you.
4. Listen to the generated music and decide if you want to mint it as an NFT.

## Minting with Near and Mintbase

If you decide to mint your AI-generated music as an NFT for secure storage and ownership, follow these steps:

1. Ensure you have a Near wallet and sufficient NEAR tokens.
2. Click the "Mint as NFT" button on the web application.
3. Follow the prompts to connect your NearCon wallet and complete the minting process.
4. Your AI-generated music will be transformed into an NFT and securely stored on the Near blockchain.

## Contributing

We welcome contributions from the open-source community to enhance and improve this project. If you have ideas for new features, bug fixes, or any other contributions, please submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license.

Thank you for exploring the exciting world of AI music generation with FacebookMusicGen, Hugging Face, Near, and Mintbase. Create, mint, and own your AI-generated music compositions like never before!



