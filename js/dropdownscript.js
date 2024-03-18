document.addEventListener("DOMContentLoaded", function () {
    var primaryDropdown = document.getElementById("type");
    var secondaryDropdown = document.getElementById("property");
    var iframe = document.querySelector("iframe");
    var downloadButton = document.querySelector('[role="button"]');

    var structure = {
      Experimental: {
        // "Experimental Property 1": {
        //   iframe: "visualisations/experimental/example1.html",
        //   csv: "data/experimental/data-example.csv",
        // },
        "Experimental Property 1": {
          iframe: "https://ollindesigns.github.io/IREC-renderizations/visualisations/experimental/example1.html",
          csv: "https://github.com/OllinDesigns/IREC-renderizations/blob/main/data/experimental/data-example.csv",
        },
        "Experimental Property 2": {
          iframe: "visualisations/experimental/example2.html",
          csv: "data/experimental/data-example.csv",
        },
        "Experimental Property 3": {
          iframe:
            "visualisations/experimental/example3.html",
          csv: "data/experimental/data-example2.csv",
        },
        "Experimental Property 4": {
          iframe:
            "https://foobar.github.io/assets/visualizations/experimental/4.html",
          csv: "https://foobar.github.io/assets/data/experimental/4.csv",
        },
        "Experimental Property 5": {
          iframe:
            "https://foobar.github.io/assets/visualizations/experimental/5.html",
          csv: "https://foobar.github.io/assets/data/experimental/5.csv",
        },
        "Experimental Property 6": {
          iframe:
            "https://foobar.github.io/assets/visualizations/experimental/6.html",
          csv: "https://foobar.github.io/assets/data/experimental/6.csv",
        },
        "Experimental Property 7": {
          iframe:
            "https://foobar.github.io/assets/visualizations/experimental/7.html",
          csv: "https://foobar.github.io/assets/data/experimental/7.csv",
        },
      },
      "Machine learning model": {
        "Model Property 1": {
          iframe:
            "https://foobar.github.io/assets/visualizations/model/1.html",
          csv: "https://foobar.github.io/assets/data/model/1.csv",
        },
        "Model Property 2": {
          iframe:
            "https://foobar.github.io/assets/visualizations/model/2.html",
          csv: "https://foobar.github.io/assets/data/model/2.csv",
        },
        "Model Property 3": {
          iframe:
            "https://foobar.github.io/assets/visualizations/model/3.html",
          csv: "https://foobar.github.io/assets/data/model/3.csv",
        },
        "Model Property 4": {
          iframe:
            "https://foobar.github.io/assets/visualizations/model/4.html",
          csv: "https://foobar.github.io/assets/data/model/4.csv",
        },
        "Model Property 5": {
          iframe:
            "https://foobar.github.io/assets/visualizations/model/5.html",
          csv: "https://foobar.github.io/assets/data/model/5.csv",
        },
      },
    };

    var updateIframeAndDownloadButton = function () {
      iframe.setAttribute(
        "src",
        structure[primaryDropdown.value][secondaryDropdown.value]["iframe"]
      );
      downloadButton.setAttribute(
        "href",
        structure[primaryDropdown.value][secondaryDropdown.value]["csv"]
      );
    };

    primaryDropdown.addEventListener("change", function () {
      var secondaryDropdownContent = "";

      Object.keys(structure[this.value]).forEach(function (key) {
        secondaryDropdownContent += "<option>" + key + "</option>";
      });

      secondaryDropdown.innerHTML = secondaryDropdownContent;

      updateIframeAndDownloadButton();
    });

    secondaryDropdown.addEventListener("change", function () {
      updateIframeAndDownloadButton();
    });
  });