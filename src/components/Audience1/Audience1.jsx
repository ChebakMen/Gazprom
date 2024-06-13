import Header from "../Header/Header";
import CalendarG from "../calendar/Calendar";
import Footer from "../Footer/Footer";
import '../../styles/Audience1.css'


export default function Audience1 (){
    return(
        <div className="Audience__container">
            <Header />
            {/* <h1 className="Audience__name">Видеостудия дополненной реальности</h1> */}
            <div className="Audience__calendar">
                <CalendarG />
            </div>
            <Footer />
        </div>
    )
}