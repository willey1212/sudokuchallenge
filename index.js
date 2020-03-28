const sudokuBoard = [
  ["1","3",".",".","7",".","7",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]

function validate(sudoku) {

    let items = new Set()
    let allItems = []

    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            const currentItem = sudoku[i][j]

            if (currentItem != '.') {
                items.add(currentItem + "row" + i)
                allItems.push(currentItem + "row" + i)

                items.add(currentItem + "column" + j)
                allItems.push(currentItem + "column" + j)

                items.add(currentItem + "row" + i / 3 + "column" + j / 3)
                allItems.push(currentItem + "row" + i / 3 + "column" + j / 3)

            }
        }
    }

    if(items.size == allItems.length){
    	return true
    } else {
    	return false
    }

}


console.log(validate(sudokuBoard))
