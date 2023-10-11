import { FC, PropsWithChildren } from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import './filter-option.styles.scss'


interface Props extends PropsWithChildren {
    isSelected: boolean;
    onSelect: () => void
}
const FilterOptionComponent: FC<Props> = ({isSelected,  onSelect, children}) => {

  return (
    <div>
      <div className="filter_option" onClick={()=>{onSelect()}}>
        {isSelected? <MdCheckBox size={20}/> : <MdCheckBoxOutlineBlank size={20}/>}
          <div className="option_title">
            {children}
          </div>
        </div>
    </div>
  )
}

export default FilterOptionComponent