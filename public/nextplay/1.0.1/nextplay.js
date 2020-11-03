const nextplay = {

  config: {
    showContent: true,
    device: (window.innerWidth<768) ? 'mobile' : 'desktop',
  },

  init: () => {
    nextplay.buildButton();
    nextplay.openCSS();
    nextplay.buildContent();
    if(nextplay.config.device === 'desktop') {
      nextplay.openJS('http://192.168.0.12:3000/nextplay/1.0.1/qrcode.js');
      // nextplay.openJS('https://nextplay.link/nextplay/1.0.1/qrcode.js');      
    }
  },

  buildButton: () => {
    const div = document.createElement('div');
    div.innerHTML = "<div class='nextplay-btn'><button class='nextplay-btn-mobile' onClick='nextplay.showComponent()' /></div>";
    // set style
    div.style.color = 'red';
    // better to use CSS though - just set class
    div.setAttribute('class', 'myclass'); // and make sure myclass has some styles in css
    document.body.appendChild(div);
  },

  // Create new link Element 
  openCSS: () => {
    const link = document.createElement('link');  
    // set the attributes for link element 
    link.rel = 'stylesheet';  
    link.type = 'text/css'; 
    link.href = 'http://192.168.0.12:3000/nextplay/1.0.1/nextplay.css';  
    // link.href = 'https://nextplay.link/nextplay/1.0.1/nextplay.css';  

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

  callNowMessage: () => {
    alert('Este boton es de caracter ilustrativo, al hacer click tu visitante estará llamando a tu comercio.')
  },

  buildContent: () => {
    // alert('open NextPlay');
    const div = document.createElement('div');
    const whatsapp = nextplay_config.whatsapp;
    const telephone = nextplay_config.telephone;
    if (nextplay.config.device === 'desktop') {
      div.innerHTML = "<div id='nextplay-content' class='nextplay-content fade-in'> \
        <div class='nextplay-row'>Escanea desde tu móvil</div> \
        <div class='nextplay-row'><div id='qrcode' class='qrcode'></div></div> \
        <div class='nextplay-footer'><a href='https://nextplay.link'>NextPlay.Link</a></div> \
      </div>";      
    } else {
      div.innerHTML = "<div id='nextplay-content' class='nextplay-content fade-in'> \
        <div class='nextplay-row'>Contáctanos</div> \
        <div class='nextplay-row'> \
          <a href='https://wa.me/"+whatsapp+"'> \
            <button class='nextplay-btn-whatsapp'>Enviar Whatsapp</button> \
          </a> \
        </div> \
        <div class='nextplay-row'> \
          <a href='tel:"+telephone+"'> \
            <button class='nextplay-btn-call-now'>Llamar ahora</button> \
          </a> \
        </div> \
        <div class='nextplay-footer'><a href='https://nextplay.link'>NextPlay.Link</a></div> \
      </div>";
    }

    // set style
    // div.style.color = 'red';
    // better to use CSS though - just set class
    div.setAttribute('class', 'myclass'); // and make sure myclass has some styles in css
    document.body.appendChild(div);

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const np = urlParams.get('np');
    if (np === '1') nextplay.showComponent();
  },

  openJS: ( src ) => {
    const script = document.createElement( "script" );
    // script.text = 'alert("testing")';
    script.src = src;
    document.head.appendChild( script ).parentNode.removeChild( script );
  }
}


nextplay.init();