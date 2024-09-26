# belly-button-challenge

# Belly Button Biodiversity Dashboard

## Features

- A dropdown menu to select test subject IDs.
- A bar chart displaying the top 10 OTUs found for the selected individual.
- A bubble chart visualizing OTUs across all samples.
- A metadata panel showing demographic information.
- Charts automatically update when a new sample is selected.

## Getting Started

### Prerequisites

- This is a static web application, so no special software is required, just a web browser.
- You can access the app via GitHub Pages: [Belly Button Biodiversity](https://github.com/hamiltonbrba/belly-button-challenge).

### Running Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/hamiltonbrba/belly-button-challenge.git
    ```

2. Navigate to the project directory:
    ```bash
    cd belly-button-challenge
    ```

3. Open `index.html` in your browser to run the app locally.

### Repository Structure

```bash
.
├── index.html          # Main HTML file
├── static
│   ├── js
│   │   └── app.js      # JavaScript for handling charts and data
└── README.md           # This readme file
```

## Code Sources

- The code for this project was written using a combination of custom JavaScript and external libraries such as **D3.js** and **Plotly.js**.
- The main script for data processing and chart creation is located in the `static/js/app.js` file.
- The dataset used for the visualizations is accessed from the URL: [Belly Button Biodiversity Data](https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json).

