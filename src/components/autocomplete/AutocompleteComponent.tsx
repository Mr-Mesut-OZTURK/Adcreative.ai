/* eslint-disable @typescript-eslint/no-explicit-any */ // for any type errors
import * as React from 'react';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { TextField, Autocomplete, Grid, Typography, Checkbox, CircularProgress, Stack, Box, InputAdornment } from '@mui/material';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';




interface IDataItem {
  id: string,
  name: string,
  image: string,
  episode: [any]
}

interface IProps {
  data: any,
  setVariables: (e: any) => any,
  loading: boolean
}


const icon = <CheckBoxOutlineBlankIcon fontSize="small" sx={{ borderRadius: 10 }} />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const AutocompleteComponent = ({ data, setVariables, loading }: IProps) => {


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedOptions, setSelectedOptions] = React.useState<IDataItem[]>([]);
  const [inputValue, setInputValue] = React.useState('');


  React.useEffect(() => {
    setVariables((prevState: any) => ({
      ...prevState,
      filter: {
        ...prevState.filter,
        name: inputValue
      }
    }))
  }, [inputValue, setVariables])




  return (
    <Autocomplete
      multiple
      options={data ?? []}
      getOptionLabel={(option: IDataItem) => option.name}
      isOptionEqualToValue={(option: IDataItem, value: IDataItem) => option.name === value.name}
      disableCloseOnSelect

      onChange={(_, newValue: IDataItem[]) => {
        console.log(newValue);
        setSelectedOptions(newValue);
      }}

      inputValue={inputValue}
      onInputChange={(_, newInputValue) => {
        setInputValue(newInputValue);
      }}

      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Fins your charecter(s)"
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position='end'>
                {loading ? <CircularProgress /> : <CheckRoundedIcon color='success' />}
              </InputAdornment>
            )
          }}

        />
      )}


      renderTags={(values) => {

        return (
          <Box
            sx={{
              display: 'flex',
              gap: 1
            }}
          >
            {
              values.map(item => {

                return (
                  <Typography
                    key={item.id}

                    sx={{
                      borderRadius: "15px",
                      backgroundColor: '#e2e8f0',
                      p: 1,
                      color: '#334155'
                    }}
                  >
                    {item.name}
                  </Typography>
                )
              })
            }
          </Box>
        )
      }}


      renderOption={(props, option: IDataItem, { selected }) => {

        const matches = match(option.name, inputValue) || [];
        const parts = parse(option.name, matches);

        return (
          <li {...props} key={option.id}>
            <Grid container alignItems="center" spacing={3}>

              <Grid item sx={{ display: 'flex', width: 44 }}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
              </Grid>

              <Grid item sx={{ display: 'flex', width: 44 }}>
                <img
                  src={option.image ?? ""}
                  style={{
                    borderRadius: 10
                  }}
                />
              </Grid>

              <Grid item sx={{ width: 'calc(100% - 88px)', wordWrap: 'break-word', }}>
                <Stack>

                  <Typography variant="body2" color="text.secondary">
                    {
                      parts.map((part, index) => (
                        <Box
                          key={index}
                          component="span"
                          sx={{
                            fontWeight: part.highlight ? 'bold' : 'regular',
                            color: part.highlight ? '#000' : '#666',
                          }}
                        >
                          {part.text}
                        </Box>
                      ))
                    }
                  </Typography>

                  <Typography variant="subtitle2" color="#334155">
                    {option.episode.length ?? 0} Episodes
                  </Typography>

                </Stack>
              </Grid>
            </Grid>
          </li>
        );
      }}
    />
  );
}
