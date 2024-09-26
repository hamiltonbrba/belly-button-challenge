// Function to build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let result = metadata.filter(obj => obj.id == sample)[0];

    // Select the panel with id of `#sample-metadata`
    let panel = d3.select("#sample-metadata");

    // Clear any existing metadata
    panel.html("");

    // Append key-value pairs from the metadata to the panel
    Object.entries(result).forEach(([key, value]) => {
      panel.append("h6").text(`${key}: ${value}`);
    });
  });
}

// Function to build both the bar and bubble charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    let samples = data.samples;

    // Filter the samples for the object with the desired sample number
    let result = samples.filter(obj => obj.id == sample)[0];

    let otuIds = result.otu_ids;
    let otuLabels = result.otu_labels;
    let sampleValues = result.sample_values;

    // Build the bar chart (Top 10 OTUs)
    let barData = [
      {
        x: sampleValues.slice(0, 10).reverse(),
        y: otuIds.slice(0, 10).map(id => `OTU ${id}`).reverse(),
        text: otuLabels.slice(0, 10).reverse(),
        type: "bar",
        orientation: "h"
      }
    ];

    let barLayout = {
      title: "Top 10 OTUs",
      margin: { t: 30, l: 150 },
      xaxis: {title: "Number of Bacteria"}
    };

    Plotly.newPlot("bar", barData, barLayout);

    // Build the bubble chart
    let bubbleData = [
      {
        x: otuIds,
        y: sampleValues,
        text: otuLabels,
        mode: "markers",
        marker: {
          size: sampleValues,
          color: otuIds,
          colorscale: "Earth"
        }
      }
    ];

    let bubbleLayout = {
      title: "OTU ID vs Sample Values",
      margin: { t: 30 },
      hovermode: "closest",
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Number of Bacteria"}
    };

    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  });
}

// Function to initialize the dashboard
function init() {
  // Grab a reference to the dropdown select element
  let selector = d3.select("#selDataset");

  // Load the JSON data
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    let sampleNames = data.names;

    // Populate the dropdown with sample IDs
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Build the initial plots with the first sample
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Function for event listener when a new sample is selected
function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
