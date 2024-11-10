<div style="display: flex; justify-content: space-around;">
  <img src="https://i.ibb.co/QPM59hB/Simulator-Screenshot-i-Phone-16-Pro-Max-2024-11-10-at-15-04-35.png" width="300" />
  <img src="https://i.ibb.co/dJLmvWf/Simulator-Screenshot-i-Phone-16-Pro-Max-2024-11-10-at-15-04-44.png" width="300" />
</div>

# Wallet App

This repository contains the implementation of a mobile application built with React Native and Expo. The project includes core functionality such as state management, navigation, and API interactions, with support for deep linking and locale-specific custom modules for Android and iOS.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Design Choices](#design-choices)
- [Trade-offs and Compromises](#trade-offs-and-compromises)

## Technologies Used

The application was developed using:

- **React Native** with **Expo**
- **Node.js v22.9.0**
- **Yarn v1.22.22**

Additional libraries:

- **redux-toolkit**, **react-redux**, **redux**, **redux-persist** for state management
- **react-navigation** for navigation between screens
- **TypeScript** for type safety
- **axios** for API calls
- **json-server** for API mocking
- **Custom Native Module**: `DeviceLocaleModule` created in **Kotlin** (Android) and **Swift** (iOS) for locale management

## Getting Started

To set up and run this project locally, follow these steps.

### Prerequisites

Ensure that you have:

- Node.js v22.9.0
- yarn 1.22
- Android Tiramisu (Emulator API 33)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/yourrepository.git

   ```

2. Clone the repository:

   ```bash
   yarn

   ```

3. Open a separate terminal and start the server (db.json):

   ```bash
   yarn db:start

   ```

4. To run on iOS - Open the terminal and run::

   ```bash
   yarn ios

   ```

5. To run on Android - Open the terminal and run::
   ```bash
   yarn android
   ```
