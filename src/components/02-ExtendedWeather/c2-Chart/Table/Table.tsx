import React from "react";
import './Table.css'
import {Button} from "@material-ui/core";

type TableWeatherType= {
    data: any
}

export const Table = (props: TableWeatherType) => {
    // @ts-ignore
    const dailyData = props.data.filter(reading => reading.date.includes("15:00"))
    return (
        <table>
            <thead>
            <tr>
                <th>
                    <Button>Date</Button>
                </th>
                <th>
                    <Button>Temperature</Button>
                </th>
            </tr>
            </thead>
            <tbody>
            {dailyData.map((data:any) => (
                <tr key={data.id}>
                    <td>{data.date}</td>
                    <td>{data.Temperature}℃</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};
