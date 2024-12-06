import * as React from 'react';
import * as Icon from 'react-icons/fi';

import Container from '../../../../reusable/Container';
import Range from '../../../../reusable/Range';
import Input from '../../../../reusable/Input';
import Select from '../../../../reusable/Select';

const FiltersTab = () => (
  <Container.FlexCols className="gap-4">
    <span className="text-lg font-bold pb-4">Filters</span>
    <Container.FlexCols className="gap-2">
      <span className="block text-brand text-lg">Location</span>
      <Input.IconInput
        id="filters--location"
        containerClassName="!mb-0"
        placeholder="Downing Street 10, London"
        icon={<Icon.FiMapPin className="text-brand" size={20} />}
      />
    </Container.FlexCols>
    <Container.FlexCols className="gap-2">
      <span className="block text-brand text-lg">Price Range</span>
      <Range.Default
        label={`Min Price: 0 €`}
        id="filters--min-price"
        min={0}
        max={10_000_000}
        step={10_000}
        value={0}
      />
      <Range.Default
        label={`Max price: ${10_000_000} €`}
        id="filters--min-price"
        min={0}
        max={10_000_000}
        step={10_000}
        value={10_000_000}
      />
    </Container.FlexCols>
    <Container.FlexCols className="gap-2">
      <span className="block text-brand text-lg">Rooms</span>
      <Range.Default
        label={`Rooms: 0`}
        id="filters--rooms"
        min={0}
        max={20}
        step={1}
        value={0}
      />
    </Container.FlexCols>
    <Container.FlexCols className="gap-2">
      <span className="block text-brand text-lg">Type of building</span>
      <Select id="filters--building-type" label="Type of building">
        <option value="house">House</option>
        <option value="apartment">Apartment</option>
        <option value="mansion">Mansion</option>
        <option value="office">Office</option>
        <option value="warehouse">Warehouse</option>
      </Select>
    </Container.FlexCols>
  </Container.FlexCols>
);

export default FiltersTab;
