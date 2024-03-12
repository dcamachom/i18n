import React, { useState } from "react";
import Job from "./job";
import { FormattedMessage } from "react-intl";
import {IntlContext} from 'react-intl';

const JobsList = () => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      views: 1,
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      views:12502000,
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      views:23000000,
    },
  ]);

  const currentLocale = React.useContext(IntlContext).locale;

  const color={
    backgroundColor: currentLocale === 'es' ? 'lightblue' : 'darkblue',
    color: currentLocale === 'es' ? 'black' : 'white'
  }

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col" style={color}>#</th>
            <th scope="col " style={color}>
                <FormattedMessage id="Position"/>
            </th>
            <th scope="col" style={color}>
                <FormattedMessage id="Company"/>
            </th>
            <th scope="col" style={color}>
                <FormattedMessage id="Salary"/>
            </th>
            <th scope="col" style={color}>
                <FormattedMessage id="City"/>
            </th>
            <th scope="col" style={color}>
                <FormattedMessage id="Publication Date"/>
            </th>
            <th scope="col" style={color}>
                <FormattedMessage id="Views"/>
            </th>
          </tr>
        </thead>
        <tbody>
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
