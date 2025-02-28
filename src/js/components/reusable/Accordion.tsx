import * as React from 'react';
import * as Icon from 'react-icons/fi';
import Container from './Container';

interface Props {
  className?: string;
  rowClassName?: string;
  children: React.ReactNode;
  title: React.ReactNode;
  onOpen?: () => void;
}

const Accordion = ({
  className,
  rowClassName,
  children,
  title,
  onOpen,
}: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    if (!isOpen && onOpen) {
      onOpen();
    }
  };

  return (
    <Container.FlexCols className={`${className}`}>
      <Container.FlexRow
        className={`${rowClassName} items-center justify-between cursor-pointer h-auto`}
        onClick={toggleAccordion}
      >
        <span className="accordion-title">{title}</span>
        {isOpen ? (
          <Icon.FiChevronUp
            className="text-brandGray hover:text-brandAlt"
            size={32}
          />
        ) : (
          <Icon.FiChevronDown
            className="text-brandGray hover:text-brandAlt"
            size={32}
          />
        )}
      </Container.FlexRow>
      <Container.Container
        className={`w-full overflow-hidden transition-[max-height] duration-500 ease-in ${
          isOpen ? `max-h-[50vh] !overflow-auto` : 'max-h-0'
        }`}
      >
        <Container.Container className="accordion-content">
          {children}
        </Container.Container>
      </Container.Container>
    </Container.FlexCols>
  );
};

export default Accordion;
