class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) { 
        
        let rowMap = new Map();
        let colMap = new Map();
        let gridMap = new Map();

        for(let rowIdx=0; rowIdx<board.length; rowIdx++){
           let row = board[rowIdx];
                for(let colIdx = 0; colIdx<row.length;colIdx++){
                  if(row[colIdx] === '.') continue;
                  if(!colMap.has(colIdx)){
                    colMap.set(colIdx, new Set());
                  }
                const currentColSet = colMap.get(colIdx)
                if(currentColSet.has(row[colIdx])) return false;
                currentColSet.add(row[colIdx]);   

                 if(!rowMap.has(rowIdx)){
                    rowMap.set(rowIdx, new Set());
                 }
                 const currentRowSet = rowMap.get(rowIdx);
                 if(currentRowSet.has(row[colIdx]))return false;
                 currentRowSet.add(row[colIdx]);  

                 const gridRow = Math.floor(rowIdx/3);
                 const gridCol = Math.floor(colIdx/3);
                 const gridKey = `${gridRow}${gridCol}`

                 if(!gridMap.has(gridKey)){
                    gridMap.set(gridKey, new Set());
                 }
                
                 const currGridSet = gridMap.get(gridKey);
                 if(currGridSet.has(row[colIdx])) return false;
                 currGridSet.add(row[colIdx]);
                }

        }

        return true;

    }
}
