Title: Inner Lighthouse: IOS and Android Self-Reflection App
Date: 2024-11-10
Category: projects
Tags: Mobile Development, React Native, Expo, GraphQL, Python, Graphene, TypeScript, AWS Lambda, AWS DynamoDB, GPT / OpenAI, Microservices, Redux, Terraform, Figma
Thumbnail: images/inner_lighthouse.png
Summary: Inner Lighthouse is cross-platform mobile app for daily self-reflection exercises. The app development...

![Inner Lighthouse App Interface]({static}/images/inner_lighthouse.png)

## Overview

Inner Lighthouse is a gamified personal development app that guides users through structured self-discovery and growth journeys. Taking inspiration from language learning apps like Duolingo, it transforms psychological concepts and exercises into engaging daily practices.

## Development Highlights

### Interactive Journey System

- Engineered a custom path-generation algorithm using trigonometric functions to create dynamic, visually appealing progress paths
- Implemented progressive unlock system with real-time progress tracking and achievement notifications
- Built responsive layouts adapting seamlessly across different device dimensions and orientations

### Architecture & Infrastructure

- Designed scalable microservices architecture leveraging AWS Lambda, DynamoDB, and S3
- Implemented GraphQL API using Graphene for efficient data fetching and reduced network overhead
- Built secure user authentication system with biometric support and encrypted data storage
- Deployed infrastructure using Terraform with modular configuration for different environments

![Inner Lighthouse App Interface]({static}/images/inner-lighthouse/wallpapper-02.png)

### Platform Integration

- Developed cross-platform codebase using React Native and TypeScript
- Integrated platform-specific in-app purchase systems for iOS (StoreKit) and Android (Billing Library)
- Implemented native module bridges for platform-specific features and optimizations
- Built offline support with data synchronization and conflict resolution

### State Management & Performance

- Utilized Redux with Redux-Saga for predictable state management and complex async flows
- Implemented optimistic updates for improved perceived performance
- Built efficient caching system reducing API calls and enabling offline functionality
- Optimized render performance through strategic component memoization

![Inner Lighthouse App Interface]({static}/images/inner-lighthouse/wallpapper-03.png)

### Key Features

- Progressive journey system with branching paths
- Interactive exercises and reflections
- Achievement and progress tracking
- Offline support with sync
- Cross-platform data persistence
- End-to-end encryption for user data

## Technical Stack

- **Frontend:** React Native, TypeScript, Redux, Redux-Saga
- **Backend:** Node.js, GraphQL, Graphene
- **Infrastructure:** AWS Lambda, DynamoDB, S3, CloudFront
- **DevOps:** Terraform, GitHub Actions, Docker

## Future Development

Currently working on expanding the platform with:

- AI-powered personalization
- Group journey capabilities
- Enhanced analytics dashboard
- Community features with privacy focus
- Expanded exercise library

![Inner Lighthouse App Interface]({static}/images/inner-lighthouse/wallpapper-04.jpeg)

## Outcome

The app successfully launched on both iOS and Android platforms, maintaining a 4.8+ rating on both stores. User engagement metrics show an average session time of 12 minutes with a 40% daily return rate.

### Download

[iOS App Store](https://apps.apple.com/us/app/inner-lighthouse/id6473821361)  [Google Play Store](https://play.google.com/store/apps/details?id=com.twentyeight.innerlighthouse)
