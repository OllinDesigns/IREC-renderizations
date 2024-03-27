document.addEventListener("DOMContentLoaded", function () {
    var primaryDropdown = document.getElementById("type");
    var secondaryDropdown = document.getElementById("property");
    var iframe = document.querySelector("iframe");
    var downloadButton = document.querySelector('[role="button"]');

    var structure = {
      Experimental: {
        // "Experimental Property 1": {
        //   iframe: "visualizations/experimental/example1.html",
        //   csv: "data/experimental/data-example.csv",
        // },
        // "Experimental Property 1": {
        //   iframe: "https://ollindesigns.github.io/IREC-renderizations/visualizations/experimental/example1.html",
        //   csv: "https://github.com/OllinDesigns/IREC-renderizations/blob/main/data/experimental/data-example.csv",
        // },
        // "Experimental Property 1": {
        //   iframe: "https://ollindesigns.github.io/IREC-renderizations/visualizations/experimental/example1.html",
        //   csv: "https://ollindesigns.github.io/IREC-renderizations/data/experimental/data-example.csv",
        // },
        // "Experimental Property 1: 'Lattice Parameter'"
        "Experimental Property 1": {
          iframe: "visualizations/experimental/1_Exp_Lattice.parameter.html",
          csv: "data/experimental/1_Exp_LatticeParameter.csv",
        },
        // "Experimental Property 2: 'Peak wavenumber at ≈640 cm-1'":
        "Experimental Property 2": {
          iframe: "visualizations/experimental/2_Exp_WaveNumberImax.html",
          csv: "data/experimental/2_WavenumberImax.csv",
        },
        // "Experimental Property 3: 'Absorption at 4.4 eV'"
        "Experimental Property 3": {
          iframe:
            "visualizations/experimental/3_Exp_Absorption4.4eV.html",
          csv: "data/experimental/3_Exp_Absorption4.4eV.csv",
        },
        // former proposal
        // "Experimental Property 4": {
        //   iframe:
        //     "https://foobar.github.io/assets/visualizations/experimental/4.html",
        //   csv: "https://foobar.github.io/assets/data/experimental/4.csv",
        // },
        // "Experimental Property 4: 'Surface Exchange Coefficient'"
        "Experimental Property 4": {
          iframe:
            "visualizations/experimental/4_Exp_SurfaceExchangeCoefficient.html",
          csv: "data/experimental/4_Exp_SurfaceExchangeCoefficient.csv",
        },
        // "Experimental Property 5: 'Oxygen Diffusion Coefficient'"
        "Experimental Property 5": {
          iframe:
            "visualizations/experimental/5_Exp_OxygenDiffusionCoefficient.html",
          csv: "data/experimental/5_Exp_OxygenDiffusionCoefficient.csv",
        },
        // "Experimental Property 6: 'Activation Energy'"
        "Experimental Property 6": {
          iframe:
            "visualizations/experimental/6_Exp_ActivationEnergy.html",
          csv: "data/experimental/6_Exp_ActivationEnergy.csv",
        },
        // "Experimental Property 7: 'Preexponential Factor'"
        "Experimental Property 7": {
          iframe:
            "visualizations/experimental/7_Exp_PreexponentialFactor.html",
          csv: "data/experimental/7_Exp_PreexponentialFactor.csv",
        },
        // "Experimental Property 8: 'Area Specific Resistance at 700ºC'"
        "Experimental Property 8": {
          iframe:
            "visualizations/experimental/8_Exp_AreaSpecificResistance700.html",
          csv: "data/experimental/8_Exp_AreaSpecificResistance700.csv",
        },
      },
      "Machine Learning Model": {
        // "Model Property 1": {
        //   iframe:
        //     "https://foobar.github.io/assets/visualizations/model/1.html",
        //   csv: "https://foobar.github.io/assets/data/model/1.csv",
        // },
        "Model Property 1: 'Surface Exchange Coefficient'": {
          iframe:
            "visualizations/model/9_MLM_SurfaceExchangeCoefficient.html",
          csv: "data/model/9_MLM_SurfaceExchangeCoefficient.csv",
        },
        "Model Property 2: 'Oxygen Diffusion Coefficient'": {
          iframe:
            "visualizations/model/10_MLM_OxygenDiffusionCoefficient.html",
          csv: "data/model/10_MLM_OxygenDiffusionCoefficient.csv",
        },
        "Model Property 3: 'Activation Energy'": {
          iframe:
            "visualizations/model/11_MLM_ActivationEnergy.html",
          csv: "data/model/11_MLM_ActivationEnergy.csv",
        },
        "Model Property 4: 'Preexponential Factor'": {
          iframe:
            "visualizations/model/12_MLM_PreexponentialFactor.html",
          csv: "data/model/12_MLM_PreexponentialFactor.csv",
        },
        "Model Property 5: 'Area Specific Resistance at 600ºC'": {
          iframe:
            "visualizations/model/13_MLM_AreaSpecificResistance600.html",
          csv: "data/model/13_MLM_AreaSpecificResistance600.csv",
        },
        "Model Property 6: 'Area Specific Resistance at 700ºC'": {
          iframe:
            "visualizations/model/14_MLM_AreaSpecificResistance700.html",
          csv: "data/model/14_MLM_AreaSpecificResistance700.csv",
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