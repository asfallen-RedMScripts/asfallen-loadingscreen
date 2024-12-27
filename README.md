# RedM Loading Screen

## Overview

This project provides a visually engaging and interactive loading screen for RedM servers. It features a dynamic video background, a progress bar with a running horse animation, and other stylistic elements to enhance the user experience while waiting for the server to load.
You must add your video and maybe gif.

## Features

- **Video Background**: A looping background video for an immersive experience.
- **Progress Indicator**: A progress bar with a running horse animation to show loading status.
- **Customizable Configuration**: Easily adjust video duration and auto-close settings.
- **RedM Integration**: Includes support for controlling RedM sounds during the loading process.

## File Structure

```
.
├── nui/
│   ├── index.html       # Main HTML structure
│   ├── styles.css       # Styling for the loading screen
│   ├── script.js        # JavaScript functionality
│   ├── config.js        # Configuration options
│   ├── background.mp4   # Video background
│   ├── horserunning.gif # Horse animation for progress bar
├── fxmanifest.lua       # Resource manifest for RedM
```

## Installation

1. Download or clone this repository.
2. Place the `nui` folder and `fxmanifest.lua` in your RedM resource directory.
3. Ensure the resource is added to your `server.cfg` file:
   ```
   ensure <resource_name>
   ```

## Configuration

You can customize settings in `config.js`:

```javascript
const config = { 
    videoAutoClose: true,      // Automatically close the loading screen after the timer ends
    videoTimer: 45000,         // Duration of the loading screen in milliseconds
};
```

## Dependencies

- RedM (cerulean version).

## Usage

When players join the server, the loading screen will automatically display. The background video, progress bar, and animations will function as configured.

## Contributions

Contributions are welcome! Feel free to submit a pull request or report issues in the repository.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
