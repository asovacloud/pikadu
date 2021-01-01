import React from 'react'

function Editor() {
  return (
    <form>
      <label htmlFor="title-input">Title</label>
      <input type="text" name="title" id="title-input" />

      <label htmlFor="title-content">Content</label>
      <textarea name="content" id="title-content" cols="30" rows="10" />

      <label htmlFor="title-tags">Tags</label>
      <input type="text" name="tags" id="title-tags" />

      <button type="submit">Submit</button>
    </form>
  )
}

export {Editor}
