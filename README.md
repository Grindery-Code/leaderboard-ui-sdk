# React Leaderboard Component

A flexible and customizable React leaderboard component to display and visualize leaderboard data.

## Installation

You can install the React Leaderboard component via npm:

```bash
npm install mode-leaderboard
```

## Usage with API URL

Import the `Leaderboard` component into your React application and use it by providing either an API URL or static leaderboard data.

```jsx
import React from 'react';
import Leaderboard from 'mode-leaderboard';

const App = () => {
  const apiUrl = 'https://example.com/api/leaderboard';
  
  return (
    <div>
      <Leaderboard apiUrl={apiUrl} customStyles={{ backgroundColor: '#f2f2f2' }} />
    </div>
  );
};

export default App;
```

## Usage leaderboard data

Import the `Leaderboard` component into your React application and use it by providing either an API URL or static leaderboard data.

```jsx
import React from 'react';
import Leaderboard from 'mode-leaderboard';

const App = () => {
  
  return (
    <div>
      <Leaderboard leaderboardData={leaderboardData} customStyles={{ backgroundColor: '#f2f2f2' }} />
    </div>
  );
};

export default App;
```

### Props

- **apiUrl** *(optional)*: URL to fetch leaderboard data from.
- **leaderboardData** *(optional)*: Array of objects representing leaderboard entries.
- **customStyles** *(optional)*: Custom styles to apply to the leaderboard container.

<!-- ## Example

For a quick example, you can run the included example application:

```bash
cd example
npm install
npm start
```

This will start a development server, and you can view the leaderboard component in action. -->

## Customization

You can customize the appearance of the leaderboard by providing custom styles through the `customStyles` prop. Feel free to adjust the styles according to your design preferences.

## Data Format

The expected format for leaderboard data is an array of objects, where each object represents a leaderboard entry. Each entry should have the following properties:

- **id**: Unique identifier for the entry.
- **image**: URL to the participant's image.
- **address**: Participant's wallet address.
- **score**: Participant's score.


## Publishing to npm

To publish your React Leaderboard component to npm, you can follow these steps:

### 1. Prepare your package

Make sure your package is ready for publishing. Ensure that you have a `package.json` file in your project with the necessary information such as name, version, description, main file, and dependencies.

### 2. Create an npm account

If you don't have an npm account, you'll need to create one. You can do this by running the following command in your terminal and following the prompts:

```bash
npm adduser
```

### 3. Update version number

Before publishing, make sure to update the version number in your `package.json`. You can do this manually or use the `npm version` command. For example:

```bash
npm version patch
```

This command will automatically increment the patch version number. You can use `minor` or `major` instead of `patch` depending on the type of changes you've made.

### 4. Publish to npm

After updating the version, you can publish your package to npm using the following command:

```bash
npm publish
```

### 5. Verify the publication

Visit the npm website and search for your package to verify that it has been published successfully.

### Additional Tips

- **Scoped Packages**: If you want to publish your package under a scope (e.g., `@yourusername/mode-leaderboard`), you can add the `--access` flag when publishing:

  ```bash
  npm publish --access public
  ```

- **Private Packages**: If your package is intended to be private, you can use the `npm login` command to log in with your npm account and then follow the publishing steps.

  ```bash
  npm login
  npm publish --access restricted
  ```

Now, your React Leaderboard component should be available on npm for others to install and use. Make sure to document the installation process and include any necessary information in the README to help users integrate your component into their projects.