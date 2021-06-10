window.onload = function () {
  const deleteButtons = document.querySelectorAll(
    "#album-tracklist table tbody tr td:last-of-type button"
  )

  for (let i = 0; i < deleteButtons.length; i++) {
    const button = deleteButtons[i]
    button.addEventListener("click", deleteRow)
  }
}

//function to delete a row of the tracklist table

function deleteRow() {
  const rowToDelete = document.querySelectorAll(
    "#album-tracklist table tbody tr"
  )

  const deleteButtons = document.querySelectorAll(
    "#album-tracklist table tbody tr td:last-of-type button"
  )

  for (let i = 0; i < rowToDelete.length; i++) {
    const tr = rowToDelete[i]
    for (let j = 0; j < deleteButtons.length; j++) {
      const button = deleteButtons[j]
      if (i === j) {
        tr.remove()
        break
      }
    }
  }
}
