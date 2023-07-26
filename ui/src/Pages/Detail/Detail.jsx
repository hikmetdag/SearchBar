import React from 'react';
import { useParams } from "react-router-dom";
import useFetch from '../../hook/useFetch';
import "./Detail.css";

const Detail = () => {
    const { id } = useParams();
    const { data } = useFetch(`http://localhost:5000/user${id}`);
    console.log(data);
    return (
        <div className='detailWarapper'>
            <img src={data.photo} width={100} height={100} />
            <div>{`${data.first_name} ${data.last_name}`}</div>
            <div>{data.email}</div>
            <div>{data.origin}</div>
        </div>
    );
};

export default Detail;
