The provided solution focuses on improving error handling and logging to pinpoint the cause of the crashes.  It involves wrapping potentially problematic code blocks in try-catch statements and logging detailed error messages to the console.  Additional configuration within the Expo app's `app.json` might be necessary to increase the verbosity of Expo's logging output.

```javascript
// expoBugSolution.js
import React from 'react';
import { Text, View } from 'react-native';

function MyComponent() {
  try {
    // Potentially problematic code here
    // ...
    return (
      <View>
        <Text>Hello, world!</Text>
      </View>
    );
  } catch (error) {
    console.error('An error occurred:', error);
    // Handle the error appropriately, perhaps display a user-friendly message
    return (
      <View>
        <Text>An error occurred. Please try again later.</Text>
      </View>
    );
  }
}

export default MyComponent;
```

Furthermore, review Expo's documentation on debugging and error handling to understand ways to improve the visibility of errors during development.