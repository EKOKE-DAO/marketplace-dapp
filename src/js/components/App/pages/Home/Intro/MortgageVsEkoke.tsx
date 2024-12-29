import * as React from 'react';

import Container from '../../../../reusable/Container';
import Heading from '../../../../reusable/Heading';

const MortgageVsEkoke = () => (
  <Container.FlexCols className="items-center justify-center mx-auto gap-2 w-3/6 sm:w-full mb-4">
    <Heading.H3 className="text-center">
      <strong>EKOKE DAO</strong> Vs. Bank Mortgage
    </Heading.H3>
    <table className="block border border-collapse border-gray-300 bg-white sm:!text-xs">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Criteria/Method</th>
          <th className="border border-gray-300 px-4 py-2">EKOKE DAO</th>
          <th className="border border-gray-300 px-4 py-2">
            Traditional Mortgage
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Loan Principal</td>
          <td className="border border-gray-300 px-4 py-2">
            {(200_000).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {(200_000).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Formula</td>
          <td className="border border-gray-300 px-4 py-2">
            Simple Interest Loan (10%)
          </td>
          <td className="border border-gray-300 px-4 py-2">
            Compound Interest Loan (5%)
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">
            Total Loan Period (Years)
          </td>
          <td className="border border-gray-300 px-4 py-2">30</td>
          <td className="border border-gray-300 px-4 py-2">30</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Monthly Payment</td>
          <td className="border border-gray-300 px-4 py-2">
            {(611.11).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {(1073.64).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">
            Total Payment Over Loan Period
          </td>
          <td className="border border-gray-300 px-4 py-2">
            <strong>
              {(220_000.0).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </strong>
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {(386_511.57).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </td>
        </tr>
      </tbody>
    </table>
  </Container.FlexCols>
);

export default MortgageVsEkoke;
