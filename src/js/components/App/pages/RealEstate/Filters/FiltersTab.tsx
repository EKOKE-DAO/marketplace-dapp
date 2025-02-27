import * as React from 'react';
import * as Icon from 'react-icons/md';

import Container from '../../../../reusable/Container';
import Input from '../../../../reusable/Input';
import { IFilters } from '../../RealEstate';

interface Props {
  filters: IFilters;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}

const FiltersTab = ({ filters, setFilters }: Props) => {
  const [debouncedCity, setDebouncedCity] = React.useState<string>(
    filters.city ?? '',
  );
  const [cityDebouncer, setCityDebouncer] = React.useState<NodeJS.Timeout>();
  const [debouncedCountry, setDebouncedCountry] = React.useState<string>(
    filters.country ?? '',
  );
  const [countryDebouncer, setCountryDebouncer] =
    React.useState<NodeJS.Timeout>();

  const onCityChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDebouncedCity(e.target.value);
  };

  const onCountryChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDebouncedCountry(e.target.value);
  };

  const resetFilters = () => {
    setFilters({});
    setDebouncedCity('');
    setDebouncedCountry('');
  };

  React.useEffect(() => {
    if (cityDebouncer) {
      clearTimeout(cityDebouncer);
    }
    setCityDebouncer(
      setTimeout(() => {
        setFilters((prevFilters) => ({
          ...prevFilters,
          city: debouncedCity.length > 0 ? debouncedCity : undefined,
        }));
      }, 1000),
    );
  }, [debouncedCity]);

  React.useEffect(() => {
    if (countryDebouncer) {
      clearTimeout(countryDebouncer);
    }
    setCountryDebouncer(
      setTimeout(() => {
        setFilters((prevFilters) => ({
          ...prevFilters,
          country: debouncedCountry.length > 0 ? debouncedCountry : undefined,
        }));
      }, 1000),
    );
  }, [debouncedCountry]);

  return (
    <Container.FlexCols className="gap-4">
      <Container.FlexRow className="justify-between">
        <Container.Container>
          <span className="text-lg font-bold pb-4">Filters</span>
        </Container.Container>
        <Container.Container>
          <span
            className="text-brand hover:underline hover:cursor-pointer"
            onClick={resetFilters}
          >
            <Icon.MdClear className="inline mr-2" size={24} /> Reset Filters
          </span>
        </Container.Container>
      </Container.FlexRow>
      <Container.FlexCols className="gap-2">
        <span className="block text-brand text-lg">City</span>
        <Input.IconInput
          id="filters--city"
          containerClassName="!mb-0"
          placeholder="London"
          icon={<Icon.MdLocationCity className="text-brand" size={20} />}
          value={debouncedCity}
          onChange={onCityChanged}
        />
      </Container.FlexCols>
      <Container.FlexCols className="gap-2">
        <span className="block text-brand text-lg">Country</span>
        <Input.IconInput
          id="filters--country"
          containerClassName="!mb-0"
          placeholder="United Kingdom"
          icon={<Icon.MdLocationPin className="text-brand" size={20} />}
          value={debouncedCountry}
          onChange={onCountryChanged}
        />
      </Container.FlexCols>
    </Container.FlexCols>
  );
};

export default FiltersTab;
