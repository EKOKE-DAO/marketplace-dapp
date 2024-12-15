import * as React from 'react';

import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';

const MortgageVsEkoke = () => (
  <Container.Container className="hidden">
    <Heading.H2 className="text-center">
      Traditional Mortgage vs. <strong>EKOKE DAO</strong>
    </Heading.H2>
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
          <td className="border border-gray-300 px-4 py-2">Formula</td>
          <td className="border border-gray-300 px-4 py-2">
            Simple Interest Loan (10%)
          </td>
          <td className="border border-gray-300 px-4 py-2">
            Compound Interest Loan (5%)
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Loan Principal</td>
          <td className="border border-gray-300 px-4 py-2">
            {(300_000).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {(300_000).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">
            Annual Interest Rate
          </td>
          <td className="border border-gray-300 px-4 py-2">0.3%</td>
          <td className="border border-gray-300 px-4 py-2">5.00%</td>
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
            {(2_500).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {(3_723.12).toLocaleString('en-US', {
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
            {(1_200_000.0).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            {(1_340_323.29).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </td>
        </tr>
      </tbody>
    </table>
  </Container.Container>
);

export default MortgageVsEkoke;
