import React from 'react'
import Footer from '../Footer/footer'
import Header from '../Header/Header'
import ContactInfo from '../ContactInfo/ContactInfo'
import { useSelector } from 'react-redux';
import Message from './messages/Message';
import { useDispatch } from 'react-redux';

export default function Vlad() {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.data.userData)
    const docsList = useSelector((state) => state.docs.getTemplateExcelVlad)
    console.log(docsList);
    return (
        <div>
            <Header userData={userData}/>
            <ContactInfo userData={userData} />
            <div onClick={() => dispatch(logout())} className="logout">
                    <i className="fas fa-sign-out-alt" /> Выйти
            </div>
            <Message docsList={docsList}/>
            <Footer/>
        </div>
    )
}
