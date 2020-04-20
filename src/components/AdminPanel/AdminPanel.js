import React, { useEffect, useState } from 'react';
import firebase from '../../firebase/firebase';
import { useHistory } from "react-router-dom";

const AdminPanel = () => {
    const history = useHistory()

    if (localStorage.getItem("savedName") != "admin@wp.pl") {
        history.push("/")
    }
    const [users, setUsers] = useState([]);
    const [organizations, setOrganizations] = useState([]);

    const toHomePage = () => {
        history.push("/")
    }
    useEffect(() => {
        firebase.firestore().collection('users').get()
            .then(snapshot => setUsers(snapshot.docs))
    }, [])
    const getUsers = () => {
        firebase.firestore().collection('users').get()
            .then(snapshot => setUsers(snapshot.docs))
    }
    const deleteUser = (event) => {
        firebase.firestore().collection('users').doc(`${event}`).delete()
            .then(function () {
                console.log("Użytkownik usunięty")
                getUsers();
            })
            .catch(function (error) {
                console.error("Błąd usuwania");
            });
    }

    useEffect(() => {
        firebase.firestore().collection('organizations').get()
            .then(snapshot => setOrganizations(snapshot.docs))
    }, [])
    const getOrganizations = () => {
        firebase.firestore().collection('organizations').get()
            .then(snapshot => setOrganizations(snapshot.docs))
    }
    const deleteOrganizations = (event) => {

        firebase.firestore().collection('organizations').doc(`${event}`).delete()
            .then(function () {
                console.log("Organizacja usunięta")
                getOrganizations();
            })
            .catch(function (error) {
                console.error("Błąd usuwania ");
            });
    }
    const [organizationType, setOrganizationType] = useState('');

    const catchSelectValue = () => {
        const selectedOptions = document.querySelectorAll('.selectOptions');
        selectedOptions.forEach((element) => {
            if (element.selected === true) {
                setOrganizationType(element.value) // set organization trzeba wywywalić
            }
        });
    }
    const [organizationName, setOrganizationName] = useState('');
    const [organizationMission, setOrganizationMission] = useState('');
    const [organizationHow, setOrganizationHow] = useState('');
    const addOrganizationForm = document.querySelector('#addOrganizationForm');

    const addOrganization = (event) => {
        event.preventDefault();

        firebase.firestore().collection('organizations').add({
            "type": organizationType,
            "name": organizationName,
            "mission": organizationMission,
            "how": organizationHow

        }).then(function () {
            console.log(`Organizacja została dodana`);
            getOrganizations();
            addOrganizationForm.reset();
        })
            .catch(function (error) {
                console.log(`Problem z dodaniem organizacji, spróbuj później`);
            });
    }
    const [formMessages, setFormMessages] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('formmessage').get()
            .then(snapshot => setFormMessages(snapshot.docs))
    }, [])
    const getFormMessages = () => {
        firebase.firestore().collection('formmessage').get()
            .then(snapshot => setFormMessages(snapshot.docs))
    }
    const deleteFormMessage = (event) => {
        firebase.firestore().collection('formmessage').doc(`${event}`).delete()
            .then(function () {
                console.log("Wiadomość usunięta")
                getFormMessages();
            })
            .catch(function (error) {
                console.error("Błąd usuwania ");
            });
    }

    const [helpform, setHelpForm] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('helpform').get()
            .then(snapshot => setHelpForm(snapshot.docs))
    }, [])
    const getHelpForm = () => {
        firebase.firestore().collection('helpform').get()
            .then(snapshot => setHelpForm(snapshot.docs))
    }
    const deleteHelpForm = (event) => {
        firebase.firestore().collection('helpform').doc(`${event}`).delete()
            .then(function () {
                console.log("Formularz usunięty")
                getHelpForm();
            })
            .catch(function (error) {
                console.error("Błąd usuwania ");
            });
    }










    return (
        <section className="adminPanelContainer">
            <h1>Panel administratora</h1>
            <button className="toHomePageButton" onClick={toHomePage}>Home</button>
            <div className="userListContainer">
                <p>Zarejestrowani użytkownicy</p>
                <ul>{users.map(element =>
                    <li key={element.id}>{element.data().userEmail}<button onClick={() => deleteUser(element.id)}>Usuń</button></li>)}
                </ul>
            </div>
            <div className="organizationsListContainer">
                <p>Współpracujące organizacje</p>
                <div className="addOrganizationContainer">
                    <p>Dodaj organizacje</p>
                    <form onSubmit={addOrganization} id="addOrganizationForm">
                        <select onChange={catchSelectValue} >
                            <option value="-" className="selectOptions" >-wybierz-</option>
                            <option value="Fundacja" className="selectOptions" >Fundacja</option>
                            <option value="Organizacja" className="selectOptions" >Organizacja</option>
                            <option value="Zbiorka" className="selectOptions" >Zbiórka</option>
                        </select>
                        <input placeholder="Nazwa organizacji..." onChange={event => setOrganizationName(event.target.value)} />
                        <input placeholder="Misja..." onChange={event => setOrganizationMission(event.target.value)} />
                        <input placeholder="Sposób pomocy..." onChange={event => setOrganizationHow(event.target.value)} />
                        <button>Dodaj</button>
                    </form>
                </div>
                <p>Aktualnie współpracujące</p>
                <ul>{organizations.map(element =>
                    <li key={element.id}>Typ:{element.data().type}<br />  Nazwa:{element.data().name}<br /> Misja: {element.data().mission}<button onClick={() => deleteOrganizations(element.id)}>Usuń</button></li>)}
                </ul>
            </div>
            <div className="formMessageContainer">
                <p>Wiadomości z sekcji kontaktowej</p>
                <ul>{formMessages.map(element =>
                    <li key={element.id}>Imię: {element.data().name}<br /> Email: {element.data().email} <br /> Wiadomość: {element.data().message}<button onClick={() => deleteFormMessage(element.id)}>Usuń</button></li>)}
                </ul>
            </div>
            <div className="helpFormContainer">
                <p>Przesłane formularze</p>
                <ul>{helpform.map(element =>
                    <li key={element.id}>
                        Login pomagającego: {element.data().userLogin}<br />
                        Miasto: {element.data().userCity} <br />
                        Kod pocztowy: {element.data().userPostalCode}<br />
                        Ulica: {element.data().userStreet}<br />
                        Numer telefonu: {element.data().userPhoneNumber} <br />
                        Data odebrania worków: {element.data().pickUpDate}<br />
                        Godzina odebrania worków: {element.data().pickUpHour} <br />
                        Uwagi dla kuriera: {element.data().pickUpComment} <br />
                        Miasto do którego wyślemy worki: {element.data().localizationCity}<br />
                        Liczba worków: {element.data().numberOfBags} <br />
                        Pomoc trafi do: {element.data().peopleToHelp}<br />
                        Typ: {element.data().typeOfDonation} <br />

                        <button onClick={() => deleteHelpForm(element.id)}>Usuń</button></li>)}
                </ul>
            </div>





        </section>

    );
}

export default AdminPanel;