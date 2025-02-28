import { FormControl, InputLabel, Select, styled } from '@mui/material';

const StyledForm = styled(FormControl)(() => ({
  width: '18rem',

  ':hover': { '.MuiInputLabel-root': { color: 'cyan' } },
}));

const StyledLabel = styled(InputLabel)(() => ({
  color: 'wheat',
  '&.Mui-focused': { color: 'whitesmoke' },
}));

const StyledSelect = styled(Select, {
  shouldForwardProp: (p) => p !== 'fontFamily',
})<{ fontFamily: string }>(({ fontFamily }) => ({
  '.MuiInputBase-input': { color: 'wheat', fontFamily },

  '.MuiOutlinedInput-notchedOutline': {
    borderColor: 'wheat',
  },
  '.MuiSvgIcon-root': { color: 'wheat' },

  '&.Mui-focused': {
    '.MuiInputBase-input, .MuiSvgIcon-root': { color: 'whitesmoke' },
    '.MuiOutlinedInput-notchedOutline': { borderColor: 'whitesmoke' },
  },

  '&:hover': {
    '.MuiInputBase-input, .MuiSvgIcon-root': { color: 'cyan' },
    '.MuiOutlinedInput-notchedOutline': { borderColor: 'cyan' },
  },
}));

export { StyledForm, StyledLabel, StyledSelect };
