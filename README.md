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

## Included Vulnerabilities

- **lodash@4.17.15**: Vulnerable to Prototype Pollution.
- **minimist@1.2.0**: Vulnerable to Prototype Pollution.
- **express@4.16.0**: Contains multiple security issues (e.g., path traversal, open redirect in dependencies/older versions).
- **axios@0.18.0**: Vulnerable to Server-Side Request Forgery (SSRF) and others.
