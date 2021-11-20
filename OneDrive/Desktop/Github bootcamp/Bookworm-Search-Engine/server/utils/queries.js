import gql from 'graphql-tag';

export const GET_ME = gql`
   {
    me {
      _id
      username
      email
      saveBooks
      title
      authors
      bookId
      description
      image
      link
      }
    }
  }
`;

