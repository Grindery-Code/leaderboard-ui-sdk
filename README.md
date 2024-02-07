# React Leaderboard Component

A flexible and customizable React leaderboard component to display and visualize leaderboard data.

## Installation

You can install the React Leaderboard component via npm:

```bash
npm install mode-leaderboard
```

## Usage

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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Thank you for using the Mode Leaderboard component! Contributions, issues, and feedback are welcome.