import React, { useState } from "react";

const CountryCodeDropdown = ({ onChange, value }) => {
  const countryCodes = [
    { code: "", name: "Select Country Code" },
    { code: "+1", name: "United States" },
    { code: "+44", name: "United Kingdom" },
    { code: "+91", name: "India" },
  ];
  return (
    <select
      className="mt-0 text-center p-0"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
        {countryCodes.map((country) => {
            <option key={country.code} value={country.code}>
            {country.name} {country.code && `(${country.code})`}
            </option>
        })}
    </select>
  );
};
export default CountryCodeDropdown

