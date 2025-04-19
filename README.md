# Next.js Hackpack

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
<br/>
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

## Node.js

Next.js Hackpack runs on Node.js Version 20.10.0 and higher. Please ensure you have Node.js installed via the [official website](https://nodejs.org/en).

## Next.js

This project is built using [Next.js](https://nextjs.org), a React framework. Next.js is automatically installed when you install all dependencies for this project.

## Environment Variables

The following environment variables are required and must be stored in an `.env` file:

```env
N/A
```

## Plan

Make a website that allows kids to access coloring pages of their favorite characters from movies.
The movies will be seperated into the following genres (tailored to children):

1. Princess

- Cinderella
- Aurora
- Mulan
- Jasmine
- Tiana
- Snow White
- Merida
- Pocahantes
- Ariel
- Belle
- Rapunzel
- Anna
- Elsa
- Moana

2. Adventure

- The Lego Movie
- The Lego Batman
- How To Train Your Dragon
- Teenage Mutant Ninja Turtles
- Kung Fu Panda
- The Lion King
- Epic
- Toy Story
- Up
- Alvin and the Chipmunks
- Finding Nemo
- Madagascar
- Cars

3. Supernatural

- Monsters Inc.
- Hotel Transalvania
- The Monster House
- Monster High
- Hocus Pocus

4. Fantasy

- Nightmare Before Christmas
- Smurfs
- The Book of Life
- Starwars
- Harry Potter
- Percy Jackson
- Chronicles of Narnia
- Encanto

5. Fairytale

- Shrek
- Puss in Boots
- Peter Pan
- Pinnochio

6. Sports

- Space Jam
- Sandlot
- Little Giants
- Karate Kid

7. Video Games

- Pokemon
- Sonic
- Minecraft
- Mario Kart
- Five Nights at Freddy's

## Commands

### Dependencies

```bash
# Install dependencies
npm i

# Add dependency
npm i <dependency>

# Remove dependency
npm un <dependency>
```

### Running the Website Locally

```bash
# Open a browser at localhost:3000
npm run dev
```

### Formatting Code via Prettier

```bash
# Rewrite code recursively with proper formatting
npm run format

# Show formatting differences recursively
npm run check
```

### Linting Code via Eslint

```bash
npm run eslint
```

### Build the Website

```bash
npm run build
```
