import React, { useEffect, useState } from 'react';
import firebase from '../../firebase/firebase';
import { useHistory } from "react-router-dom";

const AdminPanel = () => {
    const history = useHistory()
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





        </section>

    );
}

export default AdminPanel;