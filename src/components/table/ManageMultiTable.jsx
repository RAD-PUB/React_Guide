// color list
// basic
// main
// red
// bd-basic
// bd-main
// bd-red

function ManageMultiTable() {
  return (
    <>
    <div className="table-container">
      <div className="table-wrap scroll-custom">
        <table className="manage-table">
          <caption className="voice-only">
            테이블 제목
          </caption>
          <thead>
            <tr className="manage-table-row manage-table-hd">
              <th className="cell cell-division">분류</th>
              <th className="cell cell-division">일반</th>
              <th className="cell cell-division">일반</th>
              <th className="cell cell-division">일반</th>
              <th className="cell cell-date">작성일자</th>
            </tr>
          </thead>
          {/* TODO: 리스트는 한 장에 n개씩 보입니다. */}
          <tbody>
            <tr className="manage-table-row">
              <th scope="row" className="cell cell-division">분류명</th>
              <td className="cell cell-division">일반 셀</td>
              <td className="cell cell-division">일반 셀</td>
              <td className="cell cell-division">일반 셀</td>
              <td className="cell cell-date">2020.02.02</td>
            </tr>
            {/* 두번째 줄 */}
            <tr className="manage-table-row">
              <th scope="row" className="cell cell-division">분류명</th>
              <td className="cell cell-division">일반 셀</td>
              <td className="cell cell-division">일반 셀</td>
              <td className="cell cell-division">일반 셀</td>
              <td className="cell cell-date">2020.02.02</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default ManageMultiTable;
