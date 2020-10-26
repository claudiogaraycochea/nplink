const nextplay = {
  config: {
    showContent: true,
  },

  init: () => {
    nextplay.buildButton();
    nextplay.openCSS();
    nextplay.buildContent();
  },

  buildButton: () => {
    // alert('open NextPlay');
    var div = document.createElement('div');
    div.innerHTML = "<div class='nextplay-btn'><button class='nextplay-btn-mobile' onClick='nextplay.showComponent()' /></div>";
    // set style
    div.style.color = 'red';
    // better to use CSS though - just set class
    div.setAttribute('class', 'myclass'); // and make sure myclass has some styles in css
    document.body.appendChild(div);
  },

  // Create new link Element 
  openCSS: () => {
    var link = document.createElement('link');  
    
    // set the attributes for link element 
    link.rel = 'stylesheet';  

    link.type = 'text/css'; 

    link.href = 'http://192.168.0.12:3000/nextplay/1.0.1/nextplay.css';  

    // Get HTML head element to append  
    // link element to it  
    document.getElementsByTagName('HEAD')[0].appendChild(link);
  },

  showComponent: () => {
    if (nextplay.config.showContent) {
      nextplay.config.showContent = false;
      document.getElementById('nextplay-content').style.display = 'block';
    } else {
      nextplay.config.showContent = true;
      document.getElementById('nextplay-content').style.display = 'none';
    }
  },

  buildContent: () => {
    // alert('open NextPlay');
    var div = document.createElement('div');
    div.innerHTML = "<div id='nextplay-content' class='nextplay-content fade-in'> \
      <div class='nextplay-row'>Llamanos desde tu movil</div> \
      <div class='nextplay-row'><button class='nextplay-btn-whatsapp'>Enviar Whatsapp</button></div> \
      <div class='nextplay-row'><button class='nextplay-btn-call-now' onClick='nextplay.showComponent()'>Llamar ahora</button></div> \
    </div>";
    // set style
    // div.style.color = 'red';
    // better to use CSS though - just set class
    div.setAttribute('class', 'myclass'); // and make sure myclass has some styles in css
    document.body.appendChild(div);
  },
}


nextplay.init();