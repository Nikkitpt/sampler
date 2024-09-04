# Interactive Sound Looper with 3D Visualizer

This is a p5.js project that combines sound manipulation with an interactive 3D visual component. The program features two looping sound files and a draggable 3D cube that allows the user to dynamically control the playback speed and looping parameters of the sounds.

## Features

- **Interactive Cube:** Drag the cube along the x-axis to change the loop length of the sound.
- **Dynamic Sound Control:** Clicking on the cube toggles between two modes:
  - When the looper is active, a secondary sound is triggered with a loop of the desired length.
  - When the looper is inactive, the original sound continues playing uninterrupted.
- **Responsive Cube Size:** The size of the cube changes based on the loop length.
- **Visual Feedback:** The cube rotates and changes color as the loop length is adjusted, providing real-time feedback on the sound parameters.

## Setup Instructions

1. **Preload Sound Files:**
   - Place two sound files (`rhodes.wav`) in the same directory as the `index.html` file. The same file is used twice in this example, but you can use two different files if desired.

2. **Include p5.js Library:**
   - Add the following scripts in your `index.html` file:
   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/addons/p5.sound.min.js"></script>
   ```

3. **Run the Code:**
   - Open the `index.html` file in a browser to view the interactive sketch and hear the sound manipulation.

## How It Works

### 1. **Sound Loading and Setup**
   The `preload` function loads the sound files before the sketch starts. In the `setup` function, one of the sound files (`sound1`) is set to loop continuously and begins playing automatically.

### 2. **Visuals**
   The cube is drawn using p5.js' `WEBGL` renderer. It remains centered on the screen, and the `boxSize` changes based on the loop length. The color of the cube shifts from blue to red as the loop duration shortens.

### 3. **Interaction**
   - **Mouse Press:** Clicking on the cube toggles the loop mode. If the looper is activated, the secondary sound (`sound2`) starts playing with the loop length determined by the cube's position on the screen.
   - **Mouse Drag:** Dragging the cube along the x-axis changes the loop length and the cube's rotation speed. The loop length ranges from 1 millisecond to 750 milliseconds.
   - **Mouse Release:** When the mouse is released, the cube resets to the center, and the loop length returns to its default.

### 4. **Loop Parameters**
   The `toggleLooper` and `adjustLoopParameters` functions manage the sound manipulation. The loop length is dynamically adjusted based on the cube's position, and the `rotationSpeed` is adjusted accordingly to reflect these changes.

### 5. **Window Resizing**
   The sketch automatically resizes to fit the window when it is resized.

## Project Files

- `index.html`: The main file that loads p5.js and runs the sketch.
- `sketch.js`: The p5.js script that contains the interactive 3D sound looper code.
- `rhodes.wav`: The sound file used for looping. Ensure this file is in the same directory as the project.

## Requirements

- **Web Browser**: A modern browser with WebGL and JavaScript support.
- **Sound Files**: Two sound files, preferably in `.wav` format, are required for playback.

## Future Enhancements

- Add more sound effects or variations to enhance the interactivity.
- Allow for different types of user interactions, such as changing sound filters or effects based on cube rotation.
- Support for additional sound file formats.
  
