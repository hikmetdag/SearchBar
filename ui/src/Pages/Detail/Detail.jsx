import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
import "./detail.css";

const Detail = () => {
    const { id } = useParams();
    const { data, error, loading } = useFetch(`http://localhost:5000/user${id}`);
    //In case of fetching issues, users will see this error message.
    if (error) return <Error />;
    //Loading message.
    if (loading) return <Loading />;
    return (
        <div className="detailWrapper">
            <img src={data.photo} width={100} height={100} alt={`${data.first_name}`} />
            <div>{`${data.first_name} ${data.last_name}`}</div>
            <div>{data.email}</div>
            <div>{data.origin}</div>
        </div>
    );
};
export default Detail;
