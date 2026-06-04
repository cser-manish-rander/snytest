# Vulnerable Snyk Test Project

This is a simple Node.js project containing highly vulnerable dependencies, designed for testing security scanners like Snyk.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the application:
   ```bash
   npm start
   ```

## Dependencies

- **lodash@^4.17.21**: Secured against Prototype Pollution.
- **minimist@^1.2.8**: Secured against Prototype Pollution.
- **express@^4.21.1**: Updated to a safe, modern version.
- **axios@^1.7.9**: Updated to a safe, modern version.
