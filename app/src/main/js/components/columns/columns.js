import React from 'react';
import PropTypes from 'prop-types';
import Column from './column';
import AddColumn from './column_add';
import { FEED } from '../../consts/types';

const Columns = (props) => {
  const { columns } = props;
  return (
    <div
      className="columns"
      id="columns"
    >
      {
        columns.map((column) => {
          if (column.type === FEED.RANTS.NAME) {
            return (
              <Column
                key={column.id}
                {...props}
                column={column}
                filters={column.filters}
                itemType={column.type}
              />
            );
          }
          return (
            <Column
              key={column.id}
              {...props}
              column={column}
              filters={column.filters}
              itemType={column.type}
            />
          );
        })
      }
      <AddColumn addColumn={props.addColumn} theme={props.theme} />
    </div>
  );
};

Columns.propTypes = {
  columns: PropTypes.array.isRequired,
  addColumn: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

export default Columns;
