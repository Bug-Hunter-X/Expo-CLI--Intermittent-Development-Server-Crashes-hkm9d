# Expo CLI Intermittent Development Server Crashes

This repository demonstrates a problem encountered with the Expo CLI, where the development server intermittently crashes without providing any useful error messages.  The app appears to build successfully but fails to launch or reload in the simulator or on a device.

The issue's root cause is difficult to pinpoint due to the lack of error logging.  This repository provides both the problematic code (which may or may not demonstrate the bug consistently, given its unpredictable nature) and a suggested solution involving enhanced error handling and logging.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `expo start`.
4. Observe the development server's behavior.  The server may crash randomly during development.

## Solution

The solution involves implementing more robust error handling and logging within the app and potentially configuring Expo to provide more verbose logging output.  The solution is provided in `expoBugSolution.js`.

## Contributing

Contributions are welcome! If you have any insights into resolving this type of intermittent crash or have experienced similar problems, please share your findings.