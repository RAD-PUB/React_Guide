// color list
// basic
// main
// red
// bd-basic
// bd-main
// bd-red

function Pagination(PaginationProps) {
  return (
    <>
      <div className="pagination-wrap">
        <a href="" className="btn btn-page btn-page-icon btn-page-prev">
          <span className="voice-only">이전페이지</span>
        </a>
        <a href="" className={`btn btn-page ${PaginationProps.pageactive == 1 ? 'on' : ''}`}>1</a>
        <a href="" className={`btn btn-page ${PaginationProps.pageactive == 2 ? 'on' : ''}`}>2</a>
        <a href="" className={`btn btn-page ${PaginationProps.pageactive == 3 ? 'on' : ''}`}>3</a>
        <a href="" className={`btn btn-page ${PaginationProps.pageactive == 4 ? 'on' : ''}`}>4</a>
        <a href="" className={`btn btn-page ${PaginationProps.pageactive == 5 ? 'on' : ''}`}>5</a>
        <a href="" className={`btn btn-page ${PaginationProps.pageactive == 6 ? 'on' : ''}`}>6</a>
        <a href="" className={`btn btn-page ${PaginationProps.pageactive == 7 ? 'on' : ''}`}>7</a>
        <a href="" className={`btn btn-page ${PaginationProps.pageactive == 8 ? 'on' : ''}`}>8</a>
        <a href="" className={`btn btn-page ${PaginationProps.pageactive == 9 ? 'on' : ''}`}>9</a>
        <a href="" className={`btn btn-page ${PaginationProps.pageactive == 10 ? 'on' : ''}`}>10</a>
        <a href="" className="btn btn-page btn-page-icon btn-page-next">
          <span className="voice-only">다음페이지</span>
        </a>
      </div>
    </>
  );
}

export default Pagination;
