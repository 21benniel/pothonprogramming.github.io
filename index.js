(() => {

  var html = {

    example_template:  document.getElementById("example-template"),
    example_container: document.getElementById("example-container")

  };

  fetch("data/examples.json").then(response => {

    return response.json();

  }).then(examples => {

    for (var index = 0; index < examples.length; index ++) {

      var example_data     = examples[index];
      var example_fragment = document.importNode(html.example_template.content, true);
      var example_element  = example_fragment.children[0];

      example_element.querySelector(".example-name").innerText = example_data.name;
      example_element.querySelector(".example-page-link").href = example_data.page;

      html.example_container.appendChild(example_element);

    }

  });

  function createExample() {



  }

})();