const PaginationInfo = ({ currentPage, itemsPerPage, totalItems }) => {
    // Calculate the range of items currently displayed
    const startIndex = (currentPage - 1) * itemsPerPage + 1;
    const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems);
  
    return (
      <div className="text-sm text-black-500 font-semibold">
        Showing <span className="text-blue-400">{startIndex} - {endIndex} </span> of {totalItems}
      </div>
    );
  };
  export default PaginationInfo;