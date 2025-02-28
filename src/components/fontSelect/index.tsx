import { MenuItem, SelectChangeEvent } from '@mui/material';
import styles from './styles.module.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { StyledForm, StyledLabel, StyledSelect } from './muiStyles';

const FontSelect = () => {
  const options = useMemo(() => {
    return [
      {
        label: 'Open Sans',
        id: 'open-sans-font',
        url: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap',
      },
      {
        label: 'Robato',
        id: 'robato-font',
        url: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      },
      {
        label: 'Oswald',
        id: 'oswald-font',
        url: 'https://fonts.googleapis.com/css2?family=Oswald&display=swap',
      },
      {
        label: 'Smooch Sans',
        id: 'smooch-sans-font',
        url: 'https://fonts.googleapis.com/css2?family=Smooch+Sans&display=swap',
      },
    ];
  }, []);

  const [font, setFont] = useState<(typeof options)[number]>(options[0]);

  useEffect(() => {
    const loadFont = async () => {
      for (const fontData of options) {
        if (!document.head.querySelector(`link#${fontData.id}`)) {
          const link = document.createElement('link') as HTMLLinkElement;
          link.href = fontData.url;
          link.rel = 'stylesheet';
          link.type = 'text/css';
          link.id = fontData.id;
          document.head.appendChild(link);
        }
      }
    };
    loadFont();
  }, [options]);

  const onChangeHandler = useCallback((e: SelectChangeEvent<unknown>) => {
    setFont(JSON.parse(e.target.value as string));
  }, []);

  return (
    <div className={styles.container}>
      <StyledForm>
        <StyledLabel id='font-select-label'>Select Font</StyledLabel>
        <StyledSelect
          labelId='font-select-label'
          id='font-select'
          value={JSON.stringify(font)}
          onChange={onChangeHandler}
          label='Select Font'
          fontFamily={font.label}
        >
          {options.map((o) => (
            <MenuItem
              value={JSON.stringify(o)}
              key={o.url}
              sx={{ fontFamily: o.label, fontWeight: 700 }}
            >
              {o.label}
            </MenuItem>
          ))}
        </StyledSelect>
      </StyledForm>
    </div>
  );
};

export default FontSelect;
