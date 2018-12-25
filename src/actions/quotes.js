// TODO: stop using redux and go back to holding state in App.js
export const addQuote = quote => {
  return {
    type: 'ADD_QUOTE',
    quote
  }
}

export const removeQuote = (id) => {
  return {
    type: 'REMOVE_QUOTE',
    quoteId: id
  }
}

export const upvoteQuote = (id) => {
  return {
    type: 'UPVOTE_QUOTE',
    quoteId: id
  }
}

export const downvoteQuote = (id) => {
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId: id
  }
}
