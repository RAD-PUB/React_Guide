import ButtonLarge from "../button/ButtonLarge";

function TableControlbar() {

  return (
    <>
    <div className="table-container">
      <div className="table-control-wrap flex-btw-wrap">
        <div className="table-control-left">
          <div className="inp-grp">
            <select
              name="selec3"
              id="selec3"
              className="input inp-select with-conts"
            >
              <option value="전체">등록순</option>
            </select>
            <select
              name="selec4"
              id="selec4"
              className="input inp-select with-conts"
            >
              <option value="전체">20개씩</option>
            </select>
          </div>
        </div>
        <div className="table-control-right">
          <div className="btns-wrap">
            <ButtonLarge color="bd-basic">삭제</ButtonLarge>
            <ButtonLarge color="bd-basic" >파일 다운로드</ButtonLarge>
          </div>
        </div>
      </div>
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
              <th className="cell cell-150">일반</th>
              <th className="cell cell-150">일반</th>
              <th className="cell cell-150">일반</th>
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
              <td className="cell cell-150">그냥 일반 셀</td>
              <td className="cell cell-150">그냥 일반 셀</td>
              <td className="cell cell-150">그냥 일반 셀</td>
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

export default TableControlbar;
