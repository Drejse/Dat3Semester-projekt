import { useEffect, useState } from "react";
import userFacade from "../Facades/UserFacade";
import apiFacade from "../Facades/apiFacade";


const GetArrangements = () => {

    const getUsername = () => {
        const token = apiFacade.getToken();
        if (token != null) {
          const payloadBase64 = apiFacade.getToken().split(".")[1];
          const decodedClaims = JSON.parse(window.atob(payloadBase64));
          const username = decodedClaims.username;
          return username;
        } else return "";
      };


    const [userName] = useState(getUsername)
    const [arrangements, setArrangements] = useState([])

    const test = (data) => {
        setArrangements(data.all)
    }
    
    useEffect(() => {
        userFacade.getArrangements(userName, test)
    }, [])
    
  


    
    
    /*
{arrangements.map((arrangement, index) => (
                    <tr>
                        <td>{arrangement.id}</td>
                        <td>{arrangement.movieId}</td>
                        <td>{arrangement.fromDate.year}, {arrangement.fromDate.month}, {arrangement.fromDate.day}</td>
                        <td>{arrangement.toDate.year}, {arrangement.toDate.month}, {arrangement.toDate.day}</td>
                        <td>{arrangement.price}</td>
                        <td>{arrangement.status}</td>
                    </tr>
                ))}
    */
    return (
        
     <>
        {arrangements.map((arrangement) => {
            const boolValue = arrangement.status ? "true" : "false";
            return (
                <tr>
                <td>{arrangement.id}</td>
                <td>{arrangement.movieId}</td>
                <td>{arrangement.fromDate.day}, {arrangement.fromDate.month}, {arrangement.fromDate.year}</td>
                <td>{arrangement.toDate.day}, {arrangement.toDate.month}, {arrangement.toDate.year} </td>
                <td>{arrangement.price}</td>
                <td>{boolValue}</td>
                </tr>  
            )})}
    </>
    )

}
export default GetArrangements;