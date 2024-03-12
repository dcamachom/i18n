import React from "react";
import {IntlProvider,FormattedDate,IntlContext,FormattedNumber} from 'react-intl';

const Job = (props) => {

  const currentLocale = React.useContext(IntlContext).locale;
  const options={
    style: 'decimal',
    minimumFractionDigits: 2,
  };

  if (currentLocale === 'es-ES') {
    options.useGrouping = true;  // Utilizar separador de miles
    options.minimumFractionDigits = 2;  // Utilizar coma como separador decimal
  } else if (currentLocale === 'en-US') {
    options.useGrouping = true;  // Utilizar separador de miles
    options.minimumFractionDigits = 2;  // Utilizar punto como separador decimal
  }

  const formatSalary = (salary) => {
    const formattedSalary = new Intl.NumberFormat(currentLocale, options).format(salary);

    const pluralWord = currentLocale === 'es-ES' ? 'millón' : 'million';
    const pluralRules = new Intl.PluralRules(currentLocale);
    const pluralCategory = pluralRules.select(salary);
    const pluralValue = currentLocale === 'es-ES' ? 'millones' : 'millions';

    return `${formattedSalary} ${pluralCategory === 'one' ? pluralWord : pluralValue}`;
  };


  return (
    <tr>
      <th scope="row" >{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{formatSalary(props.offer.salary)}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
      <FormattedNumber
          value={props.offer.views} {...options}
        />
      </td>
    </tr>
  );
};

export default Job;
