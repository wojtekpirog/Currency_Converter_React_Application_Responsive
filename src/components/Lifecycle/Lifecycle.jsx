export default class Lifecycle extends React.Component {
  //Konstruktor jest wywoływany w fazie montowania (mounting) #1
  constructor(props) {
    super(props);
    console.log("Wywołano konstruktor - mounting #1");
    this.state = {
      name: "Yayami",
      surname: "Omate",
      country: "Senegal"
    }
  }

  static getDerivedStateFromProps(props, state) {
    return null;
    console.log("Zmieniono stan na podstawie props - mounting #2, update #1");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true; //Zawsze odrysowywuj komponent przy wywołaniu funkcji setState();
    console.log("Odrysowano komponent przy wywołaniu funkcji `setState()` - update #2");
  }

  render() {
    console.log("Komponent został wyrenderowany, czyli pokazany użytkownikowi - mounting #3, update #3 (jeśli shouldComponentUpdate zwróci true)");
    //Komponent będzie renderowany w fazie `update` po aktualizacji, i to wielokrotnie
    return(
      <>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, mollitia?</p>
        <p>Lorem ipsum dolor sit amet.</p>      
      </>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate - update #4");
    return null;
  }

  //Mounting #4 - ComponentDidMount po załadowaniu drzewa DOM aplikacji
  componentDidMount() {
    console.log("Wykonano działania po wyrenderowaniu komponentu, np. pobrano dane z serwera");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate() - update #5");
  }
}