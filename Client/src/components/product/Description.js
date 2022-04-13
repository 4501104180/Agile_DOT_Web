import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import Title from '../Title';
import ToggleShowAll from '../ToggleShowAll';

const Description = ({ description }) => (
    <>
        <Title>Product descriptions</Title>
        <ToggleShowAll>
            <Content dangerouslySetInnerHTML={{__html: description}} />
        </ToggleShowAll>
    </>
);

const Content = styled('div')({
    padding: '10px',
    marginBottom: '20px',
    maxHeight: '400px',
    overflow: 'hidden',
    transition: 'all 0.5s',
});

export default Description;