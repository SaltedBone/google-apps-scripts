# Google Services Integration with Telegram Bot

![GitHub](https://img.shields.io/github/license/saltedbone/google-apps-scripts)
![GitHub top language](https://img.shields.io/github/languages/top/saltedbone/google-apps-scripts)
![GitHub last commit](https://img.shields.io/github/last-commit/saltedbone/google-apps-scripts)

This repository contains Google Apps Scripts that integrate a Telegram bot with OpenAI's ChatGPT model and Google's Calendar, Gmail, and Drive APIs. The goal is to enable the Telegram bot to interact with these services using the natural language processing capabilities of ChatGPT.

## Features

- **ChatGPT Integration**: The scripts use OpenAI's API to send user messages from the Telegram bot to the ChatGPT model and receive generated responses.

- **Google Calendar API Integration**: The scripts interact with the Google Calendar API to retrieve the user's next event when requested.

- **Google Gmail API Integration**: The scripts use the Gmail API to read, send, and delete emails based on user commands.

- **Google Drive API Integration**: The scripts interact with the Google Drive API to list, download, and share files.

- **Telegram Bot Integration**: The scripts send responses back to the Telegram bot, which then delivers them to the user. The bot also sends user messages to the scripts for processing.

- **File Sharing**: The scripts create shareable links for files in Google Drive and send these links to the Telegram bot. The bot or a backend server can then open these links to access the files.

## Usage

Replace placeholders in the scripts with your actual API keys and credentials. Deploy the scripts as web apps and set up your Telegram bot to interact with the deployed web app URLs.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
