import { useEffect, useState } from "react";
import { IPersonalDetails } from "../../../Models/personalDetails.model";
import { } from './personalCard.css';


export default function PersonalCard() {
    const [details, setDetails] = useState<IPersonalDetails>();

    async function getData() {
        const json = sessionStorage.getItem("user");
        const res: IPersonalDetails = JSON.parse(json!);
        console.log(res);
        setDetails(res);

    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="card-container">
            <div className="card">
                <h1>Personal Details:</h1>
                <h3>Name: {details?.name}</h3>
                <div>Team: {details?.Team}</div>
                <div>Joined at: {details?.joinedAt}</div>
                <div>
                    <img src={details?.avatar} alt="avatar" />
                </div>
            </div>

        </div>
    )
}