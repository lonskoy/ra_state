export const Toolbar = ({filters, selected, onClick}) => {
    return(
      <ul className="toolBar_list">
        {filters.map((filter, index) => (<li onClick={() => onClick(filter) } key={index} className={selected === filter ? "toolBar_item_active" : "toolBar_item"}>{filter}</li>))}
      </ul>
    );
}