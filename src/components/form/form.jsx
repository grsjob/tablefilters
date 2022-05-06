import React from 'react';
import InputFilter from '../input/inputfilter'
import ColumsFilter from "../columsFilter/columsfilter";
import ValueFilter from "../valueFilter/valuefilter";


const Form = () => {
    return (
        <form>
            <fieldset>
                <InputFilter/>
                <ColumsFilter/>
                <ValueFilter/>
            </fieldset>
        </form>
    );
};

export default Form;
