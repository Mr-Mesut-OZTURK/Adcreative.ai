import { useQuery, gql } from '@apollo/client';
import { AutocompleteComponent } from '@/components'
import { useEffect, useState } from 'react';
import { Container, Link, Typography } from '@mui/material';

const GET_CHARACTERS = gql`
  query Characters($page: Int, $filter: FilterCharacter) {
  characters(page: $page, filter: $filter) {
    info {
      count
      next
      pages
      prev
    }
    results {
        id
      name
      image
      episode {
        id
      }
    }
  }
}
`;

export const HomePage = () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [variables, setVariables] = useState({
    "page": null,
    "filter": {
      "gender": null,
      "name": null,
      "species": null,
      "status": null,
      "type": null
    }
  })
  const { loading, error, data, refetch } = useQuery(GET_CHARACTERS, { variables });

  useEffect(() => {
    refetch()
  }, [refetch, variables])


  // console.log({ loading, error, data });
  // if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className='p-5'>


      <Container maxWidth="xl" >
        <Typography
          sx={{
            textDecoration: "none",
            mb: 2,
          }}
        >
          Proje linkedin
          <Link
            href="https://www.linkedin.com/jobs/view/3789638519/"
            sx={{
              textDecoration: "none",
              color: 'blue',
              ml: '3px'
            }}
          >
            link
          </Link>
        </Typography>

        <AutocompleteComponent
          data={data?.characters?.results}
          setVariables={setVariables}
          loading={loading}
        />
      </Container>
    </div>
  )
}
