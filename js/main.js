const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    

      
      
    },

    {
      label:"week2 notes",
      url:"week2/index.html"
    },
    {
      label:"week3 notes",
      url:"week3/index.html"
    }
    ,
    {
      label:"week4 notes",
      url:"week4/index.html"
    }
    ,
    {
      label:"week5 notes",
      url:"week5/index.html"
    }
    ,
    {
      label:"week6 notes",
      url:"week6/index.html"
    }
    ,
    {
      label:"week7 notes",
      url:"week7/index.html"
    },
    {
      label:"week8 notes",
      url:"week8/index.html"
    }
    ,
    {
      label:"week9 notes",
      url:"week9/index.html"
    }
    ,
    {
      label:"week10 notes",
      url:"week10/index.html"
    }

  ]

  function loadindex(){
      const ol = document.querySelector("#linksList");

      links.forEach( link => {
          const li = document.createElement("li");
          const href = document.createElement("a");
          href.setAttribute("href", link.url);
          href.innerText = link.label;

          li.appendChild(href);
          ol.appendChild(li);
      })

  }



  const input = form.elements.searchInput;
input.addEventListener('focus', () => alert('focused'),
 false);