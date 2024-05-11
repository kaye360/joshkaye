
type TextInputs = 'textarea' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week'

type NonTextInputs = 'checkbox' | 'color' | 'file' | 'image' | 'radio' | 'range' | 'reset' | 'select'

interface BaseFormFieldProps {

    /** <label> title and <input>, <textarea> name, id (toLowerCase) */
    name : string,

    /** Label title if name and label need to be different */
    label? : string,

    /** Required Field */
    required? : boolean,
    
    /**
     * @prop name - string
     * @prop label - string (optional)
     * @prop required - boolean (Default false)
     * @prop type - 'HTMLInputType' | 'textarea'
     */
     props? : true,
}

export interface TextInput extends BaseFormFieldProps {
    type : TextInputs,
}

export interface NonTextInput extends BaseFormFieldProps {
    type : NonTextInputs,
}
