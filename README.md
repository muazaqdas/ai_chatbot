# Simple AI ChatBot

## Overview
This repository contains a simple chat bot trained on a small set of data. The chat bot's behavior can be customized by modifying the `intents.json` file. The `intents.json` file serves as the data source, allowing the addition of as many tags as needed.

## Files

- **intents.json**: This file holds the data for training the chat bot. Tags and associated patterns are defined here.

- **simple_bot.py**: The main file that contains the logic, model, and other essential components of the chat bot.

- **other_data_and_model_files/**: This directory contains additional files, including the saved model and data. Storing these files prevents the need for preprocessing data every time the code is run and avoids training the model repeatedly.

## Usage

1. Ensure that all the required libraries mentioned at the beginning of `simple_bot.py` are installed on your system.

2. If you make changes to the `intents.json` file, it is essential to retrain the data. 

3. Execute `simple_bot.py` to run the chat bot.

## Contact and Issues
If you encounter any problems or have questions, feel free to raise an issue on this GitHub repository. You can also contact me directly for assistance.

**Author:** Muaz Aqdas

Thank you for using the Simple AI ChatBot!