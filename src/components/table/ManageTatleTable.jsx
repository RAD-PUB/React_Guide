// color list
// basic
// main
// red
// bd-basic
// bd-main
// bd-red

function ManageTatleTable() {
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
              <th className="cell cell-chck">
                <div className="inp-grp">
                  <input
                    type="checkbox"
                    id="chck-all"
                    name="chck-all"
                    className="inp-chck d-none"
                  />
                  <label htmlFor="chck-all" className="chck-icon">전체선택</label>
                </div>
              </th>
              <th className="cell cell-80">NO</th>
              <th className="cell cell-150">이름</th>
              <th className="cell cell-ttl">제목</th>
              <th className="cell cell-150">작성일자</th>
              <th className="cell cell-120">상세보기</th>
            </tr>
          </thead>
          {/* TODO: 리스트는 한 장에 n개씩 보입니다. */}
          <tbody>
            <tr className="manage-table-row">
              <td className="cell cell-chck">
                <div className="inp-grp">
                  <input
                    type="checkbox"
                    id="chck1"
                    name="chck1"
                    className="inp-chck d-none"
                  />
                  <label htmlFor="chck1" className="chck-icon">선택</label>
                </div>
              </td>
              <td className="cell cell-80">5</td>
              <td className="cell cell-150">홍길동</td>
              <td className="cell cell-ttl">제목이 들어갑니다 아주 아주 길게 들어갑니다 그러면 이렇게 말줄임표로 되지요 말줄임표는 전부 볼 수 있어야 하니 보기버튼을 추가해야겠구나제목이 들어갑니다 아주 아주 길게 들어갑니다 그러면 이렇게 말줄임표로 되지요 말줄임표는 전부 볼 수 있어야 하니 보기버튼을 추가해야겠구나</td>
              <td className="cell cell-150">2020.02.02</td>
              <td className="cell cell-120"><a href="">자세히 보기</a></td>
            </tr>
            {/* 두번째 줄 */}
            <tr className="manage-table-row">
              <td className="cell cell-chck">
                <div className="inp-grp">
                  <input
                    type="checkbox"
                    id="chck1"
                    name="chck1"
                    className="inp-chck d-none"
                  />
                  <label htmlFor="chck1" className="chck-icon">선택</label>
                </div>
              </td>
              <td className="cell cell-80">5</td>
              <td className="cell cell-150">홍길동</td>
              <td className="cell cell-ttl">제목들어갑니다아주아주길게들어갑니다그러면이렇게말줄임표로되지요말줄임표는전부볼수있어야하니보기버튼을추가해야겠구나띄어쓰기없음제목들어갑니다아주아주길게들어갑니다그러면이렇게말줄임표로되지요말줄임표는전부볼수있어야하니보기버튼을추가해야겠구나띄어쓰기없음</td>
              <td className="cell cell-150">2020.02.02</td>
              <td className="cell cell-120"><a href="">자세히 보기</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default ManageTatleTable;
