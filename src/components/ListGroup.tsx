import {MouseEvent, useState} from 'react';

interface ListGroupProps {
  cities: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({cities, heading, onSelectItem}: ListGroupProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {cities.length === 0 && <p>No item found</p>}
      <ul className='list-group'>
        {cities.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
