import React, { useEffect, useState } from "react";
import decoration from '../assets/Decoration.svg';

const HomeWeHelp = () => {

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(3);

    // const [fundationList, setFundationList] = useState([]);
    // const [organizationList, setOrganizationList] = useState([]);
    // const [collectionList, setCollectionList] = useState([]);

    const [listToPagination, setListToPagination] = useState([]);

    // // json-server --watch database.json
    useEffect(() => {
        fetch("http://localhost:3000/database")
            .then((response) => response.json())
            .then((response) => setPosts(response))

    }, [])

    const searchbyFundation = () => {
        const filtered = posts.filter(function (element, index, arr) {
            return element.type === "Fundacja"
        })
        // setCollectionList([]);
        // setOrganizationList([]);
        // setFundationList(filtered);
        setListToPagination(filtered);
        console.log(filtered)


    }
    const searchbyOrganization = () => {
        const filtered2 = posts.filter(function (element, index, arr) {
            return element.type === "Organizacja"
        })
        // setCollectionList([]);
        // setFundationList([]);
        // setOrganizationList(filtered);
        setListToPagination(filtered2);
        console.log(filtered2)

    }
    const searchbyCollection = () => {
        const filtered3 = posts.filter(function (element, index, arr) {
            return element.type === "Zbiorka"
        })
        // setOrganizationList([]);
        // setFundationList([]);
        // setCollectionList(filtered);
        setListToPagination(filtered3);
        console.log(filtered3)

    }


    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = listToPagination.slice(indexOfFirstPost, indexOfLastPost)

    const pageNumbers = [];
    const totalPosts = listToPagination.length;
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber) => { setCurrentPage(pageNumber) }


    return (
        <>
            <section className="weHelpContainer" id="idWeHelp">
                <p>Komu pomagamy?</p>
                <img src={decoration} />
                <div className="buttonsContainer">
                    <button onClick={searchbyFundation}>Fundacjom</button>
                    <button onClick={searchbyOrganization}>Organizacjom pozarządowym</button>
                    <button onClick={searchbyCollection}>Lokalnym zbiórkom</button>
                </div>
                <p>Wybierz którą listę chcesz zobaczyć</p>
                <ul>{currentPosts.map(element => <li key={element.index}>"{element.name}" <br />Misja: {element.mission}<br /> Sposoby pomocy: {element.how}</li>)}</ul>
                <ul className="paginationContainer">{pageNumbers.map(number => <li key={number} onClick={() => paginate(number)} >{number}</li>)}</ul>
            </section>
        </>
    );
}

export default HomeWeHelp;
