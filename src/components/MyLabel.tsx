import './mylabel.css';

export interface MyLabelProps {
    /**
    * This is the message to show in the label
    */
    label: string;
    /**
    * How large should the label be?
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * If true, the label will be all caps
     */
    allCaps?: boolean;
    /**
     * What color should the label be?
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * What color should the label be?
     */
    fontColor?: string;
    /**
     * What color background color should the label have?
     */
    backgroundColor?: string;

}


export const MyLabel = ({
    allCaps = false,
    color = 'primary',
    label = 'No label',
    size = 'normal',
    fontColor = 'black',
    backgroundColor = 'transparent'
}: MyLabelProps) => {

    const labelMode = allCaps ? label.toUpperCase() : label;

    return (
        <span className={`label ${size} text-${color}`} style={ {color : fontColor, backgroundColor}}>
            {labelMode}
        </span>
    )
}

export default MyLabel;
