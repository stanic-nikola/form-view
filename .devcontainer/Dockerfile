
ARG VARIANT="20-bookworm"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:1-${VARIANT}
RUN npm install -g @angular/cli

# Install Chromium and Firefox
RUN apt-get update && \
    apt-get install -y chromium firefox-esr

# Set CHROME_BIN environment variable
ENV CHROME_BIN=/usr/bin/chromium

# Verify installations
RUN chromium --version && firefox -v

RUN apt-get clean
