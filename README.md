# ChatGPT API Bridge WebExtension

This is a web extension that provides an API interface to the official ChatGPT interface using websockets. It allows you to send inputs to ChatGPT and receive the corresponding output in real-time.
## Features

* Send inputs to ChatGPT through a websocket connection.
* Receive output from ChatGPT in real-time.
* Includes an example websocket server written in Python.
* Around 75% of the code for the extension and the server is generated entirely using ChatGPT!
* 99% of the text for this README was generated with ChatGPT!

## How to use

1. Clone the repository

    ``git clone https://github.com/<username>/chatgpt-webextension.git``

2. Install the extension in your browser.
* Chrome: Navigate to chrome://extensions, enable developer mode, and load the extension folder as an unpacked extension.
* Firefox: Navigate to about:debugging, load temporary add-on and select the manifest.json file in the extension folder.

3. Start the example websocket server using Python

    ``cd chatgpt-webextension``

    ``python example_server.py``

4. Open the browser and navigate to the ChatGPT interface and login.

5. Type any message and hit the send button to receive the output from ChatGPT over websocket, or send an input to the extension via websocket.

## How it works

The extension creates a websocket connection to the example server, which in turn communicates with the official ChatGPT API to send inputs and receive outputs. The server then sends the output back to the extension through the websocket connection, which displays the output to the user.

**Please note that the extension and the example server are provided as-is and are intended for educational and informational purposes only. The author is not affiliated with OpenAI and claims no responsibility for any damages that may occur as a result of using the software. The software is provided under the MIT License.**

## Contribution

If you have any ideas or suggestions to improve this extension, feel free to open an issue or submit a pull request.

Enjoy!