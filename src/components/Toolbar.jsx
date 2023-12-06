import '../App.css'

const clickEvent = (event) => {
    const clickElem = event.target;
    clickElem.classList.toggle('toolBar_item_active')
} 

export const Toolbar = (filters, selected) => {
  return (
    <ul className="toolBar_list">
      {filters.map((filter, index) => (
        filter === selected ? 
        <li className="toolBar_item_active" onClick={clickEvent} key={index}>{filter}</li>:
        <li className="toolBar_item" onClick={clickEvent} key={index}>{filter}</li>
      ))}
    </ul>
  );
};