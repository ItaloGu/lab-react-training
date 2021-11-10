

function Greetings(prop){
    const changeIdiom = prop.lang;

    function SwitchLang(){
      switch(changeIdiom) {
        case "de":
          return "Hallo";
        case "en": 
          return "Hello";
        case "fr": 
          return "Bonjour";
        default:
          return "Oi";
  
      }
    }

    return(
        <div className='border border-dark m-1'>
            <p lang={prop.lang}>{SwitchLang()} {prop.children}</p>
        </div>
    )
}

export default Greetings