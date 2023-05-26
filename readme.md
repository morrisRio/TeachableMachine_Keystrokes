# **Clickdummy Automation with Machine Learning**

This little tool lets you interact with a clickdummy through Theachable Machine (eg. Protopie, Figma etc.)
Guessed classes from the Machine are turnt into Keystrokes that control your Prototype.

It uses an online version of Teachabele Machine and tensorflow.js, node-js, Websocket library `ws` , and `robotjs` to automate keypresses.

---

## **Installation**

Open a terminal window and navigate to your Workspace.
Install needed modules by typing:

```bash
npm install
```

#### **Import own model**

- To use your own machine-leraning model go to the [Teachable Machine Website](https://teachablemachine.withgoogle.com/train/image) and follow their instructions on creating an image-model.
- After sample collection, training and sufficient reliability, go ahead and export your model for download.
- Add the extractet files to the directory "./my-model"

#### **Adjust code for you labels and keystrokes**

Open the `keytapper.js` file and edit the switch cases (Line 25).

```javascript
switch (message) {
        case 'yourFristLabel': //<-- Insert the name of your label here
                keyToPress = '1'; //<-- name the key you want to be tapped
                break;

        case 'yourSecondLabel':
                keyToPress = '2';
                break;
        /*
        .
        .
        .
        */
}
```

#### **Add triggers to your Prototype**

Add the according Keypress-triggers to your Prototype.

All done!

---

## **Usage**

- Open the `index.html` with a live-server (eg. Live-Server Plugin for VS-Code)
- Open the Page in your Browser and press start (you'll need to allow access to your webcam)

- Go to your terminal and run the keytapper script by typing:

```bash
node keytapper.js
```

You may need to grant permission for the script to use accesibilty features in the System Preferences.
