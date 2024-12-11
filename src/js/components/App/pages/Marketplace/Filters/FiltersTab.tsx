import * as React from 'react';
import * as Icon from 'react-icons/md';

import Container from '../../../../reusable/Container';
import Range from '../../../../reusable/Range';
import Input from '../../../../reusable/Input';
import { IFilters } from '../../Marketplace';

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

  const [debouncedMinPrice, setDebouncedMinPrice] = React.useState(
    filters.minPrice,
  );
  const [debouncedMaxPrice, setDebouncedMaxPrice] = React.useState(
    filters.maxPrice,
  );
  const [minPriceDebouncer, setMinPriceDebouncer] =
    React.useState<NodeJS.Timeout>();
  const [maxPriceDebouncer, setMaxPriceDebouncer] =
    React.useState<NodeJS.Timeout>();

  const onMinPriceChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDebouncedMinPrice(parseInt(e.target.value));
  };

  const onMaxPriceChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDebouncedMaxPrice(parseInt(e.target.value));
  };

  const onCityChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDebouncedCity(e.target.value);
  };

  const onCountryChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDebouncedCountry(e.target.value);
  };

  const resetFilters = () => {
    setFilters({ minPrice: 0, maxPrice: 10_000_000 });
    setDebouncedCity('');
    setDebouncedCountry('');
    setDebouncedMinPrice(0);
    setDebouncedMaxPrice(10_000_000);
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

  React.useEffect(() => {
    if (minPriceDebouncer) {
      clearTimeout(minPriceDebouncer);
    }
    setMinPriceDebouncer(
      setTimeout(() => {
        setFilters((prevFilters) => ({
          ...prevFilters,
          minPrice: debouncedMinPrice,
        }));
      }, 1000),
    );
  }, [debouncedMinPrice]);

  React.useEffect(() => {
    if (maxPriceDebouncer) {
      clearTimeout(maxPriceDebouncer);
    }
    setMaxPriceDebouncer(
      setTimeout(() => {
        setFilters((prevFilters) => ({
          ...prevFilters,
          maxPrice: debouncedMaxPrice,
        }));
      }, 1000),
    );
  }, [debouncedMaxPrice]);

  React.useEffect(() => {
    return () => {
      if (minPriceDebouncer) {
        clearTimeout(minPriceDebouncer);
      }
      if (maxPriceDebouncer) {
        clearTimeout(maxPriceDebouncer);
      }
    };
  }, []);

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
      <Container.FlexCols className="gap-2">
        <span className="block text-brand text-lg">Price Range</span>
        <Range.Default
          label={`Min Price: ${debouncedMinPrice} $`}
          id="filters--min-price"
          min={0}
          max={debouncedMaxPrice}
          step={10_000}
          value={debouncedMinPrice}
          onChange={onMinPriceChanged}
        />
        <Range.Default
          label={`Max price: ${debouncedMaxPrice} $`}
          id="filters--min-price"
          min={debouncedMinPrice}
          max={10_000_000}
          step={10_000}
          value={debouncedMaxPrice}
          onChange={onMaxPriceChanged}
        />
      </Container.FlexCols>
    </Container.FlexCols>
  );
};

export default FiltersTab;
