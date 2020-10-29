import React from 'react';

const Grid = ( { rowNum = 3, colNum = 24 } ) => {

    return (
        <div className="grid">
            { [...new Array(rowNum)].map((row, rowIdx) => (
                <div key={`row_${rowIdx}`} className="row">
                    {[...new Array(colNum)].map((col, colIdx) => (
                        <div key={`col_${colIdx}`} className="col"></div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Grid;